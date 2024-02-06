const { Router } = require('express')
const { userGet, userPut, userPost, userDel, userPatch } = require('../controllers/user')

const router = Router()

router.get('/', userGet)

router.put('/:id', userPut)

router.post('/', userPost)

router.delete('/', userDel)

router.patch('/', userPatch)

module.exports = router