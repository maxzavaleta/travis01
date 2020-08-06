npm i nodemon -D

for use nodemon:   add script in package.json: 
 "dev" : "nodemon index"

npm i dotenv

add .env file
add in index.js : require ('dotenv').config()
add console.log and test with npm run dev

create server.js

add line require('./server') in index.js


for use env: const port=process.env.PORT

npm i express 

in server.js:

const expres= require('express')
const app = expres();

app.listen(port, ()=>{
    console.log('Server run on port ', port)
})



for get method:

app.get('/', (req,res)=>{
    res.send('Hola Mundo')
})


for get method type json:

app.get('/json', (req,res)=>{
    res.json({
        status:"OK",
        data:"Hola Mundo",
        timestamp: new Date()
    })
})


//For source control

initilizalize repo

git init

add .gitignore file, contents folder node_moudles and file .env (not publish user/passwords)

agregar dockerfile con Command Pallete, como se usa la variable port, se debe definir en el DOckerfile con el valor a exponer



