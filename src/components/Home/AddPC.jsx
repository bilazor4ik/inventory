import React, { useState, Fragment, useEffect } from 'react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
import { Dialog, Transition, Listbox } from '@headlessui/react'
import { db } from '../../firebase'
import { collection, doc, getDoc, onSnapshot, query } from 'firebase/firestore'

const AddPC = () => {
  const [availableVendors, setAvailableVendors] = useState([])
  const [selectedVendor, setSelectedVendor] = useState('Select Manufacturer')


  const getVendors = async () => {
    const docRef = doc(db, "availablePCVendors");
const docSnap = await getDoc(docRef);
if (docSnap.exists()) {
  console.log("Document data:", docSnap.data());
} else {
  // doc.data() will be undefined in this case
  console.log("No such document!");
}
  }
  useEffect(() => {
    getVendors()
   
  }, [])
  return (
    <form>
      <Listbox value={selectedVendor} onChange={setSelectedVendor}>
        {({ open }) => (
          <>
            <Listbox.Label className="block text-sm font-medium text-gray-700">Category</Listbox.Label>
            <div className="relative mt-1">
              <Listbox.Button className="relative w-full cursor-default rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-left shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm">
                <span className="block truncate">{selectedVendor} </span>
                <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                  <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                </span>
              </Listbox.Button>

              <Transition
                show={open}
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">

                </Listbox.Options>
              </Transition>
            </div>
          </>
        )}
      </Listbox>
    </form>
  )
}

export default AddPC