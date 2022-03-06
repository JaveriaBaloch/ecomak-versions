
///screen size condition

function myFunction(x) {
      $(".navbar-nav").toggle( 'slow')
      $(".navbar-nav").hide()
      if(x.matches){ 
            $(".toggler").show()
                  $(".toggler").click(function(){
                  $(".navbar-nav").toggle()
                  // x.matches=ture
           })
      //      $(".navbar-nav").focusout(function(){
      //       $(".navbar-nav").hide()
      //      })
           console.log(x.matches)
            }
            if(!x.matches){
                  $(".toggler").hide()
                  $(".navbar-nav").show(1)
                  x.matches=false
            }
} 


var x = window.matchMedia("(max-width: 991px)")
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