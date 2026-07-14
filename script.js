const produits = [

{
nom:"Real Madrid",
image:"images/real-madrid.jpg.JPG",
fan:6000,
player:7000
},

{
nom:"FC Barcelona",
image:"images/barcelona.jpg.JPG",
fan:6000,
player:7000
},

{
nom:"PSG",
image:"images/psg.jpg.WEBP",
fan:6000,
player:7000
},

{
nom:"Manchester United",
image:"images/manchester-united.jpg.JPG",
fan:6000,
player:7000
},

{
nom:"Liverpool",
image:"images/liverpool.jpg.WEBP",
fan:6000,
player:7000
},

{
nom:"Arsenal",
image:"images/arsenal.jpg.AVIF",
fan:6000,
player:7000
},

{
nom:"Bayern Munich",
image:"images/bayer-munich.jpg.JPG",
fan:6000,
player:7000
},

{
nom:"Manchester City",
image:"images/manchester-city.jpg.JPG",
fan:6000,
player:7000
},

{
nom:"Juventus",
image:"images/juventus.jpg.WEBP",
fan:6000,
player:7000
},

{
nom:"Napoli",
image:"images/napoli.jpg.WEBP",
fan:6000,
player:7000
},

{
nom:"Borussia Dortmund",
image:"images/borussia-dortmund.jpg.WEBP",
fan:6000,
player:7000
},

{
nom:"Tottenham",
image:"images/tottenham.jpg.WEBP",
fan:6000,
player:7000
},

{
nom:"Chelsea",
image:"images/chelsea.jpg.WEBP",
fan:6000,
player:7000
},

{
nom:"AC Milan",
image:"images/ac-milan.jpg.WEBP",
fan:6000,
player:7000
},

{
nom:"Atlético Madrid",
image:"images/atletico-madrid.jpg.JPG",
fan:6000,
player:7000
},

{
nom:"Inter Milan",
image:"images/inter-milan.jpg.JPG",
fan:6000,
player:7000
},

{
nom:"Sevilla",
image:"images/seville.jpg.JPG",
fan:6000,
player:7000
},

{
nom:"Valencia",
image:"images/valence.jpg.JPG",
fan:6000,
player:7000
},

{
nom:"Villarreal",
image:"images/villa-real.jpg.JPG",
fan:6000,
player:7000
},

{
nom:"Real Betis",
image:"images/real-betis.jpg.WEBP",
fan:6000,
player:7000
},

{
nom:"Athletic Bilbao",
image:"images/athletic-bilbao.jpg.JPG",
fan:6000,
player:7000
},

{
nom:"Newcastle United",
image:"images/newcastle.jpg.WEBP",
fan:6000,
player:7000
},

{
nom:"Aston Villa",
image:"images/aston-villa.jpg.WEBP",
fan:6000,
player:7000
},

{
nom:"West Ham",
image:"images/west-ham.jpg.JPG",
fan:6000,
player:7000
},

{
nom:"Brighton",
image:"images/brighton.jpg.WEBP",
fan:6000,
player:7000
},

{
nom:"AS Roma",
image:"images/roma.jpg.WEBP",
fan:6000,
player:7000
},

{
nom:"Lazio",
image:"images/lazio.jpg.JPG",
fan:6000,
player:7000
},

{
nom:"Atalanta",
image:"images/atalanta.jpg.JPG",
fan:6000,
player:7000
},

{
nom:"Fiorentina",
image:"images/fiorentina.jpg.JPG",
fan:6000,
player:7000
},

{
nom:"Bayer Leverkusen",
image:"images/leverkusen.jpg.JPG",
fan:6000,
player:7000
},

{
nom:"RB Leipzig",
image:"images/rb-leipzig.jpg.WEBP",
fan:6000,
player:7000
},

{
nom:"Marseille",
image:"images/marseille.jpg.WEBP",
fan:6000,
player:7000
},

{
nom:"Lyon",
image:"images/lyon.jpg.JPG",
fan:6000,
player:7000
},

{
nom:"Monaco",
image:"images/monaco.jpg.WEBP",
fan:6000,
player:7000
},

{
nom:"Lille",
image:"images/lille.jpg.WEBP",
fan:6000,
player:7000
},

{
nom:"Ajax",
image:"images/ajax.jpg.JPG",
fan:6000,
player:7000
}
];

const container = document.getElementById("products");

produits.forEach(p => {

container.innerHTML += `

<div class="card">

<img src="${p.image}" alt="${p.nom}">

<div class="card-content">

<h3>${p.nom}</h3>

<span class="badge">🔥 Best Seller</span>

<div class="stars">★★★★★</div>

<p class="price">👕 Version Fan : ${p.fan} FCFA</p>

<p class="price">⭐ Version Player : ${p.player} FCFA</p>

<select id="${p.nom}">
<option>S</option>
<option>M</option>
<option>L</option>
<option>XL</option>
<option>XXL</option>
</select>

<a class="buy" onclick="commander('${p.nom}')">
🛒 Commander
</a>

</div>

</div>

`;

});

function commander(maillot){

const taille = document.getElementById(maillot).value;

const message =
`Bonjour Fans Zone 👋

Je souhaite commander :

🏆 ${maillot}

📏 Taille : ${taille}

Merci.`;

window.open(
`https://wa.me/22374878819?text=${encodeURIComponent(message)}`,
"_blank"
);

}

const recherche = document.getElementById("searchInput");

recherche.addEventListener("keyup", () => {

const texte = recherche.value.toLowerCase();

const cartes = document.querySelectorAll(".card");

cartes.forEach(c => {

c.style.display = c.innerText.toLowerCase().includes(texte)
? "block"
: "none";

});

});
