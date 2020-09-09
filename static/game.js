class People{

    constructor(name, wealth, win, lose, winSentence){
        this.name = name;
        this.wealth = wealth;
        this.win = win;
        this.lose = lose;
        this.winSentence = winSentence;
    }
}
const people = [];
people[0] = new People("Jeff Bezos", 200000000000, "./images/win_lose/jeff_win.jpg", "./images/win_lose/jeff_lose.jpg", "Jeff is incredibly happy! You helped him and now he can return to his home planet with all the useful items you bought for him.");
people[1] = new People("Bill Gates", 113700000000, "./images/win_lose/bill_win.jpg", "./images/win_lose/bill_lose.jpg", "Look how happy Bill is right now, without so much money in his pocket, he can follow his dream of being a Twitch streamer.");
people[2] = new People("Mark Zuckerberg", 111000000000, "./images/win_lose/mark_win.jpg", "./images/win_lose/mark_lose.jpg", 'Mark cannot describe how happy he is right now, I heard he saying "No money, no worries". As now he no longer needs to explain to the US congress the difference between an e-mail and a Whatsapp.');
people[3] = new People("Larry Page", 69400000000, "./images/win_lose/larry_win.jpg", "./images/win_lose/larry_lose.jpg", "After years of helping people find things, Larry has now been helped by you to find his true happiness and he can live his life in peace with his best and only imaginary friend. Look how cool they are together.");
people[4] = new People("Elon Musk", 98500000000, "./images/win_lose/elon_win.jpg", "./images/win_lose/elon_lose.jpg", "Elon is forever grateful to you! After you helped him, he finally got free time and was able to put his efforts into his project to launch his X Æ A-Xii spacecraft.");

class Goods{

    constructor(prefix, name, price, img, source){
        this.prefix = prefix;
        this.name = name;
        this.price = price;
        this.img = img;
        this.source = source;
    }
}
const goods = [];
goods[0] = new Goods("Buy a ", "Flip Flop", 26,  "./images/goods/flipflop.jpg", "https://www.amazon.com/s?k=flip+flop+havaianas");
goods[1] = new Goods("Buy a ", "Luxury Helicopter", 3000000,  "./images/goods/helicopter.jpg", "https://www.luxify.com/blogs/articles/top-10-luxury-helicopters-world");
goods[2] = new Goods("Hire a ", "Messi", 330000000 ,  "./images/goods/messi.jpg", "https://www.gq.com/story/the-price-of-lionel-messi-leaving-barcelona");
goods[3] = new Goods("Hire a ", "Cristiano Ronaldo", 110000000 ,  "./images/goods/cr7.jpg", "https://www.nytimes.com/2018/07/10/sports/ronaldo-juventus.html");
goods[4] = new Goods("Buy a ", "iPhone SE", 399,  "./images/goods/iphonese.jpg", "https://www.apple.com/iphone-se/");
goods[5] = new Goods("Buy a", "McDonald’s Net Worth", 31491350000,  "./images/goods/mcdonalds.jpg", "https://www.gobankingrates.com/investing/strategy/how-much-is-mcdonalds-worth/");
goods[6] = new Goods("Buy a ", "Jamaica's GDP", 15714000000,  "./images/goods/jamaica.jpg", "https://en.wikipedia.org/wiki/List_of_countries_by_GDP_(nominal)");
goods[7] = new Goods("Buy a ", "Uruguay's GDP", 15714000000,  "./images/goods/uruguay.jpg", "https://en.wikipedia.org/wiki/List_of_countries_by_GDP_(nominal)");
goods[8] = new Goods("Build an ", "Empire States", 15714000000,  "./images/goods/empire.jpg", "https://en.wikipedia.org/wiki/Empire_State_Building");
goods[9] = new Goods("Buy a ", "Brazillian Popular Car", 9000,  "./images/goods/gol.jpg", "https://www.icarros.com.br/comprar/0km/volkswagen/gol");
goods[10] = new Goods("Buy a ", "Queen Elizabeth net worth", 442920000,  "./images/goods/queen.jpg", "https://www.insider.com/where-does-the-royal-family-get-money-2017-1");
goods[11] = new Goods("Hire the entire ", "Liverpool squad", 2438475000,  "./images/goods/liverpool.jpg", "https://www.mirror.co.uk/sport/football/news/jurgen-klopp-evolved-liverpool-squad-21295509");
goods[12] = new Goods("Book a ", "World Cruise (180 days)", 38499,  "./images/goods/cruise.jpg", "https://www.cruisecritic.com/news/3762/");
goods[13] = new Goods("Buy a ", "Los Angeles Lakers franchise", 4400000000,  "./images/goods/lakers.jpg", "https://chicago.suntimes.com/bulls/2020/2/11/21133749/bulls-forbes-nba-franchise-values");
goods[14] = new Goods("Buy a ", "New England Patriots team", 4100000000,  "./images/goods/patriots.jpg", "https://www.forbes.com/teams/new-england-patriots/#306e371b966e");
goods[15] = new Goods("Buy a ", "Yacht", 8400000,  "./images/goods/yacht.jpg", "https://www.godownsize.com/average-yacht-prices/");
goods[16] = new Goods("Buy a ", "Lamborghini Veneno", 4500000,  "./images/goods/Lamborghini.jpg", "https://www.boxymo.ie/news/most-expensive-cars-in-the-world.aspx");
goods[17] = new Goods("Buy a ", "Ferrari LaFerrari", 1400000 ,  "./images/goods/ferrari.jpg", "https://www.boxymo.ie/news/most-expensive-cars-in-the-world.aspx");
goods[18] = new Goods("Pay the ", "Brazillian indenpendence fee paid to portugal", 250733376,  "./images/goods/pt.jpg", "https://en.wikipedia.org/wiki/United_Kingdom_of_Portugal,_Brazil_and_the_Algarves");


