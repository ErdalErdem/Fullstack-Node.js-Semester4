import { fakerEN_IN } from "@faker-js/faker";

console.log(fakerEN_IN.fullname) 
console.log(fakerEN_IN.bio) 
console.log(fakerEN_IN.streetAddress)
console.log(fakerEN_IN.city)
  
export default function getMatches(numberOfMatches=5) {
    const matches = [];
for (let i = 0; i<=numberOfMatches; i++) {
 fetch("https://dog.ceo/api/breeds/image/random")
   .then((response) => response.json())
   .then((result) => console.log(result))
    }   
return matches
}

function getIndiaProfile() {
    console.log(fakerEN_IN.fullname) 
console.log(fakerEN_IN.bio) 
console.log(fakerEN_IN.streetAddress)
console.log(fakerEN_IN.city)
return {
    name: fakerEN_IN.person.fullName(),
    bio: fakerEN_IN.person.bio()
}

}
