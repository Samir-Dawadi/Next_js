"use client"    //Next.js ma yo component browser/client side ma run gara vaneko.Swiper browser ko features use garxa.server ma yo hudaina.
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import 'swiper/css'
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { useEffect, useState } from "react";
import { ProductType } from "@/types/ProductType";

export default function CategoryProfuctList() {
    const [products, setProducts] = useState<Array<ProductType>>()
    const getProductByCategorySlug = async () => {
        try {
            const response = await fetch("https://dummyjson.com/products/category/smartphones");
            const result = await response.json()
            setProducts(result.products)
            // console.log(result.products)
        }
        catch (e) {
            console.log("Cannot fetch the data from the dummyjson")
        }
    }
    useEffect(() => {
        getProductByCategorySlug()
    }, [])

    return (
        <>
            <section className="w-full bg-gray-400">
                <div className="max-w-7xl mx-auto flex flex-col gap-6 p-5">
                    <h1 className="text-3xl font-bold mt-5"> Extra Product List </h1>
                    <div className="w-full">
                        {

                            products && products.length > 0 ? <Swiper
                                modules={[Navigation, Pagination, Scrollbar, A11y]}
                                spaceBetween={20}
                                slidesPerView={4}
                                navigation                              //Left/right arrow buttons.(navigation={true}   =   navigation)
                                pagination={{ clickable: true }}        //Bottom ma dots show garxa.Dots clickable banauxa.
                                scrollbar={{ draggable: true }}         //mouse le tanera move garna milxa.
                                onSwiper={(swiper) => console.log(swiper)}
                                onSlideChange={() => console.log('slide change')}           //swipe garda swiper ma vako data haru dekhauca
                            >


                                {
                                    products.map((prod: ProductType, i: number) => (

                                        <SwiperSlide key={i}>
                                            <div className="rounded-md shadow-md hover:shadow-lg border-4">
                                                <div>
                                                    <img className="w-full size-[75%]"
                                                        src={prod.thumbnail}
                                                        alt="Product Image" />
                                                </div>
                                                <div className="p-4">
                                                    <h3 className="text-lg font-medium mb-2">{prod.title}</h3>
                                                    <p className="text-black-600 text-sm mb-2 line-clamp-3">{prod.description}</p>
                                                    <div className="flex items-center justify-between">
                                                        <span className="font-bold text-lg">$19.99</span>
                                                        <a href={'/product/' + prod.id}>
                                                            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                                                                Buy Now
                                                            </button>
                                                        </a>
                                                    </div>
                                                    <div className="flex">
                                                        <h1 className="text-md">Rating : </h1>{prod.rating}
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    ))
                                }


                            </Swiper> : <></>

                        }


                    </div>

                </div>
            </section>
        </>
    )
}