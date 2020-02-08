import assert from "assert";
import { getObjectValueFromString } from "../../../../../../client/src/engine/utils/objects";

const testObject = {
  prop1: {
    prop0: "prop0",
    prop11: {
      prop111: "prop111",
      prop111a: "prop111a"
    },
    prop12: {
      prop111: "prop121",
      prop111a: "prop121a"
    }
  },
  prop2: {
    prop21: {
      prop211: "prop211",
      prop211a: "prop211a"
    },
    prop22: {
      prop211: "prop221",
      prop211a: "prop221a"
    }
  },
  prop3: {
    prop31: {
      prop311: "prop311",
      prop311a: "prop311a"
    },
    prop32: {
      prop211: "prop321",
      prop211a: "prop321a"
    }
  }
};

describe("Object", function() {
  it("should calculate a vector's magnitude", function() {
    assert.equal(
      getObjectValueFromString(testObject, "prop1.prop11.prop111"),
      "prop111"
    );
  });
});
