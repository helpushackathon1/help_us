


/*génération de la page de combat  */

/*Données nécessaires au combat : 
- 5 super heros avec leurs caractéristiques
- background
- items à récuperer?
*/
/* decla variable*/
let persoTeam = []
let imagePerso=[]
let imageBad =[]
let badTeam =[]


const fightScreenElt = document.getElementById("fightScreen")



/*création zone de fight*/

const createDivPerso = () => {
	let divPerso = document.createElement("div")
	divPerso.style.backgroundColor = "black"
	divPerso.style.height = "1260px"
	divPerso.style.width = "350px"
	/*divPerso.style.border = "1px solid red"*/
	divPerso.id="divPersoId"
	fightScreen.appendChild(divPerso)
}
const createDivZone = (urlBack) => {
	let divZone = document.createElement("div")
	divZone.style.backgroundImage = urlBack
	divZone.style.height = "860px"
	divZone.style.position ="absolute"
	divZone.style.top="0px"
	divZone.style.left="360px"
	/*divZone.style.marginLeft= "200px"*/
	divZone.style.width = "1400px"
	/*divZone.style.border = "1px solid blue"*/
	divZone.id="divZoneId"
	fightScreen.appendChild(divZone)
}



/* création perso*/
const createPicturePerso = (perso) => {
	let img = new Image()
	img.src = perso.images.sm
	imagePerso.push(img)
	console.log("create image!")
}

const placerPerso = (persoImg,posX, posY,emplacement)=>{
	persoImg.style.position = "absolute";
	persoImg.style.top = posX;
	persoImg.style.left = posY;
	emplacement.appendChild(persoImg);
	console.log("placer perso exécuté!");
}
//div avec caractéristique
const caractere = (perso) => {
	let divCaract = document.createElement("div")
	/*divCaract.style.border = "10px solid purple"*/
	divCaract.style.color = "white"
	divCaract.style.width = "150px"
	divCaract.classList.add("caractClass")
	divCaract.innerHTML = `<p>${perso.name} </p>
							<p>life : ${perso.powerstats.combat} </p>
							<p> attack : ${perso.powerstats.strength}</p>`
	return divCaract
}

/*creation du bouton fight si clic sur perso */

const createButtonFight = (perso1,perso2,i) => {
	let fightButton = document.createElement("input")
		fightButton.setAttribute("name","fightButton")
    	fightButton.setAttribute("value","FIGHT")
    	fightButton.setAttribute("type","button")
		fightButton.style.position ="absolute"
		fightButton.style.backgroundColor = "red"
		fightButton.style.fontSize = "24px"
		fightButton.style.padding = "10px"
		fightButton.style.color = "white"
		fightButton.id = "fightButtonId"
		fightButton.style.top="800px"
		fightButton.style.left="700px"
		fightButton.width = "100px"
    	fightButton.addEventListener("click", (e)=> {
    		console.log("click sur FIGHHHHHHHHT")
    		console.log(perso1)
    		console.log("perso1 "+ perso1.powerstats.combat )
    		perso1.powerstats.combat -= perso2.powerstats.strength
    		perso2.powerstats.combat -= perso1.powerstats.strength
    		if (perso2.powerstats.combat <= 0){
    			console.log("perso1 win"+perso1.powerstats.combat )
    			console.log("direction scenario suivant")
    		}
    		else if (perso1.powerstats.combat<=0) {
    			console.log("perso2 win"+perso1.powerstats.combat)
    			persoTeam.splice(i,1)//suppression perso battu
    			console.log("direction map ou game over si lenght = 0")
    			console.log(persoTeam)


    		}
    		else {
    			console.log("personne ne gagne!"+perso1.powerstats.combat)
    			console.log("rien ne change ")
    				}
    	})
   		divZoneId.appendChild(fightButton);
}


