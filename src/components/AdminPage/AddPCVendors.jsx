import React, { useState } from 'react'
import { addDoc, arrayUnion, collection, doc, setDoc, updateDoc } from "firebase/firestore";
import { db } from '../../firebase';
const AddPCVendors = ({ loading, setLoading }) => {

  const [vendor, setVendor] = useState("")

  const addVendor = async (e) => {
    e.preventDefault()
    const availablePCVendors = doc(db, "availablePCVendors", "viKtHyel9GOFyXqNrLgB");
    console.log(vendor)

    await updateDoc(availablePCVendors, {
      manufacturers: arrayUnion(vendor)

    });
    setVendor("")
    setLoading(true)
  }
  return (
    <form className="space-y-8 divide-y divide-gray-200 w-1/3 bg-gray-300 px-6 py-8" onSubmit={addVendor}>
      <div className="space-y-8 divide-y divide-gray-200">
        <div>


          <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
            <div className="sm:col-span-4">
              <label htmlFor="pcVendor" className="block text-sm font-medium text-gray-700">
                PC Vendor
              </label>
              <div className="mt-1 flex rounded-md shadow-sm">

                <input
                  type="text"
                  name="pcVendor"
                  id="pcVendor"
                  autoComplete="pcVendor"
                  className="block w-full min-w-0 flex-1 rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm pl-2"
                  value={vendor}
                  onChange={(e) => { setVendor(e.target.value) }}
                  required
                />
              </div>
            </div>






          </div>
        </div>


      </div>

      <div className="pt-5">
        <div className="flex justify-start">
         
          <button
            type="submit"
            className="ml-3 inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Add
          </button>
        </div>
      </div>
    </form>
  )
}

export default AddPCVendors