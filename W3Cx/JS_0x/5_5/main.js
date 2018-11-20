window.onload = init;

let contactMananger;

function init(){

    contactMananger = new ContactMananger();
    contactMananger.addTestData();
    contactMananger.printContactsToConsole();
    contactMananger.displayContatcsAsTable("contacts");
}

function submitForm(){

    let name = document.querySelector("#nameField");
    let eMail = document.querySelector("#emailField");

    let cNew = new Contact(name.value, eMail.value);
    contactMananger.addContact(cNew);
    contactMananger.displayContatcsAsTable("contacts");

    return false;
}

function saveList(){
    contactMananger.save();
}

function emptyList(){
    contactMananger.empty();
    contactMananger.displayContatcsAsTable("contacts");
}

function loadList(){
    contactMananger.load();
    contactMananger.displayContatcsAsTable("contacts");
}
class Contact {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
}

class ContactMananger {
    constructor() {
        this.listOfContacts = [];
    }

    addTestData(){
        var c1 = new Contact("Jimi Hendrix", "jimi@rip.com");
        var c2 = new Contact("Robert Fripp", "robert.fripp@kingcrimson.com");
        var c3 = new Contact("Angus Young", "angus@acdc.com");
        var c4 = new Contact("Arnold Schwarzenneger", "T2@terminator.com");

        this.addContact(c1);
        this.addContact(c2);
        this.addContact(c3);
        this.addContact(c4);

        this.sort();
    }

    addContact(contact) {
        this.listOfContacts.push(contact);
    }

    removeContact(contact) {
        for (let index = 0; index < this.listOfContacts.length; index++) {
            if (this.listOfContacts[i] === contact.email) {
                this.listOfContacts.splice(i, 1);
                break;
            }
        }
    }

    empty(){
        this.listOfContacts = [];
    }
    printContactsToConsole(){
        this.listOfContacts.forEach(function(contact){
            console.log(contact.name);
        });
    }

    sort(){
        this.listOfContacts.sort(ContactMananger.compareByName);
    }

    save(){
        console.log("save " + JSON.stringify(this.listOfContacts));
        localStorage.contacts = JSON.stringify(this.listOfContacts);
    }

    load(){
        if (localStorage.contacts !== undefined) {
            this.listOfContacts = JSON.parse(localStorage.contacts);
        }
    }

    static compareByName(p1, p2){
        if (p1.name < p2.name)
            return -1;
        
        if (p1.name > p2.name)
            return 1;
        // else
        return 0;
    }

    displayContatcsAsTable(idOfContainer){
        let container = document.querySelector("#" + idOfContainer);
        container.innerHTML = "";

        if (this.listOfContacts.length == 0) {
            container.innerHTML = "<p>Nothing to display</p>";
            return;
        }

        let table = document.createElement("table");

        this.listOfContacts.forEach(function (contact) {
            let row = table.insertRow();
            row.innerHTML = "<td>" + contact.name + "</td>"
                        +   "<td>" + contact.email + "</td>"
        });

        container.appendChild(table);
    }
}






// console.log("adding...");
// contactMananger.addContact(c1);
// contactMananger.addContact(c2);
// contactMananger.addContact(c3);
// contactMananger.addContact(c4);
// contactMananger.printContactsToConsole();

// console.log("sorting ...");
// contactMananger.sort();
// contactMananger.printContactsToConsole();

// console.log("saving ...");
// contactMananger.save();

// console.log("emptying ...");
// contactMananger.empty();
// contactMananger.printContactsToConsole();

// console.log("loading ...");
// contactMananger.load();
// contactMananger.printContactsToConsole();


