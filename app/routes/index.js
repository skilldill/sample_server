import Root from "./root";
import Users from "./users";

export default function(app, config) {
    // Work with routes
    Root(app, "/");
    Users(app, "/users");
}