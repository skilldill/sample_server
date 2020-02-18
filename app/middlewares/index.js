import bodyParser from "body-parser";
import session from "express-session";

// For work with middlewares
export default function(app) {
    function middlewaresWrapper(routes, config) {
        app.use(bodyParser.urlencoded({extended: true}));
        app.use(bodyParser.json());
        
        // Session
        app.use(session({
            secret: '***',
            resave: false,
            saveUninitialized: true,
            cookie: { secure: true }
        }));
        
        //Place for routes
        routes(app, config);

        // 404
        app.use((req, res, next) => {
            res.status(404);
            res.send({ status:404, description: "Not found. 404" });
        });
    }
    
    return middlewaresWrapper;
}