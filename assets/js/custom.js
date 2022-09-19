const nav = document.querySelector('nav');
const logo = document.getElementById('grit-logo')


//The function is invoked on the hashchange event, 
//which is fired when the fragment identifier of the URL has changed (the part of the URL beginning with and following the # symbol)
function changeColorOnHashChange(){


    if(location.hash == "#career"){
        nav.classList.add('changeColor')
        logo.classList.add('changeColorLogo')
    } else if(location.hash == "#contact"){
        nav.classList.add('changeColor')
    } else{
        nav.classList.remove('changeColor')
        logo.classList.remove('changeColorLogo')
    }
        
}

//The function is invoked on the onload event. If the client loads the page from a certain fragment identifier,
//the function will execute.
function changeColorOnLoad(){

    if(location.hash == "#career"){
        nav.classList.add('changeColor')
        logo.classList.add('changeColorLogo')
    } else if(location.hash == "#contact"){
        nav.classList.add('changeColor')
    }
}

 

 