export default function(app, db) {
    const path = "/";

    app.get(path, (req, res) => {
        res.send({
            status: "ok",
            version: "0.1.0"
        })
    })
}