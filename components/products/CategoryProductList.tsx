export default function CategoryProfuctList() {
    return (
        <>
            <section className="w-full bg-gray-200">
               <div className="max-w-7xl mx-auto flex flex-col gap-6 p-5">
                 <h1 className="text-3xl font-bold mt-5"> Extra Product List </h1>

                <div className="flex gap-3">
                    <div className="rounded-md overflow-hidden shadow-md hover:shadow-lg">
                        <div className="relative">
                            <img className="w-full" src="https://images.unsplash.com/photo-1523275335684-37898b6baf30" alt="Product Image" />
                            <div className="absolute top-0 right-0 bg-red-500 text-white px-2 py-1 m-2 rounded-md text-sm font-medium">SALE
                            </div>
                        </div>
                        <div className="p-4">
                            <h3 className="text-lg font-medium mb-2">Product Title</h3>
                            <p className="text-gray-600 text-sm mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vitae ante
                                vel eros fermentum faucibus sit amet euismod lorem.</p>
                            <div className="flex items-center justify-between">
                                <span className="font-bold text-lg">$19.99</span>
                                <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                                    Buy Now
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className=" rounded-md overflow-hidden shadow-md hover:shadow-lg">
                        <div className="relative">
                            <img className="w-full" src="https://images.unsplash.com/photo-1523275335684-37898b6baf30" alt="Product Image" />
                            <div className="absolute top-0 right-0 bg-red-500 text-white px-2 py-1 m-2 rounded-md text-sm font-medium">SALE
                            </div>
                        </div>
                        <div className="p-4">
                            <h3 className="text-lg font-medium mb-2">Product Title</h3>
                            <p className="text-gray-600 text-sm mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vitae ante
                                vel eros fermentum faucibus sit amet euismod lorem.</p>
                            <div className="flex items-center justify-between">
                                <span className="font-bold text-lg">$19.99</span>
                                <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                                    Buy Now
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className=" rounded-md overflow-hidden shadow-md hover:shadow-lg">
                        <div className="relative">
                            <img className="w-full" src="https://images.unsplash.com/photo-1523275335684-37898b6baf30" alt="Product Image" />
                            <div className="absolute top-0 right-0 bg-red-500 text-white px-2 py-1 m-2 rounded-md text-sm font-medium">SALE
                            </div>
                        </div>
                        <div className="p-4">
                            <h3 className="text-lg font-medium mb-2">Product Title</h3>
                            <p className="text-gray-600 text-sm mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vitae ante
                                vel eros fermentum faucibus sit amet euismod lorem.</p>
                            <div className="flex items-center justify-between">
                                <span className="font-bold text-lg">$19.99</span>
                                <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                                    Buy Now
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
               </div>
            </section>
        </>
    )
}