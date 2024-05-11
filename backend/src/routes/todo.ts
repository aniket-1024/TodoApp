import express , { Router } from 'express';
import zod, { boolean } from 'zod';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
import { title } from 'process';
const router:Router = express.Router();

router.get("/get", async(req,res) => {
    const result = await prisma.todo.findMany({
        where: {
            userId: req.body.userId
        },
        select: {
            title: true,
            description: true,
            done: true
        }
    })

    if(result.length > 0) {
        return res.status(200).json(result);
    }

    return res.status(411).json({
        msg: "Todo not found for this user"
    })
})

const todoObject = zod.object({
    title: zod.string().max(40),
    description: zod.string().max(200),
    userId: zod.number()
})


router.post('/add', async(req, res) => {
    const success = todoObject.safeParse(req.body);
    if(!success) {
        return res.status(411).json({
            msg: "please enter valid title"
        })
    }

    const user = await prisma.user.findUnique({
        where: {
            id: req.body.userId
        }
    })

    if(!user) {
        return res.status(411).json({
            msg: "User not found"
        })
    }

    const todo = await prisma.todo.create({
        data: req.body
    })

    return res.status(200).json({
        msg: "Todo added"
    })
})

router.put("/update", async(req, res) => {

    const currState = await prisma.todo.findUnique({
        where: {
            id: req.body.id
        }, 
        select : {
            done: true
        }
    })

    if(!currState) {
        return res.status(411).json({
            msg: "Todo not found"
        })
    }
    
    const result = await prisma.todo.update({
        where: {
            id : req.body.id
        }, 
        data: {
            done: !(currState?.done)
        }
    })
    if(!result) {
        return res.status(411).json({
            msg: "todo not found"
        })
    }
    return res.status(200).json({
        msg: "Todo updated"
    })
})

router.put('/delete', async(req, res) => {
    const todo = await prisma.todo.delete({
        where: {
            id: req.body.id
        }
    })

    if(todo) {
        return res.status(200).json({
            msg: "Todo deleted"
        })
    }

    return res.status(411).json({
        msg: "Todo not found"
    })
})
export default router;