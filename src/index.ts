import express from 'express'

const app = express()

app.get('/', (req, res) => {
    const msg = 'ciaoo, my env is \n' + JSON.stringify(process.env, null, 4)
    res.send(msg)
})

app.listen(process.env.PORT, () => console.log('listening 🤹‍♂️'))
