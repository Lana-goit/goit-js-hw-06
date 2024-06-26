// У визначенні значення this є важливий нюанс. Значення this визначається не на момент оголошення функції (за винятком стрілкових функцій), а на момент її виклику. Іншими словами, this визначається тим, як саме функцію викликали, а не де вона була оголошена.
// У глобальному контексті, якщо функція виконується не в суворому режимі, this посилається на об'єкт window. Об'єкт window надає доступ до браузерних властивостей і функцій та є глобальним контекстом виконання для скриптів у браузері.

// У суворому режимі значення this у глобальному контексті завжди буде undefined.
// Значення this визначається на момент виклику функції, тобто this визначається тим, як саме функцію викликали.

// Бувають ситуації, коли функцію потрібно викликати в контексті об'єкта, навіть якщо функція не є методом цього об'єкта. Для цього у JavaScript існують спеціальні методи: call, apply і bind, які дозволяють вказати контекст виклику функції.

// Сигнатура — це ім'я методу і його параметри.
// За допомогою методу call ми можемо викликати функцію greet так, щоб значення this вказувало на потрібний об'єкт і використовувало значення його властивостей.Метод call дозволяє викликати функцію в контексті об'єкта, навіть якщо функція не є методом цього об'єкта, а також передає функції певні аргументи.
// Метод apply є аналогом методу call. Відмінність у тому, що в методі apply() синтаксис передачі аргументів вимагає масиву, навіть якщо аргументи функції — це окремі значення.

// Сигнатура методу apply**()** виглядає так:
// Метод apply викликає функцію foo таким чином, що значення this у функції буде посилатися на об'єкт obj і передасть елементи масиву як окремі аргументи arg1, arg2 тощо.Тобто різниця між call і apply полягає лише у формі передачі аргументів. Вибір між call і apply залежить від того, як саме ти хочеш передавати аргументи до функції в конкретній ситуації. У всіх інших аспектах вони працюють ідентично: викликають функцію в контексті зазначеного об'єкта і передають їй аргументи.Методи call і apply викликають функцію «на місці», тобто одразу.
// Метод bind створює і повертає нову функцію, яка має заздалегідь встановлений контекст, і ця нова функція може бути викликана пізніше з будь-якими аргументами.
// Коли ми використовуємо bind(), ми створюємо нову функцію greet. Ця нова функція завжди матиме правильний контекст і може використовувати властивість username об'єкта customer.
// Стрілочні функції:this усередині стрілки посилається на контекст батьківської області видимості, в якій вона була оголошена, і ніколи не змінюється.Якщо стрілка була оголошена в глобальному контексті, то this у ній буде містити посилання на window, незалежно від того, чи виконується скрипт у суворому режимі.Що треба запам’ятати про this у стрілочних функціях?

// 1.Контекст **this** усередині стрілочної функції визначається місцем її оголошення, а не виклику.
// 2.Стрілочні функції ігнорують наявність суворого режиму. Тому в глобальному контексті у стрілці завжди this посилається на об'єкт window.
// 3.Неможливо змінити значення this усередині стрілочних функцій після її оголошення. Методи call, apply і bind не впливають на значення this у стрілках.

// Задача 1. Акаунт користувача
// Перед звільненням розробник зламав вихідний код управління акаунтами користувачів нашого сервісу доставки їжі. Виконай рефакторинг методів об'єкта customer, розставивши відсутні this під час звернення до властивостей об'єкта.

// Використай цей стартовий код і виконай рефакторинг. Після оголошення об'єкта ми додали виклики методів. У консоль будуть виведені результати їх роботи. Будь ласка, нічого там не змінюй.

const customer = {
  username: "Mango",
  balance: 24000,
  discount: 0.1,
  orders: ["Burger", "Pizza", "Salad"],
  // Change code below this line
  getBalance() {
    return this.balance;
  },
  getDiscount() {
    return this.discount;
  },
  setDiscount(value) {
    this.discount = value;
  },
  getOrders() {
    return this.orders;
  },
  addOrder(cost, order) {
    this.balance -= cost - cost * this.discount;
    this.orders.push(order);
  },
  // Change code above this line
};

customer.setDiscount(0.15);
console.log(customer.getDiscount()); // 0.15
customer.addOrder(5000, "Steak");
console.log(customer.getBalance()); // 19750
console.log(customer.getOrders()); // ["Burger", "Pizza", "Salad", "Steak"]
