# Julius Cergrahm Advanced Tech — Portfolio Website

## Open the website
1. Extract `Julius_Cergrahm_Portfolio.zip` to a folder on your computer.
2. Open the extracted folder.
3. Double-click `index.html`. It will open in your default browser (Chrome, Edge, Firefox, etc.).
4. Use the navigation menu to open About, Projects, Blog, and Contact.

No installation or server is required for the static website.

## Folder structure
- `index.html` — Home page
- `pages/about.html` — About page
- `pages/projects.html` — Project gallery
- `pages/blog.html` — Dynamic browser-based blog page
- `pages/contact.html` — Contact details and email form
- `css/style.css` — Shared styling and responsive layout
- `js/main.js` — Navigation and shared interactions
- `js/blog.js` — Blog post editor and local storage
- `assets/images/` — Uploaded photos, project graphics, and brand images

## Dynamic blog notes
The Blog page includes a password-gated admin panel with post creation, search, delete, and sample-post restore controls. Open Admin from the navigation and enter `1234`. Posts are saved in this browser's `localStorage`, so they are not shared with other visitors or devices. This static-site password is visible in the JavaScript source and is only a convenience gate; use server-side authentication for a real online admin system.

## For a real online multi-user blog / admin panel
A public website where you can sign in and publish posts for all visitors needs a backend and database (for example PHP + MySQL on XAMPP or a web host). Do not treat the browser-only editor as a secure admin system.

## Contact details
- WhatsApp: 0112122737 (link uses Kenya country code)
- Email: juliuscergrahm@gmail.com
- GitHub display name: Julius Cergrahm

The GitHub link currently opens GitHub's homepage. Update the URL in the footer and Contact page to your exact profile address.

## Customizing
Edit the HTML pages with a code editor such as VS Code. Update colours in `css/style.css` under `:root`, and add new images to `assets/images/`.
