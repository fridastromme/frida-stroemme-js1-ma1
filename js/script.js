// Question 1 ÅÅÅ drit

//const cat = {
  //  complain: function() {
    //console.log(this.complain);
//}
//}

//cat.function();



// Question 2

const heading = document.querySelector("h3");

heading.innerHTML = `<h3>Updated heading</h3>`;

//console.log(heading);


// Question 3

heading.style.fontSize = "2em";


// Question 4

heading.classList.add("subheading");

//console.log(heading);


// Question 5 GAAAAD HOWWW

const paragraphs = document.querySelectorAll("p");

//paragraphs.style.color = "red";

for(let i = 0; i < paragraphs; i++){
}

console.log(paragraphs);


// Question 6

const resultsContainer = document.querySelector(".results");

resultsContainer.innerHTML = `<p>New paragraph</p>`;
resultsContainer.style.backgroundColor = "yellow";


// Question 7

const cats = [
    {
        name: "Blob",
        age: 10
    },
    {
        name: "Harold",
    },
    {
        name: "Blurt",
        age: 21
    }
];


function printName(list){

    for(let i = 0; i < list.length; i++) {
        console.log(list[i].name);
    }
}

printName(cats);


// Question 8 IT DOESNT WORRRRKKKK


function createCats(cats) {

let listCats = "";

for(let i = 0; i < cats.length; i++) {

// console.log(items[i]);

listCats = listCats + "<h5>" + cats[i].name + "</h5><p>" + cats[i].age + "</p>";

// console.log(listItems);

}

const finalCats = "<div>" + listCats+ "</div>";

// console.log(finalHtml);

return finalCats;

}

const newHtml = createCats(cats);

console.log(newHtml);

const catContainer = document.querySelector(".cat-container");

catContainer.innerHTML = finalCats;

//How to return the function in the div on the page???

//container.innerHTML = newHtml;


