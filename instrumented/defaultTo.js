function cov_8og4ncj46(){var path="D:\\Msc in DS-Course Materials\\Software Testing\\COMP.SE.200-Part 2\\src\\defaultTo.js";var hash="5d46bf400f34836ee5f0889c847b11fa15905a09";var global=new Function("return this")();var gcv="__coverage__";var coverageData={path:"D:\\Msc in DS-Course Materials\\Software Testing\\COMP.SE.200-Part 2\\src\\defaultTo.js",statementMap:{"0":{start:{line:20,column:2},end:{line:20,column:45}}},fnMap:{"0":{name:"defaultTo",decl:{start:{line:19,column:9},end:{line:19,column:18}},loc:{start:{line:19,column:40},end:{line:21,column:1}},line:19}},branchMap:{"0":{loc:{start:{line:20,column:9},end:{line:20,column:45}},type:"cond-expr",locations:[{start:{line:20,column:25},end:{line:20,column:37}},{start:{line:20,column:40},end:{line:20,column:45}}],line:20}},s:{"0":0},f:{"0":0},b:{"0":[0,0]},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"5d46bf400f34836ee5f0889c847b11fa15905a09"};var coverage=global[gcv]||(global[gcv]={});if(!coverage[path]||coverage[path].hash!==hash){coverage[path]=coverageData;}var actualCoverage=coverage[path];{// @ts-ignore
cov_8og4ncj46=function(){return actualCoverage;};}return actualCoverage;}cov_8og4ncj46();/**
 * Checks `value` to determine whether a default value should be returned in
 * its place. The `defaultValue` is returned if `value` is `NaN`, `null`,
 * or `undefined`.
 *
 * @since 4.14.0
 * @category Util
 * @param {*} value The value to check.
 * @param {*} defaultValue The default value.
 * @returns {*} Returns the resolved value.
 * @example
 *
 * defaultTo(1, 10)
 * // => 1
 *
 * defaultTo(undefined, 10)
 * // => 10
 */function defaultTo(value,defaultValue){cov_8og4ncj46().f[0]++;cov_8og4ncj46().s[0]++;return value==null?(cov_8og4ncj46().b[0][0]++,defaultValue):(cov_8og4ncj46().b[0][1]++,value);}export default defaultTo;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJjb3ZfOG9nNG5jajQ2IiwiYWN0dWFsQ292ZXJhZ2UiLCJkZWZhdWx0VG8iLCJ2YWx1ZSIsImRlZmF1bHRWYWx1ZSIsImYiLCJzIiwiYiJdLCJzb3VyY2VzIjpbImRlZmF1bHRUby5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENoZWNrcyBgdmFsdWVgIHRvIGRldGVybWluZSB3aGV0aGVyIGEgZGVmYXVsdCB2YWx1ZSBzaG91bGQgYmUgcmV0dXJuZWQgaW5cbiAqIGl0cyBwbGFjZS4gVGhlIGBkZWZhdWx0VmFsdWVgIGlzIHJldHVybmVkIGlmIGB2YWx1ZWAgaXMgYE5hTmAsIGBudWxsYCxcbiAqIG9yIGB1bmRlZmluZWRgLlxuICpcbiAqIEBzaW5jZSA0LjE0LjBcbiAqIEBjYXRlZ29yeSBVdGlsXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEBwYXJhbSB7Kn0gZGVmYXVsdFZhbHVlIFRoZSBkZWZhdWx0IHZhbHVlLlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIHJlc29sdmVkIHZhbHVlLlxuICogQGV4YW1wbGVcbiAqXG4gKiBkZWZhdWx0VG8oMSwgMTApXG4gKiAvLyA9PiAxXG4gKlxuICogZGVmYXVsdFRvKHVuZGVmaW5lZCwgMTApXG4gKiAvLyA9PiAxMFxuICovXG5mdW5jdGlvbiBkZWZhdWx0VG8odmFsdWUsIGRlZmF1bHRWYWx1ZSkge1xuICByZXR1cm4gdmFsdWUgPT0gbnVsbCA/IGRlZmF1bHRWYWx1ZSA6IHZhbHVlXG59XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmF1bHRUb1xuIl0sIm1hcHBpbmdzIjoiNGpDQWVZO0FBQUFBLGFBQUEsU0FBQUEsQ0FBQSxTQUFBQyxjQUFBLFdBQUFBLGNBQUEsRUFBQUQsYUFBQSxHQWZaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUNBLFFBQVMsQ0FBQUUsU0FBU0EsQ0FBQ0MsS0FBSyxDQUFFQyxZQUFZLENBQUUsQ0FBQUosYUFBQSxHQUFBSyxDQUFBLE1BQUFMLGFBQUEsR0FBQU0sQ0FBQSxNQUN0QyxNQUFPLENBQUFILEtBQUssRUFBSSxJQUFJLEVBQUFILGFBQUEsR0FBQU8sQ0FBQSxTQUFHSCxZQUFZLEdBQUFKLGFBQUEsR0FBQU8sQ0FBQSxTQUFHSixLQUFLLEVBQzdDLENBRUEsY0FBZSxDQUFBRCxTQUFTIiwiaWdub3JlTGlzdCI6W119