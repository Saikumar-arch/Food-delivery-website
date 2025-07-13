import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { id } = useParams();
  const { info, error } = useRestaurantMenu(id);
  const [menuItems, setMenuItems] = useState([]);

  // Move data processing to useEffect
  useEffect(() => {
    if (info) {
      const regularCards = info.cards?.find(
        card => card.groupedCard?.cardGroupMap?.REGULAR
      )?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];
      
      const itemCards = regularCards.flatMap(card => 
        card.card?.card?.itemCards?.map(item => item.card?.info) || []
      );
      
      setMenuItems(itemCards);
    }
  }, [info]); // Only runs when info changes

  if (error) {
    return <div className="p-4 text-red-500">Error: {error.message}</div>;
  }

  if (!info) {
    return <div className="p-4 text-center">Loading restaurant details...</div>;
  }

  return (
    <div className="restaurant-menu p-4 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-2">{info.name}</h1>
      <p className="text-gray-600 mb-4">
        {info.cuisines?.join(", ") || "Cuisine not available"} - 
        {" "}{info.costForTwo || "Price information unavailable"}
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-4">Menu Items</h2>
      
      {menuItems.length === 0 ? (
        <p className="text-gray-500">No menu items found for this restaurant.</p>
      ) : (
        <ul className="menu-list space-y-4">
          {menuItems.map(item => (
            <li 
              key={item.id} 
              className="flex items-center border-b pb-3"
            >
              <div className="flex-grow">
                <h3 className="font-medium">{item.name}</h3>
                <p className="text-gray-600">
                  ₹{(item.price || item.defaultPrice) / 100}
                </p>
                <p className="text-sm text-gray-500 mt-1">
                  {item.description}
                </p>
              </div>
              
              {item.imageId && (
                <img
                  className="ml-4 rounded-lg w-16 h-16 object-cover"
                  src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208/${item.imageId}`}
                  alt={item.name}
                />
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default RestaurantMenu;