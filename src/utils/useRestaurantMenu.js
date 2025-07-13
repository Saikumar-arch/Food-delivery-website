import { useEffect, useState } from "react";

const useRestaurantMenu = (id) => {
  const [info, setInfo] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!id) return; // Add this guard
    
    const fetchMenu = async () => {
      try {
        const response = await fetch(
          `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId=${id}`
        );
        
        if (!response.ok) throw new Error("Menu fetch failed");
        const json = await response.json();
        setInfo(json.data);
      } catch (err) {
        setError(err);
      }
    };

    fetchMenu();
  }, [id]); // Critical: dependency array

  return { info, error };
};

export default useRestaurantMenu;