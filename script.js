// On crée les constantes

// Les bouttons
const btn = document.getElementById("btn").children;
const fact = document.getElementById("fact");
const paie = document.getElementById("paie");

// Nombre de résultats
const nbResult = document.getElementById("nb-result");

// Les résultats affichés
const element = document.getElementById("element");

// Ici on écoute le clique sur le boutton et on l'incrémente puis on défini les éléments du boutton
for (let boutton = 0; boutton < btn.length; boutton++) {btn[boutton].addEventListener("click", function show(e) {
    e.preventDefault();
    if (this == fact) {
        search('https://secure.askolga.fr/bucket/dda2bd02f8704c9b6cbb43b137ddf0bf126de8073a292ec13839ace7ddf9f3035fe10baa5a8ca/search/614768b520691e6b657aadd6e453579b7508bc42bbe8dea79d922e00457986c05fe1100254df1-show.json')
    } else if (this == paie) {
        search('https://secure.askolga.fr/bucket/dda2bd02f8704c9b6cbb43b137ddf0bf126de8073a292ec13839ace7ddf9f3035fe10baa5a8ca/search/19250d2ab84c89c078f4396fa7eccd32e61c0982f92e977792b6543daa7561905fe10f513d761-show.json')
    } else {
        search('https://secure.askolga.fr/bucket/dda2bd02f8704c9b6cbb43b137ddf0bf126de8073a292ec13839ace7ddf9f3035fe10baa5a8ca/search/2ead5ddcaf8cb815fda8a6bd473aa939083a36ba222f7c13a3aba4c8780efb485fe10e4ec41b0-show.json')
    }
})};

// Ici on défini la fonction avec l'url et le json
function search(url) {
    let compt = 0;
    element.innerHTML = "";
        fetch(url).then((response) => {
            response.json().then((data) => {
                let tab = data.documents;
                for (let info in tab) {
                    if(compt % 2 == 0) {
                        element.innerHTML += "<div class='element case black'>" + tab[info].filename + "</div>";
                    } else {
                        element.innerHTML += "<div class='element case'>" + tab[info].filename + "</div>";
                    }
                    compt++;
                    console.log(data);
                }
                if (compt > 2) {
                    nbResult.textContent = compt + " documents trouvés"
                } else {
                    nbResult.textContent = compt + " document trouvé"
                }
            })
    })
};