function cov_245v8crlq8(){var path="D:\\Msc in DS-Course Materials\\Software Testing\\COMP.SE.200-Part 2\\src\\.internal\\baseIndexOfWith.js";var hash="f29ba9406677e57640b5f51452615f147d96e685";var global=new Function("return this")();var gcv="__coverage__";var coverageData={path:"D:\\Msc in DS-Course Materials\\Software Testing\\COMP.SE.200-Part 2\\src\\.internal\\baseIndexOfWith.js",statementMap:{"0":{start:{line:12,column:14},end:{line:12,column:27}},"1":{start:{line:13,column:21},end:{line:13,column:26}},"2":{start:{line:15,column:2},end:{line:19,column:3}},"3":{start:{line:16,column:4},end:{line:18,column:5}},"4":{start:{line:17,column:6},end:{line:17,column:18}},"5":{start:{line:20,column:2},end:{line:20,column:11}}},fnMap:{"0":{name:"baseIndexOfWith",decl:{start:{line:11,column:9},end:{line:11,column:24}},loc:{start:{line:11,column:62},end:{line:21,column:1}},line:11}},branchMap:{"0":{loc:{start:{line:16,column:4},end:{line:18,column:5}},type:"if",locations:[{start:{line:16,column:4},end:{line:18,column:5}},{start:{line:16,column:4},end:{line:18,column:5}}],line:16}},s:{"0":0,"1":0,"2":0,"3":0,"4":0,"5":0},f:{"0":0},b:{"0":[0,0]},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"f29ba9406677e57640b5f51452615f147d96e685"};var coverage=global[gcv]||(global[gcv]={});if(!coverage[path]||coverage[path].hash!==hash){coverage[path]=coverageData;}var actualCoverage=coverage[path];{// @ts-ignore
cov_245v8crlq8=function(){return actualCoverage;};}return actualCoverage;}cov_245v8crlq8();/**
 * This function is like `baseIndexOf` except that it accepts a comparator.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @param {Function} comparator The comparator invoked per element.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */function baseIndexOfWith(array,value,fromIndex,comparator){cov_245v8crlq8().f[0]++;let index=(cov_245v8crlq8().s[0]++,fromIndex-1);const{length}=(cov_245v8crlq8().s[1]++,array);cov_245v8crlq8().s[2]++;while(++index<length){cov_245v8crlq8().s[3]++;if(comparator(array[index],value)){cov_245v8crlq8().b[0][0]++;cov_245v8crlq8().s[4]++;return index;}else{cov_245v8crlq8().b[0][1]++;}}cov_245v8crlq8().s[5]++;return-1;}export default baseIndexOfWith;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJjb3ZfMjQ1djhjcmxxOCIsImFjdHVhbENvdmVyYWdlIiwiYmFzZUluZGV4T2ZXaXRoIiwiYXJyYXkiLCJ2YWx1ZSIsImZyb21JbmRleCIsImNvbXBhcmF0b3IiLCJmIiwiaW5kZXgiLCJzIiwibGVuZ3RoIiwiYiJdLCJzb3VyY2VzIjpbImJhc2VJbmRleE9mV2l0aC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFRoaXMgZnVuY3Rpb24gaXMgbGlrZSBgYmFzZUluZGV4T2ZgIGV4Y2VwdCB0aGF0IGl0IGFjY2VwdHMgYSBjb21wYXJhdG9yLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gaW5zcGVjdC5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHNlYXJjaCBmb3IuXG4gKiBAcGFyYW0ge251bWJlcn0gZnJvbUluZGV4IFRoZSBpbmRleCB0byBzZWFyY2ggZnJvbS5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGNvbXBhcmF0b3IgVGhlIGNvbXBhcmF0b3IgaW52b2tlZCBwZXIgZWxlbWVudC5cbiAqIEByZXR1cm5zIHtudW1iZXJ9IFJldHVybnMgdGhlIGluZGV4IG9mIHRoZSBtYXRjaGVkIHZhbHVlLCBlbHNlIGAtMWAuXG4gKi9cbmZ1bmN0aW9uIGJhc2VJbmRleE9mV2l0aChhcnJheSwgdmFsdWUsIGZyb21JbmRleCwgY29tcGFyYXRvcikge1xuICBsZXQgaW5kZXggPSBmcm9tSW5kZXggLSAxXG4gIGNvbnN0IHsgbGVuZ3RoIH0gPSBhcnJheVxuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgaWYgKGNvbXBhcmF0b3IoYXJyYXlbaW5kZXhdLCB2YWx1ZSkpIHtcbiAgICAgIHJldHVybiBpbmRleFxuICAgIH1cbiAgfVxuICByZXR1cm4gLTFcbn1cblxuZXhwb3J0IGRlZmF1bHQgYmFzZUluZGV4T2ZXaXRoXG4iXSwibWFwcGluZ3MiOiIwNENBZVk7QUFBQUEsY0FBQSxTQUFBQSxDQUFBLFNBQUFDLGNBQUEsV0FBQUEsY0FBQSxFQUFBRCxjQUFBLEdBZlo7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FDQSxRQUFTLENBQUFFLGVBQWVBLENBQUNDLEtBQUssQ0FBRUMsS0FBSyxDQUFFQyxTQUFTLENBQUVDLFVBQVUsQ0FBRSxDQUFBTixjQUFBLEdBQUFPLENBQUEsTUFDNUQsR0FBSSxDQUFBQyxLQUFLLEVBQUFSLGNBQUEsR0FBQVMsQ0FBQSxNQUFHSixTQUFTLENBQUcsQ0FBQyxFQUN6QixLQUFNLENBQUVLLE1BQU8sQ0FBQyxFQUFBVixjQUFBLEdBQUFTLENBQUEsTUFBR04sS0FBSyxFQUFBSCxjQUFBLEdBQUFTLENBQUEsTUFFeEIsTUFBTyxFQUFFRCxLQUFLLENBQUdFLE1BQU0sQ0FBRSxDQUFBVixjQUFBLEdBQUFTLENBQUEsTUFDdkIsR0FBSUgsVUFBVSxDQUFDSCxLQUFLLENBQUNLLEtBQUssQ0FBQyxDQUFFSixLQUFLLENBQUMsQ0FBRSxDQUFBSixjQUFBLEdBQUFXLENBQUEsU0FBQVgsY0FBQSxHQUFBUyxDQUFBLE1BQ25DLE1BQU8sQ0FBQUQsS0FBSyxDQUNkLENBQUMsS0FBQVIsY0FBQSxHQUFBVyxDQUFBLFVBQ0gsQ0FBQ1gsY0FBQSxHQUFBUyxDQUFBLE1BQ0QsTUFBTyxDQUFDLENBQUMsQ0FDWCxDQUVBLGNBQWUsQ0FBQVAsZUFBZSIsImlnbm9yZUxpc3QiOltdfQ==