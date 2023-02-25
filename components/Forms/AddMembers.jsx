import { useMembers } from "@/context/membersProvider";
import { handleSeparate } from "@/lib/utils";
import { Dropzone, Modal } from "@/components";
import { useState } from "react";
import { toast } from "react-toastify";

export const AddMembers = () => {
  const [members, setMembers] = useState("");
  const [numOfMembers, setNumOfMembers] = useState(1);
  const [entryType, setEntryType] = useState("generated");
  const [prefix, setPrefix] = useState("");
  const [padding, setPadding] = useState(0);
  const [uploading, setUploading] = useState(false);

  const { addMembers, memberList } = useMembers();

  const validate = (list) => {
    const double = list.map((listItem) => {
      const status = memberList.includes(listItem);
      status && toast.warn(listItem + " has already been added");
      return status;
    });

    if (!double.includes(true)) {
      return true;
    } else {
      return false;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const separatedList = handleSeparate(members);

    if (entryType === "manual") {
      if (validate(separatedList)) {
        addMembers(separatedList);
        toast.success(
          `${
            separatedList.length > 1
              ? separatedList.length + " members have"
              : "1 member has"
          } been added!`
        );
        setMembers("");
      }
    }

    if (entryType === "generated") {
      let list = [];
      for (let i = 1; i < numOfMembers + 1; i++) {
        if (prefix.trim() !== "") {
          list.push(prefix + i.toString().padStart(padding, "0"));
        } else {
          list.push(i);
        }
      }
      if (validate) {
        addMembers(list);
        toast.success(
          `Added ${numOfMembers} new ${numOfMembers > 1 ? "members" : "member"}`
        );
        // reset form
        setNumOfMembers(1);
        setPadding(0);
        setPrefix("");
      }
    }
  };

  const handleFileSubmit = (members) => {
    addMembers(members);
  };

  return (
    <>
      <form
        className="max-w-lg p-5 rounded-md mx-auto h-[500px]"
        onSubmit={handleSubmit}
      >
        <h2 className="text-center mb-5">Add Members</h2>

        <div className="flex justify-center mb-20 gap-5">
          <select
            value={entryType}
            onChange={(e) => setEntryType(e.target.value)}
            className="select w-fit text-white focus:outline-0  bg-slate-600 focus:bg-slate-800"
          >
            <option value="generated">Generate members</option>
            <option value="file">Upload file</option>
            <option value="manual">Manual entry</option>
          </select>
        </div>

        {entryType === "manual" && (
          <>
            <div className="flex items-center gap-2 w-full">
              <input
                required
                type="text"
                className="border w-full input"
                placeholder="Eg: John, Doe, Fiifi"
                value={members}
                onChange={(e) => {
                  setMembers(e.target.value);
                }}
              />
              <button className="btn primary">Add</button>
            </div>

            <small className="mt-2">
              Separate with comma <span className="font-bold">{'","'}</span>
            </small>
          </>
        )}

        {entryType === "generated" && (
          <div className="grid grid-cols-2 gap-4">
            <div className="w-full col-span-2">
              <input
                type="number"
                value={numOfMembers}
                min={1}
                required
                onChange={(e) => setNumOfMembers(e.target.valueAsNumber)}
                placeholder="Enter total number of members"
                className="input"
              />
              <small>How many members to generate</small>
            </div>

            <div className="w-full col-span-2 grid grid-cols-2 gap-4">
              <div>
                <input
                  type="text"
                  value={prefix}
                  onChange={(e) => setPrefix(e.target.value)}
                  placeholder="AH/HIM/19/"
                  className="input"
                />
                <small>Prefix (Optional)</small>
              </div>
              <div>
                <input
                  type="number"
                  value={padding}
                  min={0}
                  onChange={(e) => setPadding(e.target.valueAsNumber)}
                  placeholder="Amount of padding"
                  className="input"
                />
                <small>Padding</small>
              </div>
            </div>

            <div className="col-span-2 h-6 flex items-center">
              {!!numOfMembers && (
                <span>
                  Output example:{" "}
                  {prefix.trim() !== ""
                    ? prefix.trim() +
                      String(numOfMembers).padStart(padding, "0")
                    : numOfMembers}
                </span>
              )}
            </div>
            <button className="btn primary col-span-2">Add</button>
          </div>
        )}

        {!uploading && entryType === "file" && (
          <>
            <Dropzone handleSubmit={handleFileSubmit} />
            <small className="block p-2">
              Make sure you file your members under a column titled{" "}
              <span className="text-red-500 font-semibold">
                &apos;members&apos;
              </span>
            </small>
          </>
        )}
      </form>
    </>
  );
};
