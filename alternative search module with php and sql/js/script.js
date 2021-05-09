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


