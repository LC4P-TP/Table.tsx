export const userData = {
  isSuccess: true,
  response: {
    name: "Name",
    surname: "Surname",
    isActivated: true,
    token: "",
    access: {
      id: 0,
      name: null,
      material: 15,
      specification: 15,
      materialSettings: 15,
      setupOrder: 15,
      order: 15,
      orderSettings: 15,
      income: 15,
      consumption: 15,
      stock: 15,
      logisticSettings: 15,
      measurements: 15,
      isHeadOfDepartment: true,
      isSupervisor: false,
      isManager: 15,
    },
    id: "00000000-0000-0000-0000-000000000000",
    notificationToken: "",
    departmentId: 1,
    department: "First",
  },
  error: null,
  statusCode: 200,
};

export const testData = {
  isSuccess: true,
  response: {
    array: [
      { id: 1, row1: "q1", row2: "11", row3: true, row4: "1", row5: 1 },
      { id: 2, row1: "w2", row2: "Beavers", row3: false, row4: "2", row5: 0 },
      {
        id: 3,
        row1: "e3",
        row2: "Goose-Hydra",
        row3: true,
        row4: "3",
        row5: 2,
      },
      { id: 4, row1: "r4", row2: "909", row3: true, row4: "4", row5: 1 },
    ],
    currentPage: 1,
    pageCount: 1,
  },
  error: null,
  statusCode: 200,
};

export const InboundSuppliesData = {
  isSuccess: true,
  response: {
    array: [
      {
        materialName: "Material name 3",
        articleNumber: "Article \u2116 3",
        orderNumber: "sdd",
        quantity: 12.0,
        receiveDate: "2024-11-01",
        orderIndex: 2,
        hasSample: false,
        cmrId: 11,
        unit: "kg",
        backlog: 0,
        supplier: "Supplier 3",
        warehouse: "surender",
        id: 6,
        isArchived: false,
        created: "01.11.2024 14:59:21",
        createdBy: null,
        lastUpdateBy: null,
        lastUpdate: null,
        updatedQuantity: 0,
      },
    ],
    currentPage: 1,
    pageCount: 1,
  },
  error: null,
  statusCode: 200,
};
