import React from 'react'
import Header from '../header/Header'
import Hero from '../hero/Hero'
import Product from '../product/Product'
import rasm1 from "../../assets/s24.png"
import rasm2 from "../../assets/tv.png"
import rasm3 from "../../assets/hom.png"
import rasm4 from "../../assets/shop.jpg"

const Main = () => {
    return (
        <>
            <Header />
            <Hero />
            <Product
                classN="product__wrapper"
                bg="#C5D7E3"
                bgimg=""
                title="Mobile & Computing"
                items={["Galaxy S24 Ultra",
                    "Galaxy S24 Ultra",
                    " Galaxy Z Flip6",
                    "Galaxy Tab S10 Series",
                    "Galaxy Watch Ultra"]}
                img={rasm1}
                subtitle="Galaxy S24 Ultra"
                desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem sunt inventore magni hic dolorum cupiditate."
                btn1="Learn more"
                btn2="Buy now" />
            <Product
                classN="product__wrapper sec mt"
                bg=""
                bgimg={rasm4}
                title="Early birds get the best holiday deals"
                items={[]}
                img=""
                subtitle=""
                desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem sunt inventore magni hic dolorum cupiditate."
                btn1=""
                btn2="Buy now" />
            <Product
                classN="product__wrapper sec"
                bg=""
                bgimg={rasm2}
                title="TV & Audio"
                items={["OLED S95D",
                    "Samsung Neo QLED 4K QN85D",
                    "  Music Frame"]}
                img=""
                subtitle="Bright whites.Pure blacks"
                desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem sunt inventore magni hic dolorum cupiditate."
                btn1=""
                btn2="Buy now" />
            <Product
                classN="product__wrapper"
                bg="#F7F7F7"
                bgimg=""
                title="Home Appliances"
                items={["Early Black Friday",
                    " Refrigerators",
                    "  Bespoke Laundry",
                    " Cooking Power Pair"]}
                img={rasm3}
                subtitle="Get the best deals of the season"
                desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem sunt inventore magni hic dolorum cupiditate."
                btn1=""
                btn2="Shop all deals" />
        </>
    )

}

export default Main