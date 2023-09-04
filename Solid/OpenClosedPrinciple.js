// **Open/Closed Principle**

// Definition:  Objects or entities should be open for extension but closed for modification.

// Example: Think of a coffee maker with a standard coffee - making process, but it allows you to add different flavours without having to modify its existing mechanism.You can add a vanilla or hazelnut flavour pod to make different kinds of coffee, but the basic coffee - making process remains the same.The coffee maker is "closed" for modification(you don't have to mess with its internals to make coffee), but it's "open" for extension(you can extend its functionality by adding new flavours).

// BAD
// Initial State
class InvoiceDao {
    constructor(invoice, databaseConnection) {
        this.invoice = invoice;
        this.databaseConnection = databaseConnection;
    }

    saveToDb() {
        // saves invoice to database.
    }
}


// Updated State
class invoice {
    constructor(invoice, databaseConnection, filePath) {
        this.invoice = invoice;
        this.databaseConnection = databaseConnection;
        this.filePath = filePath;
    }

    saveToDb() {
        // saves invoice to database.
    }

    // Additional feature / Modification
    saveToFile() {
        // saves invoice to file.
    }
}



class InvoiceDao {
    save() {
        throw new Error("Method 'save()' must be implemented.");
    }
}

class DatabaseInvoiceDao extends InvoiceDao {
    constructor(invoice, databaseConnection) {
        this.invoice = invoice;
        this.databaseConnection = databaseConnection;
    }

    save() {
        console.log(`Saving invoice with ID ${this.id} and name ${this.name}`)
        // Actual implementation to save the invoice to a database
    }
}

class FileInvoiceDao extends InvoiceDao {
    constructor(invoice, filePath) {
        this.invoice = invoice;
        this.filePath = this.filePath;
    }

    save() {
        console.log(`Saving invoice with ID ${this.id} and name ${this.name}`)
        // Actual implementation to save the invoice to a file
    }
}