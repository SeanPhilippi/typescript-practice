var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(name, username) {
        this.username = username;
        this.name = name;
    }
    ;
    Person.prototype.printAge = function () {
        console.log(this.age);
        this.setType("Old Guy");
    };
    ;
    Person.prototype.setType = function (type) {
        this.type = type;
        console.log(this.type);
    };
    ;
    return Person;
}());
var person = new Person("Sean", "kesto");
console.log(person);
console.log(person.name, person.username);
// * Inheritance
var Developer = /** @class */ (function (_super) {
    __extends(Developer, _super);
    function Developer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "Sean";
        _this.username = "kesto";
        return _this;
    }
    return Developer;
}(Person));
;
var dev = new Developer('Bruce', 'eygon');
console.log(dev);
