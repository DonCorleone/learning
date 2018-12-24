var db;
function createDatabase() {

    if (!window.indexedDB) {
        window.alert("Your browser doesn't support a stable version of IndexedDB. Such and such feature will not be available.");
    }

    // This is what our customer data looks like.
    var customerData = [
        { ssn: "444-44-4444", name: "Bill", age: 35, email: "bill@company.com" },
        { ssn: "555-55-5555", name: "Donna", age: 32, email: "donna@home.org" }
    ];
    var dbName = "CustomerDB";

    // Open database with version=2. Use integer valueonly ! Not 1.1, 1.2 etc.
    var request = indexedDB.open(dbName, 2);

    request.onerror = function (event) {
        // Handle errors.
        console.log("request.onerror errcode=" + event.target.error.name);
    };
    request.onupgradeneeded = function (event) {
        console.log("request.onupgradeneeded, we are creating a new version of the dataBase");
        db = event.target.result;

        // Create an objectStore to hold information about our customers. We're
        // going to use "ssn" as our key path because it's guaranteed to be
        // unique.
        var objectStore = db.createObjectStore("customers", { keyPath: "ssn" });

        // Create an index to search customers by name. We may have duplicates
        // so we can't use a unique index.
        objectStore.createIndex("name", "name", { unique: false });

        // Create an index to search customers by email. We want to ensure that
        // no two customers have the same email, so use a unique index.
        objectStore.createIndex("email", "email", { unique: true });

        // Store values in the newly created objectStore.
        for (var i in customerData) {
            objectStore.add(customerData[i]);
        }
    };

    request.onsuccess = function (event) {
        // Handle errors.
        console.log("request.onsuccess, database opened, now we can add / remove / look for data in it!");
        // The result is the database itself
        db = event.target.result;
    };

}

function addACustomer() {
    // 1 - get a transaction on the "customers" object store
    // in readwrite, as we are going to insert a new object
    var transaction = db.transaction(["customers"], "readwrite");
    // Do something when all the data is added to the database.
    // This callback is called after transaction has been completely
    // executed (committed)
    transaction.oncomplete = function (event) {
        alert("All done!");
    };
    // This callback is called in case of error (rollback)
    transaction.onerror = function (event) {
        console.log("transaction.onerror errcode=" + event.target.error.name);
    };
    // 2 - Init the transaction on the objectStore
    var objectStore = transaction.objectStore("customers");
    // 3 - Get a request from the transaction for adding a new object
    var request = objectStore.add({
        ssn: "123-45-6789",
        name: "Michel Buffa",
        age: 47,
        email: "buffa@i3s.unice.fr"
    });
    // The insertion was ok
    request.onsuccess = function (event) {
        console.log("Customer with ssn= " + event.target.result + " added.");
    };
    // the insertion led to an error (object already in the store,
    // for example)
    request.onerror = function (event) {
        console.log("request.onerror, could not insert customer, errcode = " + event.target.error.name);
    };
}

function addACustomerFromForm() {
    if (db === null || db === undefined) {
        alert('Database must be opened first, please click the Create CustomerDB Database first');
        return;
    }

    var transaction = db.transaction(["customers"], "readwrite");

    // Do something when all the data is added to the database.
    transaction.oncomplete = function (event) {
        console.log("All done!");
    };

    transaction.onerror = function (event) {
        console.log("transaction.onerror errcode=" + event.target.error.name);
    };

    var objectStore = transaction.objectStore("customers");

    var newCustomer = {};

    var ssn = document.querySelector("#ssn").value;
    var email = document.querySelector("#email").value;

    if (ssn === '' || email === '') {
        alert('Leider nein.')
    } else {
        newCustomer.ssn = ssn;
        newCustomer.name = document.querySelector("#name").value;
        newCustomer.age = parseInt(document.querySelector("#age").value, 0);
        newCustomer.email = email;
        alert('adding customer ssn=' + newCustomer.ssn);
        var request = objectStore.add(newCustomer);
    }


    request.onsuccess = function (event) {
        console.log("Customer with ssn= " + event.target.result + " added.");
    };
    request.onerror = function (event) {
        alert("request.onerror, could not insert customer, errcode = " + event.target.error.name + ". Certainly either the ssn or the email is already present in the Database");
    };

}

