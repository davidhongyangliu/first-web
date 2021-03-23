//define the search relevant variables
var searchForm=document.querySelector("#searchForm");
var searchBar=document.querySelector("#searchBar");
var searchButton=document.querySelector("#searchButton");
var userInput=searchBar.value;
var leftContent=document.querySelector(".left");
var middleContent=document.querySelector(".middle");
var rightContent=document.querySelector(".right");
var searchResults;

//get user input from home page then clear it.
userInput=sessionStorage.getItem("userInput");

//get user input from search bar
searchBar.addEventListener("input", function(){
    userInput=this.value;
});

//global, case insensitive search algorithm using dynamic regular expression
function findMatch(product){   
    return (new RegExp(userInput, "i", "g").test(product.brand) || new RegExp(userInput, "i", "g").test(product.name) || new RegExp(userInput, "i", "g").test(product.description));
};


// filter functions for filter buttons
function chkAf(product){   
    return (product.brand=="asus");
};
function chkHf(product){   
    return (product.brand=="hp");
};
function chkLf(product){   
    return (product.brand=="lenovo");
};
function chk500f(product){   
    return (product.price>=0 && product.price<=500);
};
function chk1000f(product){   
    return (product.price>=501 && product.price<=1000);
};
function chk2000f(product){   
    return (product.price>=1001 && product.price<=2000);
};
function chk3f(product){   
    return (product.rating==3);
};
function chk4f(product){   
    return (product.rating==4);
};
function chk5f(product){   
    return (product.rating==5);
};

//filter button variables
var chkAb=document.querySelector("#ASUS");
var chkHb=document.querySelector("#HP");
var chkLb=document.querySelector("#Lenovo");
var chk500b=document.querySelector("#d500");
var chk1000b=document.querySelector("#d1000");
var chk2000b=document.querySelector("#d2000");
var chk3b=document.querySelector("#r3star");
var chk4b=document.querySelector("#r4star");
var chk5b=document.querySelector("#r5star");

//filter buttons eventlistners
chkAb.addEventListener("click", function(){
    if(this.checked){
        var chkAs=searchResults.filter(chkAf);
        displayCheckResults(chkAs);
    }
});
chkHb.addEventListener("click", function(){
    if(this.checked){
        var chkHs=searchResults.filter(chkHf);
        displayCheckResults(chkHs);
    }
});
chkLb.addEventListener("click", function(){
    if(this.checked){
        var chkLs=searchResults.filter(chkLf);
        displayCheckResults(chkLs);
    }
});
chk500b.addEventListener("click", function(){
    if(this.checked){
        var chk500s=searchResults.filter(chk500f);
        displayCheckResults(chk500s);
    }
});
chk1000b.addEventListener("click", function(){
    if(this.checked){
        var chk1000s=searchResults.filter(chk1000f);
        displayCheckResults(chk1000s);
    }
});
chk2000b.addEventListener("click", function(){
    if(this.checked){
        var chk2000s=searchResults.filter(chk2000f);
        displayCheckResults(chk2000s);
    }
});
chk3b.addEventListener("click", function(){
    if(this.checked){
        var chk3s=searchResults.filter(chk3f);
        displayCheckResults(chk3s);
    }
});
chk4b.addEventListener("click", function(){
    if(this.checked){
        var chk4s=searchResults.filter(chk4f);
        displayCheckResults(chk4s);
    }
});
chk5b.addEventListener("click", function(){
    if(this.checked){
        var chk5s=searchResults.filter(chk5f);
        displayCheckResults(chk5s);
    }
});


//sort variables 
var sortChoice=document.querySelector("#sortlaptops");
var sortSubmit=document.querySelector("#sortSubmit");

//sort button event listener
sortSubmit.addEventListener("click", function(){
    var sortOption=sortChoice.value;
    if(sortOption=="Lowp"){
        searchResults.sort(function(a, b){return a.price - b.price});
        displayCheckResults(searchResults);
    }
    if(sortOption=="Highp"){
        searchResults.sort(function(a, b){return b.price - a.price});
        displayCheckResults(searchResults);
    }
    if(sortOption=="Lowr"){
        searchResults.sort(function(a, b){return a.rating - b.rating});
        displayCheckResults(searchResults);
    }
    if(sortOption=="Highr"){
        searchResults.sort(function(a, b){return b.rating - a.rating});
        displayCheckResults(searchResults);
    }
});

