function cov_rshgfpu7z(){var path="D:\\Msc in DS-Course Materials\\Software Testing\\COMP.SE.200-Part 2\\src\\.internal\\baseXor.js";var hash="746a4ad5dc9ba60268194106243761760c5ff2cc";var global=new Function("return this")();var gcv="__coverage__";var coverageData={path:"D:\\Msc in DS-Course Materials\\Software Testing\\COMP.SE.200-Part 2\\src\\.internal\\baseXor.js",statementMap:{"0":{start:{line:16,column:17},end:{line:16,column:30}},"1":{start:{line:17,column:2},end:{line:19,column:3}},"2":{start:{line:18,column:4},end:{line:18,column:44}},"3":{start:{line:20,column:14},end:{line:20,column:16}},"4":{start:{line:21,column:17},end:{line:21,column:34}},"5":{start:{line:23,column:2},end:{line:32,column:3}},"6":{start:{line:24,column:18},end:{line:24,column:31}},"7":{start:{line:25,column:19},end:{line:25,column:21}},"8":{start:{line:27,column:4},end:{line:31,column:5}},"9":{start:{line:28,column:6},end:{line:30,column:7}},"10":{start:{line:29,column:8},end:{line:29,column:102}},"11":{start:{line:33,column:2},end:{line:33,column:63}}},fnMap:{"0":{name:"baseXor",decl:{start:{line:15,column:9},end:{line:15,column:16}},loc:{start:{line:15,column:47},end:{line:34,column:1}},line:15}},branchMap:{"0":{loc:{start:{line:17,column:2},end:{line:19,column:3}},type:"if",locations:[{start:{line:17,column:2},end:{line:19,column:3}},{start:{line:17,column:2},end:{line:19,column:3}}],line:17},"1":{loc:{start:{line:18,column:11},end:{line:18,column:44}},type:"cond-expr",locations:[{start:{line:18,column:20},end:{line:18,column:39}},{start:{line:18,column:42},end:{line:18,column:44}}],line:18},"2":{loc:{start:{line:28,column:6},end:{line:30,column:7}},type:"if",locations:[{start:{line:28,column:6},end:{line:30,column:7}},{start:{line:28,column:6},end:{line:30,column:7}}],line:28},"3":{loc:{start:{line:29,column:39},end:{line:29,column:61}},type:"binary-expr",locations:[{start:{line:29,column:39},end:{line:29,column:52}},{start:{line:29,column:56},end:{line:29,column:61}}],line:29}},s:{"0":0,"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0},f:{"0":0},b:{"0":[0,0],"1":[0,0],"2":[0,0],"3":[0,0]},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"746a4ad5dc9ba60268194106243761760c5ff2cc"};var coverage=global[gcv]||(global[gcv]={});if(!coverage[path]||coverage[path].hash!==hash){coverage[path]=coverageData;}var actualCoverage=coverage[path];{// @ts-ignore
cov_rshgfpu7z=function(){return actualCoverage;};}return actualCoverage;}cov_rshgfpu7z();import baseDifference from'./baseDifference.js';import baseFlatten from'./baseFlatten.js';import baseUniq from'./baseUniq.js';/**
 * The base implementation of methods like `xor` which accepts an array of
 * arrays to inspect.
 *
 * @private
 * @param {Array} arrays The arrays to inspect.
 * @param {Function} [iteratee] The iteratee invoked per element.
 * @param {Function} [comparator] The comparator invoked per element.
 * @returns {Array} Returns the new array of values.
 */function baseXor(arrays,iteratee,comparator){cov_rshgfpu7z().f[0]++;const length=(cov_rshgfpu7z().s[0]++,arrays.length);cov_rshgfpu7z().s[1]++;if(length<2){cov_rshgfpu7z().b[0][0]++;cov_rshgfpu7z().s[2]++;return length?(cov_rshgfpu7z().b[1][0]++,baseUniq(arrays[0])):(cov_rshgfpu7z().b[1][1]++,[]);}else{cov_rshgfpu7z().b[0][1]++;}let index=(cov_rshgfpu7z().s[3]++,-1);const result=(cov_rshgfpu7z().s[4]++,new Array(length));cov_rshgfpu7z().s[5]++;while(++index<length){const array=(cov_rshgfpu7z().s[6]++,arrays[index]);let othIndex=(cov_rshgfpu7z().s[7]++,-1);cov_rshgfpu7z().s[8]++;while(++othIndex<length){cov_rshgfpu7z().s[9]++;if(othIndex!=index){cov_rshgfpu7z().b[2][0]++;cov_rshgfpu7z().s[10]++;result[index]=baseDifference((cov_rshgfpu7z().b[3][0]++,result[index])||(cov_rshgfpu7z().b[3][1]++,array),arrays[othIndex],iteratee,comparator);}else{cov_rshgfpu7z().b[2][1]++;}}}cov_rshgfpu7z().s[11]++;return baseUniq(baseFlatten(result,1),iteratee,comparator);}export default baseXor;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJjb3ZfcnNoZ2ZwdTd6IiwiYWN0dWFsQ292ZXJhZ2UiLCJiYXNlRGlmZmVyZW5jZSIsImJhc2VGbGF0dGVuIiwiYmFzZVVuaXEiLCJiYXNlWG9yIiwiYXJyYXlzIiwiaXRlcmF0ZWUiLCJjb21wYXJhdG9yIiwiZiIsImxlbmd0aCIsInMiLCJiIiwiaW5kZXgiLCJyZXN1bHQiLCJBcnJheSIsImFycmF5Iiwib3RoSW5kZXgiXSwic291cmNlcyI6WyJiYXNlWG9yLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBiYXNlRGlmZmVyZW5jZSBmcm9tICcuL2Jhc2VEaWZmZXJlbmNlLmpzJ1xuaW1wb3J0IGJhc2VGbGF0dGVuIGZyb20gJy4vYmFzZUZsYXR0ZW4uanMnXG5pbXBvcnQgYmFzZVVuaXEgZnJvbSAnLi9iYXNlVW5pcS5qcydcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBtZXRob2RzIGxpa2UgYHhvcmAgd2hpY2ggYWNjZXB0cyBhbiBhcnJheSBvZlxuICogYXJyYXlzIHRvIGluc3BlY3QuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5cyBUaGUgYXJyYXlzIHRvIGluc3BlY3QuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbaXRlcmF0ZWVdIFRoZSBpdGVyYXRlZSBpbnZva2VkIHBlciBlbGVtZW50LlxuICogQHBhcmFtIHtGdW5jdGlvbn0gW2NvbXBhcmF0b3JdIFRoZSBjb21wYXJhdG9yIGludm9rZWQgcGVyIGVsZW1lbnQuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIG5ldyBhcnJheSBvZiB2YWx1ZXMuXG4gKi9cbmZ1bmN0aW9uIGJhc2VYb3IoYXJyYXlzLCBpdGVyYXRlZSwgY29tcGFyYXRvcikge1xuICBjb25zdCBsZW5ndGggPSBhcnJheXMubGVuZ3RoXG4gIGlmIChsZW5ndGggPCAyKSB7XG4gICAgcmV0dXJuIGxlbmd0aCA/IGJhc2VVbmlxKGFycmF5c1swXSkgOiBbXVxuICB9XG4gIGxldCBpbmRleCA9IC0xXG4gIGNvbnN0IHJlc3VsdCA9IG5ldyBBcnJheShsZW5ndGgpXG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICBjb25zdCBhcnJheSA9IGFycmF5c1tpbmRleF1cbiAgICBsZXQgb3RoSW5kZXggPSAtMVxuXG4gICAgd2hpbGUgKCsrb3RoSW5kZXggPCBsZW5ndGgpIHtcbiAgICAgIGlmIChvdGhJbmRleCAhPSBpbmRleCkge1xuICAgICAgICByZXN1bHRbaW5kZXhdID0gYmFzZURpZmZlcmVuY2UocmVzdWx0W2luZGV4XSB8fCBhcnJheSwgYXJyYXlzW290aEluZGV4XSwgaXRlcmF0ZWUsIGNvbXBhcmF0b3IpXG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBiYXNlVW5pcShiYXNlRmxhdHRlbihyZXN1bHQsIDEpLCBpdGVyYXRlZSwgY29tcGFyYXRvcilcbn1cblxuZXhwb3J0IGRlZmF1bHQgYmFzZVhvclxuIl0sIm1hcHBpbmdzIjoieTFFQWVZO0FBQUFBLGFBQUEsU0FBQUEsQ0FBQSxTQUFBQyxjQUFBLFdBQUFBLGNBQUEsRUFBQUQsYUFBQSxHQWZaLE1BQU8sQ0FBQUUsY0FBYyxLQUFNLHFCQUFxQixDQUNoRCxNQUFPLENBQUFDLFdBQVcsS0FBTSxrQkFBa0IsQ0FDMUMsTUFBTyxDQUFBQyxRQUFRLEtBQU0sZUFBZSxDQUVwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUNBLFFBQVMsQ0FBQUMsT0FBT0EsQ0FBQ0MsTUFBTSxDQUFFQyxRQUFRLENBQUVDLFVBQVUsQ0FBRSxDQUFBUixhQUFBLEdBQUFTLENBQUEsTUFDN0MsS0FBTSxDQUFBQyxNQUFNLEVBQUFWLGFBQUEsR0FBQVcsQ0FBQSxNQUFHTCxNQUFNLENBQUNJLE1BQU0sRUFBQVYsYUFBQSxHQUFBVyxDQUFBLE1BQzVCLEdBQUlELE1BQU0sQ0FBRyxDQUFDLENBQUUsQ0FBQVYsYUFBQSxHQUFBWSxDQUFBLFNBQUFaLGFBQUEsR0FBQVcsQ0FBQSxNQUNkLE1BQU8sQ0FBQUQsTUFBTSxFQUFBVixhQUFBLEdBQUFZLENBQUEsU0FBR1IsUUFBUSxDQUFDRSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBQU4sYUFBQSxHQUFBWSxDQUFBLFNBQUcsRUFBRSxFQUMxQyxDQUFDLEtBQUFaLGFBQUEsR0FBQVksQ0FBQSxVQUNELEdBQUksQ0FBQUMsS0FBSyxFQUFBYixhQUFBLEdBQUFXLENBQUEsTUFBRyxDQUFDLENBQUMsRUFDZCxLQUFNLENBQUFHLE1BQU0sRUFBQWQsYUFBQSxHQUFBVyxDQUFBLE1BQUcsR0FBSSxDQUFBSSxLQUFLLENBQUNMLE1BQU0sQ0FBQyxFQUFBVixhQUFBLEdBQUFXLENBQUEsTUFFaEMsTUFBTyxFQUFFRSxLQUFLLENBQUdILE1BQU0sQ0FBRSxDQUN2QixLQUFNLENBQUFNLEtBQUssRUFBQWhCLGFBQUEsR0FBQVcsQ0FBQSxNQUFHTCxNQUFNLENBQUNPLEtBQUssQ0FBQyxFQUMzQixHQUFJLENBQUFJLFFBQVEsRUFBQWpCLGFBQUEsR0FBQVcsQ0FBQSxNQUFHLENBQUMsQ0FBQyxFQUFBWCxhQUFBLEdBQUFXLENBQUEsTUFFakIsTUFBTyxFQUFFTSxRQUFRLENBQUdQLE1BQU0sQ0FBRSxDQUFBVixhQUFBLEdBQUFXLENBQUEsTUFDMUIsR0FBSU0sUUFBUSxFQUFJSixLQUFLLENBQUUsQ0FBQWIsYUFBQSxHQUFBWSxDQUFBLFNBQUFaLGFBQUEsR0FBQVcsQ0FBQSxPQUNyQkcsTUFBTSxDQUFDRCxLQUFLLENBQUMsQ0FBR1gsY0FBYyxDQUFDLENBQUFGLGFBQUEsR0FBQVksQ0FBQSxTQUFBRSxNQUFNLENBQUNELEtBQUssQ0FBQyxJQUFBYixhQUFBLEdBQUFZLENBQUEsU0FBSUksS0FBSyxFQUFFVixNQUFNLENBQUNXLFFBQVEsQ0FBQyxDQUFFVixRQUFRLENBQUVDLFVBQVUsQ0FBQyxDQUNoRyxDQUFDLEtBQUFSLGFBQUEsR0FBQVksQ0FBQSxVQUNILENBQ0YsQ0FBQ1osYUFBQSxHQUFBVyxDQUFBLE9BQ0QsTUFBTyxDQUFBUCxRQUFRLENBQUNELFdBQVcsQ0FBQ1csTUFBTSxDQUFFLENBQUMsQ0FBQyxDQUFFUCxRQUFRLENBQUVDLFVBQVUsQ0FBQyxDQUMvRCxDQUVBLGNBQWUsQ0FBQUgsT0FBTyIsImlnbm9yZUxpc3QiOltdfQ==