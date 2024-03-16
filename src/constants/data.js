import business from "../assets/business.svg";
import audience from "../assets/audience.svg";
import brand from "../assets/brand.svg";

export const navLinks = [
  {
    id: "benefits",
    title: "Benefits",
    url: "/benefits",
  },
  {
    id: "work",
    title: "Work",
    url: "/about",
  },
  {
    id: "services",
    title: "Services",
    url: "/services",
    sublinks: [
      {
        id: "webDevelopment",
        title: "Web Development",
        url: "/services/web-development",
      },
      {
        id: "shopifySEO",
        title: "SEO for Shopify Stores",
        url: "/services/shopify-seo",
      },
    ],
  },
  {
    id: "testimonials",
    title: "Testimonials",
    url: "/testimonials",
  },
  {
    id: "packages",
    title: "Packages",
    url: "/packages",
  },
  {
    id: "faq",
    title: "FAQ",
    url: "/faq",
  },
];

export const heroContents = [
  {
    title: "Unlock Your Business's Online Potential with Seamless Web Presence",
    subtitle:
      "We Build, Optimize, and Elevate Your Digital Presence, So You Can Focus on Growing Your Business.",
  },
];

export const benefitsData = [
  {
    image: business,
    title: "Business",
    caption: "Focus on Your Core Business",
    content:
      "Reclaim your time by letting us handle landing page development, product creation, and SEO intricacies.",
  },
  {
    image: audience,
    title: "Audience",
    caption: "Captivate Your Audience",
    content:
      "Our expert team tailors designs beyond templates, ensuring a visually appealing, user-friendly online presence that captures and retains your customers.",
  },
  {
    image: brand,
    title: "Brand",
    caption: "Amplify Your Brand's Influence",
    content:
      "We go beyond services, crafting a holistic online experience that resonates with your audience, making your brand memorable and influential.",
  },
];

export const testimonialContents = [
  {
    id: "testimonialSection",
    title: "Valued guest feedback",
    subtitle: "",
    subheading:
      "Positive feedback and a simple thank you go a long way. It motivates us to provide world-class hospitality to our guests.",
    testimonials: [
      {
        id: 1,
        content:
          "Working with Luminr on our landing pages design and development was a game-changer for us. Prayatna and the team not only understood our brand vision but elevated it to new heights. Their creativity, attention to detail, and commitment to excellence set them apart. Highly recommended.",
        author: "Hussain Shekh",
        position: "CEO, Brand Spark Visuals",
        image:
          "https://luminr.co/_next/static/media/hussian_shekh.f3c80ae1.webp",
      },
      {
        id: 2,
        content:
          "Working with Luminr on our landing pages design and development was a game-changer for us. Prayatna and the team not only understood our brand vision but elevated it to new heights. Their creativity, attention to detail, and commitment to excellence set them apart. Highly recommended.",
        author: "Hussain Shekh",
        position: "CEO, Brand Spark Visuals",
        image:
          "https://luminr.co/_next/static/media/hussian_shekh.f3c80ae1.webp",
      },
    ],
  },
];

export const portfolioContents = [
  {
    id: "portfolioTitle",
    title: "Portfolio",
    portfolio: [
      {
        id: "thehimalayanco",
        title: "The Himalayan Co",
        logo: "https://www.thehimalayan.co/wp-content/uploads/2023/07/The-Himalayan-Co-Logo.png.webp",
        subtitle: "",
        description: "",
        image: "https://luminr.co/_next/static/media/chewybliss.9d49ca34.webp",
        url: "https://www.thehimalayan.co/",
      },

      {
        id: "brandspark",
        title: "Brand Spark",
        subtitle: "",
        description: "",
        image: "https://luminr.co/_next/static/media/brandpark.a3c20a61.webp",
        url: "",
      },
      {
        id: "tigg",
        title: "Tigg",
        logo: "https://assets-global.website-files.com/61d2839d3c449e856767b6de/61d80296849b802084b107a2_TiggLogo.svg",
        subtitle: "",
        description: "",
        image: "https://luminr.co/_next/static/media/tiggapp.41264040.webp",
        url: "https://www.tiggapp.com/",
      },
      {
        id: "vistamails",
        title: "Vista Mails",
        subtitle: "",
        description: "",
        image: "https://luminr.co/_next/static/media/vista-mails.65875c0d.webp",
        url: "",
      },
    ],
  },
];
