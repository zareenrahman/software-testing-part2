function cov_1f0pqu1lgd(){var path="D:\\Msc in DS-Course Materials\\Software Testing\\COMP.SE.200-Part 2\\src\\.internal\\baseIsEqual.js";var hash="a8e6bbc744637603843718361c64b0de86de66e2";var global=new Function("return this")();var gcv="__coverage__";var coverageData={path:"D:\\Msc in DS-Course Materials\\Software Testing\\COMP.SE.200-Part 2\\src\\.internal\\baseIsEqual.js",statementMap:{"0":{start:{line:19,column:2},end:{line:21,column:3}},"1":{start:{line:20,column:4},end:{line:20,column:15}},"2":{start:{line:22,column:2},end:{line:24,column:3}},"3":{start:{line:23,column:4},end:{line:23,column:45}},"4":{start:{line:25,column:2},end:{line:25,column:79}}},fnMap:{"0":{name:"baseIsEqual",decl:{start:{line:18,column:9},end:{line:18,column:20}},loc:{start:{line:18,column:63},end:{line:26,column:1}},line:18}},branchMap:{"0":{loc:{start:{line:19,column:2},end:{line:21,column:3}},type:"if",locations:[{start:{line:19,column:2},end:{line:21,column:3}},{start:{line:19,column:2},end:{line:21,column:3}}],line:19},"1":{loc:{start:{line:22,column:2},end:{line:24,column:3}},type:"if",locations:[{start:{line:22,column:2},end:{line:24,column:3}},{start:{line:22,column:2},end:{line:24,column:3}}],line:22},"2":{loc:{start:{line:22,column:6},end:{line:22,column:86}},type:"binary-expr",locations:[{start:{line:22,column:6},end:{line:22,column:19}},{start:{line:22,column:23},end:{line:22,column:36}},{start:{line:22,column:41},end:{line:22,column:61}},{start:{line:22,column:65},end:{line:22,column:85}}],line:22},"3":{loc:{start:{line:23,column:11},end:{line:23,column:45}},type:"binary-expr",locations:[{start:{line:23,column:11},end:{line:23,column:26}},{start:{line:23,column:30},end:{line:23,column:45}}],line:23}},s:{"0":0,"1":0,"2":0,"3":0,"4":0},f:{"0":0},b:{"0":[0,0],"1":[0,0],"2":[0,0,0,0],"3":[0,0]},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"a8e6bbc744637603843718361c64b0de86de66e2"};var coverage=global[gcv]||(global[gcv]={});if(!coverage[path]||coverage[path].hash!==hash){coverage[path]=coverageData;}var actualCoverage=coverage[path];{// @ts-ignore
cov_1f0pqu1lgd=function(){return actualCoverage;};}return actualCoverage;}cov_1f0pqu1lgd();import baseIsEqualDeep from'./baseIsEqualDeep.js';import isObjectLike from'../isObjectLike.js';/**
 * The base implementation of `isEqual` which supports partial comparisons
 * and tracks traversed objects.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Unordered comparison
 *  2 - Partial comparison
 * @param {Function} [customizer] The function to customize comparisons.
 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 */function baseIsEqual(value,other,bitmask,customizer,stack){cov_1f0pqu1lgd().f[0]++;cov_1f0pqu1lgd().s[0]++;if(value===other){cov_1f0pqu1lgd().b[0][0]++;cov_1f0pqu1lgd().s[1]++;return true;}else{cov_1f0pqu1lgd().b[0][1]++;}cov_1f0pqu1lgd().s[2]++;if((cov_1f0pqu1lgd().b[2][0]++,value==null)||(cov_1f0pqu1lgd().b[2][1]++,other==null)||(cov_1f0pqu1lgd().b[2][2]++,!isObjectLike(value))&&(cov_1f0pqu1lgd().b[2][3]++,!isObjectLike(other))){cov_1f0pqu1lgd().b[1][0]++;cov_1f0pqu1lgd().s[3]++;return(cov_1f0pqu1lgd().b[3][0]++,value!==value)&&(cov_1f0pqu1lgd().b[3][1]++,other!==other);}else{cov_1f0pqu1lgd().b[1][1]++;}cov_1f0pqu1lgd().s[4]++;return baseIsEqualDeep(value,other,bitmask,customizer,baseIsEqual,stack);}export default baseIsEqual;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJjb3ZfMWYwcHF1MWxnZCIsImFjdHVhbENvdmVyYWdlIiwiYmFzZUlzRXF1YWxEZWVwIiwiaXNPYmplY3RMaWtlIiwiYmFzZUlzRXF1YWwiLCJ2YWx1ZSIsIm90aGVyIiwiYml0bWFzayIsImN1c3RvbWl6ZXIiLCJzdGFjayIsImYiLCJzIiwiYiJdLCJzb3VyY2VzIjpbImJhc2VJc0VxdWFsLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBiYXNlSXNFcXVhbERlZXAgZnJvbSAnLi9iYXNlSXNFcXVhbERlZXAuanMnXG5pbXBvcnQgaXNPYmplY3RMaWtlIGZyb20gJy4uL2lzT2JqZWN0TGlrZS5qcydcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgaXNFcXVhbGAgd2hpY2ggc3VwcG9ydHMgcGFydGlhbCBjb21wYXJpc29uc1xuICogYW5kIHRyYWNrcyB0cmF2ZXJzZWQgb2JqZWN0cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY29tcGFyZS5cbiAqIEBwYXJhbSB7Kn0gb3RoZXIgVGhlIG90aGVyIHZhbHVlIHRvIGNvbXBhcmUuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IGJpdG1hc2sgVGhlIGJpdG1hc2sgZmxhZ3MuXG4gKiAgMSAtIFVub3JkZXJlZCBjb21wYXJpc29uXG4gKiAgMiAtIFBhcnRpYWwgY29tcGFyaXNvblxuICogQHBhcmFtIHtGdW5jdGlvbn0gW2N1c3RvbWl6ZXJdIFRoZSBmdW5jdGlvbiB0byBjdXN0b21pemUgY29tcGFyaXNvbnMuXG4gKiBAcGFyYW0ge09iamVjdH0gW3N0YWNrXSBUcmFja3MgdHJhdmVyc2VkIGB2YWx1ZWAgYW5kIGBvdGhlcmAgb2JqZWN0cy5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgdmFsdWVzIGFyZSBlcXVpdmFsZW50LCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGJhc2VJc0VxdWFsKHZhbHVlLCBvdGhlciwgYml0bWFzaywgY3VzdG9taXplciwgc3RhY2spIHtcbiAgaWYgKHZhbHVlID09PSBvdGhlcikge1xuICAgIHJldHVybiB0cnVlXG4gIH1cbiAgaWYgKHZhbHVlID09IG51bGwgfHwgb3RoZXIgPT0gbnVsbCB8fCAoIWlzT2JqZWN0TGlrZSh2YWx1ZSkgJiYgIWlzT2JqZWN0TGlrZShvdGhlcikpKSB7XG4gICAgcmV0dXJuIHZhbHVlICE9PSB2YWx1ZSAmJiBvdGhlciAhPT0gb3RoZXJcbiAgfVxuICByZXR1cm4gYmFzZUlzRXF1YWxEZWVwKHZhbHVlLCBvdGhlciwgYml0bWFzaywgY3VzdG9taXplciwgYmFzZUlzRXF1YWwsIHN0YWNrKVxufVxuXG5leHBvcnQgZGVmYXVsdCBiYXNlSXNFcXVhbFxuIl0sIm1hcHBpbmdzIjoiK2hFQWVZO0FBQUFBLGNBQUEsU0FBQUEsQ0FBQSxTQUFBQyxjQUFBLFdBQUFBLGNBQUEsRUFBQUQsY0FBQSxHQWZaLE1BQU8sQ0FBQUUsZUFBZSxLQUFNLHNCQUFzQixDQUNsRCxNQUFPLENBQUFDLFlBQVksS0FBTSxvQkFBb0IsQ0FFN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUNBLFFBQVMsQ0FBQUMsV0FBV0EsQ0FBQ0MsS0FBSyxDQUFFQyxLQUFLLENBQUVDLE9BQU8sQ0FBRUMsVUFBVSxDQUFFQyxLQUFLLENBQUUsQ0FBQVQsY0FBQSxHQUFBVSxDQUFBLE1BQUFWLGNBQUEsR0FBQVcsQ0FBQSxNQUM3RCxHQUFJTixLQUFLLEdBQUtDLEtBQUssQ0FBRSxDQUFBTixjQUFBLEdBQUFZLENBQUEsU0FBQVosY0FBQSxHQUFBVyxDQUFBLE1BQ25CLE1BQU8sS0FBSSxDQUNiLENBQUMsS0FBQVgsY0FBQSxHQUFBWSxDQUFBLFVBQUFaLGNBQUEsR0FBQVcsQ0FBQSxNQUNELEdBQUksQ0FBQVgsY0FBQSxHQUFBWSxDQUFBLFNBQUFQLEtBQUssRUFBSSxJQUFJLElBQUFMLGNBQUEsR0FBQVksQ0FBQSxTQUFJTixLQUFLLEVBQUksSUFBSSxHQUFLLENBQUFOLGNBQUEsR0FBQVksQ0FBQSxVQUFDVCxZQUFZLENBQUNFLEtBQUssQ0FBQyxJQUFBTCxjQUFBLEdBQUFZLENBQUEsU0FBSSxDQUFDVCxZQUFZLENBQUNHLEtBQUssQ0FBQyxDQUFDLENBQUUsQ0FBQU4sY0FBQSxHQUFBWSxDQUFBLFNBQUFaLGNBQUEsR0FBQVcsQ0FBQSxNQUNwRixNQUFPLENBQUFYLGNBQUEsR0FBQVksQ0FBQSxTQUFBUCxLQUFLLEdBQUtBLEtBQUssSUFBQUwsY0FBQSxHQUFBWSxDQUFBLFNBQUlOLEtBQUssR0FBS0EsS0FBSyxFQUMzQyxDQUFDLEtBQUFOLGNBQUEsR0FBQVksQ0FBQSxVQUFBWixjQUFBLEdBQUFXLENBQUEsTUFDRCxNQUFPLENBQUFULGVBQWUsQ0FBQ0csS0FBSyxDQUFFQyxLQUFLLENBQUVDLE9BQU8sQ0FBRUMsVUFBVSxDQUFFSixXQUFXLENBQUVLLEtBQUssQ0FBQyxDQUMvRSxDQUVBLGNBQWUsQ0FBQUwsV0FBVyIsImlnbm9yZUxpc3QiOltdfQ==