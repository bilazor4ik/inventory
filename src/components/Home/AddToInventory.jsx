import React from 'react'

import { Dialog, Transition, Listbox } from '@headlessui/react'

import { Fragment, useState } from 'react'

import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
import AddPC from './AddPC'
import DisplaySelectedForm from './DisplaySelectedForm'

const categories = [
    { id: 1, name: 'Hardware:', value: ' PCs' },
    { id: 2, name: 'Hardware:', value: ' Monitors' },
    { id: 3, name: 'Hardware:', value: ' Adapters' },
    { id: 4, name: 'Hardware:', value: ' Networking' },
    { id: 5, name: 'Hardware:', value: ' Accessories' },
    { id: 6, name: 'Cabling:', value: ' Patch Cables' },
    { id: 7, name: 'Cabling:', value: ' CAT 6 BOX' },
    { id: 8, name: 'Cabling:', value: ' Other' },

]


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}


const AddToInventory = (props) => {
    const [selectedCategory, setSelectedCategory] = useState('Select category')


    return (
        <Transition.Root show={props.modalOpen} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={props.setModalOpen}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                </Transition.Child>

                <div className="fixed inset-0 z-10 overflow-y-auto">
                    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            enterTo="opacity-100 translate-y-0 sm:scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        >
                            <Dialog.Panel className="relative transform overflow-visible rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">


                                <div className="space-y-2 sm:space-y-5">
                                    <div className='text-center'>
                                        <h3 className="text-xl font-medium leading-6 text-gray-900">Add to inventory</h3>
                                        <p className="mt-1 max-w-2xl text-sm text-gray-500">
                                            Please fill out carefully all fields.
                                        </p>
                                    </div>


                                    <Listbox value={selectedCategory} onChange={setSelectedCategory}>
                                        {({ open }) => (
                                            <>
                                                <Listbox.Label className="block text-sm font-medium text-gray-700">Category</Listbox.Label>
                                                <div className="relative mt-1">
                                                    <Listbox.Button className="relative w-full cursor-default rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-left shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm">
                                                        <span className="block truncate">{selectedCategory} </span>
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
                                                            {categories.map((category) => (
                                                                <Listbox.Option
                                                                    key={category.id}
                                                                    className={({ active }) =>
                                                                        classNames(
                                                                            active ? 'text-white bg-indigo-600' : 'text-gray-900',
                                                                            'relative cursor-default select-none py-2 pl-3 pr-9'
                                                                        )
                                                                    }
                                                                    value= {`${category.name} ${category.value}`}
                                                                >
                                                                    {({ selectedCategory, active }) => (
                                                                        <>
                                                                            <span className={classNames(selectedCategory ? 'font-semibold' : 'font-normal', 'block truncate')}>
                                                                                <b>{category.name}</b> {category.value}
                                                                            </span>

                                                                            {selectedCategory ? (
                                                                                <span
                                                                                    className={classNames(
                                                                                        active ? 'text-white' : 'text-indigo-600',
                                                                                        'absolute inset-y-0 right-0 flex items-center pr-4'
                                                                                    )}
                                                                                >
                                                                                    <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                                                                </span>
                                                                            ) : null}
                                                                        </>
                                                                    )}
                                                                </Listbox.Option>
                                                            ))}
                                                        </Listbox.Options>
                                                    </Transition>
                                                </div>
                                            </>
                                        )}
                                    </Listbox>



                                </div>


                                <DisplaySelectedForm selectedCategory={selectedCategory} />


                                <div className="mt-5 sm:mt-6 sm:grid sm:grid-flow-row-dense sm:grid-cols-2 sm:gap-3">
                                    <button
                                        type="button"
                                        className="inline-flex w-full justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:col-start-2 sm:text-sm"
                                        onClick={() => props.setModalOpen(false)}
                                    >
                                        Deactivate
                                    </button>
                                    <button
                                        type="button"
                                        className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:col-start-1 sm:mt-0 sm:text-sm"
                                        onClick={() => props.setModalOpen(false)}

                                    >
                                        Cancel
                                    </button>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    )
}

export default AddToInventory