"use client";

import Modal from "react-modal";
import { useContext, useState } from "react";
import { IoCloseOutline } from "react-icons/io5";

import { CheckoutDetails } from "@/components/checkout-details";

import { CartContext } from "@/context/cart-context";

export const Footer = () => {
  const context = useContext(CartContext);

  if (!context)
    throw new Error("CartContext must be used within a CartProvider");

  const { setIsOpen, cartItems, totalPrice } = context;

  const [modal, setModal] = useState<boolean>(false);

  const modalStyles = {
    overlay: {
      backgroundColor: "rgba(0,0,0,0.5)",
    },
  };

  Modal.setAppElement("body");

  const openModal = () => {
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  };

  return (
    <>
      {cartItems.length > 0 ? (
        <div className="px-6 py-3 lg:py-6 mt-auto">
          <div className="flex items-center justify-between mb-6 text-lg font-semibold font-tertiary">
            <p>Total:</p>
            <p>${totalPrice.toFixed(2)}</p>
          </div>
          <div className="flex flex-col gap-y-3">
            <button
              onClick={() => {
                setIsOpen(false);
                openModal();
              }}
              type="button"
              className="btn btn-lg gradient font-semibold flex justify-center"
            >
              Checkout
            </button>
          </div>
        </div>
      ) : (
        <div className="absolute -z-10 top-0 w-full h-full flex items-center justify-center">
          <p className="font-semibold">Your cart is empty</p>
        </div>
      )}

      {modal && (
        <Modal
          isOpen={modal}
          style={modalStyles}
          onRequestClose={closeModal}
          contentLabel="Checkout Modal"
          className="w-full h-full lg:max-w-[900px] lg:max-h-[600px] lg:rounded-[30px] lg:fixed lg:top-1/2 lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 bg-white outline-none"
        >
          <button
            type="button"
            aria-label="Close checkout modal"
            className="absolute top-2 right-2 z-30 cursor-pointer hover:scale-110 transition-all duration-300"
            onClick={closeModal}
          >
            <IoCloseOutline size={36} className="text-orange" />
          </button>
          <CheckoutDetails setModal={setModal} />
        </Modal>
      )}
    </>
  );
};
