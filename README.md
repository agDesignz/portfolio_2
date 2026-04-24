# portfolio_2

Personal developer portfolio — the current, live version of my web presence.

**Live site:** [alexgeer.dev](https://alexgeer.dev)

---

## Tech stack

- **Framework:** React (Vite)
- **Styling:** Tailwind CSS + PostCSS
- **Spam protection:** [ALTCHA](https://altcha.org) (self-hosted, via [altcha_backend](https://github.com/agDesignz/altcha_backend))
- **Email delivery:** EmailJS
- **Hosting:** Hostinger VPS, managed via Coolify

---

## Features

- Project showcase with descriptions and links
- About section
- Contact form with privacy-respecting spam protection (no reCAPTCHA)
- Fully responsive layout

---

## Contact form — how it works

The contact form uses a two-step verification flow before any message is sent:

1. **Challenge request** — on load, the form fetches a cryptographic challenge from the self-hosted [altcha_backend](https://github.com/agDesignz/altcha_backend) API
2. **Proof-of-work** — the ALTCHA widget solves the challenge in the browser (invisible to the user)
3. **Verification** — on form submission, the solution token is sent back to the backend for verification
4. **Email delivery** — only after successful verification does the form trigger EmailJS to deliver the message

This keeps the contact form bot-free without relying on Google reCAPTCHA or any user-tracking service.

---

## Styling approach

Styles are written with Tailwind utility classes, extended with PostCSS for custom processing. Component-level styles follow a consistent class naming approach using Tailwind's composition patterns.

---

## Development

```bash
npm install
npm run dev
```

```bash
npm run build
```

---

## Related

- **[altcha_backend](https://github.com/agDesignz/altcha_backend)** — the self-hosted CAPTCHA API powering the contact form
- **[react-portfolio](https://github.com/agDesignz/react-portfolio)** — legacy portfolio (superseded by this repo)

---

## License

[Creative Commons Attribution-NonCommercial 4.0 International (CC BY-NC 4.0)](https://creativecommons.org/licenses/by-nc/4.0/)

You are free to share and adapt this project for non-commercial purposes with attribution. Commercial use is not permitted.

---

_Built by [Alex Geer](https://alexgeer.dev)_
