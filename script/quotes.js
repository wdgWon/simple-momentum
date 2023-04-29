const quotes = [
    '“The only way to do great work is to love what you do.” - Steve Jobs',
    '“The best way to predict your future is to create it.” - Abraham Lincoln',
    '“Believe you can and you’re halfway there.” - Theodore Roosevelt',
    '“If you want to live a happy life, tie it to a goal, not to people or things.” - Albert Einstein',
    '“The only thing we have to fear is fear itself.” - Franklin D. Roosevelt',
    '“It does not matter how slowly you go as long as you do not stop.” - Confucius',
    '“You miss 100% of the shots you don’t take.” - Wayne Gretzky',
    '“The greatest glory in living lies not in never falling, but in rising every time we fall.” - Nelson Mandela',
    '“Success is not final, failure is not fatal: it is the courage to continue that counts.” - Winston Churchill',
    '“I have not failed. I’ve just found 10,000 ways that won’t work.” - Thomas Edison'
]
const quoteContainer = document.querySelector('#quote');
const quotes_el = quoteContainer.querySelector("#quote span:first-child");
const author_el = quoteContainer.querySelector("#quote span:last-child");

getQuoteAndAuthor();
quoteContainer.onclick = getQuoteAndAuthor;

function getQuoteAndAuthor() {
    const temp_obj = [];

    for(let i=0; i<quotes.length; i++){
        const obj = {};
        obj.quote = quotes[i].split(" - ")[0];
        obj.author = quotes[i].split(" - ")[1];
        temp_obj.push({...obj});
    }

    let todaysQuote = temp_obj[Math.floor(Math.random() * quotes.length)];
    quotes_el.innerText = todaysQuote.quote;
    author_el.innerText = `- ${todaysQuote.author} -`;
}



