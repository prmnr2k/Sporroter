"use strict";
var index_component_1 = require("./index/index.component");
var unauthorized_component_1 = require("./unauthorized/unauthorized.component");
var notfound_component_1 = require("./notfound/notfound.component");
var discover_component_1 = require("./discover/discover.component");
var activity_component_1 = require("./activity/activity.component");
var search_component_1 = require("./search/search.component");
var user_component_1 = require("./user/user.component");
exports.routs = [
    { path: "", pathMatch: "full", component: index_component_1.IndexComponent },
    { path: "discover", component: discover_component_1.DiscoverComponent },
    { path: "activity", component: activity_component_1.ActivityComponent },
    { path: "search", component: search_component_1.SearchComponent },
    { path: "user", component: user_component_1.UserComponent },
    { path: "401", component: unauthorized_component_1.UnauthorizedComponent },
    { path: "404", component: notfound_component_1.NotFoundComponent },
    { path: "**", component: notfound_component_1.NotFoundComponent }
];
//# sourceMappingURL=pages.route.js.map