import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 * - create an ordered group of docs
 * - render a sidebar for each doc of that group
 * - provide next/previous navigation
 *
 * The sidebars can be generated from the filesystem, or explicitly defined here.
 *
 * Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // Grouping Webhooks
  guides: [
    {
      type: "category",
      label: "Primeros Pasos",
      collapsed: false,
      items: ["primerospasos/index", "primerospasos/signup", "primerospasos/login", "primerospasos/app"],
    },
    {
      type: "category",
      label: "Navegación",
      collapsed: false,
      items: [
        "sections/index",
        {
          type: "category",
          label: "Gestión",
          collapsed: true,
          items: ["sections/admin/dashboard", "sections/admin/usuarios", "sections/admin/colaboradores", "sections/admin/cuentas", "sections/admin/creditos", "sections/admin/suscripciones", "sections/admin/cobranzas", "sections/admin/campanas"],
        },
        {
          type: "category",
          label: "Setup",
          collapsed: true,
          items: [
            {
              type: "category",
              label: "App",
              collapsed: true,
              items: [
                "sections/setup/app/home", 
                "sections/setup/app/branding", 
                "sections/setup/app/navbar"
              ],
            },
            "sections/setup/creditos", "sections/setup/scoring", "sections/setup/wallet"],
        },],
    },
    { type: "category",
      label: "Documentacion APIs",
      collapsed: false,
      items: [
          "intro",
          "modules",
          {
          type: "category",
          label: "Autenticación",
          collapsed: true,
          items: ["authentication/index", "authentication/auth_endpoints"],
        },
        {
          type: "category",
          label: "Webhooks",
          collapsed: true,
          items: ["webhooks/index", "webhooks/handle-webhooks", "webhooks/events"],
        },
        {
          type: "category",
          label: "Usuarios",
          collapsed: true,
          items: ["users/index", "users/users_endpoints"],
        },
        {
          type: "category",
          label: "Créditos",
          collapsed: true,
          items: ["loans/index"],
        },
        {
          type: "category",
          label: "Notificaciones",
          collapsed: true,
          items: ["campaigns/index", "campaigns/list", "campaigns/id", "campaigns/id-analytics", "campaigns/id-emails"],
        }
    ],
    },
  ],
};

export default sidebars;