//Get name from link
//got from https://gist.github.com/joecliff/10948117#file-cryptojs_base64_encrypt_decrypt-js
//decrypt
let person;
let playerName;
try{

    person = window.location.search.substring(1);
    person = CryptoJS.enc.Base64.parse(person).toString(CryptoJS.enc.Utf8);
    playerName = window.location.hash.substring(1);
    playerName = CryptoJS.enc.Base64.parse(playerName).toString(CryptoJS.enc.Utf8);
    playerName = playerName.split("_")[4];

    console.log(person)
    console.log(playerName)
    //Check
    if(((!(person >= 0 && person < 5)) || playerName === "" || playerName == null || person == null || person === "")){
        alert("Please, don't touch the URL!");
        window.location = './index.html';
    }
}
catch(err) {
    alert("Please, don't touch the URL!");
    window.location = './index.html';
    }

//Convert currency
const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0
  })
function convert(n){
    if (n > 1000000000) {return formatter.format(n/1000000000) + " Billions"}
    if (n > 1000000) {return formatter.format(n/1000000) + " Millions"}
    return formatter.format(n)
} 

//define four randoms
const randomGoods = []
function random(){
    let x = 0;
    while (x < 4){
        let n = Math.floor(Math.random() * 19);
        if(x === 0) {
            randomGoods.push(n);
            x++;
            continue;
        }
        if (randomGoods.includes(n)) { continue }

        randomGoods.push(n);
        x++;
    }
}

let qtd, valid;
let form_selected = [false, false, false, false];
let submissions = 5;
let hints = 3;
let scores = 10000;

function  check_inputs() {
    
    qtd = [$("#qtd0").serializeArray()[0].value, $("#qtd1").serializeArray()[0].value, $("#qtd2").serializeArray()[0].value, $("#qtd3").serializeArray()[0].value];
    valid = [$("#valid0"), $("#valid1"), $("#valid2"), $("#valid3")];

    let correct = true; 
    for (let x = 0; x < qtd.length; x++){
        const fields = form_selected.reduce((a, b) => a + b, 0)
        if(form_selected[x]){
            if ( qtd[x] == null || !(Number.isSafeInteger(qtd[x]*1)) || qtd[x].indexOf("-") === 0 || qtd[x] === ""){
                correct = false;
                valid[x].text("Input not valid")
            }
            else{
                qtd[x] = parseInt(qtd[x])
                valid[x].html("&nbsp;")
            }
        }
        else if (fields < 3){
            correct = false;
        }
    }
    if(correct && !endGame){$("#submit").removeAttr("disabled");}
    if(!correct) {$("#submit").attr("disabled", true);}
    return correct
}

