# SARAS FAIR, 2026 Management Dashboard

A responsive, multi-page dashboard using the SARAS FAIR beige, taupe, burgundy and golden-ochre theme.

## Package contents

- `index.html` — Modern SARAS FAIR home / landing page.
- `duty-list.html` — Duty List dashboard:
  - Section 01: Staff-wise Duty List (alphabetical by default; sortable columns)
  - Section 02: Activity-wise Responsibilities (all 23 activities, descriptions and team members)
- `stalls.html` — Stalls module connected to its own Google Sheet tab
- `participants.html` — Participants module connected to its own Google Sheet tab
- `block-coordinators.html` — Block Coordinators module connected to its own Google Sheet tab
- `daily-sales.html` — Daily Sales module connected to its own Google Sheet tab
- `awards.html` — Awards module connected to its own Google Sheet tab
- `js/config.js` — one-time Google Spreadsheet ID and GID configuration
- `js/sheets.js` — shared CSV loading, searching and sorting
- `css/theme.css` — shared SARAS FAIR visual theme
- `assets/saras-mela-motif.png` — theme artwork
- `assets/saras-mela-nomination-flyer-reference.png` — uploaded flyer reference

## Connect your Google Sheet

1. Create one Google Spreadsheet.
2. Create five tabs and name them as desired (suggested: `Stalls`, `Participants`, `Block Coordinators`, `Daily Sales`, `Awards`).
3. Put column headings in row 1 of each tab. Suggested columns:
   - **Stalls:** Stall No, District, Block, SHG/Enterprise Name, Product Category, Stall In-charge, Contact, Allotment Status.
   - **Participants:** Sl No, Participant Name, SHG/Enterprise, Block, District, Mobile, Registration Status, Arrival Date.
   - **Block Coordinators:** Block, Coordinator Name, Designation, Mobile, Arrival Date, Vehicle Details, Remarks.
   - **Daily Sales:** Date, Stall No, SHG/Enterprise Name, Block, Product Category, Sales Amount, Remarks.
4. In Google Sheets, set **Share → General access → Anyone with the link → Viewer**. Alternatively, publish the relevant tabs to the web.
5. Open each tab and copy its `gid` number from the URL. It is the number after `gid=`.
6. Open `js/config.js` and replace the placeholders:
   - `SPREADSHEET_ID` with the long ID between `/d/` and `/edit` in the spreadsheet URL.
   - `GIDS.stalls`, `GIDS.participants`, `GIDS.coordinators`, ``GIDS.sales` and `GIDS.awards` with each tab's numeric GID.
7. Save the file and deploy the folder to a static web host, or test locally using a simple local web server.

Example:
```js
window.SARAS_CONFIG = {
  SPREADSHEET_ID: "1AbCdEfYourActualSpreadsheetID",
  GIDS: {
    stalls: "0",
    participants: "123456789",
    coordinators: "987654321",
    sales: "456789012",
    awards: "345678901"
  }
};
```

## Important notes

- The dashboard is **read-only** with respect to Google Sheets. Edit records in Google Sheets; the dashboard displays the latest published/shared values when the page is refreshed.
- Do not put confidential personal information in a publicly accessible spreadsheet.
- If data does not load, confirm the Spreadsheet ID and GID, check that the sheet is accessible to viewers, and confirm the tab has a header row.
- The Duty List and Activity-wise Responsibilities are based on Office Order No. M-11/45/2026-MZSRLM dated 6 November 2026.
- No participant, stall, coordinator or sales records are fabricated. Those four modules will populate after you connect your Google Sheet.


## Publish the dashboard on GitHub Pages

1. Sign in to GitHub and create a new repository, for example `saras-mela-2026`.
2. Choose **Public** if you want the simplest free GitHub Pages setup.
3. Extract the ZIP file on your computer.
4. Open the extracted `SARAS_Mela_Management_Dashboard` folder. Upload the **contents inside that folder** (index.html, css, js, assets, and all module HTML files) to the repository root. Do not upload only the ZIP file.
5. In GitHub, open **Settings → Pages**.
6. Under **Build and deployment**, choose **Deploy from a branch**.
7. Select branch **main** and folder **/(root)**, then click **Save**.
8. Wait for GitHub Pages to publish. Your site address will be shown in the Pages settings, usually:
   `https://YOUR-GITHUB-USERNAME.github.io/saras-mela-2026/`
9. Open the site address and test every tab. If you change `js/config.js`, commit the change and wait for GitHub Pages to redeploy.

### Google Sheet tabs to create

Create these five tabs in the same spreadsheet:
- Stalls
- Participants
- Block Coordinators
- Daily Sales
- Awards

