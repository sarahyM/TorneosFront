import { useState } from "react"
import {GoChevronDown} from "react-icons/go";

 function Dropdown({options, selection, handleSelection}){

     const [isOpen, setIsOpen] = useState(false);

     const handleClick = () => {
        setIsOpen(!isOpen);
     }

     const handleOptionsClick = (option) => {
        // Close the dropdown when the user selects a category
        setIsOpen(false);
        // Set the name of the category
        handleSelection(option) 
     }

    const renderedOptions  = options.map((option) => {
        return <div className= "hover:bg-gray-100 rounded cursor-pointer p-1" onClick={() => handleOptionsClick(option)} key={option.value}>
            {option.value}
        </div>
    })


    return (
        <div className="w-48 relative">
            <div  className= "flex justify-between items-center cursor-pointer border rounded p-3 shadow bg-white w-full" 
                onClick={handleClick}>
                {selection?.label || "Select category..."}
                <GoChevronDown className="text-lg"/>
            </div>
            {isOpen ? <div className="absolute top-full border rounded p-3 shadow bg-white w-full">{renderedOptions}</div> : ""}
        </div>
    )
 }

 export default Dropdown;