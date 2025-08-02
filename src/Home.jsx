import { Link } from 'react-router-dom'
import vetpic1 from './assets/vetpic1.jpg'
import vetpic2 from './assets/vetpic2.jpg'
import vetpic3 from './assets/vetpic3.jpg'
import vetpic4 from './assets/vetpic4.jpg'
import vetpic5 from './assets/vetpic5.jpg'
import vetpic6 from './assets/vetpic6.jpg'
import logo from './assets/logo.png'

function Home() {
    return (
        <div>
            <header>
                <a href="#" className="block text-[#292827] no-underline">
                    <div className="flex items-center">
                        <img src={logo} alt="Logo" className="w-[140px] h-[140px]" />
                        <div className="text-black text-4xl font-bold ml-4">
                            Happy Tails Veterinary Hospital & Kennel Center
                        </div>
                    </div>
                </a>
                <nav className="flex justify-end bg-[#fa2878] font-semibold text-white px-6 py-3 space-x-6">
                    <Link to="/" className="text-white no-underline hover:font-bold text-base">Home</Link>
                    <Link to="/services" className="text-white no-underline hover:font-bold text-base">Our Services</Link>
                    <Link to="/booking" className="text-white no-underline hover:font-bold text-base">Book With Us</Link>
                </nav>
            </header>

            <section className="pt-12 px-4">
                <div className="flex flex-wrap justify-between gap-4 mb-6">
                    <img src={vetpic1} alt="" className="w-1/5 object-cover" />
                    <img src={vetpic2} alt="" className="w-1/5 object-cover" />
                    <img src={vetpic3} alt="" className="w-1/5 object-cover" />
                    <img src={vetpic4} alt="" className="w-1/5 object-cover" />
                </div>

                <p className="text-center text-lg md:text-2xl text-gray-800 mb-4">
                    Being the best Veterinary Hospital & Kennel Center, we put your pets first, making sure they are getting <br />
                    the care they need and you get the peace of mind you deserve. We are committed to providing <br />
                    on-going professional and personalized care for you and your pets.
                </p>
                <p className="text-center text-lg md:text-2xl text-gray-800">
                    From emergency care and high-tech diagnosis to planned surgeries and preventative care, <br />
                    we offer a complete range of medical services and treatment under one roof.
                </p>
            </section>

            <section className="flex flex-col items-center px-4 py-8">
                <div className="flex flex-col md:flex-row gap-4 mb-6">
                    <img src={vetpic5} alt="" className="w-full md:w-[500px]" />
                    <img src={vetpic6} alt="" className="w-full md:w-[500px]" />
                </div>
                <p className="text-center text-lg md:text-2xl text-gray-800">
                    The pet industry is a booming industry and people naturally expect top-of-the-line care <br />
                    for their beloved pets. Here at The Happy Tails Veterinary Hospital and Kennel Center we understand that <br />
                    and aim to provide the best care across all our services.
                </p>
            </section>
        </div>
    )
}

export default Home
