// let balance = 10000;
// const payment = 2000;

// console.log(
//   `загальна вартість заказу ${payment} кредитів. Перевіряєм доступність коштів на вашому рахунку`
// );
// if (balance >= payment) {
//   balance = balance - payment;
//   console.log(`на рахунку лишилось ${balance} кредитів`);
// } else {
//   console.log(`на рахунку не достатньо кредитів`);
// }
// console.log("операція завершена");

const totalSpent = 2000;
let payment2 = 500;
let discount = 0;
let discountPercent;

if (totalSpent <= 100) {
  console.log("у вас немає партнерської скидки");
  discountPercent = "0%";
} else if (totalSpent >= 100 && totalSpent <= 1000) {
  console.log("ви бронзовий партнер зі знижкою 2%");
  discount = 0.02;
  discountPercent = "2%";
} else if (totalSpent > 1000 && totalSpent < 5000) {
  console.log("ви срібний партнер зі знижкою 5%");
  discount = 0.05;
  discountPercent = "5%";
} else if (totalSpent >= 5000) {
  console.log("ви золотий партнер зі знижкою 10%");
  discount = 0.1;
  discountPercent = "10%";
}

let totalPeyment = payment2 - payment2 * discount;

console.log(
  `Оформлюєм замовлення на сумму ${totalPeyment} з урахуванням знижки ${discountPercent}`
);
