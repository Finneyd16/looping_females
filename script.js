const humans = [
  {
    id: 1,
    firstName: "John",
    lastName: "Doe",
    age: 28,
    gender: "Male",
    email: "john.doe@example.com",
    phone: "+1-202-555-0147",
    address: {
      street: "123 Main St",
      city: "New York",
      country: "USA"
    },
    occupation: "Software Engineer",
    hobbies: ["Reading", "Traveling", "Gaming"]
  },
  {
    id: 2,
    firstName: "Jane",
    lastName: "Smith",
    age: 25,
    gender: "Female",
    email: "jane.smith@example.com",
    phone: "+44-20-7946-0958",
    address: {
      street: "456 High St",
      city: "London",
      country: "UK"
    },
    occupation: "Graphic Designer",
    hobbies: ["Drawing", "Cycling", "Cooking"]
  },
  {
    id: 3,
    firstName: "Michael",
    lastName: "Lee",
    age: 32,
    gender: "Male",
    email: "michael.lee@example.com",
    phone: "+61-2-9374-4000",
    address: {
      street: "789 George St",
      city: "Sydney",
      country: "Australia"
    },
    occupation: "Doctor",
    hobbies: ["Hiking", "Photography"]
  },
  {
    id: 4,
    firstName: "Amina",
    lastName: "Yusuf",
    age: 29,
    gender: "Female",
    email: "amina.yusuf@example.com",
    phone: "+234-803-555-0199",
    address: {
      street: "12 Market Rd",
      city: "Lagos",
      country: "Nigeria"
    },
    occupation: "Accountant",
    hobbies: ["Cooking", "Dancing"]
  },
  {
    id: 5,
    firstName: "Carlos",
    lastName: "Gomez",
    age: 35,
    gender: "Male",
    email: "carlos.gomez@example.com",
    phone: "+34-91-555-7788",
    address: {
      street: "Calle Mayor 22",
      city: "Madrid",
      country: "Spain"
    },
    occupation: "Teacher",
    hobbies: ["Soccer", "Reading", "Music"]
  },
  {
    id: 6,
    firstName: "Sophia",
    lastName: "Chen",
    age: 27,
    gender: "Female",
    email: "sophia.chen@example.com",
    phone: "+86-10-5555-1234",
    address: {
      street: "88 Beijing Rd",
      city: "Shanghai",
      country: "China"
    },
    occupation: "Data Analyst",
    hobbies: ["Piano", "Yoga"]
  },
  {
    id: 7,
    firstName: "David",
    lastName: "Brown",
    age: 40,
    gender: "Male",
    email: "david.brown@example.com",
    phone: "+1-415-555-2233",
    address: {
      street: "500 Market St",
      city: "San Francisco",
      country: "USA"
    },
    occupation: "Entrepreneur",
    hobbies: ["Traveling", "Golf"]
  },
  {
    id: 8,
    firstName: "Fatima",
    lastName: "Khan",
    age: 31,
    gender: "Female",
    email: "fatima.khan@example.com",
    phone: "+92-300-555-9988",
    address: {
      street: "45 Mall Rd",
      city: "Lahore",
      country: "Pakistan"
    },
    occupation: "Doctor",
    hobbies: ["Gardening", "Painting"]
  },
  {
    id: 9,
    firstName: "Lucas",
    lastName: "Müller",
    age: 26,
    gender: "Male",
    email: "lucas.muller@example.com",
    phone: "+49-30-555-6677",
    address: {
      street: "Berliner Str. 77",
      city: "Berlin",
      country: "Germany"
    },
    occupation: "Mechanical Engineer",
    hobbies: ["Cycling", "Robotics"]
  },
  {
    id: 10,
    firstName: "Emily",
    lastName: "Johnson",
    age: 22,
    gender: "female",
    email: "emily.johnson@example.com",
    phone: "+1-617-555-4433",
    address: {
      street: "200 Park Ave",
      city: "Boston",
      country: "USA"
    },
    occupation: "Student",
    hobbies: ["Photography", "Writing", "Running"]
  }
];
// console.log(humans)

// humans.map((item)=>{
//     if(item.gender ==="Female" || item.gender ==="female"){
//         console.log(item)
//     }
        
// })

// humans.map((item)=>{
//     if(item.address.country === "Nigeria"){
//         item.address.landmark = "magodo"
//         console.log(item)
        
//     }
// })

// humans.map((item)=>{
//     if(item.hobbies.length === 2){
//         item.hobbies.push("programming")
//         console.log(item)

//     }
// })
humans.map((item)=>{
    if(item.age >= 20 && item.age <= 30 ){
        if(item.address.country === "Nigeria"){
            item.status = {
                accountType: "Loan",
                amount: "₦30000",
                due: "Jan 2nd 2026"
            }
        }
    if(item.address.country === "China"){
        item.status = {
            accountType: "Loan",
            amount: "¥30000",
            due: "Jan 2nd 2026"
        }
    }
    else(item.status = {
        accountType: "Loan",
        amount: "$30000",
        due: "Jan 2nd 2026"
    })
        console.log(item)

    }
})
