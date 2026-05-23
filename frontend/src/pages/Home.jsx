import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ChatAssistant from "../components/ChatAssistant";
import CompareCard from "../components/CompareCard";
import PlannerForm from "../components/PlannerForm";
import FAQSection from "../components/FAQSection";
import Footer from "../components/Footer";
export default function Home() {

  return (
    <div className="
    bg-slate-50
    min-h-screen">

      <Navbar />

      <Hero />

      <ChatAssistant />

      <CompareCard />

      <PlannerForm />

      <FAQSection />

      <Footer/>
    </div>
  );
}