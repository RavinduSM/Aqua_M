const proxy = require("http-proxy-middleware");

module.exports = function(app) {
    app.use(
        proxy("/users", {
            target: "http://localhost:${port}/fishPredictions?fishName=Angel",
            secure: false,
            changeOrgin: true
        })
    )
};