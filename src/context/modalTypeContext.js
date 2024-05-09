import React, { createContext, useState } from "react";

export const ModalTypeContext = createContext();

export const ModalTypeContextProvider = ({ children }) => {
  const [openModal, setOpenModal] = useState({
    edit: false,
    delete: false,
    view: false,
  });

  const [itemData, setItemData] = useState(null);

  const handelModal = (type, item) => {
    setItemData(item);
    if (type === "delete") {
      setOpenModal({
        delete: !openModal.delete,
        edit: false,
        view: false,
      });
    } else if (type === "edit") {
      setOpenModal({
        delete: false,
        edit: !openModal.edit,
        view: false,
      });
    } else if (type === "view") {
      setOpenModal({
        delete: false,
        edit: false,
        view: !openModal.view,
      });
    } else {
      setOpenModal({
        delete: false,
        edit: false,
        view: false,
      });
    }
  };

  return (
    <ModalTypeContext.Provider value={{ handelModal, openModal, itemData }}>
      {children}
    </ModalTypeContext.Provider>
  );
};
