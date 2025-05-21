
import Footer from "@/src/shared/Footer";
import Navbar from "@/src/shared/Navbar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "",
  description: "",
};

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
     <div className="flex flex-col min-h-screen">
          <Navbar/>

  
      <main className="flex-grow">
           <div>{children}</div>
      </main>
      <Footer/>
    </div>
    
    </>
  );
};

export default CommonLayout;
