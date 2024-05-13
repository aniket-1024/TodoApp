import express , { Router } from 'express'
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
const router:Router = express.Router();
import zod from 'zod'



const signupBody:any = zod.object({
    username: zod.string().email(),
    firstName: zod.string(),
    lastName: zod.string(),
    password: zod.string()
})

router.post('/signup', async(req,res) => {
    const { success } = signupBody.safeParse(req.body);
    if(!success) {
        return res.status(411).json({
            msg: "Incorrect Input"
        })
    }

    const existingUser = await prisma.user.findUnique({
        where: {
            username: req.body.username
        }
    })

    if(existingUser) {
        return res.status(411).json({
            msg: "Username already taken, try something new"
        })
    }

    const result = await prisma.user.create({
        data: req.body,
        select: {
            id: true
        }
    })

    return res.json({
        id: result.id
    })

})

const singinBody:any = zod.object({
    username: zod.string().email(),
    password: zod.string()
})

router.post("/signin", async(req,res) => {
    const success = singinBody.safeParse(req.body);

    if(!success) {
        return res.status(411).json({
            msg: "Invalid username and password"
        })
    }

    const result = await prisma.user.findUnique({
        where: {
            username: req.body.username,
            password: req.body.password
        }, 
        select: {
            id: true
        }
    })

    if(result) {
        return res.json({
            id: result.id
        })
    }

    return res.status(411).json({
        msg: "Incorrect username or passwod"
    })

})

router.post("/getuser", async(req,res) => {
    const response = await prisma.user.findUnique({
        where: {
            id: req.body.id
        },
        select: {
            firstName: true
        }
    })

    if(response?.firstName) {
        return res.json({
            "firstName": response?.firstName
        })
    }
})
export default router;