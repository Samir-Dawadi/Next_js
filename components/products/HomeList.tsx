import { ProductType } from "@/types/ProductType";


export default async function HomeList() {

    //server side component  which are good than client side bcz it is good to do seo on the server side
    const response = await fetch('https://dummyjson.com/products');
    const result = await response.json()

    return (<>
        <section className="py-20">
            <div className="max-w-7xl mx-auto px-6">

                <div className="flex justify-between items-center mb-12">

                    <h2 className="text-5xl shadow-xl font-bold text-center text-red-500 animate-[pulse_1s_infinite] ">
                        Featured Shoes
                    </h2>

                    <button className="text-black-500 underline hover:scale-106 hover:cursor-pointer font-bold">
                        View All
                    </button>

                </div>

                <div className="grid md:grid-cols-3 gap-8">

                    {

                        result.products && result.products.map((product: ProductType) => (
                            <div
                                key={product.id}
                                className="border rounded-3xl overflow-hidden hover:shadow-2xl hover:-translate-y-2">
                                <img
                                    src={product.thumbnail}
                                    alt={product.title}
                                    className="h-72 w-full"
                                />

                                <div className="p-6">

                                    <h3 className="text-2xl font-bold mb-2">
                                        {product.title}
                                    </h3>

                                    <p className="text-gray-500 mb-5 line-clamp-1">
                                        Lightweight running sneakers for everyday comfort.
                                    </p>

                                    <div className="flex justify-between items-center w-full">

                                        <div className="flex gap-3 items-center">
                                            <span className="text-2xl font-bold ">
                                                $60
                                            </span>
                                            <span className="text-md font-bold text-red-400">
                                                <em className="line-through">
                                                    {product.price}
                                                </em>
                                            </span>
                                        </div>

                                        <button className="bg-black text-white px-5 py-2 rounded-xl hover:bg-blue-500">
                                            <a href={'/products/' + product.id} >
                                                Buy Now
                                            </a>
                                        </button>

                                    </div>

                                </div>
                            </div>
                        )
                        )}
                </div>

            </div>
        </section>
    </>)
}