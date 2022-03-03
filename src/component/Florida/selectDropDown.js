import React from "react";
import DownArrow from "../../assets/static/icons/arrow-down-custom.svg";

const SelectDropDown = (props) => {
const {
  data,
  changeSelect,
  expandView,
  selectedCounty
} = props
 

  const optionClickHandler = () => {
    let SelectedNode = document.querySelector("#florida-select-drop")
    let disabledNode = document.querySelector("#fla-drop-option-default")
      const SelectedVal = SelectedNode[SelectedNode.selectedIndex].value
      const SelectedId = SelectedNode[SelectedNode.selectedIndex].id
    changeSelect(SelectedId);
   expandView(true)
    selectedCounty(SelectedVal || "");
    disabledNode.setAttribute('disabled',"true")
    
  }

  return (
    <React.Fragment>
       <select id="florida-select-drop" style={{ backgroundImage:`url(${DownArrow})`}}  className="fla-select-drop"  onChange={optionClickHandler}>
         <option className="fla-drop-option" id="fla-drop-option-default" value="default value" defaultChecked>Please select a county</option>
       {data.map((Elemt, index) => {
            return (
              <option
                key={index}
                id={Elemt.id}
                className="fla-drop-option"
                value={Elemt.name}
              >
                {Elemt.name}
              </option>)
              })
            }
       </select>
    </React.Fragment>
  );
};

export default SelectDropDown;
