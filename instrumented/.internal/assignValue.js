function cov_1gqdqinh16(){var path="D:\\Msc in DS-Course Materials\\Software Testing\\COMP.SE.200-Part 2\\src\\.internal\\assignValue.js";var hash="c2312ae26a81853c28261b55caeabb4460564ad6";var global=new Function("return this")();var gcv="__coverage__";var coverageData={path:"D:\\Msc in DS-Course Materials\\Software Testing\\COMP.SE.200-Part 2\\src\\.internal\\assignValue.js",statementMap:{"0":{start:{line:5,column:23},end:{line:5,column:54}},"1":{start:{line:16,column:19},end:{line:16,column:30}},"2":{start:{line:18,column:2},end:{line:24,column:3}},"3":{start:{line:19,column:4},end:{line:21,column:5}},"4":{start:{line:20,column:6},end:{line:20,column:41}},"5":{start:{line:22,column:9},end:{line:24,column:3}},"6":{start:{line:23,column:4},end:{line:23,column:39}}},fnMap:{"0":{name:"assignValue",decl:{start:{line:15,column:9},end:{line:15,column:20}},loc:{start:{line:15,column:41},end:{line:25,column:1}},line:15}},branchMap:{"0":{loc:{start:{line:18,column:2},end:{line:24,column:3}},type:"if",locations:[{start:{line:18,column:2},end:{line:24,column:3}},{start:{line:18,column:2},end:{line:24,column:3}}],line:18},"1":{loc:{start:{line:18,column:8},end:{line:18,column:63}},type:"binary-expr",locations:[{start:{line:18,column:8},end:{line:18,column:40}},{start:{line:18,column:44},end:{line:18,column:63}}],line:18},"2":{loc:{start:{line:19,column:4},end:{line:21,column:5}},type:"if",locations:[{start:{line:19,column:4},end:{line:21,column:5}},{start:{line:19,column:4},end:{line:21,column:5}}],line:19},"3":{loc:{start:{line:19,column:8},end:{line:19,column:53}},type:"binary-expr",locations:[{start:{line:19,column:8},end:{line:19,column:19}},{start:{line:19,column:23},end:{line:19,column:53}}],line:19},"4":{loc:{start:{line:22,column:9},end:{line:24,column:3}},type:"if",locations:[{start:{line:22,column:9},end:{line:24,column:3}},{start:{line:22,column:9},end:{line:24,column:3}}],line:22},"5":{loc:{start:{line:22,column:13},end:{line:22,column:52}},type:"binary-expr",locations:[{start:{line:22,column:13},end:{line:22,column:32}},{start:{line:22,column:36},end:{line:22,column:52}}],line:22}},s:{"0":0,"1":0,"2":0,"3":0,"4":0,"5":0,"6":0},f:{"0":0},b:{"0":[0,0],"1":[0,0],"2":[0,0],"3":[0,0],"4":[0,0],"5":[0,0]},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"c2312ae26a81853c28261b55caeabb4460564ad6"};var coverage=global[gcv]||(global[gcv]={});if(!coverage[path]||coverage[path].hash!==hash){coverage[path]=coverageData;}var actualCoverage=coverage[path];{// @ts-ignore
cov_1gqdqinh16=function(){return actualCoverage;};}return actualCoverage;}cov_1gqdqinh16();import baseAssignValue from'./baseAssignValue.js';import eq from'../eq.js';/** Used to check objects for own properties. */const hasOwnProperty=(cov_1gqdqinh16().s[0]++,Object.prototype.hasOwnProperty);/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */function assignValue(object,key,value){cov_1gqdqinh16().f[0]++;const objValue=(cov_1gqdqinh16().s[1]++,object[key]);cov_1gqdqinh16().s[2]++;if(!((cov_1gqdqinh16().b[1][0]++,hasOwnProperty.call(object,key))&&(cov_1gqdqinh16().b[1][1]++,eq(objValue,value)))){cov_1gqdqinh16().b[0][0]++;cov_1gqdqinh16().s[3]++;if((cov_1gqdqinh16().b[3][0]++,value!==0)||(cov_1gqdqinh16().b[3][1]++,1/value===1/objValue)){cov_1gqdqinh16().b[2][0]++;cov_1gqdqinh16().s[4]++;baseAssignValue(object,key,value);}else{cov_1gqdqinh16().b[2][1]++;}}else{cov_1gqdqinh16().b[0][1]++;cov_1gqdqinh16().s[5]++;if((cov_1gqdqinh16().b[5][0]++,value===undefined)&&(cov_1gqdqinh16().b[5][1]++,!(key in object))){cov_1gqdqinh16().b[4][0]++;cov_1gqdqinh16().s[6]++;baseAssignValue(object,key,value);}else{cov_1gqdqinh16().b[4][1]++;}}}export default assignValue;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJjb3ZfMWdxZHFpbmgxNiIsImFjdHVhbENvdmVyYWdlIiwiYmFzZUFzc2lnblZhbHVlIiwiZXEiLCJoYXNPd25Qcm9wZXJ0eSIsInMiLCJPYmplY3QiLCJwcm90b3R5cGUiLCJhc3NpZ25WYWx1ZSIsIm9iamVjdCIsImtleSIsInZhbHVlIiwiZiIsIm9ialZhbHVlIiwiYiIsImNhbGwiLCJ1bmRlZmluZWQiXSwic291cmNlcyI6WyJhc3NpZ25WYWx1ZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYmFzZUFzc2lnblZhbHVlIGZyb20gJy4vYmFzZUFzc2lnblZhbHVlLmpzJ1xuaW1wb3J0IGVxIGZyb20gJy4uL2VxLmpzJ1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbmNvbnN0IGhhc093blByb3BlcnR5ID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eVxuXG4vKipcbiAqIEFzc2lnbnMgYHZhbHVlYCB0byBga2V5YCBvZiBgb2JqZWN0YCBpZiB0aGUgZXhpc3RpbmcgdmFsdWUgaXMgbm90IGVxdWl2YWxlbnQuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBtb2RpZnkuXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIHByb3BlcnR5IHRvIGFzc2lnbi5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGFzc2lnbi5cbiAqL1xuZnVuY3Rpb24gYXNzaWduVmFsdWUob2JqZWN0LCBrZXksIHZhbHVlKSB7XG4gIGNvbnN0IG9ialZhbHVlID0gb2JqZWN0W2tleV1cblxuICBpZiAoIShoYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwga2V5KSAmJiBlcShvYmpWYWx1ZSwgdmFsdWUpKSkge1xuICAgIGlmICh2YWx1ZSAhPT0gMCB8fCAoMSAvIHZhbHVlKSA9PT0gKDEgLyBvYmpWYWx1ZSkpIHtcbiAgICAgIGJhc2VBc3NpZ25WYWx1ZShvYmplY3QsIGtleSwgdmFsdWUpXG4gICAgfVxuICB9IGVsc2UgaWYgKHZhbHVlID09PSB1bmRlZmluZWQgJiYgIShrZXkgaW4gb2JqZWN0KSkge1xuICAgIGJhc2VBc3NpZ25WYWx1ZShvYmplY3QsIGtleSwgdmFsdWUpXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgYXNzaWduVmFsdWVcbiJdLCJtYXBwaW5ncyI6Ink4RUFlWTtBQUFBQSxjQUFBLFNBQUFBLENBQUEsU0FBQUMsY0FBQSxXQUFBQSxjQUFBLEVBQUFELGNBQUEsR0FmWixNQUFPLENBQUFFLGVBQWUsS0FBTSxzQkFBc0IsQ0FDbEQsTUFBTyxDQUFBQyxFQUFFLEtBQU0sVUFBVSxDQUV6QixnREFDQSxLQUFNLENBQUFDLGNBQWMsRUFBQUosY0FBQSxHQUFBSyxDQUFBLE1BQUdDLE1BQU0sQ0FBQ0MsU0FBUyxDQUFDSCxjQUFjLEVBRXREO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FDQSxRQUFTLENBQUFJLFdBQVdBLENBQUNDLE1BQU0sQ0FBRUMsR0FBRyxDQUFFQyxLQUFLLENBQUUsQ0FBQVgsY0FBQSxHQUFBWSxDQUFBLE1BQ3ZDLEtBQU0sQ0FBQUMsUUFBUSxFQUFBYixjQUFBLEdBQUFLLENBQUEsTUFBR0ksTUFBTSxDQUFDQyxHQUFHLENBQUMsRUFBQVYsY0FBQSxHQUFBSyxDQUFBLE1BRTVCLEdBQUksRUFBRSxDQUFBTCxjQUFBLEdBQUFjLENBQUEsU0FBQVYsY0FBYyxDQUFDVyxJQUFJLENBQUNOLE1BQU0sQ0FBRUMsR0FBRyxDQUFDLElBQUFWLGNBQUEsR0FBQWMsQ0FBQSxTQUFJWCxFQUFFLENBQUNVLFFBQVEsQ0FBRUYsS0FBSyxDQUFDLEVBQUMsQ0FBRSxDQUFBWCxjQUFBLEdBQUFjLENBQUEsU0FBQWQsY0FBQSxHQUFBSyxDQUFBLE1BQzlELEdBQUksQ0FBQUwsY0FBQSxHQUFBYyxDQUFBLFNBQUFILEtBQUssR0FBSyxDQUFDLElBQUFYLGNBQUEsR0FBQWMsQ0FBQSxTQUFLLENBQUMsQ0FBR0gsS0FBSyxHQUFPLENBQUMsQ0FBR0UsUUFBUyxFQUFFLENBQUFiLGNBQUEsR0FBQWMsQ0FBQSxTQUFBZCxjQUFBLEdBQUFLLENBQUEsTUFDakRILGVBQWUsQ0FBQ08sTUFBTSxDQUFFQyxHQUFHLENBQUVDLEtBQUssQ0FBQyxDQUNyQyxDQUFDLEtBQUFYLGNBQUEsR0FBQWMsQ0FBQSxVQUNILENBQUMsSUFBTSxDQUFBZCxjQUFBLEdBQUFjLENBQUEsU0FBQWQsY0FBQSxHQUFBSyxDQUFBLFNBQUksQ0FBQUwsY0FBQSxHQUFBYyxDQUFBLFNBQUFILEtBQUssR0FBS0ssU0FBUyxJQUFBaEIsY0FBQSxHQUFBYyxDQUFBLFNBQUksRUFBRUosR0FBRyxHQUFJLENBQUFELE1BQU0sQ0FBQyxFQUFFLENBQUFULGNBQUEsR0FBQWMsQ0FBQSxTQUFBZCxjQUFBLEdBQUFLLENBQUEsTUFDbERILGVBQWUsQ0FBQ08sTUFBTSxDQUFFQyxHQUFHLENBQUVDLEtBQUssQ0FBQyxDQUNyQyxDQUFDLEtBQUFYLGNBQUEsR0FBQWMsQ0FBQSxVQUFELENBQ0YsQ0FFQSxjQUFlLENBQUFOLFdBQVciLCJpZ25vcmVMaXN0IjpbXX0=