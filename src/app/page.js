import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import AboutSection from "@/components/AboutSection";
import ProjectSection from "@/components/ProjectSection";
import Footer from "@/components/Footer.jsx";
import Achievements from "@/components/Achievements";
import page from "@/contact/page"


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#000000]">
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <Hero />
        <Achievements />
        <AboutSection />
        <ProjectSection />
        
      </div>
      <Footer />
    </main>
  );
}