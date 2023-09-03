// **Liskov Substitution Principle**

// If class B is a subtype of Class A, then we should be able to replace the object of A with B without breaking the behaviour of the program.

// BAD

class invoice {
  constructor(invoice, databaseConnection, filePath) {
    this.invoice = invoice;
    this.databaseConnection = databaseConnection;
    this.filePath = filePath;
  }

  save() {
  }
}

class InvoiceDao {
  save() {
    throw new Error("Method 'save()' must be implemented.");
  }
}

class FileInvoiceDao extends InvoiceDao {
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


const fileInvoice = new FileInvoiceDao("Audit", filePath);
const dbInvoice = new FileInvoiceDao("Incoming", databaseConnection);

fileInvoice.save(); // this can 
dbInvoice.save();





