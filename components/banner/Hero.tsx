export default function HeroSection() {
    return (
        <>
            <section className="bg-gray-100 py-20">
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

                    <div>

                        <p className="text-red-500 font-bold mb-4">
                            TRENDING SHOES 2025
                        </p>

                        <h1 className="text-6xl font-bold leading-tight mb-6">
                            Walk With Style & Comfort
                        </h1>

                        <p className="text-gray-600 text-lg mb-8">
                            Discover premium sneakers designed for comfort,
                            performance and everyday fashion.
                        </p>

                        <div className="flex gap-4">

                            <button className="bg-black text-white px-8 py-4 rounded-2xl hover:scale-105 transition">
                                Shop Now
                            </button>

                            <button className="border border-black px-8 py-4 rounded-2xl hover:text-white transition hover:bg-blue-400">
                                Explore
                            </button>

                        </div>

                    </div>

                    <div>
                        <img
                            src="https://images.unsplash.com/photo-1542291026-7eec264c27ff"
                            alt="shoe"
                            className="w-full h-137 object-cover rounded-3xl shadow-2xl"
                        />
                    </div>

                </div>
            </section>
        </>
    )
}