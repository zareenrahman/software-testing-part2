function cov_kp1r0n9p(){var path="D:\\Msc in DS-Course Materials\\Software Testing\\COMP.SE.200-Part 2\\src\\every.js";var hash="a7c3501f0d2548fe17412ef0a695a169a24007d4";var global=new Function("return this")();var gcv="__coverage__";var coverageData={path:"D:\\Msc in DS-Course Materials\\Software Testing\\COMP.SE.200-Part 2\\src\\every.js",statementMap:{"0":{start:{line:23,column:14},end:{line:23,column:16}},"1":{start:{line:24,column:17},end:{line:24,column:49}},"2":{start:{line:26,column:2},end:{line:30,column:3}},"3":{start:{line:27,column:4},end:{line:29,column:5}},"4":{start:{line:28,column:6},end:{line:28,column:18}},"5":{start:{line:31,column:2},end:{line:31,column:13}}},fnMap:{"0":{name:"every",decl:{start:{line:22,column:9},end:{line:22,column:14}},loc:{start:{line:22,column:33},end:{line:32,column:1}},line:22}},branchMap:{"0":{loc:{start:{line:24,column:17},end:{line:24,column:49}},type:"cond-expr",locations:[{start:{line:24,column:33},end:{line:24,column:34}},{start:{line:24,column:37},end:{line:24,column:49}}],line:24},"1":{loc:{start:{line:27,column:4},end:{line:29,column:5}},type:"if",locations:[{start:{line:27,column:4},end:{line:29,column:5}},{start:{line:27,column:4},end:{line:29,column:5}}],line:27}},s:{"0":0,"1":0,"2":0,"3":0,"4":0,"5":0},f:{"0":0},b:{"0":[0,0],"1":[0,0]},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"a7c3501f0d2548fe17412ef0a695a169a24007d4"};var coverage=global[gcv]||(global[gcv]={});if(!coverage[path]||coverage[path].hash!==hash){coverage[path]=coverageData;}var actualCoverage=coverage[path];{// @ts-ignore
cov_kp1r0n9p=function(){return actualCoverage;};}return actualCoverage;}cov_kp1r0n9p();/**
 * Checks if `predicate` returns truthy for **all** elements of `array`.
 * Iteration is stopped once `predicate` returns falsey. The predicate is
 * invoked with three arguments: (value, index, array).
 *
 * **Note:** This method returns `true` for
 * [empty arrays](https://en.wikipedia.org/wiki/Empty_set) because
 * [everything is true](https://en.wikipedia.org/wiki/Vacuous_truth) of
 * elements of empty arrays.
 *
 * @since 5.0.0
 * @category Array
 * @param {Array} array The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if all elements pass the predicate check,
 *  else `false`.
 * @example
 *
 * every([true, 1, null, 'yes'], Boolean)
 * // => false
 */function every(array,predicate){cov_kp1r0n9p().f[0]++;let index=(cov_kp1r0n9p().s[0]++,-1);const length=(cov_kp1r0n9p().s[1]++,array==null?(cov_kp1r0n9p().b[0][0]++,0):(cov_kp1r0n9p().b[0][1]++,array.length));cov_kp1r0n9p().s[2]++;while(++index<length){cov_kp1r0n9p().s[3]++;if(!predicate(array[index],index,array)){cov_kp1r0n9p().b[1][0]++;cov_kp1r0n9p().s[4]++;return false;}else{cov_kp1r0n9p().b[1][1]++;}}cov_kp1r0n9p().s[5]++;return true;}export default every;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJjb3Zfa3AxcjBuOXAiLCJhY3R1YWxDb3ZlcmFnZSIsImV2ZXJ5IiwiYXJyYXkiLCJwcmVkaWNhdGUiLCJmIiwiaW5kZXgiLCJzIiwibGVuZ3RoIiwiYiJdLCJzb3VyY2VzIjpbImV2ZXJ5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ2hlY2tzIGlmIGBwcmVkaWNhdGVgIHJldHVybnMgdHJ1dGh5IGZvciAqKmFsbCoqIGVsZW1lbnRzIG9mIGBhcnJheWAuXG4gKiBJdGVyYXRpb24gaXMgc3RvcHBlZCBvbmNlIGBwcmVkaWNhdGVgIHJldHVybnMgZmFsc2V5LiBUaGUgcHJlZGljYXRlIGlzXG4gKiBpbnZva2VkIHdpdGggdGhyZWUgYXJndW1lbnRzOiAodmFsdWUsIGluZGV4LCBhcnJheSkuXG4gKlxuICogKipOb3RlOioqIFRoaXMgbWV0aG9kIHJldHVybnMgYHRydWVgIGZvclxuICogW2VtcHR5IGFycmF5c10oaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvRW1wdHlfc2V0KSBiZWNhdXNlXG4gKiBbZXZlcnl0aGluZyBpcyB0cnVlXShodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9WYWN1b3VzX3RydXRoKSBvZlxuICogZWxlbWVudHMgb2YgZW1wdHkgYXJyYXlzLlxuICpcbiAqIEBzaW5jZSA1LjAuMFxuICogQGNhdGVnb3J5IEFycmF5XG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gaXRlcmF0ZSBvdmVyLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gcHJlZGljYXRlIFRoZSBmdW5jdGlvbiBpbnZva2VkIHBlciBpdGVyYXRpb24uXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYWxsIGVsZW1lbnRzIHBhc3MgdGhlIHByZWRpY2F0ZSBjaGVjayxcbiAqICBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIGV2ZXJ5KFt0cnVlLCAxLCBudWxsLCAneWVzJ10sIEJvb2xlYW4pXG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBldmVyeShhcnJheSwgcHJlZGljYXRlKSB7XG4gIGxldCBpbmRleCA9IC0xXG4gIGNvbnN0IGxlbmd0aCA9IGFycmF5ID09IG51bGwgPyAwIDogYXJyYXkubGVuZ3RoXG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICBpZiAoIXByZWRpY2F0ZShhcnJheVtpbmRleF0sIGluZGV4LCBhcnJheSkpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cbiAgfVxuICByZXR1cm4gdHJ1ZVxufVxuXG5leHBvcnQgZGVmYXVsdCBldmVyeVxuIl0sIm1hcHBpbmdzIjoieWlEQWVZO0FBQUFBLFlBQUEsU0FBQUEsQ0FBQSxTQUFBQyxjQUFBLFdBQUFBLGNBQUEsRUFBQUQsWUFBQSxHQWZaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUNBLFFBQVMsQ0FBQUUsS0FBS0EsQ0FBQ0MsS0FBSyxDQUFFQyxTQUFTLENBQUUsQ0FBQUosWUFBQSxHQUFBSyxDQUFBLE1BQy9CLEdBQUksQ0FBQUMsS0FBSyxFQUFBTixZQUFBLEdBQUFPLENBQUEsTUFBRyxDQUFDLENBQUMsRUFDZCxLQUFNLENBQUFDLE1BQU0sRUFBQVIsWUFBQSxHQUFBTyxDQUFBLE1BQUdKLEtBQUssRUFBSSxJQUFJLEVBQUFILFlBQUEsR0FBQVMsQ0FBQSxTQUFHLENBQUMsR0FBQVQsWUFBQSxHQUFBUyxDQUFBLFNBQUdOLEtBQUssQ0FBQ0ssTUFBTSxHQUFBUixZQUFBLEdBQUFPLENBQUEsTUFFL0MsTUFBTyxFQUFFRCxLQUFLLENBQUdFLE1BQU0sQ0FBRSxDQUFBUixZQUFBLEdBQUFPLENBQUEsTUFDdkIsR0FBSSxDQUFDSCxTQUFTLENBQUNELEtBQUssQ0FBQ0csS0FBSyxDQUFDLENBQUVBLEtBQUssQ0FBRUgsS0FBSyxDQUFDLENBQUUsQ0FBQUgsWUFBQSxHQUFBUyxDQUFBLFNBQUFULFlBQUEsR0FBQU8sQ0FBQSxNQUMxQyxNQUFPLE1BQUssQ0FDZCxDQUFDLEtBQUFQLFlBQUEsR0FBQVMsQ0FBQSxVQUNILENBQUNULFlBQUEsR0FBQU8sQ0FBQSxNQUNELE1BQU8sS0FBSSxDQUNiLENBRUEsY0FBZSxDQUFBTCxLQUFLIiwiaWdub3JlTGlzdCI6W119