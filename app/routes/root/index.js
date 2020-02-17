export default function(app, path, config) {
    app.use(path, (err, req, res, next) => {
        next({ status: 401, description: "Unauthorized" });
    })

    app.get(path, (req, res) => {
        console.log(req.session)
        res.send({
            status: "ok",
            version: "0.1.0"
        })
    })
}