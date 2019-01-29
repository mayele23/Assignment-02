let firstName = 'Mikyas';
let lastName = 'Ayele';
let age = '55';
let legalDrivingAge = age - 16;

if (age >= 16) {
  console.log(firstName + ' ' + lastName + ' ' + "can drive!");
} else
if (age < 15) {
  console.log(firstName + ' ' + lastName + ' ' + "can't drive");
}

{
console.log(firstName + ' ' + lastName + ' ' + "has been driving for" + ' ' +legalDrivingAge + ' ' + "years.");
}
