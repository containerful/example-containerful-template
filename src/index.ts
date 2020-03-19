import express from 'express'

const app = express()

console.log('starting')
console.log('🚗')
console.log('🚙')
console.log('🚌')
console.log('🚗')
console.log('🚙')
console.log('🚌')
console.log('🚗')
console.log('🚙')
console.log('🚌')

app.get('/', (req, res) => {
    console.log('handle request 🚌')
    const msg = 'ciaoo, my env is \n' + JSON.stringify(process.env, null, 4)
    res.send(msg)
})

app.listen(process.env.PORT, () => console.log('listening 🤹‍♂️'))
