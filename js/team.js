//  desktop view, gallery page, image hover effect
let people = document.getElementsByTagName("figure");
console.log(people.length)

const mediaQuery = window.matchMedia('(min-width: 1152px)')

if (mediaQuery.matches) {
  // Then trigger an alert
  console
  for ( const ele of people){
    ele.addEventListener("mouseover", function(){
      let cap = ele.querySelector(".team figcaption");
      console.log(cap);
      cap.style.display = "block";
    })
    ele.addEventListener("mouseout", function(){
      let cap = ele.querySelector(".team figcaption");
      console.log(cap);
      cap.style.display = "none";
    })
  }
}



