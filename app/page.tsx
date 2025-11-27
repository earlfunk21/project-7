import Script from 'next/script';

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "onService, Inc.",
    "image": "https://www.onserviceit.com/logo.png",
    "@id": "https://www.onserviceit.com",
    "url": "https://www.onserviceit.com",
    "telephone": "+18778431717",
    "email": "help@onservice.us",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "US"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "00:00",
      "closes": "23:59"
    },
    "sameAs": [
      "https://www.onserviceit.com"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "250"
    },
    "offers": {
      "@type": "Offer",
      "price": "49.99",
      "priceCurrency": "USD",
      "description": "Computer repair and IT support services"
    },
    "areaServed": {
      "@type": "Country",
      "name": "United States"
    },
    "serviceType": [
      "Computer Repair",
      "IT Support",
      "Network Security",
      "Server Monitoring",
      "Backup & Recovery",
      "Managed IT Services"
    ]
  };

  return (
    <>
      <Script
        id="structured-data"
        type="application/ld+json"
        strategy="beforeInteractive"
      >
        {JSON.stringify(structuredData)}
      </Script>
      <main className="min-h-screen bg-linear-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden" aria-label="Hero section">
        <div className="absolute inset-0 bg-linear-to-r from-blue-600/10 to-purple-600/10 dark:from-blue-500/5 dark:to-purple-500/5"></div>
        <div className="container mx-auto px-6 py-20 relative">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 dark:bg-blue-900/30 rounded-full text-sm font-medium text-blue-700 dark:text-blue-300 animate-fade-in">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
              </svg>
              Available 24/7 - Fast Response
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-linear-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 leading-tight">
              Professional Computer Repair & IT Support Services
            </h1>
            
            <p className="text-2xl md:text-3xl font-semibold text-gray-800 dark:text-gray-100">
              24/7 Expert IT Help - Get Help Now
            </p>
            
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Professional computer repair and IT support services. If we can't fix it, you don't owe us a dime! Call 1-877-843-1717
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
              <a 
                href="tel:8778431717"
                className="group relative px-8 py-4 bg-linear-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold text-lg shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 overflow-hidden"
                aria-label="Call onService IT Support at 1-877-843-1717"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  1-877-843-1717
                </span>
                <div className="absolute inset-0 bg-linear-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
              
              <a 
                href="mailto:help@onservice.us"
                className="px-8 py-4 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 rounded-xl font-semibold text-lg border-2 border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                aria-label="Email onService IT Support at help@onservice.us"
              >
                Email Support
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="container mx-auto px-6 py-20" aria-label="Our IT services and features">
        <h2 className="sr-only">Why Choose onService IT Support</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Professional Service */}
          <article className="group relative bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="absolute inset-0 bg-linear-to-br from-blue-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative">
              <div className="w-16 h-16 bg-linear-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-3">Professional IT Service</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Our fast response expert IT team works hard to keep you and your operations up and running with professional computer repair and managed IT services.
              </p>
            </div>
          </article>

          {/* Open Everyday */}
          <article className="group relative bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="absolute inset-0 bg-linear-to-br from-purple-500/5 to-pink-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative">
              <div className="w-16 h-16 bg-linear-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-3">24/7 IT Support - Open Everyday</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                We provide 24/7 computer and IT assistance for your systems at home and in the office. Emergency IT support available anytime. Call now to learn more.
              </p>
            </div>
          </article>

          {/* Quick Response */}
          <article className="group relative bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="absolute inset-0 bg-linear-to-br from-green-500/5 to-emerald-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative">
              <div className="w-16 h-16 bg-linear-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-3">Fast Response Computer Help</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Call to get computer help now. If you have an emergency IT situation or need a quick response for computer problems, our expert technicians can help right now.
              </p>
            </div>
          </article>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-linear-to-r from-blue-600 to-purple-600 dark:from-blue-700 dark:to-purple-700 py-20" aria-label="IT services we provide">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center text-white space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold">Comprehensive IT Support and Computer Repair Services</h2>
            <p className="text-lg md:text-xl opacity-90 leading-relaxed">
              We offer managed IT services, computer repair, and technical support to get you and your operations back up to speed. We fix work-related computer issues including online cyber threats, slow performance, network problems, printing issues, email problems, sound, internet connectivity, server problems, and more.
            </p>
            <div className="pt-6 space-y-4">
              <h3 className="sr-only">Our IT Services Include</h3>
              <ul className="flex flex-wrap justify-center gap-3 list-none">
                <li className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium">Managed IT Services</li>
                <li className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium">Help Desk Support</li>
                <li className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium">Network Security</li>
                <li className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium">Server Monitoring</li>
                <li className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium">Backup & Recovery</li>
                <li className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium">Computer Repair</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="container mx-auto px-6 py-20" aria-label="Pricing information">
        <div className="max-w-4xl mx-auto bg-linear-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-3xl p-12 shadow-2xl">
          <div className="text-center space-y-6">
            <h2 className="sr-only">Affordable Computer Repair Pricing</h2>
            <div className="inline-block">
              <div className="text-6xl font-bold bg-clip-text text-transparent bg-linear-to-r from-blue-600 to-purple-600" itemProp="price">
                $49.99
              </div>
              <div className="text-gray-600 dark:text-gray-400 text-lg mt-2">per computer</div>
            </div>
            <div className="space-y-3 text-gray-700 dark:text-gray-300">
              <p className="text-xl font-semibold">24/7 Computer Support - Open Everyday - Call Us Anytime</p>
              <p className="text-lg">We Service Your Area with Fast On-Site and Remote IT Support</p>
            </div>
            <div className="pt-6">
              <a 
                href="tel:8778431717"
                className="inline-flex items-center gap-2 px-10 py-5 bg-linear-to-r from-blue-600 to-purple-600 text-white rounded-xl font-bold text-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
                aria-label="Call now for computer repair at 1-877-843-1717"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="container mx-auto px-6 text-center space-y-4">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} onService, Inc. - Professional Computer Repair & IT Support | <a href="https://www.onserviceit.com/privacy_policy" className="hover:text-blue-400 transition-colors" rel="noopener">Privacy Policy</a>
          </p>
          <nav aria-label="Contact information">
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="tel:8778431717" className="hover:text-blue-400 transition-colors" aria-label="Call onService">Call or text: 1-877-843-1717</a>
              <span className="hidden sm:inline">|</span>
              <a href="mailto:help@onservice.us" className="hover:text-blue-400 transition-colors" aria-label="Email onService">Email: help@onservice.us</a>
            </div>
          </nav>
        </div>
      </footer>
    </main>
    </>
  );
}
