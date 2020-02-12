import bodyParser from "body-parser";

// For work with middlewares
export default function(app) {
    // 404
    app.use((err, req, res, next) => {
        console.log(err.stack);
        res.status(404);
        res.send({ description: "Not found. 404" });
    });

    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());
}