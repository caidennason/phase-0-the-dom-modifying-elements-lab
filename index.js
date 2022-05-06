// Write your code here!
let main = document.querySelector('main')
main.remove()

const newHeader = document.createElement('h1')
newHeader.id = 'victory'
newHeader.textContent = 'Caiden is the champion'
document.head.append(newHeader)
