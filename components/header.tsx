import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Header = () => {
  return (
    <Disclosure as="nav" className="mt-6">
      <div className="bg-gray-100 border rounded-sm sm:rounded-0 max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="flex-1 flex items-center justify-start sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0 flex items-center">
              <span className='text-3xl font-bold'>AIS</span>
            </div>
            <Menu as="div" className="ml-10 relative">
              <div>
                <Menu.Button className="p-1">
                  Products
                </Menu.Button>
              </div>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="origin-top-left absolute left-0 mt-4 w-48 rounded-sm border-2 shadow-lg py-1 bg-white">
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="/products/prepaid"
                        className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-gray-700 hover:bg-blue-100')}
                      >
                        Prepaid
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="/products/postpaid"
                        className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-gray-700 hover:bg-blue-100')}
                      >
                        Postpaid
                      </a>
                    )}
                  </Menu.Item>
                </Menu.Items>
              </Transition>
            </Menu>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <button
              type="button"
              className="p-1"
            >
              About Us
            </button>
            <button
              type="button"
              className="ml-10 p-1"
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </Disclosure>
  )
}

export default Header;