import React from 'react';
import '../index.css'; // Adjust the path as necessary

const RestroCards = (props)=>{
  const { resData } = props;
  const {cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla} = resData.info;
  return (
    <div className='body'>
    <div className='restro-cards'>
      <div className='card-img'>
        <img  src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`} alt='Biriyani Image'></img>
      </div>
      <div className='restro-details'>
        <h2 className='resto-name'>{name}</h2>
        <h1 className='dish-title'>{cuisines.join(", ")}</h1>
        <h1 className='rating'>{avgRating} stars</h1>
        <h1 className='price'> Price : {costForTwo}</h1>
        <h1 className='time'>Delivery time : {sla.deliveryTime} mins</h1>
      </div>
    </div>
    </div>
  );
}

export default RestroCards;