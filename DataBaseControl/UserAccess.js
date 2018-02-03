var obj = {
   		UserData:[
   		]
	};

	var fs = require("fs");
	function printuserJson(){
	
		console.log("\n *START* \n");
		var content = fs.readFileSync("UserData.json");
		console.log("Output Content : \n"+ content);
		console.log("\n *EXIT* \n");
	}

	
	function newUser(user, pass){
		fs.readFile('UserData.json', 'utf8', function readFileCallback(err, data){
   		 if (err){
   	   	  console.log(err);
   	 		 } 
   		 else {
   		 	obj = JSON.parse(data); //now it an object
   		 	obj.UserData.push({username: user, password:pass, respval: 0}); //add some data
  		 	json = JSON.stringify(obj,0,1); //convert it back to json
  		 	fs.writeFile('UserData.json', json, 'utf8'); // write it back 
			}
		});
	}
	function findUser(user){
		content = fs.readFile('UserData.json', 'utf8', function readFileCallback(err, data){
   		 if (err){
   	   	  console.log(err);
   	 		 } 
   		 else {
   		 	obj = JSON.parse(data); //now it an object
   		 	for(var key in obj){
   		 		console.log(obj.username);
   		 		a = obj[key];
   		 		for(var obja in key){
   		 			console.log(key)

   		 		}
   		 	}
			}
		});

	}

findUser("asd")
	







/*var exjson = {'key':'value'};
//define key value
exjson.key2 = {'key2':'value2'};
//define another key value*/
//obj.UserData.push({username: 'nil', password: 'nil', respval: 0});
//var json = JSON.stringify(obj);
//var fs = require('fs');
//fs.writeFile('UserData.json', json, 'utf8');

