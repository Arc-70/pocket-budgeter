# Pocket Budget

A personal budget tracker that runs entirely in your phone's browser. No server, no account, no cost.
Your data is saved on the device you use it on, and never leaves it unless you save a backup file.

**What's inside:** a monthly plan (fixed costs, a spending budget, Need/Want categories) that carries over every 1st;
quick logging with refunds and Zero Days; a cash schedule (A on the 1st, B every 7 days, next-B countdown, 5-payment months);
stats (where it went, needs vs wants, budget vs actual, daily average vs target); and an optional game mode
(under-budget streak, levels, weekly stars, achievements). Dark, light or automatic theme in Settings.

## Put it online for free (GitHub Pages)

You only do this once. It works from a phone browser, but it's quicker on a PC.

1. Unzip `pocket-budget.zip` (on iPhone: tap it in the Files app; on Android: open it in Files and choose Extract).
2. Create a free account at **github.com**.
3. Tap **+** → **New repository**. Name it `pocket-budget`, leave it **Public**, and tap **Create repository**.
4. Tap **uploading an existing file** (or **Add file → Upload files**), select all the files from the unzipped folder
   (`index.html`, `manifest.webmanifest`, `sw.js` and the icon files), then tap **Commit changes**.
5. Go to the repository's **Settings → Pages**. Under **Branch**, choose `main` and `/ (root)`, then **Save**.
6. After a minute your app is live at `https://<your-username>.github.io/pocket-budget/`.

The repository is public, which means the app's *code* is visible. Your budget data is not: it's stored only on your phone.

## Add it to your home screen

Do this so it opens like a normal app and works offline.

- **iPhone (Safari):** open the link → Share button → **Add to Home Screen**.
- **Android (Chrome):** open the link → ⋮ menu → **Add to Home screen** / **Install app**.

On iPhone this step matters: Safari can clear a website's saved data if you don't visit it for a few weeks,
but apps added to the home screen are kept.

## Backups and using it on your PC

Everything lives on the device, so there's no automatic syncing between phone and PC.

- **Back up:** Settings → **Save backup file**. On a phone this opens the share sheet, so you can save it to Files, Google Drive, or send it to yourself.
  The app reminds you if you haven't backed up in 30 days.
- **Move to another device:** open the app there, then Settings → **Restore…** and pick the backup file.
  Restoring replaces whatever was on that device.

## Updating the app

To install a new version, upload the changed files to the same repository (**Add file → Upload files**, then **Commit changes**);
files with the same name are replaced. Your data on the phone is not touched.

If you change any file yourself, also change `VERSION` in `sw.js` (for example to `pocket-budget-v2`) so phones pick up the new version.
Open the app twice after updating: the first open downloads the update, the second shows it.
