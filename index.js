import express from 'express'
import {dirname, join} from 'path'
import { fileURLToPath } from 'url'

import rutas_index from './rutas/index.js'

const app = express()

const __dirname = dirname(fileURLToPath(import.meta.url))

app.set('views', join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.use(rutas_index)

app.use(express.static(join(__dirname, 'publico')))

app.listen(3000)
console.log('servidor en puerto', 3000)
