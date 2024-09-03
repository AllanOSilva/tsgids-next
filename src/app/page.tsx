
import Navbar from "@/components/navbar"
import Footer from "@/components/ui/footer";


export default function Home() {
  return (
    <>
    <Navbar />
    <div id="corpo" className="pl-24 pr-3 pt-4 justify-center ">
      <div id="home" className="sobre container text-center w-[70%] text-white border-slate-800 pb-8 mb-36 min-h-[40vh]">
        <h2>SOBRE A EMPRESA</h2>
      </div>
    </div>
    <Footer />
    </>
  );
}
