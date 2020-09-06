//Names
const people = ["Jeff Bezos", "Bill Gates", "Mark Zuckerberg", "Larry Page", "Elon Musk"]

//Get name from link
let person = window.location.search.substring(1);
const index = person.indexOf("=") + 1
person = person[index]

//Check
if(!(person >= 0 && person < 5)){
    window.location = "./home.html";
}

$(function (){
    $("#name").text(people[person])
    $("#play").on("click", function(event){
        if(person >= 0 && person < 5){
            window.location = './game.html?billionaire='+ person;
        }
        else{
            window.location = "./home.html";
        }
    })
})