function cov_2b93aepb74(){var path="D:\\Msc in DS-Course Materials\\Software Testing\\COMP.SE.200-Part 2\\src\\compact.js";var hash="9166798ef0a00a21c6f65230d4ae32880402ad99";var global=new Function("return this")();var gcv="__coverage__";var coverageData={path:"D:\\Msc in DS-Course Materials\\Software Testing\\COMP.SE.200-Part 2\\src\\compact.js",statementMap:{"0":{start:{line:15,column:17},end:{line:15,column:19}},"1":{start:{line:16,column:17},end:{line:16,column:19}},"2":{start:{line:18,column:2},end:{line:22,column:3}},"3":{start:{line:19,column:4},end:{line:21,column:5}},"4":{start:{line:20,column:6},end:{line:20,column:32}},"5":{start:{line:23,column:2},end:{line:23,column:15}}},fnMap:{"0":{name:"compact",decl:{start:{line:14,column:9},end:{line:14,column:16}},loc:{start:{line:14,column:24},end:{line:24,column:1}},line:14}},branchMap:{"0":{loc:{start:{line:19,column:4},end:{line:21,column:5}},type:"if",locations:[{start:{line:19,column:4},end:{line:21,column:5}},{start:{line:19,column:4},end:{line:21,column:5}}],line:19}},s:{"0":0,"1":0,"2":0,"3":0,"4":0,"5":0},f:{"0":0},b:{"0":[0,0]},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"9166798ef0a00a21c6f65230d4ae32880402ad99"};var coverage=global[gcv]||(global[gcv]={});if(!coverage[path]||coverage[path].hash!==hash){coverage[path]=coverageData;}var actualCoverage=coverage[path];{// @ts-ignore
cov_2b93aepb74=function(){return actualCoverage;};}return actualCoverage;}cov_2b93aepb74();/**
 * Creates an array with all falsey values removed. The values `false`, `null`,
 * `0`, `""`, `undefined`, and `NaN` are falsey.
 *
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to compact.
 * @returns {Array} Returns the new array of filtered values.
 * @example
 *
 * compact([0, 1, false, 2, '', 3])
 * // => [1, 2, 3]
 */function compact(array){cov_2b93aepb74().f[0]++;let resIndex=(cov_2b93aepb74().s[0]++,-1);const result=(cov_2b93aepb74().s[1]++,[]);cov_2b93aepb74().s[2]++;for(const value of array){cov_2b93aepb74().s[3]++;if(value){cov_2b93aepb74().b[0][0]++;cov_2b93aepb74().s[4]++;result[resIndex++]=value;}else{cov_2b93aepb74().b[0][1]++;}}cov_2b93aepb74().s[5]++;return result;}export default compact;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJjb3ZfMmI5M2FlcGI3NCIsImFjdHVhbENvdmVyYWdlIiwiY29tcGFjdCIsImFycmF5IiwiZiIsInJlc0luZGV4IiwicyIsInJlc3VsdCIsInZhbHVlIiwiYiJdLCJzb3VyY2VzIjpbImNvbXBhY3QuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDcmVhdGVzIGFuIGFycmF5IHdpdGggYWxsIGZhbHNleSB2YWx1ZXMgcmVtb3ZlZC4gVGhlIHZhbHVlcyBgZmFsc2VgLCBgbnVsbGAsXG4gKiBgMGAsIGBcIlwiYCwgYHVuZGVmaW5lZGAsIGFuZCBgTmFOYCBhcmUgZmFsc2V5LlxuICpcbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IEFycmF5XG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gY29tcGFjdC5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgbmV3IGFycmF5IG9mIGZpbHRlcmVkIHZhbHVlcy5cbiAqIEBleGFtcGxlXG4gKlxuICogY29tcGFjdChbMCwgMSwgZmFsc2UsIDIsICcnLCAzXSlcbiAqIC8vID0+IFsxLCAyLCAzXVxuICovXG5mdW5jdGlvbiBjb21wYWN0KGFycmF5KSB7XG4gIGxldCByZXNJbmRleCA9IC0xXG4gIGNvbnN0IHJlc3VsdCA9IFtdXG5cbiAgZm9yIChjb25zdCB2YWx1ZSBvZiBhcnJheSkge1xuICAgIGlmICh2YWx1ZSkge1xuICAgICAgcmVzdWx0W3Jlc0luZGV4KytdID0gdmFsdWVcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdFxufVxuXG5leHBvcnQgZGVmYXVsdCBjb21wYWN0XG4iXSwibWFwcGluZ3MiOiI0MUNBZVk7QUFBQUEsY0FBQSxTQUFBQSxDQUFBLFNBQUFDLGNBQUEsV0FBQUEsY0FBQSxFQUFBRCxjQUFBLEdBZlo7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FDQSxRQUFTLENBQUFFLE9BQU9BLENBQUNDLEtBQUssQ0FBRSxDQUFBSCxjQUFBLEdBQUFJLENBQUEsTUFDdEIsR0FBSSxDQUFBQyxRQUFRLEVBQUFMLGNBQUEsR0FBQU0sQ0FBQSxNQUFHLENBQUMsQ0FBQyxFQUNqQixLQUFNLENBQUFDLE1BQU0sRUFBQVAsY0FBQSxHQUFBTSxDQUFBLE1BQUcsRUFBRSxFQUFBTixjQUFBLEdBQUFNLENBQUEsTUFFakIsSUFBSyxLQUFNLENBQUFFLEtBQUssR0FBSSxDQUFBTCxLQUFLLENBQUUsQ0FBQUgsY0FBQSxHQUFBTSxDQUFBLE1BQ3pCLEdBQUlFLEtBQUssQ0FBRSxDQUFBUixjQUFBLEdBQUFTLENBQUEsU0FBQVQsY0FBQSxHQUFBTSxDQUFBLE1BQ1RDLE1BQU0sQ0FBQ0YsUUFBUSxFQUFFLENBQUMsQ0FBR0csS0FBSyxDQUM1QixDQUFDLEtBQUFSLGNBQUEsR0FBQVMsQ0FBQSxVQUNILENBQUNULGNBQUEsR0FBQU0sQ0FBQSxNQUNELE1BQU8sQ0FBQUMsTUFBTSxDQUNmLENBRUEsY0FBZSxDQUFBTCxPQUFPIiwiaWdub3JlTGlzdCI6W119