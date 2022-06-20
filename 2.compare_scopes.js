function checkScope() {
    "use strict";
    let i = "function scope";

    if (true) {
        let i = "block scope";
        console.log("Block Scope i is: ", i);
    }
    console.log("Function Scope i is: ", i);
    return i;
}

checkScope();