let btn = document.querySelector("#new-quote");
let quote = document.querySelector(".quote");
let person = document.querySelector(".person");

const quotes = [
  {
    quote: "This is some made up quote. It's simply for a test",
    person: "Olulana Dari",
  },
  {
    quote: "The most reliable way to predict the future is to create it.",
    person: "Abraham Lincoln",
  },
  {
    quote: "“Only a life lived for others is a life lived worthwhile.” ",
    person: "Albert Einstein",
  },
  {
    quote: "There is more to life than increasing its speed.",
    person: "Mahatma Gandhi",
  },
  {
    quote: "Because I have loved life, I shall have no sorrow to die.",
    person: "Amelia Burr",
  },
  {
    quote: "Life is a process. We are a process. The universe is a process",
    person: " Anne Wilson Schaef",
  },
  {
    quote:
      "I can't change the direction of the wind, but I can adjust my sails to always reach my destination.",
    person: "Jimmy Dean",
  },
  {
    quote: "The good life is inspired by love and guided by knowledge.",
    person: " Bertrand Russell",
  },
  {
    quote: "Dream as if you’ll live forever, live as if you’ll die today.",
    person: " James Dean",
  },
  {
    quote:
      "Life becomes easier when you learn to accept the apology you never got",
    person: "R. Brault",
  },
  {
    quote:
      "Nearly all men can stand adversity, but if you want to test a man's character, give him power.",
    person: "Abraham Lincoln",
  },
];

btn.addEventListener("click", () => {
  let random = Math.floor(Math.random() * quotes.length);

  quote.innerText = quotes[random].quote;
  person.innerText = quotes[random].person;
});
