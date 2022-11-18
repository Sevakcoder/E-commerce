const setSelectedItemInfo = (itemId,posY,selectedPageURL,selectedPageFilter) => {
    
    localStorage.setItem("selectedItemId",itemId)
    localStorage.setItem("selectedItemPosY",posY)
    // localStorage.setItem("selectedPageURL",JSON.stringify(selectedPageURL))
    localStorage.setItem("selectedPageFilter",JSON.stringify(selectedPageFilter))
}

export default setSelectedItemInfo;