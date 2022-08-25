const { readFile, writeFile } = require('fs').promises
const asyncWrapper = require('../middlewares/asyncWrapper')

async function jsonReader(filePath) {
    const jsonString = await readFile(filePath, "utf-8")
    return JSON.parse(jsonString)
}

const getLists = asyncWrapper(async (req, res) => {
    const jsonString = await readFile('./data/lists.json', 'utf-8')
    res.status(201).json(JSON.parse(jsonString))
})

const createList = asyncWrapper(async (req, res) => {
    const newList = {
        id: 'fkdfldf',
        ...JSON.parse(JSON.stringify(req.body))
    }
    const prevData = await jsonReader('./data/lists.json')
    const appendData = [...prevData, newList]
    await writeFile('./data/lists.json', JSON.stringify(appendData))
    res.status(201).send('added data')
})

module.exports = { getLists, createList }