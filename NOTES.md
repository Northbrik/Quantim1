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

## 5. Credentials section — removed
Removed at Charu's request.

## 6. Booking — Cal.com
The contact form was replaced with an inline Cal.com booking calendar. Currently wired to **Joseph's link (`joseph-robinson-kn5ooo`)** for demo purposes — change the `CAL_LINK` constant at the top of `app/page.tsx` once Charu's link exists.

**Charu's side, one-time setup:**
1. Sign up at <https://cal.com> (free).
2. App Store → connect **Zoom** (OAuth — automatic Zoom meeting creation for every booking).
3. App Store → connect **Google Calendar** (or Outlook) — bookings block her calendar; her busy slots are hidden.
4. Create a new Event Type called e.g. "Quantum Therapy Session" — duration 60 min, location set to Zoom, default notifications on.
5. Send her booking link (`cal.com/<her-username>` or `cal.com/<her-username>/quantum-therapy`).

**Our side:** swap `CAL_LINK` in `app/page.tsx` from `joseph-robinson-kn5ooo` to Charu's. That's it. The widget colours, layout, and copy already match the rest of the site.
