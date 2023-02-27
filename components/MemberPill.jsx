import clsx from "clsx";
import { useState } from "react";
import { HiOutlineX } from "react-icons/hi";
import { Modal } from ".";
import styles from "./MemberPill.module.css";
export const MemberPill = ({ member, handleRemove }) => {
  const [showModal, setShowModal] = useState(false);

  const confirmDelete = () => {
    setShowModal(true);
  };

  return (
    <>
      <div
        className="p-2 rounded-md bg-slate-200 relative flex gap-2 justify-between items-center cursor-pointer text-black"
        onDoubleClick={confirmDelete}
      >
        <span className="w-[50%] whitespace-nowrap overflow-ellipsis">
          {member}
        </span>

        <span className="text-red-500 cursor-pointer" onClick={confirmDelete}>
          <HiOutlineX />
        </span>
      </div>

      <Modal show={showModal} handleClose={() => setShowModal(false)}>
        <h3 className="text-red-500">Delete member?</h3>

        <p className="py-2">
          <span className="font-bold">{member}</span> will be removed from the
          group list
        </p>

        <div className="grid grid-cols-2 gap-4">
          <button
            className="btn danger w-full"
            onClick={() => {
              handleRemove();
              setShowModal(false);
            }}
          >
            Delete
          </button>

          <button
            className="btn gray w-full"
            onClick={() => setShowModal(false)}
          >
            Cancel
          </button>
        </div>
      </Modal>
    </>
  );
};
