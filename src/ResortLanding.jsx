import React from 'react';
import { motion } from 'framer-motion';

const ResortLanding = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const rooms = [
    {
      title: "Ocean View Suite",
      description: "Spacious suite with panoramic ocean views and private balcony",
      icon: "🌊",
      price: "$299/night"
    },
    {
      title: "Garden Villa",
      description: "Private villa surrounded by tropical gardens and pool access",
      icon: "🌺",
      price: "$399/night"
    },
    {
      title: "Beachfront Bungalow",
      description: "Direct beach access with outdoor shower and hammock",
      icon: "🏖️",
      price: "$499/night"
    }
  ];

  const amenities = [
    { name: "Infinity Pool", icon: "🏊‍♂️", description: "Heated infinity pool overlooking the ocean" },
    { name: "Spa & Wellness", icon: "🧘‍♀️", description: "Full-service spa with massage and yoga classes" },
    { name: "Fine Dining", icon: "🍽️", description: "Award-winning restaurant with ocean views" },
    { name: "Water Sports", icon: "🏄‍♂️", description: "Kayaking, snorkeling, and paddleboarding" }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      rating: 5,
      text: "Absolutely magical experience! The ocean view suite was breathtaking and the service was impeccable.",
      location: "New York, NY"
    },
    {
      name: "Michael Chen",
      rating: 5,
      text: "Perfect blend of luxury and relaxation. The spa treatments were divine and the food was exceptional.",
      location: "San Francisco, CA"
    },
    {
      name: "Emma Rodriguez",
      rating: 5,
      text: "Our family vacation was perfect here. The kids loved the pool and we enjoyed the peaceful atmosphere.",
      location: "Miami, FL"
    }
  ];

  const galleryImages = [
    "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&h=600&fit=crop"
  ];

  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1920&h=1080&fit=crop')"
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>
        
        <motion.div 
          className="relative z-10 text-center text-white px-8 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
            Paradise Awaits
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto">
            Discover luxury, tranquility, and unforgettable moments at our tropical resort
          </p>
          <motion.button 
            className="bg-[#00A8E8] hover:bg-[#0098D8] text-white px-12 py-4 rounded-2xl text-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Book Your Stay
          </motion.button>
        </motion.div>
      </section>

      {/* About Section */}
      <section className="py-20 px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="grid md:grid-cols-2 gap-16 items-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#073B4C] mb-6">
                Welcome to Paradise
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Nestled along pristine beaches with crystal-clear waters, our resort offers the perfect blend of luxury and natural beauty. Every detail has been carefully crafted to create an unforgettable experience.
              </p>
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <span className="text-2xl">🌴</span>
                  <span className="text-gray-600">Tropical Paradise</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-2xl">✨</span>
                  <span className="text-gray-600">5-Star Service</span>
                </div>
              </div>
            </div>
            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&h=600&fit=crop"
                alt="Resort Overview"
                className="rounded-2xl shadow-lg w-full h-96 object-cover"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Rooms & Amenities Section */}
      <section className="py-20 px-8 bg-[#FAFAFA]">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#073B4C] mb-4">
              Rooms & Amenities
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose from our carefully designed accommodations and enjoy world-class amenities
            </p>
          </motion.div>

          {/* Rooms */}
          <motion.div 
            className="grid md:grid-cols-3 gap-8 mb-16"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {rooms.map((room, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300"
                variants={fadeInUp}
                whileHover={{ y: -10 }}
              >
                <div className="text-4xl mb-4">{room.icon}</div>
                <h3 className="text-2xl font-bold text-[#073B4C] mb-3">{room.title}</h3>
                <p className="text-gray-600 mb-4">{room.description}</p>
                <div className="text-[#00A8E8] font-bold text-xl">{room.price}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Amenities */}
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {amenities.map((amenity, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-md text-center hover:shadow-lg transition-all duration-300"
                variants={fadeInUp}
                whileHover={{ y: -5 }}
              >
                <div className="text-3xl mb-3">{amenity.icon}</div>
                <h4 className="text-lg font-semibold text-[#073B4C] mb-2">{amenity.name}</h4>
                <p className="text-sm text-gray-600">{amenity.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#073B4C] mb-4">
              Experience Paradise
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Take a visual journey through our stunning resort and beautiful surroundings
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-2 md:grid-cols-3 gap-4"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                className="relative overflow-hidden rounded-2xl group"
                variants={fadeInUp}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img 
                  src={image}
                  alt={`Resort ${index + 1}`}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-8 bg-[#FAFAFA]">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#073B4C] mb-4">
              What Our Guests Say
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it - hear from our satisfied guests
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300"
                variants={fadeInUp}
                whileHover={{ y: -5 }}
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-[#FFD166] text-xl">⭐</span>
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">"{testimonial.text}"</p>
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold text-[#073B4C]">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.location}</p>
                  </div>
                  <span className="text-2xl">💫</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#073B4C] mb-4">
              Get in Touch
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Ready to start your journey? Contact us to plan your perfect getaway
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <form className="space-y-6">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-6 py-4 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#00A8E8] focus:border-transparent transition-all duration-300"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-6 py-4 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#00A8E8] focus:border-transparent transition-all duration-300"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Your Message"
                    rows="4"
                    className="w-full px-6 py-4 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#00A8E8] focus:border-transparent transition-all duration-300 resize-none"
                  ></textarea>
                </div>
                <motion.button
                  className="w-full bg-[#00A8E8] hover:bg-[#0098D8] text-white py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Send Message
                </motion.button>
              </form>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-2xl font-bold text-[#073B4C] mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <span className="text-[#00A8E8] text-xl">📍</span>
                    <span className="text-gray-600">123 Paradise Beach Road, Tropical Island</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-[#00A8E8] text-xl">📞</span>
                    <span className="text-gray-600">+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-[#00A8E8] text-xl">✉️</span>
                    <span className="text-gray-600">hello@paradiseresort.com</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-[#073B4C] mb-4">Location</h3>
                <div className="bg-gray-200 rounded-2xl h-48 flex items-center justify-center">
                  <span className="text-gray-500 text-lg">Map Placeholder</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#073B4C] text-white py-16 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Paradise Resort</h3>
              <p className="text-gray-300">
                Your gateway to luxury, relaxation, and unforgettable memories in paradise.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-[#00A8E8] transition-colors">Rooms</a></li>
                <li><a href="#" className="hover:text-[#00A8E8] transition-colors">Amenities</a></li>
                <li><a href="#" className="hover:text-[#00A8E8] transition-colors">Gallery</a></li>
                <li><a href="#" className="hover:text-[#00A8E8] transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-[#00A8E8] transition-colors">Spa & Wellness</a></li>
                <li><a href="#" className="hover:text-[#00A8E8] transition-colors">Water Sports</a></li>
                <li><a href="#" className="hover:text-[#00A8E8] transition-colors">Fine Dining</a></li>
                <li><a href="#" className="hover:text-[#00A8E8] transition-colors">Concierge</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-2xl hover:text-[#00A8E8] transition-colors">📱</a>
                <a href="#" className="text-2xl hover:text-[#00A8E8] transition-colors">📷</a>
                <a href="#" className="text-2xl hover:text-[#00A8E8] transition-colors">🐦</a>
                <a href="#" className="text-2xl hover:text-[#00A8E8] transition-colors">📘</a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-600 pt-8 text-center text-gray-300">
            <p>&copy; 2024 Paradise Resort. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ResortLanding;
