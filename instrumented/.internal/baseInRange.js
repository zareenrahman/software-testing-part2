function cov_1xepyfh0q5(){var path="D:\\Msc in DS-Course Materials\\Software Testing\\COMP.SE.200-Part 2\\src\\.internal\\baseInRange.js";var hash="d9a000d5bc7690564a3f744ac9f90263973f349d";var global=new Function("return this")();var gcv="__coverage__";var coverageData={path:"D:\\Msc in DS-Course Materials\\Software Testing\\COMP.SE.200-Part 2\\src\\.internal\\baseInRange.js",statementMap:{"0":{start:{line:11,column:2},end:{line:11,column:72}}},fnMap:{"0":{name:"baseInRange",decl:{start:{line:10,column:9},end:{line:10,column:20}},loc:{start:{line:10,column:41},end:{line:12,column:1}},line:10}},branchMap:{"0":{loc:{start:{line:11,column:9},end:{line:11,column:72}},type:"binary-expr",locations:[{start:{line:11,column:9},end:{line:11,column:39}},{start:{line:11,column:43},end:{line:11,column:72}}],line:11}},s:{"0":0},f:{"0":0},b:{"0":[0,0]},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"d9a000d5bc7690564a3f744ac9f90263973f349d"};var coverage=global[gcv]||(global[gcv]={});if(!coverage[path]||coverage[path].hash!==hash){coverage[path]=coverageData;}var actualCoverage=coverage[path];{// @ts-ignore
cov_1xepyfh0q5=function(){return actualCoverage;};}return actualCoverage;}cov_1xepyfh0q5();/**
 * The base implementation of `inRange` which doesn't coerce arguments.
 *
 * @private
 * @param {number} number The number to check.
 * @param {number} start The start of the range.
 * @param {number} end The end of the range.
 * @returns {boolean} Returns `true` if `number` is in the range, else `false`.
 */function baseInRange(number,start,end){cov_1xepyfh0q5().f[0]++;cov_1xepyfh0q5().s[0]++;return(cov_1xepyfh0q5().b[0][0]++,number>=Math.min(start,end))&&(cov_1xepyfh0q5().b[0][1]++,number<Math.max(start,end));}export default baseInRange;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJjb3ZfMXhlcHlmaDBxNSIsImFjdHVhbENvdmVyYWdlIiwiYmFzZUluUmFuZ2UiLCJudW1iZXIiLCJzdGFydCIsImVuZCIsImYiLCJzIiwiYiIsIk1hdGgiLCJtaW4iLCJtYXgiXSwic291cmNlcyI6WyJiYXNlSW5SYW5nZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBpblJhbmdlYCB3aGljaCBkb2Vzbid0IGNvZXJjZSBhcmd1bWVudHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7bnVtYmVyfSBudW1iZXIgVGhlIG51bWJlciB0byBjaGVjay5cbiAqIEBwYXJhbSB7bnVtYmVyfSBzdGFydCBUaGUgc3RhcnQgb2YgdGhlIHJhbmdlLlxuICogQHBhcmFtIHtudW1iZXJ9IGVuZCBUaGUgZW5kIG9mIHRoZSByYW5nZS5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgbnVtYmVyYCBpcyBpbiB0aGUgcmFuZ2UsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gYmFzZUluUmFuZ2UobnVtYmVyLCBzdGFydCwgZW5kKSB7XG4gIHJldHVybiBudW1iZXIgPj0gTWF0aC5taW4oc3RhcnQsIGVuZCkgJiYgbnVtYmVyIDwgTWF0aC5tYXgoc3RhcnQsIGVuZClcbn1cblxuZXhwb3J0IGRlZmF1bHQgYmFzZUluUmFuZ2VcbiJdLCJtYXBwaW5ncyI6IjBsQ0FlWTtBQUFBQSxjQUFBLFNBQUFBLENBQUEsU0FBQUMsY0FBQSxXQUFBQSxjQUFBLEVBQUFELGNBQUEsR0FmWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FDQSxRQUFTLENBQUFFLFdBQVdBLENBQUNDLE1BQU0sQ0FBRUMsS0FBSyxDQUFFQyxHQUFHLENBQUUsQ0FBQUwsY0FBQSxHQUFBTSxDQUFBLE1BQUFOLGNBQUEsR0FBQU8sQ0FBQSxNQUN2QyxNQUFPLENBQUFQLGNBQUEsR0FBQVEsQ0FBQSxTQUFBTCxNQUFNLEVBQUlNLElBQUksQ0FBQ0MsR0FBRyxDQUFDTixLQUFLLENBQUVDLEdBQUcsQ0FBQyxJQUFBTCxjQUFBLEdBQUFRLENBQUEsU0FBSUwsTUFBTSxDQUFHTSxJQUFJLENBQUNFLEdBQUcsQ0FBQ1AsS0FBSyxDQUFFQyxHQUFHLENBQUMsRUFDeEUsQ0FFQSxjQUFlLENBQUFILFdBQVciLCJpZ25vcmVMaXN0IjpbXX0=