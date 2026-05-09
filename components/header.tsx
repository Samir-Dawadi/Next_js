export default function Header() {
    return (
        <>
            <nav className="w-full p-3 bg-blue-200 flex justify-between items-center text-black shadow-md">
                <div className="flex gap-2 items-center justify-center">
                    <img src="./file.svg" className="size-15" />
                    <h1 className="text-3xl font-bold">Googles Shop</h1>
                </div>

                <div className="flex gap-5 font-bold text-xl">
                    <a href="#Home" className="hover:text-blue-600 hover:scale-110">Home</a>
                    <a href="#about" className="hover:text-blue-600 hover:scale-110">About</a>
                    <a href="#contact" className="hover:text-blue-600 hover:scale-110">Contact</a>
                    <a href="#product" className="hover:text-blue-600 hover:scale-110">Product</a>
                    <a href="#cart" className="hover:text-blue-600 hover:scale-110">Cart</a>
                </div>
            </nav>

        </>
    )
}