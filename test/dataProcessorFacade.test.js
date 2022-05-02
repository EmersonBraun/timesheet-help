import { expect } from "chai";
import { describe, it } from "mocha";
import { DataProcessorFacade } from "../src/dataProcessorFacade.js";
import { EXPECTED_FINAL_DATA, VALID_MOCK } from "./mock/index.js";

describe("DataProcessorFacade", () => {
  it("#getDataFromText", () => {
    const result = new DataProcessorFacade(VALID_MOCK).getDataFromText();

    const expected = EXPECTED_FINAL_DATA;

    expect(result.sheet).to.be.deep.equal(expected.sheet);
    expect(result.columns).to.be.deep.equal(expected.columns);
    expect(result.content).to.be.deep.equal(expected.content);
  });
});
