/*var obj = {
   		UserData:[
   		]
	};
*/
	var fs = require("fs");
	function printuserJson(){
	
		console.log("\n *START* \n");
		var content = fs.readFileSync("UserData.json");
		console.log("Output Content : \n"+ content);
		console.log("\n *EXIT* \n");
	}

	function incrementUsersCount(){
    content = fs.readFileSync('UserCount.json', 'utf8');
    obj = JSON.parse(content);
    obj.UserCount +=1;
    val = obj.UserCount;
    json = JSON.stringify(obj,0,1);
    fs.writeFile('UserCount.json', json, 'utf8')
    return val;
  }
	function newUser(user, pass){
		fs.readFileSync('UserData.json', 'utf8', function readFileCallback(err, data){
   		 if (err){
   	   	  console.log(err);
   	 		 } 
   		 else {
        UID = incrementUsersCount();
   		 	obj = JSON.parse(data); //now it an object
   		 	obj[UID] = ({username: user, password:pass, respval: 0}); //add some data
  		 	json = JSON.stringify(obj,0,1); //convert it back to json
  		 	fs.writeFile('UserData.json', json, 'utf8'); // write it back 
			}
		});
	}

	function findUser(user/*use this to specify username/data/orrespval*/){
		content = fs.readFileSync('UserData.json', 'utf8')
       s = null
       
   		 	obj = JSON.parse(content); //now it an object

        
   		 	for(var key in obj){

               if(user == obj[key].username)
               {
                  s = obj[key]
                  return s
                }

                  else{
                    s = "bad value"

                }	
        
        
			}
      return s
	}
  function getPassword(user){
    return findUser(user).password
  }

  function getrespval(user){
    return findUser(user).respval;
  }

  function PMrespval(user,sign){
    fs = require('fs')
    content =  fs.readFileSync('UserData.json','utf8')
    var users = JSON.parse(content);
    var target = findUser(user)
    for(key in users){

        databaseUsername = users[key].username
        currentUserData = target.username
        databaseUser = users[key]
        if(databaseUsername == currentUserData){ //verifies that the user in question and the user you 
          //are incrementing are the same user
          if(sign == "+"){
            console.log(users[key].respval)
            users[key].respval += 1
          }
          else if(sign == "-"){
            users[key].respval -= 1
          }
        }
    }
  //writes incremented value to the permanent json storage
  json = JSON.stringify(users,0,1)
  fs.writeFile('UserData.json', json, 'utf8');
  }

  function Login(user,pass){
    userFromJson = findUser(user)
    if(user == userFromJson.username && userFromJson.password == pass){

      return true;
    }
    else{
      return false;
    }
  }

console.log(Login("nil","pass"))
/*var exjson = {'key':'value'};
//define key value
exjson.key2 = {'key2':'value2'};
//define another key value*/
//obj.UserData.push({username: 'nil', password: 'nil', respval: 0});
//var json = JSON.stringify(obj);
//var fs = require('fs');
//fs.writeFile('UserData.json', json, 'utf8');
 //function readFileCallback(err, data)
  //    {
   /*
          if (){
              console.log(err);
             } 
          else {
   */
    /*         if (){
              console.log(err);
             } 
          else {
            */