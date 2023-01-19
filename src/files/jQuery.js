$(function () {
  const startDate = new Date("2022-08-20"); // начало отсчёта
  const today = new Date(); // сегодня
  const daysPassed = Math.floor((today - startDate) / (1000 * 60 * 60 * 24));
  const future = new Date();
  future.setDate(future.getDate() + 7 - (daysPassed % 7));
  const date = new Date(future.setHours(0, 0, 0, 0));

  date.toLocaleString("en-US");

  const test = new Intl.DateTimeFormat("en-US").format(date);
  // var date_string = "2020-02-15 00:00:00";
  // var result = new Date(date_string.replace(" ", "T"));

  // console.log(new Date(date_string));
  // console.log(new Date(result));

  $("#myCounter").mbComingsoon({
    expiryDate: new Date(test.replace(" ", "T")),
    speed: 100,
  });

  setTimeout(function () {
    $(window).resize();
  }, 200);
});
