class ProductDAO {
    async save(product, pool) {
        try {
            const query = 'INSERT INTO products (name, description, price, stock) VALUES (?, ?, ?, ?)';
            const [result] = await pool.execute(query, [
                product.name,
                product.description,
                product.price,
                product.stock
            ]);
            return result.insertId;
        } catch (err) {
            throw new Error(`Database error: ${err.message}`);
        }
    }

    async getAll(pool) {
        try {
            const [rows] = await pool.execute('SELECT * FROM products');
            return rows;
        } catch (err) {
            throw new Error(`Database error: ${err.message}`);
        }
    }

    async getById(id, pool) {
        try {
            const [rows] = await pool.execute('SELECT * FROM products WHERE id = ?', [id]);
            return rows[0];
        } catch (err) {
            throw new Error(`Database error: ${err.message}`);
        }
    }

    async update(id, product, pool) {
        try {
            const query = 'UPDATE products SET name = ?, description = ?, price = ?, stock = ? WHERE id = ?';
            const [result] = await pool.execute(query, [
                product.name,
                product.description,
                product.price,
                product.stock,
                id
            ]);
            return result.affectedRows > 0;
        } catch (err) {
            throw new Error(`Database error: ${err.message}`);
        }
    }

    async delete(id, pool) {
        try {
            const [result] = await pool.execute('DELETE FROM products WHERE id = ?', [id]);
            return result.affectedRows > 0;
        } catch (err) {
            throw new Error(`Database error: ${err.message}`);
        }
    }
}

module.exports = new ProductDAO();
