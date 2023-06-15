import React from "react"
import NavBar from "./components/navBar/NavBar"
import leafBackground from "./assets/img/leafBackground.png"
import leaf2 from "./assets/img/leaf2.png"
import acai from "./assets/img/acai.jpg"
import startImage from "./assets/img/startImage.png"
import videobg1 from "./assets/img/videobg1.png"
import videobg2 from "./assets/img/videobg2.png"
import mission from "./assets/img/mission.png"
import vision from "./assets/img/vision.png"
import values from "./assets/img/values.png"
import { motion } from "framer-motion"
import { aboutVariants, heroVariants } from "./utils/motion"
import { BsChevronCompactUp } from "react-icons/bs"
function App() {
  return (
    <>
      <NavBar />
      <main className="content-main">
        <motion.img
          src={leafBackground}
          alt=""
          className="leaf"
          initial="hidden"
          whileInView="show"
          variants={heroVariants}
          viewport={{ once: true, amount: 0.25 }}
        />
        <motion.img
          src={leaf2}
          alt=""
          className="leaf2"
          initial="hidden"
          whileInView="show"
          variants={aboutVariants}
          viewport={{ once: true, amount: 0.25 }}
        />
        <section className="start-section">
          <motion.img
            src={startImage}
            alt=""
            initial="hidden"
            whileInView="show"
            variants={heroVariants}
            viewport={{ once: true, amount: 0.25 }}
          />
          <motion.div
            className="start-content"
            initial="hidden"
            whileInView="show"
            variants={aboutVariants}
            viewport={{ once: true, amount: 0.25 }}
          >
            <div className="texts">
              <h1>AÇAÍ COLONIAL</h1>
              <h3>"O melhor açai de Rondonia"</h3>
              <p>
                Pirate ipsum arrgh bounty warp jack. Pirate chain locker yarr
                bilge topsail lugsail pink cat. Tender yard furl tell yard cat.
                Jib bucko pillage yer yellow lugsail heave line lanyard scourge.
              </p>
            </div>
            <button className="start-button">Fale conosco</button>
          </motion.div>
          <BsChevronCompactUp className="arrow-icon" />
          <BsChevronCompactUp className="arrow-icon1" />
        </section>
      </main>
      <section className="product-carousel"></section>
      <section className="our-history">
        <main className="history-content">
          <div className="hist-image">
            <motion.img
              initial="hidden"
              whileInView="show"
              variants={heroVariants}
              viewport={{ once: true, amount: 0.25 }}
              src={acai}
              alt="Açaí"
            />
            <motion.img
              initial="hidden"
              whileInView="show"
              variants={heroVariants}
              viewport={{ once: true, amount: 0.25 }}
              src={acai}
              alt="Açaí"
            />
          </div>
          <motion.div
            initial="hidden"
            whileInView="show"
            variants={aboutVariants}
            viewport={{ once: true, amount: 0.25 }}
            className="hist-text"
          >
            <h1>Nossa História</h1>
            <p>
              Pirate ipsum arrgh bounty warp jack. Pirate chain locker yarr
              bilge topsail lugsail pink cat. Tender yard furl tell yard cat.
              Jib bucko pillage yer yellow lugsail heave line lanyard scourge.
              Pirate ipsum arrgh bounty warp jack. Pirate chain locker yarr
              bilge topsail lugsail pink cat. Tender yard furl tell yard cat.
              Jib bucko pillage yer yellow lugsail heave line lanyard scourge.
            </p>
          </motion.div>
        </main>
      </section>
      <section className="inst-video">
        <main className="video-content">
          <img src={videobg1} alt="" />
          <img src={videobg2} alt="" />
          <iframe
            src="https://www.youtube.com/embed/HE9BWs5VfYA"
            title="Restoration of a Rare Honda Civic TYPE R"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </main>
      </section>
      <section className="mission">
        <main className="mission-content">
          <div className="block1">
            <img src={mission} alt="" />
            <div className="mission-text">
              <h2>Missão</h2>
              <p>
                Pirate ipsum arrgh bounty warp jack. Pirate chain locker yarr
                bilge topsail lugsail pink cat. Tender yard furl tell yard cat.
                Jib bucko pillage yer yellow lugsail heave line lanyard scourge.
              </p>
            </div>
          </div>
          <div className="block2">
            <div className="mission-text">
              <h2>Visão</h2>
              <p>
                Pirate ipsum arrgh bounty warp jack. Pirate chain locker yarr
                bilge topsail lugsail pink cat. Tender yard furl tell yard cat.
                Jib bucko pillage yer yellow lugsail heave line lanyard scourge.
              </p>
            </div>
            <img src={vision} alt="" />
          </div>
          <div className="block1">
            <img src={values} alt="" />
            <div className="mission-text">
              <h2>Valores</h2>
              <p>
                Pirate ipsum arrgh bounty warp jack. Pirate chain locker yarr
                bilge topsail lugsail pink cat. Tender yard furl tell yard cat.
                Jib bucko pillage yer yellow lugsail heave line lanyard scourge.
              </p>
            </div>
          </div>
        </main>
      </section>
      <section className="franq">
        <main className="franq-content">
          <h1>Seja um Franqueado</h1>
          <div className="qualities">
            <div className="quality">
              <h4>Qualidade 1</h4>
            </div>
            <div className="quality">
              <h4>Qualidade 2</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
                deleniti accusamus voluptate, ipsa tenetur totam perferendis
                distinctio ducimus earum facilis cumque consequuntur, ut nemo
                sit aut quam voluptatibus ipsam tempore.
              </p>
            </div>
            <div className="quality">
              <h4>Qualidade 3</h4>
            </div>
          </div>
          <button className="start-button">Tenho Interesse</button>
        </main>
      </section>
      <section className="insta">
        <main className="insta-main"></main>
      </section>
    </>
  )
}

export default App
