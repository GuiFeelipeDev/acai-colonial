import React from "react"
import logoSlim from "../../assets/img/logoSlim.png"
import {
  AiOutlineInstagram,
  AiOutlineWhatsApp,
  AiOutlineMail,
} from "react-icons/ai"
import { IoLocationSharp } from "react-icons/io5"
import { IoMdArrowDropright } from "react-icons/io"
import { BsTelephone } from "react-icons/bs"
import { navlinks } from "../navBar/data"
const Footer = ({ scrollInto }) => {
  return (
    <>
      <section className="footer">
        <main className="footer-content">
          <div className="footer-block">
            <h2>Sessões</h2>
            {navlinks.map((item) => {
              return (
                <>
                  <div className="text-format">
                    <IoMdArrowDropright
                      style={{ width: "30px", height: "30px" }}
                    />
                    <p onClick={() => scrollInto(item.link)}>{item.name}</p>
                  </div>
                </>
              )
            })}
          </div>
          <div className="footer-block">
            <h2>Contato</h2>
            <div className="text-format">
              <IoLocationSharp style={{ width: "40px", height: "40px" }} />
              <p>
                Av. Nações Unidas, 2013, Princesa Isabel - 76964-019 - Cacoal,
                RO
              </p>
            </div>
            <div className="text-format">
              <BsTelephone style={{ width: "30px", height: "30px" }} />
              <p>+55 69 99237-2050</p>
            </div>
            {/* <div className="text-format">
              <AiOutlineMail style={{ width: "35px", height: "35px" }} />
              <p>contato@acaicolonial.com</p>
            </div> */}
          </div>

          <div className="footer-block">
            <h2>DESENVOLVIMENTO</h2>
            <p>SLIM - Dev</p>
            <div className="social">
              <AiOutlineInstagram
                style={{ width: "40px", height: "40px", cursor: "pointer" }}
                onClick={() =>
                  window.open("https://www.instagram.com/sociallift_media/")
                }
              />
              <AiOutlineWhatsApp
                style={{ width: "40px", height: "40px", cursor: "pointer" }}
                onClick={() =>
                  window.open(
                    "https://api.whatsapp.com/send?phone=5566992088625"
                  )
                }
              />
            </div>
            <img src={logoSlim} alt="SLIM" />
          </div>
        </main>
        <div className="rights">TODOS OS DIREITOS RESERVADOS</div>
      </section>
    </>
  )
}

export default Footer
