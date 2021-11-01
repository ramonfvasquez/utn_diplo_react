var pool = require('../db');

async function getPlays() {
    try {
        var query = 'SELECT * FROM obras;';
        var rows = await pool.query(query);

        return rows;
    } catch (error) {
        throw error
    }
}

module.exports = { getPlays };