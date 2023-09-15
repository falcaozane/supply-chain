import React, {useState, useEffect, useContext} from 'react'

// Internal import

import{
    Table,
    Form,
    Services,
    Profile,
    GetShipment,
    StartShipment,
    Navbar,
} from "../Components"

import CompleteShipment from '../Components/CompleteShipment'

import { TrackingContext } from '@/Context/Tracking'


const index = () => {

    const {
        currentUser,
        createShipment,
        getAllShipment,
        completeShipment,
        startShipment,
        getShipmentsCount,

    } = useContext(TrackingContext)

    // STATE VARIABLE
    const [createShipmentModel, setCreateShipmentModel] = useState(false)
    const [openProfile, setOpenProfile] = useState(false)
    const [startModal, setStartModal] = useState(false)
    const [completeModal, setCompleteModal] = useState(false)
    const [getModel, setGetModel] = useState(false)

    //DATA STATE VARIABLE
    const [allShipmentsdata, setAllShipmentsdata] = useState()

    useEffect(()=>{
        const getCampaignsData = getAllShipment()

        return async () =>{
            const allData = await getCampaignsData;
            setAllShipmentsdata(allData)
          }
    }, [])
   
    return (
        <>  
            <Navbar/>
            <Services setOpenProfile={setOpenProfile} setCompleteModal={setCompleteModal} setGetModel={setGetModel} setStartModal={setStartModal} />
            <Table setCreateShipmentModel={setCreateShipmentModel} allShipmentsdata={allShipmentsdata}  />
            <Form createShipmentModel={createShipmentModel} createShipment={createShipment} setCreateShipmentModel={setCreateShipmentModel} />
            <Profile openProfile={openProfile} setOpenProfile={setOpenProfile} currentUser={currentUser} getShipmentsCount={getShipmentsCount} />
            <CompleteShipment completeModal={completeModal} setCompleteModal={setCompleteModal} completeShipment ={completeShipment} />
            <GetShipment getModel={getModel} setGetModel={setGetModel} getShipment={GetShipment} />
            <StartShipment startModal={startModal} setStartModal={setStartModal} startShipment={startShipment} />

        </>
    )
}

export default index