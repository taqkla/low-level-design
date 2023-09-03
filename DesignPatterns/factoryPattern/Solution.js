
class BoolConstraintEvaluator {
    constructor(data, constraintData) {
        this.data = data;
        this.constraintData = constraintData;
    }
    evaluate() {
        // evaluation logic
    }
}

class NumberConstraintEvaluator {
    constructor(data, constraintData) {
        this.data = data;
        this.constraintData = constraintData;
    }
    evaluate() {
        // evaluation logic
    }
}

class ListConstraintEvaluator {
    constructor(data, constraintData) {
        this.data = data;
        this.constraintData = constraintData;
    }
    evaluate() {
        // evaluation logic
    }
}

class StringConstraintEvaluator {
    constructor(data, constraintData) {
        this.data = data;
        this.constraintData = constraintData;
    }
    evaluate() {
        // evaluation logic
    }
}

class ConstraintEvaluatorFactory {
    constructor(data, expectedData) {
        this.data = data;
        this.expectedData = expectedData;
    }

    getConstraintEvaluatorInstance(constraintType) {
        if (constraintType == "Bool") {
            return new BoolConstraintEvaluator(this.data, this.expectedData);
        } else if (constraintType == "List") {
            return new ListConstraintEvaluator(this.data, this.expectedData);
        } else if (constraintType == "Number") {
            return new NumberConstraintEvaluator(this.data, this.expectedData);
        } else if (constraintType == "String") {
            return new StringConstraintEvaluator(this.data, this.expectedData);
        } else {
            // exception throw;
        }
    }
}

data = [true, false, true, true];
expectedData = [true, false, true, false];

const constraintEvaluatorFactory = ConstraintEvaluatorFactory(data, expectedData);
const constraintEvaluator = constraintEvaluatorFactory.getConstraintEvaluatorInstance("Bool");
constraintEvaluator.evaluate();