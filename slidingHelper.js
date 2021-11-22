const alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

const encryptData = (data, keyValue) => {

    data = data.toUpperCase()
    let result = ''

    for (let i = 0; i < data.length; i++) {
        const index = alphabet.indexOf(data[i])
        result += alphabet[(index + keyValue) % alphabet.length]
    }

    return result.toLowerCase()
}

const decryptData = (data, keyValue) => {

    data = data.toUpperCase()
    let result = ''

    for (let i = 0; i < data.length; i++) {
        const index = alphabet.indexOf(data[i])
        result += alphabet[(alphabet.length + (index - keyValue)) % alphabet.length]
    }

    return result.toLowerCase()
}

module.exports = {
    encryptData,
    decryptData
}