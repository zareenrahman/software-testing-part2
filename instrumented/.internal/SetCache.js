function cov_2o74mta8we(){var path="D:\\Msc in DS-Course Materials\\Software Testing\\COMP.SE.200-Part 2\\src\\.internal\\SetCache.js";var hash="5ebeebba2782433484407b500d85fac4fcaca139";var global=new Function("return this")();var gcv="__coverage__";var coverageData={path:"D:\\Msc in DS-Course Materials\\Software Testing\\COMP.SE.200-Part 2\\src\\.internal\\SetCache.js",statementMap:{"0":{start:{line:4,column:23},end:{line:4,column:50}},"1":{start:{line:16,column:16},end:{line:16,column:18}},"2":{start:{line:17,column:19},end:{line:17,column:53}},"3":{start:{line:19,column:4},end:{line:19,column:32}},"4":{start:{line:20,column:4},end:{line:22,column:5}},"5":{start:{line:21,column:6},end:{line:21,column:29}},"6":{start:{line:34,column:4},end:{line:34,column:44}},"7":{start:{line:35,column:4},end:{line:35,column:15}},"8":{start:{line:46,column:4},end:{line:46,column:35}},"9":{start:{line:50,column:0},end:{line:50,column:48}}},fnMap:{"0":{name:"(anonymous_0)",decl:{start:{line:15,column:2},end:{line:15,column:3}},loc:{start:{line:15,column:22},end:{line:23,column:3}},line:15},"1":{name:"(anonymous_1)",decl:{start:{line:33,column:2},end:{line:33,column:3}},loc:{start:{line:33,column:13},end:{line:36,column:3}},line:33},"2":{name:"(anonymous_2)",decl:{start:{line:45,column:2},end:{line:45,column:3}},loc:{start:{line:45,column:13},end:{line:47,column:3}},line:45}},branchMap:{"0":{loc:{start:{line:17,column:19},end:{line:17,column:53}},type:"cond-expr",locations:[{start:{line:17,column:36},end:{line:17,column:37}},{start:{line:17,column:40},end:{line:17,column:53}}],line:17}},s:{"0":0,"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0},f:{"0":0,"1":0,"2":0},b:{"0":[0,0]},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"5ebeebba2782433484407b500d85fac4fcaca139"};var coverage=global[gcv]||(global[gcv]={});if(!coverage[path]||coverage[path].hash!==hash){coverage[path]=coverageData;}var actualCoverage=coverage[path];{// @ts-ignore
cov_2o74mta8we=function(){return actualCoverage;};}return actualCoverage;}cov_2o74mta8we();import MapCache from'./MapCache.js';/** Used to stand-in for `undefined` hash values. */const HASH_UNDEFINED=(cov_2o74mta8we().s[0]++,'__lodash_hash_undefined__');class SetCache{/**
   * Creates an array cache object to store unique values.
   *
   * @private
   * @constructor
   * @param {Array} [values] The values to cache.
   */constructor(values){cov_2o74mta8we().f[0]++;let index=(cov_2o74mta8we().s[1]++,-1);const length=(cov_2o74mta8we().s[2]++,values==null?(cov_2o74mta8we().b[0][0]++,0):(cov_2o74mta8we().b[0][1]++,values.length));cov_2o74mta8we().s[3]++;this.__data__=new MapCache();cov_2o74mta8we().s[4]++;while(++index<length){cov_2o74mta8we().s[5]++;this.add(values[index]);}}/**
   * Adds `value` to the array cache.
   *
   * @memberOf SetCache
   * @alias push
   * @param {*} value The value to cache.
   * @returns {Object} Returns the cache instance.
   */add(value){cov_2o74mta8we().f[1]++;cov_2o74mta8we().s[6]++;this.__data__.set(value,HASH_UNDEFINED);cov_2o74mta8we().s[7]++;return this;}/**
   * Checks if `value` is in the array cache.
   *
   * @memberOf SetCache
   * @param {*} value The value to search for.
   * @returns {boolean} Returns `true` if `value` is found, else `false`.
   */has(value){cov_2o74mta8we().f[2]++;cov_2o74mta8we().s[8]++;return this.__data__.has(value);}}cov_2o74mta8we().s[9]++;SetCache.prototype.push=SetCache.prototype.add;export default SetCache;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJjb3ZfMm83NG10YTh3ZSIsImFjdHVhbENvdmVyYWdlIiwiTWFwQ2FjaGUiLCJIQVNIX1VOREVGSU5FRCIsInMiLCJTZXRDYWNoZSIsImNvbnN0cnVjdG9yIiwidmFsdWVzIiwiZiIsImluZGV4IiwibGVuZ3RoIiwiYiIsIl9fZGF0YV9fIiwiYWRkIiwidmFsdWUiLCJzZXQiLCJoYXMiLCJwcm90b3R5cGUiLCJwdXNoIl0sInNvdXJjZXMiOlsiU2V0Q2FjaGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE1hcENhY2hlIGZyb20gJy4vTWFwQ2FjaGUuanMnXG5cbi8qKiBVc2VkIHRvIHN0YW5kLWluIGZvciBgdW5kZWZpbmVkYCBoYXNoIHZhbHVlcy4gKi9cbmNvbnN0IEhBU0hfVU5ERUZJTkVEID0gJ19fbG9kYXNoX2hhc2hfdW5kZWZpbmVkX18nXG5cbmNsYXNzIFNldENhY2hlIHtcblxuICAvKipcbiAgICogQ3JlYXRlcyBhbiBhcnJheSBjYWNoZSBvYmplY3QgdG8gc3RvcmUgdW5pcXVlIHZhbHVlcy5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICogQGNvbnN0cnVjdG9yXG4gICAqIEBwYXJhbSB7QXJyYXl9IFt2YWx1ZXNdIFRoZSB2YWx1ZXMgdG8gY2FjaGUuXG4gICAqL1xuICBjb25zdHJ1Y3Rvcih2YWx1ZXMpIHtcbiAgICBsZXQgaW5kZXggPSAtMVxuICAgIGNvbnN0IGxlbmd0aCA9IHZhbHVlcyA9PSBudWxsID8gMCA6IHZhbHVlcy5sZW5ndGhcblxuICAgIHRoaXMuX19kYXRhX18gPSBuZXcgTWFwQ2FjaGVcbiAgICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgICAgdGhpcy5hZGQodmFsdWVzW2luZGV4XSlcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQWRkcyBgdmFsdWVgIHRvIHRoZSBhcnJheSBjYWNoZS5cbiAgICpcbiAgICogQG1lbWJlck9mIFNldENhY2hlXG4gICAqIEBhbGlhcyBwdXNoXG4gICAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNhY2hlLlxuICAgKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBjYWNoZSBpbnN0YW5jZS5cbiAgICovXG4gIGFkZCh2YWx1ZSkge1xuICAgIHRoaXMuX19kYXRhX18uc2V0KHZhbHVlLCBIQVNIX1VOREVGSU5FRClcbiAgICByZXR1cm4gdGhpc1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGluIHRoZSBhcnJheSBjYWNoZS5cbiAgICpcbiAgICogQG1lbWJlck9mIFNldENhY2hlXG4gICAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHNlYXJjaCBmb3IuXG4gICAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGZvdW5kLCBlbHNlIGBmYWxzZWAuXG4gICAqL1xuICBoYXModmFsdWUpIHtcbiAgICByZXR1cm4gdGhpcy5fX2RhdGFfXy5oYXModmFsdWUpXG4gIH1cbn1cblxuU2V0Q2FjaGUucHJvdG90eXBlLnB1c2ggPSBTZXRDYWNoZS5wcm90b3R5cGUuYWRkXG5cbmV4cG9ydCBkZWZhdWx0IFNldENhY2hlXG4iXSwibWFwcGluZ3MiOiJ3NkRBZVk7QUFBQUEsY0FBQSxTQUFBQSxDQUFBLFNBQUFDLGNBQUEsV0FBQUEsY0FBQSxFQUFBRCxjQUFBLEdBZlosTUFBTyxDQUFBRSxRQUFRLEtBQU0sZUFBZSxDQUVwQyxvREFDQSxLQUFNLENBQUFDLGNBQWMsRUFBQUgsY0FBQSxHQUFBSSxDQUFBLE1BQUcsMkJBQTJCLEVBRWxELEtBQU0sQ0FBQUMsUUFBUyxDQUViO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQ0VDLFdBQVdBLENBQUNDLE1BQU0sQ0FBRSxDQUFBUCxjQUFBLEdBQUFRLENBQUEsTUFDbEIsR0FBSSxDQUFBQyxLQUFLLEVBQUFULGNBQUEsR0FBQUksQ0FBQSxNQUFHLENBQUMsQ0FBQyxFQUNkLEtBQU0sQ0FBQU0sTUFBTSxFQUFBVixjQUFBLEdBQUFJLENBQUEsTUFBR0csTUFBTSxFQUFJLElBQUksRUFBQVAsY0FBQSxHQUFBVyxDQUFBLFNBQUcsQ0FBQyxHQUFBWCxjQUFBLEdBQUFXLENBQUEsU0FBR0osTUFBTSxDQUFDRyxNQUFNLEdBQUFWLGNBQUEsR0FBQUksQ0FBQSxNQUVqRCxJQUFJLENBQUNRLFFBQVEsQ0FBRyxHQUFJLENBQUFWLFFBQVEsQ0FBRCxDQUFDLENBQUFGLGNBQUEsR0FBQUksQ0FBQSxNQUM1QixNQUFPLEVBQUVLLEtBQUssQ0FBR0MsTUFBTSxDQUFFLENBQUFWLGNBQUEsR0FBQUksQ0FBQSxNQUN2QixJQUFJLENBQUNTLEdBQUcsQ0FBQ04sTUFBTSxDQUFDRSxLQUFLLENBQUMsQ0FBQyxDQUN6QixDQUNGLENBRUE7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUNFSSxHQUFHQSxDQUFDQyxLQUFLLENBQUUsQ0FBQWQsY0FBQSxHQUFBUSxDQUFBLE1BQUFSLGNBQUEsR0FBQUksQ0FBQSxNQUNULElBQUksQ0FBQ1EsUUFBUSxDQUFDRyxHQUFHLENBQUNELEtBQUssQ0FBRVgsY0FBYyxDQUFDLENBQUFILGNBQUEsR0FBQUksQ0FBQSxNQUN4QyxNQUFPLEtBQUksQ0FDYixDQUVBO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQ0VZLEdBQUdBLENBQUNGLEtBQUssQ0FBRSxDQUFBZCxjQUFBLEdBQUFRLENBQUEsTUFBQVIsY0FBQSxHQUFBSSxDQUFBLE1BQ1QsTUFBTyxLQUFJLENBQUNRLFFBQVEsQ0FBQ0ksR0FBRyxDQUFDRixLQUFLLENBQUMsQ0FDakMsQ0FDRixDQUFDZCxjQUFBLEdBQUFJLENBQUEsTUFFREMsUUFBUSxDQUFDWSxTQUFTLENBQUNDLElBQUksQ0FBR2IsUUFBUSxDQUFDWSxTQUFTLENBQUNKLEdBQUcsQ0FFaEQsY0FBZSxDQUFBUixRQUFRIiwiaWdub3JlTGlzdCI6W119