import React from 'react'
import AddAccessories from './AddAccessories'
import AddAdapters from './AddAdapters'
import AddCabling from './AddCabling'
import AddMonitors from './AddMonitors'
import AddNetowrking from './AddNetowrking'
import AddPC from './AddPC'

const DisplaySelectedForm = (props) => {
    const { selectedCategory, selectedSubCategory } = props
   
    switch (selectedCategory) {
        case 'Hardware:  PCs':
            return <AddPC />
            break;
        case 'Hardware:  Monitors':
            return <AddMonitors />
            break;
        case 'Hardware:  Adapters':
            return <AddAdapters />
            break;
        case 'Hardware:  Networking':
            return <AddNetowrking />
            break;
        case 'Hardware:  Accessories':
            return <AddAccessories />
            break;
        case 'Cabling:  Patch Cables':
        case 'Cabling:  Adapters':
        case 'Cabling:  Adapters':
            return <AddCabling />
            break;

        default:
            return '456'
    }




}

export default DisplaySelectedForm