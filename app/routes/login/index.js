export default function(app, path, config) {
    app.post(path, (req, res) => {
        if(req.body.user) {
            req.session.user = req.body.user;
            res.end({ status: 200, description: "success" });
        }

        res.end({ status: 400, description: "Bad request" });
    })
}