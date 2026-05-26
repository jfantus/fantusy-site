# Fantusy Site

Local project folder for [fantusy.org](https://fantusy.org).

## Overview

This is a static Netlify site. The published site is built directly from the repository root, as configured in `netlify.toml`.

## Key Files

- `index.html` - home page
- `about.html` - about page
- `services.html` - services page
- `research.html` - research page
- `cookie.html` - cookie page
- `parental-mortality-calculator.html` - parental mortality calculator
- `prostate-volume-calculator.html` - prostate volume calculator
- `styles.css` - shared styling
- `assets/` - images and site artwork
- `netlify.toml` - Netlify deployment and security headers

## Editing Workflow

1. Make changes locally in this folder.
2. Preview by opening `index.html` in a browser, or run a simple local server:

   ```powershell
   python -m http.server 8080
   ```

3. Check changes with Git:

   ```powershell
   git status
   ```

4. Commit and push to deploy through Netlify:

   ```powershell
   git add .
   git commit -m "Describe the change"
   git push
   ```

## GitHub

Remote repository:

```text
https://github.com/jfantus/fantusy-site.git
```
