class UserDAO {
    async save(user, pool) {
        try {
            const query = 'INSERT INTO new_table (name, email, phone, age, gender) VALUES (?, ?, ?, ?, ?)';
            const [result] = await pool.execute(query, [
                user.name, 
                user.email, 
                user.phone,
                user.age,
                user.gender
            ]);
            return result.insertId;
        } catch (err) {
            throw new Error(`Database error: ${err.message}`);
        }
    }

    async getAll(pool) {
        try {
            const [rows] = await pool.execute('SELECT * FROM users');
            return rows;
        } catch (err) {
            throw new Error(`Database error: ${err.message}`);
        }
    }
}

module.exports = new UserDAO();
