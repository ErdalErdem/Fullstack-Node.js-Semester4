import { fakerEN_IN } from "@faker-js/faker";

console.log(fakerEN_IN.fullname) 
console.log(fakerEN_IN.bio) 
console.log(fakerEN_IN.streetAddress)
console.log(fakerEN_IN.city)
  

export default async function getMatches(numberOfMatches=5) {
    
        const promises = [];
    
        for (let i = 0; i <= numberOfMatches; i++) {
            const promise = fetch("https://dog.ceo/api/breeds/image/random")
            .then((response) => response.json());
            promises.push(promise);
        }
        const results = await Promise.all(promises);
        const matches = results.map((match) => ({ ...match, ...getIndianProfile() }));
        return matches;
    }
    
    
    
    
    
    

function getIndianProfile() {
    console.log(fakerEN_IN.fullname) 
console.log(fakerEN_IN.bio) 
console.log(fakerEN_IN.streetAddress)
console.log(fakerEN_IN.city)
return {
    name: fakerEN_IN.person.fullName(),
    bio: fakerEN_IN.person.bio(),
    streetAddress: fakerEN_IN.location.streetAddress(),
    city: fakerEN_IN.location.city
}

}
