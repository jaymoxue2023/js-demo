const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const doubledNumbers = numbers.map((number) => number * 2);

console.log(doubledNumbers);

const companies = [
  { name: "Company One", category: "Finance", start: 1981, end: 2003 },
  { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
  { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
  { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
  { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
  { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
  { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
];

// get only company names
const companyNames = companies.map((company) => company.name);

console.log(companyNames);

// get an array with company name and category
const companyNamesAndCategories = companies.map((company) => {
  return {
    name: company.name,
    category: company.category,
  };
});

console.log(companyNamesAndCategories);

// chain map method
const squareRootAndDouble = numbers
  .map((number) => Math.sqrt(number))
  .map((number) => number * 2);

console.log(squareRootAndDouble);

const evenDoubledNumbers = numbers
  .filter((number) => number % 2 === 0)
  .map((number) => number * 2);

console.log(evenDoubledNumbers);
