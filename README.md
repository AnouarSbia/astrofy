# Astrofy | SEO Portfolio Website Template 🚀

![Astrofy SEO Template](public/cover_og.jpg)

**Astrofy** is a high-performance, SEO-optimized portfolio template built with [Astro](https://astro.build/) and [TailwindCSS](https://tailwindcss.com/). 

Designed by **[AnouarLab](https://anouarlab.fr)** for developers, consultants, and content creators who want to rank on Google while showcasing their work.

## ⚡ Main Features

- **SEO Optimized**: Pre-configured meta tags, Open Graph, Sitemap, and Schema.org data.
- **Lighthouse 100/100**: Blazing fast performance out of the box.
- **Google Tracking Ready**: Built-in GA4 & GTM integration (`AnalyticsTracker` component).
- **Blog & Content**: Markdown-based blog with categories, authors, and reading time.
- **Projects & Store**: Showcase your work or sell digital products easily.
- **Responsive Design**: Mobile-first UI with [DaisyUI](https://daisyui.com/) components.
- **Dark/Light Mode**: Automatic theme switching.

## 🚀 Demo

View the live demo here: **[Astrofy Demo](https://astrofy-template.netlify.app/)**

## 🛠️ Installation

1. **Clone the repo**
   ```bash
   git clone https://github.com/votre-user/astrofy.git
   cd astrofy
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Start development server**
   ```bash
   pnpm run dev
   ```

## 📂 Project Structure

```bash
src/
├── components/      # Reusable UI components (SEO, Cards, Sidebar...)
├── content/         # Markdown content for Blog and Store
├── layouts/         # Base and Post layouts
├── pages/           # Astro routes (index, blog, services...)
└── config.ts        # Global site configuration
```

## ⚙️ Configuration

Customize the site settings in `src/config.ts`:

```typescript
export const SITE_TITLE = "AnouarLab | Consultant SEO";
export const SITE_DESCRIPTION = "Expert SEO & CRO...";
```

### Analytics & SEO Setup

1. Add your GTM ID in `.env`:
   ```env
   GTM_ID=GTM-XXXXXX
   ```
2. Update your `sitemap` URL in `astro.config.mjs`.

## 🤝 Contributing & Backlink

We love contributions! If you use this template, please keep the credit link in the footer to support the project:

> "Template designed by **[AnouarLab](https://anouarlab.fr)**"

This helps us maintain the project and continue improving it for the community.

## 📄 License

Licensed under the MIT License - feel free to use it for personal or commercial projects.

