const { response, request } = require('express')

const userGet = (req = request, res = response) => {
    const { name, age = "N/A", page = "1", limit = "5" } = req.query

    res.json({
        msg : 'Get API - Controller',
        name,
        age,
        page,
        limit
    })
}

const userPut = (req, res) => {
    const id = req.params.id
    //const { id } = req.params

    res.json({
        msg : 'Put API - Controller',
        id
    })
}

const userPost = (req, res) => {
    const body = req.body
    //const { name, age } = req.body

    res.status(201).json({
        msg : 'Post API - Controller',
        body
    })
}

const userDel = (req, res) => {
    res.json({
        msg : 'Delete API - Controller'
    })
}

const userPatch = (req, res) => {
    res.json({
        msg : 'Patch API - Controller'
    })
}

module.exports = {
    userGet,
    userPut,
    userPost,
    userDel,
    userPatch
}