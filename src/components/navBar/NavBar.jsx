import React from "react"
import logo from "../../assets/img/logo.png"
import { navlinks } from "./data"
import { motion } from "framer-motion"
import { headerVariants } from "../../utils/motion"
const NavBar = ({ scrollInto }) => {
  const openMenu = () => {
    let aux = document.getElementById("burger")
    aux.classList.toggle("active")
    let aux1 = document.getElementById("cross")
    aux1.classList.toggle("cross")
  }
  return (
    <main className="header-main">
      <section className="header-content">
        <motion.img
          src={logo}
          alt="açai-colonial"
          initial="hidden"
          whileInView="show"
          variants={headerVariants}
          viewport={{ once: true, amount: 0.25 }}
        />
        <div className="navigation">
          {navlinks.map((item) => {
            return (
              <motion.a
                key={item.name}
                initial="hidden"
                whileInView="show"
                variants={headerVariants}
                viewport={{ once: true, amount: 0.25 }}
                onClick={() => scrollInto(item.link)}
              >
                {item.name}
              </motion.a>
            )
          })}
        </div>
        <motion.div
          className="hamburger-menu"
          initial="hidden"
          whileInView="show"
          variants={headerVariants}
          viewport={{ once: true, amount: 0.25 }}
        >
          <div
            className="hamburger-button"
            id="cross"
            onClick={() => openMenu()}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="hamburger-items active" id="burger">
            {navlinks.map((item, index) => {
              return (
                <p
                  key={index}
                  onClick={() => {
                    scrollInto(item.link)
                    openMenu()
                  }}
                >
                  <a>{item.name}</a>
                </p>
              )
            })}
          </div>
        </motion.div>
      </section>
    </main>
  )
}

export default NavBar
