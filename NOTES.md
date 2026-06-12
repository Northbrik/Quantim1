# Quantum View — review items

These items came up during the build and need a decision before launch.

## 1. Charu's photo
Supplied. Stored at `/public/charu.jpg`. The source was a 2640×1980 landscape JPEG with EXIF orientation 6; auto-rotated, smart-cropped to a 4:5 portrait at 600×750, and re-encoded at mozjpeg q82. Rendered in the About Charu section as a 200px-wide tile.

## 2. Tree of Life logo
Supplied. Stored at `/public/logo.png`. The original PNG had a white background, which has been keyed out so the leaves/trunk sit cleanly on the cream page background with no white box. Used as a small mark in the navbar and a slightly larger mark in the hero. If a true vector (SVG) version becomes available, swap it in for sharper rendering at all sizes.

## 3. Session-format wording (main page vs summary page)
- Main page: reflects Zoom (Charu's actual format).
- "About the Therapy" page: keeps the original in-person description from Ichha's summary, with an italic review note flagging the mismatch. Confirm whether to keep that or replace it with Zoom-only wording.

## 4. Health-claim wording
The original summary used strong absolute claims ("cure all problems", "in record time", "address any... diseases"). The copy on the secondary page has been softened in line with UK ASA/CAP rules for alternative-therapy advertising. Worth a final pass by Charu before launch.

## 5. Credentials
Restored. Charu's certificate is stored at `/public/credentials/certificate.pdf` and linked from the Credentials section via "View certificate →" (opens in a new tab).

## 6. Contact form delivery
At Charu's request the Cal.com booking widget was removed in favour of a simple message form. She'll handle Zoom scheduling by email herself for now.

The form posts to FormSubmit (`https://formsubmit.co/ajax/quantumview26@gmail.com`) — a free relay, no account needed. **First submission only:** Charu will receive an activation email from FormSubmit and must click the link before subsequent messages are forwarded. After that, every form submission lands in her quantumview26@gmail.com inbox as a tidy table with name, email, and message.
