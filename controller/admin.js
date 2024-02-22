const Category = require("../models/category");

exports.getAddCategory =async (req, res) => {
    const query = req.query
    if(query.action=="edit" && query.category) {
        let category = await  Category.findByPk(query.category)
        let name =  category.dataValues.name
        
        res.render("add-category",{
            categoryId: query.category,
            name:name,
            action:"edit"
        });
    }
    else{
        res.render("add-category",{
            name:null,
            action:"add"
        });

    }

};
exports.postAddCategory = async (req, res) => {
 await Category.create({
    name: req.body.category,
  });
  res.redirect('categories')
};

exports.getCategories = async (req, res) => {
    const categories = await Category.findAll()
    res.render("get-categories",{
        categories:categories
    });
}
exports.deleteCategory = async (req, res) => {
    await Category.destroy({where:{categoryId:req.query.category}})
 res.redirect('categories')

}
exports.postEditCategory = async (req, res) => {
    const query = +req.query.categoryId
    await Category.update({ name: req.body.category }, {
        where: {
          categoryId: query,
        },
      });

    res.redirect('categories')
}