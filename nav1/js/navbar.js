
///screen size condition

function myFunction(x) {
      // $(".navbar-nav").toggle( 'slow')
      $(".navbar-nav").hide(1)
      if(x.matches){ 
                  $(".toggler").click(function(){
                  $(".navbar-nav").toggle( 1)
                  // x.matches=ture
           })
           console.log(x.matches)
            }
            if(!x.matches){
                  $(".navbar-nav").show(1)
                  x.matches=false
            }
} 


var x = window.matchMedia("(max-width: 900px)")
    myFunction(x)
// Call listener function at run time
    x.addEventListener("change",myFunction)
    if(!x.matches){
      $(".navbar-nav").show("fast")
}
time=new Date()
year=time.getFullYear()
console.log(year)
document.querySelector("#year").innerText=year