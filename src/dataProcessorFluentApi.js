export class DataProcessorFluentAPI {
  #data;
  constructor(data) {
    this.#data = data;
  }

  #formatDate(date) {
    try {
      const regex = /(?<day>\d{2})\/(?<month>\d{2})\/(?<year>\d{4})/;
      const {
        groups: { day, month, year },
      } = regex.exec(date);
      return `${month}/${day}/${year}`;
    } catch (error) {
      return "";
    }
  }

  removeUnuseds() {
    const reportName = [Object.keys(this.#data)[0]];
    const data = this.#data[reportName].filter(({ A, B, C, D, E, F, G }) => {
      if (
        A !== "Total" &&
        ![
          "Access restricted",
          "Acceso restringido",
          "Acesso restrito",
        ].includes(B) &&
        !["Fix version", "Corregir versión", "Corrigir versão"].includes(B)
      ) {
        return {
          B,
          C,
          D,
          E,
          F,
          G,
        };
      }
    });
    this.#data = data;
    return this;
  }

  formatNames() {
    const data = this.#data.map(({ C, E, F, G }) => {
      return {
        Date: this.#formatDate(F),
        "Finance Project # ": 578,
        "Finance Project Name ": "Trilogy Go (Enhancements) 2022 Q1",
        Description: C,
        Task: G,
        Hours: E,
        Rate: "",
        Dept: "290 - Loyalty Development",
        "Customer (if applicable) ": "",
      };
    });
    this.#data = data;
    return this;
  }

  prepareToXlsx() {
    const data = [
      {
        sheet: "Sheet1",
        columns: [
          { label: "Date", value: "Date" },
          { label: "Finance Project # ", value: "Finance Project # " },
          { label: "Finance Project Name ", value: "Finance Project Name " },
          { label: "Description", value: "Description" },
          { label: "Task", value: "Task" },
          { label: "Hours", value: "Hours" },
          { label: "Rate", value: "Rate" },
          { label: "Dept", value: "Dept" },
          {
            label: "Customer (if applicable) ",
            value: "Customer (if applicable) ",
          },
        ],
        content: this.#data,
      },
    ];
    this.#data = data;
    return this;
  }

  build() {
    return this.#data;
  }
}
