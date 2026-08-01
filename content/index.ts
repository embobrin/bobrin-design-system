export type Work = {
  title: string;
  image: string;
  page: string;
};

export type Collection = {
  title: string;
  link: string;
  works: number;
  thumbnail: string;
  /** CSS object-position value controlling thumbnail focal point, e.g. 'center 20%'. Defaults to 'center'. */
  objectPosition?: string;
};

export const works: Work[] = [
  { title: "Pompeii Residence Historic Ruin", image: "https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/pompeii-residence-historic-ruin-ed-bobrin.jpg", page: "https://fineartamerica.com/featured/pompeii-residence-historic-ruin-ed-bobrin.html" },
  { title: "Michelangelo's David Vignette Florence", image: "https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/michelangelos-david-vignette-florence-ed-bobrin.jpg", page: "https://fineartamerica.com/featured/michelangelos-david-vignette-florence-ed-bobrin.html" },
  { title: "Colorful Tightrope Walker in Bologna, Italy near Piazza Maggiore", image: "https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/colorful-tightrope-walker-in-bologna-italy-near-piazza-maggiore-ed-bobrin.jpg", page: "https://fineartamerica.com/featured/colorful-tightrope-walker-in-bologna-italy-near-piazza-maggiore-ed-bobrin.html" },
  { title: "Hudson Yards Skyline at Sunrise New York City Panorama", image: "https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/hudson-yards-at-sunrise-ed-bobrin.jpg", page: "https://fineartamerica.com/featured/hudson-yards-skyline-at-sunrise-new-york-city-panorama-ed-bobrin.html" },
  { title: "Chicago L Train S-Curve Black and White Urban Photography", image: "https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/chicago-s-curve-on-the-l-ed-bobrin.jpg", page: "https://fineartamerica.com/featured/chicago-l-train-s-curve-black-and-white-urban-photography-ed-bobrin.html" },
  { title: "Seattle Skyline at Sunset from Kerry Park Space Needle View", image: "https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/seattle-skyline-at-sunset-ed-bobrin.jpg", page: "https://fineartamerica.com/featured/seattle-skyline-at-sunset-from-kerry-park-space-needle-view-ed-bobrin.html" },
  { title: "Scenic Tuscan Countryside from Montepulciano Tuscany Italy Landscape", image: "https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/scenic-tuscan-countryside-from-montepulciano-ed-bobrin.jpg", page: "https://fineartamerica.com/featured/scenic-tuscan-countryside-from-montepulciano-tuscany-italy-landscape-ed-bobrin.html" },
  { title: "Vespa Awaits in Ravello Amalfi Coast Italy Street Photography", image: "https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/vespa-awaits-in-ravello-amalfi-coast-italy-street-photography-ed-bobrin.jpg", page: "https://fineartamerica.com/featured/vespa-awaits-in-ravello-amalfi-coast-italy-street-photography-ed-bobrin.html" },
  { title: "Burst of Red Bougainvillea Mediterranean Floral Architecture", image: "https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/burst-of-red-ed-bobrin.jpg", page: "https://fineartamerica.com/featured/burst-of-red-bougainvillea-mediterranean-floral-architecture-ed-bobrin.html" },
  { title: "Rugged Icelandic Coastline Black Beach and Sea Stacks", image: "https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/kirkjufell-mountain-ed-bobrin.jpg", page: "https://fineartamerica.com/featured/rugged-icelandic-coastline-black-beach-and-sea-stacks-ed-bobrin.html" },
  { title: "Two Blue Jays Perched in Winter Snowfall - Bird Photography", image: "https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/blue-jays-in-winter-snowfall-ed-bobrin.jpg", page: "https://fineartamerica.com/featured/two-blue-jays-perched-in-winter-snowfall-bird-photography-ed-bobrin.html" },
  { title: "Autumn Reflections on Lake Afton", image: "https://fineartamerica.com/images/artworkimages/medium/3/reflections-on-lake-afton-ed-bobrin.jpg", page: "https://fineartamerica.com/featured/autumn-reflections-on-lake-afton-finger-lakes-region-ed-bobrin.html" },
  { title: "San Francisco Painted Ladies Victorian Houses at Alamo Square", image: "https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/san-francisco-painted-ladies-ed-bobrin.jpg", page: "https://fineartamerica.com/featured/san-francisco-painted-ladies-victorian-houses-at-alamo-square-ed-bobrin.html" },
  { title: "Florence Cityscape at Blue Hour Duomo and Arno River, Tuscany Italy", image: "https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/florence-cityscape-blue-hour-ed-bobrin.jpg", page: "https://fineartamerica.com/featured/florence-cityscape-at-blue-hour-duomo-and-arno-river-tuscany-italy-ed-bobrin.html" },
  { title: "Palace of Fine Arts in Warm Light San Francisco Architecture", image: "https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/palace-of-the-arts-ed-bobrin.jpg", page: "https://fineartamerica.com/featured/palace-of-fine-arts-in-warm-light-san-francisco-architecture-ed-bobrin.html" },
  { title: "Seneca Lake Pier at Watkins Glen Dramatic Finger Lakes Stormy Sky", image: "https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/seneca-lake-pier-watkins-glen-ny-ed-bobrin.jpg", page: "https://fineartamerica.com/featured/seneca-lake-pier-at-watkins-glen-dramatic-finger-lakes-stormy-sky-ed-bobrin.html" },
  { title: "Juvenile Bald Eagle on Icy Lake - Winter Wildlife Photography", image: "https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/majestic-adolescent-eagle-on-icey-lake-ed-bobrin.jpg", page: "https://fineartamerica.com/featured/juvenile-bald-eagle-on-icy-lake-winter-wildlife-photography-ed-bobrin.html" },
];

