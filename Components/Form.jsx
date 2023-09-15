import React, { useState } from 'react'
import Image from './SVG/Str1'

export default ({
  setCreateShipmentModel,
  createShipmentModel,
  createShipment, 
}) => {
  const [ shipment,setShipment ] = useState({
    receiver: "",
    pickupTime: "",
    distance: "",
    price: "",
  });

  const createItem = async () => {
    try {
      await createShipment(shipment);
    } catch (error)
    {
      console.log("Wrong creatong item");
    }
  };
  
  return createShipmentModel ? (
    <div className='fixed inset-0 z-10 overflow-y-auto'>
      <div className='fixed inset-0 w-full h-full bg-black opacity-40' onClick={()=>setCreateShipmentModel(false)}>
      </div>
      <div className='flex items-center min-h-screen px-4 py-8'>
        <div className='relative w-full max-w-lg p-4 mx-auto bg-white rounded-md shadow-lg'>
          <div className='flex justify-end'>
            <button className='p-2 text-grey-400 rounded-md hover:bg-grey-100' onClick={()=> setCreateShipmentModel(false)}>
              <Image />
            </button>
          </div>
          <div className='max-w-sm mx-auto py-3 space-y-3 text-center'>
            <h4>
              Track product, Create Shipment
            </h4>
            <p className='text-[15px] text-grey-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, libero.
            </p>
            <form onSubmit={(e)=> e.preventDefault()}>
              <div className='relative mt-3'>
                <input type="text" placeholder="Receiver" className='w-full pl-5 pr-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg'
                onChange={(e) => 
                  setShipment({
                    ...shipment,
                    receiver: e.target.value,
                  })
                }
                />
              </div>
              <div className='relative mt-3'>
                <input type="date" placeholder="Pickup Time" className='w-full pl-5 pr-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg'
                onChange={(e) => 
                  setShipment({
                    ...shipment,
                    pickupTime: e.target.value,
                  })
                }
                />
              </div>
              <div className='relative mt-3'>
                <input type="text" placeholder="Distance" className='w-full pl-5 pr-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg'
                onChange={(e) => 
                  setShipment({
                    ...shipment,
                    distance: e.target.value,
                  })
                }
                />
              </div>
              <div className='relative mt-3'>
                <input type="text" placeholder="Price" className='w-full pl-5 pr-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg'
                onChange={(e) => 
                  setShipment({
                    ...shipment,
                    price: e.target.value,
                  })
                }
                />
              </div>
              <button 
                onClick={() => createItem()}
                className='block w-full mt-3 py-3 px-4 font-medium text-sm text-center text-white bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 rounded-lg ring-offset-2 ring-indigo-600 focus:ring-2'
              >Create Shipment</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )  : (
    ""
  )
};