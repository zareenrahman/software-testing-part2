function cov_2m29yb062y(){var path="D:\\Msc in DS-Course Materials\\Software Testing\\COMP.SE.200-Part 2\\src\\.internal\\arrayIncludesWith.js";var hash="6eb15a7d8b761fa8d3af27c04f1e9bbdcf7c7941";var global=new Function("return this")();var gcv="__coverage__";var coverageData={path:"D:\\Msc in DS-Course Materials\\Software Testing\\COMP.SE.200-Part 2\\src\\.internal\\arrayIncludesWith.js",statementMap:{"0":{start:{line:11,column:2},end:{line:13,column:3}},"1":{start:{line:12,column:4},end:{line:12,column:16}},"2":{start:{line:15,column:2},end:{line:19,column:3}},"3":{start:{line:16,column:4},end:{line:18,column:5}},"4":{start:{line:17,column:6},end:{line:17,column:17}},"5":{start:{line:20,column:2},end:{line:20,column:14}}},fnMap:{"0":{name:"arrayIncludesWith",decl:{start:{line:10,column:9},end:{line:10,column:26}},loc:{start:{line:10,column:54},end:{line:21,column:1}},line:10}},branchMap:{"0":{loc:{start:{line:11,column:2},end:{line:13,column:3}},type:"if",locations:[{start:{line:11,column:2},end:{line:13,column:3}},{start:{line:11,column:2},end:{line:13,column:3}}],line:11},"1":{loc:{start:{line:16,column:4},end:{line:18,column:5}},type:"if",locations:[{start:{line:16,column:4},end:{line:18,column:5}},{start:{line:16,column:4},end:{line:18,column:5}}],line:16}},s:{"0":0,"1":0,"2":0,"3":0,"4":0,"5":0},f:{"0":0},b:{"0":[0,0],"1":[0,0]},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"6eb15a7d8b761fa8d3af27c04f1e9bbdcf7c7941"};var coverage=global[gcv]||(global[gcv]={});if(!coverage[path]||coverage[path].hash!==hash){coverage[path]=coverageData;}var actualCoverage=coverage[path];{// @ts-ignore
cov_2m29yb062y=function(){return actualCoverage;};}return actualCoverage;}cov_2m29yb062y();/**
 * This function is like `arrayIncludes` except that it accepts a comparator.
 *
 * @private
 * @param {Array} [array] The array to inspect.
 * @param {*} target The value to search for.
 * @param {Function} comparator The comparator invoked per element.
 * @returns {boolean} Returns `true` if `target` is found, else `false`.
 */function arrayIncludesWith(array,target,comparator){cov_2m29yb062y().f[0]++;cov_2m29yb062y().s[0]++;if(array==null){cov_2m29yb062y().b[0][0]++;cov_2m29yb062y().s[1]++;return false;}else{cov_2m29yb062y().b[0][1]++;}cov_2m29yb062y().s[2]++;for(const value of array){cov_2m29yb062y().s[3]++;if(comparator(target,value)){cov_2m29yb062y().b[1][0]++;cov_2m29yb062y().s[4]++;return true;}else{cov_2m29yb062y().b[1][1]++;}}cov_2m29yb062y().s[5]++;return false;}export default arrayIncludesWith;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJjb3ZfMm0yOXliMDYyeSIsImFjdHVhbENvdmVyYWdlIiwiYXJyYXlJbmNsdWRlc1dpdGgiLCJhcnJheSIsInRhcmdldCIsImNvbXBhcmF0b3IiLCJmIiwicyIsImIiLCJ2YWx1ZSJdLCJzb3VyY2VzIjpbImFycmF5SW5jbHVkZXNXaXRoLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogVGhpcyBmdW5jdGlvbiBpcyBsaWtlIGBhcnJheUluY2x1ZGVzYCBleGNlcHQgdGhhdCBpdCBhY2NlcHRzIGEgY29tcGFyYXRvci5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gW2FycmF5XSBUaGUgYXJyYXkgdG8gaW5zcGVjdC5cbiAqIEBwYXJhbSB7Kn0gdGFyZ2V0IFRoZSB2YWx1ZSB0byBzZWFyY2ggZm9yLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gY29tcGFyYXRvciBUaGUgY29tcGFyYXRvciBpbnZva2VkIHBlciBlbGVtZW50LlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB0YXJnZXRgIGlzIGZvdW5kLCBlbHNlIGBmYWxzZWAuXG4gKi9cbmZ1bmN0aW9uIGFycmF5SW5jbHVkZXNXaXRoKGFycmF5LCB0YXJnZXQsIGNvbXBhcmF0b3IpIHtcbiAgaWYgKGFycmF5ID09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIGZvciAoY29uc3QgdmFsdWUgb2YgYXJyYXkpIHtcbiAgICBpZiAoY29tcGFyYXRvcih0YXJnZXQsIHZhbHVlKSkge1xuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGZhbHNlXG59XG5cbmV4cG9ydCBkZWZhdWx0IGFycmF5SW5jbHVkZXNXaXRoXG4iXSwibWFwcGluZ3MiOiJxbERBZVk7QUFBQUEsY0FBQSxTQUFBQSxDQUFBLFNBQUFDLGNBQUEsV0FBQUEsY0FBQSxFQUFBRCxjQUFBLEdBZlo7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQ0EsUUFBUyxDQUFBRSxpQkFBaUJBLENBQUNDLEtBQUssQ0FBRUMsTUFBTSxDQUFFQyxVQUFVLENBQUUsQ0FBQUwsY0FBQSxHQUFBTSxDQUFBLE1BQUFOLGNBQUEsR0FBQU8sQ0FBQSxNQUNwRCxHQUFJSixLQUFLLEVBQUksSUFBSSxDQUFFLENBQUFILGNBQUEsR0FBQVEsQ0FBQSxTQUFBUixjQUFBLEdBQUFPLENBQUEsTUFDakIsTUFBTyxNQUFLLENBQ2QsQ0FBQyxLQUFBUCxjQUFBLEdBQUFRLENBQUEsVUFBQVIsY0FBQSxHQUFBTyxDQUFBLE1BRUQsSUFBSyxLQUFNLENBQUFFLEtBQUssR0FBSSxDQUFBTixLQUFLLENBQUUsQ0FBQUgsY0FBQSxHQUFBTyxDQUFBLE1BQ3pCLEdBQUlGLFVBQVUsQ0FBQ0QsTUFBTSxDQUFFSyxLQUFLLENBQUMsQ0FBRSxDQUFBVCxjQUFBLEdBQUFRLENBQUEsU0FBQVIsY0FBQSxHQUFBTyxDQUFBLE1BQzdCLE1BQU8sS0FBSSxDQUNiLENBQUMsS0FBQVAsY0FBQSxHQUFBUSxDQUFBLFVBQ0gsQ0FBQ1IsY0FBQSxHQUFBTyxDQUFBLE1BQ0QsTUFBTyxNQUFLLENBQ2QsQ0FFQSxjQUFlLENBQUFMLGlCQUFpQiIsImlnbm9yZUxpc3QiOltdfQ==