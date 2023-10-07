import { useState } from 'react';

function CreateForm({ onCreate }) {
  const [location, setLocation] = useState('');
  const [minCustomers, setMinCustomers] = useState(0);
  const [maxCustomers, setMaxCustomers] = useState(0);
  const [avgCookies, setAvgCookies] = useState(0.0);

  // Function to calculate 14 random hourly sales values
  const calculateHourlySales = () => {
    const minSales = minCustomers * avgCookies;
    const maxSales = maxCustomers * avgCookies;
    const calculatedSales = Array(14).fill(0).map(() => {
      return Math.floor(Math.random() * (maxSales - minSales + 1) + minSales);
    });
    return calculatedSales;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newCookieStand = {
      location,
      hourly_sales: calculateHourlySales(),
    };
    onCreate(newCookieStand);
    // Clear form fields
    setLocation('');
    setMinCustomers(0);
    setMaxCustomers(0);
    setAvgCookies(0.0);
  };

  return (
    <div className="flex items-center justify-center pt-12">
      <form className="w-1/2 p-6 bg-gray-200 rounded-lg shadow-lg" onSubmit={handleSubmit}>
        <h1 className="text-3xl font-semibold mb-4">Create Cookie Stand</h1>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700" htmlFor="location">
            Location
          </label>
          <input
            required
            onChange={(e) => setLocation(e.target.value)}
            value={location}
            className="w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:ring focus:ring-indigo-200 focus:outline-none"
            type="text"
            id="location"
            placeholder="Enter location"
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="minCustomers">
              Min Customers per Hour
            </label>
            <input
              required
              onChange={(e) => setMinCustomers(e.target.value)}
              value={minCustomers}
              className="w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:ring focus:ring-indigo-200 focus:outline-none"
              type="number"
              id="minCustomers"
              min="0"
              placeholder="Min Customers"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="maxCustomers">
              Max Customers per Hour
            </label>
            <input
              required
              onChange={(e) => setMaxCustomers(e.target.value)}
              value={maxCustomers}
              className="w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:ring focus:ring-indigo-200 focus:outline-none"
              type="number"
              id="maxCustomers"
              min="0"
              placeholder="Max Customers"
            />
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700" htmlFor="avgCookies">
            Avg Cookies per Sale
          </label>
          <input
            required
            onChange={(e) => setAvgCookies(parseFloat(e.target.value))}
            value={avgCookies}
            className="w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:ring focus:ring-indigo-200 focus:outline-none"
            type="number"
            id="avgCookies"
            step="0.1"
            min="0"
            placeholder="Avg Cookies per Sale"
          />
        </div>
        <button className="w-full py-2 mt-4 text-lg font-semibold text-white bg-indigo-500 rounded-md hover:bg-indigo-600 focus:outline-none focus:ring focus:ring-indigo-200" type="submit">
          Create
        </button>
      </form>
    </div>
  );
}

export default CreateForm;
