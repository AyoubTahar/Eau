let string = process.argv
let tableau =[]
let tableauBulle =[]
function RecupNb (arg){
    let j = 0
    for (let i = 2 ; i< arg.length ; i++){
        if (isNaN(arg[i])) {
            console.log(`error`)
            process.exit() // arrête le script avec le code d'erreur 
        }
        tableau[j] = arg[i]
        j++
        
    }
    }

function TriBulle (tab){
    for (let i = tab.length -1 ; i > 0 ; i--){
        for (let j = 0 ; j < tab.length; j++){
            if(tab[j] > tab[j+1] ){
                let temp = tab[j];
                tab[j] = tab[j+1];
                tab[j+1] = temp;
            }
        }
    }
    console.log(tab)
}
RecupNb(string)
console.log(tableau)
TriBulle(tableau)