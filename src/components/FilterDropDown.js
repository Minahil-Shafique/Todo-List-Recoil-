import React, {useState} from "react";
import { filterOptionAtom } from "../recoil/atoms/filterOptionAtom";
import { useRecoilState } from "recoil";

const FilterDropDown = () => {

    // State for dropdown selection
    const [filterOption, setFilterOption] = useState(filterOptionAtom);
    
    // Event handler for dropdown selection
    const handleFilterChange = (e) => {
        setFilterOption(e.target.value);
    }

  return (
    <div>
        <span>Filter todos:</span>
        <select value="filterOption" onChange={handleFilterChange}>
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="stared">Stared</option>
        </select>
    </div>
  )
}

export default FilterDropDown;