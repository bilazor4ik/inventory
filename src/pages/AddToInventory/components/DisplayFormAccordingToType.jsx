import React, { useEffect, useState } from 'react'
import LoadingPreview from '../../../components/LoadingPreview'
import AddCablingInventory from '../sections/AddCablingInventory'
import AddHardwareInventory from '../sections/AddHardwareInventory'

const DisplayFormAccordingToType = ({ selectedType }) => {
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(true)
        const timer = setTimeout(() => {
            setLoading(false)
        }, 700)
        // cleanup for useEffect
        return () => clearTimeout(timer)
    }, [selectedType])


    if(loading){
        return <LoadingPreview/>
    }else{

    
    switch (selectedType.title) {
        case 'Hardware':
            return <AddHardwareInventory/>
            break;
        case 'Cabling':
            return <AddCablingInventory/>
            break;
        

        default:
            return '456'
    }
}


}

export default DisplayFormAccordingToType