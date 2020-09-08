const people = [
    {
        image : "./images/jeff.png",
        info : 'Jeffrey Preston Bezos, born January 12, 1964, is an American internet entrepreneur, industrialist, media proprietor, and investor. He is best known as the founder, CEO, and president of the multi-national technology company Amazon. <br>The first centi-billionaire on the Forbes wealth index, Bezos has been the world\'\s richest person since 2017 and was named the "richest man in modern history" after his net worth increased to $150 billion in July 2018. According to Forbes, Bezos is the first person in history to have a net worth exceeding $200 billion.'
    },
    {
        image : "./images/gates.png",
        info : "Since 1987, he has been included in the Forbes list of the world's wealthiest people. From 1995 to 2017, he held the Forbes title of the richest person in the world all but four of those years. In October 2017, he was surpassed by Amazon founder and CEO Jeff Bezos, who had an estimated net worth of US$90.6 billion compared to Gates's net worth of US$89.9 billion at the time. <br>As of August 2020, Gates had an estimated net worth of US$113.7 billion, making him the second-wealthiest person in the world, behind Bezos."
    },
    {
        image : "./images/mark.png",
        info : "Mark Elliot Zuckerberg, born May 14, 1984 is an American media magnate, internet entrepreneur, and philanthropist. He is known for co-founding Facebook, Inc. <br>Born in White Plains, New York, Zuckerberg attended Harvard University, where he launched the Facebook social networking service from his dormitory room on February 4, 2004, with college roommates. Originally launched to select college campuses, the site expanded rapidly and eventually beyond colleges, reaching one billion users by 2012. <br>Zuckerberg took the company public in May 2012 with majority shares. In 2007, at age 23, he became the world's youngest self-made billionaire. As of September 2020, Zuckerberg's net worth is $111 billion, making him the 4th-richest person in the world. He is the only person under 50-years-old in Forbes' list of the ten richest people, and the only person under 40 in the top 20."
    },
    {
        image : "./images/larry.png",
        info : "Lawrence Edward Page, born March 26, 1973, is an American software engineer and Internet entrepreneur. He is best known as one of the co-founders of Google along with Sergey Brin. <br>Page was the chief executive officer of Google from 1997 until August 2001 then from April 2011 until July 2015 when he moved to become CEO of Alphabet Inc. (Google's parent company), a post he held until December 4, 2019. He remains an Alphabet board member, employee, and controlling shareholder.<br>Creating Google built a large amount of wealth. Forbes placed him 10th in the list Billionaires 2019 and as of July 2020, Page was the 13th-richest person in the world, with a net worth of $69.4 billion, according to Forbes."
    },
    {
        image : "./images/musk.png",
        info : "Elon Reeve Musk, born June 28, 1971 is an engineer, industrial designer, technology entrepreneur and philanthropist.<br>He is the founder, CEO, CTO and chief designer of SpaceX; CEO and product architect of Tesla, Inc.;founder of The Boring Company; co-founder of Neuralink; and co-founder and initial co-chairman of OpenAI.<br>In 2018, he was ranked 25th on the Forbes list of The World's Most Powerful People, and was ranked joint-first on the Forbes list of the Most Innovative Leaders of 2019. As of September 2 2020, his net worth was estimated by Forbes to be US$98.5 billion. He is the longest tenured CEO of any automotive manufacturer globally."
    }           
];

let name;
function  check_inputs() {
    
    name = $("#nameLeaderboard")[0].value
    if (name == null || name === ""){ 
        $("#next").attr("disabled", true); 
        return false 
    }
    else { return true }
}

function leaderboardScroll(){
    const scrollForLeaderboard = window.location.search.substring(1);
    if (scrollForLeaderboard === "leaderboard"){
        $('html,body').animate({scrollTop: document.body.scrollHeight},1100);
    }
}

