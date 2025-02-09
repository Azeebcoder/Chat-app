import React from 'react'

const SearchOverlay = ({handleCloseSearch}) => {
  return (
    <>
      <div className="fixed inset-0 bg-black/80 flex justify-center items-center z-50">
        <div className="w-3/4 max-w-xl bg-white p-5 rounded shadow-lg relative">
          {/* Close Button */}
          <button
            onClick={handleCloseSearch}
            className="absolute top-[-40%] right-0 text-white text-2xl hover:text-red-500 cursor-pointer font-bold"
          >
            ✕
          </button>

          {/* Search Input */}
          <input
            type="text"
            placeholder="Search something..."
            className="w-full p-3 border border-gray-300 rounded outline-none focus:border-blue-500"
          />
        </div>
      </div>
    </>
  )
}

export default SearchOverlay