"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Button = void 0;
var Button = /** @class */ (function () {
    function Button(_a) {
        var id = _a.id, width = _a.width, height = _a.height, label = _a.label, tags = _a.tags, collection = _a.collection, averageClicksPerDay = _a.averageClicksPerDay, averageTimeToLeaveAfterClick = _a.averageTimeToLeaveAfterClick;
        this.id = id || Math.random().toString(36).substring(7);
        if (!width)
            this.width = 100;
        else
            this.width = parseInt(width.toString());
        if (!height)
            this.height = 50;
        else
            this.height = parseInt(height.toString());
        this.label = label || 'Button';
        if (tags && tags.length > 0)
            this.tags = tags.split(',');
        else
            this.tags = [];
        this.collection = collection || 'default';
        this.averageClicksPerDay = this.generateClicksPerDay(averageClicksPerDay == 0 || averageClicksPerDay == undefined ? 1 : averageClicksPerDay);
        this.averageTimeToLeaveAfterClick = this.generateTimeToLeaveAfterClick(averageTimeToLeaveAfterClick == 0 || averageTimeToLeaveAfterClick == undefined ? 1 : averageTimeToLeaveAfterClick);
    }
    Button.prototype.render = function () {
        console.log("\n            <button id=\"".concat(this.id, "\" style=\"width: ").concat(this.width, "px; height: ").concat(this.height, "px;\">\n                ").concat(this.label, "\n            </button>\n        "));
    };
    Button.prototype.generateClicksPerDay = function (level) {
        return Math.floor(Math.random() * (10000 * level));
    };
    Button.prototype.generateTimeToLeaveAfterClick = function (level) {
        return Math.floor(Math.random() * (1000 * level));
    };
    Button.prototype.toJSON = function () {
        return {
            id: this.id,
            width: this.width,
            height: this.height,
            label: this.label,
            tags: this.tags,
            collection: this.collection,
            averageClicksPerDay: this.averageClicksPerDay,
            averageTimeToLeaveAfterClick: this.averageTimeToLeaveAfterClick
        };
    };
    return Button;
}());
exports.Button = Button;
