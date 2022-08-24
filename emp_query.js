db.emp.insertMany([
    {
        _id:123,
        name:"Nisha",
        email:"nisha@gmail.com",
        deptno:10,
        salary:8000,
        address:{
            dno:777,
            street:"kattreguppe",
            city:"bengluru",
            pincode:560078
        },
        phone:[1111111111,2222222222]
    },
    {
        _id:124,
        name:"Abishek",
        email:"abhishek@gmail.com",
        deptno:20,
        salary:10000,
        address:{
            dno:888,
            street:"btm",
            city:"bengluru",
            pincode:560076
        },
        phone:[3333333333]
    },
    {
        _id:125,
        name:"Jyothsna",
        email:"jyostna@gmail.com",
        deptno:10,
        salary:30000,
        address:{
            dno:555,
            street:"MG Road",
            city:"Chennai",
            pincode:5562652
        },
        phone:[9999999999,4444444444]
    },
    {
        _id:126,
        name:"Priya",
        email:"priya@gmail.com",
        deptno:30,
        salary:15000,
        address:{
            dno:345,
            street:"Ameerpeth",
            city:"Hyderabad",
            pincode:565676
        },
        phone:[4545454545]
    },
    {
        _id:127,
        name:"Subodh",
        email:"subodh@gmail.com",
        deptno:30,
        salary:50000,
        address:{
            dno:234,
            street:"art street",
            city:"Chennai",
            pincode:575476
        },
        Phone:[3434343434]
        
    },
    {
        _id:128,
        name:"Manjunath",
        email:"manjunath@gmail.com",
        deptno:20,
        salary:34000,
        address:{
            dno:987,
            street:"food street",
            city:"bengluru",
            pincode:560176
        },
        phone:[7878787878,9898989898]
    },
])



//ELEMENT Operators
//$exists - Matches doccuments that havae specified value
//{filed}

//$type - selects documents if a field is of the specified type

//waqtd salary of all the emp who have salary as numnber datatype
//ans:>db.emp.find({salary:{$type:"number"}},{}).pretty()

//waqtd all emp who have field salary
//ans:  db.emp.find({salary:{$exists:true}},{}).pretty()

//waqtd name of first three emp
//ans:> db.emp.find({},{name:1}).limit(3).pretty()

//waqtd the number of emp present in the company
//ans:> db.emp.find({},{}).count()

//waqtd the heighest paid employee
//ans:> db.emp.find({salary:{$type:"number"}}).sort({salary:-1}).limit(1)

//waqts change the salary field to sal
//ans:> db.emp.update({},{$rename:{salary:"sal"}},{multi:true})

//waqt increment salary of all the emp by 1000 for diwali bonus
//ans:> db.emp.update({},{$inc:{sal:+1000.}},{multi:true})

//waqt provide an increment of 50% to all emp as new year bonus
//ans:

//waqt to ensure that all the employee will have min salary of 20000
//ans:db.emp.update({},{$max:{sal:20000}},{multi:true})

//waqt to ensure that all the emp will have max salary of 70000
//ans:> db.emp.update({},{$min:{sal:70000}},{multi:true})

//waqt increment sal by 500 whose id is 9999
//ans:> db.emp.update({_id:9999},{$inc:{sal:500}},{upsert:true})

//waqt remove the emp who is residing in chennai
//ans:> db.emp.remove({"address.city":"chennai"},{justOne:true})

//AGRREGATE 
//1. waqtd the no of emp in each dept
//ans > db.emp.aggregate([{$group:{_id:"$deptno",emp_count:{$sum:1}}}])

//2.waqtd average al in each dept
//ans > db.emp.aggregate([{$group:{_id:"$deptno",average_salary:{$avg:"$sal"}}}])

//3. waqtd highest salary in each dept
//ans > db.emp.aggregate([{$group:{_id:"$deptno",emp_count:{$max:"$sal"}}}])

//4. waqtd the city of emp who are paid heigher sal
//ans > db.emp.aggregate([{$group:{_id:"$address.city",salary:{$max:"$sal"}}}])
//ans > db.emp.aggregate([{$sort:{sal:1}},{$limit:1},{$project:{"address.city":1}}])