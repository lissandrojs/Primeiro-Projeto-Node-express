import express from "express"

const app = express()

const port = 3000


app.listen(port,()=>{
    console.log(`Rodando na porta ${port}`)
})

app.get("/",(req,res)=>{
    res.send("rodando liso ")
})