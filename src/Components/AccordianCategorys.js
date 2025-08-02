import { GoChevronDown } from "react-icons/go";
import IteamList from "./IteamList";
import React from "react";

const AccordianCategorys = ({ title,data,show, setShowIndex }) => {

    const handleclick = () =>{
        setShowIndex();
        
    }

    

    return (
        <div>
           
        <div className=" justify-between p-4 bg-gray-100  shadow-sm rounded-lg mb-4 cursor-pointer">
          <div className="flex justify-between items-center" onClick={handleclick}>
          <span className="font-bold text-gray-900">{title}({data.length})</span>

          <span className=""><GoChevronDown /></span>
          </div>
          <div className="accordion-content mt-2">
            {show && <IteamList listData={data} />}
          </div>
          {console.log("Data in AccordianCategorys:", data)}
          </div>
      </div>
    )
}

export default AccordianCategorys;
