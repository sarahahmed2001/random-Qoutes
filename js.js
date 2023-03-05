var qoutes=[{ 
qoute:"“Be yourself; everyone else is already taken.”",
writer:"--Oscar Wilde"},
{ 
qoute:"“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”",
writer:"--Marilyn Monroe"},
{ 
qoute:"“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
writer:"--Albert Einstein"},
{ 
qoute:"“So many books, so little time.”",
writer:"--Frank Zappa"},
{ 
qoute:"“A room without books is like a body without a soul.”",
writer:"--Marcus Tullius Cicero"},
{ 
qoute:"“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”",
writer:"--Bernard M. Baruch"},
{ 
qoute:"“You've gotta dance like there's nobody watching,Love like you'll never be hurt,Sing like there's nobody listening,And live like it's heaven on earth.”",
writer:"--William W. Purkey"},
{ 
qoute:"“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”",
writer:"--Dr. Seuss"},
{ 
qoute:"“You only live once, but if you do it right, once is enough.”",
writer:"--Mae West"},
{ 
qoute:"“Be the change that you wish to see in the world.”",
writer:"--Mahatma Gandhi"},{ 
qoute:"“In three words I can sum up everything I've learned about life: it goes on.”",
writer:"--Robert Frost"},{ 
qoute:"“If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.”",
writer:"--J.K. Rowling, Harry Potter and the Goblet of Fire"},{ 
qoute:"“Don’t walk in front of me… I may not followDon’t walk behind me… I may not lead Walk beside me… just be my friend”",
writer:"--Albert Camuse"},          
]
var text= document.getElementById("qoute");
var author=document.getElementById("name");
function randomqoutes(){
   var index = Number(Math.floor(Math.random()*qoutes.length));
  text.innerHTML=qoutes[index].qoute;
author.innerHTML=qoutes[index].writer;
}