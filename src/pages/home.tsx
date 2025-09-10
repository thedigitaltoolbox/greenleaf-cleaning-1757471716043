/* Generated from SiteSpec */
import SimpleCentered from "@/sections/SimpleCentered";
import OffsetWithFeatureList from "@/sections/OffsetWithFeatureList";
import ThreeTiers from "@/sections/ThreeTiers";

export default function home(){
  return (<main>
    <SimpleCentered {...{
  headline: "Welcome to GreenLeaf Cleaning!",
  subhead: "Your trusted partner for a cleaner, greener home.",
  imageUrl: "https://example.com/cleaning-image.jpg",
  primaryCta: {
    text: "Get Started",
    href: "/contact"
  },
  secondaryCta: {
    text: "Learn More",
    href: "/services"
  }
}} />
    <OffsetWithFeatureList {...{
  title: "Our Top Features",
  subtitle: "Why Choose GreenLeaf Cleaning?",
  items: [
    {
      title: "Eco-Friendly Products",
      body: "We use only environmentally safe cleaning solutions that are safe for your family and pets.",
      icon: "leaf"
    },
    {
      title: "Professional Team",
      body: "Our trained professionals ensure a thorough and reliable cleaning every time.",
      icon: "person"
    },
    {
      title: "Flexible Scheduling",
      body: "Choose a cleaning schedule that fits your lifestyle, with options for one-time or recurring services.",
      icon: "calendar"
    }
  ]
}} />
    <ThreeTiers {...{
  title: "Affordable Pricing Plans",
  subtitle: "Choose the perfect plan for your cleaning needs.",
  tiers: [
    {
      name: "Basic Clean",
      id: "basic-clean",
      href: "/pricing#basic-clean",
      priceMonthly: "$99",
      description: "Ideal for light cleaning and maintenance.",
      features: [
        "Weekly cleaning",
        "Dusting and vacuuming",
        "Kitchen and bathroom sanitation"
      ],
      mostPopular: false
    },
    {
      name: "Standard Clean",
      id: "standard-clean",
      href: "/pricing#standard-clean",
      priceMonthly: "$149",
      description: "Comprehensive cleaning for a fresh home.",
      features: [
        "Bi-weekly cleaning",
        "Deep kitchen and bathroom clean",
        "Window washing"
      ],
      mostPopular: true
    },
    {
      name: "Premium Clean",
      id: "premium-clean",
      href: "/pricing#premium-clean",
      priceMonthly: "$199",
      description: "The ultimate cleaning experience.",
      features: [
        "Weekly deep cleaning",
        "Organizing and decluttering",
        "Eco-friendly products"
      ],
      mostPopular: false
    }
  ]
}} />
  </main>);
}
