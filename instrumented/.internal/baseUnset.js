function cov_cltjfkjs8(){var path="D:\\Msc in DS-Course Materials\\Software Testing\\COMP.SE.200-Part 2\\src\\.internal\\baseUnset.js";var hash="1498f5787ebc3e5599fbd96bec59ca7592a8371a";var global=new Function("return this")();var gcv="__coverage__";var coverageData={path:"D:\\Msc in DS-Course Materials\\Software Testing\\COMP.SE.200-Part 2\\src\\.internal\\baseUnset.js",statementMap:{"0":{start:{line:15,column:2},end:{line:15,column:31}},"1":{start:{line:16,column:2},end:{line:16,column:31}},"2":{start:{line:17,column:2},end:{line:17,column:59}}},fnMap:{"0":{name:"baseUnset",decl:{start:{line:14,column:9},end:{line:14,column:18}},loc:{start:{line:14,column:33},end:{line:18,column:1}},line:14}},branchMap:{"0":{loc:{start:{line:17,column:9},end:{line:17,column:59}},type:"binary-expr",locations:[{start:{line:17,column:9},end:{line:17,column:23}},{start:{line:17,column:27},end:{line:17,column:59}}],line:17}},s:{"0":0,"1":0,"2":0},f:{"0":0},b:{"0":[0,0]},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"1498f5787ebc3e5599fbd96bec59ca7592a8371a"};var coverage=global[gcv]||(global[gcv]={});if(!coverage[path]||coverage[path].hash!==hash){coverage[path]=coverageData;}var actualCoverage=coverage[path];{// @ts-ignore
cov_cltjfkjs8=function(){return actualCoverage;};}return actualCoverage;}cov_cltjfkjs8();import castPath from'./castPath.js';import last from'../last.js';import parent from'./parent.js';import toKey from'./toKey.js';/**
 * The base implementation of `unset`.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {Array|string} path The property path to unset.
 * @returns {boolean} Returns `true` if the property is deleted, else `false`.
 */function baseUnset(object,path){cov_cltjfkjs8().f[0]++;cov_cltjfkjs8().s[0]++;path=castPath(path,object);cov_cltjfkjs8().s[1]++;object=parent(object,path);cov_cltjfkjs8().s[2]++;return(cov_cltjfkjs8().b[0][0]++,object==null)||(cov_cltjfkjs8().b[0][1]++,delete object[toKey(last(path))]);}export default baseUnset;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJjb3ZfY2x0amZranM4IiwiYWN0dWFsQ292ZXJhZ2UiLCJjYXN0UGF0aCIsImxhc3QiLCJwYXJlbnQiLCJ0b0tleSIsImJhc2VVbnNldCIsIm9iamVjdCIsInBhdGgiLCJmIiwicyIsImIiXSwic291cmNlcyI6WyJiYXNlVW5zZXQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNhc3RQYXRoIGZyb20gJy4vY2FzdFBhdGguanMnXG5pbXBvcnQgbGFzdCBmcm9tICcuLi9sYXN0LmpzJ1xuaW1wb3J0IHBhcmVudCBmcm9tICcuL3BhcmVudC5qcydcbmltcG9ydCB0b0tleSBmcm9tICcuL3RvS2V5LmpzJ1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGB1bnNldGAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBtb2RpZnkuXG4gKiBAcGFyYW0ge0FycmF5fHN0cmluZ30gcGF0aCBUaGUgcHJvcGVydHkgcGF0aCB0byB1bnNldC5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgcHJvcGVydHkgaXMgZGVsZXRlZCwgZWxzZSBgZmFsc2VgLlxuICovXG5mdW5jdGlvbiBiYXNlVW5zZXQob2JqZWN0LCBwYXRoKSB7XG4gIHBhdGggPSBjYXN0UGF0aChwYXRoLCBvYmplY3QpXG4gIG9iamVjdCA9IHBhcmVudChvYmplY3QsIHBhdGgpXG4gIHJldHVybiBvYmplY3QgPT0gbnVsbCB8fCBkZWxldGUgb2JqZWN0W3RvS2V5KGxhc3QocGF0aCkpXVxufVxuXG5leHBvcnQgZGVmYXVsdCBiYXNlVW5zZXRcbiJdLCJtYXBwaW5ncyI6IjZzQ0FlWTtBQUFBQSxhQUFBLFNBQUFBLENBQUEsU0FBQUMsY0FBQSxXQUFBQSxjQUFBLEVBQUFELGFBQUEsR0FmWixNQUFPLENBQUFFLFFBQVEsS0FBTSxlQUFlLENBQ3BDLE1BQU8sQ0FBQUMsSUFBSSxLQUFNLFlBQVksQ0FDN0IsTUFBTyxDQUFBQyxNQUFNLEtBQU0sYUFBYSxDQUNoQyxNQUFPLENBQUFDLEtBQUssS0FBTSxZQUFZLENBRTlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FDQSxRQUFTLENBQUFDLFNBQVNBLENBQUNDLE1BQU0sQ0FBRUMsSUFBSSxDQUFFLENBQUFSLGFBQUEsR0FBQVMsQ0FBQSxNQUFBVCxhQUFBLEdBQUFVLENBQUEsTUFDL0JGLElBQUksQ0FBR04sUUFBUSxDQUFDTSxJQUFJLENBQUVELE1BQU0sQ0FBQyxDQUFBUCxhQUFBLEdBQUFVLENBQUEsTUFDN0JILE1BQU0sQ0FBR0gsTUFBTSxDQUFDRyxNQUFNLENBQUVDLElBQUksQ0FBQyxDQUFBUixhQUFBLEdBQUFVLENBQUEsTUFDN0IsTUFBTyxDQUFBVixhQUFBLEdBQUFXLENBQUEsU0FBQUosTUFBTSxFQUFJLElBQUksSUFBQVAsYUFBQSxHQUFBVyxDQUFBLFNBQUksTUFBTyxDQUFBSixNQUFNLENBQUNGLEtBQUssQ0FBQ0YsSUFBSSxDQUFDSyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQzNELENBRUEsY0FBZSxDQUFBRixTQUFTIiwiaWdub3JlTGlzdCI6W119