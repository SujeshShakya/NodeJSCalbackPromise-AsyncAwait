const fs = require('fs');
const util = require('util');

const read = util.promisify(fs.readFile);
const someFunction = async () =>{
    // read('home1.txt').then(data =>{
    //     console.log(data);
    // });


    //async and await function
    const data = await read('home1.txt');
    console.log(data.toString());

    try{
        const [data1, data2, data3] = await 
        Promise.all(
            [
                read('./home1.txt'),
                read('./home2.txt'),
                read('./home3.txt')
            ]
        );
    
        console.log(data1 + ' ' + data2 + ' ' + data3);
    }
    catch(err){
    console.log(err);
    }
 

}

someFunction();