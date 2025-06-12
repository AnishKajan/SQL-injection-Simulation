# PostgreSQL Profile Query API

This is a simple Express.js and PostgreSQL API that retrieves user profile data based on a provided `id` parameter.

## ⚠️ Disclaimer

This project is for **educational purposes only**. It demonstrates basic database interaction using Node.js and PostgreSQL.

⚠️ **Important:** The current query method is intentionally vulnerable to SQL injection and should **not** be used in production. Use parameterized queries like:

```js
await client.query("SELECT * FROM profiles WHERE id = $1", [id]);
