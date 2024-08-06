// How do you redeclare variables in a switch block without an error?

// The variables are not redeclared in the switch block.

let counter = 1;
switch (x) {
  case 0:
    let name;
    break;

  case 1:
    // let name; // SyntaxError for redeclaration.
    break;
}

let counter1 = 1;
switch (x) {
  case 0: {
    let name;
    break;
  }
  case 1: {
    let name; // No SyntaxError for redeclaration.
    break;
  }
}

