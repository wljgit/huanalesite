"""Composite timeline + reports screenshots into a Hero-style stacked preview."""

from pathlib import Path

from PIL import Image, ImageDraw, ImageFilter

ROOT = Path(__file__).resolve().parents[1] / "public" / "screenshots"


def round_corners(im: Image.Image, radius: int) -> Image.Image:
    im = im.convert("RGBA")
    mask = Image.new("L", im.size, 0)
    draw = ImageDraw.Draw(mask)
    draw.rounded_rectangle((0, 0, im.width, im.height), radius=radius, fill=255)
    out = im.copy()
    out.putalpha(mask)
    return out


def add_shadow(
    im: Image.Image, offset=(0, 18), blur=28, opacity=55
) -> tuple[Image.Image, int]:
    pad = blur * 2 + max(abs(offset[0]), abs(offset[1])) + 8
    canvas = Image.new("RGBA", (im.width + pad * 2, im.height + pad * 2), (0, 0, 0, 0))
    shadow = Image.new("RGBA", im.size, (0, 0, 0, opacity))
    shadow.putalpha(im.split()[-1].point(lambda a: min(a, opacity)))
    shadow = shadow.filter(ImageFilter.GaussianBlur(blur))
    canvas.paste(shadow, (pad + offset[0], pad + offset[1]), shadow)
    canvas.paste(im, (pad, pad), im)
    return canvas, pad


def stroke(im: Image.Image, radius: int, color=(0, 0, 0, 28), width=2) -> Image.Image:
    layer = Image.new("RGBA", im.size, (0, 0, 0, 0))
    draw = ImageDraw.Draw(layer)
    draw.rounded_rectangle(
        (0, 0, im.width - 1, im.height - 1), radius=radius, outline=color, width=width
    )
    return Image.alpha_composite(im, layer)


def fit_w(im: Image.Image, width: int) -> Image.Image:
    height = int(round(im.height * (width / im.width)))
    return im.resize((width, height), Image.Resampling.LANCZOS)


def make_stack(back_path: Path, front_path: Path, out_path: Path) -> None:
    back = Image.open(back_path).convert("RGBA")
    front = Image.open(front_path).convert("RGBA")

    card_w = max(back.width, front.width)
    back = fit_w(back, card_w)
    front = fit_w(front, card_w)

    radius = max(12, card_w // 90)
    back = stroke(round_corners(back, radius), radius)
    front = stroke(round_corners(front, radius), radius)

    # Match Hero.astro: each card ~78% of stack width; aspect-ratio 1.28 / 1;
    # back top-left; front bottom-right with translateY(-6%).
    stack_w = int(round(card_w / 0.78))
    stack_h = max(
        int(round(stack_w / 1.28)),
        back.height,
        int(round(1.06 * front.height)),
    )

    margin = 40
    canvas = Image.new(
        "RGBA", (stack_w + margin * 2, stack_h + margin * 2), (0, 0, 0, 0)
    )

    back_x, back_y = margin, margin
    front_x = margin + (stack_w - card_w)
    front_y = margin + int(round(stack_h - front.height - 0.06 * front.height))

    for card, x, y in ((back, back_x, back_y), (front, front_x, front_y)):
        shadowed, pad = add_shadow(card)
        canvas.alpha_composite(shadowed, (x - pad, y - pad))

    bbox = canvas.getbbox()
    if bbox:
        left, top, right, bottom = bbox
        pad_out = 12
        canvas = canvas.crop(
            (
                max(0, left - pad_out),
                max(0, top - pad_out),
                min(canvas.width, right + pad_out),
                min(canvas.height, bottom + pad_out),
            )
        )

    bg = Image.new("RGB", canvas.size, (255, 255, 255))
    bg.paste(canvas, mask=canvas.split()[-1])
    bg.save(out_path, "PNG", optimize=True)
    print(f"wrote {out_path} {bg.size}")


if __name__ == "__main__":
    make_stack(ROOT / "en-timeline.png", ROOT / "en-reports.png", ROOT / "en-hero-stack.png")
    make_stack(ROOT / "zh-timeline.png", ROOT / "zh-reports.png", ROOT / "zh-hero-stack.png")
