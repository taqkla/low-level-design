// **Interface Segregation Principle**

// A client should never be forced to implement an interface that it doesn’t use, or clients shouldn’t be forced to depend on methods they do not use.

// BAD

class InvoiceDao {
  printInvoice();
  SaveInvoice();
  calculateTax();
}

class InvoiceDao extends InvoiceDao {
  constructor(invoice) {
    this.invoice = invoice;
  }

  printInvoice() {
    // print the invoice
  }

  saveInvoice() {
    // save the invoice.
  }

  calculateTax() {
    // calculate the tax.
  }
}


// GOOD

class InvoicePrinter {
  printInvoice();
}

// Interface to save invoice
class InvoiceDao {
  SaveInvoice();
}

// Interface for handling taxes on an invoice
class TaxCalculation {
  calculateTax();
}

// Implement all these interfaces individually.