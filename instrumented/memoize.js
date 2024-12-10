function cov_1x5ia5pphp(){var path="D:\\Msc in DS-Course Materials\\Software Testing\\COMP.SE.200-Part 2\\src\\memoize.js";var hash="b2a1045c17244e3836326b530fa4b309c48745bb";var global=new Function("return this")();var gcv="__coverage__";var coverageData={path:"D:\\Msc in DS-Course Materials\\Software Testing\\COMP.SE.200-Part 2\\src\\memoize.js",statementMap:{"0":{start:{line:44,column:2},end:{line:46,column:3}},"1":{start:{line:45,column:4},end:{line:45,column:46}},"2":{start:{line:47,column:19},end:{line:57,column:3}},"3":{start:{line:48,column:16},end:{line:48,column:63}},"4":{start:{line:49,column:18},end:{line:49,column:32}},"5":{start:{line:51,column:4},end:{line:53,column:5}},"6":{start:{line:52,column:6},end:{line:52,column:27}},"7":{start:{line:54,column:19},end:{line:54,column:41}},"8":{start:{line:55,column:4},end:{line:55,column:52}},"9":{start:{line:56,column:4},end:{line:56,column:17}},"10":{start:{line:58,column:2},end:{line:58,column:45}},"11":{start:{line:59,column:2},end:{line:59,column:17}},"12":{start:{line:62,column:0},end:{line:62,column:19}}},fnMap:{"0":{name:"memoize",decl:{start:{line:43,column:9},end:{line:43,column:16}},loc:{start:{line:43,column:33},end:{line:60,column:1}},line:43},"1":{name:"(anonymous_1)",decl:{start:{line:47,column:19},end:{line:47,column:20}},loc:{start:{line:47,column:37},end:{line:57,column:3}},line:47}},branchMap:{"0":{loc:{start:{line:44,column:2},end:{line:46,column:3}},type:"if",locations:[{start:{line:44,column:2},end:{line:46,column:3}},{start:{line:44,column:2},end:{line:46,column:3}}],line:44},"1":{loc:{start:{line:44,column:6},end:{line:44,column:88}},type:"binary-expr",locations:[{start:{line:44,column:6},end:{line:44,column:32}},{start:{line:44,column:37},end:{line:44,column:53}},{start:{line:44,column:57},end:{line:44,column:87}}],line:44},"2":{loc:{start:{line:48,column:16},end:{line:48,column:63}},type:"cond-expr",locations:[{start:{line:48,column:27},end:{line:48,column:53}},{start:{line:48,column:56},end:{line:48,column:63}}],line:48},"3":{loc:{start:{line:51,column:4},end:{line:53,column:5}},type:"if",locations:[{start:{line:51,column:4},end:{line:53,column:5}},{start:{line:51,column:4},end:{line:53,column:5}}],line:51},"4":{loc:{start:{line:55,column:21},end:{line:55,column:52}},type:"binary-expr",locations:[{start:{line:55,column:21},end:{line:55,column:43}},{start:{line:55,column:47},end:{line:55,column:52}}],line:55},"5":{loc:{start:{line:58,column:24},end:{line:58,column:44}},type:"binary-expr",locations:[{start:{line:58,column:24},end:{line:58,column:37}},{start:{line:58,column:41},end:{line:58,column:44}}],line:58}},s:{"0":0,"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0},f:{"0":0,"1":0},b:{"0":[0,0],"1":[0,0,0],"2":[0,0],"3":[0,0],"4":[0,0],"5":[0,0]},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"b2a1045c17244e3836326b530fa4b309c48745bb"};var coverage=global[gcv]||(global[gcv]={});if(!coverage[path]||coverage[path].hash!==hash){coverage[path]=coverageData;}var actualCoverage=coverage[path];{// @ts-ignore
cov_1x5ia5pphp=function(){return actualCoverage;};}return actualCoverage;}cov_1x5ia5pphp();/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `clear`, `delete`, `get`, `has`, and `set`.
 *
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * const object = { 'a': 1, 'b': 2 }
 * const other = { 'c': 3, 'd': 4 }
 *
 * const values = memoize(values)
 * values(object)
 * // => [1, 2]
 *
 * values(other)
 * // => [3, 4]
 *
 * object.a = 2
 * values(object)
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b'])
 * values(object)
 * // => ['a', 'b']
 *
 * // Replace `memoize.Cache`.
 * memoize.Cache = WeakMap
 */function memoize(func,resolver){cov_1x5ia5pphp().f[0]++;cov_1x5ia5pphp().s[0]++;if((cov_1x5ia5pphp().b[1][0]++,typeof func!=='function')||(cov_1x5ia5pphp().b[1][1]++,resolver!=null)&&(cov_1x5ia5pphp().b[1][2]++,typeof resolver!=='function')){cov_1x5ia5pphp().b[0][0]++;cov_1x5ia5pphp().s[1]++;throw new TypeError('Expected a function');}else{cov_1x5ia5pphp().b[0][1]++;}cov_1x5ia5pphp().s[2]++;const memoized=function(...args){cov_1x5ia5pphp().f[1]++;const key=(cov_1x5ia5pphp().s[3]++,resolver?(cov_1x5ia5pphp().b[2][0]++,resolver.apply(this,args)):(cov_1x5ia5pphp().b[2][1]++,args[0]));const cache=(cov_1x5ia5pphp().s[4]++,memoized.cache);cov_1x5ia5pphp().s[5]++;if(cache.has(key)){cov_1x5ia5pphp().b[3][0]++;cov_1x5ia5pphp().s[6]++;return cache.get(key);}else{cov_1x5ia5pphp().b[3][1]++;}const result=(cov_1x5ia5pphp().s[7]++,func.apply(this,args));cov_1x5ia5pphp().s[8]++;memoized.cache=(cov_1x5ia5pphp().b[4][0]++,cache.set(key,result))||(cov_1x5ia5pphp().b[4][1]++,cache);cov_1x5ia5pphp().s[9]++;return result;};cov_1x5ia5pphp().s[10]++;memoized.cache=new((cov_1x5ia5pphp().b[5][0]++,memoize.Cache)||(cov_1x5ia5pphp().b[5][1]++,Map))();cov_1x5ia5pphp().s[11]++;return memoized;}cov_1x5ia5pphp().s[12]++;memoize.Cache=Map;export default memoize;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJjb3ZfMXg1aWE1cHBocCIsImFjdHVhbENvdmVyYWdlIiwibWVtb2l6ZSIsImZ1bmMiLCJyZXNvbHZlciIsImYiLCJzIiwiYiIsIlR5cGVFcnJvciIsIm1lbW9pemVkIiwiYXJncyIsImtleSIsImFwcGx5IiwiY2FjaGUiLCJoYXMiLCJnZXQiLCJyZXN1bHQiLCJzZXQiLCJDYWNoZSIsIk1hcCJdLCJzb3VyY2VzIjpbIm1lbW9pemUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDcmVhdGVzIGEgZnVuY3Rpb24gdGhhdCBtZW1vaXplcyB0aGUgcmVzdWx0IG9mIGBmdW5jYC4gSWYgYHJlc29sdmVyYCBpc1xuICogcHJvdmlkZWQsIGl0IGRldGVybWluZXMgdGhlIGNhY2hlIGtleSBmb3Igc3RvcmluZyB0aGUgcmVzdWx0IGJhc2VkIG9uIHRoZVxuICogYXJndW1lbnRzIHByb3ZpZGVkIHRvIHRoZSBtZW1vaXplZCBmdW5jdGlvbi4gQnkgZGVmYXVsdCwgdGhlIGZpcnN0IGFyZ3VtZW50XG4gKiBwcm92aWRlZCB0byB0aGUgbWVtb2l6ZWQgZnVuY3Rpb24gaXMgdXNlZCBhcyB0aGUgbWFwIGNhY2hlIGtleS4gVGhlIGBmdW5jYFxuICogaXMgaW52b2tlZCB3aXRoIHRoZSBgdGhpc2AgYmluZGluZyBvZiB0aGUgbWVtb2l6ZWQgZnVuY3Rpb24uXG4gKlxuICogKipOb3RlOioqIFRoZSBjYWNoZSBpcyBleHBvc2VkIGFzIHRoZSBgY2FjaGVgIHByb3BlcnR5IG9uIHRoZSBtZW1vaXplZFxuICogZnVuY3Rpb24uIEl0cyBjcmVhdGlvbiBtYXkgYmUgY3VzdG9taXplZCBieSByZXBsYWNpbmcgdGhlIGBtZW1vaXplLkNhY2hlYFxuICogY29uc3RydWN0b3Igd2l0aCBvbmUgd2hvc2UgaW5zdGFuY2VzIGltcGxlbWVudCB0aGVcbiAqIFtgTWFwYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtcHJvcGVydGllcy1vZi10aGUtbWFwLXByb3RvdHlwZS1vYmplY3QpXG4gKiBtZXRob2QgaW50ZXJmYWNlIG9mIGBjbGVhcmAsIGBkZWxldGVgLCBgZ2V0YCwgYGhhc2AsIGFuZCBgc2V0YC5cbiAqXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBGdW5jdGlvblxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gaGF2ZSBpdHMgb3V0cHV0IG1lbW9pemVkLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gW3Jlc29sdmVyXSBUaGUgZnVuY3Rpb24gdG8gcmVzb2x2ZSB0aGUgY2FjaGUga2V5LlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgbWVtb2l6ZWQgZnVuY3Rpb24uXG4gKiBAZXhhbXBsZVxuICpcbiAqIGNvbnN0IG9iamVjdCA9IHsgJ2EnOiAxLCAnYic6IDIgfVxuICogY29uc3Qgb3RoZXIgPSB7ICdjJzogMywgJ2QnOiA0IH1cbiAqXG4gKiBjb25zdCB2YWx1ZXMgPSBtZW1vaXplKHZhbHVlcylcbiAqIHZhbHVlcyhvYmplY3QpXG4gKiAvLyA9PiBbMSwgMl1cbiAqXG4gKiB2YWx1ZXMob3RoZXIpXG4gKiAvLyA9PiBbMywgNF1cbiAqXG4gKiBvYmplY3QuYSA9IDJcbiAqIHZhbHVlcyhvYmplY3QpXG4gKiAvLyA9PiBbMSwgMl1cbiAqXG4gKiAvLyBNb2RpZnkgdGhlIHJlc3VsdCBjYWNoZS5cbiAqIHZhbHVlcy5jYWNoZS5zZXQob2JqZWN0LCBbJ2EnLCAnYiddKVxuICogdmFsdWVzKG9iamVjdClcbiAqIC8vID0+IFsnYScsICdiJ11cbiAqXG4gKiAvLyBSZXBsYWNlIGBtZW1vaXplLkNhY2hlYC5cbiAqIG1lbW9pemUuQ2FjaGUgPSBXZWFrTWFwXG4gKi9cbmZ1bmN0aW9uIG1lbW9pemUoZnVuYywgcmVzb2x2ZXIpIHtcbiAgaWYgKHR5cGVvZiBmdW5jICE9PSAnZnVuY3Rpb24nIHx8IChyZXNvbHZlciAhPSBudWxsICYmIHR5cGVvZiByZXNvbHZlciAhPT0gJ2Z1bmN0aW9uJykpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdFeHBlY3RlZCBhIGZ1bmN0aW9uJylcbiAgfVxuICBjb25zdCBtZW1vaXplZCA9IGZ1bmN0aW9uKC4uLmFyZ3MpIHtcbiAgICBjb25zdCBrZXkgPSByZXNvbHZlciA/IHJlc29sdmVyLmFwcGx5KHRoaXMsIGFyZ3MpIDogYXJnc1swXVxuICAgIGNvbnN0IGNhY2hlID0gbWVtb2l6ZWQuY2FjaGVcblxuICAgIGlmIChjYWNoZS5oYXMoa2V5KSkge1xuICAgICAgcmV0dXJuIGNhY2hlLmdldChrZXkpXG4gICAgfVxuICAgIGNvbnN0IHJlc3VsdCA9IGZ1bmMuYXBwbHkodGhpcywgYXJncylcbiAgICBtZW1vaXplZC5jYWNoZSA9IGNhY2hlLnNldChrZXksIHJlc3VsdCkgfHwgY2FjaGVcbiAgICByZXR1cm4gcmVzdWx0XG4gIH1cbiAgbWVtb2l6ZWQuY2FjaGUgPSBuZXcgKG1lbW9pemUuQ2FjaGUgfHwgTWFwKVxuICByZXR1cm4gbWVtb2l6ZWRcbn1cblxubWVtb2l6ZS5DYWNoZSA9IE1hcFxuXG5leHBvcnQgZGVmYXVsdCBtZW1vaXplXG4iXSwibWFwcGluZ3MiOiI2L0ZBZVk7QUFBQUEsY0FBQSxTQUFBQSxDQUFBLFNBQUFDLGNBQUEsV0FBQUEsY0FBQSxFQUFBRCxjQUFBLEdBZlo7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQ0EsUUFBUyxDQUFBRSxPQUFPQSxDQUFDQyxJQUFJLENBQUVDLFFBQVEsQ0FBRSxDQUFBSixjQUFBLEdBQUFLLENBQUEsTUFBQUwsY0FBQSxHQUFBTSxDQUFBLE1BQy9CLEdBQUksQ0FBQU4sY0FBQSxHQUFBTyxDQUFBLGVBQU8sQ0FBQUosSUFBSSxHQUFLLFVBQVUsR0FBSyxDQUFBSCxjQUFBLEdBQUFPLENBQUEsU0FBQUgsUUFBUSxFQUFJLElBQUksSUFBQUosY0FBQSxHQUFBTyxDQUFBLFNBQUksTUFBTyxDQUFBSCxRQUFRLEdBQUssVUFBVSxDQUFDLENBQUUsQ0FBQUosY0FBQSxHQUFBTyxDQUFBLFNBQUFQLGNBQUEsR0FBQU0sQ0FBQSxNQUN0RixLQUFNLElBQUksQ0FBQUUsU0FBUyxDQUFDLHFCQUFxQixDQUFDLENBQzVDLENBQUMsS0FBQVIsY0FBQSxHQUFBTyxDQUFBLFVBQUFQLGNBQUEsR0FBQU0sQ0FBQSxNQUNELEtBQU0sQ0FBQUcsUUFBUSxDQUFHLFFBQUFBLENBQVMsR0FBR0MsSUFBSSxDQUFFLENBQUFWLGNBQUEsR0FBQUssQ0FBQSxNQUNqQyxLQUFNLENBQUFNLEdBQUcsRUFBQVgsY0FBQSxHQUFBTSxDQUFBLE1BQUdGLFFBQVEsRUFBQUosY0FBQSxHQUFBTyxDQUFBLFNBQUdILFFBQVEsQ0FBQ1EsS0FBSyxDQUFDLElBQUksQ0FBRUYsSUFBSSxDQUFDLEdBQUFWLGNBQUEsR0FBQU8sQ0FBQSxTQUFHRyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQzNELEtBQU0sQ0FBQUcsS0FBSyxFQUFBYixjQUFBLEdBQUFNLENBQUEsTUFBR0csUUFBUSxDQUFDSSxLQUFLLEVBQUFiLGNBQUEsR0FBQU0sQ0FBQSxNQUU1QixHQUFJTyxLQUFLLENBQUNDLEdBQUcsQ0FBQ0gsR0FBRyxDQUFDLENBQUUsQ0FBQVgsY0FBQSxHQUFBTyxDQUFBLFNBQUFQLGNBQUEsR0FBQU0sQ0FBQSxNQUNsQixNQUFPLENBQUFPLEtBQUssQ0FBQ0UsR0FBRyxDQUFDSixHQUFHLENBQUMsQ0FDdkIsQ0FBQyxLQUFBWCxjQUFBLEdBQUFPLENBQUEsVUFDRCxLQUFNLENBQUFTLE1BQU0sRUFBQWhCLGNBQUEsR0FBQU0sQ0FBQSxNQUFHSCxJQUFJLENBQUNTLEtBQUssQ0FBQyxJQUFJLENBQUVGLElBQUksQ0FBQyxFQUFBVixjQUFBLEdBQUFNLENBQUEsTUFDckNHLFFBQVEsQ0FBQ0ksS0FBSyxDQUFHLENBQUFiLGNBQUEsR0FBQU8sQ0FBQSxTQUFBTSxLQUFLLENBQUNJLEdBQUcsQ0FBQ04sR0FBRyxDQUFFSyxNQUFNLENBQUMsSUFBQWhCLGNBQUEsR0FBQU8sQ0FBQSxTQUFJTSxLQUFLLEVBQUFiLGNBQUEsR0FBQU0sQ0FBQSxNQUNoRCxNQUFPLENBQUFVLE1BQU0sQ0FDZixDQUFDLENBQUFoQixjQUFBLEdBQUFNLENBQUEsT0FDREcsUUFBUSxDQUFDSSxLQUFLLENBQUcsSUFBSyxDQUFBYixjQUFBLEdBQUFPLENBQUEsU0FBQUwsT0FBTyxDQUFDZ0IsS0FBSyxJQUFBbEIsY0FBQSxHQUFBTyxDQUFBLFNBQUlZLEdBQUcsSUFBQyxDQUFBbkIsY0FBQSxHQUFBTSxDQUFBLE9BQzNDLE1BQU8sQ0FBQUcsUUFBUSxDQUNqQixDQUFDVCxjQUFBLEdBQUFNLENBQUEsT0FFREosT0FBTyxDQUFDZ0IsS0FBSyxDQUFHQyxHQUFHLENBRW5CLGNBQWUsQ0FBQWpCLE9BQU8iLCJpZ25vcmVMaXN0IjpbXX0=