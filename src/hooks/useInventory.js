import React, {useContext} from 'react'
import { InventoryContext } from '../context/InventoryContext'

const useInventory = () => {
  return useContext(InventoryContext);
};

export default useInventory;
