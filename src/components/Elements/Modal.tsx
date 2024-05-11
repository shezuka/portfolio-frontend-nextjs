"use client";

import React from "react";
import ReactDOM from "react-dom";

type ModalProps = {
  children?: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
};

export default function Modal(props: ModalProps) {
  const portalRoot = document.getElementById("modals-root");
  if (!portalRoot) return null;

  return ReactDOM.createPortal(
    <div
      onClick={props.onClose}
      className={`fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center ${props.isOpen ? "opacity-100" : "opacity-0 pointer-events-none"} transition-opacity duration-300`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`bg-white p-4 rounded-lg shadow-lg max-w-lg w-full m-4 relative transform transition-all duration-300 ${props.isOpen ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0"}`}
      >
        {props.children}
      </div>
    </div>,
    portalRoot,
  );
}
