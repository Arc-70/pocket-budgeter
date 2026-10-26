# Pocket Budget

A personal budget tracker that runs entirely in your browser. No server, no account, no cost.
Your data is saved on the device you use it on and never leaves it unless you save a backup file.

**What's inside**

- **Today:** how much you have left to spend today. Each morning it takes what's left of the month's budget and divides it
  by the days left (including today), then subtracts what you've logged today.
- **Monthly plan:** a spending budget split into Need/Want categories, plus fixed costs (rent, phone…) you tick off as paid.
  A plan carries into the following months until you change it; earlier months keep their own plan.
- **Quick logging:** spending, refunds and Zero Days (days you spent nothing). After adding, editing or deleting an entry,
  tap **Undo** in the message at the bottom to reverse it; to fix an older entry, tap it to edit or delete it.
- **Cash in hand:** a running balance of the money you actually have (see below).
- **Stats:** where it went, needs vs wants, budget vs actual, and your running daily average against your target.
- Dark, light or automatic theme.

On first open the app asks for your currency, your monthly spending budget and, optionally, your cash amounts.
It starts you with four empty categories (Groceries, Transport, Eating out, Other) that you can rename, delete or add to under **Edit plan**.

## How cash works

You can get money in two independent ways, and you can use either or both:

- **A:** a set amount on the 1st of every month.
- **B:** a set amount every 7 days, counted from any date you got a B payment.

**Cash in hand** = your starting cash balance + every A and B payment since its date − everything you've logged since.
It's one running balance, so money you don't spend in one month carries into the next.
Because B comes weekly, some months have 5 B payments instead of 4; the Cash tab shows these, and the next three months.

Fixed costs are treated as paid from somewhere else, so they don't come out of your cash. They do show up in the monthly plan:
*income (A + B) − fixed costs − spending budget = left to save.*

On days an A or B payment is due, Home shows a **Top-up day** note.

Set your starting cash balance (and the date it applies to) and the A and B amounts in **Settings → Money**, or from **Edit balance & amounts** on the Cash tab.
Leave the balance and both amounts blank to stop tracking cash.

The app takes today's date from your phone's clock, in your local time zone. If it's left open past midnight, it moves on to the new day by itself.

## Hosting it (GitHub Pages)

This repository is already set up to be served as-is: there is no build step.

1. In the repository on GitHub, go to **Settings → Pages**.
2. Under **Branch**, choose `main` and `/ (root)`, then **Save**.
3. After a minute the app is live at `https://<your-username>.github.io/pocket-budgeter/`.

The repository is public, which means the app's *code* is visible. Your budget data is not: it's stored only on your device.

## Add it to your home screen

Do this so it opens like a normal app and works offline.

- **iPhone (Safari):** open the link → Share button → **Add to Home Screen**.
- **Android (Chrome):** open the link → ⋮ menu → **Add to Home screen** / **Install app**.

On iPhone this matters: Safari can clear a website's saved data if you don't visit it for a few weeks,
but apps added to the home screen are kept.

## Backups and using it on another device

Everything lives on the device, so there's no automatic syncing between phone and PC.

- **Back up:** Settings → **Save backup**. On a phone this opens the share sheet, so you can save it to Files or Google Drive, or send it to yourself.
  The app reminds you if you haven't backed up in 30 days.
- **Move to another device:** open the app there, then Settings → **Restore…** and pick the backup file.
  Restoring replaces whatever was on that device. Backups from older versions of the app are upgraded when you restore them.

## Updating the app

Push or upload the changed files to `main`; GitHub Pages republishes them. Your data on the device is not touched.

Whenever you change any file, also bump `VERSION` in `sw.js` (for example from `pocket-budget-v8` to `pocket-budget-v9`) so devices pick up the new version.
When you're online the app always loads the newest version, so the update shows the next time you open it.
If a home-screen app was only in the background, close it fully first. Settings shows which version is running.

## Files

| File | What it is |
|---|---|
| `index.html` | The whole app: styles, markup and script |
| `sw.js` | Service worker that caches the app so it works offline |
| `manifest.webmanifest` | Name, colours and icons used when it's installed to a home screen |
| `icon*.png`, `icon.svg` | App icons |
