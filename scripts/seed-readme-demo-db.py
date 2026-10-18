"""Sanitize the live huanale DB for README / site screenshots.

Quit the app first. Backup %APPDATA%/huanale/ (db + crypto), run this, shoot,
then restore the backup. Do not commit any resulting .db — see scripts/readme-demo/README.md.

Demo settings use empty API keys and fake device ids only.
"""

from __future__ import annotations

import argparse
import json
import os
import shutil
import sqlite3
import uuid
from datetime import datetime, timedelta, timezone
from pathlib import Path

DATA = Path(os.environ["APPDATA"]) / "huanale"
DB = DATA / "huanale.db"
CRYPTO = DATA / "crypto"
CRYPTO_ASIDE = DATA / "crypto.__aside_for_readme_shot"

# Fake IDs — not the user's real device ids
WIN_ID = "a1b2c3d4-e5f6-7890-abcd-ef1234567890"
MAC_ID = "f6e5d4c3-b2a1-0987-dcba-fe0987654321"
TZ = timezone(timedelta(hours=8))
# Use "today" so Timeline/Reports default filters show the demo without UI date-picking.
DAY = datetime.now(TZ).date().isoformat()
_DAY_Y, _DAY_M, _DAY_D = (int(x) for x in DAY.split("-"))


def ts(h: int, m: int, s: int = 0) -> str:
    return datetime(_DAY_Y, _DAY_M, _DAY_D, h, m, s, tzinfo=TZ).isoformat()


def utc_now_iso() -> str:
    return datetime.now(timezone.utc).isoformat()


def segment(
    start: str,
    end: str,
    kind: str,
    app: str | None,
    title: str | None,
    device_id: str,
    platform: str,
) -> tuple:
    return (
        start,
        end,
        kind,
        app,
        title,
        device_id,
        platform,
        "window",
        utc_now_iso(),
        str(uuid.uuid4()),
        1,
    )


def build_segments() -> list[tuple]:
    """Plausible multi-device evening on DAY — generic app names."""
    rows: list[tuple] = []
    # Windows focus blocks
    rows.append(
        segment(
            ts(19, 30),
            ts(19, 45),
            "focus",
            "Code.exe",
            "readme-shots — seed demo data",
            WIN_ID,
            "windows",
        )
    )
    rows.append(
        segment(
            ts(19, 45),
            ts(19, 52),
            "focus",
            "chrome.exe",
            "Astro docs — Routing",
            WIN_ID,
            "windows",
        )
    )
    rows.append(
        segment(ts(19, 52), ts(20, 5), "away", None, None, WIN_ID, "windows")
    )
    rows.append(
        segment(
            ts(20, 5),
            ts(20, 22),
            "focus",
            "Slack.exe",
            "#engineering — daily notes",
            WIN_ID,
            "windows",
        )
    )
    rows.append(
        segment(
            ts(20, 22),
            ts(20, 40),
            "focus",
            "Notion.exe",
            "Weekly planning",
            WIN_ID,
            "windows",
        )
    )
    rows.append(
        segment(
            ts(20, 40),
            ts(20, 55),
            "focus",
            "chrome.exe",
            "RFC draft — local-first sync",
            WIN_ID,
            "windows",
        )
    )
    # macOS overlapping evening
    rows.append(
        segment(
            ts(20, 10),
            ts(20, 18),
            "focus",
            "Terminal",
            "zsh — huanale",
            MAC_ID,
            "macos",
        )
    )
    rows.append(
        segment(
            ts(20, 18),
            ts(20, 28),
            "focus",
            "Safari",
            "MDN — Fetch API",
            MAC_ID,
            "macos",
        )
    )
    rows.append(
        segment(ts(20, 28), ts(20, 35), "away", None, None, MAC_ID, "macos")
    )
    rows.append(
        segment(
            ts(20, 35),
            ts(20, 50),
            "focus",
            "Notes",
            "Ship checklist",
            MAC_ID,
            "macos",
        )
    )
    # earlier afternoon for richer reports
    rows.append(
        segment(
            ts(14, 0),
            ts(15, 20),
            "focus",
            "Notion.exe",
            "Project board",
            WIN_ID,
            "windows",
        )
    )
    rows.append(
        segment(
            ts(15, 20),
            ts(16, 0),
            "focus",
            "chrome.exe",
            "Design references",
            WIN_ID,
            "windows",
        )
    )
    rows.append(
        segment(ts(16, 0), ts(16, 30), "away", None, None, WIN_ID, "windows")
    )
    rows.append(
        segment(
            ts(16, 30),
            ts(17, 45),
            "focus",
            "Code.exe",
            "timeline lanes — polish",
            WIN_ID,
            "windows",
        )
    )
    rows.append(
        segment(
            ts(10, 0),
            ts(10, 40),
            "focus",
            "Safari",
            "Docs index",
            MAC_ID,
            "macos",
        )
    )
    rows.append(
        segment(
            ts(10, 40),
            ts(11, 10),
            "focus",
            "Mail",
            "Inbox",
            MAC_ID,
            "macos",
        )
    )
    return rows


def digest_body() -> str:
    payload = {
        "date": DAY,
        "periods": {
            "morning": {
                "bullets": [
                    "Read docs in Safari and cleared mail on Mac",
                ]
            },
            "afternoon": {
                "bullets": [
                    "Planned the week in Notion",
                    "Browsed design references in Chrome",
                    "Polished timeline lanes in VS Code",
                ]
            },
            "evening": {
                "bullets": [
                    "Synced notes over Slack",
                    "Sketched an RFC draft in the browser",
                    "Checked checklist in Notes on Mac",
                ]
            },
        },
        "provider": "local",
        "generatedAt": ts(21, 0),
    }
    return json.dumps(payload, ensure_ascii=False)


