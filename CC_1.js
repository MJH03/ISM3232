// U68997808
let Cost = 275
const tip = Cost <= 300 && 50 >= Cost ? Cost * 0.15 : Cost * 0.2

console.log (`The bill was ${Cost}, the tip is ${tip}, and the Grand Total comes to ${Cost + tip}`);
