let array1 = [1]

function prom1 (){
  return new Promise(function(resovle){
    setTimeout(()=>{
      array1.push('a');
      resovle(array1);
    }, 1000);
  })
}

function prom2 (){
  return new Promise(function(resovle, reject){
    setTimeout(()=>{
      array1.push('b');
      resovle(array1);
    }, 1000);
  })
}

function prom3 (){
  return new Promise(function(resovle){
    console.log(array1)
  })
}

let pro = new Promise(function(resolve, reject){
  resolve();
})

pro.then(prom1)
	 .then(prom2)
	 .then(prom3)	// [1, a, b]
