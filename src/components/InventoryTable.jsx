import { useState } from "react";
import useInventory from "../hooks/useInventory";


const InventoryTable = () => {
    const { filteredInventory, deleteItem, editItem } = useInventory();
    const [editingId, setEditingId] = useState(null);
    const [editData, setEditData] = useState({ name: "", category: "", quantity: "" });

    const handleEditClick = (item) => {
        setEditingId(item.id);
        setEditData({ name: item.name, category: item.category, quantity: item.quantity });
    };

    const handleInputChange = (e) => {
        setEditData({ ...editData, [e.target.name]: e.target.value });
    };

    const handleSave = () => {
        editItem(editingId, editData);
        setEditingId(null);
        setEditData({ name: "", category: "", quantity: "" });
    };

    return (
        <div className="overflow-x-auto">
            <table className='w-full  border-gray-300 shadow-[0_0_20px_theme("colors.purple.400")] duration-300 hover:shadow-neon'>
                <thead>
                    <tr className="bg-black">
                        <th className="border p-2">Name</th>
                        <th className="border p-2">Category</th>
                        <th className="border p-2">Quantity</th>
                        <th className="border p-2 w-80">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredInventory.map((item) => (
                        <tr key={item.id} className={item.quantity < 10 ? " text-red-400 border-white font-bold" : ""}>
                            {editingId === item.id ? (
                                <>
                                    <td className="border p-2">
                                        <input
                                            type="text"
                                            name="name"
                                            value={editData.name}
                                            onChange={handleInputChange}
                                            className="border p-1 w-full"
                                        />
                                    </td>
                                    <td className="border p-2">
                                        <input
                                            type="text"
                                            name="category"
                                            value={editData.category}
                                            onChange={handleInputChange}
                                            className="border p-1 w-full"
                                        />
                                    </td>
                                    <td className="border p-2">
                                        <input
                                            type="number"
                                            name="quantity"
                                            value={editData.quantity}
                                            onChange={handleInputChange}
                                            className="border p-1 w-full"
                                        />
                                    </td>
                                    <td className="border p-2">
                                        <div className="flex justify-evenly items-center">
                                            <div className='flex w-36 h-9 justify-center  items-center rounded-lg shadow-[0_0_10px_theme("colors.purple.700")] duration-300 hover:shadow-neon'>

                                                <button onClick={handleSave} className='bg-clip-text cursor-pointer  w-36 h-9 duration-300 hover:text-transparent bg-gradient-to-r from-pink-500 to-violet-500 flex justify-center items-center font-semibold'>
                                                    Save
                                                </button>
                                            </div>
                                            <div className='flex w-36 h-9 justify-center  items-center rounded-lg shadow-[0_0_10px_theme("colors.purple.700")] duration-300 hover:shadow-neon'>

                                                <button onClick={() => setEditingId(null)} className='bg-clip-text cursor-pointer  w-36 h-9 duration-300 hover:text-transparent bg-gradient-to-r from-pink-500 to-violet-500 flex justify-center items-center font-semibold'>
                                                    Cancel
                                                </button>
                                            </div>
                                        </div>
                                    </td>
                                </>
                            ) : (
                                <>
                                    <td className="border p-2">{item.name}</td>
                                    <td className="border p-2">{item.category}</td>
                                    <td className="border p-2">{item.quantity}</td>
                                    <td className="border p-2 ">

                                        <div className="flex justify-evenly items-center">
                                            <div className='flex w-32 h-9 justify-center gap-4  items-center rounded-lg shadow-[0_0_10px_theme("colors.purple.700")] duration-300 hover:shadow-neon'>

                                                <button onClick={() => handleEditClick(item)} className='bg-clip-text cursor-pointer  w-32 h-9 duration-300 hover:text-transparent bg-gradient-to-r from-pink-500 to-violet-500 flex justify-center items-center font-semibold'>
                                                    Edit
                                                </button>
                                            </div>
                                            <div className='flex w-32 h-9 justify-center  items-center rounded-lg shadow-[0_0_10px_theme("colors.purple.700")] duration-300 hover:shadow-neon'>

                                                <button className='bg-clip-text cursor-pointer  w-32 h-9 duration-300 hover:text-transparent bg-gradient-to-r from-pink-500 to-red-500 flex justify-center items-center font-semibold'>
                                                    Delete
                                                </button>
                                            </div>
                                        </div>
                                    </td>
                                </>
                            )}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default InventoryTable;
