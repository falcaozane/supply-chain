// import React, {useState, useEffect} from "react";
// import Image from "next/image";
// import SVG from "../Components/SVG/Str1";

// //Internal Import 

// import images from "../Images/index";

// export default ({
//   openProfile,
//   setOpenProfile,
//   currentUser,
//   getShipmentsCount,
// }) => {
//   const [count, setCount] = useState();
//   useEffect(()=> {
//     const getShipmentsData = getShipmentsCount();

//     return async () => {
//       const allData = await getShipmentsData;
//       setCount(allData);
//     };
//   }, []);

//   return openProfile ? (
//     <div className="fixed inset-0 z-10 overflow-y-auto">
//       <div
//        className="fixed inset-0 w-full h-full bg-black opacity-40"
//        onClick={()=>setOpenProfile(false)}
//        ></div>

//        <div className="flex items-center min-h-screen px-4 py-8">
//         <div className="relative w-full max-w-lg p-4 mx-auto bg-white rounded-md shodow-lg">

//           <div className="flex justify-end">
//              <button
//                className="p-2 text-gray-400 rounded-md hover:bg-gray-100"
//                onClick={()=> setOpenProfile(false)}
//              >
//                <SVG></SVG>
//               </button>
//           </div>
//              <div className="max-w-sm mx-autopy-3 space-y-3 text-center">
//                    <div className="flex flex-col items-center pb-10">
//                     <Image
//                       className="w-24 h-24 mb-3 rounded-full shadow-lg"
//                       src={images.avatar}
//                       alt="Bonnie image"
//                     />
//                     <h5 className="mc-1 text-xl font-medium text-gray-900 dark:text-white">
//                       Welcome trader
//                     </h5>
//                      <span className="text-sm text-gray-500 dark-gray-400">
//                       {currentUser}
//                       </span>       

//                       <div className="flex mt-4 space-x-3 md:mt-6">
//                         <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-black rounded-lg border-2">
//                              Balance: 34345 ETH
//                           </a>  
//                           <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-black rounded-lg border-2">
//                             Total Shipment: {count}
//                           </a>
//                       </div> 
//                    </div>
//              </div>
//         </div>
//        </div>
//     </div>

//   ) : (
//     ""
//   );
// }







import React, { useState, useEffect } from "react";
import Image from "next/image";
import SVG from "../Components/SVG/Str1";

// Internal Import
import images from "../Images/index";

export default ({ openProfile, setOpenProfile, currentUser, getShipmentsCount, getBalance }) => {
  const [count, setCount] = useState();
  const [balance, setBalance] = useState("Loading..."); // Initial value while loading

  useEffect(() => {
    const fetchData = async () => {
      // Fetch the wallet balance
      //const userBalance = await getBalance(currentUser);

      // Fetch the shipment count
      const shipmentsCount = await getShipmentsCount();

      //setBalance(userBalance);
      setCount(shipmentsCount);
    };

    fetchData();
  }, [currentUser, getBalance, getShipmentsCount]);

  return openProfile ? (
    <div className="fixed inset-0 z-10 overflow-y-auto">
      <div className="fixed inset-0 w-full h-full bg-black opacity-40" onClick={() => setOpenProfile(false)}></div>

      <div className="flex items-center min-h-screen px-4 py-8">
        <div className="relative w-full max-w-lg p-4 mx-auto bg-white rounded-md shodow-lg">
          <div className="flex justify-end">
            <button
              className="p-2 text-gray-400 rounded-md hover:bg-gray-100"
              onClick={() => setOpenProfile(false)}
            >
              <SVG></SVG>
            </button>
          </div>
          <div className="max-w-sm mx-autopy-3 space-y-3 text-center">
            <div className="flex flex-col items-center pb-10">
              <Image
                className="w-24 h-24 mb-3 rounded-full shadow-lg"
                src={images.avatar}
                alt="Bonnie image"
              />
              <h5 className="mc-1 text-xl font-medium text-gray-900 dark:text-white">
                Welcome trader
              </h5>
              <span className="text-sm text-gray-500 dark-gray-400">
                {currentUser}
              </span>

              <div className="flex mt-4 space-x-3 md:mt-6">
                <a
                  href="#"
                  className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-black rounded-lg border-2"
                >
                  Balance: {balance} ETH
                </a>
                <a
                  href="#"
                  className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-black rounded-lg border-2"
                >
                  Total Shipment: {count}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
};


