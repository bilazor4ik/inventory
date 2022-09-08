import React, { useState } from 'react'
import AddedPCVendors from '../components/AdminPage/AddedPCVendors'
import AddPCVendors from '../components/AdminPage/AddPCVendors'

const Admin = () => {
  const [loading, setLoading] = useState(false)
  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        
        
        
 
    <div className="border-b border-gray-200 pb-5">
      <h3 className="text-lg font-medium leading-6 text-gray-900">Available Vendors for PCs</h3>
      <p className="mt-2 max-w-4xl text-sm text-gray-500">
        Please add\remove available vendors for PCs
      </p>
    </div>
    
    <AddPCVendors loading={loading} setLoading={setLoading}/>
        <AddedPCVendors loading={loading} setLoading={setLoading}/>
        </div>
  )
}

export default Admin