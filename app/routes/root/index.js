export default function(app, path, config) {
    app.get(path, (req, res) => {
        res.send({
            status: "ok",
            version: "0.1.0"
        })
    })
}