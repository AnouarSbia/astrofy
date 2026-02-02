// tina/config.ts
import { defineConfig } from "tinacms";
var branch = process.env.GITHUB_BRANCH || process.env.VERCEL_GIT_COMMIT_REF || process.env.HEAD || "main";
var config_default = defineConfig({
  branch,
  // Get this from tina.io
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  // Get this from tina.io
  token: process.env.TINA_TOKEN,
  build: {
    outputFolder: "admin",
    publicFolder: "public"
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public"
    }
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
  schema: {
    collections: [
      {
        name: "blog",
        label: "Articles du Blog",
        path: "src/content/blog",
        format: "md",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Titre",
            isTitle: true,
            required: true
          },
          {
            type: "string",
            name: "description",
            label: "Description (SEO)",
            required: true,
            ui: {
              component: "textarea"
            }
          },
          {
            type: "datetime",
            name: "pubDate",
            label: "Date de Publication",
            required: true
          },
          {
            type: "string",
            name: "updatedDate",
            label: "Date de Mise \xE0 Jour"
          },
          {
            type: "image",
            name: "heroImage",
            label: "Image de Couverture"
          },
          {
            type: "string",
            name: "badge",
            label: "Badge",
            options: ["NOUVEAU", "POPULAIRE", "GUIDE", "ASTUCE"]
          },
          {
            type: "string",
            name: "tags",
            label: "Tags",
            list: true
          },
          {
            type: "rich-text",
            name: "body",
            label: "Contenu",
            isBody: true
          }
        ]
      },
      {
        name: "store",
        label: "Produits Boutique",
        path: "src/content/store",
        format: "md",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Titre",
            isTitle: true,
            required: true
          },
          {
            type: "string",
            name: "description",
            label: "Description",
            required: true,
            ui: {
              component: "textarea"
            }
          },
          {
            type: "string",
            name: "custom_link_label",
            label: "Label du Lien",
            required: true
          },
          {
            type: "string",
            name: "custom_link",
            label: "URL du Lien"
          },
          {
            type: "datetime",
            name: "updatedDate",
            label: "Date de Mise \xE0 Jour",
            required: true
          },
          {
            type: "string",
            name: "pricing",
            label: "Prix"
          },
          {
            type: "string",
            name: "oldPricing",
            label: "Ancien Prix"
          },
          {
            type: "string",
            name: "badge",
            label: "Badge"
          },
          {
            type: "string",
            name: "checkoutUrl",
            label: "URL de Paiement"
          },
          {
            type: "image",
            name: "heroImage",
            label: "Image"
          },
          {
            type: "rich-text",
            name: "body",
            label: "Contenu",
            isBody: true
          }
        ]
      }
    ]
  }
});
export {
  config_default as default
};
