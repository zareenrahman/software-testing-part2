function cov_2669rnebue(){var path="D:\\Msc in DS-Course Materials\\Software Testing\\COMP.SE.200-Part 2\\src\\.internal\\assignMergeValue.js";var hash="76d9fdab75ea49214d91a248c12562629ee37354";var global=new Function("return this")();var gcv="__coverage__";var coverageData={path:"D:\\Msc in DS-Course Materials\\Software Testing\\COMP.SE.200-Part 2\\src\\.internal\\assignMergeValue.js",statementMap:{"0":{start:{line:14,column:2},end:{line:17,column:3}},"1":{start:{line:16,column:4},end:{line:16,column:39}}},fnMap:{"0":{name:"assignMergeValue",decl:{start:{line:13,column:9},end:{line:13,column:25}},loc:{start:{line:13,column:46},end:{line:18,column:1}},line:13}},branchMap:{"0":{loc:{start:{line:14,column:2},end:{line:17,column:3}},type:"if",locations:[{start:{line:14,column:2},end:{line:17,column:3}},{start:{line:14,column:2},end:{line:17,column:3}}],line:14},"1":{loc:{start:{line:14,column:6},end:{line:15,column:47}},type:"binary-expr",locations:[{start:{line:14,column:7},end:{line:14,column:26}},{start:{line:14,column:30},end:{line:14,column:53}},{start:{line:15,column:7},end:{line:15,column:26}},{start:{line:15,column:30},end:{line:15,column:46}}],line:14}},s:{"0":0,"1":0},f:{"0":0},b:{"0":[0,0],"1":[0,0,0,0]},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"76d9fdab75ea49214d91a248c12562629ee37354"};var coverage=global[gcv]||(global[gcv]={});if(!coverage[path]||coverage[path].hash!==hash){coverage[path]=coverageData;}var actualCoverage=coverage[path];{// @ts-ignore
cov_2669rnebue=function(){return actualCoverage;};}return actualCoverage;}cov_2669rnebue();import baseAssignValue from'./baseAssignValue.js';import eq from'../eq.js';/**
 * This function is like `assignValue` except that it doesn't assign
 * `undefined` values.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */function assignMergeValue(object,key,value){cov_2669rnebue().f[0]++;cov_2669rnebue().s[0]++;if((cov_2669rnebue().b[1][0]++,value!==undefined)&&(cov_2669rnebue().b[1][1]++,!eq(object[key],value))||(cov_2669rnebue().b[1][2]++,value===undefined)&&(cov_2669rnebue().b[1][3]++,!(key in object))){cov_2669rnebue().b[0][0]++;cov_2669rnebue().s[1]++;baseAssignValue(object,key,value);}else{cov_2669rnebue().b[0][1]++;}}export default assignMergeValue;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJjb3ZfMjY2OXJuZWJ1ZSIsImFjdHVhbENvdmVyYWdlIiwiYmFzZUFzc2lnblZhbHVlIiwiZXEiLCJhc3NpZ25NZXJnZVZhbHVlIiwib2JqZWN0Iiwia2V5IiwidmFsdWUiLCJmIiwicyIsImIiLCJ1bmRlZmluZWQiXSwic291cmNlcyI6WyJhc3NpZ25NZXJnZVZhbHVlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBiYXNlQXNzaWduVmFsdWUgZnJvbSAnLi9iYXNlQXNzaWduVmFsdWUuanMnXG5pbXBvcnQgZXEgZnJvbSAnLi4vZXEuanMnXG5cbi8qKlxuICogVGhpcyBmdW5jdGlvbiBpcyBsaWtlIGBhc3NpZ25WYWx1ZWAgZXhjZXB0IHRoYXQgaXQgZG9lc24ndCBhc3NpZ25cbiAqIGB1bmRlZmluZWRgIHZhbHVlcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIG1vZGlmeS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgcHJvcGVydHkgdG8gYXNzaWduLlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gYXNzaWduLlxuICovXG5mdW5jdGlvbiBhc3NpZ25NZXJnZVZhbHVlKG9iamVjdCwga2V5LCB2YWx1ZSkge1xuICBpZiAoKHZhbHVlICE9PSB1bmRlZmluZWQgJiYgIWVxKG9iamVjdFtrZXldLCB2YWx1ZSkpIHx8XG4gICAgICAodmFsdWUgPT09IHVuZGVmaW5lZCAmJiAhKGtleSBpbiBvYmplY3QpKSkge1xuICAgIGJhc2VBc3NpZ25WYWx1ZShvYmplY3QsIGtleSwgdmFsdWUpXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgYXNzaWduTWVyZ2VWYWx1ZVxuIl0sIm1hcHBpbmdzIjoidzlDQWVZO0FBQUFBLGNBQUEsU0FBQUEsQ0FBQSxTQUFBQyxjQUFBLFdBQUFBLGNBQUEsRUFBQUQsY0FBQSxHQWZaLE1BQU8sQ0FBQUUsZUFBZSxLQUFNLHNCQUFzQixDQUNsRCxNQUFPLENBQUFDLEVBQUUsS0FBTSxVQUFVLENBRXpCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUNBLFFBQVMsQ0FBQUMsZ0JBQWdCQSxDQUFDQyxNQUFNLENBQUVDLEdBQUcsQ0FBRUMsS0FBSyxDQUFFLENBQUFQLGNBQUEsR0FBQVEsQ0FBQSxNQUFBUixjQUFBLEdBQUFTLENBQUEsTUFDNUMsR0FBSyxDQUFBVCxjQUFBLEdBQUFVLENBQUEsU0FBQUgsS0FBSyxHQUFLSSxTQUFTLElBQUFYLGNBQUEsR0FBQVUsQ0FBQSxTQUFJLENBQUNQLEVBQUUsQ0FBQ0UsTUFBTSxDQUFDQyxHQUFHLENBQUMsQ0FBRUMsS0FBSyxDQUFDLEdBQzlDLENBQUFQLGNBQUEsR0FBQVUsQ0FBQSxTQUFBSCxLQUFLLEdBQUtJLFNBQVMsSUFBQVgsY0FBQSxHQUFBVSxDQUFBLFNBQUksRUFBRUosR0FBRyxHQUFJLENBQUFELE1BQU0sQ0FBQyxDQUFDLENBQUUsQ0FBQUwsY0FBQSxHQUFBVSxDQUFBLFNBQUFWLGNBQUEsR0FBQVMsQ0FBQSxNQUM3Q1AsZUFBZSxDQUFDRyxNQUFNLENBQUVDLEdBQUcsQ0FBRUMsS0FBSyxDQUFDLENBQ3JDLENBQUMsS0FBQVAsY0FBQSxHQUFBVSxDQUFBLFVBQ0gsQ0FFQSxjQUFlLENBQUFOLGdCQUFnQiIsImlnbm9yZUxpc3QiOltdfQ==