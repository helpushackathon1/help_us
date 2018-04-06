



/* decla variable*/
let persoTeam = []
let imagePerso=[]
let imageBad =[]
let badTeam =[]

const map_element =document.getElementById('map_container')
const fightScreenElt = document.getElementById("fightScreen")
const injectHeroes = document.getElementById('select_heroes')
const choix = document.getElementById('choice')
const injectTeamHeroes = document.getElementById('teamPerso')
const btn = document.getElementById('btn_next')
const elem1 =document.getElementById('tour')
const elem2 =document.getElementById('gare')
const elem3 =document.getElementById('WCS')

const reset = () => {
	fightScreenElt.innerHTML = ""
	injectHeroes.innerHTML = ""
	choix .innerHTML = ""
	injectTeamHeroes.innerHTML = ""
	btn.innerHTML = ""
	map_container.innerHTML = ""
	elem1.innerHTML = ""
	elem2.innerHTML = ""
	elem3.innerHTML = ""
}
/*creation de la map */

const createMap = () => {
	map_element.innerHTML = `<img src ="image/paris_map.jpg" alt="Carte des combats" style="max-width: 2500px;
		height: auto;">`

	
	elem1.innerHTML = `<img id="combat1" src ="image/eiffel_tower.png" alt="Tour Eiffel" 
	style="max-width: 100px; height:auto; position:absolute; top: 650px; left: 720px">`
	combat1.addEventListener("click", (e)=>{
		reset()
    	lancerCombat("url('image/eiffel_tower.jpg')",0,"fnScenario")

	})


	elem2.innerHTML = `<img id="combat2" src ="image/gare.png" alt="Gare de Lyon" 
	style="max-width: 200px; height:auto; position:absolute; top: 800px; left: 1450px">`
	combat2.addEventListener("click", (e)=>{
		reset()
    	lancerCombat("url('image/gare.jpg')",0,"fnScenario")

	})


	elem3.innerHTML = `<img id="combat3" src ="image/WCS.png" alt="Wild Code School" 
	style="max-width: 100px; height:auto; position:absolute; top: 890px; left: 1280px">`
	combat3.addEventListener("click", (e)=>{
	console.log("click");
	})
}

/*création zone de fight*/

const createDivPerso = () => {
	let divPerso = document.createElement("div")
	divPerso.style.backgroundColor = "black"
	divPerso.style.height = "1260px"
	divPerso.style.width = "350px"
	divPerso.id="divPersoId"
	fightScreen.appendChild(divPerso)
}
const createDivZone = (urlBack) => {
	let divZone = document.createElement("div")
	divZone.style.backgroundImage = urlBack
	divZone.style.height = "1260px"
	divZone.style.position ="absolute"
	divZone.style.top="0px"
	divZone.style.left="360px"
	/*divZone.style.marginLeft= "200px"*/
	divZone.style.width = "1400px"
	divZone.id="divZoneId"
	fightScreen.appendChild(divZone)
}



/* création perso*/
const createPicturePerso = (perso,tab) => {
	let img = new Image()
	img.src = perso.images.sm
	console.log(perso)
	if (tab.length<6){tab.push(img)}
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
    			persoTeam.splice(i-1,1)//suppression perso battu
    			imagePerso.splice(i-1,1)//suppression perso battu
    			console.log("direction map ou game over si lenght = 0")
    			console.log(persoTeam)
    			reset()
    			createMap()

    		}
    		else {
    			console.log("personne ne gagne!"+perso1.powerstats.combat)
    			console.log("rien ne change ")
    				}
    	})
   		divZoneId.appendChild(fightButton);
}


/*lancer la pâge combat avec les perso selectionné */
const lancerCombat=(urlBack,numBad,fnScenario) => {
createDivPerso()
createDivZone(urlBack)


	let heroes = persoTeam
	console.log(heroes)
	console.log(heroes[0].slug)
	heroes.forEach(function(perso) {
		if (perso != undefined) {
		createPicturePerso(perso,imagePerso)
  		console.log("forEach");
  	}
	})
	//tab des méchants = on recupere la badteam fait sur selection des perso
	badTeam.forEach(function(perso) {
		createPicturePerso(perso,imageBad)
  		console.log("badTeam"+badTeam);
	})


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
}


//creer page de selection des persos
const persoPage = () => {
const baseUrl = 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api'

const getHeroes = () => fetch(`${baseUrl}/all.json`)
    .then(response => response.json())

const start = async () => {
    const heroes = await getHeroes()

    //fonction lancer choix des personnages
    
    //injection instruction

    
    choix.innerHTML = '<h3>Compose ton équipe de 5 personnages différents</h3>'

    /* heroes random selection*/
    const selecteur = []
    for (let i = 0; i < 10; i++) {
        const randomHeroes = heroes[Math.floor((Math.random() * heroes.length))]
        selecteur.push(randomHeroes)
    }

    // bad random team
    /*const badTeam = []*/
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



    injectHeroes.innerHTML = selecteur.map(heroesElement).join('')

    //Creation de la team
   /*const persoTeam = []*/
    document.addEventListener("click", (e) => {
        const perso = e.target.parentElement.id
        
        const fichePerso = heroes.find(heroe => heroe.id == perso)
        persoTeam.push(fichePerso)
        console.log(persoTeam)


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
   
    btn.innerHTML = '<button class="button_next"><span>Suite</span></button>'
    btn.addEventListener("click",(e)=>{
    	reset()
    	lancerCombat("url('image/eiffel_tower.jpg')",0,"fnScenario")
    })
}


start()
}
persoPage()




