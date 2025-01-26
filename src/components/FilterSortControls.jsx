import React, { useState } from "react";
import useInventory from "../hooks/useInventory";

const FilterSortControls = () => {
  const { inventory, setFilteredInventory } = useInventory();
  const [category, setCategory] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");

 
  const categories = [...new Set(inventory.map((item) => item.category))];

  const handleFilter = (e) => {
    const value = e.target.value;
    setCategory(value);
    setFilteredInventory(value ? inventory.filter((item) => item.category === value) : inventory);
  };

  const handleSort = () => {
    const newSortOrder = sortOrder === "asc" ? "desc" : "asc";
    setSortOrder(newSortOrder);
    setFilteredInventory([...inventory].sort((a, b) => newSortOrder === "asc" ? a.quantity - b.quantity : b.quantity - a.quantity));
  };

  return (
    <div className=" flex gap-10">
     
      <select value={category} onChange={handleFilter} className='flex cursor-pointer outline-none w-36 h-9 justify-center p-2 items-center rounded-lg text-sm shadow-[0_0_20px_theme("colors.purple.400")] duration-300 hover:shadow-neon'>
        <option className="text-gray-700 " value="">All Categories</option>
        {categories.map((cat) => (
          <option key={cat} className="text-black" value={cat}>{cat}</option>
        ))}
      </select>

     <div className='flexw-36 h-9 justify-center items-center rounded-lg shadow-[0_0_20px_theme("colors.purple.400")] duration-300 hover:shadow-neon'>
     <button onClick={handleSort} className='cursor-pointer text-sm bg-clip-text w-36 h-9 duration-300 hover:text-transparent bg-gradient-to-r from-pink-500 to-violet-500 flex justify-center items-center font-semibold'>
        Sort by quantity
      </button>
     </div>
    </div>
  );
};

export default FilterSortControls;
