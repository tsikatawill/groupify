import { AddMembers, Container, MemberGrid, Modal } from "@/components";
import { useMembers } from "@/context/membersProvider";
import { FaEraser, FaPrint } from "react-icons/fa";
import { handleGroup } from "@/lib/utils";
import { GroupUp } from "@/components/Forms/GroupUp";
import clsx from "clsx";
import Image from "next/image";
import { useState } from "react";

const Group = () => {
  const { memberList, clearMembers, groupedList } = useMembers();
  const [showModal, setShowModal] = useState(false);
  const confirmClear = () => {
    setShowModal(true);
  };

  return (
    <div>
      <section className="add -mt-8 sm:-mt-12 pt--8 sm:pt-12 bg-[linear-gradient(rgba(15,23,42,0.5),rgba(15,23,42,0.8),rgba(15,23,42,1)),url(/images/hero.webp)]">
        <Container extraClasses="py-10">
          <AddMembers />
        </Container>
      </section>

      <div className="bg-slate-900 text-white py-10">
        <Container extraClasses="grid grid-cols-1 md:grid-cols-[3fr,1fr] gap-4">
          <div>
            <h2 className="text-center">All Members</h2>

            <div className="flex justify-center w-fit mx-auto items-center gap-4 mb-5 cursor-pointer">
              <div className="print flex items-center gap-2">
                <FaPrint size={20} className="text-green-500" />
                Print
              </div>

              <div
                className="clear flex items-center gap-2"
                onClick={confirmClear}
              >
                <FaEraser size={20} className="text-red-500" />
                Clear members
              </div>
            </div>

            <div className="max-w-lg mx-auto md:max-w-full md:mx-0">
              {groupedList.length > 0 ? (
                <div
                  className={clsx(
                    "grid gap-4 grid-cols-1",
                    groupedList.length === 1
                      ? ""
                      : groupedList.length === 2
                      ? "md:grid-cols-2"
                      : "md:grid-cols-3"
                  )}
                >
                  {groupedList.map((list, idx) => {
                    return (
                      <div key={idx}>
                        {list.length > 0 && (
                          <div className="rounded-md pt-5 px-2 bg-slate-800">
                            <h3 className="text-center">Group {idx + 1}</h3>

                            <MemberGrid members={list} grouped />
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              ) : memberList.length > 0 ? (
                <MemberGrid members={memberList} />
              ) : (
                <div className="flex flex-col items-center gap-4 py-5">
                  <Image
                    src="/images/empty.png"
                    height={200}
                    width={200}
                    alt="empty"
                  />

                  <p className="text-center text-slate-400">
                    Empty group members list
                  </p>
                </div>
              )}
            </div>
          </div>

          <aside className="">
            <GroupUp handleSubmit={handleGroup} />
          </aside>
        </Container>
      </div>

      <Modal show={showModal} handleClose={() => setShowModal(false)}>
        <h3 className="text-red-500">Delete member?</h3>

        <p className="py-2">
          All group members will be removed from the group list
        </p>

        <div className="grid grid-cols-2 gap-4">
          <button
            className="btn danger w-full"
            onClick={() => {
              clearMembers();
              setShowModal(false);
            }}
          >
            Confirm
          </button>

          <button
            className="btn gray w-full\"
            onClick={() => setShowModal(false)}
          >
            Cancel
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default Group;
