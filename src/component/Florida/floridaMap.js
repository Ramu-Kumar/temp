import React, { useState } from "react";
import {
  floridaMapCoords,
  floridaMapConf,
  floridaColorMap,
  businessData,
  floridaCountyMap,
  MapDescMapping,
} from "./countyData";
import { Contains } from "../Utils/utils";
import SelectGroup from "./selectGroup";
import "../../scss/florida/floridaMap.scss";

const { stroke, strokeLinejoin, strokeWidth } = floridaMapConf;

const FloridaMap = () => {
  const [select, setSelect] = useState([]);
  const [selectedCounty, setSelectedCounty] = useState("");
  const [expandView, setExpandView] = useState(false);

  const getCountyColor = (id) => {
    try {
      const { Buyer, Seller, Varies, Empty } = floridaColorMap;
      const { BuyersArray, SellerArray, VariesArray } = businessData;

      const BuyerChk = Contains(BuyersArray, id);
      const SelectChk = Contains(select, id);
      const SellerChk = Contains(SellerArray, id);
      const VariesChk = Contains(VariesArray, id);
      const EmptyChk = select.length > 0 ? false : true;

      if ((SelectChk && BuyerChk) || (EmptyChk && BuyerChk)) {
        return Buyer;
      } else if ((SelectChk && SellerChk) || (EmptyChk && SellerChk)) {
        return Seller;
      } else if ((SelectChk && VariesChk) || (EmptyChk && VariesChk)) {
        return Varies;
      } else {
        return Empty;
      }
    } catch (error) {
      console.error(error);
    }
  };

  const getCountyName = (id) => {
    return floridaCountyMap.filter((county) => county.id === id)[0].name || "";
  };

  const MapClickHandler = (id) => {
    let SelectedN = document.querySelector("#florida-select-drop")
    let disabledNode = document.querySelector("#fla-drop-option-default")
    for(let i=0;i<SelectedN.length;i++){
      if(SelectedN[i].id===id){
        SelectedN.selectedIndex = i;
        const CountyName = SelectedN[i].value
        const countyId = SelectedN[i].id
        disabledNode.setAttribute('disabled',"true")
        setSelect([countyId])
        setSelectedCounty(CountyName)
        setExpandView(true)
        return
      }
    }
  }

  return (
    <React.Fragment>
      <div className="florida-map-container">
        <div className="florida-dropdown-container">
          <div className="florida-dropdown-title">
            <p>Who pays?</p>
            <h5>Select a county</h5>
          </div>

          <SelectGroup
            data={floridaCountyMap}
            changeSelect={(val) => (val ? setSelect([val]) : setSelect([]))}
            selectedCounty={(val) => setSelectedCounty(val)}
            selectedCountyVal={selectedCounty}
            expandView={(val) => setExpandView(val)}
            expandViewVal={expandView}
          />
        </div>
        <svg
          className="florida-svg-img"
          width="749"
          height="727"
          viewBox="0 0 749 727"
        >
          <g opacity="0.7">
            {floridaMapCoords.map((mapData, index) => {
              return (
                <path
                  key={index}
                  d={mapData.cds}
                  id={mapData.id}
                  onClick={(e)=>MapClickHandler(e.target.id)}
                  fill={getCountyColor(mapData.id)}
                  stroke={stroke}
                  strokeWidth={strokeWidth}
                  strokeLinejoin={strokeLinejoin}
                >
                  <title>{getCountyName(mapData.id)}</title>
                </path>
              );
            })}
          </g>
        </svg>
        <ColorIndicator />
      </div>
    </React.Fragment>
  );
};

const ColorIndicator = () => {
  return (
    <React.Fragment>
      <div className="florida-desc-container">
        {MapDescMapping.map((type, index) => {
          return (
            <div className="map-desc-parent" key={index}>
              <div
                className="map-desc-child-a"
                style={{ background: type.Color }}
              ></div>
              <p className="map-desc-child-b">{type.Title}</p>
            </div>
          );
        })}
      </div>
    </React.Fragment>
  );
};

export default FloridaMap;
