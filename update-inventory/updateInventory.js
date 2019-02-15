function updateInventory(currentInventory, newInventory) {
  const getInventoryName = inventoryList => inventoryList.map(inventory => inventory[1]);
  const allInventoryItems = new Set();
  getInventoryName(currentInventory).map(item => allInventoryItems.add(item));
  getInventoryName(newInventory).map(item => allInventoryItems.add(item));
  const assignAndUpdateInventory = (newInventoryList, oldInventoryList) => {
    return newInventoryList.map((inventory) => {
      const inventoryWithQuantity = oldInventoryList.filter((item) => {
        if (item[1] == inventory) {
          return [item[0], inventory];
        }
      });
      if (inventoryWithQuantity.length === 2) {
        return inventoryWithQuantity;
      }
    });
  };
  const finalInventoryList = assignAndUpdateInventory(
    Array.from(allInventoryItems), currentInventory,
  );

  return finalInventoryList;
}

export {
  updateInventory,
};