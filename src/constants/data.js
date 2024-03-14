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
