function basicTeenager(age) {
  if(age >= 13 && age <= 19) {
    return ("You are a teenager!");
  }
}

function teenager(age) {
  if(age >= 13 && age <= 19) {
    return ("You are a teenager!");
  } else {
    return ("You are not a teenager");
  }
}

function ageChecker(age) {
  if(age >= 13 && age <= 19) {
    return ("You are a teenager!");
  } else if(age <= 12) {
    return ("You are a kid");
  } else {
    return ("You are a grownup");
  }
}

function ternaryTeenager(age) {
  return (age >= 13 && age <= 19 ? console.log("You are a teenager") : console.log("You are not a teenager") );

}

function switchAge(age) {

}

basicTeenager(15);
teenager(20);
ageChecker(30);
ternaryTeenager(19);