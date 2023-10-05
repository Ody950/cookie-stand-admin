const CustomCookieStandForm = () => {
    return (
      <div className="">
        <form className="w-3/4 p-4 mx-auto mt-12 bg-purple-300 rounded-lg text-white">
          <div className="text-3xl font-bold text-center">Create a New Cookie Stand</div>
          <div className="mt-4">
            <label htmlFor="location" className="block text-sm text-gray-700">
              Location
            </label>
            <input
              type="text"
              id="location"
              name="location"
              className="w-full p-3 mt-1 bg-purple-100 rounded-md"
            />
          </div>
          <div className="mt-4 grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="minCustomers" className="block text-sm text-gray-700">
                Min Customers per Hour
              </label>
              <input
                type="number"
                id="minCustomers"
                name="minCustomers"
                className="w-full p-3 mt-1 bg-purple-100 rounded-md"
              />
            </div>
            <div>
              <label htmlFor="maxCustomers" className="block text-sm text-gray-700">
                Max Customers per Hour
              </label>
              <input
                type="number"
                id="maxCustomers"
                name="maxCustomers"
                className="w-full p-3 mt-1 bg-purple-100 rounded-md"
              />
            </div>
          </div>
          <div className="mt-4">
            <label htmlFor="averageCookies" className="block text-sm text-gray-700">
              Average Cookies per Sale
            </label>
            <input
              type="number"
              id="averageCookies"
              name="averageCookies"
              className="w-full p-3 mt-1 bg-purple-100 rounded-md"
            />
          </div>
          <div className="mt-6 text-center">
            <button
              type="submit"
              className="px-6 py-3 font-semibold bg-purple-500 rounded-lg text-white hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-400"
            >
              Create Cookie Stand
            </button>
          </div>
        </form>
      </div>
    );
  };
  
  export default CustomCookieStandForm;
  