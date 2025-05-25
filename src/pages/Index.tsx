import Hero from "@/components/Hero";
import Navigation from "@/components/Navigation";
import AboutSection from "@/components/AboutSection";
import MethodsSection from "@/components/MethodsSection";
import ActivitiesSection from "@/components/ActivitiesSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <AboutSection />
      <MethodsSection />
      <ActivitiesSection />
      <Footer />
    </div>
  );
};

export default Index;
