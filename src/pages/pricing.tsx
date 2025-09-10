/* Generated from SiteSpec */
import ThreeTiersWithToggle from "@/sections/ThreeTiersWithToggle";

export default function pricing(){
  return (<main>
    <ThreeTiersWithToggle {...{
  title: "Choose Your Plan",
  subtitle: "Affordable cleaning solutions tailored for you.",
  showToggle: true,
  tiers: [
    {
      name: "Basic",
      id: "basic-plan",
      href: "/pricing/basic",
      price: {
        monthly: "$50",
        annually: "$540"
      },
      description: "Essential cleaning services for your home.",
      features: [
        "Weekly cleaning",
        "Basic supplies included",
        "Flexible scheduling"
      ],
      mostPopular: false
    },
    {
      name: "Standard",
      id: "standard-plan",
      href: "/pricing/standard",
      price: {
        monthly: "$75",
        annually: "$810"
      },
      description: "Comprehensive cleaning for a spotless home.",
      features: [
        "Bi-weekly cleaning",
        "All supplies included",
        "Priority scheduling",
        "Free consultation"
      ],
      mostPopular: true
    },
    {
      name: "Premium",
      id: "premium-plan",
      href: "/pricing/premium",
      price: {
        monthly: "$100",
        annually: "$1,080"
      },
      description: "Luxury cleaning services for the discerning client.",
      features: [
        "Weekly cleaning",
        "Eco-friendly supplies",
        "Customizable services",
        "24/7 customer support"
      ],
      mostPopular: false
    }
  ]
}} />
  </main>);
}
