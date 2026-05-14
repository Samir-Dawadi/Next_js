// import "./globals.css"

import Ads from "@/components/ads/Ads";
import HeroSection from "@/components/banner/Hero";
import HomeList from "@/components/products/HomeList";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">

      {/* HERO SECTION */}
      <HeroSection></HeroSection>

      {/* OFFER SECTION */}
      <Ads></Ads>

      {/* FEATURED SHOES */}
      <HomeList></HomeList>

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

