// const loggedIn = true;
// const debitCard = false;

// if(loggedIn && debitCard){
//     console.log("you buy a car");
// }
// else{
//     console.log("you can't buy a car");
// }
 //truthy value
 //true,"0","false",[],{},function(){}

 //falsy value
 //false,0,-0,"",BigInt 0n,null,undefined,NaN

 //switch case is alternate for more than if else;

//  const option = 1;
//  switch (option) {
//     case 1:
//         console.log("hello 1");
//         break;
//     case 2:
//         console.log("hello 2");
//         // break;
//     case 3:
//         console.log("hello 3");
//         // break;
//     default:
//         console.log("hello default");
//         break;
//  }

// false == 0 -> true;
// false == '' -> true;
// 0 == ''->true;

//array ke liye  if(arr.length() == 0)
//obj ke liye  if(Object.keys(obj).length() == 0)

// nullish coalescing operator (??) null undefined
// it gives the first valid value 

// val1 = 5 ?? 10  //5
// val1 = null ?? 45  // 45
// val1 = undefined ?? 34  //34
// val1 = null ?? undefined ?? 20   //20
// val1 = null ?? undefined   //undefined
// val1 = undefined ??null     //null
// val1 = null ?? 3 ?? 45   //3

// val1 = 3 ?? null ?? 43  //3

// console.log(val1);

//ternary operation
//condition ? true : false

// const isYOuth = 19;
isYOuth >= 18 ? console.log("you can drive"):console.log("you can't drive ")