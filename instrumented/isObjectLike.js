function cov_sq7u3m8tp(){var path="D:\\Msc in DS-Course Materials\\Software Testing\\COMP.SE.200-Part 2\\src\\isObjectLike.js";var hash="f59005309d8ec45f9b139f808fa316e7a448eeeb";var global=new Function("return this")();var gcv="__coverage__";var coverageData={path:"D:\\Msc in DS-Course Materials\\Software Testing\\COMP.SE.200-Part 2\\src\\isObjectLike.js",statementMap:{"0":{start:{line:24,column:2},end:{line:24,column:52}}},fnMap:{"0":{name:"isObjectLike",decl:{start:{line:23,column:9},end:{line:23,column:21}},loc:{start:{line:23,column:29},end:{line:25,column:1}},line:23}},branchMap:{"0":{loc:{start:{line:24,column:9},end:{line:24,column:52}},type:"binary-expr",locations:[{start:{line:24,column:9},end:{line:24,column:34}},{start:{line:24,column:38},end:{line:24,column:52}}],line:24}},s:{"0":0},f:{"0":0},b:{"0":[0,0]},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"f59005309d8ec45f9b139f808fa316e7a448eeeb"};var coverage=global[gcv]||(global[gcv]={});if(!coverage[path]||coverage[path].hash!==hash){coverage[path]=coverageData;}var actualCoverage=coverage[path];{// @ts-ignore
cov_sq7u3m8tp=function(){return actualCoverage;};}return actualCoverage;}cov_sq7u3m8tp();/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * isObjectLike({})
 * // => true
 *
 * isObjectLike([1, 2, 3])
 * // => true
 *
 * isObjectLike(Function)
 * // => false
 *
 * isObjectLike(null)
 * // => false
 */function isObjectLike(value){cov_sq7u3m8tp().f[0]++;cov_sq7u3m8tp().s[0]++;return(cov_sq7u3m8tp().b[0][0]++,typeof value==='object')&&(cov_sq7u3m8tp().b[0][1]++,value!==null);}export default isObjectLike;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJjb3Zfc3E3dTNtOHRwIiwiYWN0dWFsQ292ZXJhZ2UiLCJpc09iamVjdExpa2UiLCJ2YWx1ZSIsImYiLCJzIiwiYiJdLCJzb3VyY2VzIjpbImlzT2JqZWN0TGlrZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIG9iamVjdC1saWtlLiBBIHZhbHVlIGlzIG9iamVjdC1saWtlIGlmIGl0J3Mgbm90IGBudWxsYFxuICogYW5kIGhhcyBhIGB0eXBlb2ZgIHJlc3VsdCBvZiBcIm9iamVjdFwiLlxuICpcbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgb2JqZWN0LWxpa2UsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogaXNPYmplY3RMaWtlKHt9KVxuICogLy8gPT4gdHJ1ZVxuICpcbiAqIGlzT2JqZWN0TGlrZShbMSwgMiwgM10pXG4gKiAvLyA9PiB0cnVlXG4gKlxuICogaXNPYmplY3RMaWtlKEZ1bmN0aW9uKVxuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBpc09iamVjdExpa2UobnVsbClcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzT2JqZWN0TGlrZSh2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAhPT0gbnVsbFxufVxuXG5leHBvcnQgZGVmYXVsdCBpc09iamVjdExpa2VcbiJdLCJtYXBwaW5ncyI6InNrQ0FlWTtBQUFBQSxhQUFBLFNBQUFBLENBQUEsU0FBQUMsY0FBQSxXQUFBQSxjQUFBLEVBQUFELGFBQUEsR0FmWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUNBLFFBQVMsQ0FBQUUsWUFBWUEsQ0FBQ0MsS0FBSyxDQUFFLENBQUFILGFBQUEsR0FBQUksQ0FBQSxNQUFBSixhQUFBLEdBQUFLLENBQUEsTUFDM0IsTUFBTyxDQUFBTCxhQUFBLEdBQUFNLENBQUEsZUFBTyxDQUFBSCxLQUFLLEdBQUssUUFBUSxJQUFBSCxhQUFBLEdBQUFNLENBQUEsU0FBSUgsS0FBSyxHQUFLLElBQUksRUFDcEQsQ0FFQSxjQUFlLENBQUFELFlBQVkiLCJpZ25vcmVMaXN0IjpbXX0=