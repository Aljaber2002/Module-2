"use strict";
const nameArray = (value) => {
    return [value];
};
console.log(nameArray({ name: 'jaber' }));
const tupleArray = (value1, value2) => {
    return [value1, value2];
};
console.log(tupleArray(12, { name: 'jaber' }));
const newStudent = (value) => {
    const cource = "programming hero";
    return Object.assign(Object.assign({}, value), { cource });
};
console.log(newStudent({ name: 'jaber hasan', age: 23 }));
