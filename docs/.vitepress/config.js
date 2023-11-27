import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "➕ Extend Datatable.js",
  base: "/extend-datatable-js/",
  description: "Export JSON Button, Display `a tag` URL in Render",
   head: [
    [
      'script',
      { async: '', src: '/extend-datatable-js/example/assets/datatables.min.js', type: 'text/javascript' }
    ],
    [
      'script',
      { async: '', src: '/extend-datatable-js/src/button-json.js', type: 'text/javascript' }
    ],
    [
      'link',
      { async: '', href: '/extend-datatable-js/example/assets/datatables.min.css', rel: 'stylesheet' }
    ],
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      // { text: 'Functions Explained', link: '/functions-explained' },
      { text: 'Live Example', link: '/example/' },
      { text: 'API Examples', link: '/api-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          // { text: 'Functions Explained', link: '/functions-explained' },
          { text: 'Live Example', link: '/example/' },
          { text: 'API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/ECodeeshop/extend-datatable-js' }
    ]
  }
})
