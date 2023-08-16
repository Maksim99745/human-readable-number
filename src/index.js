module.exports = function toReadable (number) {

    let result;
  
    if (String(number).length === 3) {
      
    let num = String(number)[0];
    let num2 = String(number)[1];
    let num3 = String(number)[2];
      
        switch (num) {
          case '1': 
            result = 'one hundred';
            break;
          case '2': 
            result = 'two hundred';
            break;
          case '3': 
            result = 'three hundred';
            break;
          case '4': 
            result = 'four hundred';
            break;
          case '5': 
            result = 'five hundred';
            break;
          case '6': 
            result = 'six hundred';
            break;
          case '7': 
            result = 'seven hundred';
            break;
          case '8': 
            result = 'eight hundred';
            break;
          case '9': 
            result = 'nine hundred';
            break;
        }
  
        switch (num2 + num3) {
          case '10':
            return result = `${result} ${'ten'}`;
          case '11':
            return result = `${result} ${'eleven'}`;
          case '12':
            return result = `${result} ${'twelve'}`;
          case '13':
            return result = `${result} ${'thirteen'}`;
          case '14':
            return result = `${result} ${'fourteen'}`;
          case '15':
            return result = `${result} ${'fifteen'}`;
          case '16':
            return result = `${result} ${'sixteen'}`;
          case '17':
            return result = `${result} ${'seventeen'}`;
          case '18':
            return result = `${result} ${'eighteen'}`;
          case '19':
            return result = `${result} ${'nineteen'}`;
        }
  
        switch (num2) {
          case '2': 
            result = `${result} ${'twenty'}`;
            break;
          case '3': 
            result = `${result} ${'thirty'}`;
            break;
          case '4': 
            result = `${result} ${'forty'}`;
            break;
          case '5': 
            result = `${result} ${'fifty'}`;
            break;
          case '6': 
            result = `${result} ${'sixty'}`;
            break;
          case '7': 
            result = `${result} ${'seventy'}`;
            break;
          case '8': 
            result = `${result} ${'eighty'}`;
            break;
          case '9': 
            result = `${result} ${'ninety'}`;
            break;
        }
      
        switch (num3) {
          case '1': 
            result = `${result} ${'one'}`;
            break;
          case '2': 
            result = `${result} ${'two'}`;
            break;
          case '3': 
            result = `${result} ${'three'}`;
            break;
          case '4': 
            result = `${result} ${'four'}`;
            break;
          case '5': 
            result = `${result} ${'five'}`;
            break;
          case '6': 
            result = `${result} ${'six'}`;
            break;
          case '7': 
            result = `${result} ${'seven'}`;
            break;
          case '8': 
            result = `${result} ${'eight'}`;
            break;
          case '9': 
            result = `${result} ${'nine'}`;
            break;
        }
      } else if (String(number).length === 2) {
          let num2 = String(number)[0];
          let num3 = String(number)[1];
  
        switch (num2 + num3) {
          case '10':
            return result = `${'ten'}`;
          case '11':
            return result = `${'eleven'}`;
          case '12':
            return result = `${'twelve'}`;
          case '13':
            return result = `${'thirteen'}`;
          case '14':
            return result = `${'fourteen'}`;
          case '15':
            return result = `${'fifteen'}`;
          case '16':
            return result = `${'sixteen'}`;
          case '17':
            return result = `${'seventeen'}`;
          case '18':
            return result = `${'eighteen'}`;
          case '19':
            return result = `${'nineteen'}`;
        }
  
        switch (num2) {
          case '2': 
            result = `${'twenty'}`;
            break;
          case '3': 
            result = `${'thirty'}`;
            break;
          case '4': 
            result = `${'forty'}`;
            break;
          case '5': 
            result = `${'fifty'}`;
            break;
          case '6': 
            result = `${'sixty'}`;
            break;
          case '7': 
            result = `${'seventy'}`;
            break;
          case '8': 
            result = `${'eighty'}`;
            break;
          case '9': 
            result = `${'ninety'}`;
            break;
        }
      
        switch (num3) {
          case '1': 
            result = `${result} ${'one'}`;
            break;
          case '2': 
            result = `${result} ${'two'}`;
            break;
          case '3': 
            result = `${result} ${'three'}`;
            break;
          case '4': 
            result = `${result} ${'four'}`;
            break;
          case '5': 
            result = `${result} ${'five'}`;
            break;
          case '6': 
            result = `${result} ${'six'}`;
            break;
          case '7': 
            result = `${result} ${'seven'}`;
            break;
          case '8': 
            result = `${result} ${'eight'}`;
            break;
          case '9': 
            result = `${result} ${'nine'}`;
            break;
        } 
      } else if (String(number).length === 1) {
            let num3 = String(number)[0];
              switch (num3) {
                
              case '0':
                result = `${'zero'}`
                break;
              case '1': 
                result = `${'one'}`;
                break;
              case '2': 
                result = `${'two'}`;
                break;
              case '3': 
                result = `${'three'}`;
                break;
              case '4': 
                result = `${'four'}`;
                break;
              case '5': 
                result = `${'five'}`;
                break;
              case '6': 
                result = `${'six'}`;
                break;
              case '7': 
                result = `${'seven'}`;
                break;
              case '8': 
                result = `${'eight'}`;
                break;
              case '9': 
                result = `${'nine'}`;
                break;
            }
          
      }
    
    return result;
  }