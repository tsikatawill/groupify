import * as XLSX from "xlsx";

export const getMembers = () => {
  if (typeof window !== "undefined") {
    const members = localStorage.getItem("members");
    if (members === null) {
      return [];
    }

    return JSON.parse(members);
  }
};

export const updateMembers = (newList) => {
  localStorage.setItem("members", JSON.stringify(newList));
};

export const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
};

export const handleSeparate = (text) => {
  const splitArray = text.split(",");

  const trimmedArray = splitArray.map((item) => {
    if (item.trim() !== "") {
      return item.trim();
    }
    return "";
  });

  const filteredArray = trimmedArray.filter((item) => item !== "");

  return filteredArray;
};

export const handleGroup = (formData, memberList) => {
  const { category, number, random } = formData;
  let newGroups = [];
  let newGroup = [];

  const lastMultiple = Math.ceil(memberList.length / number);

  if (category === "individuals") {
    let start = 0;
    for (let i = 0; i < lastMultiple; i++) {
      const item = (i + 1) * number;
      newGroup = memberList.slice(start, item);
      start = item;
      if (random) {
        newGroups.push(shuffleArray(newGroup));
      } else {
        newGroups.push(newGroup);
      }
    }
  } else if (category === "groups") {
    const lastMultiple = Math.ceil(memberList.length / number);
    let start = 0;

    for (let i = 0; i < number; i++) {
      const item = (i + 1) * lastMultiple;
      newGroup = memberList.slice(start, item);
      start = item;
      if (random) {
        newGroups.push(shuffleArray(newGroup));
      } else {
        newGroups.push(newGroup);
      }
    }
  }

  return newGroups;
};

export const flattenArray = (nestedArray) => {
  let flattenedArray = [];
  nestedArray.forEach((subArray) => {
    subArray.forEach((element) => {
      flattenedArray.push(element);
    });
  });

  console.log(flattenedArray);
  return flattenedArray;
};

export const handleUploadFile = async (file) => {
  const data = await file.arrayBuffer();
  const workbook = XLSX.read(data);
  const worksheets = workbook.SheetNames;
  let memberssArray = [];

  worksheets.forEach((item) => {
    const itemArray = XLSX.utils.sheet_to_json(workbook.Sheets[item]);
    const items = itemArray
      .filter((item) => item.members)
      .map((item) => item.members);

    memberssArray.push(...items);
  });

  return memberssArray;
};

export const handlePrint = (group = [], nested = false) => {
  const WB = XLSX.utils.book_new();

  if (nested) {
    const sheets = group.map((item, idx) =>
      XLSX.utils.aoa_to_sheet([
        [""],
        ["", "Members"],
        ...item.map((inner) => ["", inner]),
      ])
    );
    sheets.forEach((sheet, i) => {
      XLSX.utils.book_append_sheet(WB, sheet, `Group ${i + 1}`);
    });
  } else {
    const WS = XLSX.utils.aoa_to_sheet([
      [""],
      ["", "Members"],
      ...group.map((item) => ["", item]),
    ]);

    XLSX.utils.book_append_sheet(WB, WS);
  }

  const pad = (value) => {
    const newValue = String(value).padStart(2, "0");
    return newValue;
  };

  const date = new Date();
  const day = pad(date.getDate());
  const month = pad(date.getMonth());
  const year = date.getFullYear();
  const hr = pad(date.getUTCHours());
  const min = pad(date.getUTCMinutes());

  const newDate = day + "-" + month + "-" + year + "-" + hr + "-" + min;

  const fileName = "groupify-" + newDate + ".xlsx";

  return XLSX.writeFile(WB, fileName, { type: "file" });
};
