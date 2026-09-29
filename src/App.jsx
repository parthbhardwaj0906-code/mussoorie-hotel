import React, { useState } from 'react';
import { 
  Compass, 
  Wifi, 
  Coffee, 
  MapPin, 
  Calendar, 
  Users, 
  ChevronRight, 
  Star, 
  Sparkles, 
  X, 
  Phone, 
  Mail, 
  CheckCircle,
  Menu,
  Bed,
  UtensilsCrossed,
  Mountain,
  Check
} from 'lucide-react';

const APP_DATA = {
  hotel: {
    name: "The Cloud Mist Retreat",
    tagline: "Sanctuary Above the Clouds • Established 2026",
    location: "Hathipaon Road, Mussoorie, Uttarakhand",
    rating: 4.9,
    reviewsCount: 128,
    description: "Perched at 7,000 feet along the quiet contours of Mussoorie, The Cloud Mist Retreat is a brand-new boutique sanctuary opened in 2026. Designed with floor-to-ceiling glass, native stone, and rich timber, every suite frames unobstructed panoramas of the Doon Valley and snow-capped Himalayan peaks.",
    highlights: [
      "180° Panoramic Himalayan & Valley Views",
      "Heated Infinity Pool Facing the Horizon",
      "Farm-to-Table Garhwali & Fine Dining",
      "Private Decks with Electric Fireplaces"
    ]
  },
  rooms: [
    {
      id: 'mist-suite',
      name: "Valley Mist Suite",
      size: "550 sq ft",
      occupancy: "2 Adults",
      bed: "King Size",
      price: "₹18,500",
      period: "night",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=1200",
      features: ["Private Heated Deck", "Doon Valley View", "Soaking Tub", "Complimentary High Tea"]
    },
    {
      id: 'cloud-duplex',
      name: "Himalayan Duplex Villa",
      size: "920 sq ft",
      occupancy: "4 Guests",
      bed: "2 King Beds",
      price: "₹32,000",
      period: "night",
      image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=1200",
      features: ["Two Level Balcony", "Fireplace Lounge", "24/7 Butler Service", "Private Telescope"]
    },
    {
      id: 'pine-sanctuary',
      name: "Pine Forest Haven",
      size: "420 sq ft",
      occupancy: "2 Adults",
      bed: "Queen Size",
      price: "₹14,000",
      period: "night",
      image: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&q=80&w=1200",
      features: ["Cedar Wood Interior", "Forest Canopy Terrace", "Rainforest Shower", "Organic Skincare Bar"]
    }
  ],
  gallery: [
    {
      url: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=1200",
      title: "Resort Exterior",
      subtitle: "Nestled high in the Himalayan foothills"
    },
    {
      url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&q=80&w=1200",
      title: "Infinity Edge Pool",
      subtitle: "Temperature controlled overlooking the valley"
    },
    {
      url: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=1200",
      title: "Wellness Spa",
      subtitle: "Holistic treatments with mountain herbal extracts"
    },
    {
      url: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=1200",
      title: "The Summit Lounge",
      subtitle: "Fine dining featuring local Garhwali produce"
    },
    {
      url: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&q=80&w=1200",
      title: "Sunrise Glass Pavilion",
      subtitle: "Morning yoga and artisanal espresso bar"
    },
    {
      url: "https://images.unsplash.com/photo-1507038772120-7fff76f79d79?auto=format&fit=crop&q=80&w=1200",
      title: "Starlit Courtyard",
      subtitle: "Evening bonfires and acoustic music sessions"
    }
  ],
  amenities: [
    { icon: Mountain, name: "Panoramic Mountain Decks", desc: "Unobstructed views across all public & private areas" },
    { icon: UtensilsCrossed, name: "Artisanal Culinary", desc: "Farm-to-fork dining curated by renowned hill-station chefs" },
    { icon: Coffee, name: "High-Altitude Coffee Bar", desc: "Freshly roasted single-origin brews & tea ceremonies" },
    { icon: Wifi, name: "High-Speed Fiber Wi-Fi", desc: "Seamless connectivity for remote work or stream leisure" },
    { icon: Compass, name: "Guided Nature Trails", desc: "Private walks through pine forests and heritage tracks" },
    { icon: Bed, name: "Custom Orthopedic Beds", desc: "Plush goose-down bedding for high-altitude rest" }
  ]
};

