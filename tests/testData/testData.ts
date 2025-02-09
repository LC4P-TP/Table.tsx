export const userData = {
  isSuccess: true,
  response: {
    id: "00000000-0000-0000-0000-000000000000",
    name: "Name",
    surname: "Surname",
    token: "",
    access: {
      id: 0,
      name: null,
      testPage: true,
      testPageMenu: true,
      testPageSubMenu: true,
      supervisor: false,
    },
  },
  error: null,
  statusCode: 200,
};

export const testData = {
  isSuccess: true,
  response: {
    array: [
      {
        id: 1,
        row1: "q1",
        row2: "11",
        row3: true,
        row4: "1",
        row5: 1,
      },
      {
        id: 2,
        row1: "w2",
        row2: "Beavers",
        row3: false,
        row4: "2",
        row5: 0,
      },
      {
        id: 3,
        row1: "e3",
        row2: "Goose-Hydra",
        row3: true,
        row4: "3",
        row5: 2,
      },
      {
        id: 4,
        row1: "r4",
        row2: "909",
        row3: true,
        row4: "4",
        row5: 1,
      },
    ],
    currentPage: 1,
    pageCount: 1,
  },
  error: null,
  statusCode: 200,
};

export const TestPageMenuData = {
  isSuccess: true,
  response: {
    array: [
      {
        id: 6,
        column_1: "Item name 3",
        column_2: "Item \u2116 3",
        column_3: "2024-11-01",
        column_4: 12.0,
        unit: "kg",
        column_5: 23,
        column_6: true,
        column_7: "sdd",
        column_8: 2,
        column_9: 11,
        column_10: "Chillowieczka",
      },
    ],
    currentPage: 1,
    pageCount: 1,
  },
  error: null,
  statusCode: 200,
};

export const TestPageSubMenuData = {
  isSuccess: true,
  response: {
    array: [
      {
        id: 6,
        column_1: "Item name",
        column_2: "Item \u2116 D22",
        column_3: 1,
      },
    ],
    currentPage: 1,
    pageCount: 1,
  },
  error: null,
  statusCode: 200,
};
