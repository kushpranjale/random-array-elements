"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.pickRandomElements = void 0;
var mersenne_twister_1 = __importDefault(require("mersenne-twister"));
var pickRandomElements = function (_arr, _no_to_pick) { return __awaiter(void 0, void 0, void 0, function () {
    var _picks, _array, i, _generator, _num, index;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (!Array.isArray(_arr)) {
                    throw new Error("Expected an array, got ".concat(typeof _arr));
                }
                if (_arr.length < _no_to_pick)
                    throw new Error('pick number is greater then length of array');
                _picks = [];
                _array = _arr.slice();
                return [4 /*yield*/, arrayShuffle(_array)];
            case 1:
                _array = _a.sent();
                i = 0;
                _a.label = 2;
            case 2:
                if (!(i < (_no_to_pick))) return [3 /*break*/, 5];
                return [4 /*yield*/, arrayShuffle(_array)];
            case 3:
                _array = _a.sent();
                _generator = new mersenne_twister_1.default();
                _num = Math.floor(_generator.random() * _array.length);
                _picks[i] = _array[_num];
                _array.splice(_num, 1);
                index = _arr.indexOf(_picks[i]);
                if (index > -1)
                    _arr.splice(index, 1);
                _a.label = 4;
            case 4:
                i++;
                return [3 /*break*/, 2];
            case 5: return [2 /*return*/, { picks: _picks, remaining_ele: _arr }];
        }
    });
}); };
exports.pickRandomElements = pickRandomElements;
function arrayShuffle(array) {
    var _a;
    array = __spreadArray([], array, true);
    for (var index = array.length - 1; index > 0; index--) {
        var newIndex = Math.floor(Math.random() * (index + 1));
        _a = [array[newIndex], array[index]], array[index] = _a[0], array[newIndex] = _a[1];
    }
    return array;
}
//# sourceMappingURL=index.js.map