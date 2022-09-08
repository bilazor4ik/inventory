import React, { useState, Fragment, useEffect } from 'react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
import { Dialog, Transition, Listbox } from '@headlessui/react'

import { collection, doc, getDoc, getDocs, onSnapshot, query, addDoc } from 'firebase/firestore'
import { db } from '../firebase'

const AddPC = () => {

  const [inventoryItem, setInventoryItem] = useState({
    manufacturer: 'select manufacturer',
    cost: "",
    price: "",
    model: "",
    formFactor: 'select formFactor',
    comments: '',
    category: "PCs"
  })

  const addInventoryItem = async (e) => {
    e.preventDefault()
    // Add a new document with a generated id.
    const docRef = await addDoc(collection(db, "inventory"), inventoryItem);
    console.log("Document written with ID: ", docRef.id);
    setInventoryItem({
      manufacturer: 'select manufacturer',
    cost: "",
    price: "",
    model: "",
    formFactor: 'select formFactor',
    comments: '',
    category: "PCs"
    })
  }
  const [addedVendors, setAddedVendors] = useState([])

  const getPCVendors = async (e) => {
    

    const querySnapshot = await getDocs(collection(db, "availablePCVendors"));
    querySnapshot.forEach((doc) => {
      setAddedVendors(doc.data())

    });

  }
  useEffect(() => {
    getPCVendors()

  }, [])
  if (addedVendors.manufacturers) {
    return (
      <form onSubmit={(e)=>addInventoryItem(e)}  className="max-w-sm">
        <div>
          <label htmlFor="location" className="block text-sm font-medium text-gray-700">
            Manufacturer
          </label>
          <select
            id="location"
            name="location"
            className="mt-1 block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
            defaultValue="Canada"
            value={inventoryItem.manufacturer}
            onChange={(e) => setInventoryItem({ ...inventoryItem, manufacturer: e.target.value })}
          >
            <option>Select Manufacturer</option>
            {addedVendors.manufacturers.map((vendor, index) => {
              return <option key={index}>
                {vendor}
              </option>
            })}

          </select>
        </div>
        <div>
          <label htmlFor="cost" className="block text-sm font-medium text-gray-700">
            Cost
          </label>
          <div className="relative mt-1 rounded-md shadow-sm">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <span className="text-gray-500 sm:text-sm">$</span>
            </div>
            <input
              type="text"
              name="cost"
              id="cost"
              className="block w-full rounded-md border-gray-300 pl-7 pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              placeholder="0.00"
              aria-describedby="price-currency"
              value={inventoryItem.cost}
              onChange={(e) => setInventoryItem({ ...inventoryItem, cost: e.target.value })}
            />
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
              <span className="text-gray-500 sm:text-sm" id="price-currency">
                USD
              </span>
            </div>
          </div>
        </div>
        <div>
          <label htmlFor="price" className="block text-sm font-medium text-gray-700">
            Price to client
          </label>
          <div className="relative mt-1 rounded-md shadow-sm">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <span className="text-gray-500 sm:text-sm">$</span>
            </div>
            <input
              type="text"
              name="price"
              id="price"
              className="block w-full rounded-md border-gray-300 pl-7 pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              placeholder="0.00"
              aria-describedby="price-currency"
              value={inventoryItem.price}
              onChange={(e) => setInventoryItem({ ...inventoryItem, price: e.target.value })}
            />
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
              <span className="text-gray-500 sm:text-sm" id="price-currency">
                USD
              </span>
            </div>
          </div>
        </div>

        <div>
          <label htmlFor="model" className="ml-px block pl-4 text-sm font-medium text-gray-700">
            Model
          </label>
          <div className="mt-1">
            <input
              type="text"
              name="model"
              id="model"
              className="block w-full rounded-full border-gray-300 px-4 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              placeholder="Optiplex 5000"
              value={inventoryItem.model}
              onChange={(e) => setInventoryItem({ ...inventoryItem, model: e.target.value })}
            />
          </div>
        </div>


        <div>
          <label htmlFor="formFactor" className="block text-sm font-medium text-gray-700">
            Select Form Factor
          </label>
          <select
            id="formFactor"
            name="formFactor"
            className="mt-1 block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
            defaultValue="Micro"
            value={inventoryItem.formFactor}
            onChange={(e) => setInventoryItem({ ...inventoryItem, formFactor: e.target.value })}
          >
            <option>Select Form Factor</option>
            <option>Micro</option>
            <option>Medium</option>
            <option>Full PC</option>
            <option>All-in-one</option>
            <option>Laptop</option>
            <option>Tablet</option>
            <option>Server</option>
          </select>
        </div>



        <div>
          <label htmlFor="specs" className="block text-sm font-medium text-gray-700">
            Add your comment
          </label>
          <div className="mt-1">
            <textarea
              rows={2}
              name="specs"
              id="specs"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              placeholder="Write specs here"
              value={inventoryItem.comments}
              onChange={(e) => setInventoryItem({ ...inventoryItem, comments: e.target.value })}
            />
          </div>
        </div>
        <button type="submit">Add</button>
      </form>
    )
  } else {
    return 'loading'
  }


}

export default AddPC