//import fastify
const fastify = require('fastify')()

//import report file as student
const student = require('./report')

//report all student
fastify.get('/report', (req,reply) =>{
    reply.send(student)
})

//add new student 
fastify.post("/add", (request, reply) => {
    var user = request.body
    student.push(user)
    reply.send(student)
})

//delete a student using student id 
fastify.delete("/delete", (request, reply) => {
    var id = request.body
    d = student.findIndex(stu => stu.StudentID == id["StudentID"])
    student.splice(d,1)
    reply.send(student)
})

//Update a student detail using student id
fastify.post("/update", (request, reply) => {
    var response = request.body
    var data_key = Object.keys(response)
    i = student.findIndex(stu => stu.StudentID == response["StudentID"])
    student[i][data_key[1]] = response[data_key[1]]
    reply.send(student)
})

//function to listen port 5000
fastify.listen(5000, function (err, address){
    if(err) {
        console.log(err)
        process.exit(1)
    }
    else{
        console.log("Server is listening on Port 5000")
    }
})