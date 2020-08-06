const expres= require('express')
const app = expres();
const port=process.env.PORT
const stage=process.env.STAGE

app.get('/', (req,res)=>{
    res.send('Hola Mundo')
})

app.get('/json', (req,res)=>{
    res.json({
        from:stage,
        status:true,
        data:"Hola Mundo",
        timestamp: new Date()
    })
})

app.listen(port, ()=>{
    console.log('Server run on port ', port)
})