/*récuperation perso API : attention asynchrone ! */
const lancerCombat=(urlBack,numBad,fnScenario) => {
createDivPerso()
createDivZone(urlBack)

const recupPerso = (id) => {
	return fetch(`https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/id/${id}.json`)
		.then(res => res.json())
}

Promise.all([
	recupPerso(1),
	recupPerso(2),
	recupPerso(3),
	recupPerso(4),
	recupPerso(5),
]).then(heroes => {
	console.log(heroes)
	console.log(heroes[0].slug)
	heroes.forEach(function(perso) {
		createPicturePerso(perso)
  		console.log("forEach");
	})
	//tab des méchants = heroes ici en attendant 

	imageBad = imagePerso 
	persoTeam = heroes
	badTeam = persoTeam

	tabX=["10px","260px","510px","760px","1010px"]
	tabY=["10px","260px","510px","760px","1010px"]

	console.log(imagePerso)
	for(let i = 0; i < persoTeam.length;i++){
		console.log("placerperso = "+persoTeam.length)
		placerPerso(imagePerso[i],tabX[i],"30px",divPersoId)
	}

	console.log(persoTeam[1])
	console.log(caractere(persoTeam[1]))
	console.log(badTeam)

	for(let i = 0; i < persoTeam.length;i++){
		placerPerso(caractere(persoTeam[i]),tabX[i],"200px",divPersoId)
	}

	//rendre les images cliquables
	for(let i=0;i<persoTeam.length;i++) {
		imagePerso[i].addEventListener("click",(e)=>{
			console.log("click"+imagePerso[i])
			placerPerso(imagePerso[i],"400px","450px",divZoneId)
			placerPerso(imageBad[numBad],"400px","900px",divZoneId)
			console.log("BOUTON FIGHT!")
			console.log(persoTeam[i])
			console.log(badTeam[numBad])
			createButtonFight(persoTeam[i],badTeam[numBad],i)
		})
	}
})

}

lancerCombat("url('image/eiffel_tower.jpg')",3,"fnScenario")

const persoPage = () => {
const baseUrl = 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api'

const getHeroes = () => fetch(`${baseUrl}/all.json`)
    .then(response => response.json())

const start = async () => {
    const heroes = await getHeroes()

    //fonction lancer choix des personnages
    
    //injection instruction

    const choix = document.getElementById('choice')
    choix.innerHTML = '<h3>Compose ton équipe de 5 personnages différents</h3>'

    /* heroes random selection*/
    const selecteur = []
    for (let i = 0; i < 10; i++) {
        const randomHeroes = heroes[Math.floor((Math.random() * heroes.length))]
        selecteur.push(randomHeroes)
    }

    // bad random team
    const badTeam = []
    for (let i = 0; i < 3; i++) {
        const randomBadHeroes = heroes[Math.floor((Math.random() * heroes.length))]
        badTeam.push(randomBadHeroes)
    }

    //injection des heroes random dans le html
    const heroesElement = monarray => {
        return `
            <div class='vignette_heroes' id="${monarray.id}" >
                <img src='${monarray.images.sm}' />
                <h3>${monarray.name}</h3>
                <span>Life : ${monarray.powerstats.combat}</span>
                <span>Attack : ${monarray.powerstats.strength}</span>
            </div>
    `
    }

    const injectHeroes = document.getElementById('select_heroes')
    injectHeroes.innerHTML = selecteur.map(heroesElement).join('')

    //Creation de la team
    const persoTeam = []
    document.addEventListener("click", (e) => {
        const perso = e.target.parentElement.id
        
        const fichePerso = heroes.find(heroe => heroe.id == perso)
        persoTeam.push(fichePerso)
        console.log(persoTeam)

        const injectTeamHeroes = document.getElementById('teamPerso')
        injectTeamHeroes.innerHTML = persoTeam.map(heroesTeamElement).join('')
    })

    //injection des heroes choisi dans le html
    const heroesTeamElement = monarray => {
        return `
            <div class='team_heroes' id="${monarray.id}" >
                <img src='${monarray.images.sm}' />
                <h3>${monarray.name}</h3>
                <span>Life : ${monarray.powerstats.combat}</span>
                <span>Attack : ${monarray.powerstats.strength}</span>
            </div>
    `
    }

    //injection button next
    const btn = document.getElementById('btn_next')
    btn.innerHTML = '<button class="button_next"><span>Suite</span></button>'
}


start()
}
persoPage()



