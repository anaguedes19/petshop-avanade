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
    vacinado: false,
    serviços: ['banho', 'tosa']
},
];

const listarPets = () =>{
    for(let pet of pets){
        // console.log(pets[i].nome + " " + pets[i].tutor);
        console.log(`O Nome do pet é ${pet.nome}, e o nome do  tutor é ${pet.tutor}`);
        vacinarPet(pet.vacinado, pet.nome);
    }
}
const vacinarPet = (vacinado, nome) =>{
  if(vacinado === false){
      console.log(`${nome} Não foi vacinado`);
  }

}
const campanhaVacina = () => {
      
    let naoVacinados = 0;
      for(let pet of pets){
       if(pet.vacinado === false){
           naoVacinados++;
       }

    }

    console.log(`${naoVacinados} deve ser vacinados!`);

}
const adicionarPet = () =>{
    let petNovo =
    {
            nome: 'Amora',
            tipo: 'Cachorro',
            idade: 8,
            raca: 'Pug',
            peso: 5,
            tutor: 'Luzinete',
            contato: '(81) 912357903',
            vacinado: false,
            servicos: ['']
    }
    pets.push(petNovo);
}
    
adicionarPet();
listarPets();
campanhaVacina();

//console. log(pet);