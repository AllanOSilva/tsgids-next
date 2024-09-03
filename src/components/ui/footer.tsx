"use client"
export default function Footer() {
    return(
        <>
        <footer  className="footer self-end shadow-3fxl text-center px-4 py-2">
          <div className="container">
              <section>
                  <a data-mdb-ripple-init
                  className="btn bg-[#3b5998] text-white btn-floating m-1"
                  href="#"
                  role="button"><i className="fab fa-facebook-f"></i></a>
                  <a
                  data-mdb-ripple-init
                  className="btn bg-[#55acee] text-white btn-floating m-1"
                  
                  href="#!"
                  role="button"
                  ><i className="fab fa-twitter"></i></a>
                    <a
                        data-mdb-ripple-init
                        className="btn bg-[#ac2bac] text-white btn-floating m-1"
                        
                        href="#!"
                        role="button"
                        ><i className="fab fa-instagram"></i
                    ></a>
                    <a
                        data-mdb-ripple-init
                        className="btn bg-[#2bac52] text-white btn-floating m-1"
                        
                        href="https://wa.me/5521970416875"
                        role="button"
                        ><i className="fab fa-whatsapp"></i
                    ></a>
                </section>
            </div>
            <div className="text-center">
                © 2024 Copyright:
            </div>
      </footer>
        </>
    )
    
};
