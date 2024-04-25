import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";


const LeftSideNav = () => {
    const [categories, setCategories]= useState([])

    useEffect(() => {
        fetch("categories.json")
         .then((response) => response.json())
         .then((data) => {
            setCategories(data)
          })
    },[])
    
    return (
        <div className="space-y-7 p-2 pt-4">
            <h1 className="text-xl font-semibold">All Category</h1>
            {
                categories.map((category) => 
                <NavLink className="block text-[#9F9F9F] font-semibold px-3"
                 key={category.id} to={`/category/${category.id}`}>{category.name}
                 </NavLink> )
            }
        </div>
    );
};

export default LeftSideNav;