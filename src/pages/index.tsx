
import { Inter } from "next/font/google";

import Banner from "@/components/Homepage/banner/Banner";
import Ourservices from "@/components/Homepage/ourservices/Ourservices";
import Navbar from "@/components/global_components/navbar/Navbar";
import Places from "@/components/Homepage/places/Places";
import Business from "@/components/Homepage/business/Business";
import Footer from "@/components/global_components/footer/Footer";
import Space from "@/components/Homepage/findspace/space";
import Workbetter from "@/components/Homepage/workbetter/Workbetter";
import Perfectspace from "@/components/Homepage/perfectspace/perfectspace";
import Brandslogos from "@/components/Homepage/brandslogos/Brandslogos";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div className="Home">
        <Navbar />
        <Banner />
        <Ourservices />
        <Places />
        <Business />
        <Space />
        <Workbetter /> 
        <Perfectspace />
        <Brandslogos />
        <Footer />
      </div>
    </>
  );
}
