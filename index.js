"use strict";
/*interface complexObject {
    name: string,
    age: number,
    isStudent: boolean,
    interests: string[],
    address: address,
    grades:grades,
    contect:contect



}

interface address {
    street: string,
    city: string,
    postalCode: string,



}
interface grades {
    grade: {
        math: math;
        science: science;
    };
}
interface math{
    midterm:number,
    final:number,

}
interface science{
    midterm:number,
    final:number,

}
interface contect{
    email:string,
    phone:string
}

const complexObject:complexObject = {
    name: "John Doe",
    age: 30,
    isStudent: false,
    interests: ["programming", "music", "hiking"],
    address: {
        street: "123 Main St",
        city: "Exampleville",
        postalCode: "12345",
    },
    grades: {
        math: {
            midterm: 85,
            final: 92,
        },
        science: {
            midterm: 78,
            final: 88,
        },
    },
    contact: {
        email: "john.doe@example.com",
        phone: "+1234567890",
    }}
    */
Object.defineProperty(exports, "__esModule", { value: true });
const jsonData = {
    "name": "John Doe",
    "age": 30,
    "isStudent": false,
    "hobbies": ["Reading", "Gaming", "Traveling"],
    "address": {
        "street": "123 Main St",
        "city": "Sampletown",
        "zipcode": "12345"
    }
};
const complexJsonData = {
    "person": {
        "name": "Alice",
        "age": 28,
        "isStudent": false,
        "hobbies": ["Reading", "Gaming"],
        "address": {
            "street": "456 Elm St",
            "city": "Another Town",
            "zipcode": "54321"
        }
    },
    "company": {
        "name": "TechCorp",
        "employees": [
            {
                "name": "Bob",
                "position": "Software Engineer",
                "yearsOfService": 5
            },
            {
                "name": "Carol",
                "position": "Data Analyst",
                "yearsOfService": 3
            }
        ],
        "location": {
            "street": "789 Oak St",
            "city": "Techville",
            "zipcode": "98765"
        }
    }
};
;
const complexData = {
    "students": [
        {
            "name": "Alice",
            "age": 20,
            "courses": [
                {
                    "name": "Mathematics",
                    "grade": "A"
                },
                {
                    "name": "History",
                    "grade": "B"
                }
            ],
            "address": {
                "street": "123 Elm St",
                "city": "Sampleville",
                "zipcode": "56789"
            }
        },
        {
            "name": "Bob",
            "age": 22,
            "courses": [
                {
                    "name": "Computer Science",
                    "grade": "B+"
                },
                {
                    "name": "Physics",
                    "grade": "A-"
                }
            ],
            "address": {
                "street": "456 Oak St",
                "city": "Techtown",
                "zipcode": "12345"
            }
        }
    ],
    "teachers": [
        {
            "name": "Mr. Smith",
            "subject": "Mathematics",
            "experienceYears": 15
        },
        {
            "name": "Mrs. Johnson",
            "subject": "History",
            "experienceYears": 12
        }
    ]
};
