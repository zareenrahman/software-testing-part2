function cov_jcfx5xs9(){var path="D:\\Msc in DS-Course Materials\\Software Testing\\COMP.SE.200-Part 2\\src\\.internal\\arrayIncludes.js";var hash="2188c1bb9b58229caf0c03c66b8f2465ea36e999";var global=new Function("return this")();var gcv="__coverage__";var coverageData={path:"D:\\Msc in DS-Course Materials\\Software Testing\\COMP.SE.200-Part 2\\src\\.internal\\arrayIncludes.js",statementMap:{"0":{start:{line:13,column:17},end:{line:13,column:49}},"1":{start:{line:14,column:2},end:{line:14,column:54}}},fnMap:{"0":{name:"arrayIncludes",decl:{start:{line:12,column:9},end:{line:12,column:22}},loc:{start:{line:12,column:37},end:{line:15,column:1}},line:12}},branchMap:{"0":{loc:{start:{line:13,column:17},end:{line:13,column:49}},type:"cond-expr",locations:[{start:{line:13,column:33},end:{line:13,column:34}},{start:{line:13,column:37},end:{line:13,column:49}}],line:13},"1":{loc:{start:{line:14,column:9},end:{line:14,column:54}},type:"binary-expr",locations:[{start:{line:14,column:9},end:{line:14,column:17}},{start:{line:14,column:21},end:{line:14,column:54}}],line:14}},s:{"0":0,"1":0},f:{"0":0},b:{"0":[0,0],"1":[0,0]},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"2188c1bb9b58229caf0c03c66b8f2465ea36e999"};var coverage=global[gcv]||(global[gcv]={});if(!coverage[path]||coverage[path].hash!==hash){coverage[path]=coverageData;}var actualCoverage=coverage[path];{// @ts-ignore
cov_jcfx5xs9=function(){return actualCoverage;};}return actualCoverage;}cov_jcfx5xs9();import baseIndexOf from'./baseIndexOf.js';/**
 * A specialized version of `includes` for arrays without support for
 * specifying an index to search from.
 *
 * @private
 * @param {Array} [array] The array to inspect.
 * @param {*} target The value to search for.
 * @returns {boolean} Returns `true` if `target` is found, else `false`.
 */function arrayIncludes(array,value){cov_jcfx5xs9().f[0]++;const length=(cov_jcfx5xs9().s[0]++,array==null?(cov_jcfx5xs9().b[0][0]++,0):(cov_jcfx5xs9().b[0][1]++,array.length));cov_jcfx5xs9().s[1]++;return(cov_jcfx5xs9().b[1][0]++,!!length)&&(cov_jcfx5xs9().b[1][1]++,baseIndexOf(array,value,0)>-1);}export default arrayIncludes;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJjb3ZfamNmeDV4czkiLCJhY3R1YWxDb3ZlcmFnZSIsImJhc2VJbmRleE9mIiwiYXJyYXlJbmNsdWRlcyIsImFycmF5IiwidmFsdWUiLCJmIiwibGVuZ3RoIiwicyIsImIiXSwic291cmNlcyI6WyJhcnJheUluY2x1ZGVzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBiYXNlSW5kZXhPZiBmcm9tICcuL2Jhc2VJbmRleE9mLmpzJ1xuXG4vKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgaW5jbHVkZXNgIGZvciBhcnJheXMgd2l0aG91dCBzdXBwb3J0IGZvclxuICogc3BlY2lmeWluZyBhbiBpbmRleCB0byBzZWFyY2ggZnJvbS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gW2FycmF5XSBUaGUgYXJyYXkgdG8gaW5zcGVjdC5cbiAqIEBwYXJhbSB7Kn0gdGFyZ2V0IFRoZSB2YWx1ZSB0byBzZWFyY2ggZm9yLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB0YXJnZXRgIGlzIGZvdW5kLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGFycmF5SW5jbHVkZXMoYXJyYXksIHZhbHVlKSB7XG4gIGNvbnN0IGxlbmd0aCA9IGFycmF5ID09IG51bGwgPyAwIDogYXJyYXkubGVuZ3RoXG4gIHJldHVybiAhIWxlbmd0aCAmJiBiYXNlSW5kZXhPZihhcnJheSwgdmFsdWUsIDApID4gLTFcbn1cblxuZXhwb3J0IGRlZmF1bHQgYXJyYXlJbmNsdWRlc1xuIl0sIm1hcHBpbmdzIjoiaTNDQWVZO0FBQUFBLFlBQUEsU0FBQUEsQ0FBQSxTQUFBQyxjQUFBLFdBQUFBLGNBQUEsRUFBQUQsWUFBQSxHQWZaLE1BQU8sQ0FBQUUsV0FBVyxLQUFNLGtCQUFrQixDQUUxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FDQSxRQUFTLENBQUFDLGFBQWFBLENBQUNDLEtBQUssQ0FBRUMsS0FBSyxDQUFFLENBQUFMLFlBQUEsR0FBQU0sQ0FBQSxNQUNuQyxLQUFNLENBQUFDLE1BQU0sRUFBQVAsWUFBQSxHQUFBUSxDQUFBLE1BQUdKLEtBQUssRUFBSSxJQUFJLEVBQUFKLFlBQUEsR0FBQVMsQ0FBQSxTQUFHLENBQUMsR0FBQVQsWUFBQSxHQUFBUyxDQUFBLFNBQUdMLEtBQUssQ0FBQ0csTUFBTSxHQUFBUCxZQUFBLEdBQUFRLENBQUEsTUFDL0MsTUFBTyxDQUFBUixZQUFBLEdBQUFTLENBQUEsVUFBQyxDQUFDRixNQUFNLElBQUFQLFlBQUEsR0FBQVMsQ0FBQSxTQUFJUCxXQUFXLENBQUNFLEtBQUssQ0FBRUMsS0FBSyxDQUFFLENBQUMsQ0FBQyxDQUFHLENBQUMsQ0FBQyxFQUN0RCxDQUVBLGNBQWUsQ0FBQUYsYUFBYSIsImlnbm9yZUxpc3QiOltdfQ==