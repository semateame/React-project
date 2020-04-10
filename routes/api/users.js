const express = require('express')
const userController = require('../../controller/user')
const router = express.Router()






router.get('/products', userController.getProducts);


router.get('/payment-page', userController.getPayment);

router.get('/order-history', userController.getOrders);
router.post('/delete-history', userController.deleteHistory)

module.exports = router;
