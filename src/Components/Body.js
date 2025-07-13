 // Import React and useEffect hook
import RestroCards from "./RestroCards"; // Component to display each restaurant card
import resData from "../utils/resData";   // (Unused import, can be removed)
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer"; // Component to show loading shimmer
import { Link } from "react-router-dom"; // For navigation to restaurant details page
import useOnlineStatus from "../utils/useOnlineStatus"; // Custom hook to check online status

const Body = () => {
 

  const [ListofRestaurants, setListofRestaurants] = useState([]);
  // State to hold all restaurants fetched from API
  // this will be used for filtering
  // and displaying the full list initially
  const [FilterResData, setFilterResData] = useState([]);
  // State to hold the filtered restaurants to display
  // This will be updated based on search input or filter criteria
  // Initially set to an empty array
  const [searchText, setSearchText] = useState("");
  // State for the search input value
  console.log("body rendered"); // For debugging: logs every render

  useEffect(() => {
    fetchData(); // Fetch data when component mounts
    // This will run once when the component mounts
  }, []);

  // Function to fetch restaurant data from Swiggy API
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.406498&lng=78.47724389999999&collection=83639&tags=layout_CCS_Biryani&sortBy=&filters=&type=rcv2&offset=0&page_type=null"
    );
    const json = await data.json();
    console.log(json); // For debugging: logs the API response

    // Extract all cards that have card.card.info (restaurant info)
    const restaurants = json?.data?.cards
      ?.map((cardObj) => cardObj?.card?.card?.info)
      ?.filter(Boolean); // Remove undefined

    setFilterResData(restaurants || []); // Set filtered data for display
    setListofRestaurants(restaurants || []); // Set all data for future filtering
  };
  const Online = useOnlineStatus(); // Check if user is online
  if(Online === false)
  
    return (
      <div className="p-4 text-red-500">
        You are offline! Please check your internet connection.
      </div>
    )

  // If no restaurants to display, show shimmer loading UI
  if (!FilterResData || FilterResData.length === 0) {
    return <Shimmer />;
  }

  
  
  

  // Render the main UI
  return (
    <div className="app-body">
      <div className="search-container">
        {/* Search input box */}
        <input
          type="text"
          placeholder="Search for restaurants..."
          className="search-input"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value); // Update search text state on input change
          }}
        ></input>
        {/* Search button */}
        <button
          type="button"
          className="search-btn"
          onClick={() => {
            // Filter the restaurants based on the search text (case-insensitive)
            const filteredData = ListofRestaurants.filter(
              (res) =>
                res.name &&
                res.name.toLowerCase().includes(searchText.toLowerCase())
            );
            setFilterResData(filteredData); // Update filtered data to display
          }}
        >Search</button>
        {/* Filter button for restaurants with avgRating > 4.2 */}
        <button
        type="button"
        className="button-btn"
        // Filter Restaurants with average rating greater than 4.2
        // FilterResData is initialized by the FilterResData in map function
        onClick={() => {
          setFilterResData(
            FilterResData.filter((res) => res.avgRating > 4.2)
          );
        }}
      >
        Filter restaurants
      </button>
      </div>
      
      

      {/* Render restaurant cards */}
      <div className="restro-cards-container">
        {FilterResData.map((info) => (
          <Link key={info.id} to={`/restaurant/${info.id}`}>
             <RestroCards resData={{ info }} />
          </Link>
          // resData is passed as a prop to RestroCards component
          // key is used to uniquely identify each element in the list
          // resData.info.id is used as a unique key for each restaurant card
          // resData is the data for each restaurant
        ))}
      </div>
    </div>
  );
};

export default Body;
