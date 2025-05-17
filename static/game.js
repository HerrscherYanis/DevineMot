function Result(word){
    StoreInLog()
    const rep = document.getElementById("rep");
    const life = document.getElementById("life");
    const log = document.getElementById("log");
    if(word == rep.value){
        Win(life.textContent)
    }
    else{
        if(verifySpe(rep.value) == false){
        let [valid, comment] = verifyRep(word,rep.value)
        log.innerHTML += `<p>${valid} chiffre bonne, ${rep.value} ${comment}\n<p>`;
        life.innerHTML = life.textContent - 1
        GameOver(life.textContent,log.textContent,word)
        }
    }
}

function StoreInLog(){
    const list = sessionStorage.getItem("log")
    console.log(list)
    if(list == null)
        console.log("True")
}

function letterOnly(input){
    input.value = input.value.replace(/[^a-z]$/,"")
}

function verifyRep(word,rep){
    x = rep.length
    if(word.length < rep.length){comment="est trop grand.";x = word.length}
    else if(word.length > rep.length){comment="est trop Petit."}
    else{comment= "est de bonne taille."}
    yes = 0
    for(let i = 0; i < x; i++){
        if(word.charAt(i) == rep.charAt(i)){
            yes += 1
        }
    }
    return [yes, comment]
}

function verifySpe(word){
    for (let i = 0; i < word.length; i++) {
        if(/[^a-z]$/.test(word[i])){
            return true
        }
    }
    return false
}
function Win(life){
    sessionStorage.setItem("life", life);
    location.replace("/game/win")
}
function GameOver(life,log,word){
    if(life <= 0){
        sessionStorage.setItem("word", word);
        sessionStorage.setItem("difficulty", window.location.href);
        location.replace("/game/finality")
    }
}
// function insinuate(word_user, length){
//     verify = word_user
//     if(length == -1){
//         verify = self.word_search
//     }
//     for x in range(len(verify)):
//         if self.word_search[x] == word_user[x]:
//             hint.append(1)
//         else:
//             hint.append(0)
    
//     return hint
// }
             
// function world_length(self, word_user):
//         if len(self.word_search) > len(word_user):
//             return {"code" : 1, "comment" : "Votre mot est trop Petit."}
//         elif len(self.word_search) < len(word_user):
//             return {"code" : -1, "comment" : "Votre mot est trop grand"}
//         else:
//             return {"code" : 0, "comment" : "Votre mot est de bonne taille"}

// function check(self, word_user):
//         if type(word_user) is str:
//             length = self.world_length(word_user)
//             hint = self.insinuate(word_user, length["code"])
//             self.think_stupidly(word_user, hint, length["comment"])
//         else:
//             print("Not string")
  
// function think_stupidly(self, word_user, hint, comment):
//         self.memory.append({"word" : word_user, "hint" : hint, "comment" : comment})