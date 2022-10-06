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
//  使用promise避免在回调中拿到结果
const statement = `SELECT * FROM products WHERE price > ? AND score > ? `;
connection
  .promise()
  .execute(statement, [6000, 7])
  .then(([res]) => {
    //  res 是一个数组[res, fields]
    console.log(res.length);
  })
  .catch((err) => {
    console.log(err);
  });
