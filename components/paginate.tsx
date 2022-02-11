/* This example requires Tailwind CSS v2.0+ */
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid'

const Paginate = ({ total, page, simtype, onChange }) => {
  const totalPages = Math.ceil(total/12)

  return (
    <div className="flex-1 mt-10 pt-6 border-t-2 flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-700">
            Showing <span className="font-medium">{((page -1) * 12) + 1}</span> to <span className="font-medium">{((page -1) * 12) + 13}</span> of{' '}
            <span className="font-medium">{total}</span> results
          </p>
        </div>
        <div className='flex items-center'>
            <a
                // href={`/products/${simtype}?page=${(page - 1)}`}
                onClick={(() => { onChange(page - 1)})}
                className={'relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50' +  (page === 1 ? ' disabled' : '')}
            >
                <span className="sr-only">Previous</span>
                <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
            </a>
            <a
                // href={`/products/${simtype}?page=${(page + 1)}`}
                onClick={(() => { onChange(page + 1)})}
                className={'relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50' + (page === totalPages ? ' disabled' : '')}
            >
                <span className="sr-only">Next</span>
                <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
            </a>
        </div>
    </div>
  );
}

export default Paginate