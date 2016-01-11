'use strict';

var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var NotFoundRoute = Router.NotFoundRoute;
var DefaultRoute = Router.DefaultRoute;
var Link = Router.Link;
var RouteHandler = Router.RouteHandler;
var Redirect = Router.Redirect;

// components
var App = require('./components/App');
var Index = require('./components/Index');
var Single = require('./components/Single');
var About = require('./components/About');
var Blog = require('./components/Blog');
var Exhibition = require('./components/Exhibition');
//var NotFound = require('./components/NotFound');

// routes
var routes = (
  <Route name="App" path="/" handler={App}>
    <DefaultRoute handler={Index} />
    <Route name="About" path='/about' handler={About} />
    <Route name="Single" path='/post/:id/:slug' handler={Single} />
    <Route name="Blog" path='/blog' handler={Blog} />
    <Route name="Exhibition" path='/exhibition' handler={Exhibition} />
    {/*
    

    <NotFoundRoute handler={NotFound} />
    */}
  </Route>
);

// render

Router.run(routes, Router.HistoryLocation, function(Handler) {
  React.render(
    React.createElement(Handler, {}),
    document.getElementById('unun')
  );
});