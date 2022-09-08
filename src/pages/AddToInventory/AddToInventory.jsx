import React, { useState } from 'react'
import { RadioGroup } from '@headlessui/react'
import { CheckCircleIcon } from '@heroicons/react/20/solid'
import { CheckIcon } from '@heroicons/react/24/solid'


const avaiableInventoryTypes = [
  { id: 1, title: 'Hardware', description: 'All equipment goes in here' },
  { id: 2, title: 'Cabling', description: 'All patch cables, CAT6 boxes, CAT6 connectors, etc. goes in here' },

]
function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const AddPC = () => {
  const [steps, setSteps] = useState([
    { id: '01', name: 'Type of Inventory', description: 'Select what type of inventory you want to add', href: '#', status: 'current' },
    { id: '02', name: 'Category of inventory', description: 'Select subcategory', href: '#', status: 'upcoming' },
    { id: '03', name: 'Info', description: 'Fill up informations', href: '#', status: 'upcoming' }
  ])
  // type of inventory to put into appropriete collection
  const [selectedType, setSelectedType] = useState("")
  return (
    <>
      <div className="lg:border-t lg:border-b lg:border-gray-200 mb-8">
        <nav className="max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Progress">
          <ol
            role="list"
            className="overflow-hidden rounded-md lg:flex lg:rounded-none lg:border-l lg:border-r lg:border-gray-200"
          >
            {steps.map((step, stepIdx) => (
              <li key={step.id} className="relative overflow-hidden lg:flex-1">
                <div
                  className={classNames(
                    stepIdx === 0 ? 'border-b-0 rounded-t-md' : '',
                    stepIdx === steps.length - 1 ? 'border-t-0 rounded-b-md' : '',
                    'border border-gray-200 overflow-hidden lg:border-0'
                  )}
                >
                  {step.status === 'complete' ? (
                    <a href={step.href} className="group">
                      <span
                        className="absolute top-0 left-0 h-full w-1 bg-transparent group-hover:bg-gray-200 lg:bottom-0 lg:top-auto lg:h-1 lg:w-full"
                        aria-hidden="true"
                      />
                      <span
                        className={classNames(
                          stepIdx !== 0 ? 'lg:pl-9' : '',
                          'px-6 py-5 flex items-start text-sm font-medium'
                        )}
                      >
                        <span className="flex-shrink-0">
                          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-700">
                            <CheckIcon className="h-6 w-6 text-white" aria-hidden="true" />
                          </span>
                        </span>
                        <span className="mt-0.5 ml-4 flex min-w-0 flex-col">
                          <span className="text-sm font-medium">{step.name}</span>
                          <span className="text-sm font-medium text-gray-500">{step.description}</span>
                        </span>
                      </span>
                    </a>
                  ) : step.status === 'current' ? (
                    <a href={step.href} aria-current="step">
                      <span
                        className="absolute top-0 left-0 h-full w-1 bg-cyan-700 lg:bottom-0 lg:top-auto lg:h-1 lg:w-full"
                        aria-hidden="true"
                      />
                      <span
                        className={classNames(
                          stepIdx !== 0 ? 'lg:pl-9' : '',
                          'px-6 py-5 flex items-start text-sm font-medium'
                        )}
                      >
                        <span className="flex-shrink-0">
                          <span className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-cyan-700">
                            <span className="text-cyan-700">{step.id}</span>
                          </span>
                        </span>
                        <span className="mt-0.5 ml-4 flex min-w-0 flex-col">
                          <span className="text-sm font-medium text-cyan-700">{step.name}</span>
                          <span className="text-sm font-medium text-gray-500">{step.description}</span>
                        </span>
                      </span>
                    </a>
                  ) : (
                    <a href={step.href} className="group">
                      <span
                        className="absolute top-0 left-0 h-full w-1 bg-transparent group-hover:bg-gray-200 lg:bottom-0 lg:top-auto lg:h-1 lg:w-full"
                        aria-hidden="true"
                      />
                      <span
                        className={classNames(
                          stepIdx !== 0 ? 'lg:pl-9' : '',
                          'px-6 py-5 flex items-start text-sm font-medium'
                        )}
                      >
                        <span className="flex-shrink-0">
                          <span className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-gray-300">
                            <span className="text-gray-500">{step.id}</span>
                          </span>
                        </span>
                        <span className="mt-0.5 ml-4 flex min-w-0 flex-col">
                          <span className="text-sm font-medium text-gray-500">{step.name}</span>
                          <span className="text-sm font-medium text-gray-500">{step.description}</span>
                        </span>
                      </span>
                    </a>
                  )}

                  {stepIdx !== 0 ? (
                    <>
                      {/* Separator */}
                      <div className="absolute inset-0 top-0 left-0 hidden w-3 lg:block" aria-hidden="true">
                        <svg
                          className="h-full w-full text-gray-300"
                          viewBox="0 0 12 82"
                          fill="none"
                          preserveAspectRatio="none"
                        >
                          <path d="M0.5 0V31L10.5 41L0.5 51V82" stroke="currentcolor" vectorEffect="non-scaling-stroke" />
                        </svg>
                      </div>
                    </>
                  ) : null}
                </div>
              </li>
            ))}
          </ol>
        </nav>
      </div>
      <RadioGroup value={selectedType} onChange={setSelectedType}>


        <div className="mt-4 flex flex-row space-x-4 justify-center">
          {avaiableInventoryTypes.map((inventoryType) => (
            <RadioGroup.Option
              key={inventoryType.id}
              value={inventoryType}
              className={({ checked, active }) =>
                classNames(
                  checked ? 'border-transparent bg-orange-50' : 'border-gray-300',
                  active ? 'border-indigo-500 ring-2 ring-cyan-700' : '',
                  'relative w-64 flex cursor-pointer rounded-lg border bg-white p-8 shadow-sm focus:outline-none'
                )
              }
            >
              {({ checked, active }) => (
                <>
                  <span className="flex flex-1">
                    <span className="flex flex-col">
                      <RadioGroup.Label as="span" className="block text-sm font-medium text-gray-900">
                        {inventoryType.title}
                      </RadioGroup.Label>
                      <RadioGroup.Description as="span" className="mt-1 flex items-center text-sm text-gray-500">
                        {inventoryType.description}
                      </RadioGroup.Description>

                    </span>
                  </span>
                  <CheckCircleIcon
                    className={classNames(!checked ? 'invisible' : '', 'h-5 w-5 text-cyan-800')}
                    aria-hidden="true"
                  />
                  <span
                    className={classNames(
                      active ? 'border' : 'border-2',
                      checked ? 'border-cyan-800' : 'border-transparent',
                      'pointer-events-none absolute -inset-px rounded-lg'
                    )}
                    aria-hidden="true"
                  />
                </>
              )}
            </RadioGroup.Option>
          ))}
        </div>
      </RadioGroup>



    </>
  )



}

export default AddPC