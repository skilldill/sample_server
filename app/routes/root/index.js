export default function(app, path, config) {
    app.get(path, (req, res) => {
        console.log(req.session)
        res.send({
            status: "ok",
            version: "0.1.0"
        })
    });
}