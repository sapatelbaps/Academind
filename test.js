var students = [
    { id: 619, name: "ron" },
    { id: 2, name: "carl" },
    { id: 1, name: "samy" },
    { id: 5, name: "phil" },
    { id: 11, name: "bob" },
    { id: 45, name: "alex" }
];
var result = students.filter(function (s) { return s.id.toString().includes('1'); }).sort();
result.forEach(function (s) {
    console.log(s.id);
});
