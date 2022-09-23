function nextday (year,month,day){
    let nextday=day+1
     switch (month) {
       case 1:
         if (nextday > 31) {
           nextday = 1;
           month = 2;
         }
         break;
       case 2:
         if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
           if (nextday > 29) {
             nextday = 1;
             month = 3;
           }
         } else if (nextday > 28) {
           nextday = 1;
           month = 3;
         }
         break;
       case 3:
         if (nextday > 31) {
           nextday = 1;
           month = 4;
         }
         break;
       case 4:
         if (nextday > 30) {
           nextday = 1;
           month = 5;
         }
         break;
       case 5:
         if (nextday > 31) {
           nextday = 1;
           month = 6;
         }
         break;
       case 6:
         if (nextday > 30) {
           nextday = 1;
           month = 7;
         }
         break;
       case 7:
         if (nextday > 31) {
           nextday = 1;
           month = 8;
         }
         break;
         case 8:
         if (nextday > 31) {
           nextday = 1;
           month = 9;
         }
         break;
         case 9:
            if (nextday > 30) {
              nextday = 1;
              month = 10;
            }
            break;
        case 10:
            if (nextday > 30) {
              nextday = 1;
              month = 11;
            }
            break;
            case 11:
                if (nextday > 30) {
                  nextday = 1;
                  month = 12;
                }
                break;
       case 12:
         if (nextday > 31) {
           nextday = 1;
           month = 1;
           year = year + 1;
         }
         break;
     }
     console.log(`${year}-${month}-${nextday}`)
    }

nextday (1801,3,21)