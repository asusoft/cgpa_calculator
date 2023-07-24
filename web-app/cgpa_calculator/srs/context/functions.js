export const getCoefficient = (value) => {
   if (value >= 61 && value <= 75) {
      const baseGPA = 3.0;
      const increament = 0.07;
      const coefficient = baseGPA + (value - 61) * increament;

      return parseFloat(coefficient.toFixed(2))
   } else if (value >= 77 && value <= 78) {
      const baseGPA = 4.08;
      const increament = 0.07

      const coefficient = baseGPA + (value - 77) * increament;

      return parseFloat(coefficient.toFixed(2))
   } else if (value >= 79 && value <= 80) {
      const baseGPA = 4.23;
      const increament = 0.07

      const coefficient = baseGPA + (value - 79) * increament;

      return parseFloat(coefficient.toFixed(2))
   }  else if (value >= 81 && value <= 82) {
      const baseGPA = 4.38;
      const increament = 0.08

      const coefficient = baseGPA + (value - 81) * increament;

      return parseFloat(coefficient.toFixed(2))
   } else if (value >= 83 && value <= 84) {
      const baseGPA = 4.53;
      const increament = 0.08

      const coefficient = baseGPA + (value - 83) * increament;

      return parseFloat(coefficient.toFixed(2))
   }  else if (value >= 85 && value <= 86) {
      const baseGPA = 4.69;
      const increament = 0.07

      const coefficient = baseGPA + (value - 85) * increament;

      return parseFloat(coefficient.toFixed(2))
   }  else if (value >= 87 && value <= 88) {
      const baseGPA = 4.84;
      const increament = 0.07

      const coefficient = baseGPA + (value - 87) * increament;

      return parseFloat(coefficient.toFixed(2))
   } else if (value == 76) {
      return 4.0
   } else if (value == 89) {
      return 4.99
   }else if (value >= 90 && value <= 100) {
      return 5.0
   }

   switch (value) {
      case 81:
         return 4.38
      case 82:
         return 4.46
      case 83:
         return 4.53
      case 84:
         return 4.61
      case 85:
         return 4.69
      case 86:
         return 4.76
      case 87:
         return 4.84
      case 88:
         return 4.91
      case 89:
         return 4.99
   }
};

export const getGrade = (value) => {
   if (value >= 61 && value <= 67) {
      return 'E'
   } else if (value >= 68 && value <= 75) {
      return 'D'
   } else if (value >= 76 && value <= 82) {
      return 'C'
   } else if (value >= 83 && value <= 89) {
      return 'B'
   } else if (value >= 90 && value <= 100) {
      return 'A'
   }
};