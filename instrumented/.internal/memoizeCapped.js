function cov_1h3p1x33gp(){var path="D:\\Msc in DS-Course Materials\\Software Testing\\COMP.SE.200-Part 2\\src\\.internal\\memoizeCapped.js";var hash="3581342186954eaef5a54fbb29d1cf02a7c2fdd1";var global=new Function("return this")();var gcv="__coverage__";var coverageData={path:"D:\\Msc in DS-Course Materials\\Software Testing\\COMP.SE.200-Part 2\\src\\.internal\\memoizeCapped.js",statementMap:{"0":{start:{line:4,column:25},end:{line:4,column:28}},"1":{start:{line:15,column:17},end:{line:21,column:4}},"2":{start:{line:16,column:22},end:{line:16,column:28}},"3":{start:{line:17,column:4},end:{line:19,column:5}},"4":{start:{line:18,column:6},end:{line:18,column:19}},"5":{start:{line:20,column:4},end:{line:20,column:14}},"6":{start:{line:23,column:2},end:{line:23,column:15}}},fnMap:{"0":{name:"memoizeCapped",decl:{start:{line:14,column:9},end:{line:14,column:22}},loc:{start:{line:14,column:29},end:{line:24,column:1}},line:14},"1":{name:"(anonymous_1)",decl:{start:{line:15,column:31},end:{line:15,column:32}},loc:{start:{line:15,column:40},end:{line:21,column:3}},line:15}},branchMap:{"0":{loc:{start:{line:17,column:4},end:{line:19,column:5}},type:"if",locations:[{start:{line:17,column:4},end:{line:19,column:5}},{start:{line:17,column:4},end:{line:19,column:5}}],line:17}},s:{"0":0,"1":0,"2":0,"3":0,"4":0,"5":0,"6":0},f:{"0":0,"1":0},b:{"0":[0,0]},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"3581342186954eaef5a54fbb29d1cf02a7c2fdd1"};var coverage=global[gcv]||(global[gcv]={});if(!coverage[path]||coverage[path].hash!==hash){coverage[path]=coverageData;}var actualCoverage=coverage[path];{// @ts-ignore
cov_1h3p1x33gp=function(){return actualCoverage;};}return actualCoverage;}cov_1h3p1x33gp();import memoize from'../memoize.js';/** Used as the maximum memoize cache size. */const MAX_MEMOIZE_SIZE=(cov_1h3p1x33gp().s[0]++,500);/**
 * A specialized version of `memoize` which clears the memoized function's
 * cache when it exceeds `MAX_MEMOIZE_SIZE`.
 *
 * @private
 * @param {Function} func The function to have its output memoized.
 * @returns {Function} Returns the new memoized function.
 */function memoizeCapped(func){cov_1h3p1x33gp().f[0]++;const result=(cov_1h3p1x33gp().s[1]++,memoize(func,key=>{cov_1h3p1x33gp().f[1]++;const{cache}=(cov_1h3p1x33gp().s[2]++,result);cov_1h3p1x33gp().s[3]++;if(cache.size===MAX_MEMOIZE_SIZE){cov_1h3p1x33gp().b[0][0]++;cov_1h3p1x33gp().s[4]++;cache.clear();}else{cov_1h3p1x33gp().b[0][1]++;}cov_1h3p1x33gp().s[5]++;return key;}));cov_1h3p1x33gp().s[6]++;return result;}export default memoizeCapped;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJjb3ZfMWgzcDF4MzNncCIsImFjdHVhbENvdmVyYWdlIiwibWVtb2l6ZSIsIk1BWF9NRU1PSVpFX1NJWkUiLCJzIiwibWVtb2l6ZUNhcHBlZCIsImZ1bmMiLCJmIiwicmVzdWx0Iiwia2V5IiwiY2FjaGUiLCJzaXplIiwiYiIsImNsZWFyIl0sInNvdXJjZXMiOlsibWVtb2l6ZUNhcHBlZC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbWVtb2l6ZSBmcm9tICcuLi9tZW1vaXplLmpzJ1xuXG4vKiogVXNlZCBhcyB0aGUgbWF4aW11bSBtZW1vaXplIGNhY2hlIHNpemUuICovXG5jb25zdCBNQVhfTUVNT0laRV9TSVpFID0gNTAwXG5cbi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBtZW1vaXplYCB3aGljaCBjbGVhcnMgdGhlIG1lbW9pemVkIGZ1bmN0aW9uJ3NcbiAqIGNhY2hlIHdoZW4gaXQgZXhjZWVkcyBgTUFYX01FTU9JWkVfU0laRWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGhhdmUgaXRzIG91dHB1dCBtZW1vaXplZC5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IG1lbW9pemVkIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBtZW1vaXplQ2FwcGVkKGZ1bmMpIHtcbiAgY29uc3QgcmVzdWx0ID0gbWVtb2l6ZShmdW5jLCAoa2V5KSA9PiB7XG4gICAgY29uc3QgeyBjYWNoZSB9ID0gcmVzdWx0XG4gICAgaWYgKGNhY2hlLnNpemUgPT09IE1BWF9NRU1PSVpFX1NJWkUpIHtcbiAgICAgIGNhY2hlLmNsZWFyKClcbiAgICB9XG4gICAgcmV0dXJuIGtleVxuICB9KVxuXG4gIHJldHVybiByZXN1bHRcbn1cblxuZXhwb3J0IGRlZmF1bHQgbWVtb2l6ZUNhcHBlZFxuIl0sIm1hcHBpbmdzIjoieWxEQWVZO0FBQUFBLGNBQUEsU0FBQUEsQ0FBQSxTQUFBQyxjQUFBLFdBQUFBLGNBQUEsRUFBQUQsY0FBQSxHQWZaLE1BQU8sQ0FBQUUsT0FBTyxLQUFNLGVBQWUsQ0FFbkMsOENBQ0EsS0FBTSxDQUFBQyxnQkFBZ0IsRUFBQUgsY0FBQSxHQUFBSSxDQUFBLE1BQUcsR0FBRyxFQUU1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQ0EsUUFBUyxDQUFBQyxhQUFhQSxDQUFDQyxJQUFJLENBQUUsQ0FBQU4sY0FBQSxHQUFBTyxDQUFBLE1BQzNCLEtBQU0sQ0FBQUMsTUFBTSxFQUFBUixjQUFBLEdBQUFJLENBQUEsTUFBR0YsT0FBTyxDQUFDSSxJQUFJLENBQUdHLEdBQUcsRUFBSyxDQUFBVCxjQUFBLEdBQUFPLENBQUEsTUFDcEMsS0FBTSxDQUFFRyxLQUFNLENBQUMsRUFBQVYsY0FBQSxHQUFBSSxDQUFBLE1BQUdJLE1BQU0sRUFBQVIsY0FBQSxHQUFBSSxDQUFBLE1BQ3hCLEdBQUlNLEtBQUssQ0FBQ0MsSUFBSSxHQUFLUixnQkFBZ0IsQ0FBRSxDQUFBSCxjQUFBLEdBQUFZLENBQUEsU0FBQVosY0FBQSxHQUFBSSxDQUFBLE1BQ25DTSxLQUFLLENBQUNHLEtBQUssQ0FBQyxDQUFDLENBQ2YsQ0FBQyxLQUFBYixjQUFBLEdBQUFZLENBQUEsVUFBQVosY0FBQSxHQUFBSSxDQUFBLE1BQ0QsTUFBTyxDQUFBSyxHQUFHLENBQ1osQ0FBQyxDQUFDLEVBQUFULGNBQUEsR0FBQUksQ0FBQSxNQUVGLE1BQU8sQ0FBQUksTUFBTSxDQUNmLENBRUEsY0FBZSxDQUFBSCxhQUFhIiwiaWdub3JlTGlzdCI6W119