// Hudson Yards — used as the hero image on the mobile home screen
export const heroWork: Work = works[3];

const FAA_IMG = "https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/";

export const collections: Collection[] = [
  { title: "Black & White",    link: "https://fineartamerica.com/profiles/bobrinphoto/collections/black+white",    works: 19, thumbnail: `${FAA_IMG}michelangelos-david-vignette-florence-ed-bobrin.jpg`, objectPosition: 'center 15%' },
  { title: "Italy",            link: "https://fineartamerica.com/profiles/bobrinphoto/collections/italy",           works: 13, thumbnail: `${FAA_IMG}florence-cityscape-blue-hour-ed-bobrin.jpg` },
  { title: "Iceland",          link: "https://fineartamerica.com/profiles/bobrinphoto/collections/iceland",         works: 14, thumbnail: `${FAA_IMG}kirkjufell-mountain-ed-bobrin.jpg` },
  { title: "New York",         link: "https://fineartamerica.com/profiles/bobrinphoto/collections/new+york",        works: 9,  thumbnail: `${FAA_IMG}hudson-yards-at-sunrise-ed-bobrin.jpg` },
  { title: "Birds",            link: "https://fineartamerica.com/profiles/bobrinphoto/collections/birds",           works: 12, thumbnail: `${FAA_IMG}majestic-adolescent-eagle-on-icey-lake-ed-bobrin.jpg`, objectPosition: 'center 60%' },
  { title: "Bucks County, PA", link: "https://fineartamerica.com/profiles/bobrinphoto/collections/bucks+county",   works: 12, thumbnail: `${FAA_IMG}eagle-hunting-ed-bobrin.jpg`, objectPosition: 'center 15%' },
  { title: "National Parks",   link: "https://fineartamerica.com/profiles/bobrinphoto/collections/national+parks", works: 6,  thumbnail: `${FAA_IMG}sunlit-slot-canyon-ed-bobrin.jpg` },
  { title: "Color Splash",     link: "https://fineartamerica.com/profiles/bobrinphoto/collections/splash+of+color",works: 6,  thumbnail: `${FAA_IMG}burst-of-red-ed-bobrin.jpg` },
  { title: "India",            link: "https://fineartamerica.com/profiles/bobrinphoto/collections/india",           works: 6,  thumbnail: `${FAA_IMG}mothers-embrace-ed-bobrin.jpg` },
  { title: "Colorado",         link: "https://fineartamerica.com/profiles/bobrinphoto/collections/colorado",        works: 4,  thumbnail: `${FAA_IMG}timesless-icon-union-station-ed-bobrin.jpg` },
  { title: "Wyoming",          link: "https://fineartamerica.com/profiles/bobrinphoto/collections/wyoming",         works: 4,  thumbnail: `${FAA_IMG}teton-sunrise-ed-bobrin.jpg` },
  { title: "San Francisco",    link: "https://fineartamerica.com/profiles/bobrinphoto/collections/san+francisco",  works: 5,  thumbnail: `${FAA_IMG}san-francisco-painted-ladies-ed-bobrin.jpg` },
  { title: "Florida",          link: "https://fineartamerica.com/profiles/bobrinphoto/collections/florida",         works: 7,  thumbnail: `${FAA_IMG}royal-tern-show-off-ed-bobrin.jpg` },
  { title: "Washington, DC",   link: "https://fineartamerica.com/profiles/bobrinphoto/collections/washington+dc",  works: 7,  thumbnail: `${FAA_IMG}dramatic-lincoln-memorial-in-twilight-ed-bobrin.jpg` },
  { title: "Chicago",          link: "https://fineartamerica.com/profiles/bobrinphoto/collections/chicago",         works: 6,  thumbnail: `${FAA_IMG}chicago-elevated-train-nightscape-ed-bobrin.jpg` },
  { title: "Long Exposures",   link: "https://fineartamerica.com/profiles/bobrinphoto/collections/long+exposures", works: 7,  thumbnail: `${FAA_IMG}majestic-icelandic-waterfall-cascade-ed-bobrin.jpg` },
  { title: "Hawaii",           link: "https://fineartamerica.com/profiles/bobrinphoto/collections/hawaii",          works: 3,  thumbnail: `${FAA_IMG}napali-coast-ed-bobrin.jpg` },
  { title: "Croatia",          link: "https://fineartamerica.com/profiles/bobrinphoto/collections/croatia",         works: 3,  thumbnail: `${FAA_IMG}life-behind-rustic-stone-walls-ed-bobrin.jpg` },
  { title: "Greece",           link: "https://fineartamerica.com/profiles/bobrinphoto/collections/greece",          works: 3,  thumbnail: `${FAA_IMG}iconic-blue-domes-of-santorini-ed-bobrin.jpg` },
  { title: "Jim Thorpe, PA",   link: "https://fineartamerica.com/profiles/bobrinphoto/collections/jim+thorpe",     works: 3,  thumbnail: `${FAA_IMG}colors-of-jim-thorpe-ed-bobrin.jpg` },
  { title: "Watkins Glen, NY", link: "https://fineartamerica.com/profiles/bobrinphoto/collections/watkins+glen",   works: 6,  thumbnail: `${FAA_IMG}seneca-lake-pier-watkins-glen-ny-ed-bobrin.jpg` },
  { title: "Canada",           link: "https://fineartamerica.com/profiles/bobrinphoto/collections/canada",          works: 2,  thumbnail: `${FAA_IMG}chateau-frontenac-ed-bobrin.jpg` },
  { title: "Turkey",           link: "https://fineartamerica.com/profiles/bobrinphoto/collections/turkey",          works: 1,  thumbnail: `${FAA_IMG}ancient-ruins-of-ephesus-library-ed-bobrin.jpg` },
  { title: "Seattle",          link: "https://fineartamerica.com/profiles/bobrinphoto/collections/seattle",         works: 1,  thumbnail: `${FAA_IMG}seattle-skyline-at-sunset-ed-bobrin.jpg` },
];

