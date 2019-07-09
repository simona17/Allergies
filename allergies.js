"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Allergies = /** @class */ (function () {
    function Allergies(score) {
        this.al = {
            eggs: 1,
            peanuts: 2,
            shellfish: 4,
            strawberries: 8,
            tomatoes: 16,
            chocolate: 32,
            pollen: 64,
            cats: 128
        };
        this.score = score;
    }
    Allergies.prototype.allergicTo = function (allergy) {
        var isAllergy = false;
        var currentScore = this.al[allergy];
        isAllergy = (this.score & currentScore) === currentScore;
        return isAllergy;
    };
    Allergies.prototype.list = function () {
        var _this = this;
        var allergyList = [];
        Object.keys(this.al).forEach(function (allergenName) {
            if (_this.allergicTo(allergenName)) {
                allergyList.push(allergenName);
            }
        });
        return allergyList;
    };
    return Allergies;
}());
exports.default = Allergies;
var alrg = new Allergies(34);
console.log(alrg.allergicTo("chocolate"));
