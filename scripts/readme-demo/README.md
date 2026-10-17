# Screenshot workflow (scripts only — no demo DB in git)

**Do not commit any `huanale.db` here.** Demo data is produced on the machine from the live DB at shot time.

## Flow

1. Quit 花哪了.
2. Backup live `%APPDATA%/huanale/` (`huanale.db` + `crypto/`).
3. Sanitize the live DB in place:
   ```bash
   python scripts/seed-readme-demo-db.py --locale zh-CN
   # or --locale en
   ```
   This replaces segments/settings with fake ids / apps / times, moves `crypto/` aside, clears API keys in the shot copy.
4. Launch the app, capture at **1480×1120** with `scripts/capture-huanale-window.py`.
5. Restore the live backup (db + crypto) and relaunch.

Optional: rebuild hero stack with `scripts/make-hero-stack.py` after replacing timeline/reports shots.

## Why no fixture DB in the repo

Uploading a copied SQLite file is easy to get wrong (deleted pages can still hold old data until `VACUUM`). Safer to keep only scripts and always derive a temporary sanitized DB from the current install when shooting.
