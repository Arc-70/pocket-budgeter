# Third-party files

Used only by the slip import (reading SCB slips on the device). They're loaded the first time you import a slip, then kept for offline use.

| Folder | What | Version | Licence |
|---|---|---|---|
| `tesseract/tesseract.min.js`, `tesseract/worker.min.js` | [tesseract.js](https://github.com/naptha/tesseract.js), text recognition | 5.1.1 | Apache-2.0 (`tesseract/LICENSE.md`) |
| `tesseract/core/` | [tesseract.js-core](https://github.com/naptha/tesseract.js-core), the recognition engine (LSTM builds, with and without SIMD) | 5.1.1 | Apache-2.0 (`tesseract/core/LICENSE`) |
| `tesseract/lang/eng.traineddata.gz` | English model from [tesseract-ocr/tessdata](https://github.com/tesseract-ocr/tessdata) via `@tesseract.js-data/eng` (4.0.0_best_int) | 1.0.0 | Apache-2.0 (model), MIT (package) |
| `jsqr/jsQR.js` | [jsQR](https://github.com/cozmo/jsQR), QR code reading | 1.4.0 | Apache-2.0 (`jsqr/LICENSE`) |

If you replace any of these, also bump `VENDOR` in `sw.js` so devices fetch the new files.
