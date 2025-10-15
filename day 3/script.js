import express from 'express'
const app = express()

app.use(express.json()) 
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.send('Hello World')
})
app.get('/about', (req, res, next) => {
    return next(new Error('Something went wrong'))
})

app.use((err, req, res, next) => {

    console.log(err.stack);
    res.status(500).send('Something broke!')

})

app.listen(3000)

