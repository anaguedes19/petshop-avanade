const nomePetshop = "PETSHOP AVANADE";

let pets = 
[
{
    nome: 'Hercules',
    tipo: 'cachorro',
    idade: 8,
    raca: 'Border-collie',
    peso: 14,
    tutor: 'Ana',
    contato: '(81) 98899-3016',
    vacinado: true,
    serviços: ['banho', 'tosa']
},
{
    nome: 'Perola',
    tipo: 'cachorro',
    idade: 10,
    raca: 'Poodle',
    peso: 10,
    tutor: 'Amanda',
    contato: '(81) 98877-3010',
    vacinado: true,
    serviços: ['banho', 'tosa']
},
{
    nome: 'Brutus',
    tipo: 'cachorro',
    idade: 11,
    raca: 'Rottweiler',
    peso: 20,
    tutor: 'Luciano',
    contato: '(81) 98789-3018',
    vacinado: true,
    serviços: ['banho', 'tosa']
},
];

const listarPets = () =>{
    for(let pet of pets){
        // console.log(pets[i].nome + " " + pets[i].tutor);
        console.log(`O Nome do pet é ${pet.nome}, e o nome do  tutor é ${pet.tutor}`);
    }
}

listarPets();

//console. log(pet);