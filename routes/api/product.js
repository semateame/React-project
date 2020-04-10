const express = require('express')
const productController = require('../../controller/product')
const router = express.Router()

router.get('/products',productController.getProducts)
router.post('/products',productController.postProducts)
router.delete('/products/:id',productController.deleteProducts)
router.put('/products/:id',productController.updateProducts)





module.exports = router