const target = people[person].wealth;
function submit_answer(){
    check_inputs();
    let sum_answer = 0
    for (let x = 0; x < qtd.length; x++){
        sum_answer += (qtd[x] * prices[x]);
    }
    if (sum_answer <= target && sum_answer >= (target*0.9)){
        win(sum_answer);
    }
    else if (submissions > 0 && scores > 500){
        scores_penalty(-500);
        wrong_answer(sum_answer);
    }
    else{
        lose();
    }
}

function win(n){

    endGame = true;
    $("#tip").attr("disabled", true);
    $("#submit").attr("disabled", true);
    $("#scoreCounting").text(scores).css("color","green");
    $('#modal_win_lose').modal('show').css('overflow-y', 'auto');
    $('#modal_win_lose_title').text("YOU WIN!")
    $("#win_lose").attr("src", people[person].win);
    $('#modal_win_lose_body').html(people[person].winSentence)
    $('#modal_win_lose_button').text("Play again!")

    //make modal table
    $("#tableWin").show();
    $(".modal-body #tableItem0").text(goods[randomGoods[0]].name); 
    $(".modal-body #tablePriceItem0").text(convert(prices[0]));
    $(".modal-body #tableUnitsItem0").text(qtd[0]);
    $(".modal-body #tableTotalItem0").text(convert(qtd[0] * prices[0]));
    $(".modal-body #tableItem1").text(goods[randomGoods[1]].name); 
    $(".modal-body #tablePriceItem1").text(convert(prices[1]));
    $(".modal-body #tableUnitsItem1").text(qtd[1]);
    $(".modal-body #tableTotalItem1").text(convert(qtd[1] * prices[1]));
    $(".modal-body #tableItem2").text(goods[randomGoods[2]].name);   
    $(".modal-body #tablePriceItem2").text(convert(prices[2]));
    $(".modal-body #tableUnitsItem2").text(qtd[2]);
    $(".modal-body #tableTotalItem2").text(convert(qtd[2] * prices[2]));
    $(".modal-body #tableItem3").text(goods[randomGoods[3]].name);  
    $(".modal-body #tablePriceItem3").text(convert(prices[3]));
    $(".modal-body #tableUnitsItem3").text(qtd[3]);
    $(".modal-body #tableTotalItem3").text(convert(qtd[3] * prices[3]));
    $(".modal-body #tableTotal").text(convert(n));
    $(".modal-body #tableAccuracy").text(((n/people[person].wealth)*100).toFixed(2)+"%");
    $(".modal-body #tableBonus").text(Math.ceil(scores * 5 * ((n/people[person].wealth)-0.90)).toLocaleString());
    scores += Math.ceil(scores * 5 * ((n/people[person].wealth)-0.90))
    $(".modal-body #tableTotalScore").text(scores.toLocaleString());
    submitLeaderboard();
}

let endGame = false;
function lose(){
    endGame = true;
    $("#tip").attr("disabled", true);
    $("#submit").attr("disabled", true);
    scores = 0
    $("#scoreCounting").text(scores).css("color","red");
    $('#modal_win_lose').modal('show');
    $('#modal_win_lose_title').text("YOU LOSE!")
    $("#win_lose").attr("src", people[person].lose);
    $('#modal_win_lose_body').html(people[person].name + " is really disappointed with you!<br> You were his last hope, now he doesn't know how to spend all his humongous amount of money and sees himself obligated to live the rest of his life with the guilt of being so rich while you... <br>Well, you're not...")
    $('#modal_win_lose_button').text("Try again!")

}

function wrong_answer(n){
    if (n < (target*0.9)){
        $("#text_wrong").text("You need to spend more money!")
        $('#wrong').modal('show');
    }
    else {
        $("#text_wrong").text("You have to spend less money!")
        $('#wrong').modal('show');
    }   
}

