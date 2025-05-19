function over(){
    document.getElementById("word").innerHTML = `<h2>${sessionStorage.getItem("word")}<h2>`;
}

function Relocalize(){
    location.replace(sessionStorage.getItem("difficulty"))
}

function begin(){
    difficult = sessionStorage.getItem("difficulty").split("/");
    if(difficult[difficult.length - 1] == "easy"){x = 10*2}
    else if(difficult[difficult.length - 1] == "medium"){x = Math.floor(10*1.5)}
    else if(difficult[difficult.length - 1] == "hard"){x = 10*1}
    else{x = Math.floor(10*0.1)}
    document.getElementById("congrat").innerHTML = `<p>Vous avez trouvé le mot en ${x - sessionStorage.getItem("life")} essais.</p>`
    list = sessionStorage.getItem("log").split("\n")
    for(let i = 0; i < list.length ; i++)
    {
        document.getElementById("logs").innerHTML += `<p>${list[i]}\n</p>`
    }
    console.log(sessionStorage.getItem("log"));
}