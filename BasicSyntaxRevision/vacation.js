function vacation(groupcount, type, day) {
  let total = 0;
  let price = 0;
  switch (type) {
    case "Students":
      switch (day) {
        case "Friday":
          price = 8.45;
          break;
        case "Saturday":
          price = 9.8;
          break;
        case "Sunday":
          price = 10.46;
          break;
      }

      if (groupcount >= 30) {
        total += price * groupcount * 0.85;
      } else {
        total += price * groupcount;
      }
      break;

    case "Business":
      switch (day) {
        case "Friday":
          price = 10.9;

          break;
        case "Saturday":
          price = 15.6;
          break;
        case "Sunday":
          price = 16;
          break;
          
          
          }
          if (groupcount >= 100) {
            groupcount -= 10;
          total += price * groupcount;
          break;
      }

    case "Regular":
      switch (day) {
        case "Friday":
          price = 15;

          break;
        case "Saturday":
          price = 20;
          break;
        case "Sunday":
          price = 22.5;
          break;}
         
          if (groupcount >= 10 && groupcount <= 20) {
            total = groupcount * price * 0.95;
          } else {
            total = groupcount * price;
            break;
          }
      }
  
  console.log(`Total price: ${total.toFixed(2)}`)
}
vacation (30,

"Students",

"Sunday")
