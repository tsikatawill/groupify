import { flattenArray, getMembers, updateMembers } from "@/lib/utils";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

export const membersContext = createContext();

export const MembersProvider = ({ children }) => {
  const [memberList, setMemberList] = useState([]);
  const [groupedList, setGroupedList] = useState([]);

  const addMembers = useCallback(
    (members) => {
      setMemberList((prev) => [...prev, ...members]);
      updateMembers([...memberList, ...members]);
    },
    [memberList]
  );

  const removeMember = (name) => {
    const newList = memberList.filter((item) => item !== name);
    setMemberList(() => newList);
    updateMembers(newList);
  };

  const clearMembers = () => {
    if (memberList.length > 0) {
      setMemberList([]);
      setGroupedList([]);
      updateMembers([]);
    }
  };

  const groupList = (group) => {
    setGroupedList(group);
  };

  const ungroupList = () => {
    if (groupedList.length > 0) {
      const flattenedList = flattenArray(groupedList);
      setGroupedList([]);
      setMemberList(flattenedList);
    }
  };

  useEffect(() => {
    setMemberList(getMembers);
  }, [setMemberList]);

  return (
    <membersContext.Provider
      value={{
        addMembers,
        memberList,
        removeMember,
        clearMembers,
        groupList,
        groupedList,
        ungroupList,
      }}
    >
      {children}
    </membersContext.Provider>
  );
};

export const useMembers = () => {
  const {
    memberList,
    setMemberList,
    addMembers,
    removeMember,
    clearMembers,
    groupList,
    ungroupList,
    groupedList,
  } = useContext(membersContext);

  return {
    memberList,
    setMemberList,
    addMembers,
    removeMember,
    clearMembers,
    groupList,
    groupedList,
    ungroupList,
  };
};
