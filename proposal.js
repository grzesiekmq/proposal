
// assuming genToken is private function in this sense it's implementation is hidden for security purposes
function genToken(seed, maxRep){
    return seed.split('').map(el => el.repeat(Math.floor(Math.random() * maxRep + 1))).join('')
}


const genHash = (token) => [...new Set(token.split(''))].join('')

const token = genToken('12345', 3);
const hash = genHash(token)

// palindromic seed

const t2 = genToken('racecar', 3)
const h2 = genHash(t2)

// kangaroo
const t3 = genToken('kangaroo', 10)
const h3 = genHash(t3)

// passphrase example

const t4 = genToken('I like cats', 5)
const h4 = genHash(t4)

// Islandish word
const t5 = genToken('jarðskjálftafræði', 5)
const h5 = genHash(t5)

// longest islandish word
const t6 = genToken('Vaðlaheiðarvegavinnuverkfærageymsluskúrslyklakippuhringurinn', 5)
const h6 = genHash(t6)

// hardcore version

const t7 = genToken('Vaðlaheiðarvegavinnuverkfærageymsluskúrslyklakippuhringurinn', 50)
const h7 = genHash(t7)

console.log('random repeat and deduplicate as one-way function from token to hash')
console.log('token: ' + token + '\n')
console.log('hash: ' + hash + '\n')

console.log('t2: ' + t2 + '\n')
console.log('h2: ' + h2)

console.log('t3: ' + t3 + '\n')
console.log('h3: ' + h3)

console.log('t4: ' + t4 + '\n')
console.log('h4: ' + h4)

console.log('t5: ' + t5 + '\n')
console.log('h5: ' + h5)

console.log('t6: ' + t6 + '\n')
console.log('h6: ' + h6)

console.log('t7: ' + t7 + '\n')
console.log('h7: ' + h7)

if(hash === '12345'){
    console.log('should random repeat and deduplicate as one-way function from token to hash \n OK hash test  ')
}
if(h2 === 'gole'){
console.log('OK h2 test ')
}

console.log(`don't sure is there way to go in reverse way
 like how to go from
    hash to token
   
      so in general hash which transforms to these strings which represent possible token
  112345
  122345
  123345
  123445
  123455
  so which one was token? I think it would be hard to find  
  ${'hypothesis'.toUpperCase()}: random repeat and deduplicate is one-way function`)