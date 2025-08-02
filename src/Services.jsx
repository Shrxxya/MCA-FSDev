import ServiceCard from "./ServiceCard";
import logo from './assets/logo.png'
import { Link } from 'react-router-dom'
function Services() {
    const services = [
        'In-Patient',
        'Out-Patient',
        'Radiology',
        'Pathology',
        'Kennel/Boarding',
        'Volunteering'
    ];
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
            <div className="mt-15 max-w-[95%] mx-auto">
            <h1 className="text-3xl font-bold text-center text-[#fa2878] mb-10">
                    Our Services
                </h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {services.map((service, index) => (
                        <ServiceCard key={index} service={service} />
                    ))}
                </div>
            </div>
        </div>
    )
}
export default Services