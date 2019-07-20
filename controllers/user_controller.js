module.exports.getUser = function(req, res){
    var spawn = require("child_process").spawn; 
      
    // Parameters passed in spawn - 
    // 1. type_of_script 
    // 2. list containing Path of the script 
    //    and arguments for the script  
      
    // E.g : http://localhost:3000/name?firstname=Mike&lastname=Will 
    // so, first name = Mike and last name = Will 
    console.log(req.body)
    var process = spawn('python3',["./hello.py", 
                            req.body.firstname, 
                            req.body.lastname] ); 
  
    // Takes stdout data from script which executed 
    // with arguments and send this data to res object 
    process.stdout.on('data', function(data) { 
        res.render('users', {title: "Interact", data: data.toString()}); 
    } ) 
}