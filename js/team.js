//  desktop view, gallery page, image hover effect

window.onresize = function(){ location.reload(); }

let people = document.getElementsByTagName("figure");
console.log(people.length)

const mediaQuery = window.matchMedia('(min-width: 1152px)')

if (mediaQuery.matches) {
  // Then trigger an alert
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

