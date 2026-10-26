# Pocket Budget

A personal budget tracker that runs entirely in your browser. No server, no account, no cost.
Your data is saved on the device you use it on and never leaves it unless you save a backup file.

**What's inside**

- **Spending pool:** how much you can spend right now (see below).
- **Monthly budget:** worked out from your payments, **A + B × days in the month ÷ 7** (the same daily rate as the spending pool),
  so it follows the length of each month. In **Edit plan** you can switch to **Set my own** and type an amount instead.
- **Monthly plan:** a spending budget split into Need/Want categories, plus fixed costs (rent, phone…) you tick off as paid.
  A plan carries into the following months until you change it; earlier months keep their own plan.
- **Quick logging:** spending, refunds and Zero Days (days you spent nothing). After adding, editing or deleting an entry,
  tap **Undo** in the message at the bottom to reverse it; to fix an older entry, tap it to edit or delete it.
- **Cash in hand:** a running balance of the money you actually have (see below).
- **Stats:** where it went, needs vs wants, budget vs actual, and your running daily average against your target.
- Dark, light or automatic theme.

On first open the app asks for your currency, your cash amounts (optional) and a monthly spending budget
(leave it blank to have it worked out from A and B).
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

## Spending pool

A day-to-day pool that turns your lumpy A and B payments into a steady daily amount.

- It starts at 0 on a payday you pick (Home, or Settings → Spending pool).
- Each morning it grows by **B ÷ 7 + A ÷ the days in that month**. For example A ฿2,000 and B ฿1,000 in a 31-day month: ฿142.86 + ฿64.52 = ฿207.37 a day.
- Everything you log from the start day on takes its amount out; refunds put it back. Fixed costs aren't part of it.
- It can go below 0: a big expense just takes a few days to earn back, and Home tells you roughly how many.
- If you change A or B, the new amounts count from that day on; earlier days keep the old ones.
- Looking at a past month on Home shows where the pool started and ended that month.

The pool is separate from everything else: it doesn't change your cash in hand, budget, categories or stats.

## Logging from SCB slips

Payments and transfers made in SCB EASY produce a slip image. Instead of typing those in:

1. Tap **+**, then **Add from SCB slips…**, and pick one or more slips from your gallery.
   On Android you can also select slips in the gallery and **Share** them to Pocket Budget (once it's installed to the home screen).
2. The app reads each slip on your phone: the amount, the date, and your NOTE from the slip. Nothing is uploaded.
   The first time, it downloads the slip reader (about 7 MB); after that it works offline.
3. A list shows each slip. Fix anything that was misread (small notes are sometimes off by a letter), pick categories, and tap **Log**.
   Tap **Undo** in the message afterwards to take them all back out.

- **Categories:** a slip whose note contains a keyword goes straight into that keyword's category. The starting keywords are
  Grocery, Bus, MRT, Bike, Taxi and Food; change them, add more and try out notes in **Settings → Slip keywords**.
  When you pick a category yourself, you can tick **Always put "…" in …** to add a keyword for next time.
- **Already logged:** each slip's reference is remembered (from its QR code), so the same slip can't be logged twice.
- **Not spending:** set a keyword to **Don't log** for slips that aren't spending, like TrueMoney top-ups (you log the TrueMoney
  spending itself) or moving money to your own savings. Those slips arrive unticked; you can still tick one to log it.
- **Money sent to you:** the app learns your account from your slips; slips of money sent *to* you are left out. If one of your
  own slips is ever left out this way (for example a second SCB account), tap **It's my account** on it.
- Slips can be the saved slip, a screenshot of it, a copy forwarded through LINE, or cropped; anything that isn't an SCB slip
  arrives unticked with the reason.
- Debit card, scanned-QR and TrueMoney payments don't make slips, so keep adding those with **+** as before.

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

Whenever you change any file, also bump `VERSION` in `sw.js` (for example from `pocket-budget-v11` to `pocket-budget-v12`) so devices pick up the new version.
When you're online the app always loads the newest version, so the update shows the next time you open it.
If a home-screen app was only in the background, close it fully first. Settings shows which version is running.

## Files

| File | What it is |
|---|---|
| `index.html` | The whole app: styles, markup and script |
| `sw.js` | Service worker that caches the app so it works offline |
| `manifest.webmanifest` | Name, colours and icons used when it's installed to a home screen, and the Share target for slips |
| `vendor/` | The slip reader (tesseract.js and jsQR); see `vendor/README.md` |
| `icon*.png`, `icon.svg` | App icons |
