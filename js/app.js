const quotes = [
    {
        id: 0,
        quote: 'It is never too late to be what you might have been.',
        author: 'George Eliot'
    },
    {
        id: 1,
        quote: 'The question isn’t who is going to let me; it’s who is going to stop me.',
        author: 'Ayn Rand'
    },
    {
        id: 2,
        quote: 'The most difficult thing is the decision to act, the rest is merely tenacity.',
        author: 'Amelia Earhart'
    },
    {
        id: 3,
        quote: 'You may be disappointed if you fail, but you are doomed if you don’t try.',
        author: 'Beverly Sills'
    },
    {
        id: 4,
        quote: 'When one door of happiness closes, another opens, but often we look so long at the closed door that we do not see the one that has been opened for us.',
        author: 'Helen Keller'
    },
    {
        id: 5,
        quote: 'The most common way people give up their power is by thinking they don’t have any.',
        author: 'Alice Walker'
    },
    {
        id: 6,
        quote: 'Too many of us are not living our dreams because we are living our fears.',
        author: 'Les Brown'
    },
    {
        id: 7,
        quote: 'The person who says it cannot be done should not interrupt the person who is doing it.',
        author: 'Chinese Proverb'
    },
    {
        id: 8,
        quote: 'Happiness is not something readymade. It comes from your own actions.',
        author: 'Dalai Lama'
    },
    {
        id: 9,
        quote: 'Winning isn’t everything, but wanting to win is.',
        author: 'Vince Lombardi'
    },
    {
        id: 10,
        quote: 'Either you run the day, or the day runs you.',
        author: 'Jim Rohn'
    }
    
    ];

    var colors = [
        '#16a085',
        '#27ae60',
        '#2c3e50',
        '#f39c12',
        '#e74c3c',
        '#9b59b6',
        '#FB6964',
        '#342224',
        '#472E32',
        '#BDBB99',
        '#77B1A9',
        '#73A857'
      ];

      function generateRandomColor() {
        let index = Math.floor(Math.random() * colors.length);
        var elements = document.querySelectorAll('.custom-color');
        for(var i=0; i<elements.length; i++){
            elements[i].style.color = colors[index];
            
        }
        $("body").css("background-color", colors[index]); 
        $("#tweet-quote").css("background-color", colors[index]); 
        $("#tumblr-quote").css("background-color", colors[index]); 
        $("#new-quote").css("background-color", colors[index]); 
      }

    function generateQuote() {

        let index = Math.floor(Math.random() * quotes.length);       
        $("#text").text(quotes[index].quote);
        $("#author").text(quotes[index].author);
        generateRandomColor();

    }
  
    generateQuote();
    
$("#new-quote").click(function(){

    generateQuote();

});



