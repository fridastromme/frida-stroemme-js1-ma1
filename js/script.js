// Question 1

const cat = {
    complain: function() {
    console.log("Meow!")
    }
}

cat.complain();


// Question 2

const heading = document.querySelector("h3");

heading.innerHTML = `<h3>Updated heading</h3>`;


// Question 3

heading.style.fontSize = "2em";


// Question 4

heading.classList.add("subheading");


// Question 5

const paragraphs = document.querySelectorAll("p");

function changeColor(paragraphs) {
    for(let i = 0; i < paragraphs.length; i++) {
        console.log(paragraphs[i]);

        const color = paragraphs[i];
        color.style.color = "red";
    }
}

changeColor(paragraphs);


// Question 6

const resultsContainer = document.querySelector(".results");

resultsContainer.innerHTML = `<p>New paragraph</p>`;
resultsContainer.style.backgroundColor = "yellow";


// Question 7

function printName(list){

    for(let i = 0; i < list.length; i++) {
        console.log(list[i].name);
    }
}

printName(cats);


// Question 8

function createCats(cats) {

    let listCats = "";
    
    for(let i = 0; i < cats.length; i++) {

        let age = "Age unknown";

        if (cats[i].age) {
            age = cats[i].age;
        }

        listCats = listCats + "<h5>" + cats[i].name + "</h5><p>" + age + "</p>";
    }

    let finalCats = "<div>" + listCats + "</div>";
    return finalCats;
}

createCats(cats);

const newHtml = createCats(cats);
console.log(newHtml);

catContainer = document.querySelector(".cat-container");
catContainer.innerHTML = newHtml;
