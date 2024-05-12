"use client";

import { ReactNode, useEffect, useState } from "react";
import ReactDOM from "react-dom";

type ModalProps = {
  children?: ReactNode;
  isOpen: boolean;
  onClose: () => void;
};

const Modal = ({ children, isOpen, onClose }: ModalProps) => {
  const [portalRoot, setPortalRoot] = useState<HTMLElement | null>(null);

  useEffect(() => {
    setPortalRoot(document.getElementById("modals-root"));
  }, []);

  if (!portalRoot) return null;

  return ReactDOM.createPortal(
    <div
      onClick={onClose}
      className={`fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"} transition-opacity duration-300`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`bg-white p-4 rounded-lg shadow-lg max-w-lg w-full m-4 relative transform transition-all duration-300 ${isOpen ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0"}`}
      >
        {children}
      </div>
    </div>,
    portalRoot,
  );
};

export default Modal;
