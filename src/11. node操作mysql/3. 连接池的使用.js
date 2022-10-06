const mysql = require("mysql2");
// 1.创建连接池
const connection = mysql.createPool({
  host: "localhost",
  port: 3306,
  database: "coderhub",
  user: "root",
  password: "qweasdzxc123",
  //    最多建立10个连接
  connectionLimit: 10,
});

// 2.  使用连接池
const statement = `SELECT * FROM products WHERE price > ? AND score > ? `;
connection.execute(statement, [6000, 7], (err, res) => {
  console.log(res);
});
