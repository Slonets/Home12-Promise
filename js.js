async function GiveTabel() {
  let urlfakeUsers = "https://jsonplaceholder.typicode.com/users";

  let result = await fetch(urlfakeUsers);

  const users = await result.json();

  let tableBody = document.getElementById("tbodyuser");


  for (var i = 0; i < users.length; i++) {
    var user = users[i];
    var row = tableBody.insertRow();
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);

    cell1.textContent = user.id;
    cell2.textContent = user.name;
    cell3.textContent = user.address.city;
    cell4.textContent = user.email;


    // Додайте обробник подій onclick для user.name
    cell2.addEventListener('onclick', function () {
      handleUserNameClick(user);
    });

    // // Отримати існуючий рядок (виберіть метод відповідно до вашої структури HTML)
    // var row = tableBody.rows[i];

    // // Отримати комірки в рядку
    // var cell1 = row.cells[0];
    // var cell2 = row.cells[1];
    // var cell3 = row.cells[2];
    // var cell4 = row.cells[3];

    // // Заповнити комірки даними користувача
    // cell1.textContent = user.id;
    // cell2.textContent = user.name;
    // cell3.textContent = user.address.city;
    // cell4.textContent = user.email;

  }
}

window.onload = function () {
  GiveTabel();
};

// Функція, яка буде викликатися при кліку на поле user.name
function handleUserNameClick(user) {

  let seachDiv = document.getElementById("list_case2");

  switch (user.id) {
    case 1:
      // Створити HTML-рядок зі списком li
      var listItems = "<li>Встати</li><li>Вмитися</li><li>Подивитися телевізор</li>";

      // Вставити HTML-рядок в елемент <ul>
      ulElement.innerHTML = listItems;
      break;

    case 2:
      // Створити HTML-рядок зі списком li
      var listItems = "<li>Прокинутися</li><li>Одягнутися</li><li>Піти гуляти</li>";

      // Вставити HTML-рядок в елемент <ul>
      ulElement.innerHTML = listItems;
      break;

    case 3:
      // Створити HTML-рядок зі списком li
      var listItems = "<li>Встати</li><li>Вмитися</li><li>Подивитися телевізор</li>";

      // Вставити HTML-рядок в елемент <ul>
      ulElement.innerHTML = listItems;
      break;

    case 4:
      // Створити HTML-рядок зі списком li
      var listItems = "<li>Встати</li><li>Вмитися</li><li>Подивитися телевізор</li>";

      // Вставити HTML-рядок в елемент <ul>
      ulElement.innerHTML = listItems;
      break;

    case 5:
      // Створити HTML-рядок зі списком li
      var listItems = "<li>Встати</li><li>Вмитися</li><li>Подивитися телевізор</li>";

      // Вставити HTML-рядок в елемент <ul>
      ulElement.innerHTML = listItems;
      break;

    case 6:
      // Створити HTML-рядок зі списком li
      var listItems = "<li>Встати</li><li>Вмитися</li><li>Подивитися телевізор</li>";

      // Вставити HTML-рядок в елемент <ul>
      ulElement.innerHTML = listItems;
      break;

    case 7:
      // Створити HTML-рядок зі списком li
      var listItems = "<li>Встати</li><li>Вмитися</li><li>Подивитися телевізор</li>";

      // Вставити HTML-рядок в елемент <ul>
      ulElement.innerHTML = listItems;
      break;

    case 8:
      // Створити HTML-рядок зі списком li
      var listItems = "<li>Встати</li><li>Вмитися</li><li>Подивитися телевізор</li>";

      // Вставити HTML-рядок в елемент <ul>
      ulElement.innerHTML = listItems;
      break;

    case 9:
      // Створити HTML-рядок зі списком li
      var listItems = "<li>Встати</li><li>Вмитися</li><li>Подивитися телевізор</li>";

      // Вставити HTML-рядок в елемент <ul>
      ulElement.innerHTML = listItems;
      break;

    case 10:
      // Створити HTML-рядок зі списком li
      var listItems = "<li>Встати</li><li>Вмитися</li><li>Подивитися телевізор</li>";

      // Вставити HTML-рядок в елемент <ul>
      ulElement.innerHTML = listItems;
      break;

    default:
      break;
  }
}






