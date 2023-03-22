const schema=require('./employee_pb');
const fs=require('fs');

var e1=new schema.Employee();
e1.setId(1);
e1.setName("Soufiane");
e1.setSalary(9000);

var e2=new schema.Employee();
e2.setId(2);
e2.setName("hanane");
e2.setSalary(10000);

var e3=new schema.Employee();
e3.setId(3);
e3.setName("yassine");
e3.setSalary(30000);

let employees=new schema.Employees();
employees.addEmployee(e1);
employees.addEmployee(e2);
employees.addEmployee(e3);

const dataProto=employees.serializeBinary();
console.log(dataProto)
