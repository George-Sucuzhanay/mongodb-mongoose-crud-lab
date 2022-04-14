const db = require("./db")
const Employee = require("./models/employee")

db.on("error", console.error.bind(console, "MongoDB connection error:"));

const findAll = async () => {
    const employees = await Employee.find();
    console.log("All users: ", employees)
};

// creating function for a CRUD application
// create, read, update and delete

const createUser = async () => {
    const employee = new Employee(
    {
        first_name: "George",
        last_name: "Sucuzhanay",
        email: "georgesucuzhanay@theknowledgehouse.org",
        job_title: "SWE Instructor",
        address: {
            street: "111 E 20th St",
            city: "New York",
            state: "NY",
            zip: "10010"
        }
    })
    await employee.save()
    console.log("Created user: ", employee)
}

const createThreeUsers = async () => {
    const employee = await Employee.insertMany([
    {
        first_name: "Mike",
        last_name: "Zamansky",
        email: "mz1332@huntersoe.org",
        job_title: "Daedalus CS Honors Instructor",
        address: {
            street: "555 W 20th St",
            city: "New York",
            state: "NY",
            zip: "10010"
        }
    },
    {
        first_name: "Elise",
        last_name: "Cappella",
        email: "elisecappella@someuniversity.org",
        job_title: "Applied Psychology Professor",
        address: {
            street: "111 E 20th St",
            city: "New York",
            state: "NY",
            zip: "10010"
        }
    },
    {
        first_name: "Julie",
        last_name: "Lizardo",
        email: "ljulie@nyu.edu.com",
        job_title: "CS Adjunct Professor",
        address: {
            street: "111 E 20th St",
            city: "New York",
            state: "NY",
            zip: "10010"
        }
    }])
    console.log("Created 3 new users:", employee)
}

const updateEmployee = async () => {
    const updated = await Employee.updateOne(
        { first_name: "Julie"}, {first_name: "Maria" });
        console.log("Updated employee:", updated);
}
const deleteEmployee = async () => {
    const deleted = await Employee.deleteOne(
        { first_name: "Bruno" }
    )
    console.log("User deleted:", deleted)
}
const firstLastNamesList = async() => {
    const list = await Employee.aggregate(
        [{ $project : { first_name : 1, last_name : 1 } }]
      );
    console.log("List of first and last names:", list)
}
const run = async() => {
    // await createUser()
    // await createThreeUsers()
    // await updateEmployee()
    // await deleteEmployee()
    // await findAll()
    // await firstLastNamesList()

    process.exit()
};
run()