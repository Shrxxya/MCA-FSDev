// app/page.tsx or components/Home.tsx

import Image from 'next/image'
import Link from 'next/link'
import vetpic1 from '../public/assets/vetpic1.jpg'
import vetpic2 from '../public/assets/vetpic2.jpg'
import vetpic3 from '../public/assets/vetpic3.jpg'
import vetpic4 from '../public/assets/vetpic4.jpg'
import vetpic5 from '../public/assets/vetpic5.jpg'
import vetpic6 from '../public/assets/vetpic6.jpg'
import logo from '../public/assets/logo.png'

export default function Home() {
  return (
    <div>
      <header>
        <Link href="/" className="block text-[#292827] no-underline">
          <div className="flex items-center">
            <Image src={logo} alt="Logo" width={140} height={140} />
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

      <section className="pt-12 px-4">
        <div className="flex flex-wrap justify-between gap-4 mb-6">
          <div className="w-1/5 relative aspect-[5/4]">
            <Image src={vetpic1} alt="Vet Pic 1" fill className="object-cover" />
          </div>
          <div className="w-1/5 relative aspect-[5/4]">
            <Image src={vetpic2} alt="Vet Pic 2" fill className="object-cover" />
          </div>
          <div className="w-1/5 relative aspect-[5/4]">
            <Image src={vetpic3} alt="Vet Pic 3" fill className="object-cover" />
          </div>
          <div className="w-1/5 relative aspect-[5/4]">
            <Image src={vetpic4} alt="Vet Pic 4" fill className="object-cover" />
          </div>
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
          <div className="relative w-full md:w-[500px] aspect-[4/3]">
            <Image src={vetpic5} alt="Vet Pic 5" fill className="object-cover" />
          </div>
          <div className="relative w-full md:w-[500px] aspect-[4/3]">
            <Image src={vetpic6} alt="Vet Pic 6" fill className="object-cover" />
          </div>
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
