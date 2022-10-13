const llamaNamer = function () {
  const possibleNames = ["Larry", "Leon", "Leona", "Les", "Laura", "Lemony", "Lars", "Lekisha"]
  const randomizer = Math.floor(Math.random() * 7)

  return function () {
      const suffix = " the Llama"
      const name = possibleNames[randomizer]
      
  }

 
}

nameMaker = llamaNamer()
console.log(nameMaker)
