const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
   res.send('i own everything')
})

app.get('/foo', (req, res) => {
   res.status(418)
   res.send('foo!')
})

app.listen(port, () => console.log(`app listening on port ${port}`))
