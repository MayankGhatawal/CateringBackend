import { HeroSection } from "../components/hero-section"
import { ServicesOverview } from "../components/services-overview"
import { WhyChooseUs } from "../components/why-choose-us"
import { StatsSection } from "../components/stats-section"
import { CTASection } from "../components/cta-section"
import { Helmet } from "react-helmet";

export default function HomePage() {
  return (
    <>
    <Helmet>
  <title>Home - Varsha Enviro Technologies</title>
  <meta
    name="description"
    content="Welcome to Varsha Enviro Technologies – your trusted partner in water, air, and waste treatment solutions. Explore our eco-friendly and efficient services tailored for modern environmental needs."
  />
  <meta
    name="keywords"
    content="Varsha Enviro Technologies, Environmental Services, Water Treatment, Air Scrubber, Waste Management, Operation and Maintenance, AMC Services"
  />
  <meta name="author" content="Varsha Enviro Technologies" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
</Helmet>
      <HeroSection />
      <ServicesOverview />
      <WhyChooseUs />
      <StatsSection />
      <CTASection />
    </>
  )
}
