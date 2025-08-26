'use client';

import React, { useState, ChangeEvent, FormEvent } from 'react';
import ConfirmModal from './ConfirmModal';
import Image from 'next/image';
import Link from 'next/link';
// import logo from  '../public/assets/logo.png';

interface FormData {
  name: string;
  email: string;
  breed: string;
  serviceType: string;
  labServices: string[];
}

function BookingForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    breed: '',
    serviceType: '',
    labServices: [],
  });

  const [submitted, setSubmitted] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setShowModal(true);
  };

  const confirmSubmission = () => {
    setSubmitted(true);
    setShowModal(false);
    window.alert('Form submitted successfully!');
    setFormData({ name: '', email: '', breed: '', serviceType: '', labServices: [] });
  };

  const cancelSubmission = () => {
    setShowModal(false);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;

    if (type === 'checkbox') {
      setFormData((prev) => {
        const updatedServices = checked
          ? [...prev.labServices, value]
          : prev.labServices.filter((service) => service !== value);
        return { ...prev, labServices: updatedServices };
      });
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header>
        <a href="#" className="block text-[#292827] no-underline">
          <div className="flex items-center">
            {/* <Image src={logo} alt="Logo" width={140} height={140} /> */}
            <Image src="/assets/logo.png" alt="Logo" width={140} height={140} />

            <div className="text-black text-4xl font-bold ml-4">
              Happy Tails Veterinary Hospital & Kennel Center
            </div>
          </div>
        </a>
        <nav className="flex justify-end bg-[#fa2878] font-semibold text-white px-6 py-3 space-x-6">
  <Link href="/" className="text-white no-underline hover:font-bold text-base">Home</Link>
  <Link href="/services" className="text-white no-underline hover:font-bold text-base">Our Services</Link>
  <Link href="/booking" className="text-white no-underline hover:font-bold text-base">Book With Us</Link>
</nav>

      </header>

      <div className="max-w-2xl mx-auto p-6 bg-white mt-10 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center text-[#fa2878] mb-6">Book an Appointment</h2>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name" className="block text-gray-700 font-medium mb-1">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Enter your name"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#fa2878]"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-700 font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#fa2878]"
            />
          </div>
          <div>
            <label htmlFor="breed" className="block text-gray-700 font-medium mb-1">
              Breed
            </label>
            <input
              type="text"
              id="breed"
              name="breed"
              value={formData.breed}
              onChange={handleChange}
              required
              placeholder="Enter the breed"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#fa2878]"
            />
          </div>
          <div>
            <p className="text-gray-700 font-medium mb-2">Type of Service</p>
            <div className="flex gap-6">
              <label className="flex items-center gap-2 text-gray-700">
                <input
                  type="radio"
                  name="serviceType"
                  value="IPD"
                  checked={formData.serviceType === 'IPD'}
                  onChange={handleChange}
                  className="accent-[#fa2878]"
                />
                IPD
              </label>
              <label className="flex items-center gap-2 text-gray-700">
                <input
                  type="radio"
                  name="serviceType"
                  value="OPD"
                  checked={formData.serviceType === 'OPD'}
                  onChange={handleChange}
                  className="accent-[#fa2878]"
                />
                OPD
              </label>
            </div>
          </div>
          <div>
            <p className="text-gray-700 font-medium mb-2">Lab Services</p>
            <div className="flex flex-wrap gap-6">
              {['Medicines', 'X-Ray', 'Blood Tests'].map((service) => (
                <label key={service} className="flex items-center gap-2 text-gray-700">
                  <input
                    type="checkbox"
                    name="labService"
                    value={service}
                    checked={formData.labServices.includes(service)}
                    onChange={handleChange}
                    className="accent-[#fa2878]"
                  />
                  {service}
                </label>
              ))}
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-[#fa2878] text-white py-2 px-4 rounded-md hover:bg-pink-600 transition duration-200"
          >
            Save
          </button>
        </form>
      </div>
      <ConfirmModal isOpen={showModal} onConfirm={confirmSubmission} onCancel={cancelSubmission} />
    </div>
  );
}

export default BookingForm;
