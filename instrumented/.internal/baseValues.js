function cov_1tvao79b4s(){var path="D:\\Msc in DS-Course Materials\\Software Testing\\COMP.SE.200-Part 2\\src\\.internal\\baseValues.js";var hash="6d6d74b6ed829d3965e56cab324ddc628bff4056";var global=new Function("return this")();var gcv="__coverage__";var coverageData={path:"D:\\Msc in DS-Course Materials\\Software Testing\\COMP.SE.200-Part 2\\src\\.internal\\baseValues.js",statementMap:{"0":{start:{line:12,column:2},end:{line:12,column:61}},"1":{start:{line:12,column:49},end:{line:12,column:60}}},fnMap:{"0":{name:"baseValues",decl:{start:{line:11,column:9},end:{line:11,column:19}},loc:{start:{line:11,column:35},end:{line:13,column:1}},line:11},"1":{name:"(anonymous_1)",decl:{start:{line:12,column:40},end:{line:12,column:41}},loc:{start:{line:12,column:49},end:{line:12,column:60}},line:12}},branchMap:{"0":{loc:{start:{line:12,column:9},end:{line:12,column:61}},type:"cond-expr",locations:[{start:{line:12,column:25},end:{line:12,column:27}},{start:{line:12,column:30},end:{line:12,column:61}}],line:12}},s:{"0":0,"1":0},f:{"0":0,"1":0},b:{"0":[0,0]},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"6d6d74b6ed829d3965e56cab324ddc628bff4056"};var coverage=global[gcv]||(global[gcv]={});if(!coverage[path]||coverage[path].hash!==hash){coverage[path]=coverageData;}var actualCoverage=coverage[path];{// @ts-ignore
cov_1tvao79b4s=function(){return actualCoverage;};}return actualCoverage;}cov_1tvao79b4s();/**
 * The base implementation of `values` and `valuesIn` which creates an
 * array of `object` property values corresponding to the property names
 * of `props`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array} props The property names to get values for.
 * @returns {Object} Returns the array of property values.
 */function baseValues(object,props){cov_1tvao79b4s().f[0]++;cov_1tvao79b4s().s[0]++;return props==null?(cov_1tvao79b4s().b[0][0]++,[]):(cov_1tvao79b4s().b[0][1]++,props.map(key=>{cov_1tvao79b4s().f[1]++;cov_1tvao79b4s().s[1]++;return object[key];}));}export default baseValues;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJjb3ZfMXR2YW83OWI0cyIsImFjdHVhbENvdmVyYWdlIiwiYmFzZVZhbHVlcyIsIm9iamVjdCIsInByb3BzIiwiZiIsInMiLCJiIiwibWFwIiwia2V5Il0sInNvdXJjZXMiOlsiYmFzZVZhbHVlcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGB2YWx1ZXNgIGFuZCBgdmFsdWVzSW5gIHdoaWNoIGNyZWF0ZXMgYW5cbiAqIGFycmF5IG9mIGBvYmplY3RgIHByb3BlcnR5IHZhbHVlcyBjb3JyZXNwb25kaW5nIHRvIHRoZSBwcm9wZXJ0eSBuYW1lc1xuICogb2YgYHByb3BzYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHBhcmFtIHtBcnJheX0gcHJvcHMgVGhlIHByb3BlcnR5IG5hbWVzIHRvIGdldCB2YWx1ZXMgZm9yLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgYXJyYXkgb2YgcHJvcGVydHkgdmFsdWVzLlxuICovXG5mdW5jdGlvbiBiYXNlVmFsdWVzKG9iamVjdCwgcHJvcHMpIHtcbiAgcmV0dXJuIHByb3BzID09IG51bGwgPyBbXSA6IHByb3BzLm1hcCgoa2V5KSA9PiBvYmplY3Rba2V5XSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgYmFzZVZhbHVlc1xuIl0sIm1hcHBpbmdzIjoiOHlDQWVZO0FBQUFBLGNBQUEsU0FBQUEsQ0FBQSxTQUFBQyxjQUFBLFdBQUFBLGNBQUEsRUFBQUQsY0FBQSxHQWZaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQ0EsUUFBUyxDQUFBRSxVQUFVQSxDQUFDQyxNQUFNLENBQUVDLEtBQUssQ0FBRSxDQUFBSixjQUFBLEdBQUFLLENBQUEsTUFBQUwsY0FBQSxHQUFBTSxDQUFBLE1BQ2pDLE1BQU8sQ0FBQUYsS0FBSyxFQUFJLElBQUksRUFBQUosY0FBQSxHQUFBTyxDQUFBLFNBQUcsRUFBRSxHQUFBUCxjQUFBLEdBQUFPLENBQUEsU0FBR0gsS0FBSyxDQUFDSSxHQUFHLENBQUVDLEdBQUcsRUFBSyxDQUFBVCxjQUFBLEdBQUFLLENBQUEsTUFBQUwsY0FBQSxHQUFBTSxDQUFBLGFBQUFILE1BQU0sQ0FBQ00sR0FBRyxDQUFDLENBQUQsQ0FBQyxDQUFDLEVBQzdELENBRUEsY0FBZSxDQUFBUCxVQUFVIiwiaWdub3JlTGlzdCI6W119