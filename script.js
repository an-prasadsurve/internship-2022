const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const btn = document.querySelector("#submit");
const result_div = document.querySelector(".result-div");

btn.addEventListener("click", () => {
  const date = new Date(document.querySelector("#date").value);

  result_div.innerHTML = "";
  let days_post_date = [
    ...days.slice(date.getDay()),
    ...days.slice(0, date.getDay()),
  ];

  let result = '<h2 class="red-text">Days start from above date</h2>';

  days_post_date.forEach((day) => {
    result += `<h3 class='green-text'>${day}</h3>`;
  });

  result_div.innerHTML += result;
});