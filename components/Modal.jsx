import clsx from "clsx";
import React, { useEffect } from "react";
import { HiX } from "react-icons/hi";
import { Container } from "./Container";

export const Modal = ({ show, handleClose, children }) => {
  return (
    <div
      className={clsx(
        "fixed bg-slate-900 bg-opacity-80  grid place-content-center h-screen w-screen top-0 left-0 transition-all duration-200 ease-out z-50",
        show ? "scale-100 opacity-100" : "scale-0 opacity-0"
      )}
      onClick={handleClose}
    >
      <Container
        extraClasses="max-w-xl p-5 pt-10 rounded-md relative bg-white text-black min-w-[300px]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={handleClose}
          className="h-8 w-8 grid rounded-full text-slate-500 hover:text-slate-900 hover:bg-slate-200 place-content-center absolute top-2 right-2"
        >
          <HiX />
        </button>

        {children}
      </Container>
    </div>
  );
};
