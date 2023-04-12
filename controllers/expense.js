const expense = require("../models/income")
const ExpenseSchema = require("../models/expense")

exports.addExpense = async (req,res) => {
    const {title,amount,category,description,date} = req.body

    const expense = ExpenseSchema({
        title,
        amount,
        category,
        description,
        date,
    })

    try {
        if(!title || !category || !description || !date) {
            return res.status(400).json({message:"All fields required!"})
        }
        if(amount <= 0 || !amount === "number"){
            return res.status(400).json({message: "Amount should be a number!"})
        }
        await expense.save()
        res.status(200).json({message:"Expense added successfully!"})
    } catch (error) {
        res.status(500).json({message:"Server Error!"})
        
    }
}

exports.getExpenses = async (req,res) => {
    try {
        const expenses = await ExpenseSchema.find().sort({createdAt:-1})
        res.status(200).json(expenses)
    } catch (error) {
        res.status(500).json({message:"Server Error"})
    }
}


exports.deleteExpense = async (req,res) => {
    const {id } = req.params;
    ExpenseSchema.findByIdAndDelete(id)
        .then((expense) => {
            res.status(200).json({message:"Expense deleted!"})
        })
        .catch((error) => {
            res.status(500).json({message: "Server Error"})
        })
}

