// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      link: [
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        { rel: "preconnect", href: "https://fonts.gstatic.com" },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300;400;600&display=swap",
        },
      ],

      htmlAttrs: {
        class: "min-h-[100vh] bg-white ",
      },
      bodyAttrs: {
        class: "min-h-[100vh]",
      },
    },
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  css: ["@/assets/styles/main.scss"],
});
