export const tasks = [
  {
    id: 1,
    title: "Complete 2nd Floor Brickwork",
    project: "Green Valley Residency",
    site: "Green Valley - Site A",
    assignedTo: "Ramesh Kumar",
    supervisor: "Vikash Singh",
    priority: "High",
    status: "In Progress",
    progress: 80,
    startDate: "05 Sep 2026",
    dueDate: "12 Sep 2026",
    description:
      "Complete brickwork for the second floor including internal partition walls.",
    materials: [
      { name: "Bricks", quantity: 5000, unit: "Pieces" },
      { name: "Cement", quantity: 80, unit: "Bags" },
      { name: "Sand", quantity: 12, unit: "Tons" },
    ],
    updates: [
      {
        date: "07 Sep 2026",
        person: "Ramesh Kumar",
        message: "Second floor east wing brickwork completed.",
      },
      {
        date: "06 Sep 2026",
        person: "Vikash Singh",
        message: "Work progressing as planned.",
      },
    ],
    issues: [],
  },

  {
    id: 2,
    title: "Electrical Conduit Installation",
    project: "Green Valley Residency",
    site: "Green Valley - Site A",
    assignedTo: "Sanjay Singh",
    supervisor: "Suresh Kumar",
    priority: "Medium",
    status: "In Progress",
    progress: 45,
    startDate: "04 Sep 2026",
    dueDate: "15 Sep 2026",
    description:
      "Install electrical conduits for residential units on the second floor.",
    materials: [
      { name: "PVC Conduit", quantity: 450, unit: "Meters" },
      { name: "Junction Boxes", quantity: 35, unit: "Pieces" },
    ],
    updates: [
      {
        date: "07 Sep 2026",
        person: "Sanjay Singh",
        message: "Conduit installation started in Block A.",
      },
      {
        date: "05 Sep 2026",
        person: "Suresh Kumar",
        message: "Material received at site.",
      },
    ],
    issues: [
      {
        title: "Work slightly behind planned progress",
        priority: "Medium",
      },
    ],
  },

  {
    id: 3,
    title: "Plumbing Work",
    project: "Metro Heights",
    site: "Metro Heights - Main Site",
    assignedTo: "ABC Contractors",
    supervisor: "Vikash Singh",
    priority: "High",
    status: "Delayed",
    progress: 35,
    startDate: "01 Sep 2026",
    dueDate: "08 Sep 2026",
    description:
      "Complete plumbing installation for residential units and common areas.",
    materials: [
      { name: "PVC Pipes", quantity: 600, unit: "Meters" },
      { name: "Pipe Fittings", quantity: 120, unit: "Pieces" },
    ],
    updates: [
      {
        date: "07 Sep 2026",
        person: "Vikash Singh",
        message: "Contractor team is behind schedule.",
      },
      {
        date: "05 Sep 2026",
        person: "ABC Contractors",
        message: "Additional workers requested.",
      },
    ],
    issues: [
      {
        title: "Plumbing work is behind schedule",
        priority: "High",
      },
    ],
  },

  {
    id: 4,
    title: "Flooring Work",
    project: "Metro Heights",
    site: "Metro Heights - Main Site",
    assignedTo: "Site Team",
    supervisor: "Vikash Singh",
    priority: "Medium",
    status: "Pending",
    progress: 10,
    startDate: "10 Sep 2026",
    dueDate: "25 Sep 2026",
    description:
      "Flooring preparation and tile installation for completed residential units.",
    materials: [
      { name: "Floor Tiles", quantity: 2500, unit: "Pieces" },
      { name: "Tile Adhesive", quantity: 80, unit: "Bags" },
    ],
    updates: [],
    issues: [],
  },

  {
    id: 5,
    title: "Foundation Work",
    project: "Palm Residency",
    site: "Palm Residency - Site A",
    assignedTo: "Site Team",
    supervisor: "Suresh Kumar",
    priority: "High",
    status: "In Progress",
    progress: 55,
    startDate: "20 Aug 2026",
    dueDate: "18 Sep 2026",
    description:
      "Complete foundation work including reinforcement, shuttering and concrete.",
    materials: [
      { name: "Cement", quantity: 150, unit: "Bags" },
      { name: "Steel", quantity: 8, unit: "Tons" },
      { name: "Concrete", quantity: 40, unit: "Cubic Meter" },
    ],
    updates: [
      {
        date: "07 Sep 2026",
        person: "Suresh Kumar",
        message: "Foundation reinforcement work completed for Block A.",
      },
    ],
    issues: [
      {
        title: "Foundation work progressing slower than planned",
        priority: "High",
      },
    ],
  },

  {
    id: 6,
    title: "Excavation",
    project: "Palm Residency",
    site: "Palm Residency - Site A",
    assignedTo: "Arun Singh",
    supervisor: "Suresh Kumar",
    priority: "Medium",
    status: "In Progress",
    progress: 75,
    startDate: "18 Aug 2026",
    dueDate: "10 Sep 2026",
    description:
      "Complete excavation work required for the remaining foundation area.",
    materials: [],
    updates: [
      {
        date: "07 Sep 2026",
        person: "Arun Singh",
        message: "Excavation completed for the north section.",
      },
    ],
    issues: [],
  },
];
