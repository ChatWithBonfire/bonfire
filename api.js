/* 
User limits

- 4000 Char limit
- ???

*/

module.exports = function(app, db) {
    app.get('/api/v1/users/:id', function(req, res) {
        if (db.has(req.params.id)) {
            
        }
        res.send(db.get(req.params)
    }
    )}