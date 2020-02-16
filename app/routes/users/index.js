export default function UsersRoute(app, path, config) {
    // work with one url, methods: GET, POST
    app.get(path, (req, res) => {
        res.send({ status: "ok" });
    });

    app.post(path, (req, res) => {
        const user = req.body;
        console.log("success add user");
        res.send({ status: "added", user });
    });
}