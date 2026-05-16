
//client side component
"use client"
import { Swiper, SwiperSlide } from "swiper/react"
import 'swiper/css'

export default function HeroSection() {
    return (
        <>
            <section className="bg-gray-100 py-20">

                <div className="max-w-7xl mx-auto">
                    <Swiper
                        spaceBetween={50}           //space betn slides
                        slidesPerView={1}          //how many slide in a screen
                        onSlideChange={() => console.log('slide change')}     //slide change huda yo func chalxa
                        onSwiper={(swiper) => console.log(swiper)}              //swipe garda swiper ma vako data haru dekhauca
                    >
                        <SwiperSlide>
                            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center bg-white px-8 md:px-16 py-16 rounded-3xl shadow-lg">

                                {/* Left Side */}
                                <div>

                                    <p className="text-red-500 font-semibold tracking-widest mb-4">
                                        TRENDING SHOES 2025
                                    </p>

                                    <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6 text-gray-900">
                                        Walk With <br /> Style & Comfort
                                    </h1>

                                    <p className="text-gray-500 text-lg leading-8 mb-8">
                                        Discover premium sneakers designed for everyday
                                        comfort, sports performance and modern fashion.
                                    </p>

                                    <div className="flex gap-4">

                                        <a href="#FeatureShoes">
                                            <button className="bg-black text-white px-8 py-4 rounded-2xl hover:scale-105 transition duration-300">
                                                Shop Now
                                            </button>
                                        </a>

                                        <a href="#FeatureShoes">
                                            <button className="border border-black px-8 py-4 rounded-2xl hover:bg-black hover:text-white transition duration-300">
                                                Explore
                                            </button>
                                        </a>

                                    </div>

                                </div>

                                {/* Right Side */}
                                <div className="relative">

                                    <div className="absolute inset-0 bg-red-100 rounded-full blur-3xl opacity-50"></div>

                                    <img
                                        src="https://images.unsplash.com/photo-1542291026-7eec264c27ff"
                                        alt="shoe"
                                        className="relative z-10 w-full h-125 object-cover rounded-3xl shadow-2xl"
                                    />

                                </div>

                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center bg-gray-900 px-8 md:px-16 py-16 rounded-3xl shadow-lg overflow-hidden">

                                {/* Left Side */}
                                <div>

                                    <p className="text-yellow-400 font-semibold tracking-widest mb-4">
                                        NEW ARRIVAL 2025
                                    </p>

                                    <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6 text-white">
                                        Upgrade Your <br /> Sneaker Game
                                    </h1>

                                    <p className="text-gray-300 text-lg leading-8 mb-8">
                                        Experience lightweight premium sneakers crafted
                                        with modern streetwear aesthetics and comfort.
                                    </p>

                                    <div className="flex gap-4">

                                        <a href="#FeatureShoes">
                                            <button className="bg-yellow-400 text-black px-8 py-4 rounded-2xl hover:scale-105 transition duration-300 font-semibold">
                                                Buy Now
                                            </button>
                                        </a>

                                        <a href="#ExtraProduct">
                                            <button className="border border-white text-white px-8 py-4 rounded-2xl hover:bg-white hover:text-black transition duration-300">
                                                View More
                                            </button>
                                        </a>

                                    </div>

                                </div>

                                {/* Right Side */}
                                <div className="relative flex justify-center">

                                    <div className="absolute w-72 h-72 bg-yellow-400 rounded-full blur-3xl opacity-20"></div>

                                    <img
                                        src="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519"
                                        alt="shoe"
                                        className="relative z-10 w-full h-125 object-cover rounded-3xl shadow-2xl hover:scale-105 transition duration-500"
                                    />

                                </div>

                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>

            </section>
        </>
    )
}