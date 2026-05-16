export default function Page() {
    return (
        <main className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-purple-100 flex items-center justify-center p-5">

            <div className="w-full max-w-5xl bg-white rounded-3xl shadow-2xl overflow-hidden grid md:grid-cols-2">

                {/* Left Side */}
                <div className="hidden md:flex flex-col justify-center items-center bg-gradient-to-br from-blue-500 to-purple-600 text-white p-10">
                    <img src="next.svg" className="w-40 mb-6" />

                    <h1 className="text-4xl font-bold mb-4">
                        Welcome Back
                    </h1>

                    <p className="text-center text-lg text-gray-100 leading-7">
                        Login to access your dashboard, manage your account,
                        and explore amazing features with Next.js and Tailwind CSS.
                    </p>
                </div>

                {/* Right Side */}
                <div className="flex items-center justify-center p-8 md:p-14">

                    <div className="w-full max-w-md">

                        <h2 className="text-4xl font-bold text-gray-800 mb-2">
                            Login
                        </h2>

                        <p className="text-gray-500 mb-8">
                            Please enter your account details
                        </p>

                        {/* Form */}
                        <form className="space-y-5">

                            {/* Email */}
                            <div>
                                <label className="block text-gray-700 mb-2 font-medium">
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
                                <label className="block text-gray-700 mb-2 font-medium">
                                    Password
                                </label>

                                <input
                                    type="password"
                                    placeholder="Enter your password"
                                    className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-purple-500"
                                />
                            </div>

                            {/* Remember + Forgot */}
                            <div className="flex items-center justify-between text-sm">

                                <label className="flex items-center gap-2 text-gray-600">
                                    <input type="checkbox" />
                                    Remember me
                                </label>

                                <button
                                    type="button"
                                    className="text-blue-600 hover:underline"
                                >
                                    Forgot Password?
                                </button>
                            </div>

                            {/* Button */}
                            <button
                                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 rounded-xl font-semibold hover:scale-[1.02] duration-300 shadow-lg"
                            >
                                Sign In
                            </button>

                        </form>

                        {/* Bottom Text */}
                        <p className="text-center text-gray-500 mt-6">
                            Don&apos;t have an account?{" "}
                            <span className="text-blue-600 font-semibold cursor-pointer hover:underline">
                                Register
                            </span>
                        </p>

                    </div>

                </div>

            </div>

        </main>
    )
}