def exchange_log() -> list[dict]:
    base = datetime(_DAY_Y, _DAY_M, _DAY_D, 21, 5, tzinfo=TZ)
    entries = []
    for mins_ago, by, sent, recv, outcome in [
        (0, "local", 42, 8, "success"),
        (18, "peer", 8, 41, "success"),
        (55, "local", 40, 6, "success"),
        (130, "peer", 5, 38, "success"),
        (400, "local", 36, 4, "success"),
    ]:
        at = (base - timedelta(minutes=mins_ago)).astimezone(timezone.utc)
        entries.append(
            {
                "at": at.isoformat(),
                "peerDeviceId": MAC_ID,
                "peerPlatform": "macos",
                "sent": sent,
                "receivedInserted": recv,
                "receivedReplaced": 0,
                "receivedSkipped": 3,
                "deferredLocked": 0,
                "receivedNew": recv,
                "acked": sent,
                "peerInserted": max(1, recv // 2),
                "peerReplaced": 0,
                "peerSkipped": 10,
                "peerDeferred": 0,
                "historyOmitted": False,
                "outcome": outcome,
                "initiatedBy": by,
            }
        )
    return entries


def apply_settings(conn: sqlite3.Connection, locale: str) -> None:
    paired_at = (
        datetime(_DAY_Y, _DAY_M, _DAY_D, 12, 0, tzinfo=TZ) - timedelta(days=1)
    ).astimezone(timezone.utc).isoformat()
    last_at = datetime(_DAY_Y, _DAY_M, _DAY_D, 21, 5, tzinfo=TZ).astimezone(
        timezone.utc
    ).isoformat()
    settings = {
        "device_id": WIN_ID,
        "ui_locale": locale,
        "capture_enabled": "false",
        "min_focus_secs": "10",
        "idle_threshold_secs": "180",
        "lane_bridge_secs": "120",
        "lane_named_top_k": "3",
        "privacy_enabled": "false",
        "privacy_seal_hour": "0",
        "privacy_seal_minute": "0",
        "privacy_auto_lock_secs": "300",
        "ai_provider": "local",
        "ai_local_base_url": "http://127.0.0.1:1234/v1",
        "ai_local_model": "local-model",
        "ai_local_api_key": "",
        "ai_claude_api_key": "",
        "ai_claude_model": "",
        "ai_deepseek_api_key": "",
        "ai_deepseek_model": "deepseek-chat",
        "ai_send_titles": "true",
        "app_blacklist": json.dumps(["huanale", "PotPlayerMini64"]),
        "sync_enabled": "1",
        "sync_last_error": "",
        "sync_last_at": last_at,
        "sync_peers": json.dumps(
            [{"deviceId": MAC_ID, "pairedAt": paired_at}], ensure_ascii=False
        ),
        "sync_peer_state": json.dumps(
            [
                {
                    "deviceId": MAC_ID,
                    "platform": "macos",
                    "lastExchangeAt": last_at,
                    "lastReceivedNew": 8,
                    "lastReceivedSkipped": 3,
                    "lastAckedCount": 42,
                    "lastSentCount": 42,
                    "lastHistoryOmitted": False,
                    "everFullSync": True,
                }
            ],
            ensure_ascii=False,
        ),
        "sync_exchange_log": json.dumps(exchange_log(), ensure_ascii=False),
    }
    for key, value in settings.items():
        conn.execute(
            "INSERT INTO settings(key, value) VALUES(?, ?) "
            "ON CONFLICT(key) DO UPDATE SET value=excluded.value",
            (key, value),
        )


def seed_db_file(db_path: Path, locale: str) -> None:
    conn = sqlite3.connect(db_path)
    try:
        conn.execute("DELETE FROM segments")
        conn.execute("DELETE FROM digests")
        conn.execute("DELETE FROM activity_notes")
        conn.execute("DELETE FROM sealed_days")
        conn.execute("DELETE FROM segment_tombstones")

        conn.executemany(
            """
            INSERT INTO segments(
              start_ts, end_ts, kind, app, title, device_id, platform,
              source, created_at, sync_uid, revision
            ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
            """,
            build_segments(),
        )
        conn.execute(
            "INSERT INTO digests(day, body, updated_at) VALUES (?, ?, ?)",
            (DAY, digest_body(), utc_now_iso()),
        )
        apply_settings(conn, locale)
        conn.commit()
    finally:
        conn.close()


def main() -> None:
    ap = argparse.ArgumentParser(description=__doc__)
    ap.add_argument(
        "--locale",
        default=os.environ.get("HUANALE_SHOT_LOCALE", "zh-CN"),
        help="ui_locale for demo settings (zh-CN or en)",
    )
    args = ap.parse_args()
    locale = args.locale

    if not DB.exists():
        raise SystemExit(f"missing DB: {DB}")

    # Move crypto aside so privacy UI stays off / no unlock prompts
    if CRYPTO.exists():
        if CRYPTO_ASIDE.exists():
            shutil.rmtree(CRYPTO_ASIDE)
        CRYPTO.rename(CRYPTO_ASIDE)
        print(f"moved crypto -> {CRYPTO_ASIDE}")

    seed_db_file(DB, locale)
    print(f"seeded live demo DB locale={locale} day={DAY}")
    print(f"win={WIN_ID} mac={MAC_ID}")
    print("restore your backup (db + crypto) after screenshots")


if __name__ == "__main__":
    main()
