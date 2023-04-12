const { addExpense, getExpenses, deleteExpense } = require('../controllers/expense')
const { addIncome, getIncome, deleteIncome } = require('../controllers/income')

const router = require('express').Router()



router.post('/add-income', addIncome)
        .get('/get-incomes',getIncome)
        .delete('/delete-income/:id',deleteIncome)

        .post('/add-expense',addExpense)
        .get('/get-expenses',getExpenses)
        .delete('/delete-expense/:id',deleteExpense)

        .get('/', function (req, res) {
            res.send('Hello World')
          })



        
module.exports = router

//how to create an express server?