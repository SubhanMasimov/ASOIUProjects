const { encryptData, decryptData } = require('./slidingHelper')

const word = 'naziwzxyzabbccddeeff'
const keyValue = 1
const encryptedData = encryptData(word, keyValue)
console.log(`word: ${word}, encrypted: ${encryptedData}`)

const decryptedData = decryptData(encryptedData, keyValue)
console.log(`word: ${word}, encrypted: ${encryptedData}, decrypted: ${decryptedData}`)
