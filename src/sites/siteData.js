export const sites = [
  {
    id: 1,
    name: "Green Valley - Site A",
    project: "Green Valley Residency",
    location: "Sector 85, Mohali",
    manager: "Vikash Singh",
    workersToday: 24,
    progress: 68,
    materials: 35,
    openIssues: 2,
    status: "Active",
    workToday: "2nd Floor Brickwork",
    startDate: "10 Jan 2026",

    workers: [
      { name: "Ramesh Kumar", role: "Mason", status: "Present" },
      { name: "Sanjay Singh", role: "Electrician", status: "Present" },
      { name: "Mohan Lal", role: "Helper", status: "Present" },
      { name: "Amit Verma", role: "Plumber", status: "Absent" },
    ],

    tasks: [
      {
        title: "2nd Floor Brickwork",
        assignedTo: "Ramesh Kumar",
        progress: 80,
        status: "In Progress",
      },
      {
        title: "Electrical Conduit",
        assignedTo: "Sanjay Singh",
        progress: 45,
        status: "In Progress",
      },
      {
        title: "Plumbing Installation",
        assignedTo: "Amit Verma",
        progress: 20,
        status: "Delayed",
      },
    ],

    materialsList: [
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

    issues: [
      {
        title: "Cement stock below minimum level",
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
    name: "Metro Heights - Main Site",
    project: "Metro Heights",
    location: "Sector 34, Chandigarh",
    manager: "Vikash Singh",
    workersToday: 31,
    progress: 42,
    materials: 28,
    openIssues: 4,
    status: "At Risk",
    workToday: "Plumbing & Flooring",
    startDate: "01 Mar 2026",

    workers: [
      { name: "Raj Kumar", role: "Mason", status: "Present" },
      { name: "Deepak Sharma", role: "Plumber", status: "Present" },
      { name: "Ravi Singh", role: "Helper", status: "Absent" },
    ],

    tasks: [
      {
        title: "Plumbing Work",
        assignedTo: "ABC Contractors",
        progress: 35,
        status: "Delayed",
      },
      {
        title: "Flooring Work",
        assignedTo: "Site Team",
        progress: 50,
        status: "In Progress",
      },
    ],

    materialsList: [
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

    issues: [
      {
        title: "Plumbing work delayed",
        priority: "High",
        status: "Open",
      },
      {
        title: "Material delivery delayed",
        priority: "Medium",
        status: "Open",
      },
    ],
  },

  {
    id: 3,
    name: "Palm Residency - Site A",
    project: "Palm Residency",
    location: "Sector 20, Panchkula",
    manager: "Suresh Kumar",
    workersToday: 18,
    progress: 31,
    materials: 19,
    openIssues: 3,
    status: "Active",
    workToday: "Foundation Work",
    startDate: "15 Apr 2026",

    workers: [
      { name: "Vijay Kumar", role: "Mason", status: "Present" },
      { name: "Sunil Kumar", role: "Helper", status: "Present" },
      { name: "Arun Singh", role: "Operator", status: "Present" },
    ],

    tasks: [
      {
        title: "Foundation Work",
        assignedTo: "Site Team",
        progress: 55,
        status: "In Progress",
      },
      {
        title: "Excavation",
        assignedTo: "Site Team",
        progress: 75,
        status: "In Progress",
      },
    ],

    materialsList: [
      {
        name: "Cement",
        quantity: 180,
        unit: "Bags",
        status: "Low Stock",
      },
      {
        name: "Steel",
        quantity: 8,
        unit: "Tons",
        status: "Available",
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
