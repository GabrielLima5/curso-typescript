"use strict";
function showError(msg) {
    throw new Error(msg);
}
// console.log(showError("Algo deu errado"));
let n = 0;
function loopInfinito() {
    while (true) {
        console.log(n++);
    }
}
