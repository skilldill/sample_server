export default function(app, db) {
    // Work with routes
    app.get("/", (req, res) => {
        res.send({ "status": "root" });
    });

    // work with one url, methods: GET, POST
    app.get("/users", (req, res) => {
        res.send({ "status": "get users" });
    });

    app.post("/users", (req, res) => {
        console.log(req.body);
        res.send({"status": "post users"});
    })
}