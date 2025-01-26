import { useState } from "react";
import useInventory from "../hooks/useInventory";

const InventoryForm = () => {
    const { addItem } = useInventory();
    const [form, setForm] = useState({ name: "", category: "", quantity: "" });

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!form.name || !form.category || !form.quantity) return;
        addItem({ ...form, quantity: parseInt(form.quantity, 10) });
        setForm({ name: "", category: "", quantity: "" });
    };

    return (
        <form onSubmit={handleSubmit} className="py-8  space-y-5 md:flex gap-6 ">
            <div className='flex w-48 outline-none h-10 justify-center items-center rounded-lg shadow-[0_0_20px_theme("colors.purple.400")] duration-300 hover:shadow-neon'>

                <input type="text" className='outline-none px-3 w-48 h-10'  placeholder="Item Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
            </div>
            <div className='flex w-48 h-9 justify-center items-center rounded-lg shadow-[0_0_20px_theme("colors.purple.400")] duration-300 hover:shadow-neon'>
            <input type="text" placeholder="Category" value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value })} className="outline-none px-3 w-48 h-10" />
            </div>

            <div className='flex w-48 h-9 justify-center items-center rounded-lg shadow-[0_0_20px_theme("colors.purple.400")] duration-300 hover:shadow-neon'>

            <input type="number" placeholder="Quantity" value={form.quantity} onChange={(e) => setForm({ ...form, quantity: e.target.value })} className="outline-none px-3 w-48 h-10" />
            </div>

            <div className='flex w-36 h-9 justify-center items-center rounded-lg shadow-[0_0_20px_theme("colors.purple.400")] duration-300 hover:shadow-neon'>

            <button type="submit"  className='bg-clip-text w-36 h-9 duration-300 hover:text-transparent bg-gradient-to-r from-pink-500 to-violet-500 flex justify-center items-center cursor-pointer font-semibold' >Add</button>
            </div>
        </form>
    );
};

export default InventoryForm;
