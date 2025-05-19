function Result(word){
    const rep = document.getElementById("rep");
    const life = document.getElementById("life");
    const log = document.getElementById("log");
    if(verifySpe(rep.value) == false){
        life.innerHTML = life.textContent - 1
        let [valid, not_valid, comment] = verifyRep(word,rep.value)
        log.innerHTML += `<p>${valid} lettres bonnes, ${not_valid} lettres mal placées, ${rep.value} ${comment}\n<p>`;
        Win(life.textContent,log.textContent,word,rep.value)
        GameOver(life.textContent,log.textContent,word)
    }
}

// function StoreInLog(word){
//     list = sessionStorage.getItem("log");
//     console.log(list);
//     if(list == null){
//         delete list;
//         sessionStorage.setItem("log", []);
//         list = sessionStorage.getItem("log");
//     }
//     x = []
//     for (let i = 0; i < list.length; i++) {
//         console.log(list[i]);
//         x.push(list[i])
//     }
//     x.push(word)
//     sessionStorage.setItem("log", x);
//     console.log(x);
// }


function letterOnly(input){
    input.value = input.value.replace(/[^a-z]$/,"")
}

function verifyRep(word,rep){
    x = rep.length
    if(word.length < rep.length){comment="est trop grand.";x = word.length}
    else if(word.length > rep.length){comment="est trop Petit."}
    else{comment= "est de bonne taille."}
    bof = 0
    yes = 0
    for(let i = 0; i < x; i++){
        for(let y = 0; y < x; y++){
            if(rep.charAt(i) == word.charAt(y)){
                bof += 1
                break
            }
        }
        if(rep.charAt(i) == word.charAt(i)){
            yes += 1
        }
    }
    return [yes, bof, omment]
}

function verifySpe(word){
    for (let i = 0; i < word.length; i++) {
        if(/[^a-z]$/.test(word[i])){
            return true
        }
    }
    return false
}
function Win(life,log,word,rep){
    if(word == rep){
        sessionStorage.setItem("life", life);
        sessionStorage.setItem("log", log);
        sessionStorage.setItem("difficulty", window.location.href);
        location.replace("/game/win")
    }
}
function GameOver(life,log,word){
    if(life <= 0){
        sessionStorage.setItem("word", word);
        sessionStorage.setItem("difficulty", window.location.href);
        location.replace("/game/finality")
    }
}