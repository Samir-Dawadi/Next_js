// import "./globals.css"

export default function Home() {
  return (
    <>
      <main className="bg-gray-200 min-h-screen w-full">

        <section
          id="product"
          className="w-[85%] mx-auto mt-8 bg-blue-100 rounded-xl shadow-lg p-6"
        >
          <h1 className="text-center text-3xl font-bold mb-5">
            Product List
          </h1>

          <div className="grid grid-cols-3 gap-4 ">
            <div className="bg-white p-4 rounded-lg shadow hover:scale-110">
              <div className="flex gap-5">
                <h2 className="font-bold text-xl mb-2 text-center">Glass 1</h2>
                <img src="./file.svg" className="size-15 flex items-center" />
              </div>
              <p className="mx-auto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam sequi corrupti adipisci earum, voluptatum repudiandae deleniti dolores vitae molestias cum, enim ipsum facilis sint optio provident aliquid culpa, sapiente rerum!</p>
              <div className="text-center mt-5 border rounded-xl bg-red-100 hover:bg-red-400">
                <button className="font-bold">Get Item</button>
              </div>
            </div>

            <div className="bg-white p-4 rounded-lg shadow hover:scale-110">
              <h2 className="font-bold text-xl mb-2">Glass 2</h2>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta et totam ab ipsam hic? Eveniet accusantium illum, cumque hic consectetur sequi odit ad labore, architecto perferendis excepturi reiciendis explicabo repellat!</p>
            </div>

            <div className="bg-white p-4 rounded-lg shadow hover:scale-110">
              <h2 className="font-bold text-xl mb-2">Glass 3</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate, delectus excepturi. Enim alias nihil, excepturi illo sed consequatur non vitae quas id, aut maiores voluptates minima soluta maxime ullam a?</p>
            </div>
          </div>
        </section>

        <section
          id="about"
          className="w-[85%] mx-auto mt-8 bg-green-100/50 rounded-xl shadow-lg p-6"
        >
          <h1 className="text-3xl font-bold mb-4 text-center">
            About Us
          </h1>

          <p className="text-lg ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, maiores labore. Dolorem amet quisquam, debitis architecto aut ab est odio mollitia alias repudiandae sint nostrum ipsa, cumque ipsam numquam saepe?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, velit quo consectetur consequatur, voluptatibus odit explicabo earum blanditiis necessitatibus vitae iure recusandae saepe nihil aspernatur quia eius, enim ex qui.
          </p>
        </section>

        <section id="contact" className="w-[85%] mx-auto mt-8 bg-yellow-100/50 rounded-xl shadow-lg p-6 mb-10"
        >
          <h1 className="text-3xl font-bold mb-4 text-center">
            Contact Us
          </h1>

          <div className="flex flex-col gap-3 text-lg">
            <p>Email: googlesshop@gmail.com</p>
            <p>Phone: 987232323</p>
            <p>Location: ktm</p>
          </div>
        </section>
      </main>

    </>
  )
}

