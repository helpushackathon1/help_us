

const map_element =document.getElementById('map_container')
map_element.innerHTML = `<img src ="image/paris_map.jpg" alt="Carte des combats" style="max-width: 2500px;
	height: auto;">`



const elem1 =document.getElementById('tour')
elem1.innerHTML = `<img id="combat1" src ="image/eiffel_tower.png" alt="Tour Eiffel" 
style="max-width: 100px; height:auto; position:absolute; top: 650px; left: 720px">`
combat1.addEventListener("click", (e)=>{

})


const elem2 =document.getElementById('gare')
elem2.innerHTML = `<img id="combat2" src ="image/gare.png" alt="Gare de Lyon" 
style="max-width: 200px; height:auto; position:absolute; top: 800px; left: 1450px">`
combat2.addEventListener("click", (e)=>{

})


const elem3 =document.getElementById('WCS')
elem3.innerHTML = `<img id="combat3" src ="image/WCS.png" alt="Wild Code School" 
style="max-width: 100px; height:auto; position:absolute; top: 890px; left: 1280px">`
combat3.addEventListener("click", (e)=>{
console.log("click");
})
