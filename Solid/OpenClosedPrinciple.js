// **Open/Closed Principle**

// Definition:  Objects or entities should be open for extension but closed for modification.

// BAD
// var iceCreamFlavors=["chocolate","vanilla"];
// var iceCreamMaker={
//  makeIceCream (flavor) {
//   if(iceCreamFlavors.indexOf(flavor)>-1){
//    console.log("Great success. You now have ice cream.")
//   }else{
//    console.log("Epic fail. No ice cream for you.")
//   }
//  }
// }


// // GOOD
// var iceCreamFlavors=["chocolate","vanilla"];
// var iceCreamMaker={
//  makeIceCream (flavor) {
//   if(iceCreamFlavors.indexOf(flavor)>-1){
//    console.log("Great success. You now have ice cream.")
//   }else{
//    console.log("Epic fail. No ice cream for you.")
//   }
//  },
//  addFlavor(flavor){
//   iceCreamFlavors.push(flavor);
//  }
// }


// // Export the code 
// export default iceCreamMaker;



// BAD
// Initial State
class InvoiceDao {
    constructor(invoice) {
        this.invoice = invoice;
    }

    saveToDb() {
        // saves invoice to database.
    }
}


// Updated State
class invoice {
    constructor(invoice) {
        this.invoice = invoice;
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