export default function App() {
  const [activeRoomIndex, setActiveRoomIndex] = useState(0);
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [selectedRoomForBooking, setSelectedRoomForBooking] = useState(null);
  const [bookingSuccess, setBookingSuccess] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    checkIn: '',
    guests: '2 Guests',
    notes: ''
  });

  const handleOpenBooking = (roomName = null) => {
    setSelectedRoomForBooking(roomName);
    setIsBookingModalOpen(true);
    setBookingSuccess(false);
  };

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    setBookingSuccess(true);
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 font-sans selection:bg-amber-500 selection:text-neutral-950">
      
      {/* 1. Header / Navigation */}
      <header className="sticky top-0 z-40 bg-neutral-950/80 backdrop-blur-md border-b border-neutral-800/80 transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <a href="#" className="flex items-center space-x-3 group">
            <div className="p-2 bg-amber-500/10 rounded-xl border border-amber-500/30 group-hover:bg-amber-500/20 transition">
              <Mountain className="w-6 h-6 text-amber-400" />
            </div>
            <div>
              <span className="block font-serif text-xl tracking-wider text-neutral-100 font-bold uppercase">
                Cloud Mist
              </span>
              <span className="block text-[10px] tracking-widest text-amber-400 uppercase font-medium">
                Mussoorie • Est. 2026
              </span>
            </div>
          </a>

          <nav className="hidden md:flex items-center space-x-8 text-sm font-medium tracking-wide">
            <a href="#about" className="hover:text-amber-400 transition">About</a>
            <a href="#rooms" className="hover:text-amber-400 transition">Suites</a>
            <a href="#gallery" className="hover:text-amber-400 transition">Gallery</a>
            <a href="#amenities" className="hover:text-amber-400 transition">Experiences</a>
            <a href="#contact" className="hover:text-amber-400 transition">Location</a>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <button 
              onClick={() => handleOpenBooking()}
              className="px-5 py-2.5 rounded-full bg-amber-500 hover:bg-amber-400 text-neutral-950 font-semibold text-sm transition shadow-lg shadow-amber-500/20"
            >
              Reserve Stay
            </button>
          </div>

          {/* Mobile menu toggle */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-neutral-400 hover:text-white"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile menu dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-neutral-900 border-b border-neutral-800 px-4 pt-2 pb-6 space-y-3 text-sm">
            <a href="#about" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-neutral-300">About</a>
            <a href="#rooms" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-neutral-300">Suites</a>
            <a href="#gallery" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-neutral-300">Gallery</a>
            <a href="#amenities" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-neutral-300">Experiences</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-neutral-300">Location</a>
            <button 
              onClick={() => { setMobileMenuOpen(false); handleOpenBooking(); }}
              className="w-full mt-2 px-5 py-3 rounded-xl bg-amber-500 text-neutral-950 font-semibold text-center"
            >
              Reserve Stay
            </button>
          </div>
        )}
      </header>

      {/* 2. Hero Section */}
      <section className="relative h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&q=80&w=2000" 
            alt="Mussoorie Misty Mountains" 
            className="w-full h-full object-cover scale-105 animate-fade-in"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-neutral-950/60" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center px-4 sm:px-6">
          <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-amber-500/20 border border-amber-500/40 backdrop-blur-md text-amber-300 text-xs font-semibold tracking-wider uppercase mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Newly Unveiled Luxury • Season 2026</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6 leading-tight">
            Rise Above the Clouds in Mussoorie
          </h1>

          <p className="max-w-2xl mx-auto text-lg sm:text-xl text-neutral-300 font-light mb-10 leading-relaxed">
            Experience unhindered views of the misty Himalayas, private heated glass balconies, and bespoke mountain hospitality.
          </p>

          {/* Quick Inquiry Bar */}
          <div className="max-w-4xl mx-auto bg-neutral-900/90 border border-neutral-800 p-3 sm:p-4 rounded-2xl backdrop-blur-xl shadow-2xl flex flex-col md:flex-row items-center gap-3">
            <div className="flex-1 grid grid-cols-2 sm:grid-cols-3 gap-3 w-full text-left">
              <div className="bg-neutral-800/60 border border-neutral-700/50 p-2.5 rounded-xl">
                <label className="block text-[10px] text-neutral-400 uppercase tracking-wider font-semibold">Check-In</label>
                <div className="flex items-center space-x-2 mt-1">
                  <Calendar className="w-4 h-4 text-amber-400" />
                  <input type="date" className="bg-transparent text-xs text-white focus:outline-none w-full" />
                </div>
              </div>

              <div className="bg-neutral-800/60 border border-neutral-700/50 p-2.5 rounded-xl">
                <label className="block text-[10px] text-neutral-400 uppercase tracking-wider font-semibold">Check-Out</label>
                <div className="flex items-center space-x-2 mt-1">
                  <Calendar className="w-4 h-4 text-amber-400" />
                  <input type="date" className="bg-transparent text-xs text-white focus:outline-none w-full" />
                </div>
              </div>

              <div className="col-span-2 sm:col-span-1 bg-neutral-800/60 border border-neutral-700/50 p-2.5 rounded-xl">
                <label className="block text-[10px] text-neutral-400 uppercase tracking-wider font-semibold">Guests</label>
                <div className="flex items-center space-x-2 mt-1">
                  <Users className="w-4 h-4 text-amber-400" />
                  <select className="bg-transparent text-xs text-white focus:outline-none w-full cursor-pointer">
                    <option value="1" className="bg-neutral-900">1 Guest</option>
                    <option value="2" className="bg-neutral-900">2 Guests</option>
                    <option value="4" className="bg-neutral-900">4 Guests</option>
                  </select>
                </div>
              </div>
            </div>

            <button 
              onClick={() => handleOpenBooking()}
              className="w-full md:w-auto px-8 py-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-neutral-950 font-bold text-sm tracking-wide transition shrink-0 flex items-center justify-center space-x-2 shadow-lg shadow-amber-500/20"
            >
              <span>Check Availability</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* 3. Property Overview Section */}
      <section id="about" className="py-24 bg-neutral-950 border-b border-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Context */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center space-x-2 text-amber-400 text-xs font-bold uppercase tracking-widest">
                <div className="w-6 h-[1px] bg-amber-400" />
                <span>Modern Serenity</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
                Designed for those who seek height, peace, and luxury.
              </h2>

              <p className="text-neutral-400 text-base sm:text-lg leading-relaxed">
                {APP_DATA.hotel.description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {APP_DATA.hotel.highlights.map((item, idx) => (
                  <div key={idx} className="flex items-center space-x-3 text-neutral-300">
                    <div className="p-1 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20">
                      <Check className="w-4 h-4" />
                    </div>
                    <span className="text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-6 flex items-center space-x-6 border-t border-neutral-900">
                <div>
                  <div className="flex items-center space-x-1 text-amber-400">
                    <Star className="w-5 h-5 fill-amber-400" />
                    <span className="text-xl font-bold text-white">{APP_DATA.hotel.rating}</span>
                  </div>
                  <span className="text-xs text-neutral-500">From {APP_DATA.hotel.reviewsCount} guest ratings</span>
                </div>
                <div className="h-10 w-[1px] bg-neutral-800" />
                <div>
                  <div className="text-xl font-bold text-white">2026</div>
                  <span className="text-xs text-neutral-500">Newly Inaugurated</span>
                </div>
              </div>
            </div>

            {/* Right Column: Visual Layout Grid */}
            <div className="lg:col-span-6 grid grid-cols-2 gap-4 relative">
              <div className="space-y-4">
                <div className="overflow-hidden rounded-2xl border border-neutral-800 shadow-xl group">
                  <img 
                    src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&q=80&w=800" 
                    alt="Mountain Pool" 
                    className="w-full h-64 sm:h-80 object-cover group-hover:scale-105 transition duration-700"
                  />
                </div>
                <div className="p-4 rounded-2xl bg-neutral-900/80 border border-neutral-800">
                  <p className="text-xs text-amber-400 font-semibold uppercase tracking-wider">Altitude</p>
                  <p className="text-xl font-serif text-white font-bold">7,100 Ft Above Sea Level</p>
                </div>
              </div>

              <div className="space-y-4 pt-8">
                <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/20">
                  <p className="text-xs text-amber-300 font-semibold uppercase tracking-wider">Climate</p>
                  <p className="text-xl font-serif text-white font-bold">Crisp Hill Breeze & Mist</p>
                </div>
                <div className="overflow-hidden rounded-2xl border border-neutral-800 shadow-xl group">
                  <img 
                    src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=800" 
                    alt="Resort Lounge" 
                    className="w-full h-64 sm:h-80 object-cover group-hover:scale-105 transition duration-700"
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. Rooms / Suites Showcase Section */}
      <section id="rooms" className="py-24 bg-neutral-900/50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-widest block mb-2">
              Sanctuary Spaces
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white mb-4">
              Accommodations with Infinite Horizons
            </h2>
            <p className="text-neutral-400">
              Each suite features double-glazed floor-to-ceiling glass windows, heated stone floors, and private wooden view decks.
            </p>
          </div>

          {/* Interactive Room Tabs / Viewer */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Room Selectors */}
            <div className="lg:col-span-4 flex flex-col justify-center space-y-4">
              {APP_DATA.rooms.map((room, index) => {
                const isActive = activeRoomIndex === index;
                return (
                  <button
                    key={room.id}
                    onClick={() => setActiveRoomIndex(index)}
                    className={`text-left p-6 rounded-2xl transition-all duration-300 border ${
                      isActive 
                        ? 'bg-neutral-800 border-amber-500/50 shadow-xl scale-[1.02]' 
                        : 'bg-neutral-950/60 border-neutral-800/80 hover:border-neutral-700 hover:bg-neutral-900'
                    }`}
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h3 className={`font-serif text-xl font-bold ${isActive ? 'text-amber-400' : 'text-white'}`}>
                        {room.name}
                      </h3>
                      <span className="text-xs font-bold text-neutral-400">{room.size}</span>
                    </div>
                    <p className="text-xs text-neutral-400 mb-4">{room.occupancy} • {room.bed}</p>
                    <div className="flex justify-between items-center pt-2 border-t border-neutral-800">
                      <div>
                        <span className="text-lg font-bold text-white">{room.price}</span>
                        <span className="text-xs text-neutral-500"> / {room.period}</span>
                      </div>
                      <span className={`text-xs font-medium underline ${isActive ? 'text-amber-400' : 'text-neutral-500'}`}>
                        View Details
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Room Display Card */}
            <div className="lg:col-span-8 bg-neutral-950 border border-neutral-800 rounded-3xl overflow-hidden shadow-2xl flex flex-col justify-between">
              <div className="relative h-80 sm:h-96 overflow-hidden">
                <img 
                  src={APP_DATA.rooms[activeRoomIndex].image} 
                  alt={APP_DATA.rooms[activeRoomIndex].name}
                  className="w-full h-full object-cover transition-all duration-700"
                />
                <div className="absolute top-4 right-4 bg-neutral-950/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-neutral-800 text-xs text-amber-300 font-semibold">
                  New 2026 Interior
                </div>
              </div>

              <div className="p-6 sm:p-8 space-y-6">
                <div className="flex flex-wrap justify-between items-end gap-4">
                  <div>
                    <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                      {APP_DATA.rooms[activeRoomIndex].name}
                    </h3>
                    <p className="text-neutral-400 text-sm mt-1">
                      Full view facing the North-Western Himalayan mountain chain.
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="text-2xl font-bold text-white">{APP_DATA.rooms[activeRoomIndex].price}</span>
                    <span className="text-xs text-neutral-500 block">excl. taxes & breakfast</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-neutral-900">
                  {APP_DATA.rooms[activeRoomIndex].features.map((feat, i) => (
                    <div key={i} className="bg-neutral-900/60 border border-neutral-800 p-3 rounded-xl text-center">
                      <span className="text-xs text-neutral-300 font-medium block">{feat}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-2 flex gap-4">
                  <button 
                    onClick={() => handleOpenBooking(APP_DATA.rooms[activeRoomIndex].name)}
                    className="flex-1 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-neutral-950 font-bold text-sm transition text-center shadow-lg shadow-amber-500/10"
                  >
                    Reserve {APP_DATA.rooms[activeRoomIndex].name}
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. Visual Gallery Grid with Lightbox */}
      <section id="gallery" className="py-24 bg-neutral-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="text-xs font-bold text-amber-400 uppercase tracking-widest block mb-2">Visual Journeys</span>
              <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white">Glimpse of The Retreat</h2>
            </div>
            <p className="text-neutral-400 max-w-md text-sm mt-4 md:mt-0">
              Explore photography captured across the property during the 2026 spring and winter unveilings.
            </p>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {APP_DATA.gallery.map((item, index) => (
              <div 
                key={index}
                onClick={() => setLightboxIndex(index)}
                className="group relative h-80 rounded-2xl overflow-hidden border border-neutral-800 cursor-pointer"
              >
                <img 
                  src={item.url} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent opacity-80 group-hover:opacity-90 transition" />
                
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition duration-300">
                  <h4 className="font-serif text-xl font-bold text-white">{item.title}</h4>
                  <p className="text-xs text-neutral-300 mt-1 opacity-0 group-hover:opacity-100 transition duration-300">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Signature Experiences & Amenities */}
      <section id="amenities" className="py-24 bg-neutral-900/30 border-y border-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-widest block mb-2">Curated Comforts</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white">Tailored Mountain Hospitality</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {APP_DATA.amenities.map((item, index) => {
              const IconComp = item.icon;
              return (
                <div key={index} className="p-8 rounded-2xl bg-neutral-950 border border-neutral-800/80 hover:border-amber-500/30 transition group">
                  <div className="p-3 rounded-xl bg-amber-500/10 text-amber-400 w-fit mb-6 border border-amber-500/20 group-hover:scale-110 transition">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-white mb-2">{item.name}</h3>
                  <p className="text-neutral-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 7. Location & Contact Banner */}
      <section id="contact" className="py-20 bg-neutral-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-neutral-900 via-neutral-900 to-amber-950/30 rounded-3xl p-8 sm:p-12 border border-neutral-800 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="space-y-4 max-w-2xl">
              <div className="inline-flex items-center space-x-2 text-amber-400 text-xs font-bold uppercase tracking-wider">
                <MapPin className="w-4 h-4" />
                <span>Mussoorie Heights</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white">
                Plan Your Escapade Above the Fog Line
              </h2>
              <p className="text-neutral-400 text-sm sm:text-base">
                Located 45 minutes from Dehradun city center and 1.5 hours from Jolly Grant Airport. Airport transfer in luxury AWD SUVs available upon request.
              </p>
              <div className="flex flex-wrap gap-6 text-xs text-neutral-300 pt-2">
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4 text-amber-400" />
                  <span>+91 98765 43210</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4 text-amber-400" />
                  <span>stay@cloudmistmussoorie.com</span>
                </div>
              </div>
            </div>

            <button 
              onClick={() => handleOpenBooking()}
              className="px-8 py-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-neutral-950 font-bold text-sm tracking-wide transition shadow-xl shadow-amber-500/20 shrink-0"
            >
              Request Reservation
            </button>
          </div>
        </div>
      </section>

      {/* 8. Footer */}
      <footer className="py-12 bg-neutral-950 border-t border-neutral-900 text-neutral-500 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-3">
            <Mountain className="w-5 h-5 text-amber-400" />
            <span className="font-serif font-bold text-neutral-300 uppercase tracking-wider text-sm">
              The Cloud Mist Retreat
            </span>
          </div>
          <p>© 2026 The Cloud Mist Retreat Mussoorie. All Rights Reserved.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-neutral-300">Privacy Policy</a>
            <a href="#" className="hover:text-neutral-300">Terms of Stay</a>
            <a href="#" className="hover:text-neutral-300">Press Kit</a>
          </div>
        </div>
      </footer>

      {/* --- MODALS & LIGHTBOX --- */}

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <div className="fixed inset-0 z-50 bg-neutral-950/95 backdrop-blur-md flex items-center justify-center p-4">
          <button 
            onClick={() => setLightboxIndex(null)}
            className="absolute top-6 right-6 p-2 rounded-full bg-neutral-800 text-white hover:bg-neutral-700"
          >
            <X className="w-6 h-6" />
          </button>
          <div className="max-w-5xl w-full text-center space-y-4">
            <img 
              src={APP_DATA.gallery[lightboxIndex].url} 
              alt={APP_DATA.gallery[lightboxIndex].title}
              className="max-h-[75vh] mx-auto rounded-2xl object-contain border border-neutral-800 shadow-2xl"
            />
            <div>
              <h3 className="font-serif text-2xl font-bold text-white">{APP_DATA.gallery[lightboxIndex].title}</h3>
              <p className="text-neutral-400 text-sm mt-1">{APP_DATA.gallery[lightboxIndex].subtitle}</p>
            </div>
          </div>
        </div>
      )}

      {/* Booking / Inquiry Modal */}
      {isBookingModalOpen && (
        <div className="fixed inset-0 z-50 bg-neutral-950/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-neutral-900 border border-neutral-800 rounded-3xl max-w-lg w-full p-6 sm:p-8 relative shadow-2xl">
            <button 
              onClick={() => setIsBookingModalOpen(false)}
              className="absolute top-6 right-6 p-2 rounded-full bg-neutral-800 text-neutral-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            {!bookingSuccess ? (
              <>
                <div className="mb-6">
                  <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">Direct Reservation</span>
                  <h3 className="font-serif text-2xl font-bold text-white mt-1">
                    {selectedRoomForBooking ? `Reserve ${selectedRoomForBooking}` : "Inquire Your Stay"}
                  </h3>
                  <p className="text-neutral-400 text-xs mt-1">
                    Fill out your preferences and our retreat concierge will confirm availability within 2 hours.
                  </p>
                </div>

                <form onSubmit={handleBookingSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-neutral-300 uppercase mb-1">Full Name</label>
                    <input 
                      type="text" 
                      required 
                      placeholder="e.g. Rahul Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-500"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-neutral-300 uppercase mb-1">Email</label>
                      <input 
                        type="email" 
                        required 
                        placeholder="name@domain.com"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-neutral-300 uppercase mb-1">Phone</label>
                      <input 
                        type="tel" 
                        required 
                        placeholder="+91..."
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-neutral-300 uppercase mb-1">Preferred Check-In</label>
                      <input 
                        type="date" 
                        required
                        value={formData.checkIn}
                        onChange={(e) => setFormData({...formData, checkIn: e.target.value})}
                        className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-neutral-300 uppercase mb-1">Guests</label>
                      <select 
                        value={formData.guests}
                        onChange={(e) => setFormData({...formData, guests: e.target.value})}
                        className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-500"
                      >
                        <option value="1 Guest">1 Guest</option>
                        <option value="2 Guests">2 Guests</option>
                        <option value="4 Guests">4 Guests</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-300 uppercase mb-1">Special Requests</label>
                    <textarea 
                      rows={2}
                      placeholder="High floor, dietary preferences, anniversary setup..."
                      value={formData.notes}
                      onChange={(e) => setFormData({...formData, notes: e.target.value})}
                      className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-500 resize-none"
                    />
                  </div>

                  <button 
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-neutral-950 font-bold text-sm transition shadow-lg shadow-amber-500/20 mt-2"
                  >
                    Submit Reservation Request
                  </button>
                </form>
              </>
            ) : (
              <div className="text-center py-8 space-y-4">
                <div className="w-16 h-16 bg-amber-500/20 border border-amber-500/40 text-amber-400 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-white">Inquiry Received</h3>
                <p className="text-neutral-400 text-sm max-w-xs mx-auto">
                  Thank you, <span className="text-white font-medium">{formData.name}</span>. Our desk has received your request for <span className="text-amber-400">{selectedRoomForBooking || "a stay"}</span> and will reach out via WhatsApp/Phone shortly.
                </p>
                <button 
                  onClick={() => setIsBookingModalOpen(false)}
                  className="px-6 py-2.5 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-white font-semibold text-sm transition mt-4"
                >
                  Close Window
                </button>
              </div>
            )}
          </div>
        </div>
      )}

    </div>
  );
}