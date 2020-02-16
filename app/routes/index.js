import Root from "./root";
import Users from "./users";

export default function(app, db) {
    // Work with routes
    Root(app, db);
    Users(app, db);
}