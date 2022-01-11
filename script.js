const text=document.getElementById("quote");
const author=document.getElementById("author");


const getNewQuote = async () => {
  var url="https://type.fit/api/quotes"; //Quote API

  const response=await fetch(url);
  console.log(typeof response);

  const quotesArray = await response.json();

  const indx = Math.floor(Math.random()*quotesArray.length);


  const quote=quotesArray[indx].text;

  const auth=quotesArray[indx].author;
  if(auth==null)
  {
      author = "Anonymous";
  }

  text.innerHTML=quote;
  author.innerHTML="~ "+auth;


}

getNewQuote();