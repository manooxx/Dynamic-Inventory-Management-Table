import { createContext, useEffect, useState } from "react";

export const InventoryContext = createContext();

export const InventoryProvider = ({ children }) => {
    const [inventory, setInventory] = useState([]);
    const [filteredInventory, setFilteredInventory] = useState([]);

    
    useEffect(() => {
        const storedInventory = localStorage.getItem("inventory");
        if (storedInventory) {
            const parsedInventory = JSON.parse(storedInventory);
            setInventory(parsedInventory);
            setFilteredInventory(parsedInventory);
        }
    }, []);

    
    const updateLocalStorage = (newInventory) => {
        localStorage.setItem("inventory", JSON.stringify(newInventory));
        setInventory(newInventory);
        setFilteredInventory(newInventory);
    };

    // Add item
    const addItem = (newItem) => {
        const updatedInventory = [...inventory, { ...newItem, id: Date.now() }];
        updateLocalStorage(updatedInventory);
    };

    // Delete item
    const deleteItem = (id) => {
        const updatedInventory = inventory.filter((item) => item.id !== id);
        updateLocalStorage(updatedInventory);
    };

    // Edit item
    const editItem = (id, updatedItem) => {
        const updatedInventory = inventory.map((item) => (item.id === id ? { ...item, ...updatedItem } : item));
        updateLocalStorage(updatedInventory);
    };

    return (
        <InventoryContext.Provider value={{ inventory, filteredInventory, setFilteredInventory, addItem, deleteItem, editItem }}>
            {children}
        </InventoryContext.Provider>
    );
};
