import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "➕ Extend Datatable.js",
  base: "/extend-datatable-js/",
  description: "Export JSON Button, Display `a tag` URL in Render",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Functions Explained', link: '/functions-explained' },
      { text: 'API Examples', link: '/api-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Functions Explained', link: '/functions-explained' },
          { text: 'API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
