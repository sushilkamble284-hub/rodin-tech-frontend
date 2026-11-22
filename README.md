# Rodin Tech

A responsive single-page website for Rodin Tech, built with React, Vite, Tailwind CSS, and custom CSS for the visual identity and project illustrations.

## Run locally

```sh
npm install
npm run dev
```

## Contact configuration

Copy `.env.example` to `.env.local` and set the contact details for the business before publishing:

- `VITE_CONTACT_EMAIL` is used for email links and as the contact form fallback.
- `VITE_WHATSAPP_NUMBER` is an international-format number with country code; omit `+`, spaces, and punctuation. The WhatsApp link is shown when a number is configured.
- `VITE_CONTACT_FORM_ENDPOINT` is an optional HTTPS endpoint that accepts a JSON `POST` with `name`, `email`, `company`, `budget`, and `requirements` fields. On a successful response, the form confirms submission; on failure, it displays an error. When no endpoint is configured, the form opens a prefilled email instead.

The form endpoint must be provided by a backend or form service; this frontend does not store or forward inquiries by itself.

## Build and lint

```sh
npm run build
npm run lint
```

Portfolio entries and the guiding-principle quote are explicitly presented as concepts rather than client work or customer testimonials.
