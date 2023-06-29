import React, { useLayoutEffect, useRef, useState } from "react"
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
import Footer from "./components/footer/Footer"
import SwiperProds from "./components/swiper/SwiperProds"
function App() {
  const startHef = useRef(null)
  const histHef = useRef(null)
  const instHef = useRef(null)
  const franqHef = useRef(null)
  const quantRef = useRef(null)
  const scrollInto = (prop) => {
    switch (prop) {
      case "start":
        startHef.current.scrollIntoView()
        break
      case "hist":
        histHef.current.scrollIntoView()
        break
      case "inst":
        instHef.current.scrollIntoView()
        break
      case "franq":
        franqHef.current.scrollIntoView()
        break
    }
  }

  const [width, setWidth] = useState(0)

  useLayoutEffect(() => {
    setWidth(quantRef.current.offsetWidth)
  }, [])

  return (
    <>
      <NavBar scrollInto={scrollInto} />
      <main className="content-main" ref={startHef}>
        <motion.img
          src={leafBackground}
          alt=""
          className="leaf"
          initial="hidden"
          whileInView="show"
          variants={heroVariants}
          viewport={{ once: true, amount: 0.25 }}
        />
        <div className="leaf-container">
          <motion.img
            src={leaf2}
            alt=""
            className="leaf2"
            initial="hidden"
            whileInView="show"
            variants={aboutVariants}
            viewport={{ once: true, amount: 0.25 }}
          />
        </div>
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
              <h3>"O melhor açaí de Rondônia"</h3>
              <p>
                Para nós, açaí não é só para saborear, mas também aproveitar a
                companhia das pessoas que amamos. Venha fazer parte dessa
                família.
              </p>
            </div>
            <button
              className="start-button"
              onClick={() =>
                window.open("https://www.instagram.com/acaicolonialfabrica/")
              }
            >
              Saiba Mais
            </button>
          </motion.div>
          <BsChevronCompactUp className="arrow-icon" />
          <BsChevronCompactUp className="arrow-icon1" />
        </section>
      </main>
      <section className="product-carousel">
        <main className="carousel-content" ref={quantRef}>
          <SwiperProds quant={width} />
        </main>
      </section>
      <div className="floathist" ref={histHef}></div>
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
              No dia 1 de Janeiro de 2017, um sonho se deu inicio em Ji-Paraná.
              A marca Açaí Colonial saiu do sonho de um Rondoniano nascido em
              Aracajú, <b>Aureo Neuton da Silva</b>, que é formado em Direito e
              Mestre em Artes Culinárias, com destaque em sorveteria e
              confeitaria. <br /> A empresa é fruto da experiência de mais de 20
              anos no mercado de sorveterias, que fez com que o projeto se
              tornasse o sucesso consolidado que é hoje!
            </p>
          </motion.div>
        </main>
      </section>
      <section className="inst-video">
        <div className="floating-ref" ref={instHef}></div>
        <main className="video-content">
          <img src={videobg1} alt="" />
          <img src={videobg2} alt="" />
          {/* <iframe
            src="https://www.youtube.com/embed/HE9BWs5VfYA"
            title="Restoration of a Rare Honda Civic TYPE R"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe> */}
          <div className="coming-soon">
            <h3>
              Em breve...
              <br />
              Nosso vídeo institucional.
            </h3>
          </div>
        </main>
      </section>
      <section className="mission">
        <main className="mission-content">
          <div className="block1">
            <img src={mission} alt="" />
            <div className="mission-text">
              <h2>Missão</h2>
              <p>
                Valorizar os produtos regionais, proporcionado uma experiência
                gastronômica saudável, energética e prazerosa;
              </p>
            </div>
          </div>
          <div className="block2">
            <div className="mission-text">
              <h2>Visão</h2>
              <p>
                Ser reconhecida como uma empresa comprometida com o
                desenvolvimento regional e a saúde de seus clientes;
              </p>
            </div>
            <img src={vision} alt="" />
          </div>
          <div className="block1">
            <img src={values} alt="" />
            <div className="mission-text">
              <h2>Valores</h2>
              <p>
                De forma sustentável, temos respeito ao meio ambiente, clientes,
                parceiros e colaboradores;
              </p>
            </div>
          </div>
        </main>
      </section>
      <section className="franq">
        <main className="franq-content">
          <div className="floating-ref" ref={franqHef}></div>
          <h1>Seja um Franqueado</h1>
          <div className="qualities">
            <div className="quality">
              <h4>Quem pode ser?</h4>
              <p>
                Empreendedores que buscam um negócio seguro e desejam firmar uma
                parceria com o franqueador. Famílias e casais, jovens que
                desejam ter seu próprio negócio. Pessoas identificadas com a
                marca e o produto.
              </p>
            </div>
            <div className="quality">
              <h4>Por que franquear?</h4>
              <p>
                Os anos de experiência permitiram a nossa empresa oferecer um
                produto orgânico, artesanal, sem conservantes, com maior
                concentração de nutrientes. Criando na região confiança na Açaí
                Colonial e credibilidade.
              </p>
            </div>
            <div className="quality">
              <h4>O que preciso?</h4>
              <p>
                Você precisa valorizar o crescimento profissional, lucratividade
                e rentabilidade do negócio, o franqueado deve ser dinâmico,
                positivo, um lider focado e disposto.
              </p>
            </div>
          </div>
          <button
            className="start-button"
            onClick={() =>
              window.open("https://api.whatsapp.com/send?phone=5569992372050")
            }
          >
            Tenho Interesse
          </button>
        </main>
      </section>
      <section className="insta">
        <main className="insta-main"></main>
      </section>
      <Footer scrollInto={scrollInto} />
    </>
  )
}

export default App
