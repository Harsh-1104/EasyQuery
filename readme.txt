------------------------------------------------------
Topic       :   Database query easy retrival Database
Author      :   Gajjar Harsh
GitHub      :   https://github.com/Harsh-1104
Function    :   Create connection
            :   Retrive Database
            :   check data existance
------------------------------------------------------

How to use  : 
    Step 1 : create connection.

    Step 2 : make object that contain 2 param
                - table name
                - condition check
                Example:
                    var obj = {
                        table : "table_name",
                        paramstr : "[ All the condition like 'id = 10' OR true]"
                    }
                note : 'for all the data retrival wihtout any condition write true in paramstr'
    
    Step 3 : pass the object to a function as first argument 
    
    Step 4 : pass the function as second argument 
    
    Step 5 : load result or check it.

Some Example : 

const dq = require('EasyQuery');

// Create connection
dq.connection([Hostname], [Username], [Password], [Database_name]);

// Get table data
dq.tableData({
    table: "test1",
    paramstr: true
}, (result, err) => {
    if (err) return console.log("Error : " + err);
    if (result == 404) return console.log("Error : data not found");
    console.log(result);
})

// check data existiance
dq.checkData({
    table: "test1",     // Table name
    paramstr: "id = 1"  // All the condition we want to check
}, (result) => {
    if (result) {
        console.log(result);
    }
    else {
        console.log("error");
    }
})