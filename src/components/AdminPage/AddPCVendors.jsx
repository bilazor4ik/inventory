import React, { useState } from 'react'
import { addDoc, collection, doc, setDoc, updateDoc } from "firebase/firestore"; 
import { db } from '../../firebase';
const AddPCVendors = () => {

    const [vendor, setVendor] = useState("")
 const addVendor = async (e) =>{
    e.preventDefault()
    const PCvendorRef =  doc(collection(db, "availablePCVendors"))
    console.log(PCvendorRef)
     await updateDoc(PCvendorRef, {
        manufacturers: 'teetetet'
     })
 }
  return (
    <div><form className='max-w-sm bg-gray-300 px-4 py-8' onSubmit={addVendor}>
    <div>
      <label htmlFor="text" className="block text-sm font-medium text-gray-700">
        Create Inventory Category
      </label>
      <div className="mt-1">
        <input
          type="text"
          name="text"
          id="text"
          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          placeholder="you@example.com"
        />
      </div>
    </div>
    <button type='submit'>Submit</button>
    </form></div>
  )
}

export default AddPCVendors