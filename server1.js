const notes=require('./notes')
var _=require('lodash')
// var fs=require('fs');
// var os=require('os');
// var user=os.userInfo();
// console.log(user.username);

// fs.appendFile('greeting.txt','Hi '+ user.username+'!\n',()=>{
//   console.log('file is created');
// });

var data=['person','person',1,2,1,2,'name','age',2];
var filter=_.uniq(data);
console.log(filter);
// var age=notes.age;
// console.log(age);
// var addNumber=notes.addNumber(age+5,10);
// console.log(addNumber);
// console.log('server page is available');