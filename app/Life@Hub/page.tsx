

export default function Life(){
  return (
    <div className="min-h-screen bg-gradient-to-r from-amber-50 via-pink-50 to-rose-50 p-8 text-black">
      <div className="max-w-7xl mx-auto flex gap-12 items-start">
        <h2 className="text-xl font-semibold mb-8">HOWS Onboarding - Life at HUB</h2>
        {/* Left progress rail - hidden on small screens */}
       

        {/* Main card */}
        <main className="flex-1">
          <div className="bg-white rounded-3xl p-8 mt-5 md:p-12 shadow-lg relative overflow-hidden w-[900] h-[700]">
            <div className="md:flex md:items-center md:gap-12">
              <div className="flex-1">
                <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">Work hard. Create joy.<br/>Celebrate often.</h1>


                <div className="flex justify-evenly">
                  <p className="pt-20">
                  We call it Hubppening! — where recognition, laughter, and creativity come together. And yes, meet Dinkan, our Junior Happiness Associate <span className="inline-block">🐶</span>
                </p>

                <div>
                  <img src="dog.png" alt="Dinkan the dog" className=""/>
                </div>

                </div>

                <div className="w-[230px] -mt-20 flex bg-orange-400 hover:bg-orange-500 text-white px-6 py-2 rounded-full shadow-md">
                 <a href="#" >Meet the People <span className="text-2xl">→</span></a>
                </div>
                

              </div>
            </div>
                
              </div>
          

            <hr className="mt-10 border-t border-amber-100" />

            {/* Example lower content area (keeps spacing similar to reference) */}
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 rounded-xl bg-amber-50">
                {/* placeholder block */}
              </div>
              <div className="p-6 rounded-xl bg-amber-50">
                {/* placeholder block */}
              </div>
            </div>
          
        </main>
      </div>
    </div>
  );
}
