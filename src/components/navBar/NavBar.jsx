import React from "react"
import logo from "../../assets/img/logo.png"
import { navlinks } from "./data"
import { motion } from "framer-motion"
import { headerVariants } from "../../utils/motion"
const NavBar = () => {
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
                href=""
                key={item.name}
                initial="hidden"
                whileInView="show"
                variants={headerVariants}
                viewport={{ once: true, amount: 0.25 }}
              >
                {item.name}
              </motion.a>
            )
          })}
        </div>
      </section>
    </main>
  )
}

export default NavBar
