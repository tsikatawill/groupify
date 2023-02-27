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
    <ul className={clsx("relative p-5 rounded-md", !grouped && "bg-slate-800")}>
      <div
        className={clsx(
          "scroll-container grid grid-cols-1 items-start custom-scrollbar gap-5 max-h-56 justify-center overflow-y-scroll overflow-x-hidden hidden-scrollbar",
          grouped
            ? "sm:grid-cols-2 md:grid-cols-1"
            : "sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
        )}
      >
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
