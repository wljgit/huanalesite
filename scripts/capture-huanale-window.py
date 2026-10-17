"""Resize huanale client to 1480x1120 and capture client area PNG."""

from __future__ import annotations

import argparse
import ctypes
import sys
import time
from ctypes import wintypes
from pathlib import Path

user32 = ctypes.windll.user32
gdi32 = ctypes.windll.gdi32

PW_RENDERFULLCONTENT = 2
SW_RESTORE = 9
SRCCOPY = 0x00CC0020


class RECT(ctypes.Structure):
    _fields_ = [
        ("left", ctypes.c_long),
        ("top", ctypes.c_long),
        ("right", ctypes.c_long),
        ("bottom", ctypes.c_long),
    ]


class POINT(ctypes.Structure):
    _fields_ = [("x", ctypes.c_long), ("y", ctypes.c_long)]


def find_huanale_hwnd() -> int:
    """Resolve via process MainWindowHandle — avoid matching Cursor titles."""
    import subprocess

    ps = (
        "(Get-Process huanale -ErrorAction Stop |"
        " Where-Object { $_.MainWindowHandle -ne 0 } |"
        " Select-Object -First 1 -ExpandProperty MainWindowHandle)"
    )
    out = subprocess.check_output(
        ["powershell", "-NoProfile", "-Command", ps], text=True
    ).strip()
    if not out:
        raise SystemExit("huanale window not found")
    return int(out)


def client_size(hwnd: int) -> tuple[int, int]:
    rc = RECT()
    user32.GetClientRect(hwnd, ctypes.byref(rc))
    return rc.right - rc.left, rc.bottom - rc.top


def resize_client(hwnd: int, width: int, height: int) -> None:
    if user32.IsIconic(hwnd):
        user32.ShowWindow(hwnd, SW_RESTORE)
    # Convert desired client size to outer window size
    style = user32.GetWindowLongW(hwnd, -16)  # GWL_STYLE
    ex_style = user32.GetWindowLongW(hwnd, -20)  # GWL_EXSTYLE
    rc = RECT(0, 0, width, height)
    user32.AdjustWindowRectEx(ctypes.byref(rc), style, False, ex_style)
    outer_w = rc.right - rc.left
    outer_h = rc.bottom - rc.top
    # Keep current top-left
    wr = RECT()
    user32.GetWindowRect(hwnd, ctypes.byref(wr))
    user32.SetWindowPos(hwnd, 0, wr.left, wr.top, outer_w, outer_h, 0x0040)  # SWP_SHOWWINDOW
    time.sleep(0.35)
    cw, ch = client_size(hwnd)
    print(f"client now {cw}x{ch} (target {width}x{height})")


def capture_client(hwnd: int, out: Path) -> None:
    """PrintWindow full frame (works with WebView2), then crop to client."""
    from PIL import Image

    user32.SetForegroundWindow(hwnd)
    time.sleep(0.35)

    wr = RECT()
    user32.GetWindowRect(hwnd, ctypes.byref(wr))
    ww, wh = wr.right - wr.left, wr.bottom - wr.top
    cw, ch = client_size(hwnd)

    pt = POINT(0, 0)
    user32.ClientToScreen(hwnd, ctypes.byref(pt))
    left = pt.x - wr.left
    top = pt.y - wr.top

    hdc_screen = user32.GetDC(0)
    hdc_mem = gdi32.CreateCompatibleDC(hdc_screen)
    hbmp = gdi32.CreateCompatibleBitmap(hdc_screen, ww, wh)
    gdi32.SelectObject(hdc_mem, hbmp)
    ok = user32.PrintWindow(hwnd, hdc_mem, PW_RENDERFULLCONTENT)
    if not ok:
        gdi32.DeleteObject(hbmp)
        gdi32.DeleteDC(hdc_mem)
        user32.ReleaseDC(0, hdc_screen)
        raise SystemExit("PrintWindow failed")

    class BITMAPINFOHEADER(ctypes.Structure):
        _fields_ = [
            ("biSize", wintypes.DWORD),
            ("biWidth", ctypes.c_long),
            ("biHeight", ctypes.c_long),
            ("biPlanes", wintypes.WORD),
            ("biBitCount", wintypes.WORD),
            ("biCompression", wintypes.DWORD),
            ("biSizeImage", wintypes.DWORD),
            ("biXPelsPerMeter", ctypes.c_long),
            ("biYPelsPerMeter", ctypes.c_long),
            ("biClrUsed", wintypes.DWORD),
            ("biClrImportant", wintypes.DWORD),
        ]

    class BITMAPINFO(ctypes.Structure):
        _fields_ = [("bmiHeader", BITMAPINFOHEADER), ("bmiColors", wintypes.DWORD * 3)]

    bmi = BITMAPINFO()
    bmi.bmiHeader.biSize = ctypes.sizeof(BITMAPINFOHEADER)
    bmi.bmiHeader.biWidth = ww
    bmi.bmiHeader.biHeight = -wh
    bmi.bmiHeader.biPlanes = 1
    bmi.bmiHeader.biBitCount = 32
    bmi.bmiHeader.biCompression = 0

    buf = (ctypes.c_ubyte * (ww * wh * 4))()
    gdi32.GetDIBits(hdc_mem, hbmp, 0, wh, buf, ctypes.byref(bmi), 0)
    gdi32.DeleteObject(hbmp)
    gdi32.DeleteDC(hdc_mem)
    user32.ReleaseDC(0, hdc_screen)

    full = Image.frombuffer("RGBA", (ww, wh), bytes(buf), "raw", "BGRA", 0, 1)
    client = full.crop((left, top, left + cw, top + ch)).convert("RGB")
    if client.size != (1480, 1120):
        print(f"resized capture {client.size} -> 1480x1120")
        client = client.resize((1480, 1120), Image.Resampling.LANCZOS)
    out.parent.mkdir(parents=True, exist_ok=True)
    client.save(out, "PNG", optimize=True)
    print(f"wrote {out} {client.size}")


def click_client(hwnd: int, x: int, y: int) -> None:
    """Click client coordinates (physical pixels)."""
    pt = POINT(x, y)
    user32.ClientToScreen(hwnd, ctypes.byref(pt))
    user32.SetForegroundWindow(hwnd)
    time.sleep(0.15)
    user32.SetCursorPos(pt.x, pt.y)
    time.sleep(0.05)
    user32.mouse_event(0x0002, 0, 0, 0, 0)  # LEFTDOWN
    user32.mouse_event(0x0004, 0, 0, 0, 0)  # LEFTUP
    time.sleep(0.4)


def main() -> None:
    ap = argparse.ArgumentParser()
    ap.add_argument("--out", type=Path, required=True)
    ap.add_argument("--width", type=int, default=1480)
    ap.add_argument("--height", type=int, default=1120)
    ap.add_argument("--click", nargs=2, type=int, metavar=("X", "Y"))
    ap.add_argument("--no-resize", action="store_true")
    ap.add_argument("--wait", type=float, default=0.5)
    args = ap.parse_args()

    hwnd = find_huanale_hwnd()
    print(f"hwnd={hwnd}")
    if not args.no_resize:
        resize_client(hwnd, args.width, args.height)
    if args.click:
        click_client(hwnd, args.click[0], args.click[1])
        time.sleep(args.wait)
    time.sleep(args.wait)
    capture_client(hwnd, args.out)


if __name__ == "__main__":
    main()
