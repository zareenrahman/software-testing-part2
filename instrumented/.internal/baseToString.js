function cov_qwvsuimxp(){var path="D:\\Msc in DS-Course Materials\\Software Testing\\COMP.SE.200-Part 2\\src\\.internal\\baseToString.js";var hash="205291807e159d00e11d17a07d7da5087e92cf5c";var global=new Function("return this")();var gcv="__coverage__";var coverageData={path:"D:\\Msc in DS-Course Materials\\Software Testing\\COMP.SE.200-Part 2\\src\\.internal\\baseToString.js",statementMap:{"0":{start:{line:4,column:17},end:{line:4,column:22}},"1":{start:{line:7,column:23},end:{line:7,column:48}},"2":{start:{line:19,column:2},end:{line:21,column:3}},"3":{start:{line:20,column:4},end:{line:20,column:16}},"4":{start:{line:22,column:2},end:{line:25,column:3}},"5":{start:{line:24,column:4},end:{line:24,column:39}},"6":{start:{line:26,column:2},end:{line:28,column:3}},"7":{start:{line:27,column:4},end:{line:27,column:59}},"8":{start:{line:29,column:17},end:{line:29,column:27}},"9":{start:{line:30,column:2},end:{line:30,column:68}}},fnMap:{"0":{name:"baseToString",decl:{start:{line:17,column:9},end:{line:17,column:21}},loc:{start:{line:17,column:29},end:{line:31,column:1}},line:17}},branchMap:{"0":{loc:{start:{line:19,column:2},end:{line:21,column:3}},type:"if",locations:[{start:{line:19,column:2},end:{line:21,column:3}},{start:{line:19,column:2},end:{line:21,column:3}}],line:19},"1":{loc:{start:{line:22,column:2},end:{line:25,column:3}},type:"if",locations:[{start:{line:22,column:2},end:{line:25,column:3}},{start:{line:22,column:2},end:{line:25,column:3}}],line:22},"2":{loc:{start:{line:26,column:2},end:{line:28,column:3}},type:"if",locations:[{start:{line:26,column:2},end:{line:28,column:3}},{start:{line:26,column:2},end:{line:28,column:3}}],line:26},"3":{loc:{start:{line:27,column:11},end:{line:27,column:59}},type:"cond-expr",locations:[{start:{line:27,column:28},end:{line:27,column:54}},{start:{line:27,column:57},end:{line:27,column:59}}],line:27},"4":{loc:{start:{line:30,column:9},end:{line:30,column:68}},type:"cond-expr",locations:[{start:{line:30,column:55},end:{line:30,column:59}},{start:{line:30,column:62},end:{line:30,column:68}}],line:30},"5":{loc:{start:{line:30,column:10},end:{line:30,column:51}},type:"binary-expr",locations:[{start:{line:30,column:10},end:{line:30,column:23}},{start:{line:30,column:27},end:{line:30,column:51}}],line:30}},s:{"0":0,"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0},f:{"0":0},b:{"0":[0,0],"1":[0,0],"2":[0,0],"3":[0,0],"4":[0,0],"5":[0,0]},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"205291807e159d00e11d17a07d7da5087e92cf5c"};var coverage=global[gcv]||(global[gcv]={});if(!coverage[path]||coverage[path].hash!==hash){coverage[path]=coverageData;}var actualCoverage=coverage[path];{// @ts-ignore
cov_qwvsuimxp=function(){return actualCoverage;};}return actualCoverage;}cov_qwvsuimxp();import isSymbol from'../isSymbol.js';/** Used as references for various `Number` constants. */const INFINITY=(cov_qwvsuimxp().s[0]++,1/0);/** Used to convert symbols to primitives and strings. */const symbolToString=(cov_qwvsuimxp().s[1]++,Symbol.prototype.toString);/**
 * The base implementation of `toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */function baseToString(value){cov_qwvsuimxp().f[0]++;cov_qwvsuimxp().s[2]++;// Exit early for strings to avoid a performance hit in some environments.
if(typeof value==='string'){cov_qwvsuimxp().b[0][0]++;cov_qwvsuimxp().s[3]++;return value;}else{cov_qwvsuimxp().b[0][1]++;}cov_qwvsuimxp().s[4]++;if(Array.isArray(value)){cov_qwvsuimxp().b[1][0]++;cov_qwvsuimxp().s[5]++;// Recursively convert values (susceptible to call stack limits).
return`${value.map(baseToString)}`;}else{cov_qwvsuimxp().b[1][1]++;}cov_qwvsuimxp().s[6]++;if(isSymbol(value)){cov_qwvsuimxp().b[2][0]++;cov_qwvsuimxp().s[7]++;return symbolToString?(cov_qwvsuimxp().b[3][0]++,symbolToString.call(value)):(cov_qwvsuimxp().b[3][1]++,'');}else{cov_qwvsuimxp().b[2][1]++;}const result=(cov_qwvsuimxp().s[8]++,`${value}`);cov_qwvsuimxp().s[9]++;return(cov_qwvsuimxp().b[5][0]++,result=='0')&&(cov_qwvsuimxp().b[5][1]++,1/value==-INFINITY)?(cov_qwvsuimxp().b[4][0]++,'-0'):(cov_qwvsuimxp().b[4][1]++,result);}export default baseToString;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJjb3ZfcXd2c3VpbXhwIiwiYWN0dWFsQ292ZXJhZ2UiLCJpc1N5bWJvbCIsIklORklOSVRZIiwicyIsInN5bWJvbFRvU3RyaW5nIiwiU3ltYm9sIiwicHJvdG90eXBlIiwidG9TdHJpbmciLCJiYXNlVG9TdHJpbmciLCJ2YWx1ZSIsImYiLCJiIiwiQXJyYXkiLCJpc0FycmF5IiwibWFwIiwiY2FsbCIsInJlc3VsdCJdLCJzb3VyY2VzIjpbImJhc2VUb1N0cmluZy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgaXNTeW1ib2wgZnJvbSAnLi4vaXNTeW1ib2wuanMnXG5cbi8qKiBVc2VkIGFzIHJlZmVyZW5jZXMgZm9yIHZhcmlvdXMgYE51bWJlcmAgY29uc3RhbnRzLiAqL1xuY29uc3QgSU5GSU5JVFkgPSAxIC8gMFxuXG4vKiogVXNlZCB0byBjb252ZXJ0IHN5bWJvbHMgdG8gcHJpbWl0aXZlcyBhbmQgc3RyaW5ncy4gKi9cbmNvbnN0IHN5bWJvbFRvU3RyaW5nID0gU3ltYm9sLnByb3RvdHlwZS50b1N0cmluZ1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGB0b1N0cmluZ2Agd2hpY2ggZG9lc24ndCBjb252ZXJ0IG51bGxpc2hcbiAqIHZhbHVlcyB0byBlbXB0eSBzdHJpbmdzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBwcm9jZXNzLlxuICogQHJldHVybnMge3N0cmluZ30gUmV0dXJucyB0aGUgc3RyaW5nLlxuICovXG5mdW5jdGlvbiBiYXNlVG9TdHJpbmcodmFsdWUpIHtcbiAgLy8gRXhpdCBlYXJseSBmb3Igc3RyaW5ncyB0byBhdm9pZCBhIHBlcmZvcm1hbmNlIGhpdCBpbiBzb21lIGVudmlyb25tZW50cy5cbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gdmFsdWVcbiAgfVxuICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAvLyBSZWN1cnNpdmVseSBjb252ZXJ0IHZhbHVlcyAoc3VzY2VwdGlibGUgdG8gY2FsbCBzdGFjayBsaW1pdHMpLlxuICAgIHJldHVybiBgJHt2YWx1ZS5tYXAoYmFzZVRvU3RyaW5nKX1gXG4gIH1cbiAgaWYgKGlzU3ltYm9sKHZhbHVlKSkge1xuICAgIHJldHVybiBzeW1ib2xUb1N0cmluZyA/IHN5bWJvbFRvU3RyaW5nLmNhbGwodmFsdWUpIDogJydcbiAgfVxuICBjb25zdCByZXN1bHQgPSBgJHt2YWx1ZX1gXG4gIHJldHVybiAocmVzdWx0ID09ICcwJyAmJiAoMSAvIHZhbHVlKSA9PSAtSU5GSU5JVFkpID8gJy0wJyA6IHJlc3VsdFxufVxuXG5leHBvcnQgZGVmYXVsdCBiYXNlVG9TdHJpbmdcbiJdLCJtYXBwaW5ncyI6ImdvRkFlWTtBQUFBQSxhQUFBLFNBQUFBLENBQUEsU0FBQUMsY0FBQSxXQUFBQSxjQUFBLEVBQUFELGFBQUEsR0FmWixNQUFPLENBQUFFLFFBQVEsS0FBTSxnQkFBZ0IsQ0FFckMseURBQ0EsS0FBTSxDQUFBQyxRQUFRLEVBQUFILGFBQUEsR0FBQUksQ0FBQSxNQUFHLENBQUMsQ0FBRyxDQUFDLEVBRXRCLHlEQUNBLEtBQU0sQ0FBQUMsY0FBYyxFQUFBTCxhQUFBLEdBQUFJLENBQUEsTUFBR0UsTUFBTSxDQUFDQyxTQUFTLENBQUNDLFFBQVEsRUFFaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUNBLFFBQVMsQ0FBQUMsWUFBWUEsQ0FBQ0MsS0FBSyxDQUFFLENBQUFWLGFBQUEsR0FBQVcsQ0FBQSxNQUFBWCxhQUFBLEdBQUFJLENBQUEsTUFDM0I7QUFDQSxHQUFJLE1BQU8sQ0FBQU0sS0FBSyxHQUFLLFFBQVEsQ0FBRSxDQUFBVixhQUFBLEdBQUFZLENBQUEsU0FBQVosYUFBQSxHQUFBSSxDQUFBLE1BQzdCLE1BQU8sQ0FBQU0sS0FBSyxDQUNkLENBQUMsS0FBQVYsYUFBQSxHQUFBWSxDQUFBLFVBQUFaLGFBQUEsR0FBQUksQ0FBQSxNQUNELEdBQUlTLEtBQUssQ0FBQ0MsT0FBTyxDQUFDSixLQUFLLENBQUMsQ0FBRSxDQUFBVixhQUFBLEdBQUFZLENBQUEsU0FBQVosYUFBQSxHQUFBSSxDQUFBLE1BQ3hCO0FBQ0EsTUFBTyxHQUFHTSxLQUFLLENBQUNLLEdBQUcsQ0FBQ04sWUFBWSxDQUFDLEVBQUUsQ0FDckMsQ0FBQyxLQUFBVCxhQUFBLEdBQUFZLENBQUEsVUFBQVosYUFBQSxHQUFBSSxDQUFBLE1BQ0QsR0FBSUYsUUFBUSxDQUFDUSxLQUFLLENBQUMsQ0FBRSxDQUFBVixhQUFBLEdBQUFZLENBQUEsU0FBQVosYUFBQSxHQUFBSSxDQUFBLE1BQ25CLE1BQU8sQ0FBQUMsY0FBYyxFQUFBTCxhQUFBLEdBQUFZLENBQUEsU0FBR1AsY0FBYyxDQUFDVyxJQUFJLENBQUNOLEtBQUssQ0FBQyxHQUFBVixhQUFBLEdBQUFZLENBQUEsU0FBRyxFQUFFLEVBQ3pELENBQUMsS0FBQVosYUFBQSxHQUFBWSxDQUFBLFVBQ0QsS0FBTSxDQUFBSyxNQUFNLEVBQUFqQixhQUFBLEdBQUFJLENBQUEsTUFBRyxHQUFHTSxLQUFLLEVBQUUsRUFBQVYsYUFBQSxHQUFBSSxDQUFBLE1BQ3pCLE1BQVEsQ0FBQUosYUFBQSxHQUFBWSxDQUFBLFNBQUFLLE1BQU0sRUFBSSxHQUFHLElBQUFqQixhQUFBLEdBQUFZLENBQUEsU0FBSyxDQUFDLENBQUdGLEtBQUssRUFBSyxDQUFDUCxRQUFRLEdBQUFILGFBQUEsR0FBQVksQ0FBQSxTQUFJLElBQUksR0FBQVosYUFBQSxHQUFBWSxDQUFBLFNBQUdLLE1BQU0sRUFDcEUsQ0FFQSxjQUFlLENBQUFSLFlBQVkiLCJpZ25vcmVMaXN0IjpbXX0=