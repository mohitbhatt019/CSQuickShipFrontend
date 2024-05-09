import React, { createContext, useEffect, useState } from "react";

export const SelectorTypeContext = createContext();

export const SelectorTypeContextProvider = ({ children }) => {
  const [openSelectorModal, setOpenSelectorModal] = useState({
    view: false,
  });

  const [selectedItemData, setSelectedItemData] = useState(null);
  const [selectedDataList, setSelectedDataList] = useState([]);

  const addResource = (object) => {
    setSelectedDataList([...selectedDataList, object]);
  };

  const removeResource = (id) => {
    const index = selectedDataList?.findIndex((obj) => obj.value === id);
    if (index !== -1) {
      selectedDataList?.splice(index, 1);
    }
    setSelectedDataList([...selectedDataList]);
  };

  const clearResources = () => {
    setSelectedItemData(null);
    setSelectedDataList([]);
  };

  const handelSelectorModal = (type, item) => {
    setSelectedItemData(item);
    if (type === "view") {
      setOpenSelectorModal({
        view: true,
      });
    } else {
      setOpenSelectorModal({
        view: false,
      });
    }
  };

  return (
    <SelectorTypeContext.Provider
      value={{
        handelSelectorModal,
        openSelectorModal,
        selectedItemData,
        addResource,
        selectedDataList,
        removeResource,
        clearResources,
        setSelectedDataList,
      }}
    >
      {children}
    </SelectorTypeContext.Provider>
  );
};
