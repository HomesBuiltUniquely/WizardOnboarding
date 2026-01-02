export default function Leaders() {
  return (
    <div className="min-h-screen bg-blue-100 flex items-center justify-center p-6">
      <div className="bg-gradient-to-r from-sky-100 to-pink-100 rounded-3xl flex w-[900px] max-w-5xl ml-70 p-8 gap-8">

        <div className="flex-1">
          <h1 className="text-3xl font-semibold text-gray-800">Your Leaders</h1>
          <p className="text-gray-500 mt-2 mb-8">
            Meet the founders and heads driving our vision forward.
          </p>

          {/* LEADERS GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

            {/* Ranjith */}
            <div className="bg-white/50 rounded-2xl p-6 text-center hover:shadow-md transition">
              <div className="w-16 h-16 mx-auto rounded-full bg-blue-200 mb-4 overflow-hidden">
                <img src="/BoyR.png" alt="Ranjith" className="w-full h-full object-cover" />
              </div>
              <h3 className="font-semibold text-gray-800">Ranjith P Raj</h3>
              <p className="text-gray-500 text-sm mt-1">Founder & Director</p>
            </div>

            {/* Sushmita */}
            <div className="bg-white/50 rounded-2xl p-6 text-center hover:shadow-md transition">
              <div className="w-16 h-16 mx-auto rounded-full bg-blue-200 mb-4 overflow-hidden">
                <img src="/girlS.png" alt="Sushmita" className="w-full h-full object-cover" />
              </div>
              <h3 className="font-semibold text-gray-800">Sushmita</h3>
              <p className="text-gray-500 text-sm mt-1">Co-Founder</p>
            </div>

            {/* Ebbes */}
            <div className="bg-white/50 rounded-2xl p-6 text-center hover:shadow-md transition">
              <div className="w-16 h-16 mx-auto rounded-full bg-blue-200 mb-4 overflow-hidden">
                <img src="T.png" alt="Ebbes Alex" className="w-full h-full object-cover" />
              </div>
              <h3 className="font-semibold text-gray-800">Ebbes Alex</h3>
              <p className="text-gray-500 text-sm mt-1">Operations Head</p>
            </div>

            {/* Kulwant & Saeed */}
            <div className="bg-white/50 rounded-2xl p-6 text-center hover:shadow-md transition">
              <div className="w-16 h-16 mx-auto rounded-full bg-blue-200 mb-4 overflow-hidden">
                <img src="ES.png" alt="Sales Heads" className="w-full h-full object-cover" />
              </div>
              <h3 className="font-semibold text-gray-800">Kulwant & Saeed</h3>
              <p className="text-gray-500 text-sm mt-1">Sales Heads</p>
            </div>

            {/* Razi */}
            <div className="bg-white/50 rounded-2xl p-6 text-center hover:shadow-md transition">
              <div className="w-16 h-16 mx-auto rounded-full bg-blue-200 mb-4 overflow-hidden">
                <img src="/P.png" alt="Razi" className="w-full h-full object-cover" />
              </div>
              <h3 className="font-semibold text-gray-800">Razi</h3>
              <p className="text-gray-500 text-sm mt-1">Branch Lead, Sarjapura</p>
            </div>

          </div>

          {/* ADDITIONAL HUBSTERS */}
          <div className="flex justify-between items-center mt-8">
            <p className="text-sm text-gray-400">Additional Hubsters</p>
            <a className="text-sm text-gray-400" href="#">View all 50+ HUBsters</a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">

            <div className="bg-white/10 rounded-2xl p-6 text-center">
              <div className="w-16 h-16 mx-auto rounded-full bg-blue-200 mb-4 overflow-hidden">
                <img src="/P.png" alt="Razi" className="w-full h-full object-cover" />
              </div>
              <p className="text-gray-500 text-sm">Senior Designer</p>
            </div>

            <div className="bg-white/10 rounded-2xl p-6 text-center">
              <div className="w-16 h-16 mx-auto rounded-full bg-blue-200 mb-4 overflow-hidden">
                <img src="T.png" alt="Sales Heads" className="w-full h-full object-cover" />
              </div>
              <p className="text-gray-500 text-sm">Project Manager</p>
            </div>

            <div className="bg-white/10 rounded-2xl p-6 text-center">
              <div className="w-16 h-16 mx-auto rounded-full bg-blue-200 mb-4 overflow-hidden">
                <img src="/girlS.png" alt="Sushmita" className="w-full h-full object-cover" />
              </div>
              <p className="text-gray-500 text-sm">Senior Designer</p>
            </div>
          </div>

          {/* CTA */}
          <div className="flex justify-end mt-10">
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-full shadow-md">
              Let’s Get Started →
            </button>
          </div>

        </div>
      </div>    
    </div>
  );
}
