export const roleAccess = {
  all: ["Branch User", "Field Officer", "Admin User", "Super User"],
  admin: ["Admin User", "Super User"],
};

export const roleRouteAccess = {
  ENTERPRISE_ADMIN: [
    "/home/upload-api/page/",
    "/home/document-api/page/",
    "/home/document-qc/page/",
    "/home/api-logs/page/",
    "/home/ocr-failure/page/",
    "/home/configuration",
    "/home/training/",
    "/home/admin-panel/manageUsers",
    "/home/my-account",
  ],
  ENTERPRISE_SUPERVISOR: [
    "/home/upload-api/page/",
    "/home/document-api/page/",
    "/home/document-qc/page/",
    "/home/configuration/vendor",
    "/home/training/",
    "/home/my-account",
  ],
  SUPER_ADMIN: ["/home/configuration", "/home/admin-panel", "/home/my-account"],
  ENTERPRISE_INDEXER: [
    "/home/upload-api/page/",
    "/home/document-api/page/",
    "/home/my-account",
  ],
};

export const headerTabs = [
  {
    id: 0,
    label: "Home",
    route: "/app/home",
    type: "home",
    allowedRoles: roleAccess.all,
    disabled: false,
  },
  {
    id: 1,
    label: "Demographics",
    route: "/app/demographics",
    type: "demographics",
    allowedRoles: roleAccess.all,
    disabled: false,
  },
  {
    id: 2,
    label: "Financial",
    route: "/app/financial",
    type: "financial",
    allowedRoles: roleAccess.all,
    disabled: false,
  },

  {
    id: 3,
    label: "Geographical",
    route: "/app/geographical",
    type: "geographical",
    allowedRoles: roleAccess.all,
    disabled: false,
  },
  {
    id: 4,
    label: "KPI",
    route: "/app/kpi",
    type: "kpi",
    allowedRoles: roleAccess.all,
    disabled: false,
  },
  {
    id: 5,
    label: "Payroll Compliance",
    route: "/app/payrollCompliance",
    type: "payrollCompliance",
    allowedRoles: roleAccess.all,
    disabled: false,
  },
];

export const moduleList = [
  "Contractor Compliance",
  "Contractor Compliance PE",
  "Office Establishment",
  "Factory",
];

export const complianceKPIs = [
  "Licenses & Registrations",
  "Notices & Abstracts",
  "Remittances",
  "Returns",
  "Statutory Registers",
];

export const levels = [
  {
    label: "Group",
    actionId: 1,
    allowedModules: [
      "Contractor Compliance",
      "Office Establishment",
      "Contractor Compliance PE",
      "Factory",
    ],
  },
  {
    label: "Account",
    actionId: 2,
    allowedModules: [
      "Contractor Compliance",
      "Office Establishment",
      "Contractor Compliance PE",
      "Factory",
    ],
  },
  {
    label: "Hierarchy Level",
    actionId: 3,
    allowedModules: ["Contractor Compliance", "Contractor Compliance PE"],
  },
  {
    label: "Zone",
    actionId: 4,
    allowedModules: [
      "Contractor Compliance",
      "Office Establishment",
      "Contractor Compliance PE",
      "Factory",
    ],
  },
  {
    label: "Region",
    actionId: 5,
    allowedModules: [
      "Contractor Compliance",
      "Office Establishment",
      "Contractor Compliance PE",
      "Factory",
    ],
  },
  {
    label: "State",
    actionId: 6,
    allowedModules: [
      "Contractor Compliance",
      "Office Establishment",
      "Contractor Compliance PE",
      "Factory",
    ],
  },
  {
    label: "Site/ Branch/ Factory",
    actionId: 7,
    allowedModules: [
      "Contractor Compliance",
      "Office Establishment",
      "Contractor Compliance PE",
      "Factory",
    ],
  },
  {
    label: "Contractor",
    actionId: 8,
    allowedModules: [
      "Contractor Compliance",
      "Office Establishment",
      "Contractor Compliance PE",
      "Factory",
    ],
  },
];
