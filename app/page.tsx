// import "./globals.css"

import Ads from "@/components/ads/Ads";
import HeroSection from "@/components/banner/Hero";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">

      {/* HERO SECTION */}
      <HeroSection></HeroSection>

      {/* OFFER SECTION */}
      <Ads></Ads>

      {/* FEATURED SHOES */}
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

            {/* CARD 1 */}
            <div className="border rounded-3xl overflow-hidden hover:shadow-2xl hover:-translate-y-2">

              <img
                src="https://images.unsplash.com/photo-1542291026-7eec264c27ff"
                alt=""
                className="h-72 w-full"
              />

              <div className="p-6">

                <h3 className="text-2xl font-bold mb-2">
                  Nike Air Max
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
                        $120
                      </em>
                    </span>
                  </div>

                  <button className="bg-black text-white px-5 py-2 rounded-xl hover:bg-blue-500">
                    Buy Now
                  </button>

                </div>

              </div>
            </div>

            {/* CARD 2 */}
            <div className="border rounded-3xl overflow-hidden hover:shadow-2xl hover:-translate-y-2">

              <img
                src="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519"
                alt=""
                className="h-72 w-full object-cover"
              />

              <div className="p-6">

                <h3 className="text-2xl font-bold mb-2">
                  Adidas Ultraboost
                </h3>

                <p className="text-gray-500 mb-5">
                  Stylish premium sneakers with soft cushioning.
                </p>

                <div className="flex justify-between items-center w-full">

                  <div className="flex gap-3 items-center">
                    <span className="text-2xl font-bold ">
                      $60
                    </span>
                    <span className="text-md font-bold text-red-400">
                      <em className="line-through">
                        $120
                      </em>
                    </span>
                  </div>

                  <button className="bg-black text-white px-5 py-2 rounded-xl hover:bg-blue-500">
                    Buy Now
                  </button>

                </div>

              </div>
            </div>

            {/* CARD 3 */}
            <div className="border rounded-3xl overflow-hidden hover:shadow-2xl hover:-translate-y-2">

              <img
                src="https://images.unsplash.com/photo-1608231387042-66d1773070a5"
                alt=""
                className="h-72 w-full object-cover"
              />

              <div className="p-6">

                <h3 className="text-2xl font-bold mb-2">
                  Puma RS-X
                </h3>

                <p className="text-gray-500 mb-5">
                  Modern streetwear sneakers with trendy design.
                </p>

                <div className="flex justify-between items-center w-full">

                  <div className="flex gap-3 items-center">
                    <span className="text-2xl font-bold ">
                      $60
                    </span>
                    <span className="text-md font-bold text-red-400">
                      <em className="line-through">
                        $120
                      </em>
                    </span>
                  </div>

                  <button className="bg-black text-white px-5 py-2 rounded-xl hover:bg-blue-500">
                    Buy Now
                  </button>

                </div>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* CATEGORY SECTION */}
      <section className="bg-gray-100 p-20">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-5xl font-bold mb-12">
            Shop By Category
          </h2>

          <div className="grid md:grid-cols-4 gap-6">

            <div className="bg-white p-10 rounded-3xl text-center shadow-xl hover:-translate-y-2 transition">
              👟 Running Shoes
            </div>

            <div className="bg-white p-10 rounded-3xl text-center shadow-xl hover:-translate-y-2 transition">
              🏀 Basketball Shoes
            </div>

            <div className="bg-white p-10 rounded-3xl text-center shadow-xl hover:-translate-y-2 transition">
              🛹 Casual Sneakers
            </div>

            <div className="bg-white p-10 rounded-3xl text-center shadow-xl hover:-translate-y-2 transition">
              🏃 Sports Shoes
            </div>

          </div>

        </div>
      </section>

      {/* NEW ARRIVALS */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-7">

          <h2 className="text-5xl font-bold mb-12">
            New Arrivals
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-black text-white rounded-3xl p-10 hover:scale-106">
              <h3 className="text-2xl font-bold mb-4">
                Nike Revolution 7
              </h3>

              <p className="text-gray-300 mb-6">
                Built for speed and maximum comfort for you.
              </p>

              <button className="bg-white text-black px-6 py-3 rounded-xl hover:bg-blue-500 w-full hover:underline">
                Explore
              </button>
            </div>

            <div className="bg-red-500 text-white rounded-3xl p-10 hover:scale-106">
              <h3 className="text-2xl font-bold mb-4">
                Jordan Retro
              </h3>

              <p className="mb-6">
                Iconic design loved by sneaker fans.
              </p>

              <button className="bg-white text-black px-6 py-3 rounded-xl hover:bg-blue-500 w-full hover:underline">
                Explore
              </button>
            </div>

            <div className="bg-gray-900 text-white rounded-3xl p-10 hover:scale-106">
              <h3 className="text-2xl font-bold mb-4">
                Converse Classic
              </h3>

              <p className="text-gray-300 mb-6">
                Timeless sneakers for daily wear.
              </p>

              <button className="bg-white text-black px-6 py-3 rounded-xl hover:bg-blue-400 w-full hover:underline">
                Explore
              </button>
            </div>

          </div>

        </div>
      </section>

    </main>
  );
}

