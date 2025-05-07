import React from "react";

const Secondpage = () => {
  return (
    <div
      id="page-2"
      className="relative w-full min-h-screen bg-[#f5f3ff] p-10"
    >
      <div id="heading" className="relative py-[4vw] px-[3vw] m-[2vw]">
      <h1 className="text-4xl font-bold mb-10 text-center text-[#1c1c1c]">
        Featured Events
      </h1>
      </div>

      <div id="card-box" className="relative place-items-center grid grid-cols-1 md:grid-cols-3 gap-8 h-[10vw]">

        {/* Event Card yaha se shuru hai*/}
        <div className="bg-white rounded-xl shadow-md  flex flex-col">
          <img
            src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=3774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Event"
            className="h-[15vw] w-full bg-red-600 rounded-t-2xl object-cover"
          />
          <div className="p-5  flex flex-col justify-between rounded-xl flex-wrap">
            <h3 className="text-lg py-10 font-semibold text-[#1c1c1c] capitalize">
              Entomology International Congress of Vancouver
            </h3>
            <p className="text-sm text-gray-600 mt-2">📅 Fri, 15 Sep 2023</p>

            <div className="flex items-center justify-between mt-6">
              <div className="text-sm text-gray-500">
                <p>Organized By</p>
                <p className="text-pink-600 font-semibold">Set Your Vendor</p>
              </div>
              <button className="border border-[#1c1c1c] px-4 py-2 text-sm font-semibold rounded hover:bg-[#1c1c1c] hover:text-white transition">
                BUY NOW
              </button>
            </div>
          </div>
        </div>
       {/* yaha wala part map kro */}
      </div>
    </div>
  );
};

export default Secondpage;
