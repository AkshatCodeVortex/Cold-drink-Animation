const fs =require("fs");
const bioData ={
  name : "akshat verma",
  age : 18,
  city : "jaipur",
}
const jason = JSON.stringify(bioData);
fs.writeFile("newJason.jason",jason,(err)=>{
    console.log("done");
})
fs.readFile("newJason.jason","utf-8",(err,data)=>{
    const ordata =JSON.parse(data);
    console.log(data)
    console.log(ordata); 
})
fs.rename("newJason.jason","JASON.jason",()=>{

})