import React from 'react'
import "./Product.scss"

const Product = ({ classN, bg, bgimg, title, items, img, subtitle, desc, btn1, btn2}) => {
    const categoryItems = items?.map((item, inx) => (
        <li className='product__item' key={inx}>{item}</li>
    ))
    return (
        <section className='product'>
            <div className="container">
                <div style={{ backgroundColor: bg, background: `url(${bgimg}) no-repeat center/cover` }} className={classN}>
                    <h3 className='product__title'>{title}</h3>
                    <ul className="product__collection">{categoryItems}</ul>
                    <div className="product__img">
                        <img src={img} alt="" />
                    </div>
                    <h2 className="product__subtitle">{subtitle}</h2>
                    <p className="product__desc">{desc}</p>
                    <div className="product__button">
                        <button className='product__btn1'>{btn1}</button>
                        <button className='product__btn2'>{btn2}</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Product