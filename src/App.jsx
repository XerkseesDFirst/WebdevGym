import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Pricing from './pages/Pricing';
import Trainers from './pages/Trainers';
import Services from './pages/Services';
import FAQs from './pages/FAQs';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#181818] font-montserrat text-white relative">
      <Navbar />
      <main className="flex-1 w-full flex flex-col">
        {/* Ensure content is always below the sticky navbar */}
        <div className="flex-1 flex flex-col">
          <section id="home" tabIndex={-1} className="w-full flex justify-center items-center py-10 md:py-20 px-2 scroll-mt-20"><Home /></section>
          <section id="about-us" className="w-full flex justify-center items-center py-10 md:py-20 px-2 scroll-mt-20"><AboutUs /></section>
          <section id="pricing" className="w-full flex justify-center items-center py-10 md:py-20 px-2 scroll-mt-20"><Pricing /></section>
          <section id="trainers" className="w-full flex justify-center items-center py-10 md:py-20 px-2 scroll-mt-20"><Trainers /></section>
          <section id="services" tabIndex={-1} className="w-full flex justify-center items-center py-10 md:py-20 px-2 scroll-mt-20"><Services /></section>
          <section id="faqs" tabIndex={-1} className="w-full flex justify-center items-center py-10 md:py-20 px-2 scroll-mt-20"><FAQs /></section>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;