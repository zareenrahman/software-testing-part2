function cov_27e1w0xk6s(){var path="D:\\Msc in DS-Course Materials\\Software Testing\\COMP.SE.200-Part 2\\src\\.internal\\baseFlatten.js";var hash="7d6c7d1dad5476944cf48838dfe9d0b7ed3dea84";var global=new Function("return this")();var gcv="__coverage__";var coverageData={path:"D:\\Msc in DS-Course Materials\\Software Testing\\COMP.SE.200-Part 2\\src\\.internal\\baseFlatten.js",statementMap:{"0":{start:{line:15,column:2},end:{line:15,column:42}},"1":{start:{line:16,column:2},end:{line:16,column:25}},"2":{start:{line:18,column:2},end:{line:20,column:3}},"3":{start:{line:19,column:4},end:{line:19,column:17}},"4":{start:{line:22,column:2},end:{line:33,column:3}},"5":{start:{line:23,column:4},end:{line:32,column:5}},"6":{start:{line:24,column:6},end:{line:29,column:7}},"7":{start:{line:26,column:8},end:{line:26,column:66}},"8":{start:{line:28,column:8},end:{line:28,column:29}},"9":{start:{line:30,column:11},end:{line:32,column:5}},"10":{start:{line:31,column:6},end:{line:31,column:35}},"11":{start:{line:34,column:2},end:{line:34,column:15}}},fnMap:{"0":{name:"baseFlatten",decl:{start:{line:14,column:9},end:{line:14,column:20}},loc:{start:{line:14,column:64},end:{line:35,column:1}},line:14}},branchMap:{"0":{loc:{start:{line:15,column:2},end:{line:15,column:42}},type:"binary-expr",locations:[{start:{line:15,column:2},end:{line:15,column:11}},{start:{line:15,column:16},end:{line:15,column:41}}],line:15},"1":{loc:{start:{line:16,column:2},end:{line:16,column:25}},type:"binary-expr",locations:[{start:{line:16,column:2},end:{line:16,column:8}},{start:{line:16,column:13},end:{line:16,column:24}}],line:16},"2":{loc:{start:{line:18,column:2},end:{line:20,column:3}},type:"if",locations:[{start:{line:18,column:2},end:{line:20,column:3}},{start:{line:18,column:2},end:{line:20,column:3}}],line:18},"3":{loc:{start:{line:23,column:4},end:{line:32,column:5}},type:"if",locations:[{start:{line:23,column:4},end:{line:32,column:5}},{start:{line:23,column:4},end:{line:32,column:5}}],line:23},"4":{loc:{start:{line:23,column:8},end:{line:23,column:37}},type:"binary-expr",locations:[{start:{line:23,column:8},end:{line:23,column:17}},{start:{line:23,column:21},end:{line:23,column:37}}],line:23},"5":{loc:{start:{line:24,column:6},end:{line:29,column:7}},type:"if",locations:[{start:{line:24,column:6},end:{line:29,column:7}},{start:{line:24,column:6},end:{line:29,column:7}}],line:24},"6":{loc:{start:{line:30,column:11},end:{line:32,column:5}},type:"if",locations:[{start:{line:30,column:11},end:{line:32,column:5}},{start:{line:30,column:11},end:{line:32,column:5}}],line:30}},s:{"0":0,"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0},f:{"0":0},b:{"0":[0,0],"1":[0,0],"2":[0,0],"3":[0,0],"4":[0,0],"5":[0,0],"6":[0,0]},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"7d6c7d1dad5476944cf48838dfe9d0b7ed3dea84"};var coverage=global[gcv]||(global[gcv]={});if(!coverage[path]||coverage[path].hash!==hash){coverage[path]=coverageData;}var actualCoverage=coverage[path];{// @ts-ignore
cov_27e1w0xk6s=function(){return actualCoverage;};}return actualCoverage;}cov_27e1w0xk6s();import isFlattenable from'./isFlattenable.js';/**
 * The base implementation of `flatten` with support for restricting flattening.
 *
 * @private
 * @param {Array} array The array to flatten.
 * @param {number} depth The maximum recursion depth.
 * @param {boolean} [predicate=isFlattenable] The function invoked per iteration.
 * @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.
 * @param {Array} [result=[]] The initial result value.
 * @returns {Array} Returns the new flattened array.
 */function baseFlatten(array,depth,predicate,isStrict,result){cov_27e1w0xk6s().f[0]++;cov_27e1w0xk6s().s[0]++;(cov_27e1w0xk6s().b[0][0]++,predicate)||(cov_27e1w0xk6s().b[0][1]++,predicate=isFlattenable);cov_27e1w0xk6s().s[1]++;(cov_27e1w0xk6s().b[1][0]++,result)||(cov_27e1w0xk6s().b[1][1]++,result=[]);cov_27e1w0xk6s().s[2]++;if(array==null){cov_27e1w0xk6s().b[2][0]++;cov_27e1w0xk6s().s[3]++;return result;}else{cov_27e1w0xk6s().b[2][1]++;}cov_27e1w0xk6s().s[4]++;for(const value of array){cov_27e1w0xk6s().s[5]++;if((cov_27e1w0xk6s().b[4][0]++,depth>0)&&(cov_27e1w0xk6s().b[4][1]++,predicate(value))){cov_27e1w0xk6s().b[3][0]++;cov_27e1w0xk6s().s[6]++;if(depth>1){cov_27e1w0xk6s().b[5][0]++;cov_27e1w0xk6s().s[7]++;// Recursively flatten arrays (susceptible to call stack limits).
baseFlatten(value,depth-1,predicate,isStrict,result);}else{cov_27e1w0xk6s().b[5][1]++;cov_27e1w0xk6s().s[8]++;result.push(...value);}}else{cov_27e1w0xk6s().b[3][1]++;cov_27e1w0xk6s().s[9]++;if(!isStrict){cov_27e1w0xk6s().b[6][0]++;cov_27e1w0xk6s().s[10]++;result[result.length]=value;}else{cov_27e1w0xk6s().b[6][1]++;}}}cov_27e1w0xk6s().s[11]++;return result;}export default baseFlatten;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJjb3ZfMjdlMXcweGs2cyIsImFjdHVhbENvdmVyYWdlIiwiaXNGbGF0dGVuYWJsZSIsImJhc2VGbGF0dGVuIiwiYXJyYXkiLCJkZXB0aCIsInByZWRpY2F0ZSIsImlzU3RyaWN0IiwicmVzdWx0IiwiZiIsInMiLCJiIiwidmFsdWUiLCJwdXNoIiwibGVuZ3RoIl0sInNvdXJjZXMiOlsiYmFzZUZsYXR0ZW4uanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGlzRmxhdHRlbmFibGUgZnJvbSAnLi9pc0ZsYXR0ZW5hYmxlLmpzJ1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBmbGF0dGVuYCB3aXRoIHN1cHBvcnQgZm9yIHJlc3RyaWN0aW5nIGZsYXR0ZW5pbmcuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IFRoZSBhcnJheSB0byBmbGF0dGVuLlxuICogQHBhcmFtIHtudW1iZXJ9IGRlcHRoIFRoZSBtYXhpbXVtIHJlY3Vyc2lvbiBkZXB0aC5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW3ByZWRpY2F0ZT1pc0ZsYXR0ZW5hYmxlXSBUaGUgZnVuY3Rpb24gaW52b2tlZCBwZXIgaXRlcmF0aW9uLlxuICogQHBhcmFtIHtib29sZWFufSBbaXNTdHJpY3RdIFJlc3RyaWN0IHRvIHZhbHVlcyB0aGF0IHBhc3MgYHByZWRpY2F0ZWAgY2hlY2tzLlxuICogQHBhcmFtIHtBcnJheX0gW3Jlc3VsdD1bXV0gVGhlIGluaXRpYWwgcmVzdWx0IHZhbHVlLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBuZXcgZmxhdHRlbmVkIGFycmF5LlxuICovXG5mdW5jdGlvbiBiYXNlRmxhdHRlbihhcnJheSwgZGVwdGgsIHByZWRpY2F0ZSwgaXNTdHJpY3QsIHJlc3VsdCkge1xuICBwcmVkaWNhdGUgfHwgKHByZWRpY2F0ZSA9IGlzRmxhdHRlbmFibGUpXG4gIHJlc3VsdCB8fCAocmVzdWx0ID0gW10pXG5cbiAgaWYgKGFycmF5ID09IG51bGwpIHtcbiAgICByZXR1cm4gcmVzdWx0XG4gIH1cblxuICBmb3IgKGNvbnN0IHZhbHVlIG9mIGFycmF5KSB7XG4gICAgaWYgKGRlcHRoID4gMCAmJiBwcmVkaWNhdGUodmFsdWUpKSB7XG4gICAgICBpZiAoZGVwdGggPiAxKSB7XG4gICAgICAgIC8vIFJlY3Vyc2l2ZWx5IGZsYXR0ZW4gYXJyYXlzIChzdXNjZXB0aWJsZSB0byBjYWxsIHN0YWNrIGxpbWl0cykuXG4gICAgICAgIGJhc2VGbGF0dGVuKHZhbHVlLCBkZXB0aCAtIDEsIHByZWRpY2F0ZSwgaXNTdHJpY3QsIHJlc3VsdClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc3VsdC5wdXNoKC4uLnZhbHVlKVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoIWlzU3RyaWN0KSB7XG4gICAgICByZXN1bHRbcmVzdWx0Lmxlbmd0aF0gPSB2YWx1ZVxuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0XG59XG5cbmV4cG9ydCBkZWZhdWx0IGJhc2VGbGF0dGVuXG4iXSwibWFwcGluZ3MiOiJxOEZBZVk7QUFBQUEsY0FBQSxTQUFBQSxDQUFBLFNBQUFDLGNBQUEsV0FBQUEsY0FBQSxFQUFBRCxjQUFBLEdBZlosTUFBTyxDQUFBRSxhQUFhLEtBQU0sb0JBQW9CLENBRTlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FDQSxRQUFTLENBQUFDLFdBQVdBLENBQUNDLEtBQUssQ0FBRUMsS0FBSyxDQUFFQyxTQUFTLENBQUVDLFFBQVEsQ0FBRUMsTUFBTSxDQUFFLENBQUFSLGNBQUEsR0FBQVMsQ0FBQSxNQUFBVCxjQUFBLEdBQUFVLENBQUEsTUFDOUQsQ0FBQVYsY0FBQSxHQUFBVyxDQUFBLFNBQUFMLFNBQVMsSUFBQU4sY0FBQSxHQUFBVyxDQUFBLFNBQUtMLFNBQVMsQ0FBR0osYUFBYSxDQUFDLENBQUFGLGNBQUEsR0FBQVUsQ0FBQSxNQUN4QyxDQUFBVixjQUFBLEdBQUFXLENBQUEsU0FBQUgsTUFBTSxJQUFBUixjQUFBLEdBQUFXLENBQUEsU0FBS0gsTUFBTSxDQUFHLEVBQUUsQ0FBQyxDQUFBUixjQUFBLEdBQUFVLENBQUEsTUFFdkIsR0FBSU4sS0FBSyxFQUFJLElBQUksQ0FBRSxDQUFBSixjQUFBLEdBQUFXLENBQUEsU0FBQVgsY0FBQSxHQUFBVSxDQUFBLE1BQ2pCLE1BQU8sQ0FBQUYsTUFBTSxDQUNmLENBQUMsS0FBQVIsY0FBQSxHQUFBVyxDQUFBLFVBQUFYLGNBQUEsR0FBQVUsQ0FBQSxNQUVELElBQUssS0FBTSxDQUFBRSxLQUFLLEdBQUksQ0FBQVIsS0FBSyxDQUFFLENBQUFKLGNBQUEsR0FBQVUsQ0FBQSxNQUN6QixHQUFJLENBQUFWLGNBQUEsR0FBQVcsQ0FBQSxTQUFBTixLQUFLLENBQUcsQ0FBQyxJQUFBTCxjQUFBLEdBQUFXLENBQUEsU0FBSUwsU0FBUyxDQUFDTSxLQUFLLENBQUMsRUFBRSxDQUFBWixjQUFBLEdBQUFXLENBQUEsU0FBQVgsY0FBQSxHQUFBVSxDQUFBLE1BQ2pDLEdBQUlMLEtBQUssQ0FBRyxDQUFDLENBQUUsQ0FBQUwsY0FBQSxHQUFBVyxDQUFBLFNBQUFYLGNBQUEsR0FBQVUsQ0FBQSxNQUNiO0FBQ0FQLFdBQVcsQ0FBQ1MsS0FBSyxDQUFFUCxLQUFLLENBQUcsQ0FBQyxDQUFFQyxTQUFTLENBQUVDLFFBQVEsQ0FBRUMsTUFBTSxDQUFDLENBQzVELENBQUMsSUFBTSxDQUFBUixjQUFBLEdBQUFXLENBQUEsU0FBQVgsY0FBQSxHQUFBVSxDQUFBLE1BQ0xGLE1BQU0sQ0FBQ0ssSUFBSSxDQUFDLEdBQUdELEtBQUssQ0FBQyxDQUN2QixDQUNGLENBQUMsSUFBTSxDQUFBWixjQUFBLEdBQUFXLENBQUEsU0FBQVgsY0FBQSxHQUFBVSxDQUFBLFNBQUksQ0FBQ0gsUUFBUSxDQUFFLENBQUFQLGNBQUEsR0FBQVcsQ0FBQSxTQUFBWCxjQUFBLEdBQUFVLENBQUEsT0FDcEJGLE1BQU0sQ0FBQ0EsTUFBTSxDQUFDTSxNQUFNLENBQUMsQ0FBR0YsS0FBSyxDQUMvQixDQUFDLEtBQUFaLGNBQUEsR0FBQVcsQ0FBQSxVQUFELENBQ0YsQ0FBQ1gsY0FBQSxHQUFBVSxDQUFBLE9BQ0QsTUFBTyxDQUFBRixNQUFNLENBQ2YsQ0FFQSxjQUFlLENBQUFMLFdBQVciLCJpZ25vcmVMaXN0IjpbXX0=