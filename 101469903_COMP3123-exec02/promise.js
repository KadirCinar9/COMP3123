var a= 100;
function makePromise(a){
var p1 = new Promise((resolve, reject) => {
    if (a == 10){   
        var r = {
            status: true,
            message: 'Success'
        }
        resolve(r);
    } else {
        reject('Failure-1');
    }
})

return p1;
}
makePromise(10).then((result) =>{
    console.log(result);    
}, (error) => {
    console.log(error);
}).finally(() => {
    console.log('Finally');
})