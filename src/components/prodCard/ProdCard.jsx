import React from "react"
import acai from "../../assets/img/acai.jpg"

const ProdCard = ({ img, title }) => {
  return (
    <div className="prodCard">
      <div className="back-card-image">
        <div className="black-mask"></div>
        <img src={acai} alt={title} />
      </div>
      <img src={img} alt={title} className="productImage" />
      <h3>{title}</h3>
    </div>
  )
}

export default ProdCard
