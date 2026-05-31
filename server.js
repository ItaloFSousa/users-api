import express from 'express'
import pkg from '@prisma/client'

const { PrismaClient } = pkg
const prisma = new PrismaClient()

const app = express()
app.use(express.json())

app.post('/users', async (req, res) => {
    try {
        const { name, age, email } = req.body

        const user = await prisma.user.create({
            data: { name, age, email }
        })

        res.status(201).json(user)
    } catch (err) {
        res.status(500).json({ error: "Erro ao criar usuário" })
    }
})

app.get('/users', async (req, res) => {
    try {
        const { name } = req.query

        const users = await prisma.user.findMany({
            where: name ? { name } : {}
        })

        res.status(200).json(users)
    } catch (err) {
        res.status(500).json({ error: "Erro ao buscar usuários" })
    }
})

app.put('/users/:id', async (req, res) => {
    try {
        const { id } = req.params
        const { name, age, email } = req.body

        const user = await prisma.user.update({
            where: { id: Number(id) },
            data: { name, age, email }
        })

        res.status(200).json(user)
    } catch (err) {
        res.status(500).json({ error: "Erro ao atualizar usuário" })
    }
})

app.delete('/users/:id', async (req, res) => {
    try {
        const { id } = req.params

        await prisma.user.delete({
            where: { id: Number(id) }
        })

        res.status(200).json({ message: "Usuário deletado com sucesso!" })
    } catch (err) {
        res.status(500).json({ error: "Erro ao deletar usuário" })
    }
})

app.listen(3000, () => {
    console.log("Servidor rodando em http://localhost:3000")
})