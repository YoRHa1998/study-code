"use strict";
function helloworld(person) {
    return "hello," + person;
}
var user = "world";
document.body.innerHTML = helloworld(user);
