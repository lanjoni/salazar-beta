import DiscordJS, { Intents, ReactionUserManager } from 'discord.js'
import dotenv from 'dotenv'
import fetch from 'cross-fetch'
import { quote } from './quotes'
import { cat, dog, raccoon, duck, panda, coala, camaleao, bird, fox, red } from './animals'

dotenv.config()

const client = new DiscordJS.Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES
    ],
    partials: [
        "MESSAGE",
        "CHANNEL",
        "REACTION"
    ]
})

client.on('ready', () => {
    console.log('Bot funcionando!')
})

export async function http(
    request: RequestInfo
  ): Promise<any> {
    const response = await fetch(request);
    const body = await response.json();
    return body;
  }

// example consuming code

client.on('messageCreate', (message) => {

    // API de frases motivacionais!
    if (message.content === '!frase'){
        class Waiter {
            async wait() {
              return await quote();
            }
        }
          
        new Waiter()
            .wait()
            .then(function(frase){message.reply({content: frase})})
    }

// ====================================
// API de imagens de animais!

    if (message.content === '!gato'){
        class Waiter {
            async wait() {
              return await cat();
            }
        }
          
        new Waiter()
            .wait()
            .then(function(cat){message.reply({content: cat})})
    }

    if (message.content === '!cachorro'){
        class Waiter {
            async wait() {
              return await dog();
            }
        }
          
        new Waiter()
            .wait()
            .then(function(dog){message.reply({content: dog})})
    }

    if (message.content === '!guaxinim'){
        class Waiter {
            async wait() {
              return await raccoon();
            }
        }
          
        new Waiter()
            .wait()
            .then(function(raccoon){message.reply({content: raccoon})})
    }

    if (message.content === '!pato'){
        class Waiter {
            async wait() {
              return await duck();
            }
        }
          
        new Waiter()
            .wait()
            .then(function(duck){message.reply({content: duck})})
    }

    if (message.content === '!panda'){
        class Waiter {
            async wait() {
              return await panda();
            }
        }
          
        new Waiter()
            .wait()
            .then(function(panda){message.reply({content: panda})})
    }

    if (message.content === '!coala'){
        class Waiter {
            async wait() {
              return await coala();
            }
        }
          
        new Waiter()
            .wait()
            .then(function(coala){message.reply({content: coala})})
    }

    if (message.content === '!camale??o'){
        class Waiter {
            async wait() {
              return await camaleao();
            }
        }
          
        new Waiter()
            .wait()
            .then(function(camaleao){message.reply({content: camaleao})})
    }

    if (message.content === '!p??ssaro'){
        class Waiter {
            async wait() {
              return await bird();
            }
        }
          
        new Waiter()
            .wait()
            .then(function(bird){message.reply({content: bird})})
    }

    if (message.content === '!raposa'){
        class Waiter {
            async wait() {
              return await fox();
            }
        }
          
        new Waiter()
            .wait()
            .then(function(fox){message.reply({content: fox})})
    }

    if (message.content === '!panda-vermelho'){
        class Waiter {
            async wait() {
              return await red();
            }
        }
          
        new Waiter()
            .wait()
            .then(function(red){message.reply({content: red})})
    }

// ====================================
// Fim da API para animais

// API para Pok??dex!
    if (message.content.startsWith('!pokemon')){
       var pokeMessage = message.content.substring(9);
       var pokemon = pokeMessage.toLowerCase();

       const poke = async () => {
            const res = await fetch('https://some-random-api.ml/pokedex?pokemon=' + pokemon);
            if (res.ok){
                const link = await res.json();
                const jsonPoke = link;

                const objPoke = JSON.parse(JSON.stringify(jsonPoke));

                var pokeID = objPoke.id;
                var pokeName = objPoke.name;
                var pokeType = objPoke.type;
                var pokeSpecies = objPoke.species;
                var pokeAbilities = objPoke.abilities;
                var pokeHeight = objPoke.height;
                var pokeWeight = objPoke.weight;
                var pokeGender = objPoke.gender;
                var pokeEgg_groups = objPoke.egg_groups;
                // Stats
                var pokeStats = objPoke.stats;
                var pokeHP = pokeStats.hp;
                var pokeAttack = pokeStats.attack;
                var pokeDefense = pokeStats.defense;
                var pokeSpAtk = pokeStats.sp_atk;
                var pokeSpDef = pokeStats.sp_def;
                var pokeSpeed = pokeStats.speed;
                var pokeTotal = pokeStats.total;
                // Fam??lia{"evolutionStage":2,"evolutionLine":["Pichu","Pikachu","Raichu","Raichu"]}
                var pokeFamily = objPoke.family;
                var pokeEvolution = pokeFamily.evolutionStage;
                var pokeEvLine = pokeFamily.evolutionLine;
                // Descri????o
                var pokeGeneration = objPoke.generation;
                var pokeDescription = objPoke.description;
                // Imagens do Pok??mon!
                var pokeSprites = objPoke.sprites;
                var pokeAnimated = pokeSprites.animated;
                var pokeNormal = pokeSprites.normal;
                // Send the attachment in the message channel

                message.reply({
                    content: '??? ' + pokeName.toUpperCase() + ' ??? \nID: ' + pokeID + '\nTipo: ' + pokeType.toString() + '\nEsp??cie: ' + pokeSpecies.toString() 
                    + '\nHabilidades: ' + pokeAbilities.toString() + '\nAltura: ' + pokeHeight.toString() + '\nPeso: ' + pokeWeight.toString() 
                    + '\nG??nero: ' + pokeGender.toString() + '\nGrupos: ' + pokeEgg_groups.toString() + '\n\n- ?????? ESTAT??STICAS ?????? -' + '\nHP: ' + pokeHP
                    + '\nAtaque: ' + pokeAttack + '\nDefesa: ' + pokeDefense + '\nAtaque Especial: ' + pokeSpAtk + '\nDefesa Especial: ' + pokeSpDef 
                    + '\nVelocidade: ' + pokeSpeed + '\n???? Total: ' + pokeTotal + '\n\n- ???? FAM??LIA ???? - ' + '\nEst??gio de evolu????o: ' + pokeEvolution
                    + '\nLinha de evolu????o: ' + pokeEvLine.toString() + '\n\n- ???? DESCRI????O ???? - ' + '\nGera????o: ' + pokeGeneration + '\nDescri????o completa: ' + pokeDescription
                    + '\n\n' + pokeAnimated
                })
            } else {
                message.reply({
                    content: 'Pok??mon n??o encontrado!'
                })
            }
        }

        return poke();
    }

// Fim da API para Pok??dex!
})

client.login(process.env.TOKEN)