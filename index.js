const employees=[];
const fs=require('fs')
const xmljs=require('xml-js')
employees.push({
    id:1,
    name:'soufiane',
    salary:'30000'
});
employees.push({
    id:2,
    name:'hanane',
    salary:'20000'
});
employees.push({
    id:3,
    name:'yassine',
    salary:'11000'
});
const employeesList={employee:employees}
//Serialization
const datajson=JSON.stringify(employeesList)
const options={compact:true,spaces:4}
const xmldata='<root>'+xmljs.js2xml(employeesList,options)+'<\/root>'
fs.writeFileSync('data.json',datajson)
fs.writeFileSync('data.xml',xmldata)
