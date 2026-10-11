# Agha_abfahrtsmonitor

## NVV FOUR-SCREEN DASHBOARD WITH BOOTSTRAP MODAL

Four live monitors fill one browser window in a 2x2 grid:
Bf. Wilhelmshoehe (R), Annastr., Bismarckstr., Murhardstr./Uni.
Click anywhere on a panel to enlarge it in a nearly full-window modal.
Close with the X, Escape, or click the dark backdrop outside the dialog.
Keyboard: Tab to a panel, press Enter or Space. Focus returns on close.
These are read-only displays: clicks open the modal instead of interacting
with NVV's page. The enlarged monitor is also read-only.

## BOOTSTRAP STUDIO IMPORT (BOOTSTRAP 5)
1. Extract the ZIP, preserving its folder structure.
2. Drag index.html into a Bootstrap 5 design.
3. Enable parsing into components and scanning for assets.
4. Import assets/css/monitor.css and assets/js/monitor.js.
5. Skip external bootstrap.min.css and bootstrap.bundle.min.js assets:
   Bootstrap Studio already supplies Bootstrap CSS and JavaScript.
   Remove duplicate external Bootstrap references if retained.
6. Save your design as .bsdesign in Bootstrap Studio.
7. Test clicks using browser preview; the editor canvas selects elements.

The modal uses Bootstrap 5 markup, data attributes and modal events.
No custom framework or build step is required. A .bsdesign is not included.

## EDITING
Change each small iframe's src to edit its station. The modal automatically
reads that src; there is no separate modal URL to maintain.
Update each iframe title and button aria-label when changing stations.
Use &amp; between URL parameters in HTML source.

## OPENING WITHOUT BOOTSTRAP STUDIO
Open index.html in a browser. Bootstrap 5.3.3 loads from jsDelivr.
Internet access is required for Bootstrap and NVV. Within Bootstrap Studio,
the application's bundled Bootstrap replaces the CDN references.

## VERIFICATION AND LIMITS
HTML references, four station URLs, JS syntax and modal event behavior were
checked. Native Bootstrap Studio import and live NVV display were not tested.
NVV must permit embedding. The parent cannot change the NVV page's internal
fonts or layout. A fresh enlarged monitor loads when the modal opens;
the four original monitors remain loaded. The extra one unloads on close.

## Official guides:
https://bootstrapstudio.io/docs/html.html
https://getbootstrap.com/docs/5.3/components/modal/