//set up product class
class Laptop{
    constructor(id, brand, name, price, rating, description,spic,page){
        this.id=id;
        this.brand=brand;
        this.name=name;
        this.price=price;
        this.rating=rating;
        this.description=description;
        this.spic=spic;
        this.page=page;
    }
}
//populate product data
var products=[];
products[0]= new Laptop(0, "asus", "ASUS Chromebook 14 Laptop", 329, 4, "ASUS Chromebook 14\" i5-4265U, 4GB LPDDR4, 16GB eMMC","images/prd0/sprd0.png","prd.html?id=0");
products[1]= new Laptop(1, "asus", "ASUS 15.6\" Laptop", 499, 5, "ASUS 15.6\" Notebook i5-8265U 8GB DDR4","images/prd1/sprd1.png","prd.html?id=1");
products[2]= new Laptop(2, "lenovo", "Lenovo Cool Gamer Laptop 15.6\"", 769, 4, "Lenovo cool gamer 15.6\" Gaming Notebook i7-9035h","images/prd2/sprd2.png","prd.html?id=2");
products[3]= new Laptop(3, "asus", "ASUS Screenpad Laptop 15.6", 799, 4, "ASUS Screenpad Notebook 15.6\" FHD i5-8265U 8GB DDR4 512GB","images/prd3/sprd3.png","prd.html?id=3");
products[4]= new Laptop(4, "hp", "Hp Business Smart Laptop 15.6\"", 829, 3, "Hp Business Smart 15.6\" Notebook i7-8265U 512GB SSD","images/prd4/sprd4.png","prd.html?id=4");
products[5]= new Laptop(5, "asus", "ASUS VivoBookPro Flip 14 Laptop", 899, 4, "ASUS VivoBook Flip 14 Thin and Light 14\" FHD Touch i5-8265U, 8GB DDR4, 512GB SSD","images/prd5/sprd5.png","prd.html?id=5");
products[6]= new Laptop(6, "lenovo", "Lenovo New Face 14\" Laptop", 999, 5, "Lenovo New Face 14\" 512GB SSD Notebook i7-9035h","images/prd6/sprd6.png","prd.html?id=6");
products[7]= new Laptop(7, "lenovo", "Lenovo 14\" ScreenPad Laptop", 1099, 5, "Lenovo 14\" Zenbook ScreenPad, i7-8565U 8GB RAM, 512GB SSD","images/prd7/sprd7.png","prd.html?id=7");
products[8]= new Laptop(8, "hp", "Hp Pavilion Laptop 15.6\"", 1159, 5, "Hp Pavilion Notebook 15.6\" FHD 120Hz Gaming Notebook i7-9500HS 512GB SSD","images/prd8/sprd8.png","prd.html?id=8");
products[9]= new Laptop(9, "hp", "Hp player Laptop 15.6\"", 1499, 5, "Hp player 15.6\" Gaming Notebook i7-1035h 512GB SSD","images/prd9/sprd9.png","prd.html?id=9");
products[10]= new Laptop(10, "asus", "ASUS Zephyrus Laptop 15.6\"", 1799, 4, "ASUS Zephyrus 15.6\" FHD 240Hz Gaming Notebook i7-1135HS 1TB SSD","images/prd10/sprd10.png","prd.html?id=10");

