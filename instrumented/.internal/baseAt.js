function cov_2azv8msfzy(){var path="D:\\Msc in DS-Course Materials\\Software Testing\\COMP.SE.200-Part 2\\src\\.internal\\baseAt.js";var hash="48c0cb0c8cda363dcc60938e866b960e204ec05c";var global=new Function("return this")();var gcv="__coverage__";var coverageData={path:"D:\\Msc in DS-Course Materials\\Software Testing\\COMP.SE.200-Part 2\\src\\.internal\\baseAt.js",statementMap:{"0":{start:{line:12,column:14},end:{line:12,column:16}},"1":{start:{line:13,column:17},end:{line:13,column:29}},"2":{start:{line:14,column:17},end:{line:14,column:34}},"3":{start:{line:15,column:15},end:{line:15,column:29}},"4":{start:{line:17,column:2},end:{line:19,column:3}},"5":{start:{line:18,column:4},end:{line:18,column:64}},"6":{start:{line:20,column:2},end:{line:20,column:15}}},fnMap:{"0":{name:"baseAt",decl:{start:{line:11,column:9},end:{line:11,column:15}},loc:{start:{line:11,column:31},end:{line:21,column:1}},line:11}},branchMap:{"0":{loc:{start:{line:18,column:20},end:{line:18,column:64}},type:"cond-expr",locations:[{start:{line:18,column:27},end:{line:18,column:36}},{start:{line:18,column:39},end:{line:18,column:64}}],line:18}},s:{"0":0,"1":0,"2":0,"3":0,"4":0,"5":0,"6":0},f:{"0":0},b:{"0":[0,0]},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"48c0cb0c8cda363dcc60938e866b960e204ec05c"};var coverage=global[gcv]||(global[gcv]={});if(!coverage[path]||coverage[path].hash!==hash){coverage[path]=coverageData;}var actualCoverage=coverage[path];{// @ts-ignore
cov_2azv8msfzy=function(){return actualCoverage;};}return actualCoverage;}cov_2azv8msfzy();import get from'../get.js';/**
 * The base implementation of `at` without support for individual paths.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {string[]} paths The property paths to pick.
 * @returns {Array} Returns the picked elements.
 */function baseAt(object,paths){cov_2azv8msfzy().f[0]++;let index=(cov_2azv8msfzy().s[0]++,-1);const length=(cov_2azv8msfzy().s[1]++,paths.length);const result=(cov_2azv8msfzy().s[2]++,new Array(length));const skip=(cov_2azv8msfzy().s[3]++,object==null);cov_2azv8msfzy().s[4]++;while(++index<length){cov_2azv8msfzy().s[5]++;result[index]=skip?(cov_2azv8msfzy().b[0][0]++,undefined):(cov_2azv8msfzy().b[0][1]++,get(object,paths[index]));}cov_2azv8msfzy().s[6]++;return result;}export default baseAt;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJjb3ZfMmF6djhtc2Z6eSIsImFjdHVhbENvdmVyYWdlIiwiZ2V0IiwiYmFzZUF0Iiwib2JqZWN0IiwicGF0aHMiLCJmIiwiaW5kZXgiLCJzIiwibGVuZ3RoIiwicmVzdWx0IiwiQXJyYXkiLCJza2lwIiwiYiIsInVuZGVmaW5lZCJdLCJzb3VyY2VzIjpbImJhc2VBdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZ2V0IGZyb20gJy4uL2dldC5qcydcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgYXRgIHdpdGhvdXQgc3VwcG9ydCBmb3IgaW5kaXZpZHVhbCBwYXRocy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIGl0ZXJhdGUgb3Zlci5cbiAqIEBwYXJhbSB7c3RyaW5nW119IHBhdGhzIFRoZSBwcm9wZXJ0eSBwYXRocyB0byBwaWNrLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBwaWNrZWQgZWxlbWVudHMuXG4gKi9cbmZ1bmN0aW9uIGJhc2VBdChvYmplY3QsIHBhdGhzKSB7XG4gIGxldCBpbmRleCA9IC0xXG4gIGNvbnN0IGxlbmd0aCA9IHBhdGhzLmxlbmd0aFxuICBjb25zdCByZXN1bHQgPSBuZXcgQXJyYXkobGVuZ3RoKVxuICBjb25zdCBza2lwID0gb2JqZWN0ID09IG51bGxcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHJlc3VsdFtpbmRleF0gPSBza2lwID8gdW5kZWZpbmVkIDogZ2V0KG9iamVjdCwgcGF0aHNbaW5kZXhdKVxuICB9XG4gIHJldHVybiByZXN1bHRcbn1cblxuZXhwb3J0IGRlZmF1bHQgYmFzZUF0XG4iXSwibWFwcGluZ3MiOiI0N0NBZVk7QUFBQUEsY0FBQSxTQUFBQSxDQUFBLFNBQUFDLGNBQUEsV0FBQUEsY0FBQSxFQUFBRCxjQUFBLEdBZlosTUFBTyxDQUFBRSxHQUFHLEtBQU0sV0FBVyxDQUUzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQ0EsUUFBUyxDQUFBQyxNQUFNQSxDQUFDQyxNQUFNLENBQUVDLEtBQUssQ0FBRSxDQUFBTCxjQUFBLEdBQUFNLENBQUEsTUFDN0IsR0FBSSxDQUFBQyxLQUFLLEVBQUFQLGNBQUEsR0FBQVEsQ0FBQSxNQUFHLENBQUMsQ0FBQyxFQUNkLEtBQU0sQ0FBQUMsTUFBTSxFQUFBVCxjQUFBLEdBQUFRLENBQUEsTUFBR0gsS0FBSyxDQUFDSSxNQUFNLEVBQzNCLEtBQU0sQ0FBQUMsTUFBTSxFQUFBVixjQUFBLEdBQUFRLENBQUEsTUFBRyxHQUFJLENBQUFHLEtBQUssQ0FBQ0YsTUFBTSxDQUFDLEVBQ2hDLEtBQU0sQ0FBQUcsSUFBSSxFQUFBWixjQUFBLEdBQUFRLENBQUEsTUFBR0osTUFBTSxFQUFJLElBQUksRUFBQUosY0FBQSxHQUFBUSxDQUFBLE1BRTNCLE1BQU8sRUFBRUQsS0FBSyxDQUFHRSxNQUFNLENBQUUsQ0FBQVQsY0FBQSxHQUFBUSxDQUFBLE1BQ3ZCRSxNQUFNLENBQUNILEtBQUssQ0FBQyxDQUFHSyxJQUFJLEVBQUFaLGNBQUEsR0FBQWEsQ0FBQSxTQUFHQyxTQUFTLEdBQUFkLGNBQUEsR0FBQWEsQ0FBQSxTQUFHWCxHQUFHLENBQUNFLE1BQU0sQ0FBRUMsS0FBSyxDQUFDRSxLQUFLLENBQUMsQ0FBQyxFQUM5RCxDQUFDUCxjQUFBLEdBQUFRLENBQUEsTUFDRCxNQUFPLENBQUFFLE1BQU0sQ0FDZixDQUVBLGNBQWUsQ0FBQVAsTUFBTSIsImlnbm9yZUxpc3QiOltdfQ==