import React from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import { withRouter, NextRouter, useRouter } from 'next/router'
import Header from '../../../components/header'
import Paginate from '../../../components/paginate'

interface WithRouterProps {
  router: NextRouter
}

interface Features {
  data: string;
  superwifi: boolean;
  type: string;
}
interface Product {
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

interface Props extends WithRouterProps {
  products?: Product[];
  totals: number;
  page: number;
  simtype: string;
}

const List: NextPage<Props> = ({ products = [], totals, page, simtype }) => {
  const router = useRouter();
  const onChange = (selectedPage: number) => {
    router.push({
      pathname: router.pathname,
      query: { simtype, page: selectedPage },
    });
  }

  const onProductSelect = (pslug: string, pid: number) => {
    router.push({
      pathname: '/product/' + pslug + '/' + pid
    });
  }

  return (
    <div className="container mx-auto bg-white">
      <Head>
        <title>{simtype.toUpperCase()} SIM - Page {page}</title>
        <meta name="description" content="Products List" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-2">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">{simtype.toUpperCase()} SIM</h2>
        <div className="mt-6 grid grid-cols-2 gap-y-8 gap-x-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="group relative border group-hover:shadow-md rounded-md border-gray-200 hover:border-gray-400">
              <div className="w-full min-h-80 bg-gray-200 border-b aspect-w-1 aspect-h-1 overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                <img
                  src={product.picture}
                  alt={product.name}
                  className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                />
                {product.type.map(item => (
                  <div key={item} className='absolute top-2 left-3 rounded-full px-3 py-1 bg-green-600 text-white capitalize'>{item}</div>
                ))}
              </div>
              <div className="mt-4 flex justify-between p-2">
                <div className='w-full relative flex flex-col'>
                  <h3 className="text-gray-700 font-semibold group-hover:text-blue-700 ">
                    <a className='capitalize' href={'/product/' + product.slug + '/' + product.id} onClick={() => {onProductSelect(product.slug, product.id)}}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name.slice(0, 18)}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-600">Data: {product.features.data}</p>
                  <p className="mt-1 text-sm text-gray-600">SIM Type: {product.features.type}</p>
                  {product.features.superwifi && (
                    <p className="mt-1 text-sm text-slate-600">Super Wifi</p>
                  )}
                </div>
                <p className="text-lg font-medium text-gray-900">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
        <Paginate total={totals} page={page} simtype={simtype} onChange={onChange}/>
      </div>
    </div>
  )
}

export async function getServerSideProps ({ query }) {
  const page = parseInt(query.page, 10) || 1
  const simtype = query.simtype || 'prepaid'
  const res = await fetch(`http://localhost:4000/api/products?type=${simtype}&page=${page}`)
  const response = await res.json()
  return {
    props: {
      ...response,
      page,
      simtype
    },
  }
}

export default withRouter(List)