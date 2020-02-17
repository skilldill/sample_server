import bodyParser from "body-parser";
import session from "express-session";

// For work with middlewares
export default function(app) {
    // 404
    app.use((err, req, res, next) => {
        console.log(err.stack);
        res.status(404);
        next({ status:404, description: "Not found. 404" });
    });
    
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());

    // Session
    app.use(session({
        secret: '***',
        resave: false,
        saveUninitialized: true,
        cookie: { secure: true }
    }));

}