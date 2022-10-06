const mysql = require("mysql2");
// 1.创建数据库连接
const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  database: "coderhub",
  user: "root",
  password: "qweasdzxc123",
});

// 2.  预处理语句  使用预处理 可以提高性能 避免sql注入
const statement = `SELECT * FROM products WHERE price > ? AND score > ? `;
connection.execute(statement, [6000, 7], (err, res) => {
  console.log(res);
});
