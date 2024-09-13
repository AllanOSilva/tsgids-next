
import Navbar from "@/components/navbar"
import Footer from "@/components/ui/footer";
import Selfie from "@/components/ui/selfie";


export default function Home() {
  return (
    <>
    <Navbar />
    
      <div id="corpo" className="pl-40  pt-4 justify-center ">
        <div id="home" className="sobre container text-center text-white border-slate-800 shadow-3fxl pb-8 mb-36 w-[80%] ">
          <h2 className="[text-shadow:_0_2px_0_black] bg-[#f1cb4b]">SOBRE A EMPRESA</h2>
          <div className=" flex col-auto
          align-middle text-center ">
          <p className="align-middle text-black font-bold m-2 text-center ">
          Somos uma empresa fundada em Setembro de 2010, na Cidade do Rio de Janeiro.
                              Atuamos na prestação de serviço nas áreas de Assistência Técnica e instalações de rede
                              de gases especiais; Possuimos equipes de técnicos capacitados para instalação, montagem
                              e manutenção.
                              Contamos com um galpão com 100 m² que é utilizado para a preparação do material a ser
                              usado no serviço, e também, para estocagem de material.
                              
                              O fundador da empresa atua no mercado há mais de 30 anos, período pelo qual acumulou
                              experiência nas áreas de instalação de redes para gases especiais, sejam inertes, corrosivos,
                              e ou explosivos.
          </p>
            <Selfie  />
          </div>
        </div>
        <div id="carrocel" className=" pl-40 pt-4 justify-center text-center text-white border-slate-800 shadow-3fxl pb-8 mb-36 w-[80%] ">
          oi
        </div>
      </div>
    
    <Footer />
    </>
  );
}
