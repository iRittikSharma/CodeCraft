import React from "react";
import Select from "react-select";
import { languageOptions } from "../constants/languageOptions";
import { customStyles } from "../constants/customStyles";

const LanguageDropdown = ({onSelectChange}) => {
    return (
        <Select
            placeholder={`Filter by category`}
            options = {languageOptions}
            styles={customStyles}
            defaultValue={languageOptions[0]}
            onChange={(selectOption) => onSelectChange(selectOption)}
        />
    )
}
export default LanguageDropdown;