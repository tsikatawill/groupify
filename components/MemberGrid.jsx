import { useMembers } from "@/context/membersProvider";
import clsx from "clsx";
import { toast } from "react-toastify";
import { MemberPill } from ".";

export const MemberGrid = ({ members, grouped = false }) => {
  const { removeMember } = useMembers();

  const handleRemove = (name) => {
    removeMember(name);
    toast.success("Member has been removed");
  };
  return (
    <ul
      className={clsx("relative py-5 rounded-md", !grouped && "bg-slate-600")}
    >
      <div className="scroll-container flex flex-wrap custom-scrollbar gap-5 max-h-40 items-start justify-center overflow-y-scroll overflow-x-hidden hidden-scrollbar">
        {members.map((member, idx) => (
          <MemberPill
            key={idx}
            member={member}
            handleRemove={() => handleRemove(member)}
          />
        ))}
      </div>
    </ul>
  );
};