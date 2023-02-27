import { useMembers } from "@/context/membersProvider";
import { shuffleArray } from "@/lib/utils";
import { useState } from "react";
import { FaRecycle, FaUsers } from "react-icons/fa";
import { HiOutlineFilter } from "react-icons/hi";

export const GroupUp = ({ handleSubmit }) => {
  const { memberList, groupList, ungroupList } = useMembers();
  const [formData, setFormData] = useState({
    category: "individuals",
    number: 2,
    random: false,
  });

  const validate = () => {
    if (memberList.length) {
      return true;
    }
    return false;
  };

  return (
    <form
      className="max-w-lg p-2 rounded-md mx-auto"
      onSubmit={(e) => {
        e.preventDefault();

        if (validate()) {
          const response = formData.random
            ? handleSubmit(formData, shuffleArray(memberList))
            : handleSubmit(formData, memberList);
          if (response) {
            groupList(response);
          }
        }
      }}
    >
      <h3 className="flex items-center gap-2 mb-5 justify-center">
        <HiOutlineFilter size={25} /> Group members
      </h3>

      <div className="grid grid-cols-2 gap-2">
        <div>
          <div className="input-group">
            <label htmlFor="groupBy">Group by</label>
            <select
              name="groupBy"
              id="groupBy"
              className="select bg-slate-600 focus:bg-slate-800"
              value={formData.category}
              onChange={(e) =>
                setFormData({ ...formData, category: e.target.value })
              }
            >
              <option value="individuals">Individuals</option>
              <option value="groups">Groups</option>
            </select>
          </div>

          <small className="input-group flex gap-2 mt-2">
            <input
              type="checkbox"
              value={formData.number}
              checked={formData.random}
              onChange={(e) =>
                setFormData({ ...formData, random: e.target.checked })
              }
              id="random"
            />
            <label htmlFor="random">Random</label>
          </small>
        </div>

        <div className="input-group">
          <label htmlFor="number">Number</label>
          <input
            type="number"
            id="number"
            required
            min={2}
            className="input bg-slate-600 focus:bg-slate-800"
            value={formData.number}
            onChange={(e) =>
              setFormData({ ...formData, number: e.target.valueAsNumber })
            }
          />
        </div>

        <button
          className="btn primary flex items-center col-span-2 justify-center gap-2"
          type="submit"
        >
          Group up
          <FaUsers size={20} />
        </button>
        <button
          className="btn bg-slate-700 hover:bg-slate-600 flex items-center col-span-2 justify-center gap-2"
          type="button"
          onClick={ungroupList}
        >
          Ungroup
          <FaRecycle size={20} />
        </button>
      </div>
    </form>
  );
};
