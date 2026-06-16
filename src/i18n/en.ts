export const en = {
  nav: {
    brand: 'Baobab Café & Kitchen',
    links: [
      { label: 'About',    href: '#about' },
      { label: 'Menu',     href: '#menu' },
      { label: 'Gallery',  href: '#gallery' },
      { label: 'Location', href: '#location' },
    ],
  },
  hero: {
    location:     'Oyster Bay, Dar es Salaam',
    heading:      'Baobab Café\n& Kitchen',
    tagline:      'Where Dar slows down.',
    ctaPrimary:   'Order on WhatsApp',
    ctaSecondary: 'View Menu',
  },
  about: {
    label:    'Our Story',
    heading:  'A place to slow down.',
    body: [
      "Baobab Café & Kitchen was born from a simple idea: that Dar es Salaam deserves a place to sit, breathe, and linger. Tucked in Oyster Bay just steps from the Indian Ocean, we opened our doors as a neighbourhood spot for those who want their morning coffee slow and their brunch unhurried.",
      "Everything on our menu is made with care — from the single-origin espresso pulled to order, to the avocado toast piled high, and the pastries baked fresh each morning. We stay open all day because good food and good coffee don't follow a clock. Pull up a chair, settle in, and let Dar slow down.",
    ],
    imageAlt: "Freshly made lattes with latte art on a wooden table, surrounded by potted plants",
  },
  menu: {
    label:   'What We Serve',
    heading: 'Menu Highlights',
    note:    'All prices in Tanzanian Shillings (TZS)',
    cta:     'Order on WhatsApp',
    categories: [
      {
        name: 'Coffee',
        items: [
          { name: 'Espresso',       description: 'Single shot of our house-blend, straight and clean',      price: 5000  },
          { name: 'Flat White',     description: 'Double ristretto with velvety steamed whole milk',        price: 8000  },
          { name: 'Iced Latte',     description: 'Cold-pulled espresso over ice, topped with milk',         price: 10000 },
          { name: 'V60 Filter',     description: 'Single-origin beans brewed slowly to order',              price: 9000  },
          { name: 'Masala Chai',    description: 'House-spiced, slow-simmered, finished with steamed milk', price: 9000  },
        ],
      },
      {
        name: 'Breakfast & Brunch',
        items: [
          { name: 'Smashed Avocado Toast',  description: 'Sourdough, poached egg, chilli flakes, lemon',       price: 18000 },
          { name: 'Full Baobab Breakfast',  description: 'Eggs, turkey sausage, roasted tomatoes, sourdough',  price: 24000 },
          { name: 'Eggs Benedict',          description: 'House-cured beef, silky hollandaise, toasted muffin', price: 21000 },
          { name: 'Açaí Bowl',              description: 'Blended açaí, banana, granola, fresh seasonal fruit', price: 16000 },
          { name: 'French Toast',           description: 'Thick brioche, maple syrup, fresh berries, cream',    price: 17000 },
        ],
      },
      {
        name: 'Light Mains',
        items: [
          { name: 'Grilled Zanzibar Fish',    description: 'Daily catch, coconut rice, kachumbari salsa',       price: 32000 },
          { name: 'Chicken & Avocado Salad',  description: 'Grilled chicken, avo, mixed leaves, lemon dressing', price: 24000 },
          { name: 'Pasta Primavera',          description: 'Pappardelle, seasonal vegetables, parmesan',         price: 22000 },
          { name: 'Chicken Club Sandwich',    description: 'Toasted ciabatta, crispy bacon, garlic aioli',        price: 20000 },
        ],
      },
      {
        name: 'Cakes & Pastries',
        items: [
          { name: 'Almond Croissant',       description: 'Flaky layers filled with frangipane, baked fresh daily', price: 8000  },
          { name: 'Carrot & Walnut Cake',   description: 'Warm-spiced sponge with cream cheese frosting',          price: 11000 },
          { name: 'Lemon Tart',             description: 'Crisp shell, silky curd, torched Italian meringue',       price: 10000 },
          { name: 'Pain au Chocolat',       description: 'Buttery pastry, dark Tanzanian chocolate',               price: 7000  },
          { name: 'Coconut Macaroon',       description: 'Toasted coconut, lightly chewy, house-made daily',        price: 6000  },
        ],
      },
    ],
  },
  gallery: {
    label:   'A Taste of Baobab',
    heading: 'Life at Baobab.',
  },
  location: {
    label:   'Find Us',
    heading: 'Come visit.',
    address: {
      street: 'Haile Selassie Road',
      area:   'Oyster Bay',
      city:   'Dar es Salaam, Tanzania',
    },
    hours: {
      label: 'Opening Hours',
      line1: 'Open daily',
      line2: '7:00 am – 10:00 pm',
    },
    phone:       '+255 000 000 000',
    phoneHref:   'tel:+255000000000',
    callLabel:   'Call Us',
    ctaLabel:    'Order on WhatsApp',
    mapSrc:      'https://maps.google.com/maps?q=Oyster+Bay,+Dar+es+Salaam,+Tanzania&output=embed&z=14',
    mapTitle:    'Baobab Café & Kitchen on Google Maps — Oyster Bay, Dar es Salaam',
  },
  footer: {
    tagline:    'Where Dar slows down.',
    quickLinks: [
      { label: 'About',    href: '#about' },
      { label: 'Menu',     href: '#menu' },
      { label: 'Gallery',  href: '#gallery' },
      { label: 'Location', href: '#location' },
    ],
    hours: {
      label: 'Hours',
      line1: 'Open daily',
      line2: '7:00 am – 10:00 pm',
    },
    instagram: {
      handle: '@baobabcafe',
      href:   'link here',
    },
    copyrightEntity: 'Baobab Café & Kitchen',
  },
  whatsapp: {
    number:             '255000000000',
    orderMessage:       "Hi, I'd like to place an order at Baobab Café.",
    reservationMessage: "Hi, I'd like to make a reservation at Baobab Café.",
  },
} as const;

export type Translations = typeof en;
