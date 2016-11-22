"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
//import { ObjectID } from "mongodb";
const odata_v4_server_1 = require("odata-v4-server");
let Product = class Product {
    getUnitPrice(result) {
        return result.UnitPrice;
    }
};
__decorate([
    odata_v4_server_1.Edm.Key,
    odata_v4_server_1.Edm.Computed,
    odata_v4_server_1.Edm.String,
    odata_v4_server_1.Edm.Annotate({
        term: "UI.DisplayName",
        string: "Product identifier"
    }, {
        term: "UI.ControlHint",
        string: "ReadOnly"
    })
], Product.prototype, "id", void 0);
__decorate([
    odata_v4_server_1.Edm.String,
    odata_v4_server_1.Edm.Required
], Product.prototype, "CategoryId", void 0);
__decorate([
    odata_v4_server_1.Edm.EntityType("Category"),
    odata_v4_server_1.Edm.Partner("Products")
], Product.prototype, "Category", void 0);
__decorate([
    odata_v4_server_1.Edm.Boolean
], Product.prototype, "Discontinued", void 0);
__decorate([
    odata_v4_server_1.Edm.String,
    odata_v4_server_1.Edm.Annotate({
        term: "UI.DisplayName",
        string: "Product title"
    }, {
        term: "UI.ControlHint",
        string: "ShortText"
    })
], Product.prototype, "Name", void 0);
__decorate([
    odata_v4_server_1.Edm.String,
    odata_v4_server_1.Edm.Annotate({
        term: "UI.DisplayName",
        string: "Product English name"
    }, {
        term: "UI.ControlHint",
        string: "ShortText"
    })
], Product.prototype, "QuantityPerUnit", void 0);
__decorate([
    odata_v4_server_1.Edm.Decimal,
    odata_v4_server_1.Edm.Annotate({
        term: "UI.DisplayName",
        string: "Unit price of product"
    }, {
        term: "UI.ControlHint",
        string: "Decimal"
    })
], Product.prototype, "UnitPrice", void 0);
__decorate([
    odata_v4_server_1.Edm.Function,
    odata_v4_server_1.Edm.Decimal,
    __param(0, odata_v4_server_1.odata.result)
], Product.prototype, "getUnitPrice", null);
Product = __decorate([
    odata_v4_server_1.Edm.Annotate({
        term: "UI.DisplayName",
        string: "Products"
    })
], Product);
exports.Product = Product;
let Category = class Category {
};
__decorate([
    odata_v4_server_1.Edm.Key,
    odata_v4_server_1.Edm.Computed,
    odata_v4_server_1.Edm.String,
    odata_v4_server_1.Edm.Annotate({
        term: "UI.DisplayName",
        string: "Category identifier"
    }, {
        term: "UI.ControlHint",
        string: "ReadOnly"
    })
], Category.prototype, "id", void 0);
__decorate([
    odata_v4_server_1.Edm.String
], Category.prototype, "Description", void 0);
__decorate([
    odata_v4_server_1.Edm.String,
    odata_v4_server_1.Edm.Annotate({
        term: "UI.DisplayName",
        string: "Category name"
    }, {
        term: "UI.ControlHint",
        string: "ShortText"
    })
], Category.prototype, "Name", void 0);
__decorate([
    odata_v4_server_1.Edm.Collection(odata_v4_server_1.Edm.EntityType("Product")),
    odata_v4_server_1.Edm.Partner("Category")
], Category.prototype, "Products", void 0);
Category = __decorate([
    odata_v4_server_1.Edm.Annotate({
        term: "UI.DisplayName",
        string: "Categories"
    })
], Category);
exports.Category = Category;
//# sourceMappingURL=model.js.map