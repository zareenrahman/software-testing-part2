function cov_h7lvnmaox(){var path="D:\\Msc in DS-Course Materials\\Software Testing\\COMP.SE.200-Part 2\\src\\.internal\\setToPairs.js";var hash="a53f506fff7afe3a6a9c941704bd9a9fe25acfdc";var global=new Function("return this")();var gcv="__coverage__";var coverageData={path:"D:\\Msc in DS-Course Materials\\Software Testing\\COMP.SE.200-Part 2\\src\\.internal\\setToPairs.js",statementMap:{"0":{start:{line:9,column:14},end:{line:9,column:16}},"1":{start:{line:10,column:17},end:{line:10,column:36}},"2":{start:{line:12,column:2},end:{line:14,column:4}},"3":{start:{line:13,column:4},end:{line:13,column:36}},"4":{start:{line:15,column:2},end:{line:15,column:15}}},fnMap:{"0":{name:"setToPairs",decl:{start:{line:8,column:9},end:{line:8,column:19}},loc:{start:{line:8,column:25},end:{line:16,column:1}},line:8},"1":{name:"(anonymous_1)",decl:{start:{line:12,column:14},end:{line:12,column:15}},loc:{start:{line:12,column:25},end:{line:14,column:3}},line:12}},branchMap:{},s:{"0":0,"1":0,"2":0,"3":0,"4":0},f:{"0":0,"1":0},b:{},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"a53f506fff7afe3a6a9c941704bd9a9fe25acfdc"};var coverage=global[gcv]||(global[gcv]={});if(!coverage[path]||coverage[path].hash!==hash){coverage[path]=coverageData;}var actualCoverage=coverage[path];{// @ts-ignore
cov_h7lvnmaox=function(){return actualCoverage;};}return actualCoverage;}cov_h7lvnmaox();/**
 * Converts `set` to its value-value pairs.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the value-value pairs.
 */function setToPairs(set){cov_h7lvnmaox().f[0]++;let index=(cov_h7lvnmaox().s[0]++,-1);const result=(cov_h7lvnmaox().s[1]++,new Array(set.size));cov_h7lvnmaox().s[2]++;set.forEach(value=>{cov_h7lvnmaox().f[1]++;cov_h7lvnmaox().s[3]++;result[++index]=[value,value];});cov_h7lvnmaox().s[4]++;return result;}export default setToPairs;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJjb3ZfaDdsdm5tYW94IiwiYWN0dWFsQ292ZXJhZ2UiLCJzZXRUb1BhaXJzIiwic2V0IiwiZiIsImluZGV4IiwicyIsInJlc3VsdCIsIkFycmF5Iiwic2l6ZSIsImZvckVhY2giLCJ2YWx1ZSJdLCJzb3VyY2VzIjpbInNldFRvUGFpcnMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDb252ZXJ0cyBgc2V0YCB0byBpdHMgdmFsdWUtdmFsdWUgcGFpcnMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBzZXQgVGhlIHNldCB0byBjb252ZXJ0LlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSB2YWx1ZS12YWx1ZSBwYWlycy5cbiAqL1xuZnVuY3Rpb24gc2V0VG9QYWlycyhzZXQpIHtcbiAgbGV0IGluZGV4ID0gLTFcbiAgY29uc3QgcmVzdWx0ID0gbmV3IEFycmF5KHNldC5zaXplKVxuXG4gIHNldC5mb3JFYWNoKCh2YWx1ZSkgPT4ge1xuICAgIHJlc3VsdFsrK2luZGV4XSA9IFt2YWx1ZSwgdmFsdWVdXG4gIH0pXG4gIHJldHVybiByZXN1bHRcbn1cblxuZXhwb3J0IGRlZmF1bHQgc2V0VG9QYWlyc1xuIl0sIm1hcHBpbmdzIjoiMndDQWVZO0FBQUFBLGFBQUEsU0FBQUEsQ0FBQSxTQUFBQyxjQUFBLFdBQUFBLGNBQUEsRUFBQUQsYUFBQSxHQWZaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQ0EsUUFBUyxDQUFBRSxVQUFVQSxDQUFDQyxHQUFHLENBQUUsQ0FBQUgsYUFBQSxHQUFBSSxDQUFBLE1BQ3ZCLEdBQUksQ0FBQUMsS0FBSyxFQUFBTCxhQUFBLEdBQUFNLENBQUEsTUFBRyxDQUFDLENBQUMsRUFDZCxLQUFNLENBQUFDLE1BQU0sRUFBQVAsYUFBQSxHQUFBTSxDQUFBLE1BQUcsR0FBSSxDQUFBRSxLQUFLLENBQUNMLEdBQUcsQ0FBQ00sSUFBSSxDQUFDLEVBQUFULGFBQUEsR0FBQU0sQ0FBQSxNQUVsQ0gsR0FBRyxDQUFDTyxPQUFPLENBQUVDLEtBQUssRUFBSyxDQUFBWCxhQUFBLEdBQUFJLENBQUEsTUFBQUosYUFBQSxHQUFBTSxDQUFBLE1BQ3JCQyxNQUFNLENBQUMsRUFBRUYsS0FBSyxDQUFDLENBQUcsQ0FBQ00sS0FBSyxDQUFFQSxLQUFLLENBQUMsQ0FDbEMsQ0FBQyxDQUFDLENBQUFYLGFBQUEsR0FBQU0sQ0FBQSxNQUNGLE1BQU8sQ0FBQUMsTUFBTSxDQUNmLENBRUEsY0FBZSxDQUFBTCxVQUFVIiwiaWdub3JlTGlzdCI6W119