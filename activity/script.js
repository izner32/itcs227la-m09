// object literal
const trainer = {
    name: "",
    age: 0,
    pokemon: [],
    friends: {
        closeFriends: [],
        otherFriends: [],
    },
    talk: function() {
        console.log("Pikachu! I choose you!");
    },
  };
  
console.log(trainer.name);
console.log(trainer["age"]); 
console.log(trainer.friends.closeFriends); 

trainer.talk(); 

// constructor function
function Pokemon(name, level) {
    this.name = name;
    this.level = level;
    this.health = 100 * level;
    this.attack = 10 * level;
    this.tackle = function(targetPokemon) {
        targetPokemon.health -= this.attack;
        if (targetPokemon.health <= 0) {
            this.faint(targetPokemon);
        }
    };
    this.faint = function(targetPokemon) {
        console.log(targetPokemon.name + " has fainted.");
    };
}
  
const pikachu = new Pokemon("Pikachu", 5);
const charizard = new Pokemon("Charizard", 10);
const bulbasaur = new Pokemon("Bulbasaur", 3);

pikachu.tackle(charizard); 
  