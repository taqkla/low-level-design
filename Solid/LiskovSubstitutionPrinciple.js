// **Liskov Substitution Principle**

// If class B is a subtype of Class A, then we should be able to replace the object of A with B without breaking the behaviour of the program.

// Subclass should extend the capability of parent class not narrow it down.

// Example: Imagine a parking lot that can accommodate regular cars.Now, if you replace a regular car with an electric car, the parking lot should still function correctly. The electric car should be able to fit into the parking space, and the parking lot should be able to provide a charging station.If replacing a regular car with an electric car breaks the parking lot's functionality (e.g., no charging stations), then the parking lot is not adhering to the Liskov Substitution Principle.

// BAD

class Invoice {
  constructor(invoice, databaseConnection, filePath) {
    this.invoice = invoice;
    this.databaseConnection = databaseConnection;
    this.filePath = filePath;
  }

  save() {
  }
}


// GOOD
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


const fileInvoice = new FileInvoiceDao("Audit", filePath);
const dbInvoice = new FileInvoiceDao("Incoming", databaseConnection);

fileInvoice.save();
dbInvoice.save();





class Ticket {
  constructor(showName, price) {
    this.showName = showName;
    this.price = price;
  }

  printTicket() {
    return `Show: ${this.showName}, Price: $${this.price}`;
  }
}

class VIPTicket extends Ticket {
  constructor(showName, price, extras) {
    super(showName, price);
    this.extras = extras;
  }

  // Additional functionality for VIP tickets
  printVIPDetails() {
    return `${this.printTicket()}, Extras: ${this.extras}`;
  }
}


function displayTicketInfo(ticket) {
  console.log(ticket.printTicket());
}

const regularTicket = new Ticket("Movie Night", 15);
const vipTicket = new VIPTicket("VIP Experience", 50, "Reserved Seating");

displayTicketInfo(regularTicket); // Output: Show: Movie Night, Price: $15
displayTicketInfo(vipTicket);     // Output: Show: VIP Experience, Price: $50

// Now, let's print VIP ticket details using the base class reference
displayTicketInfo(vipTicket);     // Output: Show: VIP Experience, Price: $50

// VIP tickets should be replaceable with regular tickets, but...
// The printVIPDetails method won't be available when using the base class reference