function removeACustomer() {
    if (db === null || db === undefined) {
        alert('Database must be opened first, please click the Create CustomerDB Database first');
        return;
    }

    var transaction = db.transaction(["customers"], "readwrite");

    // Do something when all the data is added to the database.
    transaction.oncomplete = function (event) {
        console.log("All done!");
    };

    transaction.onerror = function (event) {
        console.log("transaction.onerror errcode=" + event.target.error.name);
    };

    var objectStore = transaction.objectStore("customers");


    alert('removing customer ssn=444-44-4444');
    var request = objectStore.delete("444-44-4444");

    request.onsuccess = function (event) {
        console.log("Customer removed.");
    };

    request.onerror = function (event) {
        alert("request.onerror, could not remove customer, errcode = " + event.target.error.name + ". The ssn does not exist in the Database");
    };

} function updateACustomer() {
    if (db === null || db === undefined) {
        alert('Database must be opened first, please click the Create CustomerDB Database first');
        return;
    }

    var transaction = db.transaction(["customers"], "readwrite");

    // Do something when all the data is added to the database.
    transaction.oncomplete = function (event) {
        console.log("All done!");
    };

    transaction.onerror = function (event) {
        console.log("transaction.onerror errcode=" + event.target.error.name);
    };

    var objectStore = transaction.objectStore("customers");

    var customerToUpdate = {};
    customerToUpdate.ssn = document.querySelector("#ssn").value;
    customerToUpdate.name = document.querySelector("#name").value;
    customerToUpdate.age = document.querySelector("#age").value;
    customerToUpdate.email = document.querySelector("#email").value;
    alert('updating customer ssn=' + customerToUpdate.ssn);

    var request = objectStore.put(customerToUpdate);

    request.onsuccess = function (event) {
        console.log("Customer updated.");
    };
    request.onerror = function (event) {
        alert("request.onerror, could not update customer, errcode = " + event.target.error.name + ". The ssn is not in the Database");
    };

}

function searchACustomer() {
    if (db === null || db === undefined) {
        alert('Database must be opened first, please click the CreateCustomerDB Database first');
        return;
    }
    var transaction = db.transaction(["customers"], "readwrite");
    // Do something when all the data is added to the database.
    transaction.oncomplete = function (event) {
        console.log("All done!");
    };
    transaction.onerror = function (event) {
        console.log("transaction.onerror errcode=" + event.target.error.name);
    };
    var objectStore = transaction.objectStore("customers");
    // Init a customer object with just the ssn property initialized
    // from the form
    var customerToSearch = {};
    customerToSearch.ssn = document.querySelector("#ssn").value;
    alert('Looking for customer ssn=' + customerToSearch.ssn);
    // Look for the customer corresponding to the ssn in the object
    // store
    var request = objectStore.get(customerToSearch.ssn);

    request.onsuccess = function (event) {
        console.log("Customer found" + event.target.result.name);
        document.querySelector("#name").value = event.target.result.name;
        document.querySelector("#age").value = event.target.result.age;
        document.querySelector("#email").value
            = event.target.result.email;
    };

    request.onerror = function (event) {
        alert("request.onerror, could not find customer, errcode = " + event.target.error.name + " The ssn is not in the Database");
    }
}

function listAllCustomers(){
    if (db === null || db === undefined) {
        alert('Database must be opened first, please click the CreateCustomerDB Database first');
        return;
    }

    var transaction = db.transaction(["customers"]);

    transaction.oncomplete = function(event){
        alert("Tutto bene!");
    }

    transaction.onerror = function(event){
        alert("No Good");
    }

    var objectStore = transaction.objectStore("customers");

    objectStore.openCursor().onsuccess = function(event){
        var cursor = event.target.result;

        if (cursor) {
            alert(cursor.key + " " + cursor.value.name);
            cursor.continue();
        }else{
            alert ("finito");
        }
    }
}

function getLeylaByName() {
    
    if (db === null || db === undefined) {
        alert('DB Offline');
        return;
    }

    var transaction = db.transaction(["customers"]);

    transaction.oncomplete = function(event){
        alert("Tutto bene!");
    }

    transaction.onerror = function(event){
        alert("No Good");
    }

    var objectStore = transaction.objectStore("customers");

    var index = objectStore.index("name");

    index.get("LEYLA").onsuccess = function(event){
        alert("found Bill:" + event.target.result.name + " " + event.target.result.email);
    }
}


function getAllCustomersByName() {
    if (db === null || db === undefined) {
        alert('DB Offline');
        return;
    }

    var transaction = db.transaction(["customers"]);

    transaction.oncomplete = function(event){
        alert("Tutto bene!");
    }

    transaction.onerror = function(event){
        alert("No Good");
    }

    var objectStore = transaction.objectStore("customers");
    var index = objectStore.index("name");

    var keyRange = IDBKeyRange.only("LEYLA");
    index.openCursor(keyRange).onsuccess = function (event) {
        var cursor = event.target.result;
        if (cursor) {
            alert("Found Leyla " + cursor.value.email);    

            cursor.continue();        
        }
    }
}