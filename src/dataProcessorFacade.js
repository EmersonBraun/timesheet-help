import { DataProcessorFluentAPI } from "./dataProcessorFluentApi.js";

export class DataProcessorFacade {
  #dataProcessorFluentAPI;
  constructor(text) {
    this.#dataProcessorFluentAPI = new DataProcessorFluentAPI(text);
  }

  getDataFromText() {
    return this.#dataProcessorFluentAPI
      .removeUnuseds()
      .formatNames()
      .prepareToXlsx()
      .build();
  }
}
