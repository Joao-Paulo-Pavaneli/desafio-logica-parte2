console.log('Rank de jogador');

let Nome = prompt('Digite o nome do jogador:');
let vit =  Number(prompt('Digite o número de vitórias:'));
let derr  = Number(prompt('Digite o número de derrotas:')); 
let diff; 
let rank;

    function calcularRank(vit, derr) {
        let pontos = vit - derr;
        return pontos;
    
    }

    diff= calcularRank(vit, derr);
    
    if (diff < 0) {
        console.log('O jogador ' + Nome + 'O jogador não possui rank.');
    }
    
    else if (diff <= 10) {
      rank = 'Ferro'; 
    }
    else if (diff >= 11 && diff <= 20) {
        rank = 'Bronze';
    }
    else if (diff >= 21 && diff <= 50) {
        rank = 'Prata';
    }
    else if (diff >= 51 && diff <= 80) {
        rank = 'Ouro';
    }
    else if (diff >= 81  &&  diff <= 90) {
        rank = 'Diamante';
    }
    else if (diff >= 91 && diff <= 100) {
        rank = 'Lendario';
    }
    else {
        rank = 'Imortal';
    }




    console.log('O rank do jogador ' + Nome + ' é: ' + rank);