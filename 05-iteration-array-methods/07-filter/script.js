const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evenNumbers = numbers.filter((number) => number % 2 === 0);

console.log(evenNumbers);

const evenNumbers2 = [];
numbers.forEach((number) => {
  if (number % 2 === 0) {
    evenNumbers2.push(number);
  }
});

console.log(evenNumbers2);

const companies = [
  { name: "Company One", category: "Finance", start: 1981, end: 2003 },
  { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
  { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
  { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
  { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
  { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
  { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
];

// get only retail companies
const retailCompanies = companies.filter(
  (company) => company.category === "Retail"
);

console.log(retailCompanies);

// get companies that started after 1990 and end before 2008
const companiesAfter1990 = companies.filter(
  (company) => company.start > 1990 && company.end < 2008
);

console.log(companiesAfter1990);