Copy each tab's numeric `gid` and paste it into the matching field in `js/config.js`. Also enter the spreadsheet ID once. Keep the first row as column headings. The dashboard modules are currently read-only and display records from the sheet.


## Theme switch
Use the compact **Theme** control in the header to switch between the flyer-inspired light palette and a minimal dark burgundy palette. The selected theme is remembered in that browser.


## Website home page
`index.html` is the default website landing page. It provides a modern hero section and six module cards. The Duty List is available from the Duty List navigation tab or its home-page card at `duty-list.html`.


## V3 font-only update

This package preserves the original **SARAS FAIR Dashboard – Version 3** theme colours, layout, page structure and components. Only typography has been updated:
- New Order Light (300): supporting information and descriptions.
- New Order Regular (400): general interface text.
- New Order Medium/Semibold (500/600): navigation, labels and section headings.
- New Order Bold (700): prominent headings and figures.
- Bilagike: decorative event headline on the home-page hero.

Font files are included in `assets/fonts/`. They are subsetted font programs embedded in the supplied PDF; unsupported characters fall back to the system sans-serif stack. No V3 theme colour variables were changed.


## Supporting text readability update

Supporting and subtle text now uses the same readable treatment as the home-page hero description: New Order Regular, 15px, with 1.5 line-height. This improves legibility while preserving the original V3 colours, layout and component styling.


## New module — Amusement & Artists / Entertainment

- Page: `amusement-entertainment.html`
- Navigation label: **Amusement & Entertainment**
- Google Sheets GID key: `GIDS.amusement`
- Suggested Google Sheet tab name: `Amusement & Entertainment`
- Suggested columns: Date, Time, Programme / Activity, Artist / Performer, Group / Agency, Category, Venue / Stage, Contact Person, Contact Number, Status, Remarks.

Add the new sheet tab's numeric GID to `js/config.js` under `GIDS.amusement`. The module uses the existing read-only Google Sheets CSV integration and the established V3 theme and readable New Order font hierarchy.

Responsive layout: optimized for mobile phones, tablets, laptops and wide desktop screens. The Mizo activity descriptions reproduce the Mizo wording in Annexure-I of the Office Order dated 6 November 2026.


Favicon: The supplied SARAS logo is used as the browser favicon and Apple touch icon on all HTML pages (assets/saras-favicon.png).


CLEAN URL STRUCTURE (GitHub Pages)
---------------------------------
This package uses folder-based pages so URLs do not show the .html extension.

- Home: index.html
- Duty List: duty-list/index.html  -> /duty-list/
- Stalls: stalls/index.html  -> /stalls/
- Participants: participants/index.html  -> /participants/
- Block Coordinators: block-coordinators/index.html  -> /block-coordinators/
- Daily Sales: daily-sales/index.html  -> /daily-sales/
- Amusement & Entertainment: amusement-entertainment/index.html  -> /amusement-entertainment/
- Awards: awards/index.html  -> /awards/

GITHUB UPLOAD
-------------
1. Extract this ZIP.
2. Open the extracted project folder.
3. Upload ALL contents inside it directly to the ROOT of your GitHub repository.
   The root must contain index.html, .nojekyll, assets/, css/, js/, and each module folder.
   Do not upload the outer project folder as an extra nested folder.
4. Commit the files. In Settings > Pages, choose Deploy from a branch, branch main, folder /(root).
5. Wait for GitHub Pages to finish deploying.
6. Use links ending in /duty-list/, /stalls/, etc. The browser address will not show .html.

NOTE: Keep the trailing slash in the module URLs. Relative asset paths are configured for
GitHub Pages project sites (including repositories published under username.github.io/repository/).


BRAND REDESIGN UPDATE
This edition follows Saras Aajeevika Brand Manual 2.0: logo lockup referenced from page 15; primary palette from page 21 (Bright Red #EB2327, Golden Apricot #E69B39, Grape #993786, Sea Green #03B6AA, Vanilla Custard #F1E1AA, Parchment #F6F1E9, Charcoal #4A4A4A); New Order for body content and Bilagike for headings/decorative display. Secondary palette on page 22 is not applied because the manual restricts it to National Fair use with prior written approval.


STALL DIRECTORY & EVENT MAP
- The Stall Directory assigns sequential stall numbers 001–080 in the order of RD Blocks and stall quantities in SARAS.xlsx.
- The Event Map groups stalls into product-category zones and allows visitors/staff to select a stall number to locate its listing.
- The map is illustrative, not a surveyed venue layout. Confirm actual stall positions, stage orientation, aisles and emergency access with the venue team before physical setup.
