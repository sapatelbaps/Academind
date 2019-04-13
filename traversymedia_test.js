const companies = [
    {name: "Company One", category: "Finance", start: 1981, end: 2004},
  {name: "Company Two", category: "Retail", start: 1992, end: 2008},
  {name: "Company Three", category: "Auto", start: 1999, end: 2007},
  {name: "Company Four", category: "Retail", start: 1989, end: 2010},
  {name: "Company Five", category: "Technology", start: 2009, end: 2014},
  {name: "Company Six", category: "Finance", start: 1987, end: 2010},
  {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
  {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
  {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// forEach - used for iteration.
companies.forEach(function(company){
    //console.log(company.name);
});

// filter - used to filter array.
console.log("Tech companies");
var techCompanies = companies.filter(company => company.category === "Technology");
techCompanies.forEach(c => console.log(c.name));

console.log("Companies after Nineties.");
var recentCompanies = companies.filter(c=>c.start > 1990);
recentCompanies.forEach(c=>console.log(c.start));

console.log("Adult age numbers:");
var adult = ages.filter(a=>a > 18);
adult.forEach(m => console.log(m));

// sort - used to sort array based on some property. Sorting on numeric array does not work as normally expected.
console.log("Sorted Companies of nineties.");
var companiesOfNineties = companies.sort(function(c1,c2){
  if (c1.start > c2.start) {
    return 1;
  } else return -1;
});
companiesOfNineties.forEach(c=>console.log(c.start));

// does not sort numbers as expected. Considers first digit only first time.
var numSort1 = ages.sort();
numSort1.forEach(n=>console.log(n));

var numSort2 = ages.sort((a,b) => (a > b ? 1 : -1));
numSort2.forEach(n=>console.log(n));

// map - Used to generate new array based on existing array by applying any operation or conditions.
var mappedArr1 = companies.map(function(company){
  return company.name;
});
mappedArr1.forEach(item => console.log(item));

var mappedArr2 = companies.map(function(company){
  return company.category;
});
mappedArr2.forEach(item => console.log(item));

console.log("Mapped Array 3");
var mappedArr3 = companies.map(function(company){
  return '${company.name} (${company.category}) : [${company.start} - ${company.end}]';
});
mappedArr3.forEach(item => console.log(item));

const testMap = companies.map(function(company) {
  return '${company.name} [${company.start} - ${company.end}]';
});
testMap.forEach(m => console.log(m));

// reduce - used to maintain total of items and iterate through all items FROM SPECIFIC INDEX
// Get total years for all companies

// const totalYears = companies.reduce(function(total, company) {
//   return total + (company.end - company.start);
// }, 0);

const totalYears = companies.reduce((total, company) => total + (company.end - company.start), 0);
console.log(totalYears);

// Combine Methods
const combined = ages
  .map(age => age * 2)
  .filter(age => age >= 40)
  .sort((a, b) => a - b)
  .reduce((a, b) => a + b, 0);

console.log(combined);
