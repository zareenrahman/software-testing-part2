function cov_74iuvq7lq(){var path="D:\\Msc in DS-Course Materials\\Software Testing\\COMP.SE.200-Part 2\\src\\.internal\\getAllKeysIn.js";var hash="ea98aacb36094067febcc264e02d661cefa9115a";var global=new Function("return this")();var gcv="__coverage__";var coverageData={path:"D:\\Msc in DS-Course Materials\\Software Testing\\COMP.SE.200-Part 2\\src\\.internal\\getAllKeysIn.js",statementMap:{"0":{start:{line:11,column:17},end:{line:11,column:19}},"1":{start:{line:12,column:2},end:{line:14,column:3}},"2":{start:{line:13,column:4},end:{line:13,column:20}},"3":{start:{line:15,column:2},end:{line:17,column:3}},"4":{start:{line:16,column:4},end:{line:16,column:40}},"5":{start:{line:18,column:2},end:{line:18,column:15}}},fnMap:{"0":{name:"getAllKeysIn",decl:{start:{line:10,column:9},end:{line:10,column:21}},loc:{start:{line:10,column:30},end:{line:19,column:1}},line:10}},branchMap:{"0":{loc:{start:{line:15,column:2},end:{line:17,column:3}},type:"if",locations:[{start:{line:15,column:2},end:{line:17,column:3}},{start:{line:15,column:2},end:{line:17,column:3}}],line:15}},s:{"0":0,"1":0,"2":0,"3":0,"4":0,"5":0},f:{"0":0},b:{"0":[0,0]},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"ea98aacb36094067febcc264e02d661cefa9115a"};var coverage=global[gcv]||(global[gcv]={});if(!coverage[path]||coverage[path].hash!==hash){coverage[path]=coverageData;}var actualCoverage=coverage[path];{// @ts-ignore
cov_74iuvq7lq=function(){return actualCoverage;};}return actualCoverage;}cov_74iuvq7lq();import getSymbolsIn from'./getSymbolsIn.js';/**
 * Creates an array of own and inherited enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */function getAllKeysIn(object){cov_74iuvq7lq().f[0]++;const result=(cov_74iuvq7lq().s[0]++,[]);cov_74iuvq7lq().s[1]++;for(const key in object){cov_74iuvq7lq().s[2]++;result.push(key);}cov_74iuvq7lq().s[3]++;if(!Array.isArray(object)){cov_74iuvq7lq().b[0][0]++;cov_74iuvq7lq().s[4]++;result.push(...getSymbolsIn(object));}else{cov_74iuvq7lq().b[0][1]++;}cov_74iuvq7lq().s[5]++;return result;}export default getAllKeysIn;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJjb3ZfNzRpdXZxN2xxIiwiYWN0dWFsQ292ZXJhZ2UiLCJnZXRTeW1ib2xzSW4iLCJnZXRBbGxLZXlzSW4iLCJvYmplY3QiLCJmIiwicmVzdWx0IiwicyIsImtleSIsInB1c2giLCJBcnJheSIsImlzQXJyYXkiLCJiIl0sInNvdXJjZXMiOlsiZ2V0QWxsS2V5c0luLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBnZXRTeW1ib2xzSW4gZnJvbSAnLi9nZXRTeW1ib2xzSW4uanMnXG5cbi8qKlxuICogQ3JlYXRlcyBhbiBhcnJheSBvZiBvd24gYW5kIGluaGVyaXRlZCBlbnVtZXJhYmxlIHByb3BlcnR5IG5hbWVzIGFuZCBzeW1ib2xzIG9mIGBvYmplY3RgLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHByb3BlcnR5IG5hbWVzIGFuZCBzeW1ib2xzLlxuICovXG5mdW5jdGlvbiBnZXRBbGxLZXlzSW4ob2JqZWN0KSB7XG4gIGNvbnN0IHJlc3VsdCA9IFtdXG4gIGZvciAoY29uc3Qga2V5IGluIG9iamVjdCkge1xuICAgIHJlc3VsdC5wdXNoKGtleSlcbiAgfVxuICBpZiAoIUFycmF5LmlzQXJyYXkob2JqZWN0KSkge1xuICAgIHJlc3VsdC5wdXNoKC4uLmdldFN5bWJvbHNJbihvYmplY3QpKVxuICB9XG4gIHJldHVybiByZXN1bHRcbn1cblxuZXhwb3J0IGRlZmF1bHQgZ2V0QWxsS2V5c0luXG4iXSwibWFwcGluZ3MiOiIrM0NBZVk7QUFBQUEsYUFBQSxTQUFBQSxDQUFBLFNBQUFDLGNBQUEsV0FBQUEsY0FBQSxFQUFBRCxhQUFBLEdBZlosTUFBTyxDQUFBRSxZQUFZLEtBQU0sbUJBQW1CLENBRTVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQ0EsUUFBUyxDQUFBQyxZQUFZQSxDQUFDQyxNQUFNLENBQUUsQ0FBQUosYUFBQSxHQUFBSyxDQUFBLE1BQzVCLEtBQU0sQ0FBQUMsTUFBTSxFQUFBTixhQUFBLEdBQUFPLENBQUEsTUFBRyxFQUFFLEVBQUFQLGFBQUEsR0FBQU8sQ0FBQSxNQUNqQixJQUFLLEtBQU0sQ0FBQUMsR0FBRyxHQUFJLENBQUFKLE1BQU0sQ0FBRSxDQUFBSixhQUFBLEdBQUFPLENBQUEsTUFDeEJELE1BQU0sQ0FBQ0csSUFBSSxDQUFDRCxHQUFHLENBQUMsQ0FDbEIsQ0FBQ1IsYUFBQSxHQUFBTyxDQUFBLE1BQ0QsR0FBSSxDQUFDRyxLQUFLLENBQUNDLE9BQU8sQ0FBQ1AsTUFBTSxDQUFDLENBQUUsQ0FBQUosYUFBQSxHQUFBWSxDQUFBLFNBQUFaLGFBQUEsR0FBQU8sQ0FBQSxNQUMxQkQsTUFBTSxDQUFDRyxJQUFJLENBQUMsR0FBR1AsWUFBWSxDQUFDRSxNQUFNLENBQUMsQ0FBQyxDQUN0QyxDQUFDLEtBQUFKLGFBQUEsR0FBQVksQ0FBQSxVQUFBWixhQUFBLEdBQUFPLENBQUEsTUFDRCxNQUFPLENBQUFELE1BQU0sQ0FDZixDQUVBLGNBQWUsQ0FBQUgsWUFBWSIsImlnbm9yZUxpc3QiOltdfQ==