let tips = [true, true, true, true]
let tipsFields, tables;
function show_tip(){
    tipsFields = [$("#tip0"), $("#tip1"), $("#tip2"), $("#tip3")];
    tables = [$("#table0"), $("#table1"), $("#table2"), $("#table3")];
    if(tips.reduce((a, b) => a + b, 0) < 1) {return;}
    if(hints < 1) {return}
    let x = true;
    while (x) {
        let n = Math.floor(Math.random() * 4);
        if(tips[n]){
            tips[n] = false;
            $("body,html").animate(
                {
                  scrollTop: $(tables[n]).offset().top
                },
                800 //speed
              );
            scores_penalty(-1000);
            tipsFields[n].fadeOut().fadeIn().fadeOut().fadeIn();
            tipsFields[n].html("Price: " + convert(goods[randomGoods[n]].price))
            x = false;
        }
    }
}

function scores_penalty(n){

    scores += n;
    $("#scoreCounting").text(scores);
    $("#score").css("color","red").fadeOut().fadeIn().fadeOut().fadeIn().queue(function() {
        $("#score").css("color","white").dequeue();
      });;
    if(scores < 0) {lose();}
}

let waitingTime = 10;
var x = setInterval(function() {

    if (waitingTime >= 1){ waitingTime--; }
    else if (!endGame) {
        $("#scoreCounting").text(scores);
        if (scores <= 0) { lose(); }
        else { scores -= 10; }
    }
  }, 1000);


const prices = [];
$(function (){
    //initializing page
    $(random());
    $("#name").text(people[person].name);
    $("#amount").text(convert(people[person].wealth));
    
    $("#item0").text(goods[randomGoods[0]].prefix + goods[randomGoods[0]].name);
    $("#img0").attr("src", goods[randomGoods[0]].img);
    $(prices.push(goods[randomGoods[0]].price));
    
    $("#item1").text(goods[randomGoods[1]].prefix + goods[randomGoods[1]].name);
    $("#img1").attr("src", goods[randomGoods[1]].img);
    $(prices.push(goods[randomGoods[1]].price));
    
    $("#item2").text(goods[randomGoods[2]].prefix + goods[randomGoods[2]].name);
    $("#img2").attr("src", goods[randomGoods[2]].img);
    $(prices.push(goods[randomGoods[2]].price));
    
    $("#item3").text(goods[randomGoods[3]].prefix + goods[randomGoods[3]].name);
    $("#img3").attr("src", goods[randomGoods[3]].img);
    $(prices.push(goods[randomGoods[3]].price));
    
    $(window).scrollTop(0);
    
    //submit button
    $("#submit").on("click", function(event){
        if (!check_inputs()){ 
            $("#submit").attr("disabled", true);
        }
        else{
            submissions--;
            $("#submissions").text(submissions)
            submit_answer();
        }        
    })

    //tip button
    $("#tip").on("click", function(event){
        show_tip();
        hints--;
        $("#tip_message").text(hints)
        if(hints < 1){
            $("#tip").attr("disabled", true);
        }
    })

    //Call check_inputs everytime something is typed
    $(".form-control").on('input', function() {
        check_inputs();  
    });
    //set form field as true to be verified and call check_inputs
    $('#qtd0').change(function() { form_selected[0] = true; check_inputs();});
    $('#qtd1').change(function() { form_selected[1] = true; check_inputs();});
    $('#qtd2').change(function() { form_selected[2] = true; check_inputs();});
    $('#qtd3').change(function() { form_selected[3] = true; check_inputs();});
    })

    $(document).on('click', "#modal_win_lose_button", function(){
        window.location = './index.html';
    })
    $(document).on('click', "#modal_leaderboard_button", function(){
        window.location = './index.html?'+"leaderboard";
    })

//upload leaderboard
//Got it from https://dev.to/omerlahav/submit-a-form-to-a-google-spreadsheet-1bia

function submitLeaderboard (){
    console.log("ta subindo")
const scriptURL = 'https://script.google.com/macros/s/AKfycbw48zi9ewBO06ZZvg0lXYsH5Xd2lIY5eyg5jAISQMWLBGjiwX0/exec'
let formData = new FormData();
    formData.append("name", playerName);
    formData.append("attempts", 5-submissions);
    formData.append("tips", 3-hints);
    formData.append("scorefinal", Number(scores*-1));
    formData.append("choice", people[person].name);
fetch(scriptURL, { method: 'POST', body: formData})
    .then(response => console.log('Success!', response))
    .catch(error => console.error('Error!', error.message))
}



