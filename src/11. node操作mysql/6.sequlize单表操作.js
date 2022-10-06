const { Sequelize, Model, DataTypes, Op } = require("sequelize");
const sequelize = new Sequelize("coderhub", "root", "qweasdzxc123", {
  host: "localhost",
  dialect: "mysql",
});

class Products extends Model {}
Products.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    price: DataTypes.DOUBLE,
    score: DataTypes.DOUBLE,
  },
  {
    tableName: "products",
    createdAt: false,
    updatedAt: false,
    sequelize,
  }
);

async function queryProducts() {
  //  1.查询表中所有的内容
  const result = await Products.findAll({
    where: {
      price: {
        [Op.gte]: 5000,
      },
    },
  });
  console.log(result);
}
queryProducts();
