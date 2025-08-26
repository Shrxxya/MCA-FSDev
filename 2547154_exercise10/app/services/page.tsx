import ServiceCard from "./ServiceCard";
import Image from "next/image";
import Link from "next/link";
// import logo from "../public/assets/logo.png";

const services: string[] = [
  "In-Patient",
  "Out-Patient",
  "Radiology",
  "Pathology",
  "Kennel/Boarding",
  "Volunteering",
];

export default function Services() {
  return (
    <div>
      <header>
        <Link href="/" className="block text-[#292827] no-underline">
          <div className="flex items-center">
            {/* <Image src={logo} alt="Logo" width={140} height={140} /> */}
            <Image src="/assets/logo.png" alt="Logo" width={140} height={140} />
            <div className="text-black text-4xl font-bold ml-4">
              Happy Tails Veterinary Hospital & Kennel Center
            </div>
          </div>
        </Link>

        <nav className="flex justify-end bg-[#fa2878] font-semibold text-white px-6 py-3 space-x-6">
          <Link href="/" className="text-white no-underline hover:font-bold text-base">
            Home
          </Link>
          <Link href="/services" className="text-white no-underline hover:font-bold text-base">
            Our Services
          </Link>
          <Link href="/booking" className="text-white no-underline hover:font-bold text-base">
            Book With Us
          </Link>
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
  );
}
