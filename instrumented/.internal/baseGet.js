function cov_w1s86yxyo(){var path="D:\\Msc in DS-Course Materials\\Software Testing\\COMP.SE.200-Part 2\\src\\.internal\\baseGet.js";var hash="f93b50de9835baa722b6042b625e8ef983cb6e18";var global=new Function("return this")();var gcv="__coverage__";var coverageData={path:"D:\\Msc in DS-Course Materials\\Software Testing\\COMP.SE.200-Part 2\\src\\.internal\\baseGet.js",statementMap:{"0":{start:{line:13,column:2},end:{line:13,column:31}},"1":{start:{line:15,column:14},end:{line:15,column:15}},"2":{start:{line:16,column:17},end:{line:16,column:28}},"3":{start:{line:18,column:2},end:{line:20,column:3}},"4":{start:{line:19,column:4},end:{line:19,column:41}},"5":{start:{line:21,column:2},end:{line:21,column:56}}},fnMap:{"0":{name:"baseGet",decl:{start:{line:12,column:9},end:{line:12,column:16}},loc:{start:{line:12,column:31},end:{line:22,column:1}},line:12}},branchMap:{"0":{loc:{start:{line:18,column:9},end:{line:18,column:41}},type:"binary-expr",locations:[{start:{line:18,column:9},end:{line:18,column:23}},{start:{line:18,column:27},end:{line:18,column:41}}],line:18},"1":{loc:{start:{line:21,column:9},end:{line:21,column:56}},type:"cond-expr",locations:[{start:{line:21,column:38},end:{line:21,column:44}},{start:{line:21,column:47},end:{line:21,column:56}}],line:21},"2":{loc:{start:{line:21,column:10},end:{line:21,column:34}},type:"binary-expr",locations:[{start:{line:21,column:10},end:{line:21,column:15}},{start:{line:21,column:19},end:{line:21,column:34}}],line:21}},s:{"0":0,"1":0,"2":0,"3":0,"4":0,"5":0},f:{"0":0},b:{"0":[0,0],"1":[0,0],"2":[0,0]},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"f93b50de9835baa722b6042b625e8ef983cb6e18"};var coverage=global[gcv]||(global[gcv]={});if(!coverage[path]||coverage[path].hash!==hash){coverage[path]=coverageData;}var actualCoverage=coverage[path];{// @ts-ignore
cov_w1s86yxyo=function(){return actualCoverage;};}return actualCoverage;}cov_w1s86yxyo();import castPath from'./castPath.js';import toKey from'./toKey.js';/**
 * The base implementation of `get` without support for default values.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @returns {*} Returns the resolved value.
 */function baseGet(object,path){cov_w1s86yxyo().f[0]++;cov_w1s86yxyo().s[0]++;path=castPath(path,object);let index=(cov_w1s86yxyo().s[1]++,0);const length=(cov_w1s86yxyo().s[2]++,path.length);cov_w1s86yxyo().s[3]++;while((cov_w1s86yxyo().b[0][0]++,object!=null)&&(cov_w1s86yxyo().b[0][1]++,index<length)){cov_w1s86yxyo().s[4]++;object=object[toKey(path[index++])];}cov_w1s86yxyo().s[5]++;return(cov_w1s86yxyo().b[2][0]++,index)&&(cov_w1s86yxyo().b[2][1]++,index==length)?(cov_w1s86yxyo().b[1][0]++,object):(cov_w1s86yxyo().b[1][1]++,undefined);}export default baseGet;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJjb3ZfdzFzODZ5eHlvIiwiYWN0dWFsQ292ZXJhZ2UiLCJjYXN0UGF0aCIsInRvS2V5IiwiYmFzZUdldCIsIm9iamVjdCIsInBhdGgiLCJmIiwicyIsImluZGV4IiwibGVuZ3RoIiwiYiIsInVuZGVmaW5lZCJdLCJzb3VyY2VzIjpbImJhc2VHZXQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNhc3RQYXRoIGZyb20gJy4vY2FzdFBhdGguanMnXG5pbXBvcnQgdG9LZXkgZnJvbSAnLi90b0tleS5qcydcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgZ2V0YCB3aXRob3V0IHN1cHBvcnQgZm9yIGRlZmF1bHQgdmFsdWVzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge0FycmF5fHN0cmluZ30gcGF0aCBUaGUgcGF0aCBvZiB0aGUgcHJvcGVydHkgdG8gZ2V0LlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIHJlc29sdmVkIHZhbHVlLlxuICovXG5mdW5jdGlvbiBiYXNlR2V0KG9iamVjdCwgcGF0aCkge1xuICBwYXRoID0gY2FzdFBhdGgocGF0aCwgb2JqZWN0KVxuXG4gIGxldCBpbmRleCA9IDBcbiAgY29uc3QgbGVuZ3RoID0gcGF0aC5sZW5ndGhcblxuICB3aGlsZSAob2JqZWN0ICE9IG51bGwgJiYgaW5kZXggPCBsZW5ndGgpIHtcbiAgICBvYmplY3QgPSBvYmplY3RbdG9LZXkocGF0aFtpbmRleCsrXSldXG4gIH1cbiAgcmV0dXJuIChpbmRleCAmJiBpbmRleCA9PSBsZW5ndGgpID8gb2JqZWN0IDogdW5kZWZpbmVkXG59XG5cbmV4cG9ydCBkZWZhdWx0IGJhc2VHZXRcbiJdLCJtYXBwaW5ncyI6IjB5REFlWTtBQUFBQSxhQUFBLFNBQUFBLENBQUEsU0FBQUMsY0FBQSxXQUFBQSxjQUFBLEVBQUFELGFBQUEsR0FmWixNQUFPLENBQUFFLFFBQVEsS0FBTSxlQUFlLENBQ3BDLE1BQU8sQ0FBQUMsS0FBSyxLQUFNLFlBQVksQ0FFOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUNBLFFBQVMsQ0FBQUMsT0FBT0EsQ0FBQ0MsTUFBTSxDQUFFQyxJQUFJLENBQUUsQ0FBQU4sYUFBQSxHQUFBTyxDQUFBLE1BQUFQLGFBQUEsR0FBQVEsQ0FBQSxNQUM3QkYsSUFBSSxDQUFHSixRQUFRLENBQUNJLElBQUksQ0FBRUQsTUFBTSxDQUFDLENBRTdCLEdBQUksQ0FBQUksS0FBSyxFQUFBVCxhQUFBLEdBQUFRLENBQUEsTUFBRyxDQUFDLEVBQ2IsS0FBTSxDQUFBRSxNQUFNLEVBQUFWLGFBQUEsR0FBQVEsQ0FBQSxNQUFHRixJQUFJLENBQUNJLE1BQU0sRUFBQVYsYUFBQSxHQUFBUSxDQUFBLE1BRTFCLE1BQU8sQ0FBQVIsYUFBQSxHQUFBVyxDQUFBLFNBQUFOLE1BQU0sRUFBSSxJQUFJLElBQUFMLGFBQUEsR0FBQVcsQ0FBQSxTQUFJRixLQUFLLENBQUdDLE1BQU0sRUFBRSxDQUFBVixhQUFBLEdBQUFRLENBQUEsTUFDdkNILE1BQU0sQ0FBR0EsTUFBTSxDQUFDRixLQUFLLENBQUNHLElBQUksQ0FBQ0csS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQ3ZDLENBQUNULGFBQUEsR0FBQVEsQ0FBQSxNQUNELE1BQVEsQ0FBQVIsYUFBQSxHQUFBVyxDQUFBLFNBQUFGLEtBQUssSUFBQVQsYUFBQSxHQUFBVyxDQUFBLFNBQUlGLEtBQUssRUFBSUMsTUFBTSxHQUFBVixhQUFBLEdBQUFXLENBQUEsU0FBSU4sTUFBTSxHQUFBTCxhQUFBLEdBQUFXLENBQUEsU0FBR0MsU0FBUyxFQUN4RCxDQUVBLGNBQWUsQ0FBQVIsT0FBTyIsImlnbm9yZUxpc3QiOltdfQ==