export const studioContent = {
  pullQuote:
    "I'm drawn to the moment just before the world moves on — the light that lingers, the silence between waves, the geometry a city makes at dawn.",

  biography: [
    "Edward Bobrin is a fine art photographer whose work spans four continents and decades of exploration. Trained as an engineer and self-taught behind the lens, he brings a precision of eye and a traveler's restlessness to every image — whether he's standing on a black-sand beach in Iceland at midnight or threading through the lanes of a Pompeii ruin.",
    "His photographs have found their way into private collections, corporate lobbies, and the living rooms of collectors who prize work that holds a room. Edward shoots primarily with medium-format digital and large-aperture primes, favoring the hours of transitional light — the blue hour, the golden hour — when the world is briefly theatrical.",
    "Based in the northeastern United States, he travels extensively throughout North America, Europe, India, and the high latitudes, returning each time with a tightly curated edit. His archive now includes over 100 available editions across 24 collections, from intimate wildlife portraits to sweeping urban panoramas.",
    "Edward's prints are produced through Fine Art America and available on Etsy, both offering museum-quality paper, canvas, metal, and framed editions with worldwide shipping.",
  ],

  processPullQuote:
    "The best photographs aren't taken — they're waited for. I'm patient in the field so the print can be quiet on the wall.",

  process: [
    {
      title: "Scouting & Light",
      description:
        "Every location is visited multiple times before a shot is made. Edward studies light direction, weather patterns, and seasonal shifts — often arriving hours before sunrise to be in position when the scene reveals itself.",
    },
    {
      title: "Capture & Edit",
      description:
        "Shooting in RAW on medium-format digital, he works within a tight discipline: no composite skies, no artificial elements. Post-processing refines what the camera recorded — tonal balance, micro-contrast, local colour. Nothing is invented.",
    },
    {
      title: "Fine Art Production",
      description:
        "Each edition is printed on archival materials — Hahnemühle fine-art paper, museum-grade canvas, or aluminium — with pigment inks rated for 70+ years. Prints arrive ready to hang and are inspected before shipment.",
    },
  ],

  trade: {
    intro:
      "Interior designers, art consultants, and hospitality buyers are welcome to work directly through Fine Art America's trade programme for volume pricing, large-format custom sizing, and designer discounts.",
    details:
      "Edward also licenses select images for editorial, hospitality, and corporate environments. All licensing enquiries are handled individually — reach out through the Fine Art America profile or Etsy shop to discuss your project.",
    offerings: [
      {
        title: "Designer Trade Discount",
        description:
          "Interior designers and art consultants receive preferential pricing through Fine Art America's trade programme. Register your business to unlock trade rates across the full archive.",
      },
      {
        title: "Custom Sizing",
        description:
          "Every print can be produced in bespoke dimensions to suit a specific wall, alcove, or installation. Large-format pieces up to 60 inches are available in paper, canvas, and metal.",
      },
      {
        title: "Commercial Licensing",
        description:
          "Select images are available for editorial, hospitality, and corporate licensing. Usage rights are negotiated directly and tailored to the medium, territory, and duration of your project.",
      },
      {
        title: "Framed & Installation-Ready",
        description:
          "Framed editions arrive ready to hang with hardware included. For large commercial installations, Edward can advise on grouping, spacing, and wall colour to maximise impact.",
      },
    ],
  },
};

