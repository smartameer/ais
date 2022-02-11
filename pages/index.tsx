import type { NextPage } from 'next'
import Head from 'next/head'
import { withRouter} from 'next/router'

import Header from '../components/header'



const Home: NextPage<Props> = ({ products = [], totals, page }) => {
  return (
    <div className="container mx-auto bg-white">
      <Head>
        <title>Products List - Page {page}</title>
        <meta name="description" content="Products List" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className="max-w-7xl mx-auto py-8 sm:py-6">
        <div className="border flex flex-col mt-6 row rounded-sm bg-gray-100 py-60 h-80 items-center justify-center">
          <h2 className="text-4xl font-400 border-b-2 pb-3 tracking-tight text-gray-900">
            Explore our big range of products
          </h2>
          <div className="flex flex-1 items-center justify-center mt-6">
            <a className="bg-slate-600 text-white text-lg rounded-md px-4 py-2" href="/products/prepaid">Prepaid SIMs</a>
            <a className="ml-6 bg-slate-600 text-white text-lg rounded-md px-4 py-2" href="/products/postpaid">Postpaid SIMs</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default withRouter(Home)