$(function (){
    let index;
    $("#data").css( "display", "none" );
    $("#info_person").css( "display", "none" );
    $("#footer").css( "display", "none" );
    $("#inlineFormCustomSelect").prop('selectedIndex', 0)
    leaderboardScroll();

    $("#inlineFormCustomSelect").on("change", function(event){
        index = event.currentTarget.value
        const person = people[index]
        if(check_inputs()) { $("#next").removeAttr("disabled"); }  
        $("#leaderboard").css( "display", "none" );      
        $("#footer").show();
        $("#info_person").show()
        $("#img_first").attr("src", person.image)
        $("#text_first").html(person.info)
        $('html,body').animate({scrollTop: document.body.scrollHeight},600);
    })
    $("#next").on("click", function(event){
        if(!check_inputs()) { 
            $("#next").attr("disabled", true); 
            alert("Please, provide a name for the Leaderboard");
        }
        else{
            if(index >= 0 && index < 5){


                //got from https://gist.github.com/joecliff/10948117#file-cryptojs_base64_encrypt_decrypt-js
                let nameCrypt = "ensuring_that_the_name_" + name + "_is_correct"
                const billionaireChoosed = CryptoJS.enc.Base64.stringify(CryptoJS.enc.Utf8.parse(index));
                nameCrypt = CryptoJS.enc.Base64.stringify(CryptoJS.enc.Utf8.parse(nameCrypt));


                window.location = './game.html?'+ billionaireChoosed + '#' + nameCrypt;
            }
        }
    })

    $("#nameLeaderboard").on('input', function() {
        var raw_text =  jQuery(this).val();
        var return_text = raw_text.replace(/[^a-zA-Z0-9 _]/g,'');
        jQuery(this).val(return_text);
        
        check_inputs();  
        if(check_inputs() && index >= 0) { $("#next").removeAttr("disabled"); $("#leaderboard").css( "display", "none" ); }  
    });

    $('#nameLeaderboard').change(function() { 
        check_inputs();
    });


    

    $("#play").on("click", function(event){
        $("#play").css( "display", "none" );
        $("#billionaireImgs").css( "display", "none" );
        $("#infoGame").css( "display", "none" );
        $("#data").css( "display", "" );
        if(index >= 0) {$("#leaderboard").css( "display", "none" )}
    })

    $("#back").on("click", function(event){
        $("#play").css( "display", "" );
        $("#billionaireImgs").css( "display", "" );
        $("#infoGame").css( "display", "" );
        $("#data").css( "display", "none" );
        $("#leaderboard").css( "display", "" )
    })

    $("#leaderboardImg").on("click", function(event){
        $('html,body').animate({scrollTop: document.body.scrollHeight},1100);
        
    })
    

})

// got it from https://mdbootstrap.com/snippets/jquery/ascensus/453950
$.getJSON("https://spreadsheets.google.com/feeds/list/1voiXrIwNAZydZbCwZYT4xEakryd0S4E9ZHAHKKCPjJI/1/public/values?alt=json", function (data) {

      var sheetData = data.feed.entry;

      var i;
      for (i = 0; i < sheetData.length; i++) {

        var date = data.feed.entry[i]['gsx$timestamp']['$t'];
        var name = data.feed.entry[i]['gsx$name']['$t'];
        var billionaire = data.feed.entry[i]['gsx$choice']['$t'];
        var attempts = data.feed.entry[i]['gsx$attempts']['$t'];
        var tips_used = data.feed.entry[i]['gsx$tips']['$t'];
        var final_score = data.feed.entry[i]['gsx$scorefinal']['$t'];

        document.getElementById('data_leaderboard').innerHTML += ('<tr>'+'<td>'+Number(i+1)+'</td>'+'<td>'+name+'</td>'+'<td>'+attempts+'</td>'+'<td>'+tips_used+'</td>'+'<td>'+final_score+'</td>'+'<td>'+billionaire+'</td>'+'<td>'+date+'</td>'+'</tr>');

      }
    });


    
    