function cov_1lzqrtfa4v(){var path="D:\\Msc in DS-Course Materials\\Software Testing\\COMP.SE.200-Part 2\\src\\.internal\\arrayEach.js";var hash="bd18d5f7c2cfbf6f51157f6ef57244e72862e796";var global=new Function("return this")();var gcv="__coverage__";var coverageData={path:"D:\\Msc in DS-Course Materials\\Software Testing\\COMP.SE.200-Part 2\\src\\.internal\\arrayEach.js",statementMap:{"0":{start:{line:10,column:14},end:{line:10,column:16}},"1":{start:{line:11,column:17},end:{line:11,column:29}},"2":{start:{line:13,column:2},end:{line:17,column:3}},"3":{start:{line:14,column:4},end:{line:16,column:5}},"4":{start:{line:15,column:6},end:{line:15,column:11}},"5":{start:{line:18,column:2},end:{line:18,column:14}}},fnMap:{"0":{name:"arrayEach",decl:{start:{line:9,column:9},end:{line:9,column:18}},loc:{start:{line:9,column:36},end:{line:19,column:1}},line:9}},branchMap:{"0":{loc:{start:{line:14,column:4},end:{line:16,column:5}},type:"if",locations:[{start:{line:14,column:4},end:{line:16,column:5}},{start:{line:14,column:4},end:{line:16,column:5}}],line:14}},s:{"0":0,"1":0,"2":0,"3":0,"4":0,"5":0},f:{"0":0},b:{"0":[0,0]},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"bd18d5f7c2cfbf6f51157f6ef57244e72862e796"};var coverage=global[gcv]||(global[gcv]={});if(!coverage[path]||coverage[path].hash!==hash){coverage[path]=coverageData;}var actualCoverage=coverage[path];{// @ts-ignore
cov_1lzqrtfa4v=function(){return actualCoverage;};}return actualCoverage;}cov_1lzqrtfa4v();/**
 * A specialized version of `forEach` for arrays.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns `array`.
 */function arrayEach(array,iteratee){cov_1lzqrtfa4v().f[0]++;let index=(cov_1lzqrtfa4v().s[0]++,-1);const length=(cov_1lzqrtfa4v().s[1]++,array.length);cov_1lzqrtfa4v().s[2]++;while(++index<length){cov_1lzqrtfa4v().s[3]++;if(iteratee(array[index],index,array)===false){cov_1lzqrtfa4v().b[0][0]++;cov_1lzqrtfa4v().s[4]++;break;}else{cov_1lzqrtfa4v().b[0][1]++;}}cov_1lzqrtfa4v().s[5]++;return array;}export default arrayEach;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJjb3ZfMWx6cXJ0ZmE0diIsImFjdHVhbENvdmVyYWdlIiwiYXJyYXlFYWNoIiwiYXJyYXkiLCJpdGVyYXRlZSIsImYiLCJpbmRleCIsInMiLCJsZW5ndGgiLCJiIl0sInNvdXJjZXMiOlsiYXJyYXlFYWNoLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBmb3JFYWNoYCBmb3IgYXJyYXlzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBbYXJyYXldIFRoZSBhcnJheSB0byBpdGVyYXRlIG92ZXIuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBpdGVyYXRlZSBUaGUgZnVuY3Rpb24gaW52b2tlZCBwZXIgaXRlcmF0aW9uLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIGBhcnJheWAuXG4gKi9cbmZ1bmN0aW9uIGFycmF5RWFjaChhcnJheSwgaXRlcmF0ZWUpIHtcbiAgbGV0IGluZGV4ID0gLTFcbiAgY29uc3QgbGVuZ3RoID0gYXJyYXkubGVuZ3RoXG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICBpZiAoaXRlcmF0ZWUoYXJyYXlbaW5kZXhdLCBpbmRleCwgYXJyYXkpID09PSBmYWxzZSkge1xuICAgICAgYnJlYWtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGFycmF5XG59XG5cbmV4cG9ydCBkZWZhdWx0IGFycmF5RWFjaFxuIl0sIm1hcHBpbmdzIjoibzNDQWVZO0FBQUFBLGNBQUEsU0FBQUEsQ0FBQSxTQUFBQyxjQUFBLFdBQUFBLGNBQUEsRUFBQUQsY0FBQSxHQWZaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FDQSxRQUFTLENBQUFFLFNBQVNBLENBQUNDLEtBQUssQ0FBRUMsUUFBUSxDQUFFLENBQUFKLGNBQUEsR0FBQUssQ0FBQSxNQUNsQyxHQUFJLENBQUFDLEtBQUssRUFBQU4sY0FBQSxHQUFBTyxDQUFBLE1BQUcsQ0FBQyxDQUFDLEVBQ2QsS0FBTSxDQUFBQyxNQUFNLEVBQUFSLGNBQUEsR0FBQU8sQ0FBQSxNQUFHSixLQUFLLENBQUNLLE1BQU0sRUFBQVIsY0FBQSxHQUFBTyxDQUFBLE1BRTNCLE1BQU8sRUFBRUQsS0FBSyxDQUFHRSxNQUFNLENBQUUsQ0FBQVIsY0FBQSxHQUFBTyxDQUFBLE1BQ3ZCLEdBQUlILFFBQVEsQ0FBQ0QsS0FBSyxDQUFDRyxLQUFLLENBQUMsQ0FBRUEsS0FBSyxDQUFFSCxLQUFLLENBQUMsR0FBSyxLQUFLLENBQUUsQ0FBQUgsY0FBQSxHQUFBUyxDQUFBLFNBQUFULGNBQUEsR0FBQU8sQ0FBQSxNQUNsRCxNQUNGLENBQUMsS0FBQVAsY0FBQSxHQUFBUyxDQUFBLFVBQ0gsQ0FBQ1QsY0FBQSxHQUFBTyxDQUFBLE1BQ0QsTUFBTyxDQUFBSixLQUFLLENBQ2QsQ0FFQSxjQUFlLENBQUFELFNBQVMiLCJpZ25vcmVMaXN0IjpbXX0=