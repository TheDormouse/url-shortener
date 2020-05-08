const express = require('express')
const app = express();
const bodyParser = require('body-parser')
const port = process.env.PORT || 3000
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()
const fetch = require('isomorphic-unfetch')
app.use(bodyParser.json())


app.route('/:id?')
    .get(async (req, res) => {
        if(req.params.id) {
            const id = parseInt(req.params.id)
            const url = await prisma.urls.findOne({
                where: { id: 1}
            })
            res.redirect(url.url)

        } else {
            res.send('Welcome')
        }
        
    })
    .post(async (req, res) => {
        const url = req.body.url;
        try {
            await fetch(url).then(r => r.status === 200)
            const record = await prisma.urls.upsert({
                where: {
                    url: url
                },
                create: {
                    url: url
                },
                update: {
                    url: url
                }
            })
            const newUrl = 'http://' + req.headers['host'] + '/' + record.id
            res.send({url: newUrl})
        } catch {
            res.status(400).send('Invalid URL')
        }
       
    })

app.listen(port, console.log('Listening on ' + port))