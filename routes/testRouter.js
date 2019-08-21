var express = require('express');
var router = express.Router();

/**
 * @swagger
 * /test:
 *    get:
 *      description: This should greet the user
 *      parameters:
 *      - in: query
 *        name: name
 *        schema:
 *          type: string
 *        description: The name of the person to greet
 *      responses:
 *        200:
 *          description: OK
 */
router.get("/", function(req, res) {
  const name = req.query.name || "World";
  const greeting = `Hello ${name}`;
  res.json({ message: greeting });
});

module.exports = router;
