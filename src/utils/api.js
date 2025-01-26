// src/utils/api.js
export const fetchInventory = async () => {
    try {
        const response = await fetch("/data/inventory.json"); 
        if (!response.ok) {
            throw new Error("Failed to fetch inventory data");
        }
        return await response.json();
    } catch (error) {
        console.error("Error fetching inventory:", error);
        return [];
    }
};

export const addItemToInventory = async (newItem, inventory) => {
    try {
        const updatedInventory = [...inventory, { id: Date.now(), ...newItem }];
        return updatedInventory;
    } catch (error) {
        console.error("Error adding item:", error);
        return inventory;
    }
};

export const deleteItemFromInventory = async (id, inventory) => {
    try {
        return inventory.filter(item => item.id !== id);
    } catch (error) {
        console.error("Error deleting item:", error);
        return inventory;
    }
};

export const editItemInInventory = async (id, updatedItem, inventory) => {
    try {
        return inventory.map(item => item.id === id ? { ...item, ...updatedItem } : item);
    } catch (error) {
        console.error("Error updating item:", error);
        return inventory;
    }
};
