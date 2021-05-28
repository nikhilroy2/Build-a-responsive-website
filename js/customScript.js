let initialMeta = document.querySelector('#initialMeta')
function myFunction(x) {
   
    if(x.media === '(max-width: 1280px)'){
        initialMeta.setAttribute('content', 'width=device-width, initial-scale=.67')
    } else if(x.media === '(max-width: 1000px)'){
        initialMeta.setAttribute('content', 'width=device-width, initial-scale=.6')
    }
  }
  

  myFunction(window.matchMedia("(max-width: 1280px)")) // Call listener function at run time
  myFunction(window.matchMedia("(max-width: 1000px)")) // Call listener function at run time
  //x.addListener(myFunction) // Attach listener function on state changes