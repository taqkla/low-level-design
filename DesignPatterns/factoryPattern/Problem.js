
class boolConstraintEvaluator {
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

data = [true, false, true, true];
expectedData = [true, false, true, false];

const listConstraintEvaluator = new ListConstraintEvaluator();
listConstraintEvaluator.evaluate();