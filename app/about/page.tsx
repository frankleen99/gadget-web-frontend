import { FaPhoneAlt } from "react-icons/fa";
import { FiMonitor } from "react-icons/fi";
import { FiHeadphones } from "react-icons/fi";
import { FiInfo } from "react-icons/fi";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";

export default function Home() {
    return (
        <div>
            <Navbar />
            <div className="min-h-screen bg-white text-center px-4 py-10">
                <section className="mt-10">
                    <h2 className="mb-2 text-4xl font-bold text-gray-90">
                        About Gadget Web
                    </h2>
                    <div className="w-20 h-1 bg-black mx-auto mb-4 rounded-full" />
                    <p className="max-w-3xl mx-auto text-gray-700">
                        Gadget Web is your ultimate destination for cutting-edge technology
                        and premium electronic devices. Founded with a passion for
                        innovation and customer satisfaction, we curate the most advanced
                        and reliable gadgets to enhance your digital lifestyle. Our mission
                        is to bridge the gap between technology enthusiasts and the latest
                        innovations in the digital world.
                    </p>
                </section>

                <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16 max-w-6xl mx-auto">
                    {/* Smartphones */}
                    <div className="flex flex-col items-center space-y-3">
                        <div className="bg-gray-100 p-4 rounded-full text-2xl text-black">
                            <FaPhoneAlt />
                        </div>
                        <h3 className="font-semibold">Smartphones</h3>
                        <p className="text-center text-gray-600 max-w-xs">
                            Explore the latest mobile devices from top global brands,
                            featuring cutting-edge technology and sleek designs.
                        </p>
                    </div>

                    {/* Laptops */}
                    <div className="flex flex-col items-center space-y-3">
                        <div className="bg-gray-100 p-4 rounded-full text-2xl text-black">
                            <FiMonitor />
                        </div>
                        <h3 className="font-semibold">Laptops</h3>
                        <p className="text-center text-gray-600 max-w-xs">
                            High-performance computing solutions for professionals, gamers,
                            and creative individuals.
                        </p>
                    </div>

                    {/* JBL Audio */}
                    <div className="flex flex-col items-center space-y-3">
                        <div className="bg-gray-100 p-4 rounded-full text-2xl text-black">
                            <FiHeadphones />
                        </div>
                        <h3 className="font-semibold">JBL Audio</h3>
                        <p className="text-center text-gray-600 max-w-xs">
                            Discover immersive audio experiences with JBL’s state-of-the-art
                            speakers and headphones.
                        </p>
                    </div>

                    {/* Expert Support */}
                    <div className="flex flex-col items-center space-y-3">
                        <div className="bg-gray-100 p-4 rounded-full text-2xl text-black">
                            <FiInfo />
                        </div>
                        <h3 className="font-semibold">Expert Support</h3>
                        <p className="text-center text-gray-600 max-w-xs">
                            Get help from knowledgeable professionals ready to assist with all
                            your tech needs.
                        </p>
                    </div>
                </section>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-purple-100 py-16 px-6 md:px-20">
                <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-12">
                    Our Core Values
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    {/* Mission */}
                    <div className="bg-white shadow-xl rounded-2xl p-8 transition-all duration-300 hover:scale-105">
                        <h3 className="text-2xl font-bold text-blue-700 mb-4 border-l-4 border-blue-500 pl-4">
                            Our Mission
                        </h3>
                        <p className="text-gray-700 text-lg leading-relaxed">
                            Our mission is to redefine how people access modern
                            gadgets—ranging from everyday essentials to advanced tech tools.
                            Whether it&apos;s mobile devices, smart accessories, audio gear,
                            computing hardware, or emerging tech, we aim to deliver
                            convenience, quality, and innovation through a seamless digital
                            experience.
                        </p>

                    </div>

                    {/* Vision */}
                    <div className="bg-white shadow-xl rounded-2xl p-8 transition-all duration-300 hover:scale-105">
                        <h3 className="text-2xl font-bold text-purple-700 mb-4 border-l-4 border-purple-500 pl-4">
                            Our Vision
                        </h3>
                        <p className="text-gray-700 text-lg leading-relaxed">
                            Our vision is to become the go-to tech destination for individuals
                            and businesses alike—empowering lives through access to a wide
                            range of trusted and futuristic gadgets. We&apos;re building a smarter,
                            connected world, one device at a time.
                        </p>

                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}
