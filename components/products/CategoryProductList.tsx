"use client"    //Next.js ma yo component browser/client side ma run gara vaneko.Swiper browser ko features use garxa.server ma yo hudaina.
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import 'swiper/css'
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function CategoryProfuctList() {
    return (
        <>
            <section className="w-full bg-gray-400">
                <div className="max-w-7xl mx-auto flex flex-col gap-6 p-5">
                    <h1 className="text-3xl font-bold mt-5"> Extra Product List </h1>
                    <div className="w-full">
                        <Swiper
                            modules={[Navigation, Pagination, Scrollbar, A11y]}
                            spaceBetween={20}
                            slidesPerView={4}
                            navigation                              //Left/right arrow buttons.(navigation={true}   =   navigation)
                            pagination={{ clickable: true }}        //Bottom ma dots show garxa.Dots clickable banauxa.
                            scrollbar={{ draggable: true }}         //mouse le tanera move garna milxa.
                            onSwiper={(swiper) => console.log(swiper)}
                            onSlideChange={() => console.log('slide change')}           //swipe garda swiper ma vako data haru dekhauca
                        >

                            <SwiperSlide>
                                <div className="rounded-md shadow-md hover:shadow-lg border-4">
                                    <div>
                                        <img className="w-full" src="https://images.unsplash.com/photo-1523275335684-37898b6baf30" alt="Product Image" />

                                    </div>
                                    <div className="p-4">
                                        <h3 className="text-lg font-medium mb-2">Product Title</h3>
                                        <p className="text-black-600 text-sm mb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vitae ante
                                            vel eros fermentum faucibus sit amet euismod lorem.</p>
                                        <div className="flex items-center justify-between">
                                            <span className="font-bold text-lg">$19.99</span>
                                            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                                                Buy Now
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="rounded-md shadow-md hover:shadow-lg border-4">
                                    <div>
                                        <img className="w-full" src="https://images.unsplash.com/photo-1523275335684-37898b6baf30" alt="Product Image" />

                                    </div>
                                    <div className="p-4">
                                        <h3 className="text-lg font-medium mb-2">Product Title</h3>
                                        <p className="text-black-600 text-sm mb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vitae ante
                                            vel eros fermentum faucibus sit amet euismod lorem.</p>
                                        <div className="flex items-center justify-between">
                                            <span className="font-bold text-lg">$19.99</span>
                                            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                                                Buy Now
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="rounded-md shadow-md hover:shadow-lg border-4">
                                    <div>
                                        <img className="w-full" src="https://images.unsplash.com/photo-1523275335684-37898b6baf30" alt="Product Image" />

                                    </div>
                                    <div className="p-4">
                                        <h3 className="text-lg font-medium mb-2">Product Title</h3>
                                        <p className="text-black-600 text-sm mb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vitae ante
                                            vel eros fermentum faucibus sit amet euismod lorem.</p>
                                        <div className="flex items-center justify-between">
                                            <span className="font-bold text-lg">$19.99</span>
                                            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                                                Buy Now
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="rounded-md shadow-md hover:shadow-lg border-4">
                                    <div>
                                        <img className="w-full" src="https://images.unsplash.com/photo-1523275335684-37898b6baf30" alt="Product Image" />

                                    </div>
                                    <div className="p-4">
                                        <h3 className="text-lg font-medium mb-2">Product Title</h3>
                                        <p className="text-black-600 text-sm mb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vitae ante
                                            vel eros fermentum faucibus sit amet euismod lorem.</p>
                                        <div className="flex items-center justify-between">
                                            <span className="font-bold text-lg">$19.99</span>
                                            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                                                Buy Now
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="rounded-md shadow-md hover:shadow-lg border-4">
                                    <div>
                                        <img className="w-full" src="https://images.unsplash.com/photo-1523275335684-37898b6baf30" alt="Product Image" />

                                    </div>
                                    <div className="p-4">
                                        <h3 className="text-lg font-medium mb-2">Product Title</h3>
                                        <p className="text-black-600 text-sm mb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vitae ante
                                            vel eros fermentum faucibus sit amet euismod lorem.</p>
                                        <div className="flex items-center justify-between">
                                            <span className="font-bold text-lg">$19.99</span>
                                            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                                                Buy Now
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="rounded-md shadow-md hover:shadow-lg border-4">
                                    <div>
                                        <img className="w-full" src="https://images.unsplash.com/photo-1523275335684-37898b6baf30" alt="Product Image" />

                                    </div>
                                    <div className="p-4">
                                        <h3 className="text-lg font-medium mb-2">Product Title</h3>
                                        <p className="text-black-600 text-sm mb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vitae ante
                                            vel eros fermentum faucibus sit amet euismod lorem.</p>
                                        <div className="flex items-center justify-between">
                                            <span className="font-bold text-lg">$19.99</span>
                                            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                                                Buy Now
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>


                        </Swiper>


                    </div>

                </div>
            </section>
        </>
    )
}