export const aboutContent = {
  pullQuote:
    "My lens captures the quiet, majestic moments of our world — preserving atmosphere, light, and history for collectors who seek to bring the outside in.",
  biography:
    "Edward Bobrin is a fine art photographer specializing in travel landscapes, cityscapes, and wildlife. His work spans destinations across North America, Europe, Iceland, India, and beyond — available as gallery-quality prints for collectors and interior designers worldwide.",
};

export const homeContent = {
  siteTitle: "Edward Bobrin Photography",
  logoAlt: "Edward Bobrin Photography",

  nav: {
    links: [
      { label: "Portfolio", href: "#portfolio" },
      { label: "Collections", href: "#collections" },
      { label: "Studio", href: "/studio" },
      { label: "Trade & Licensing", href: "/studio#trade" },
    ],
    shopPrimaryLabel: "Shop Prints",
    shopSecondaryLabel: "Etsy",
    mobileShopPrimaryLabel: "Fine Art America",
    mobileShopSecondaryLabel: "Etsy Shop",
    openMenuAriaLabel: "Open menu",
    closeMenuAriaLabel: "Close menu",
  },

  hero: {
    eyebrow: "Fine-Art Travel · Landscape · Wildlife",
    headline: "Where the World",
    headlineContinued: "Holds Still.",
    scrollLabel: "Scroll to Explore",
  },

  about: {
    stats: [
      { value: "5.0★", label: "Etsy Rating" },
      { value: "24", label: "Collections" },
      { value: "100+", label: "Prints Available" },
    ],
  },

  portfolio: {
    heading: "Selected Works",
    subheading: "Curated fine-art editions from the archive.",
    viewAllLabel: "View All Work",
    workHoverLabel: "View Edition",
  },

  collections: {
    heading: "Collections",
    worksSuffix: "Works",
  },

  shopCta: {
    heading: "Gallery-Quality Prints",
    body: "Every photograph is available as a fine art print, canvas, metal, or framed edition. Shop directly through Fine Art America or Etsy — both ship worldwide.",
    primaryLabel: "Fine Art America",
    secondaryLabel: "Etsy Shop ★ 5.0",
  },

  lightbox: {
    viewPrintLabel: "View Print",
    closeLightboxAriaLabel: "Close lightbox",
    prevAriaLabel: "Previous photo",
    nextAriaLabel: "Next photo",
  },

  footer: {
    tagline: "Fine-Art Travel · Landscape · Wildlife Photography",
    copyright: "Edward Bobrin Photography · bobrin.com",
    studioLabel: "Studio",
    fineArtAmericaLabel: "Fine Art America",
    etsyLabel: "Etsy Shop",
    instagramAriaLabel: "Instagram",
    facebookAriaLabel: "Facebook",
  },
};
export const contactContent = {
  eyebrow: "Get in Touch",
  heading: "Contact the Studio",
  intro:
    "Whether you're enquiring about a custom print, a commercial licence, or a trade purchase — reach out directly and Edward will respond personally.",
  subjects: [
    "Print Enquiry",
    "Commercial Licensing",
    "Trade / Designer Discount",
    "Custom Sizing",
    "General Question",
  ],
};
