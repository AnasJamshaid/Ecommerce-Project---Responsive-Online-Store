import React from 'react'

export const Sorts = () => {
  return (
       <div className="flex justify-between items-center mb-6">
               <div className="flex items-center space-x-8 mt-8 ml-5">
                 <div className="flex items-center space-x-2">
                   <label htmlFor="sortBy" className="text-gray-700 font-semibold">
                     Sort By:
                   </label>
                   <select
                     id="sortBy"
                     className="border border-gray-300 rounded-md p-2 text-gray-700"
                   >
                     <option value="newest">Newest</option>
                     <option value="popular">Popular</option>
                     <option value="price-low">Price: Low to High</option>
                     <option value="price-high">Price: High to Low</option>
                   </select>
                 </div>
                 <div className="flex items-center space-x-2">
                   <label htmlFor="show" className="text-gray-700 font-semibold">
                     Show:
                   </label>
                   <select
                     id="show"
                     className="border border-gray-300 rounded-md p-2 text-gray-700"
                   >
                     <option value="default">Default</option>
                     <option value="8">8 per page</option>
                     <option value="16">16 per page</option>
                     <option value="24">24 per page</option>
                   </select>
                 </div>
               </div>
             </div>
  )
}
