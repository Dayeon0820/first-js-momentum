const quotes= [{quote: "When in doubt, choose change.",
 author:"Lily leung"},
{quote: "Learn as if you will live forever, live like you will die tomorrow.",
author: "Mahatma Gandhi"},
{quote: "Life is either a daring adventure or nothing at all",
author: " Helen Keller"},
{quote: "When you have faults, do not fear to abandon them.",
author: "Confucius"},
{quote: "When you change your thoughts, remember to also change your world.",
author: "Norman Vincent Peale"},
{quote: "Great minds have purposes, others have wishes.",
author: "Washington Irving"},
{quote: "It is better to fail in originality than to succeed in imitation.",
author: "Herman Melville"},
{quote: "The road to success and the road to failure are almost exactly the same.",
author: "Colin R. Davis"},
{quote: "Despite the forecast, live like it’s spring.",
author: " Lilly Pulitzer"},
{quote: "The goal of life is living in agreement with nature.",
author: "Zeno"},
];

const quote= document.querySelector("#quote");
const mainQuote= document.querySelector("#quote_quotes");
const mainAuthor= document.querySelector("#quote_authors");
const randomQuote= quotes[Math.floor(Math.random()*10)];

mainQuote.innerText= randomQuote.quote;
mainAuthor.innerText= randomQuote.author;

