function cov_ditgzrjvg(){var path="D:\\Msc in DS-Course Materials\\Software Testing\\COMP.SE.200-Part 2\\src\\.internal\\basePickBy.js";var hash="a9b0f50b69f3ce3e1189a8a916b79aeeaf26c13c";var global=new Function("return this")();var gcv="__coverage__";var coverageData={path:"D:\\Msc in DS-Course Materials\\Software Testing\\COMP.SE.200-Part 2\\src\\.internal\\basePickBy.js",statementMap:{"0":{start:{line:15,column:14},end:{line:15,column:16}},"1":{start:{line:16,column:17},end:{line:16,column:29}},"2":{start:{line:17,column:17},end:{line:17,column:19}},"3":{start:{line:19,column:2},end:{line:25,column:3}},"4":{start:{line:20,column:17},end:{line:20,column:29}},"5":{start:{line:21,column:18},end:{line:21,column:39}},"6":{start:{line:22,column:4},end:{line:24,column:5}},"7":{start:{line:23,column:6},end:{line:23,column:52}},"8":{start:{line:26,column:2},end:{line:26,column:15}}},fnMap:{"0":{name:"basePickBy",decl:{start:{line:14,column:9},end:{line:14,column:19}},loc:{start:{line:14,column:46},end:{line:27,column:1}},line:14}},branchMap:{"0":{loc:{start:{line:22,column:4},end:{line:24,column:5}},type:"if",locations:[{start:{line:22,column:4},end:{line:24,column:5}},{start:{line:22,column:4},end:{line:24,column:5}}],line:22}},s:{"0":0,"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0},f:{"0":0},b:{"0":[0,0]},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"a9b0f50b69f3ce3e1189a8a916b79aeeaf26c13c"};var coverage=global[gcv]||(global[gcv]={});if(!coverage[path]||coverage[path].hash!==hash){coverage[path]=coverageData;}var actualCoverage=coverage[path];{// @ts-ignore
cov_ditgzrjvg=function(){return actualCoverage;};}return actualCoverage;}cov_ditgzrjvg();import baseGet from'./baseGet.js';import baseSet from'./baseSet.js';import castPath from'./castPath.js';/**
 * The base implementation of `pickBy`.
 *
 * @private
 * @param {Object} object The source object.
 * @param {string[]} paths The property paths to pick.
 * @param {Function} predicate The function invoked per property.
 * @returns {Object} Returns the new object.
 */function basePickBy(object,paths,predicate){cov_ditgzrjvg().f[0]++;let index=(cov_ditgzrjvg().s[0]++,-1);const length=(cov_ditgzrjvg().s[1]++,paths.length);const result=(cov_ditgzrjvg().s[2]++,{});cov_ditgzrjvg().s[3]++;while(++index<length){const path=(cov_ditgzrjvg().s[4]++,paths[index]);const value=(cov_ditgzrjvg().s[5]++,baseGet(object,path));cov_ditgzrjvg().s[6]++;if(predicate(value,path)){cov_ditgzrjvg().b[0][0]++;cov_ditgzrjvg().s[7]++;baseSet(result,castPath(path,object),value);}else{cov_ditgzrjvg().b[0][1]++;}}cov_ditgzrjvg().s[8]++;return result;}export default basePickBy;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJjb3ZfZGl0Z3pyanZnIiwiYWN0dWFsQ292ZXJhZ2UiLCJiYXNlR2V0IiwiYmFzZVNldCIsImNhc3RQYXRoIiwiYmFzZVBpY2tCeSIsIm9iamVjdCIsInBhdGhzIiwicHJlZGljYXRlIiwiZiIsImluZGV4IiwicyIsImxlbmd0aCIsInJlc3VsdCIsInBhdGgiLCJ2YWx1ZSIsImIiXSwic291cmNlcyI6WyJiYXNlUGlja0J5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBiYXNlR2V0IGZyb20gJy4vYmFzZUdldC5qcydcbmltcG9ydCBiYXNlU2V0IGZyb20gJy4vYmFzZVNldC5qcydcbmltcG9ydCBjYXN0UGF0aCBmcm9tICcuL2Nhc3RQYXRoLmpzJ1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBwaWNrQnlgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBzb3VyY2Ugb2JqZWN0LlxuICogQHBhcmFtIHtzdHJpbmdbXX0gcGF0aHMgVGhlIHByb3BlcnR5IHBhdGhzIHRvIHBpY2suXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBwcmVkaWNhdGUgVGhlIGZ1bmN0aW9uIGludm9rZWQgcGVyIHByb3BlcnR5LlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyB0aGUgbmV3IG9iamVjdC5cbiAqL1xuZnVuY3Rpb24gYmFzZVBpY2tCeShvYmplY3QsIHBhdGhzLCBwcmVkaWNhdGUpIHtcbiAgbGV0IGluZGV4ID0gLTFcbiAgY29uc3QgbGVuZ3RoID0gcGF0aHMubGVuZ3RoXG4gIGNvbnN0IHJlc3VsdCA9IHt9XG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICBjb25zdCBwYXRoID0gcGF0aHNbaW5kZXhdXG4gICAgY29uc3QgdmFsdWUgPSBiYXNlR2V0KG9iamVjdCwgcGF0aClcbiAgICBpZiAocHJlZGljYXRlKHZhbHVlLCBwYXRoKSkge1xuICAgICAgYmFzZVNldChyZXN1bHQsIGNhc3RQYXRoKHBhdGgsIG9iamVjdCksIHZhbHVlKVxuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0XG59XG5cbmV4cG9ydCBkZWZhdWx0IGJhc2VQaWNrQnlcbiJdLCJtYXBwaW5ncyI6Im9qREFlWTtBQUFBQSxhQUFBLFNBQUFBLENBQUEsU0FBQUMsY0FBQSxXQUFBQSxjQUFBLEVBQUFELGFBQUEsR0FmWixNQUFPLENBQUFFLE9BQU8sS0FBTSxjQUFjLENBQ2xDLE1BQU8sQ0FBQUMsT0FBTyxLQUFNLGNBQWMsQ0FDbEMsTUFBTyxDQUFBQyxRQUFRLEtBQU0sZUFBZSxDQUVwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FDQSxRQUFTLENBQUFDLFVBQVVBLENBQUNDLE1BQU0sQ0FBRUMsS0FBSyxDQUFFQyxTQUFTLENBQUUsQ0FBQVIsYUFBQSxHQUFBUyxDQUFBLE1BQzVDLEdBQUksQ0FBQUMsS0FBSyxFQUFBVixhQUFBLEdBQUFXLENBQUEsTUFBRyxDQUFDLENBQUMsRUFDZCxLQUFNLENBQUFDLE1BQU0sRUFBQVosYUFBQSxHQUFBVyxDQUFBLE1BQUdKLEtBQUssQ0FBQ0ssTUFBTSxFQUMzQixLQUFNLENBQUFDLE1BQU0sRUFBQWIsYUFBQSxHQUFBVyxDQUFBLE1BQUcsQ0FBQyxDQUFDLEVBQUFYLGFBQUEsR0FBQVcsQ0FBQSxNQUVqQixNQUFPLEVBQUVELEtBQUssQ0FBR0UsTUFBTSxDQUFFLENBQ3ZCLEtBQU0sQ0FBQUUsSUFBSSxFQUFBZCxhQUFBLEdBQUFXLENBQUEsTUFBR0osS0FBSyxDQUFDRyxLQUFLLENBQUMsRUFDekIsS0FBTSxDQUFBSyxLQUFLLEVBQUFmLGFBQUEsR0FBQVcsQ0FBQSxNQUFHVCxPQUFPLENBQUNJLE1BQU0sQ0FBRVEsSUFBSSxDQUFDLEVBQUFkLGFBQUEsR0FBQVcsQ0FBQSxNQUNuQyxHQUFJSCxTQUFTLENBQUNPLEtBQUssQ0FBRUQsSUFBSSxDQUFDLENBQUUsQ0FBQWQsYUFBQSxHQUFBZ0IsQ0FBQSxTQUFBaEIsYUFBQSxHQUFBVyxDQUFBLE1BQzFCUixPQUFPLENBQUNVLE1BQU0sQ0FBRVQsUUFBUSxDQUFDVSxJQUFJLENBQUVSLE1BQU0sQ0FBQyxDQUFFUyxLQUFLLENBQUMsQ0FDaEQsQ0FBQyxLQUFBZixhQUFBLEdBQUFnQixDQUFBLFVBQ0gsQ0FBQ2hCLGFBQUEsR0FBQVcsQ0FBQSxNQUNELE1BQU8sQ0FBQUUsTUFBTSxDQUNmLENBRUEsY0FBZSxDQUFBUixVQUFVIiwiaWdub3JlTGlzdCI6W119