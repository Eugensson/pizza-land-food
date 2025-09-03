"use client";

import { useRef } from "react";
import Modal from "react-modal";
import { IoCloseOutline } from "react-icons/io5";

import { PizzaDetails } from "@/components/pizza-details";

import { PizzaType } from "@/types";

const modalStyles = {
  overlay: {
    backgroundColor: "rgba(0,0,0,0.5)",
  },
};

interface PizzaModalProps {
  isOpen: boolean;
  onClose: () => void;
  pizza: PizzaType;
}

export const PizzaModal = ({ isOpen, onClose, pizza }: PizzaModalProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={containerRef}>
      <Modal
        isOpen={isOpen}
        style={modalStyles}
        onRequestClose={onClose}
        contentLabel="Pizza Modal"
        role="dialog"
        ariaHideApp={false}
        className="w-full h-full lg:max-w-225 lg:max-h-150 lg:rounded-3xl lg:fixed lg:top-1/2 lg:-translate-y-1/2 lg:left-1/2 lg:-translate-x-1/2 outline-none bg-white"
      >
        <button
          type="button"
          aria-label="Close Modal"
          onClick={onClose}
          className="absolute top-2 right-2 z-30 hover:scale-110 transition-all duration-200 cursor-pointer"
        >
          <IoCloseOutline className="text-4xl text-orange" />
        </button>
        <PizzaDetails pizza={pizza} onClose={onClose} />
      </Modal>
    </div>
  );
};
