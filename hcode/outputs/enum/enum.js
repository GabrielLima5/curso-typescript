"use strict";
var Permission;
(function (Permission) {
    Permission[Permission["ADMIN"] = 0] = "ADMIN";
    Permission[Permission["USER"] = 1] = "USER";
    Permission[Permission["READONLY"] = 2] = "READONLY";
})(Permission || (Permission = {}));
console.log(Permission.ADMIN);
console.log(Permission.USER);
console.log(Permission.READONLY);
console.log(Permission["ADMIN"]);
