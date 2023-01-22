const arrows = document.querySelectorAll(".arrow");
const movieLists = document.querySelectorAll(".movie-list");

arrows.forEach((arrow, i) => {
  const itemNumber = movieLists[i].querySelectorAll("img").length;
  let clickCounter = 0;
  arrow.addEventListener("click", () => {
    const ratio = Math.floor(window.innerWidth / 270);
    clickCounter++;
    if (itemNumber - (4 + clickCounter) + (4 - ratio) >= 0) {
      movieLists[i].style.transform = `translateX(${
        movieLists[i].computedStyleMap().get("transform")[0].x.value - 300
      }px)`;
    } else {
      movieLists[i].style.transform = "translateX(0)";
      clickCounter = 0;
    }
  });

  console.log(Math.floor(window.innerWidth / 270));
});
const menu = document.getElementById("we")
let navList = document.querySelector(".sidebar")
let menuSlideIn = false


menu.addEventListener("click", ()=>{
    if(menuSlideIn === false){
    navList.style.cssText = "transform:translateX(-100%); transition: 0.5s linear"
        console.log("kingsley na badass dev")
        menuSlideIn = true
    }
    else if(menuSlideIn===true){
        navList.style.cssText = "transform:translateX(0%); transition: 0.5s linear"
        console.log("kingsley na badass dev")
        menuSlideIn = false
    }

        })