function cov_scx3jr1ub(){var path="D:\\Msc in DS-Course Materials\\Software Testing\\COMP.SE.200-Part 2\\src\\keys.js";var hash="2e42b61563e9bd44c36e3b0850fa6404c11671da";var global=new Function("return this")();var gcv="__coverage__";var coverageData={path:"D:\\Msc in DS-Course Materials\\Software Testing\\COMP.SE.200-Part 2\\src\\keys.js",statementMap:{"0":{start:{line:32,column:2},end:{line:34,column:33}}},fnMap:{"0":{name:"keys",decl:{start:{line:31,column:9},end:{line:31,column:13}},loc:{start:{line:31,column:22},end:{line:35,column:1}},line:31}},branchMap:{"0":{loc:{start:{line:32,column:9},end:{line:34,column:33}},type:"cond-expr",locations:[{start:{line:33,column:6},end:{line:33,column:27}},{start:{line:34,column:6},end:{line:34,column:33}}],line:32}},s:{"0":0},f:{"0":0},b:{"0":[0,0]},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"2e42b61563e9bd44c36e3b0850fa6404c11671da"};var coverage=global[gcv]||(global[gcv]={});if(!coverage[path]||coverage[path].hash!==hash){coverage[path]=coverageData;}var actualCoverage=coverage[path];{// @ts-ignore
cov_scx3jr1ub=function(){return actualCoverage;};}return actualCoverage;}cov_scx3jr1ub();import arrayLikeKeys from'./.internal/arrayLikeKeys.js';import isArrayLike from'./isArrayLike.js';/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @since 0.1.0
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @see values, valuesIn
 * @example
 *
 * function Foo() {
 *   this.a = 1
 *   this.b = 2
 * }
 *
 * Foo.prototype.c = 3
 *
 * keys(new Foo)
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * keys('hi')
 * // => ['0', '1']
 */function keys(object){cov_scx3jr1ub().f[0]++;cov_scx3jr1ub().s[0]++;return isArrayLike(object)?(cov_scx3jr1ub().b[0][0]++,arrayLikeKeys(object)):(cov_scx3jr1ub().b[0][1]++,Object.keys(Object(object)));}export default keys;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJjb3Zfc2N4M2pyMXViIiwiYWN0dWFsQ292ZXJhZ2UiLCJhcnJheUxpa2VLZXlzIiwiaXNBcnJheUxpa2UiLCJrZXlzIiwib2JqZWN0IiwiZiIsInMiLCJiIiwiT2JqZWN0Il0sInNvdXJjZXMiOlsia2V5cy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXJyYXlMaWtlS2V5cyBmcm9tICcuLy5pbnRlcm5hbC9hcnJheUxpa2VLZXlzLmpzJ1xuaW1wb3J0IGlzQXJyYXlMaWtlIGZyb20gJy4vaXNBcnJheUxpa2UuanMnXG5cbi8qKlxuICogQ3JlYXRlcyBhbiBhcnJheSBvZiB0aGUgb3duIGVudW1lcmFibGUgcHJvcGVydHkgbmFtZXMgb2YgYG9iamVjdGAuXG4gKlxuICogKipOb3RlOioqIE5vbi1vYmplY3QgdmFsdWVzIGFyZSBjb2VyY2VkIHRvIG9iamVjdHMuIFNlZSB0aGVcbiAqIFtFUyBzcGVjXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1vYmplY3Qua2V5cylcbiAqIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgT2JqZWN0XG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHByb3BlcnR5IG5hbWVzLlxuICogQHNlZSB2YWx1ZXMsIHZhbHVlc0luXG4gKiBAZXhhbXBsZVxuICpcbiAqIGZ1bmN0aW9uIEZvbygpIHtcbiAqICAgdGhpcy5hID0gMVxuICogICB0aGlzLmIgPSAyXG4gKiB9XG4gKlxuICogRm9vLnByb3RvdHlwZS5jID0gM1xuICpcbiAqIGtleXMobmV3IEZvbylcbiAqIC8vID0+IFsnYScsICdiJ10gKGl0ZXJhdGlvbiBvcmRlciBpcyBub3QgZ3VhcmFudGVlZClcbiAqXG4gKiBrZXlzKCdoaScpXG4gKiAvLyA9PiBbJzAnLCAnMSddXG4gKi9cbmZ1bmN0aW9uIGtleXMob2JqZWN0KSB7XG4gIHJldHVybiBpc0FycmF5TGlrZShvYmplY3QpXG4gICAgPyBhcnJheUxpa2VLZXlzKG9iamVjdClcbiAgICA6IE9iamVjdC5rZXlzKE9iamVjdChvYmplY3QpKVxufVxuXG5leHBvcnQgZGVmYXVsdCBrZXlzXG4iXSwibWFwcGluZ3MiOiIyaUNBZVk7QUFBQUEsYUFBQSxTQUFBQSxDQUFBLFNBQUFDLGNBQUEsV0FBQUEsY0FBQSxFQUFBRCxhQUFBLEdBZlosTUFBTyxDQUFBRSxhQUFhLEtBQU0sOEJBQThCLENBQ3hELE1BQU8sQ0FBQUMsV0FBVyxLQUFNLGtCQUFrQixDQUUxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FDQSxRQUFTLENBQUFDLElBQUlBLENBQUNDLE1BQU0sQ0FBRSxDQUFBTCxhQUFBLEdBQUFNLENBQUEsTUFBQU4sYUFBQSxHQUFBTyxDQUFBLE1BQ3BCLE1BQU8sQ0FBQUosV0FBVyxDQUFDRSxNQUFNLENBQUMsRUFBQUwsYUFBQSxHQUFBUSxDQUFBLFNBQ3RCTixhQUFhLENBQUNHLE1BQU0sQ0FBQyxHQUFBTCxhQUFBLEdBQUFRLENBQUEsU0FDckJDLE1BQU0sQ0FBQ0wsSUFBSSxDQUFDSyxNQUFNLENBQUNKLE1BQU0sQ0FBQyxDQUFDLEVBQ2pDLENBRUEsY0FBZSxDQUFBRCxJQUFJIiwiaWdub3JlTGlzdCI6W119