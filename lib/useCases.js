export const useCases = [
  {
    background: "/images/one.png",
    carousel: true,
    caseList: [
      {
        title1: "Upload group members",
        title2: "Generated entry",
        desc: (
          <span>
            Generate a serial list of group members. Add prepends can be added
            to the numbers to get something like{" "}
            <span className="code">GR-EH-02</span>
          </span>
        ),
        image: "/images/generated-entry.png",
      },
      {
        title1: "Upload group members",
        title2: "File upload",
        desc: (
          <span>
            Upload excel files with a list of group members filed under a column
            with a title of <span className="code">members</span>
          </span>
        ),
        image: "/images/file-entry.png",
      },
      {
        title1: "Upload group members",
        title2: "Manual entry!",
        desc: (
          <span>
            Type out the names of group members manually. Make sure to separate
            group members from each other. This can be done by placing a comma{" "}
            <span className="code">,</span> just after a group members name.
          </span>
        ),
        image: "/images/manual-entry.png",
      },
    ],
    reverse: false,
  },
  {
    background: "/images/two.png",
    carousel: false,
    caseList: [
      {
        title1: "Configure grouping",
        title2: "Choose your grouping configurations",
        desc: (
          <span>
            Choose the number of members for each group or the total number of
            groups you want. You can tick <span className="code">Random</span>{" "}
            to get random groupings. <br /> You can ungroup the list with{" "}
            <span className="code">Ungroup</span>
          </span>
        ),
        image: "/images/group-up.png",
      },
    ],
    reverse: true,
  },
  {
    background: "/images/three.png",
    carousel: false,
    caseList: [
      {
        title1: "Get results",
        title2: "Print grouping",
        desc: "    Print out your groups to an excel file. Each group is separated into a dedicated sheet.",
        image: "/images/print.png",
      },
    ],
    reverse: false,
  },
];
