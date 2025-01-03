'use client';
import { useState } from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaGlobe } from 'react-icons/fa'; 

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Formulaire soumis !");
  };

  return (
    <section id="contact" className="bg-black text-white py-16 px-6 lg:px-12">
      <div className="container mx-auto space-y-16">

        {/* Informations de contact avec icônes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:bg-yellow-500 transition duration-300">
            <div className="flex items-center space-x-4">
              <FaPhoneAlt className="text-4xl text-yellow-500" />
              <p className="text-lg">+213 123 456 789</p>
            </div>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:bg-yellow-500 transition duration-300">
            <div className="flex items-center space-x-4">
              <FaEnvelope className="text-4xl text-yellow-500" />
              <p className="text-lg">contact@salle-de-sport.com</p>
            </div>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:bg-yellow-500 transition duration-300">
            <div className="flex items-center space-x-4">
              <FaMapMarkerAlt className="text-4xl text-yellow-500" />
              <p className="text-lg">123 Rue de la Salle, Alger, Algérie</p>
            </div>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:bg-yellow-500 transition duration-300">
            <div className="flex items-center space-x-4">
              <FaGlobe className="text-4xl text-yellow-500" />
              <p className="text-lg">www.salle-de-sport.com</p>
            </div>
          </div>
        </div>

      
        <div className="flex flex-col lg:flex-row items-center justify-between space-y-8 lg:space-y-0 lg:space-x-12 lg:px-32">
     
          <div className="lg:w-1/2 space-y-6">
            <h2 className="text-4xl font-extrabold text-yellow-500 animate__animated animate__fadeIn animate__delay-1s">
              Contactez-nous
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-lg font-medium">Nom</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 mt-2 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-lg font-medium">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 mt-2 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-lg font-medium">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 mt-2 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  rows="4"
                ></textarea>
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-yellow-500 text-black py-3 px-6 text-lg font-semibold transform transition duration-300 hover:scale-105"
                >
                  Envoyer
                </button>
              </div>
            </form>
          </div>

         
          <div className="lg:w-1/2">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13131.434021582504!2d3.058760643216767!3d36.75277884508961!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12f64f947750d059%3A0x2c8d1cd8e858c2ad!2sAlger%2C%20Algeria!5e0!3m2!1sen!2sus!4v1601186363100!5m2!1sen!2sus"
              width="100%"
              height="400"
              frameBorder="0"
              style={{ border: 0 }}
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
            ></iframe>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;
