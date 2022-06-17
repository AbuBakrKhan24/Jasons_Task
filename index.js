// Declaring person with values name and id
const person = { name: "Abu-Bakr", id: "0209245155087" };
let today = new Date().toLocaleString(undefined, {
  month: "numeric",
  day: "numeric",
});
let dob = () => {
  let raw = person.id.slice(2, 6);
  let rawMonth = raw.slice(0, 2);
  let rawDay = raw.slice(2, 4);
  return `${rawMonth}/${rawDay}`;
};

let birthDay = new Date(dob()).toLocaleString(undefined, {
  month: "numeric",
  day: "numeric",
});
console.log(birthDay);
let d1 = new Date(today);
let d2 = new Date(birthDay);
let diff = d2.getTime() - d1.getTime();
let daydiff = Math.abs(diff / (60 ** 2 * 24000));

let days = (daydiff) => {
  // return (daydiff < 1) ? "day" : "days";
  if (daydiff === 1) {
    return "day";
  } else {
    return "days";
  }
};
console.log(`Hello ${person.name}
there is ${daydiff} ${days()} till your next birthday`);
