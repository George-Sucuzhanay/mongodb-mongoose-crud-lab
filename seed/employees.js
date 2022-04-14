const db = require("../db")
const Employee = require("../models/employee")

db.on("error", console.error.bind(console, "MongoDB connection error: "))


const main = async () => {
    const employees = 
        [
            {
                first_name: "Bruno",
                last_name: "Galvao",
                email: "bruno.galvao@ga.co",
                job_title: "Software Engineering Instructor",
                address: {
                    street: "10 E 21St St",
                    city: "New York",
                    state: "NY",
                    zip: "10010"
                }
            },
            {
                first_name: "Jon",
                last_name: "Hernandez",
                email: "jonhernandez@theknowledgehouse.org",
                job_title: "Progressive Web Development Instructor",
                address: {
                    street: "120 Broadway",
                    city: "New York",
                    state: "NY",
                    zip: "10010"
                }

            },
            {
                first_name: "Wren",
                last_name: "Purcell",
                email: "wrenpurcell@theknowledgehouse.org",
                job_title: "Progressive Web Development TA",
                address: {
                    street: "150 Broadway",
                    city: "New York",
                    state: "NY",
                    zip: "10010"
                }

            },
        ];
    await Employee.insertMany(employees);  
    console.log("Created users!")
};

const run = async () => {
    await main();
    db.close()
};

run()