import AuthLogo from './extensions/logo.jpg';
import MenuLogo from './extensions/logo.jpg';
// import favicon from './extensions/favicon.ico';

export default {
  config: {
    // Replace the Strapi logo in auth (login) views
    auth: {
      logo: AuthLogo,
    },
    // Replace the favicon
    // head: {
    //   favicon: favicon,
    // },
    // // Add a new locale, other than 'en'
    // locales: ['fr', 'de'],
    // // Replace the Strapi logo in the main navigation
    menu: {
      logo: MenuLogo,
    },
    // Override or extend the theme
    theme: {
      colors: {
        //primary100: '#E1403C',
        // primary200: '#e0c1f4',
        // primary500: '#E1403C',
        // primary600: '#E1403C',
        // primary700: '#E1403C',
        // danger700: '#b72b1a'
      },
    },
    // // Extend the translations
    translations: {
      en: {
        "Auth.form.welcome.subtitle": "Log in to your Suzuki account",
        "Auth.form.welcome.title": "Welcome to Suzuki!",

      },
    },
    // Disable video tutorials
    tutorials: false,
    // Disable notifications about new Strapi releases
    notifications: { release: false },
  },

  bootstrap() { },
};