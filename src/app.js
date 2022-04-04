import express from "express"
import {v4 as uuidv4} from "uuid"

const port = 3001
const users = []

const app = express()

app.use(express.json())


app.get("/",(request,response)=>{

    response.send(users)
})
app.get("/user", (request,response)=>{
    return response.json(users)
})

app.post("/user",(request,response)=>{
    
    const {email,name} = request.body
    users.push({
        email,
        name,
        id : uuidv4()
    })

    const userAlreadyExists = users.find((user)=> user.email === email)
    
    if(userAlreadyExists){
        return response.status(400).json({
            error :  "Email de usuario ja existe"
        })
    }else{
        return response.status(201).send()
    }

    
})



app.listen(port)
