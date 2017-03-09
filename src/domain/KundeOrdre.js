"use strict";
var Adresse_1 = require("./Adresse");
var KundeService = (function () {
    function KundeService(id, ssn) {
        this._id = id;
        this._ssn = ssn;
        var a = new Adresse_1.Addresse();
    }
    Object.defineProperty(KundeService.prototype, "Id", {
        get: function () {
            return this._id;
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(KundeService.prototype, "Ssn", {
        get: function () {
            return this._ssn;
        },
        set: function (value) {
            this._ssn = value;
        },
        enumerable: true,
        configurable: true
    });
    KundeService.prototype.add = function () {
    };
    return KundeService;
}());
var Order = (function () {
    function Order(kunde) {
    }
    return Order;
}());
