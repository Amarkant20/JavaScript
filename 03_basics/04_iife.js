// Immediately Function Expressions (IIFE)

/*
Global scope ke jo variable ya jo bhii decelaration hai us ploution ko hatane ke liye iife ka use krte hai  
*/
(function chai(){
    // named IIFE
    console.log(`DB connnected`);
})();

( (name) => {
    console.log(`DB connected two ${name}`);
})('Amarkant')
  