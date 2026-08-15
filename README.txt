Ozony Tech React Bits-style Upgrade

What this package includes:
- src/components/ui/spotlight-card.jsx
- src/components/ui/star-border.jsx
- Updated Header.jsx
- Updated Hero.jsx
- Updated Services.jsx
- Updated AILeadAgentTeaser.jsx
- Updated About.jsx
- Updated Contact.jsx

How to use:
1. Extract this folder into your Ozony Tech project root.
2. Open PowerShell in the project root.
3. Run:
   powershell -ExecutionPolicy Bypass -File .\apply-reactbits-upgrade.ps1
4. Run:
   npm run build
5. Review the site locally before pushing.

Notes:
- No viewport sizing changes were made.
- No form behavior or endpoint logic was changed.
- No contact submission ID behavior was changed.
- This only adds reusable SpotlightCard and StarBorder components and applies them to selected premium UI areas.
