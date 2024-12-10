function cov_2l4dm3nbhs(){var path="D:\\Msc in DS-Course Materials\\Software Testing\\COMP.SE.200-Part 2\\src\\isArrayLikeObject.js";var hash="f702e2ddf0b7d64d1432243c2239eba2e02cc9c3";var global=new Function("return this")();var gcv="__coverage__";var coverageData={path:"D:\\Msc in DS-Course Materials\\Software Testing\\COMP.SE.200-Part 2\\src\\isArrayLikeObject.js",statementMap:{"0":{start:{line:28,column:2},end:{line:28,column:50}}},fnMap:{"0":{name:"isArrayLikeObject",decl:{start:{line:27,column:9},end:{line:27,column:26}},loc:{start:{line:27,column:34},end:{line:29,column:1}},line:27}},branchMap:{"0":{loc:{start:{line:28,column:9},end:{line:28,column:50}},type:"binary-expr",locations:[{start:{line:28,column:9},end:{line:28,column:28}},{start:{line:28,column:32},end:{line:28,column:50}}],line:28}},s:{"0":0},f:{"0":0},b:{"0":[0,0]},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"f702e2ddf0b7d64d1432243c2239eba2e02cc9c3"};var coverage=global[gcv]||(global[gcv]={});if(!coverage[path]||coverage[path].hash!==hash){coverage[path]=coverageData;}var actualCoverage=coverage[path];{// @ts-ignore
cov_2l4dm3nbhs=function(){return actualCoverage;};}return actualCoverage;}cov_2l4dm3nbhs();import isArrayLike from'./isArrayLike.js';import isObjectLike from'./isObjectLike.js';/**
 * This method is like `isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * isArrayLikeObject([1, 2, 3])
 * // => true
 *
 * isArrayLikeObject(document.body.children)
 * // => true
 *
 * isArrayLikeObject('abc')
 * // => false
 *
 * isArrayLikeObject(Function)
 * // => false
 */function isArrayLikeObject(value){cov_2l4dm3nbhs().f[0]++;cov_2l4dm3nbhs().s[0]++;return(cov_2l4dm3nbhs().b[0][0]++,isObjectLike(value))&&(cov_2l4dm3nbhs().b[0][1]++,isArrayLike(value));}export default isArrayLikeObject;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJjb3ZfMmw0ZG0zbmJocyIsImFjdHVhbENvdmVyYWdlIiwiaXNBcnJheUxpa2UiLCJpc09iamVjdExpa2UiLCJpc0FycmF5TGlrZU9iamVjdCIsInZhbHVlIiwiZiIsInMiLCJiIl0sInNvdXJjZXMiOlsiaXNBcnJheUxpa2VPYmplY3QuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGlzQXJyYXlMaWtlIGZyb20gJy4vaXNBcnJheUxpa2UuanMnXG5pbXBvcnQgaXNPYmplY3RMaWtlIGZyb20gJy4vaXNPYmplY3RMaWtlLmpzJ1xuXG4vKipcbiAqIFRoaXMgbWV0aG9kIGlzIGxpa2UgYGlzQXJyYXlMaWtlYCBleGNlcHQgdGhhdCBpdCBhbHNvIGNoZWNrcyBpZiBgdmFsdWVgXG4gKiBpcyBhbiBvYmplY3QuXG4gKlxuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhbiBhcnJheS1saWtlIG9iamVjdCxcbiAqICBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIGlzQXJyYXlMaWtlT2JqZWN0KFsxLCAyLCAzXSlcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBpc0FycmF5TGlrZU9iamVjdChkb2N1bWVudC5ib2R5LmNoaWxkcmVuKVxuICogLy8gPT4gdHJ1ZVxuICpcbiAqIGlzQXJyYXlMaWtlT2JqZWN0KCdhYmMnKVxuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBpc0FycmF5TGlrZU9iamVjdChGdW5jdGlvbilcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzQXJyYXlMaWtlT2JqZWN0KHZhbHVlKSB7XG4gIHJldHVybiBpc09iamVjdExpa2UodmFsdWUpICYmIGlzQXJyYXlMaWtlKHZhbHVlKVxufVxuXG5leHBvcnQgZGVmYXVsdCBpc0FycmF5TGlrZU9iamVjdFxuIl0sIm1hcHBpbmdzIjoic2xDQWVZO0FBQUFBLGNBQUEsU0FBQUEsQ0FBQSxTQUFBQyxjQUFBLFdBQUFBLGNBQUEsRUFBQUQsY0FBQSxHQWZaLE1BQU8sQ0FBQUUsV0FBVyxLQUFNLGtCQUFrQixDQUMxQyxNQUFPLENBQUFDLFlBQVksS0FBTSxtQkFBbUIsQ0FFNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUNBLFFBQVMsQ0FBQUMsaUJBQWlCQSxDQUFDQyxLQUFLLENBQUUsQ0FBQUwsY0FBQSxHQUFBTSxDQUFBLE1BQUFOLGNBQUEsR0FBQU8sQ0FBQSxNQUNoQyxNQUFPLENBQUFQLGNBQUEsR0FBQVEsQ0FBQSxTQUFBTCxZQUFZLENBQUNFLEtBQUssQ0FBQyxJQUFBTCxjQUFBLEdBQUFRLENBQUEsU0FBSU4sV0FBVyxDQUFDRyxLQUFLLENBQUMsRUFDbEQsQ0FFQSxjQUFlLENBQUFELGlCQUFpQiIsImlnbm9yZUxpc3QiOltdfQ==