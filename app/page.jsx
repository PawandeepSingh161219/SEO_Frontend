
import Companies from "@/components/Companies";
import DashboardPreview from "@/components/DashboardPreview";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";


export default function Home() {
    return (
        <>
           <Navbar/>
           <Hero/>
           <Companies/>
           <Features/>

           <DashboardPreview/>

           <Footer/>
            
        </>
    );
}