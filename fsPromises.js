const fs = require('fs');
const util = require('util');

var read = util.promisify(fs.readFile);

Promise.all([
    read('home1.txt'),
read('home2.txt'),
read('home3.txt')]
).then(data =>{
    const [data1, data2, data3] = data;
    console.log(
        data1 + ' ' + data2 + ' ' + data3
    )

}).catch(err =>{
console.log(err);
})

    new Promise ((resolve, reject)=>{
        fs.readFile('./home1.txt', (err, data) => {
            if (err){
                reject(err);
            }else{
                resolve (data.toString());
            }
        })
    }).then(value =>{
        console.log(value);
        new Promise ((resolve, reject) =>{
            fs.readFile('./home2.txt', (err, data) => {
                if (err){
                    reject(err);
                }else{
                    resolve (data.toString());
                }
            })
        }).then( value =>{

            console.log(value)

        }).catch( err =>{
            console.log(err);
        })
        
    })
    .catch(err=>{
        console.log(err);
    })



   