//set up product class
class Laptop{
    constructor(id, brand, name, price, rating, description,spic){
        this.id=id;
        this.brand=brand;
        this.name=name;
        this.price=price;
        this.rating=rating;
        this.description=description;
        this.spic=spic;
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

//set quantity input for instant price change
var quantity=document.querySelector("#quantity")

quantity.addEventListener("input", function(){
    document.querySelector("#price").innerHTML="$"+products[0].price*quantity.value;

});

//get the product choice from url parameter
var productShow=window.location.search;
console.log(productShow);
var productId=productShow.substring(4);
console.log(productId);


//add window load function to display product
window.addEventListener("load",displayProduct());


function displayProduct(){
    document.querySelector("#subtitle").innerHTML="";
    document.querySelector("#subtitle").innerHTML=products[productId].name;
    document.querySelector("#image").setAttribute("src",products[productId].spic);
    document.querySelector("#description").innerHTML=products[productId].description;
    var ratings=document.querySelector("#rating");
    for(var j=1;j<=products[productId].rating;j++){
        var starchk=document.createElement("span");
        starchk.setAttribute("class","fa fa-star checked");
        ratings.appendChild(starchk);               
    };
    for(var k=1;k<=5-products[productId].rating;k++){
        var starunchk=document.createElement("span");
        starunchk.setAttribute("class","fa fa-star");
        ratings.appendChild(starunchk);
    };
    document.querySelector("#price").innerHTML="$"+products[productId].price;
    document.querySelector("#ov").setAttribute("src", "images/overview.png");
    document.querySelector("#sp").setAttribute("src", "images/specification.png");
    document.querySelector("#wr").setAttribute("src", "images/warranty.png");

}

//pass search value to search page
var searchForm=document.querySelector("#searchForm");
var searchBar=document.querySelector("#searchBar");
var searchButton=document.querySelector("#searchButton");
var userInput=searchBar.value;

searchBar.addEventListener("input", function(){
    userInput=this.value;
    sessionStorage.setItem("userInput", userInput);

})
searchButton.addEventListener("click", function(e){
    window.location.replace("SearchPage.html");

   
});