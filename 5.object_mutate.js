function freezeObj () {
    "use strict";
    const math_constants = {
        pi: 3.14
    };

    Object.freeze(math_constants);
}
/* it will be error */
/*     try {
        math_constants.pi = 99;
    }
    catch( ex ) {
        console.log(ex);
    }
    return math_constants.pi;
} */
const pi = freezeObj();

console.log(pi);
