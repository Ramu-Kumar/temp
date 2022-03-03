import React from "react";
import SelectDropDown from "./selectDropDown";
import CloseIcon from "../../assets/static/icons/title/Close-Outline-Teal.svg";
const SelectGroup = (props) => {
  const {
    data,
    searchVal,
    searchHandler,
    changeSelect,
    selectedCounty,
    selectedCountyVal,
    expandViewVal,
    expandView } = props

  const ClearSelection = () => {
    let SelectedN = document.querySelector("#florida-select-drop");
    let disabledNode = document.querySelector("#fla-drop-option-default")
    disabledNode.setAttribute('disabled',"false")
    SelectedN.selectedIndex = 0;
    expandView(false);
    selectedCounty("");
    changeSelect("");
  };

  return (
    <React.Fragment>
      <div className="default-select-wrapper">
        <SelectDropDown changeSelect={changeSelect} expandView={expandView} selectedCounty={selectedCounty} data={data} searchHandler={(e) => searchHandler(e)} searchVal={searchVal} />
      </div>
      {expandViewVal && (
        <div>
          <p className="expanded-view-descption">
            The <b>homebuyer</b> is responsible for paying title insurance in{" "}
            <b>{selectedCountyVal} </b> county.
          </p>

          <div
            onClick={(e) => ClearSelection(e)}
            className="clear-drop-selection"
          >
            Clear <img src={CloseIcon} alt="clear Icon image" />
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default SelectGroup;
