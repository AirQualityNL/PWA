import { useState } from "react";

const GeoSearchBar = ({ setCurrentFocus, currentFocus }: any) => {
  const [searchResults, setSearchResults] = useState([] as any[]);
  const [trackedLocation, setTrackedLocation] = useState(null as any);
  const [inputValue, setInputValue] = useState("" as string);

  const handleFocus = () => {
    setCurrentFocus(currentFocus);
  };

  const onInputChanged = async (event: any) => {
    setInputValue(event.target.value);
    const query = event.target.value;
    if (query.length < 3) {
      setSearchResults([]);
      return;
    }

    const response = await fetch(`https://nominatim.openstreetmap.org/search?q=${query}&format=json`);
    const data = await response.json();
    setSearchResults(data);
  };

  const searchResultClick = (result: any) => {
    setTrackedLocation(result);
    setInputValue(result.display_name);
    setSearchResults([]);
  };

  const searchResultsList = searchResults.map((result, index) => {
    return (
      <li key={index} className="text-white p-4 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800" onClick={() => searchResultClick(result)}>
        {result.display_name}
      </li>
    );
  });

  return (
    <div className="absolute z-50 top-0 inset-x-0 w-[80vw] sm:w-[75vw] mt-8 mx-auto">
      <div className="flex flex-row">
        <form className="w-full">
          <label
            htmlFor="default-search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Search
          </label>
          <div className="relative mx-4 sm:mx-12">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              onChange={onInputChanged}
              value={inputValue}
              // value={selectedResult?.display_name ?? ""}
              type="search"
              id="default-search"
              className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Strijp-s"
              required />
            {searchResults.length > 0 && (
              <ul className="absolute z-50 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-600">
                {searchResultsList}
              </ul>
            )}
          </div>
        </form>
        <button
          onClick={() => handleFocus()}
          className="bg-white rounded-md p-2 border border-gray-400"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-8"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M19 12C19 15.866 15.866 19 12 19M19 12C19 8.13401 15.866 5 12 5M19 12H21M12 19C8.13401 19 5 15.866 5 12M12 19V21M5 12C5 8.13401 8.13401 5 12 5M5 12H3M12 5V3M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z"
              stroke="#000000"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default GeoSearchBar;
