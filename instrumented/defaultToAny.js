function cov_1mvccxuw4z(){var path="D:\\Msc in DS-Course Materials\\Software Testing\\COMP.SE.200-Part 2\\src\\defaultToAny.js";var hash="dbe0a7608accca9067d9f82782bfd7c91c1823fc";var global=new Function("return this")();var gcv="__coverage__";var coverageData={path:"D:\\Msc in DS-Course Materials\\Software Testing\\COMP.SE.200-Part 2\\src\\defaultToAny.js",statementMap:{"0":{start:{line:29,column:2},end:{line:29,column:53}}},fnMap:{"0":{name:"defaultToAny",decl:{start:{line:28,column:9},end:{line:28,column:21}},loc:{start:{line:28,column:47},end:{line:30,column:1}},line:28}},branchMap:{},s:{"0":0},f:{"0":0},b:{},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"dbe0a7608accca9067d9f82782bfd7c91c1823fc"};var coverage=global[gcv]||(global[gcv]={});if(!coverage[path]||coverage[path].hash!==hash){coverage[path]=coverageData;}var actualCoverage=coverage[path];{// @ts-ignore
cov_1mvccxuw4z=function(){return actualCoverage;};}return actualCoverage;}cov_1mvccxuw4z();import arrayReduce from'./.internal/arrayReduce.js';import defaultTo from'./defaultTo.js';/**
 * This method is like `defaultTo` except that it accepts multiple default values and returns the first one that is not
 * `NaN`, `null`, or `undefined`.
 *
 * @since 5.0.0
 * @category Util
 * @param {*} value The value to check.
 * @param {...*} defaultValues The default values.
 * @returns {*} Returns the resolved value.
 * @see _.defaultTo
 * @example
 *
 * defaultToAny(1, 10, 20)
 * // => 1
 *
 * defaultToAny(undefined, 10, 20)
 * // => 10
 *
 * defaultToAny(undefined, null, 20)
 * // => 20
 *
 * defaultToAny(undefined, null, NaN)
 * // => NaN
 */function defaultToAny(value,...defaultValues){cov_1mvccxuw4z().f[0]++;cov_1mvccxuw4z().s[0]++;return arrayReduce(defaultValues,defaultTo,value);}export default defaultToAny;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJjb3ZfMW12Y2N4dXc0eiIsImFjdHVhbENvdmVyYWdlIiwiYXJyYXlSZWR1Y2UiLCJkZWZhdWx0VG8iLCJkZWZhdWx0VG9BbnkiLCJ2YWx1ZSIsImRlZmF1bHRWYWx1ZXMiLCJmIiwicyJdLCJzb3VyY2VzIjpbImRlZmF1bHRUb0FueS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXJyYXlSZWR1Y2UgZnJvbSAnLi8uaW50ZXJuYWwvYXJyYXlSZWR1Y2UuanMnXG5pbXBvcnQgZGVmYXVsdFRvIGZyb20gJy4vZGVmYXVsdFRvLmpzJ1xuXG4vKipcbiAqIFRoaXMgbWV0aG9kIGlzIGxpa2UgYGRlZmF1bHRUb2AgZXhjZXB0IHRoYXQgaXQgYWNjZXB0cyBtdWx0aXBsZSBkZWZhdWx0IHZhbHVlcyBhbmQgcmV0dXJucyB0aGUgZmlyc3Qgb25lIHRoYXQgaXMgbm90XG4gKiBgTmFOYCwgYG51bGxgLCBvciBgdW5kZWZpbmVkYC5cbiAqXG4gKiBAc2luY2UgNS4wLjBcbiAqIEBjYXRlZ29yeSBVdGlsXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEBwYXJhbSB7Li4uKn0gZGVmYXVsdFZhbHVlcyBUaGUgZGVmYXVsdCB2YWx1ZXMuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyB0aGUgcmVzb2x2ZWQgdmFsdWUuXG4gKiBAc2VlIF8uZGVmYXVsdFRvXG4gKiBAZXhhbXBsZVxuICpcbiAqIGRlZmF1bHRUb0FueSgxLCAxMCwgMjApXG4gKiAvLyA9PiAxXG4gKlxuICogZGVmYXVsdFRvQW55KHVuZGVmaW5lZCwgMTAsIDIwKVxuICogLy8gPT4gMTBcbiAqXG4gKiBkZWZhdWx0VG9BbnkodW5kZWZpbmVkLCBudWxsLCAyMClcbiAqIC8vID0+IDIwXG4gKlxuICogZGVmYXVsdFRvQW55KHVuZGVmaW5lZCwgbnVsbCwgTmFOKVxuICogLy8gPT4gTmFOXG4gKi9cbmZ1bmN0aW9uIGRlZmF1bHRUb0FueSh2YWx1ZSwgLi4uZGVmYXVsdFZhbHVlcykge1xuICByZXR1cm4gYXJyYXlSZWR1Y2UoZGVmYXVsdFZhbHVlcywgZGVmYXVsdFRvLCB2YWx1ZSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgZGVmYXVsdFRvQW55XG4iXSwibWFwcGluZ3MiOiJvM0JBZVk7QUFBQUEsY0FBQSxTQUFBQSxDQUFBLFNBQUFDLGNBQUEsV0FBQUEsY0FBQSxFQUFBRCxjQUFBLEdBZlosTUFBTyxDQUFBRSxXQUFXLEtBQU0sNEJBQTRCLENBQ3BELE1BQU8sQ0FBQUMsU0FBUyxLQUFNLGdCQUFnQixDQUV0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FDQSxRQUFTLENBQUFDLFlBQVlBLENBQUNDLEtBQUssQ0FBRSxHQUFHQyxhQUFhLENBQUUsQ0FBQU4sY0FBQSxHQUFBTyxDQUFBLE1BQUFQLGNBQUEsR0FBQVEsQ0FBQSxNQUM3QyxNQUFPLENBQUFOLFdBQVcsQ0FBQ0ksYUFBYSxDQUFFSCxTQUFTLENBQUVFLEtBQUssQ0FBQyxDQUNyRCxDQUVBLGNBQWUsQ0FBQUQsWUFBWSIsImlnbm9yZUxpc3QiOltdfQ==