//display search results in the grids, from left to right then goes to next line.
function displayResults(){
    leftContent.innerHTML="";
    middleContent.innerHTML="";
    rightContent.innerHTML="";
    if(userInput==""){
        middleContent.innerHTML="Please try to enter laptop for all products; or brands like asus, hp, lenovo; or specifications like i7, i5, SSD; or screen size like 14 or 15.6.";
        return;
    }
    searchResults=products.filter(findMatch);
    if(searchResults.length==0){
        middleContent.innerHTML="Sorry, we don't have it. Please try to enter laptop for all products; or brands like asus, hp, lenovo; or specifications like i7, i5, SSD; or screen size like 14 or 15.6.";
        return;
    }
    for(var i=0;i<searchResults.length;i++){
        if(i%3==0){
            var link=document.createElement("a");
            link.setAttribute("href",searchResults[i].page);
            var image=document.createElement("img");
            image.setAttribute("src",searchResults[i].spic);
            image.setAttribute("width",300);
            image.setAttribute("height",200);
            image.setAttribute("alt","product");
            link.appendChild(image);          
            leftContent.appendChild(link);
            var newline=document.createElement("br");
            leftContent.appendChild(newline);
            var name=document.createElement("p");
            name.innerHTML=searchResults[i].name;
            leftContent.appendChild(name);
            var price=document.createElement("p");
            price.innerHTML="$"+searchResults[i].price;
            leftContent.appendChild(price);
            var rating=document.createElement("span");
            rating.innerHTML="User Rating: ";
            leftContent.appendChild(rating);          
            for(var j=1;j<=searchResults[i].rating;j++){
                var starchk=document.createElement("span");
                starchk.setAttribute("class","fa fa-star checked");
                leftContent.appendChild(starchk);               
            };
            for(var k=1;k<=5-searchResults[i].rating;k++){
                var starunchk=document.createElement("span");
                starunchk.setAttribute("class","fa fa-star");
                leftContent.appendChild(starunchk);
            };
            leftContent.appendChild(newline);
            var button=document.createElement("button");
            button.innerHTML="Add to Cart";
            leftContent.appendChild(button);
       }
       if(i%3==1){
            var link=document.createElement("a");
            link.setAttribute("href",searchResults[i].page);
            var image=document.createElement("img");
            image.setAttribute("src",searchResults[i].spic);
            image.setAttribute("width",300);
            image.setAttribute("height",200);
            image.setAttribute("alt","product");
            link.appendChild(image);          
            middleContent.appendChild(link);
            var newline=document.createElement("br");
            middleContent.appendChild(newline);
            var name=document.createElement("p");
            name.innerHTML=searchResults[i].name;
            middleContent.appendChild(name);
            var price=document.createElement("p");
            price.innerHTML="$"+searchResults[i].price;
            middleContent.appendChild(price);
            var rating=document.createElement("span");
            rating.innerHTML="User Rating: ";
            middleContent.appendChild(rating);          
            for(var j=1;j<=searchResults[i].rating;j++){
                var starchk=document.createElement("span");
                starchk.setAttribute("class","fa fa-star checked");
                middleContent.appendChild(starchk);               
            };
            for(var k=1;k<=5-searchResults[i].rating;k++){
                var starunchk=document.createElement("span");
                starunchk.setAttribute("class","fa fa-star");
                middleContent.appendChild(starunchk);
            };
            middleContent.appendChild(newline);
            var button=document.createElement("button");
            button.innerHTML="Add to Cart";
            middleContent.appendChild(button);
            middleContent.appendChild(newline);          
   }
      if(i%3==2){
            var link=document.createElement("a");
            link.setAttribute("href",searchResults[i].page);
            var image=document.createElement("img");
            image.setAttribute("src",searchResults[i].spic);
            image.setAttribute("width",300);
            image.setAttribute("height",200);
            image.setAttribute("alt","product");
            link.appendChild(image);          
            rightContent.appendChild(link);
            var newline=document.createElement("br");
            rightContent.appendChild(newline);
            var name=document.createElement("p");
            name.innerHTML=searchResults[i].name;
            rightContent.appendChild(name);
            var price=document.createElement("p");
            price.innerHTML="$"+searchResults[i].price;
            rightContent.appendChild(price);
            var rating=document.createElement("span");
            rating.innerHTML="User Rating: ";
            rightContent.appendChild(rating);          
            for(var j=1;j<=searchResults[i].rating;j++){
                var starchk=document.createElement("span");
                starchk.setAttribute("class","fa fa-star checked");
                rightContent.appendChild(starchk);               
            };
            for(var k=1;k<=5-searchResults[i].rating;k++){
                var starunchk=document.createElement("span");
                starunchk.setAttribute("class","fa fa-star");
                rightContent.appendChild(starunchk);
            };
            rightContent.appendChild(newline);         
            var button=document.createElement("button");
            button.innerHTML="Add to Cart";
            rightContent.appendChild(button);
            rightContent.appendChild(newline);                  
       }
    }
}

//display search results from user input on home page
window.addEventListener("load",displayResults());

//display search results from user input on search page
searchButton.addEventListener("click",function(){
    var radios=document.querySelectorAll(".radioButton");
    for(var i=0;i<radios.length;i++){
        radios[i].checked=false;
    }
    displayResults()});

