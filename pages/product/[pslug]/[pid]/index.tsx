import React, { Fragment } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import { withRouter, NextRouter, useRouter } from 'next/router'
import Header from '../../../../components/header'
import { ChevronRightIcon } from '@heroicons/react/solid'

interface Features {
  data: string;
  superwifi: boolean;
  type: string;
}
interface Item {
  id: number;
  name: string;
  short_desc: string;
  description: string;
  picture: string;
  slug: string;
  price: string;
  tax: string;
  memory: number;
  contacts: number;
  features: Features;
  tags: string[];
  type: string[];
}

const Product: NextPage<Item> = ({ product }) => {
  return (
    <div className="container mx-auto bg-white">
      <Head>
          <title>{product.name.slice(0, 18)}</title>
          <meta name="description" content={product.short_desc} />
          <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className="bg-white">
        <div className="pt-6">
          <nav aria-label="Breadcrumb">
            <ol role="list" className="max-w-2xl mx-auto px-4 flex items-center space-x-2 sm:px-6 lg:max-w-7xl lg:px-8 bg-gray-100 border rounded-sm h-12">
              <li>
                <div className="flex items-center">
                  <a href="/" className="mr-2 text-sm font-medium text-gray-900">
                    Products
                  </a>
                  <ChevronRightIcon width={16} height={16} className="text-gray-600" />
                </div>
              </li>
              <li>
                <div className="flex items-center">
                  <a href={'/products/' + product.features.type} className="mr-2 text-sm font-medium text-gray-900 capitalize">
                    {product.features.type}
                  </a>
                  <ChevronRightIcon width={16} height={16} className="text-gray-600" />
                </div>
              </li>
              <li className="text-sm">
                <a href={'/product/' + product.slug + '/' + product.id} aria-current="page" className="font-medium text-gray-500 hover:text-gray-600 capitalize">
                  {product.name.slice(0, 18)}
                </a>
              </li>
            </ol>
          </nav>
          <div className="mt-6 max-w-2xl mx-auto grid-cols-1 sm:px-6 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-3 lg:gap-x-8">
            <div className="relative hidden aspect-w-2 aspect-h-2 rounded-lg overflow-hidden lg:block">
              <img
                src={product.picture}
                alt={product.name}
                className="w-full h-full object-center object-cover"
              />
              {product.type.map(item => (
                  <div key={item} className='absolute top-2 left-3 rounded-full px-2 bg-green-700 text-white capitalize'>{item}</div>
              ))}
            </div>
            <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8 h-80">
              <div className="aspect-w-3 aspect-h-1 rounded-lg overflow-hidden">
                <img
                  src={product.picture}
                  alt={product.name}
                  className="w-full h-full object-center object-cover"
                />
              </div>
              <div className="aspect-w-3 aspect-h-1 rounded-lg overflow-hidden">
                <img
                  src={product.picture}
                  alt={product.name}
                  className="w-full h-full object-center object-cover"
                />
              </div>
            </div>
            <div className="aspect-w-2 aspect-h-2 sm:rounded-lg sm:overflow-hidden lg:aspect-w-2 lg:aspect-h-2">
              <img
                src={product.picture}
                alt={product.name}
                className="w-full h-full object-center object-cover"
              />
            </div>
          </div>
          <div className="max-w-2xl mx-auto pt-10 pb-16 px-4 sm:px-6 lg:max-w-7xl lg:pt-16 lg:pb-24 lg:px-8 lg:grid lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8">
            <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
              <h1 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">{product.name}</h1>
            </div>
            <div className="mt-4 lg:mt-0 lg:row-span-3">
              <h2 className="sr-only">Product information</h2>
              <p className="text-3xl text-gray-900">{product.price}</p>
              <div className="flex flex-1 flex-wrap mt-4">
                {product.tags.map(item => (
                    <span key={item} className='cursor-pointer hover:bg-blue-100 hover:border-blue-200 rounded-full mt-2 mr-2 border px-4 py-1 bg-gray-100 text-gray-600 capitalize'>{item}</span>
                ))}
              </div>
              <button
                type="submit"
                className="mt-10 w-full bg-green-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
              >
                Add to Cart
              </button>
            </div>

            <div className="py-10 lg:pt-6 lg:pb-16 lg:col-start-1 lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
              <div>
                <h3 className="sr-only">Description</h3>
                <div className="space-y-6">
                  <p className="text-base text-gray-900">
                  {product.description.split('\n').map((line: string, i: number) => (
                    <Fragment key={i}>
                        {line.slice(0, 200)}
                        <br/>
                        <br/>
                    </Fragment>
                  ))}
                  </p>
                </div>
              </div>
              <div className="mt-2">
                <h3 className="font-medium text-gray-900 text-2xl">Features</h3>

                <div className="mt-4">
                  <ul role="list" className="pl-4 list-disc text-lg space-y-2">
                    <li className="text-gray-600">Contacts: {product.contacts}</li>
                    <li className="text-gray-600">Memory: {product.memory}MB</li>
                    <li className="text-gray-600">Data: {product.features.data}</li>
                    <li className="text-gray-600">Sim Type: {product.features.type.toUpperCase()}</li>
                    {product.features.superwifi && (<li className="text-gray-600">Superwifi</li>)}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className='hidden max-w-2xl mx-auto px-4 flex mt-10 flex-col space-x-2 sm:px-6 lg:max-w-7xl lg:px-8'>
            <pre className='flex flex-wrap whitespace-pre-wrap'>{JSON.stringify(product, null, 2)}</pre>
          </div>
        </div>
      </div>
    </div>
  )
}

export async function getServerSideProps ({ query }) {
  const productslug = query.pslug
  const productid = query.pid
  const res = await fetch(`http://localhost:4000/api/product?pslug=${productslug}&pid=${productid}`)
  const response = await res.json()
  return {
    props: {
      product: response as Item,
    },
  }
}

export default withRouter(Product)
