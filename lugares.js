const lugaresQueVisitei = ["Paris", "Nova York", "Tóquio", "Rio de Janeiro"];
const lugaresDoAmiguinho = ["Nova York", "Sydney", "Rio de Janeiro", "Barcelona"];

const lugaresEmComum = [];

for (let i = 0; i < lugaresQueVisitei.length; i++) {
    for (let j = 0; j < lugaresDoAmiguinho.length; j++) {
        if (lugaresQueVisitei[i] === lugaresDoAmiguinho[j]) {
            lugaresEmComum.push(lugaresQueVisitei[i]);
        }
    }
}

console.log("Lugares em comum:");
for (let i = 0; i < lugaresEmComum.length; i++) {
    console.log(lugaresEmComum[i]);
}
