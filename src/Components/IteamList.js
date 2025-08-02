const IteamList = ({ listData }) => {
  return (
    <div className="space-y-6">
      {listData.map((item) => (
        <div
          key={item.card.info.id}
          className="flex flex-col md:flex-row bg-white p-4 rounded-xl shadow-md border border-gray-100"
        >
          {/* Content Section */}
          <div className="flex-1 pr-4">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-gray-900 text-lg">{item.card.info.name}</h3>
              <p className="font-bold text-gray-900">
                ₹{(item.card.info.price || item.card.info.defaultPrice) / 100}
              </p>
            </div>
            
            <div className="flex items-center mt-1">
              {item.card.info.ratings && (
                <div className="flex items-center">
                  <span className="text-yellow-500 mr-1">★</span>
                  <span className="text-gray-700 font-medium">
                    {item.card.info.ratings.aggregatedRating.rating}
                  </span>
                  <span className="text-gray-500 text-sm ml-1">
                    ({item.card.info.ratings.aggregatedRating.ratingCountV2})
                  </span>
                </div>
              )}
            </div>
            
            <p className="text-gray-500 text-sm mt-3">
              {item.card.info.description}
            </p>
          </div>
          
          {/* Image Section */}
          <div className="mt-4 md:mt-0 flex-shrink-0 w-full md:w-40">
            {item.card.info.imageId ? (
              <div className="relative">
                <img
                  className="w-full h-36 rounded-lg object-cover"
                  src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${item.card.info.imageId}`}
                  alt={item.card.info.name}
                />
                <button className="absolute bottom-2 right-2 bg-zinc-800 text-white rounded-xl p-1  hover:bg-gray-200">
                  <span className="text-lg">Add+</span>
                </button>
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-lg"></div>
              </div>
            ) : (
              <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-36 flex items-center justify-center">
                <span className="text-gray-500">No image</span>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default IteamList;