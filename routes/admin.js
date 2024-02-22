const express = require("express");

const router = express.Router();
const {getAddCategory,postAddCategory, getCategories, deleteCategory, postEditCategory} = require('../controller/admin');
router.get("/add-category", getAddCategory);

router.post("/add-category", postAddCategory);
router.get("/categories",getCategories)
router.get("/delete-category",deleteCategory)
router.post("/edit-category", postEditCategory);



module.exports = router;