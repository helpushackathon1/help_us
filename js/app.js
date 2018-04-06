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


