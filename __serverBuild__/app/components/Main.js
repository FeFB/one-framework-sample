"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var one_framework_1 = require('one-framework');
var react_router_1 = require('react-router');
var collections_1 = require('../collections');
var Main = (function (_super) {
    __extends(Main, _super);
    function Main(props) {
        _super.call(this, props);
    }
    Main.preServer = function () {
        return collections_1.TodosCollection.instance.fetch({
            reset: true
        });
    };
    Main.prototype.render = function () {
        return (React.createElement("section", null, React.createElement("div", {className: "ui search"}, React.createElement("div", {className: "ui fluid icon input"}, React.createElement("input", {className: "prompt", type: "text", placeholder: "Filter"}), React.createElement("i", {className: "search icon"})), React.createElement("div", {className: "results"})), React.createElement("div", {className: "ui pointing menu"}, React.createElement(react_router_1.Link, {className: "item", activeClassName: "active", onlyActiveOnIndex: true, to: "/"}, "All"), React.createElement(react_router_1.Link, {className: "item", activeClassName: "active", to: "/done"}, "Done"), React.createElement("div", {className: "right menu"}, React.createElement("a", {className: "item", href: "https://github.com/feliperohdee/one-framework-sample"}, "Source"))), this.props.children));
    };
    return Main;
}(one_framework_1.Component));
exports.Main = Main;
//# sourceMappingURL=Main.js.map