//display filter results according to filter choice.
//also this function could be used for sort results
//if we only change the parameter to sorted result array.
function displayCheckResults(checkResult){
    leftContent.innerHTML="";
    middleContent.innerHTML="";
    rightContent.innerHTML="";
    
    for(var i=0;i<checkResult.length;i++){
        if(i%3==0){
            var link=document.createElement("a");
            link.setAttribute("href",searchResults[i].page);
            var image=document.createElement("img");
            image.setAttribute("src",checkResult[i].spic);
            image.setAttribute("width",300);
            image.setAttribute("height",200);
            image.setAttribute("alt","product");
            link.appendChild(image);          
            leftContent.appendChild(link);
            var newline=document.createElement("br");
            leftContent.appendChild(newline);
            var name=document.createElement("p");
            name.innerHTML=checkResult[i].name;
            leftContent.appendChild(name);
            var price=document.createElement("p");
            price.innerHTML="$"+checkResult[i].price;
            leftContent.appendChild(price);
            var rating=document.createElement("span");
            rating.innerHTML="User Rating: ";
            leftContent.appendChild(rating);          
            for(var j=1;j<=checkResult[i].rating;j++){
                var starchk=document.createElement("span");
                starchk.setAttribute("class","fa fa-star checked");
                leftContent.appendChild(starchk);               
            };
            for(var k=1;k<=5-checkResult[i].rating;k++){
                var starunchk=document.createElement("span");
                starunchk.setAttribute("class","fa fa-star");
                leftContent.appendChild(starunchk);
            };
            leftContent.appendChild(newline);
            var button=document.createElement("button");
            button.innerHTML="Add to Cart";
            leftContent.appendChild(button);
       }
       if(i%3==1){
            var link=document.createElement("a");
            link.setAttribute("href",searchResults[i].page);
            var image=document.createElement("img");
            image.setAttribute("src",checkResult[i].spic);
            image.setAttribute("width",300);
            image.setAttribute("height",200);
            image.setAttribute("alt","product");
            link.appendChild(image);          
            middleContent.appendChild(link);
            var newline=document.createElement("br");
            middleContent.appendChild(newline);
            var name=document.createElement("p");
            name.innerHTML=checkResult[i].name;
            middleContent.appendChild(name);
            var price=document.createElement("p");
            price.innerHTML="$"+checkResult[i].price;
            middleContent.appendChild(price);
            var rating=document.createElement("span");
            rating.innerHTML="User Rating: ";
            middleContent.appendChild(rating);          
            for(var j=1;j<=checkResult[i].rating;j++){
                var starchk=document.createElement("span");
                starchk.setAttribute("class","fa fa-star checked");
                middleContent.appendChild(starchk);               
            };
            for(var k=1;k<=5-checkResult[i].rating;k++){
                var starunchk=document.createElement("span");
                starunchk.setAttribute("class","fa fa-star");
                middleContent.appendChild(starunchk);
            };
            middleContent.appendChild(newline);
            var button=document.createElement("button");
            button.innerHTML="Add to Cart";
            middleContent.appendChild(button);
            middleContent.appendChild(newline);          
   }
      if(i%3==2){
            var link=document.createElement("a");
            link.setAttribute("href",searchResults[i].page);
            var image=document.createElement("img");
            image.setAttribute("src",checkResult[i].spic);
            image.setAttribute("width",300);
            image.setAttribute("height",200);
            image.setAttribute("alt","product");
            link.appendChild(image);          
            rightContent.appendChild(link);
            var newline=document.createElement("br");
            rightContent.appendChild(newline);
            var name=document.createElement("p");
            name.innerHTML=checkResult[i].name;
            rightContent.appendChild(name);
            var price=document.createElement("p");
            price.innerHTML="$"+checkResult[i].price;
            rightContent.appendChild(price);
            var rating=document.createElement("span");
            rating.innerHTML="User Rating: ";
            rightContent.appendChild(rating);          
            for(var j=1;j<=checkResult[i].rating;j++){
                var starchk=document.createElement("span");
                starchk.setAttribute("class","fa fa-star checked");
                rightContent.appendChild(starchk);               
            };
            for(var k=1;k<=5-checkResult[i].rating;k++){
                var starunchk=document.createElement("span");
                starunchk.setAttribute("class","fa fa-star");
                rightContent.appendChild(starunchk);
            };
            rightContent.appendChild(newline);         
            var button=document.createElement("button");
            button.innerHTML="Add to Cart";
            rightContent.appendChild(button);
            rightContent.appendChild(newline);                  
       }
    }
    
}
