export default function Header() {
    return (
        <>
            <header className="bg-black text-white">
                <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">

                    {/* LOGO */}
                    <div className="flex items-center gap-3">

                        <div className="bg-white text-black w-12 h-12 rounded-2xl flex items-center justify-center text-2xl font-bold">
                            S
                        </div>

                        <div>
                            <h1 className="text-3xl font-extrabold tracking-wide">
                                SneakStep
                            </h1>

                            <p className="text-gray-400 text-sm">
                                Premium Sneakers
                            </p>
                        </div>

                    </div>

                    {/* NAVBAR */}
                    <nav className="flex gap-6 font-medium items-center justify-center">
                        <a href="/" className="hover:text-gray-300 hover:scale-106 text-xl ">
                            Home
                        </a>

                        <a href="#FeatureShoes" className="hover:text-gray-300 hover:scale-106 text-xl ">
                            Shop
                        </a>

                        <a href="#" className="hover:text-gray-300 hover:scale-106 text-xl ">
                            Collections
                        </a>

                        <a href="#" className="hover:text-gray-300 hover:scale-106 text-xl ">
                            Contact
                        </a>
                        <a href="/login" className="hover:text-black-300 hover:scale-106 text-xl bg-teal-300 rounded-xl  px-5 py-2">
                            login
                        </a>
                        <a href="/Register" className="hover:text-gray-300 hover:scale-106 text-xl  bg-teal-300 rounded-xl px-5 py-2">
                            Sign up
                        </a>
                    </nav>

                </div>
            </header>

        </>
    )
}