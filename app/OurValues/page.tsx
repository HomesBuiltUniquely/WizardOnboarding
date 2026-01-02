import Link from "next/link";

const steps = [
    { id: 1, label: "Welcome", status: "done" },
    { id: 2, label: "HUB Story", status: "done" },
    { id: 3, label: "HUB Family", status: "done" },
    { id: 4, label: "Our Values", status: "active" },
    { id: 5, label: "Meet HOWS", status: "done" },
    { id: 6, label: "Your Modules", status: "inactive" },
    { id: 7, label: "Life At HUB", status: "inactive" },
    { id:8, label: "Leadership", status: "inactive" }
  ];


export default function OurValuesPage() {
    return(
       <div>
        <div className="w-screen h-screen bg-gradient-to-r rounded-2xl from-cyan-200 to-amber-50 p-4">
        <div className=" w-[1400px] ml-6 mt-6  h-[750px] rounded-4xl grid grid-cols-8 gap-10">


        <div className="  bg-cyan-50 rounded-[30px] p-8 shadow-lg  col-span-2">
          <div className="flex flex-col gap-8 relative pl-2 pt-5">

            <div className="text-4xl pl-12 font-bold">HOWS</div>

             {/* Vertical connector line */}
            <div className="absolute left-[19px] top-30 bottom-4 w-[2px] bg-gray-300 z-0 ml-4"></div>


            {steps.map((step) => (
              <div key={step.id} className="flex items-center gap-4 relative z-10 pt-4 pl-4 ">
                {step.status === 'active' ? (
                   // Active Step (Orange Glow)
                   <div className="w-6 h-6 rounded-full bg-cyan-400 shadow-[0_0_15px_rgba(251,146,60,0.6)] flex items-center justify-center relative">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                   </div>
                ) : (
                  // Done/Inactive Step (Simple Dot)
                  <div className="w-6 h-6 rounded-full bg-gray-300 flex items-center justify-center">
                    <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                  </div>
                )}
                
                <span className={`text-sm font-medium ${step.status === 'active' ? 'text-orange-500 font-bold' : 'text-gray-500'}`}>
                  {step.id}. {step.label}
                </span>
              </div>
            ))}
          </div>
        </div>



            <div className="col-span-6 bg-cyan-50 rounded-4xl mr-4 border-3 border-white shadow-lg">

                <h1 className="text-[50px] font-extrabold text-[#C46A3A] tracking-tight pl-10 pr-10 pb-8 pt-8">What drives us every day</h1>
               <div className="ml-12 mr-15">
               <div className="flex">
                    <div><img src="/rocket.png" alt="Rocket" className="w-[50px] mt-2"  /></div>
                    <div className="pl-10"><h1 className="text-[26px] font-extrabold tracking-tight">Innovation</h1>
                    <p className="text-[18px] font-bold">pioneering new ways to design your home.</p>
                    
                    </div>
                
                </div>
                <div className="w-full h-0.5 bg-gray-200 mt-5 " ></div>

                <div className="flex mt-3">
                    <div><img src="/handshake.png" alt="Rocket" className="w-[50px] mt-2" /></div>
                    <div className="pl-10"><h1 className="text-[26px] font-extrabold tracking-tight">Integrity</h1>
                    <p className="text-[18px] font-bold">pioneering new ways to design your home.</p>
                    </div>
                </div>

                <div className="w-full h-0.5 bg-gray-200 mt-5 " ></div>

                <div className="flex mt-3">
                    <div><img src="/colaboration.png" alt="Rocket" className="w-[50px] mt-2" /></div>
                    <div className="pl-10"><h1 className="text-[26px] font-extrabold tracking-tight">Colaboration</h1>
                    <p className="text-[18px] font-bold">pioneering new ways to design your home.</p>
                    </div>
                </div>

                <div className="w-full h-0.5 bg-gray-200 mt-5 " ></div>

                <div className="flex mt-3">
                    <div><img src="/currency.png" alt="Rocket" className="w-[50px] mt-2" /></div>
                    <div className="pl-10"><h1 className="text-[26px] font-extrabold tracking-tight">Affordability</h1>
                    <p className="text-[18px] font-bold">pioneering new ways to design your home.</p>
                    </div>
                </div>

                <div className="w-full h-0.5 bg-gray-200 mt-5 " ></div>

                <div className="flex mt-3">
                    <div><img src="/self-care.png" alt="Rocket" className="w-[50px] mt-2" /></div>
                    <div className="pl-10"><h1 className="text-[26px] font-extrabold tracking-tight">Customer Delight</h1>
                    <p className="text-[18px] font-bold">pioneering new ways to design your home.</p>
                    </div>
                </div>

                <div className="flex  mt-12 ">
                <div className="bg-[#d75c1a] w-[170px] h-[40px] rounded-4xl flex">
                <Link href="/MeetHows"><button className=" text-white font-extrabold pl-6 pt-2" >Meet HOWS 
                </button></Link>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-10 text-white pl-4 -mt-0.8 font-extrabold">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>
                </div>
                <p className="pl-10 pt-1.5 text-[16px] text-gray-500 font-bold"> Step 4 of 5</p>
                </div>

               </div>
        
            </div>
         </div>
        </div>
       </div>
    );
}