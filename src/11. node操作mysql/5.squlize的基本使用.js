const { Sequelize } = require("sequelize");
const sequelize = new Sequelize("coderhub", "root", "qweasdzxc123", {
  host: "localhost",
  dialect: "mysql",
});
sequelize
  .authenticate()
  .then(() => {
    console.log("连接成功");
  })
  .catch((err) => {
    console.log(err, "连接失败");
  });
