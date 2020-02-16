export default function UsersRoute(app, db) {
    // work with one url, methods: GET, POST
    const path = "/users";

    app.get(path, (req, res) => {
        res.send({ status: "ok" });
    });

    app.post(path, (req, res) => {
        const user = req.body;
        console.log("success add user");
        res.send({ status: "added", user });
    });
}