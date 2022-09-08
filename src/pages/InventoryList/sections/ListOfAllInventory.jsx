import { Transition } from '@headlessui/react';
import { collection, getDocs, doc } from 'firebase/firestore';
import React, { Fragment, useEffect, useState } from 'react'
import LoadingPreview from '../../../components/LoadingPreview';
import { db } from '../../../firebase';



const locations = [
  {
    name: 'Edinburgh',
    people: [
      { name: 'Lindsay Walton', title: 'Front-end Developer', email: 'lindsay.walton@example.com', role: 'Member' },
      { name: 'Courtney Henry', title: 'Designer', email: 'courtney.henry@example.com', role: 'Admin' },
    ],
  },
  // More people...
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


const ListOfAllInventory = () => {
  const [allInventoryPcs, setAllInventoryPcs] = useState([])
  const [allInventoryAccessories, setAllInventoryAccessories] = useState([])
  const [allInventoryMonitors, setAllInventoryMonitors] = useState([])
  const [allInventoryNetwork, setAllInventoryNetwork] = useState([])
  const [loading, setLoading] = useState(false)
  const getAllInventoryPCs = async () => {
    // get reference to Inventory collection in DB
    const inventoryPCs = await getDocs(collection(db, "inventory/Hardware/PCs"));
    const inventoryAccessories = await getDocs(collection(db, "inventory/Hardware/Accessories"));
    const inventoryMonitors = await getDocs(collection(db, "inventory/Hardware/Monitors"));
    const inventoryNetwork = await getDocs(collection(db, "inventory/Hardware/Network Equipment"));
    // retrieve all PCS
    inventoryPCs.forEach((doc) => {
      setAllInventoryPcs(prev => [...prev, { id: doc.id, data: doc.data() }])
      console.log(doc.id, " => ", doc.data());
    })
    // retrieve all Accessories
    inventoryAccessories.forEach((doc) => {
      setAllInventoryAccessories(prev => [...prev, { id: doc.id, data: doc.data() }])
      console.log(doc.id, " => ", doc.data());
    })
    // retrieve all Monitors
    inventoryMonitors.forEach((doc) => {
      setAllInventoryMonitors(prev => [...prev, { id: doc.id, data: doc.data() }])
      console.log(doc.id, " => ", doc.data());
    })
    // retrieve all Network Equipment
    inventoryNetwork.forEach((doc) => {
      setAllInventoryNetwork(prev => [...prev, { id: doc.id, data: doc.data() }])
      console.log(doc.id, " => ", doc.data());
    })

  }



  useEffect(() => {
    //set loading to true while getting data
    setLoading(true)
    // get list of all inventory items when page renders and show loading status
    getAllInventoryPCs()
    //set loading to false after all data loaded
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1500)
    // cleanup for useEffect
    return () => clearTimeout(timer)
  }, [])
  //Show only if data retrieved and loading is done
  if (!loading) {
    return (
      <>
        <div className="px-4 sm:px-6 lg:px-8">

          <div className="mt-8 flex flex-col">
            <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                  {/* PCs */}
                  <table className="min-w-full text-center">
                    <thead className="bg-white">
                    <tr>
                        <th
                          colSpan={7}
                          scope="colgroup"
                          className="bg-neutral-300 px-4 py-2 text-center text-sm font-semibold text-gray-900 sm:px-6"
                        >
                          <b className='tracking-wider'>Hardware:</b> PCs
                        </th>
                      </tr>
                      <tr className="bg-neutral-200 px-4 py-2 text-center text-sm font-semibold text-gray-900 sm:px-6">
                        <th scope="col" className="py-3.5 pl-4 pr-3  text-sm font-semibold text-gray-900 sm:pl-6">
                          QTY
                        </th>
                        <th scope="col" className="py-3.5 pl-4 pr-3  text-sm font-semibold text-gray-900 sm:pl-6">
                          Manufacturer
                        </th>
                        <th scope="col" className="px-3 py-3.5  text-sm font-semibold text-gray-900">
                          Model
                        </th>
                        <th scope="col" className="px-3 py-3.5  text-sm font-semibold text-gray-900">
                          Form Factor
                        </th>
                        <th scope="col" className="px-3 py-3.5  text-sm font-semibold text-gray-900">
                          Cost
                        </th>
                        <th scope="col" className="px-3 py-3.5  text-sm font-semibold text-gray-900">
                          Price
                        </th>
                        <th scope="col" className="px-3 py-3.5  text-sm font-semibold text-gray-900">
                          Comments
                        </th>

                       
                      </tr>
                    </thead>
                    <tbody className="bg-white">
                      
                      {allInventoryPcs.map((inventoryItem) => {
                        const { manufacturer, model, formFactor, cost, price, comments, qty } = inventoryItem.data
                        return (

                          <tr key={inventoryItem.id} className='border-gray-200 border-t bg-neutral-100 hover:bg-gray-200 hover:cursor-pointer'>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{qty}</td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{manufacturer}</td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{model}</td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{formFactor}</td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{cost}</td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{price}</td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{comments}</td>

                          </tr>


                        )
                      })}
                    </tbody>
                  </table>

                  {/* Monitors */}
                  <table className="min-w-full text-center">
                    <thead className="bg-white">
                    <tr>
                        <th
                          colSpan={7}
                          scope="colgroup"
                          className="bg-neutral-300 px-4 py-2 text-center text-sm font-semibold text-gray-900 sm:px-6"
                        >
                          <b className='tracking-wider'>Hardware:</b> Monitors
                        </th>
                      </tr>
                      <tr className="bg-neutral-200 px-4 py-2 text-center text-sm font-semibold text-gray-900 sm:px-6">
                        <th scope="col" className="py-3.5 pl-4 pr-3  text-sm font-semibold text-gray-900 sm:pl-6">
                          QTY
                        </th>
                        <th scope="col" className="py-3.5 pl-4 pr-3  text-sm font-semibold text-gray-900 sm:pl-6">
                          Manufacturer
                        </th>
                        <th scope="col" className="px-3 py-3.5  text-sm font-semibold text-gray-900">
                          Size
                        </th>
                        <th scope="col" className="px-3 py-3.5  text-sm font-semibold text-gray-900">
                          Resolution
                        </th>
                        <th scope="col" className="px-3 py-3.5  text-sm font-semibold text-gray-900">
                          Cost
                        </th>
                        <th scope="col" className="px-3 py-3.5  text-sm font-semibold text-gray-900">
                          Price
                        </th>
                        <th scope="col" className="px-3 py-3.5  text-sm font-semibold text-gray-900">
                          Curved
                        </th>

                       
                      </tr>
                    </thead>
                    <tbody className="bg-white">
                      
                      {allInventoryMonitors.map((inventoryItem) => {
                        const { manufacturer, size, resolution, cost, price, curved, qty } = inventoryItem.data
                        return (

                          <tr key={inventoryItem.id} className='border-gray-200 border-t bg-neutral-100 hover:bg-gray-200 hover:cursor-pointer'>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{qty}</td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{manufacturer}</td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{size}</td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{resolution}</td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{cost}</td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{price}</td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 ">{curved ? "Yes" : "Nope"}</td>

                          </tr>


                        )
                      })}
                    </tbody>
                  </table>

                  {/* Network Equipment */}
                  <table className="min-w-full text-center">
                    <thead className="bg-white">
                    <tr>
                        <th
                          colSpan={8}
                          scope="colgroup"
                          className="bg-neutral-300 px-4 py-2 text-center text-sm font-semibold text-gray-900 sm:px-6"
                        >
                          <b className='tracking-wider'>Hardware:</b> Network equipment
                        </th>
                      </tr>
                      <tr className="bg-neutral-200 px-4 py-2 text-center text-sm font-semibold text-gray-900 sm:px-6">
                        <th scope="col" className="py-3.5 pl-4 pr-3  text-sm font-semibold text-gray-900 sm:pl-6">
                          QTY
                        </th>
                        <th scope="col" className="py-3.5 pl-4 pr-3  text-sm font-semibold text-gray-900 sm:pl-6">
                          Manufacturer
                        </th>
                        <th scope="col" className="px-3 py-3.5  text-sm font-semibold text-gray-900">
                          Type
                        </th>
                        <th scope="col" className="px-3 py-3.5  text-sm font-semibold text-gray-900">
                          PoE
                        </th>
                        <th scope="col" className="px-3 py-3.5  text-sm font-semibold text-gray-900">
                          Cost
                        </th>
                        <th scope="col" className="px-3 py-3.5  text-sm font-semibold text-gray-900">
                          Price
                        </th>
                        <th scope="col" className="px-3 py-3.5  text-sm font-semibold text-gray-900">
                          Ports
                        </th>
                        <th scope="col" className="px-3 py-3.5  text-sm font-semibold text-gray-900">
                          Comments
                        </th>

                       
                      </tr>
                    </thead>
                    <tbody className="bg-white">
                      
                      {allInventoryNetwork.map((inventoryItem) => {
                        const { manufacturer, Poe, ports, cost, price, comments, qty, type } = inventoryItem.data
                        return (

                          <tr key={inventoryItem.id} className='border-gray-200 border-t bg-neutral-100 hover:bg-gray-200 hover:cursor-pointer'>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{qty}</td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{manufacturer}</td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{type}</td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{Poe ? "Yes" : "Nope"}</td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{cost}</td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{price}</td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{ports}</td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{comments}</td>

                          </tr>


                        )
                      })}
                    </tbody>
                  </table>

                   {/* Accessories */}
                   <table className="min-w-full text-center">
                    <thead className="bg-white">
                    <tr>
                        <th
                          colSpan={8}
                          scope="colgroup"
                          className="bg-neutral-300 px-4 py-2 text-center text-sm font-semibold text-gray-900 sm:px-6"
                        >
                          <b className='tracking-wider'>Hardware:</b> Accessories
                        </th>
                      </tr>
                      <tr className="bg-neutral-200 px-4 py-2 text-center text-sm font-semibold text-gray-900 sm:px-6">
                        <th scope="col" className="py-3.5 pl-4 pr-3  text-sm font-semibold text-gray-900 sm:pl-6">
                          QTY
                        </th>
                        <th scope="col" className="py-3.5 pl-4 pr-3  text-sm font-semibold text-gray-900 sm:pl-6">
                          Manufacturer
                        </th>
                        <th scope="col" className="px-3 py-3.5  text-sm font-semibold text-gray-900">
                          Type
                        </th>
                        <th scope="col" className="px-3 py-3.5  text-sm font-semibold text-gray-900">
                          Wireless
                        </th>
                        <th scope="col" className="px-3 py-3.5  text-sm font-semibold text-gray-900">
                          Cost
                        </th>
                        <th scope="col" className="px-3 py-3.5  text-sm font-semibold text-gray-900">
                          Price
                        </th>
                        <th scope="col" className="px-3 py-3.5  text-sm font-semibold text-gray-900">
                          Comments
                        </th>

                       
                      </tr>
                    </thead>
                    <tbody className="bg-white">
                      
                      {allInventoryAccessories.map((inventoryItem) => {
                        const { manufacturer, cost, price, comments, qty, type, wireless } = inventoryItem.data
                        return (

                          <tr key={inventoryItem.id} className='border-gray-200 border-t bg-neutral-100 hover:bg-gray-200 hover:cursor-pointer'>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{qty}</td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{manufacturer}</td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{type}</td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{wireless ? 'Yes' : 'Nope'}</td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{cost}</td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{price}</td>
                           
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{comments}</td>

                          </tr>


                        )
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  } else {
    return <LoadingPreview />

  }
}

export default ListOfAllInventory