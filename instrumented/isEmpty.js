function cov_1yv2u43pyr(){var path="D:\\Msc in DS-Course Materials\\Software Testing\\COMP.SE.200-Part 2\\src\\isEmpty.js";var hash="549a86373264cfded0a0532b29f4517b57e1acf0";var global=new Function("return this")();var gcv="__coverage__";var coverageData={path:"D:\\Msc in DS-Course Materials\\Software Testing\\COMP.SE.200-Part 2\\src\\isEmpty.js",statementMap:{"0":{start:{line:9,column:23},end:{line:9,column:54}},"1":{start:{line:46,column:2},end:{line:48,column:3}},"2":{start:{line:47,column:4},end:{line:47,column:15}},"3":{start:{line:49,column:2},end:{line:53,column:3}},"4":{start:{line:52,column:4},end:{line:52,column:24}},"5":{start:{line:54,column:14},end:{line:54,column:27}},"6":{start:{line:55,column:2},end:{line:57,column:3}},"7":{start:{line:56,column:4},end:{line:56,column:22}},"8":{start:{line:58,column:2},end:{line:60,column:3}},"9":{start:{line:59,column:4},end:{line:59,column:37}},"10":{start:{line:61,column:2},end:{line:65,column:3}},"11":{start:{line:62,column:4},end:{line:64,column:5}},"12":{start:{line:63,column:6},end:{line:63,column:18}},"13":{start:{line:66,column:2},end:{line:66,column:13}}},fnMap:{"0":{name:"isEmpty",decl:{start:{line:45,column:9},end:{line:45,column:16}},loc:{start:{line:45,column:24},end:{line:67,column:1}},line:45}},branchMap:{"0":{loc:{start:{line:46,column:2},end:{line:48,column:3}},type:"if",locations:[{start:{line:46,column:2},end:{line:48,column:3}},{start:{line:46,column:2},end:{line:48,column:3}}],line:46},"1":{loc:{start:{line:49,column:2},end:{line:53,column:3}},type:"if",locations:[{start:{line:49,column:2},end:{line:53,column:3}},{start:{line:49,column:2},end:{line:53,column:3}}],line:49},"2":{loc:{start:{line:49,column:6},end:{line:51,column:69}},type:"binary-expr",locations:[{start:{line:49,column:6},end:{line:49,column:24}},{start:{line:50,column:7},end:{line:50,column:27}},{start:{line:50,column:31},end:{line:50,column:56}},{start:{line:50,column:60},end:{line:50,column:94}},{start:{line:51,column:8},end:{line:51,column:23}},{start:{line:51,column:27},end:{line:51,column:46}},{start:{line:51,column:50},end:{line:51,column:68}}],line:49},"3":{loc:{start:{line:55,column:2},end:{line:57,column:3}},type:"if",locations:[{start:{line:55,column:2},end:{line:57,column:3}},{start:{line:55,column:2},end:{line:57,column:3}}],line:55},"4":{loc:{start:{line:55,column:6},end:{line:55,column:52}},type:"binary-expr",locations:[{start:{line:55,column:6},end:{line:55,column:27}},{start:{line:55,column:31},end:{line:55,column:52}}],line:55},"5":{loc:{start:{line:58,column:2},end:{line:60,column:3}},type:"if",locations:[{start:{line:58,column:2},end:{line:60,column:3}},{start:{line:58,column:2},end:{line:60,column:3}}],line:58},"6":{loc:{start:{line:62,column:4},end:{line:64,column:5}},type:"if",locations:[{start:{line:62,column:4},end:{line:64,column:5}},{start:{line:62,column:4},end:{line:64,column:5}}],line:62}},s:{"0":0,"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0},f:{"0":0},b:{"0":[0,0],"1":[0,0],"2":[0,0,0,0,0,0,0],"3":[0,0],"4":[0,0],"5":[0,0],"6":[0,0]},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"549a86373264cfded0a0532b29f4517b57e1acf0"};var coverage=global[gcv]||(global[gcv]={});if(!coverage[path]||coverage[path].hash!==hash){coverage[path]=coverageData;}var actualCoverage=coverage[path];{// @ts-ignore
cov_1yv2u43pyr=function(){return actualCoverage;};}return actualCoverage;}cov_1yv2u43pyr();import getTag from'./.internal/getTag.js';import isArguments from'./isArguments.js';import isArrayLike from'./isArrayLike.js';import isBuffer from'./isBuffer.js';import isPrototype from'./.internal/isPrototype.js';import isTypedArray from'./isTypedArray.js';/** Used to check objects for own properties. */const hasOwnProperty=(cov_1yv2u43pyr().s[0]++,Object.prototype.hasOwnProperty);/**
 * Checks if `value` is an empty object, collection, map, or set.
 *
 * Objects are considered empty if they have no own enumerable string keyed
 * properties.
 *
 * Array-like values such as `arguments` objects, arrays, buffers, strings, or
 * jQuery-like collections are considered empty if they have a `length` of `0`.
 * Similarly, maps and sets are considered empty if they have a `size` of `0`.
 *
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is empty, else `false`.
 * @example
 *
 * isEmpty(null)
 * // => true
 *
 * isEmpty(true)
 * // => true
 *
 * isEmpty(1)
 * // => true
 *
 * isEmpty([1, 2, 3])
 * // => false
 *
 * isEmpty('abc')
 * // => false
 *
 * isEmpty({ 'a': 1 })
 * // => false
 */function isEmpty(value){cov_1yv2u43pyr().f[0]++;cov_1yv2u43pyr().s[1]++;if(value==null){cov_1yv2u43pyr().b[0][0]++;cov_1yv2u43pyr().s[2]++;return true;}else{cov_1yv2u43pyr().b[0][1]++;}cov_1yv2u43pyr().s[3]++;if((cov_1yv2u43pyr().b[2][0]++,isArrayLike(value))&&((cov_1yv2u43pyr().b[2][1]++,Array.isArray(value))||(cov_1yv2u43pyr().b[2][2]++,typeof value==='string')||(cov_1yv2u43pyr().b[2][3]++,typeof value.splice==='function')||(cov_1yv2u43pyr().b[2][4]++,isBuffer(value))||(cov_1yv2u43pyr().b[2][5]++,isTypedArray(value))||(cov_1yv2u43pyr().b[2][6]++,isArguments(value)))){cov_1yv2u43pyr().b[1][0]++;cov_1yv2u43pyr().s[4]++;return!value.length;}else{cov_1yv2u43pyr().b[1][1]++;}const tag=(cov_1yv2u43pyr().s[5]++,getTag(value));cov_1yv2u43pyr().s[6]++;if((cov_1yv2u43pyr().b[4][0]++,tag=='[object Map]')||(cov_1yv2u43pyr().b[4][1]++,tag=='[object Set]')){cov_1yv2u43pyr().b[3][0]++;cov_1yv2u43pyr().s[7]++;return!value.size;}else{cov_1yv2u43pyr().b[3][1]++;}cov_1yv2u43pyr().s[8]++;if(isPrototype(value)){cov_1yv2u43pyr().b[5][0]++;cov_1yv2u43pyr().s[9]++;return!Object.keys(value).length;}else{cov_1yv2u43pyr().b[5][1]++;}cov_1yv2u43pyr().s[10]++;for(const key in value){cov_1yv2u43pyr().s[11]++;if(hasOwnProperty.call(value,key)){cov_1yv2u43pyr().b[6][0]++;cov_1yv2u43pyr().s[12]++;return false;}else{cov_1yv2u43pyr().b[6][1]++;}}cov_1yv2u43pyr().s[13]++;return true;}export default isEmpty;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJjb3ZfMXl2MnU0M3B5ciIsImFjdHVhbENvdmVyYWdlIiwiZ2V0VGFnIiwiaXNBcmd1bWVudHMiLCJpc0FycmF5TGlrZSIsImlzQnVmZmVyIiwiaXNQcm90b3R5cGUiLCJpc1R5cGVkQXJyYXkiLCJoYXNPd25Qcm9wZXJ0eSIsInMiLCJPYmplY3QiLCJwcm90b3R5cGUiLCJpc0VtcHR5IiwidmFsdWUiLCJmIiwiYiIsIkFycmF5IiwiaXNBcnJheSIsInNwbGljZSIsImxlbmd0aCIsInRhZyIsInNpemUiLCJrZXlzIiwia2V5IiwiY2FsbCJdLCJzb3VyY2VzIjpbImlzRW1wdHkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGdldFRhZyBmcm9tICcuLy5pbnRlcm5hbC9nZXRUYWcuanMnXG5pbXBvcnQgaXNBcmd1bWVudHMgZnJvbSAnLi9pc0FyZ3VtZW50cy5qcydcbmltcG9ydCBpc0FycmF5TGlrZSBmcm9tICcuL2lzQXJyYXlMaWtlLmpzJ1xuaW1wb3J0IGlzQnVmZmVyIGZyb20gJy4vaXNCdWZmZXIuanMnXG5pbXBvcnQgaXNQcm90b3R5cGUgZnJvbSAnLi8uaW50ZXJuYWwvaXNQcm90b3R5cGUuanMnXG5pbXBvcnQgaXNUeXBlZEFycmF5IGZyb20gJy4vaXNUeXBlZEFycmF5LmpzJ1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbmNvbnN0IGhhc093blByb3BlcnR5ID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eVxuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGFuIGVtcHR5IG9iamVjdCwgY29sbGVjdGlvbiwgbWFwLCBvciBzZXQuXG4gKlxuICogT2JqZWN0cyBhcmUgY29uc2lkZXJlZCBlbXB0eSBpZiB0aGV5IGhhdmUgbm8gb3duIGVudW1lcmFibGUgc3RyaW5nIGtleWVkXG4gKiBwcm9wZXJ0aWVzLlxuICpcbiAqIEFycmF5LWxpa2UgdmFsdWVzIHN1Y2ggYXMgYGFyZ3VtZW50c2Agb2JqZWN0cywgYXJyYXlzLCBidWZmZXJzLCBzdHJpbmdzLCBvclxuICogalF1ZXJ5LWxpa2UgY29sbGVjdGlvbnMgYXJlIGNvbnNpZGVyZWQgZW1wdHkgaWYgdGhleSBoYXZlIGEgYGxlbmd0aGAgb2YgYDBgLlxuICogU2ltaWxhcmx5LCBtYXBzIGFuZCBzZXRzIGFyZSBjb25zaWRlcmVkIGVtcHR5IGlmIHRoZXkgaGF2ZSBhIGBzaXplYCBvZiBgMGAuXG4gKlxuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBlbXB0eSwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBpc0VtcHR5KG51bGwpXG4gKiAvLyA9PiB0cnVlXG4gKlxuICogaXNFbXB0eSh0cnVlKVxuICogLy8gPT4gdHJ1ZVxuICpcbiAqIGlzRW1wdHkoMSlcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBpc0VtcHR5KFsxLCAyLCAzXSlcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogaXNFbXB0eSgnYWJjJylcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogaXNFbXB0eSh7ICdhJzogMSB9KVxuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNFbXB0eSh2YWx1ZSkge1xuICBpZiAodmFsdWUgPT0gbnVsbCkge1xuICAgIHJldHVybiB0cnVlXG4gIH1cbiAgaWYgKGlzQXJyYXlMaWtlKHZhbHVlKSAmJlxuICAgICAgKEFycmF5LmlzQXJyYXkodmFsdWUpIHx8IHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgfHwgdHlwZW9mIHZhbHVlLnNwbGljZSA9PT0gJ2Z1bmN0aW9uJyB8fFxuICAgICAgICBpc0J1ZmZlcih2YWx1ZSkgfHwgaXNUeXBlZEFycmF5KHZhbHVlKSB8fCBpc0FyZ3VtZW50cyh2YWx1ZSkpKSB7XG4gICAgcmV0dXJuICF2YWx1ZS5sZW5ndGhcbiAgfVxuICBjb25zdCB0YWcgPSBnZXRUYWcodmFsdWUpXG4gIGlmICh0YWcgPT0gJ1tvYmplY3QgTWFwXScgfHwgdGFnID09ICdbb2JqZWN0IFNldF0nKSB7XG4gICAgcmV0dXJuICF2YWx1ZS5zaXplXG4gIH1cbiAgaWYgKGlzUHJvdG90eXBlKHZhbHVlKSkge1xuICAgIHJldHVybiAhT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aFxuICB9XG4gIGZvciAoY29uc3Qga2V5IGluIHZhbHVlKSB7XG4gICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwodmFsdWUsIGtleSkpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cbiAgfVxuICByZXR1cm4gdHJ1ZVxufVxuXG5leHBvcnQgZGVmYXVsdCBpc0VtcHR5XG4iXSwibWFwcGluZ3MiOiI0eEdBZVk7QUFBQUEsY0FBQSxTQUFBQSxDQUFBLFNBQUFDLGNBQUEsV0FBQUEsY0FBQSxFQUFBRCxjQUFBLEdBZlosTUFBTyxDQUFBRSxNQUFNLEtBQU0sdUJBQXVCLENBQzFDLE1BQU8sQ0FBQUMsV0FBVyxLQUFNLGtCQUFrQixDQUMxQyxNQUFPLENBQUFDLFdBQVcsS0FBTSxrQkFBa0IsQ0FDMUMsTUFBTyxDQUFBQyxRQUFRLEtBQU0sZUFBZSxDQUNwQyxNQUFPLENBQUFDLFdBQVcsS0FBTSw0QkFBNEIsQ0FDcEQsTUFBTyxDQUFBQyxZQUFZLEtBQU0sbUJBQW1CLENBRTVDLGdEQUNBLEtBQU0sQ0FBQUMsY0FBYyxFQUFBUixjQUFBLEdBQUFTLENBQUEsTUFBR0MsTUFBTSxDQUFDQyxTQUFTLENBQUNILGNBQWMsRUFFdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FDQSxRQUFT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