export const projects = [
  {
    id: 1,
    name: "Green Valley Residency",
    location: "Mohali",
    manager: "Amit Sharma",
    progress: 67,
    budget: 52000000,
    spent: 38000000,
    status: "On Track",

    projectType: "Residential",
    totalUnits: 120,

    startDate: "10 Jan 2026",
    expectedEndDate: "30 Jun 2027",

    description:
      "A large residential development project consisting of multiple residential buildings and modern amenities.",

    team: [
      {
        name: "Amit Sharma",
        role: "Project Manager",
      },
      {
        name: "Vikash Singh",
        role: "Site Manager",
      },
      {
        name: "Suresh Kumar",
        role: "Supervisor",
      },
    ],

    tasks: [
      {
        id: 1,
        title: "Complete 2nd Floor Brickwork",
        assignedTo: "Vikash Singh",
        priority: "High",
        status: "In Progress",
      },
      {
        id: 2,
        title: "Electrical Conduit Installation",
        assignedTo: "Suresh Kumar",
        priority: "Medium",
        status: "Pending",
      },
    ],

    materials: [
      {
        name: "Cement",
        quantity: 350,
        unit: "Bags",
        status: "Low Stock",
      },
      {
        name: "Steel",
        quantity: 18,
        unit: "Tons",
        status: "Available",
      },
      {
        name: "Bricks",
        quantity: 15000,
        unit: "Pieces",
        status: "Available",
      },
    ],

    expenses: [
      {
        category: "Materials",
        amount: 850000,
        date: "01 Sep 2026",
      },
      {
        category: "Labour",
        amount: 420000,
        date: "02 Sep 2026",
      },
      {
        category: "Contractor",
        amount: 650000,
        date: "03 Sep 2026",
      },
    ],

    issues: [
      {
        title: "Cement stock is below minimum level",
        priority: "High",
        status: "Open",
      },
      {
        title: "Electrical work behind schedule",
        priority: "Medium",
        status: "Open",
      },
    ],
  },

  {
    id: 2,
    name: "Metro Heights",
    location: "Chandigarh",
    manager: "Amit Sharma",
    progress: 42,
    budget: 40000000,
    spent: 43200000,
    status: "Delayed",

    projectType: "Residential",
    totalUnits: 96,

    startDate: "01 Mar 2026",
    expectedEndDate: "31 Dec 2027",

    description:
      "A multi-storey residential construction project located in Chandigarh.",

    team: [
      {
        name: "Amit Sharma",
        role: "Project Manager",
      },
      {
        name: "Vikash Singh",
        role: "Site Manager",
      },
    ],

    tasks: [
      {
        id: 1,
        title: "Plumbing Work",
        assignedTo: "ABC Contractors",
        priority: "High",
        status: "Delayed",
      },
      {
        id: 2,
        title: "Flooring Work",
        assignedTo: "Site Team",
        priority: "Medium",
        status: "Pending",
      },
    ],

    materials: [
      {
        name: "Cement",
        quantity: 250,
        unit: "Bags",
        status: "Low Stock",
      },
      {
        name: "Bricks",
        quantity: 15000,
        unit: "Pieces",
        status: "Available",
      },
    ],

    expenses: [
      {
        category: "Materials",
        amount: 1200000,
        date: "02 Sep 2026",
      },
      {
        category: "Labour",
        amount: 420000,
        date: "03 Sep 2026",
      },
    ],

    issues: [
      {
        title: "Project spending exceeded planned budget",
        priority: "High",
        status: "Open",
      },
      {
        title: "Plumbing work delayed",
        priority: "High",
        status: "Open",
      },
    ],
  },

  {
    id: 3,
    name: "Palm Residency",
    location: "Panchkula",
    manager: "Amit Sharma",
    progress: 31,
    budget: 30000000,
    spent: 28000000,
    status: "At Risk",

    projectType: "Residential",
    totalUnits: 72,

    startDate: "15 Apr 2026",
    expectedEndDate: "30 Nov 2027",

    description:
      "Residential construction project focused on affordable modern housing.",

    team: [
      {
        name: "Amit Sharma",
        role: "Project Manager",
      },
      {
        name: "Suresh Kumar",
        role: "Supervisor",
      },
    ],

    tasks: [
      {
        id: 1,
        title: "Foundation Work",
        assignedTo: "Site Team",
        priority: "High",
        status: "In Progress",
      },
    ],

    materials: [
      {
        name: "Cement",
        quantity: 180,
        unit: "Bags",
        status: "Low Stock",
      },
    ],

    expenses: [
      {
        category: "Contractor",
        amount: 650000,
        date: "03 Sep 2026",
      },
    ],

    issues: [
      {
        title: "Foundation work progressing slowly",
        priority: "High",
        status: "Open",
      },
    ],
  },
];
