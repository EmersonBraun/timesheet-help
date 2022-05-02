import { expect } from "chai";
import { describe, it } from "mocha";
import { DataProcessorFluentAPI } from "../src/dataProcessorFluentApi.js";
import { EXPECTED_FINAL_DATA, FORMAT_NAMES, PREPARE_TO_XLSX, REMOVE_UNUSEDS, VALID_MOCK } from "./mock/index.js";

describe("TextProcessorAPI", () => {
  it("#build", () => {
    const result = new DataProcessorFluentAPI(VALID_MOCK).build();
    
    expect(result).to.be.deep.equal(VALID_MOCK);
  });
  it("#removeUnuseds", () => {
    const result = new DataProcessorFluentAPI(VALID_MOCK)
      .removeUnuseds()
      .build();

    const expected = REMOVE_UNUSEDS

    expect(result).to.be.deep.equal(expected);
  });
  it("#formatNames", () => {
    const result = new DataProcessorFluentAPI(REMOVE_UNUSEDS)
      .formatNames()
      .build();

      const expected = FORMAT_NAMES

    expect(result).to.be.deep.equal(expected);
  });
  it("#prepareToXlsx", () => {
    const result = new DataProcessorFluentAPI(FORMAT_NAMES)
      .formatNames()
      .build();

    const expected = PREPARE_TO_XLSX

    expect(result.sheet).to.be.deep.equal(expected.sheet);
    expect(result.columns).to.be.deep.equal(expected.columns);
    expect(result.content).to.be.deep.equal(expected.content);
  });
  it("#all flow", () => {
    
    const result = new DataProcessorFluentAPI(VALID_MOCK)
      .removeUnuseds()
      .formatNames()
      .prepareToXlsx()
      .build();
      
    const expected = EXPECTED_FINAL_DATA

    expect(result.sheet).to.be.deep.equal(expected.sheet);
    expect(result.columns).to.be.deep.equal(expected.columns);
    expect(result.content).to.be.deep.equal(expected.content);
  });
});
