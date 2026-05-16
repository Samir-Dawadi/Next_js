export default function Register() {
    return (
        <main className="min-h-screen bg-linear-to-br from-pink-100 via-white to-blue-100 flex items-center justify-center p-5">

            <div className="w-full max-w-6xl bg-white rounded-3xl shadow-2xl overflow-hidden grid md:grid-cols-2">

                {/* Left Side */}
                <div className="hidden md:flex flex-col justify-center items-center bg-linear-to-br from-pink-500 to-blue-600 text-white p-10">

                    <img src="next.svg" className="w-40 mb-6" />

                    <h1 className="text-4xl font-bold mb-4">
                        Create Account
                    </h1>

                    <p className="text-center text-lg leading-7 text-gray-100">
                        Join our platform and explore amazing features
                        built with Next.js and Tailwind CSS.
                    </p>

                </div>

                {/* Right Side */}
                <div className="flex items-center justify-center p-8 md:p-14">

                    <div className="w-full max-w-md">

                        <h2 className="text-4xl font-bold text-gray-800 mb-2">
                            Register
                        </h2>

                        <p className="text-gray-500 mb-8">
                            Fill your details to create a new account
                        </p>

                        {/* Form */}
                        <form className="space-y-5">

                            {/* Full Name */}
                            <div>
                                <label className="block mb-2 text-gray-700 font-medium">
                                    Full Name
                                </label>

                                <input
                                    type="text"
                                    placeholder="Enter your full name"
                                    className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-pink-500"
                                />
                            </div>

                            {/* Email */}
                            <div>
                                <label className="block mb-2 text-gray-700 font-medium">
                                    Email
                                </label>

                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>

                            {/* Password */}
                            <div>
                                <label className="block mb-2 text-gray-700 font-medium">
                                    Password
                                </label>

                                <input
                                    type="password"
                                    placeholder="Create password"
                                    className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-purple-500"
                                />
                            </div>

                            {/* Confirm Password */}
                            <div>
                                <label className="block mb-2 text-gray-700 font-medium">
                                    Confirm Password
                                </label>

                                <input
                                    type="password"
                                    placeholder="Confirm password"
                                    className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-green-500"
                                />
                            </div>

                            {/* Checkbox */}
                            <label className="flex items-center gap-2 text-sm text-gray-600">
                                <input type="checkbox" />
                                I agree to the Terms & Conditions
                            </label>

                            {/* Button */}
                            <button
                                className="w-full bg-linear-to-r from-pink-500 to-blue-600 text-white py-3 rounded-xl font-semibold shadow-lg hover:scale-[1.02] duration-300"
                            >
                                Create Account
                            </button>

                        </form>

                        {/* Bottom Text */}
                        <p className="text-center text-gray-500 mt-6">
                            Already have an account?{" "}
                            <span className="text-blue-600 font-semibold cursor-pointer hover:underline">
                                Login
                            </span>
                        </p>

                    </div>

                </div>

            </div>

        </main>
    )
}