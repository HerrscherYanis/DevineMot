function Result(word){
    const rep = document.getElementById("rep");
    const life = document.getElementById("life");
    const log = document.getElementById("log");
    console.log(word)
    if(verifySpe(rep.value) == false){
        life.innerHTML = life.textContent - 1
        let [valid, not_valid, comment] = verifyRep(word,rep.value)
        log.innerHTML += `<p>${valid} lettres bien plaçées, ${not_valid} lettres mal placées, ${rep.value} ${comment}\n<p>`;
        Win(life.textContent,log.textContent,word,rep.value)
        GameOver(life.textContent,log.textContent,word)
    }
}

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
        if(rep.charAt(i) == word.charAt(i)){
            word = word.replace(word[i], " ");
            yes += 1
        }
    }
    for(let i = 0; i < rep.length; i++){
        if(word.includes(rep[i])){
            word = word.replace(rep[i], " ");
            bof +=1
        }
    }
    return [yes, bof, comment]
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