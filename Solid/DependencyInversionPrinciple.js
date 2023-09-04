
// **Dependency Inversion Principle**

// Statement: Entities must depend on abstractions, not on concretions. It states that the high-level module must not depend on the low-level module, but they should depend on abstractions.

// Example: Imagine you're a chef in a restaurant. You need ingredients to cook dishes, but you don't care where they come from—whether it's from a local market, a supermarket, or directly from a farm. You just need the ingredients. In this analogy, the chef is the high-level module, and the places where the ingredients come from are the low-level modules. The "ingredients" act as the abstraction that both depend upon.

// BAD

class InvoiceRequester {
    constructor() {
        this.REQ_METHODS = ['HTTP'];
    }

    requestItem(item) {
        // ...
    }
}

class InvoiceTracker {
    constructor(items) {
        this.items = items;

        // BAD: We have created a dependency on a specific request implementation.
        // We should just have requestItems depend on a request method: `request`
        this.requester = new InvoiceRequester();
    }

    requestItems() {
        this.items.forEach((item) => {
            this.requester.requestItem(item);
        });
    }
}

const badInvoiceTracker = new InvoiceTracker(['apples', 'bananas']);
badInvoiceTracker.requestItems();

// GOOD

class InvoiceTracker {
    constructor(items, requester) {
        this.items = items;
        this.requester = requester;
    }

    requestItems() {
        this.items.forEach((item) => {
            this.requester.requestItem(item);
        });
    }
}

class InvoiceRequesterV1 {
    constructor() {
        this.REQ_METHODS = ['HTTP'];
    }

    requestItem(item) {
        // ...
    }
}

class InvoiceRequesterV2 {
    constructor() {
        this.REQ_METHODS = ['WS'];
    }

    requestItem(item) {
        // ...
    }
}

// By constructing our dependencies externally and injecting them, we can easily
// substitute our request module for a fancy new one that uses WebSockets.
const goodInvoiceTracker = new InvoiceTracker(['apples', 'bananas'], new InvoiceRequesterV2());
goodInvoiceTracker.requestItems();