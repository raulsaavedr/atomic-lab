
import { useState } from "react"
import icon_img_post from "../../../../../icons/icon_img_post.png"
import "../styles.scss";
import { Icons } from "../../../../icons";

export const BrandCard = ({ brand, redirectToBrandForm }) => {
  const [imgSrc, setImgSrc] = useState(brand.url_image)
  // const [cardClassName, setCardClassName] = useState()
  const [cardHeaderClassName, setCardHeaderClassName] = useState(
    brand.url_image?.endsWith("svg") ?
      "card-header svg-img" : "card-header normal-img"
  )
  const onErrorImgHandler = (e) => {
    // e.currentTarget.src = fallback
    // console.log(e)
    setImgSrc(icon_img_post)
    setCardHeaderClassName("card-header plus-icon")
    // e.currentTarget.style = " display: flex; justify-content: center; background-color: white; max-width: 80px; object-fit: contain;"

  }
  return (
    <div
      // key={index}
      className="card"
      onClick={() => redirectToBrandForm(brand.id)}
    >
      <div
        className={cardHeaderClassName}
      >
        {imgSrc ? (
          <img
            src={imgSrc}
            onError={onErrorImgHandler}
            alt={imgSrc}
          />
        ) : (
          Icons("icon_img_post")
        )}
      </div>
      <div className="card-body">
        {brand.industry ?
          <span className="tag tag-teal">{brand.industry}</span> :
          undefined
        }
        <h3>{brand.name}</h3>

      </div>
    </div>
  )
}

export default BrandCard;