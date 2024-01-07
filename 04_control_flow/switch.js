// switch ()
//  {
//     case value:

//         break;

//     default:
//         break;
// }



// let month = 3
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter a month (1-12): ', (userInput) => {
  const monthNumber = parseInt(userInput);

  switch (monthNumber) {
    case 1:
      console.log('January');
      break;
    case 2:
      console.log('February');
      break;
    case 3:
      console.log('March');
      break;
    case 4:
      console.log('April');
      break;
    case 5:
      console.log('May');
      break;
    case 6:
      console.log('June');
      break;
    case 7:
      console.log('July');
      break;
    case 8:
      console.log('August');
      break;
    case 9:
      console.log('September');
      break;
    case 10:
      console.log('October');
      break;
    case 11:
      console.log('November');
      break;
    case 12:
      console.log('December');
      break;
    default:
      console.log('Invalid month number. Please enter a number between 1 and 12.');
  }

  rl.close();
});


