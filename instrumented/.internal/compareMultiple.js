function cov_qrp1jyjf6(){var path="D:\\Msc in DS-Course Materials\\Software Testing\\COMP.SE.200-Part 2\\src\\.internal\\compareMultiple.js";var hash="cbaee76487e67714ecc25719df6e3195c850bdbb";var global=new Function("return this")();var gcv="__coverage__";var coverageData={path:"D:\\Msc in DS-Course Materials\\Software Testing\\COMP.SE.200-Part 2\\src\\.internal\\compareMultiple.js",statementMap:{"0":{start:{line:18,column:14},end:{line:18,column:16}},"1":{start:{line:19,column:22},end:{line:19,column:37}},"2":{start:{line:20,column:22},end:{line:20,column:36}},"3":{start:{line:21,column:17},end:{line:21,column:35}},"4":{start:{line:22,column:23},end:{line:22,column:36}},"5":{start:{line:24,column:2},end:{line:34,column:3}},"6":{start:{line:25,column:18},end:{line:25,column:61}},"7":{start:{line:26,column:18},end:{line:26,column:82}},"8":{start:{line:27,column:19},end:{line:27,column:64}},"9":{start:{line:28,column:4},end:{line:33,column:5}},"10":{start:{line:29,column:6},end:{line:31,column:7}},"11":{start:{line:30,column:8},end:{line:30,column:50}},"12":{start:{line:32,column:6},end:{line:32,column:19}},"13":{start:{line:42,column:2},end:{line:42,column:35}}},fnMap:{"0":{name:"compareMultiple",decl:{start:{line:17,column:9},end:{line:17,column:24}},loc:{start:{line:17,column:48},end:{line:43,column:1}},line:17}},branchMap:{"0":{loc:{start:{line:25,column:18},end:{line:25,column:61}},type:"cond-expr",locations:[{start:{line:25,column:41},end:{line:25,column:54}},{start:{line:25,column:57},end:{line:25,column:61}}],line:25},"1":{loc:{start:{line:26,column:18},end:{line:26,column:82}},type:"cond-expr",locations:[{start:{line:26,column:59},end:{line:26,column:64}},{start:{line:26,column:66},end:{line:26,column:82}}],line:26},"2":{loc:{start:{line:26,column:19},end:{line:26,column:55}},type:"binary-expr",locations:[{start:{line:26,column:19},end:{line:26,column:24}},{start:{line:26,column:28},end:{line:26,column:55}}],line:26},"3":{loc:{start:{line:28,column:4},end:{line:33,column:5}},type:"if",locations:[{start:{line:28,column:4},end:{line:33,column:5}},{start:{line:28,column:4},end:{line:33,column:5}}],line:28},"4":{loc:{start:{line:29,column:6},end:{line:31,column:7}},type:"if",locations:[{start:{line:29,column:6},end:{line:31,column:7}},{start:{line:29,column:6},end:{line:31,column:7}}],line:29},"5":{loc:{start:{line:29,column:10},end:{line:29,column:46}},type:"binary-expr",locations:[{start:{line:29,column:10},end:{line:29,column:15}},{start:{line:29,column:19},end:{line:29,column:46}}],line:29},"6":{loc:{start:{line:30,column:25},end:{line:30,column:49}},type:"cond-expr",locations:[{start:{line:30,column:43},end:{line:30,column:45}},{start:{line:30,column:48},end:{line:30,column:49}}],line:30}},s:{"0":0,"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0},f:{"0":0},b:{"0":[0,0],"1":[0,0],"2":[0,0],"3":[0,0],"4":[0,0],"5":[0,0],"6":[0,0]},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"cbaee76487e67714ecc25719df6e3195c850bdbb"};var coverage=global[gcv]||(global[gcv]={});if(!coverage[path]||coverage[path].hash!==hash){coverage[path]=coverageData;}var actualCoverage=coverage[path];{// @ts-ignore
cov_qrp1jyjf6=function(){return actualCoverage;};}return actualCoverage;}cov_qrp1jyjf6();import compareAscending from'./compareAscending.js';/**
 * Used by `orderBy` to compare multiple properties of a value to another
 * and stable sort them.
 *
 * If `orders` is unspecified, all values are sorted in ascending order. Otherwise,
 * specify an order of "desc" for descending or "asc" for ascending sort order
 * of corresponding values.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {(string|function)[]} orders The order to sort by for each property.
 * @returns {number} Returns the sort order indicator for `object`.
 */function compareMultiple(object,other,orders){cov_qrp1jyjf6().f[0]++;let index=(cov_qrp1jyjf6().s[0]++,-1);const objCriteria=(cov_qrp1jyjf6().s[1]++,object.criteria);const othCriteria=(cov_qrp1jyjf6().s[2]++,other.criteria);const length=(cov_qrp1jyjf6().s[3]++,objCriteria.length);const ordersLength=(cov_qrp1jyjf6().s[4]++,orders.length);cov_qrp1jyjf6().s[5]++;while(++index<length){const order=(cov_qrp1jyjf6().s[6]++,index<ordersLength?(cov_qrp1jyjf6().b[0][0]++,orders[index]):(cov_qrp1jyjf6().b[0][1]++,null));const cmpFn=(cov_qrp1jyjf6().s[7]++,(cov_qrp1jyjf6().b[2][0]++,order)&&(cov_qrp1jyjf6().b[2][1]++,typeof order==='function')?(cov_qrp1jyjf6().b[1][0]++,order):(cov_qrp1jyjf6().b[1][1]++,compareAscending));const result=(cov_qrp1jyjf6().s[8]++,cmpFn(objCriteria[index],othCriteria[index]));cov_qrp1jyjf6().s[9]++;if(result){cov_qrp1jyjf6().b[3][0]++;cov_qrp1jyjf6().s[10]++;if((cov_qrp1jyjf6().b[5][0]++,order)&&(cov_qrp1jyjf6().b[5][1]++,typeof order!=='function')){cov_qrp1jyjf6().b[4][0]++;cov_qrp1jyjf6().s[11]++;return result*(order=='desc'?(cov_qrp1jyjf6().b[6][0]++,-1):(cov_qrp1jyjf6().b[6][1]++,1));}else{cov_qrp1jyjf6().b[4][1]++;}cov_qrp1jyjf6().s[12]++;return result;}else{cov_qrp1jyjf6().b[3][1]++;}}// Fixes an `Array#sort` bug in the JS engine embedded in Adobe applications
// that causes it, under certain circumstances, to provide the same value for
// `object` and `other`. See https://github.com/jashkenas/underscore/pull/1247
// for more details.
//
// This also ensures a stable sort in V8 and other engines.
// See https://bugs.chromium.org/p/v8/issues/detail?id=90 for more details.
cov_qrp1jyjf6().s[13]++;return object.index-other.index;}export default compareMultiple;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJjb3ZfcXJwMWp5amY2IiwiYWN0dWFsQ292ZXJhZ2UiLCJjb21wYXJlQXNjZW5kaW5nIiwiY29tcGFyZU11bHRpcGxlIiwib2JqZWN0Iiwib3RoZXIiLCJvcmRlcnMiLCJmIiwiaW5kZXgiLCJzIiwib2JqQ3JpdGVyaWEiLCJjcml0ZXJpYSIsIm90aENyaXRlcmlhIiwibGVuZ3RoIiwib3JkZXJzTGVuZ3RoIiwib3JkZXIiLCJiIiwiY21wRm4iLCJyZXN1bHQiXSwic291cmNlcyI6WyJjb21wYXJlTXVsdGlwbGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNvbXBhcmVBc2NlbmRpbmcgZnJvbSAnLi9jb21wYXJlQXNjZW5kaW5nLmpzJ1xuXG4vKipcbiAqIFVzZWQgYnkgYG9yZGVyQnlgIHRvIGNvbXBhcmUgbXVsdGlwbGUgcHJvcGVydGllcyBvZiBhIHZhbHVlIHRvIGFub3RoZXJcbiAqIGFuZCBzdGFibGUgc29ydCB0aGVtLlxuICpcbiAqIElmIGBvcmRlcnNgIGlzIHVuc3BlY2lmaWVkLCBhbGwgdmFsdWVzIGFyZSBzb3J0ZWQgaW4gYXNjZW5kaW5nIG9yZGVyLiBPdGhlcndpc2UsXG4gKiBzcGVjaWZ5IGFuIG9yZGVyIG9mIFwiZGVzY1wiIGZvciBkZXNjZW5kaW5nIG9yIFwiYXNjXCIgZm9yIGFzY2VuZGluZyBzb3J0IG9yZGVyXG4gKiBvZiBjb3JyZXNwb25kaW5nIHZhbHVlcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIGNvbXBhcmUuXG4gKiBAcGFyYW0ge09iamVjdH0gb3RoZXIgVGhlIG90aGVyIG9iamVjdCB0byBjb21wYXJlLlxuICogQHBhcmFtIHsoc3RyaW5nfGZ1bmN0aW9uKVtdfSBvcmRlcnMgVGhlIG9yZGVyIHRvIHNvcnQgYnkgZm9yIGVhY2ggcHJvcGVydHkuXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBSZXR1cm5zIHRoZSBzb3J0IG9yZGVyIGluZGljYXRvciBmb3IgYG9iamVjdGAuXG4gKi9cbmZ1bmN0aW9uIGNvbXBhcmVNdWx0aXBsZShvYmplY3QsIG90aGVyLCBvcmRlcnMpIHtcbiAgbGV0IGluZGV4ID0gLTFcbiAgY29uc3Qgb2JqQ3JpdGVyaWEgPSBvYmplY3QuY3JpdGVyaWFcbiAgY29uc3Qgb3RoQ3JpdGVyaWEgPSBvdGhlci5jcml0ZXJpYVxuICBjb25zdCBsZW5ndGggPSBvYmpDcml0ZXJpYS5sZW5ndGhcbiAgY29uc3Qgb3JkZXJzTGVuZ3RoID0gb3JkZXJzLmxlbmd0aFxuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgY29uc3Qgb3JkZXIgPSBpbmRleCA8IG9yZGVyc0xlbmd0aCA/IG9yZGVyc1tpbmRleF0gOiBudWxsXG4gICAgY29uc3QgY21wRm4gPSAob3JkZXIgJiYgdHlwZW9mIG9yZGVyID09PSAnZnVuY3Rpb24nKSA/IG9yZGVyOiBjb21wYXJlQXNjZW5kaW5nXG4gICAgY29uc3QgcmVzdWx0ID0gY21wRm4ob2JqQ3JpdGVyaWFbaW5kZXhdLCBvdGhDcml0ZXJpYVtpbmRleF0pXG4gICAgaWYgKHJlc3VsdCkge1xuICAgICAgaWYgKG9yZGVyICYmIHR5cGVvZiBvcmRlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXR1cm4gcmVzdWx0ICogKG9yZGVyID09ICdkZXNjJyA/IC0xIDogMSlcbiAgICAgIH1cbiAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG4gIH1cbiAgLy8gRml4ZXMgYW4gYEFycmF5I3NvcnRgIGJ1ZyBpbiB0aGUgSlMgZW5naW5lIGVtYmVkZGVkIGluIEFkb2JlIGFwcGxpY2F0aW9uc1xuICAvLyB0aGF0IGNhdXNlcyBpdCwgdW5kZXIgY2VydGFpbiBjaXJjdW1zdGFuY2VzLCB0byBwcm92aWRlIHRoZSBzYW1lIHZhbHVlIGZvclxuICAvLyBgb2JqZWN0YCBhbmQgYG90aGVyYC4gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9qYXNoa2VuYXMvdW5kZXJzY29yZS9wdWxsLzEyNDdcbiAgLy8gZm9yIG1vcmUgZGV0YWlscy5cbiAgLy9cbiAgLy8gVGhpcyBhbHNvIGVuc3VyZXMgYSBzdGFibGUgc29ydCBpbiBWOCBhbmQgb3RoZXIgZW5naW5lcy5cbiAgLy8gU2VlIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTkwIGZvciBtb3JlIGRldGFpbHMuXG4gIHJldHVybiBvYmplY3QuaW5kZXggLSBvdGhlci5pbmRleFxufVxuXG5leHBvcnQgZGVmYXVsdCBjb21wYXJlTXVsdGlwbGVcbiJdLCJtYXBwaW5ncyI6Im1uR0FlWTtBQUFBQSxhQUFBLFNBQUFBLENBQUEsU0FBQUMsY0FBQSxXQUFBQSxjQUFBLEVBQUFELGFBQUEsR0FmWixNQUFPLENBQUFFLGdCQUFnQixLQUFNLHVCQUF1QixDQUVwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQ0EsUUFBUyxDQUFBQyxlQUFlQSxDQUFDQyxNQUFNLENBQUVDLEtBQUssQ0FBRUMsTUFBTSxDQUFFLENBQUFOLGFBQUEsR0FBQU8sQ0FBQSxNQUM5QyxHQUFJLENBQUFDLEtBQUssRUFBQVIsYUFBQSxHQUFBUyxDQUFBLE1BQUcsQ0FBQyxDQUFDLEVBQ2QsS0FBTSxDQUFBQyxXQUFXLEVBQUFWLGFBQUEsR0FBQVMsQ0FBQSxNQUFHTCxNQUFNLENBQUNPLFFBQVEsRUFDbkMsS0FBTSxDQUFBQyxXQUFXLEVBQUFaLGFBQUEsR0FBQVMsQ0FBQSxNQUFHSixLQUFLLENBQUNNLFFBQVEsRUFDbEMsS0FBTSxDQUFBRSxNQUFNLEVBQUFiLGFBQUEsR0FBQVMsQ0FBQSxNQUFHQyxXQUFXLENBQUNHLE1BQU0sRUFDakMsS0FBTSxDQUFBQyxZQUFZLEVBQUFkLGFBQUEsR0FBQVMsQ0FBQSxNQUFHSCxNQUFNLENBQUNPLE1BQU0sRUFBQWIsYUFBQSxHQUFBUyxDQUFBLE1BRWxDLE1BQU8sRUFBRUQsS0FBSyxDQUFHSyxNQUFNLENBQUUsQ0FDdkIsS0FBTSxDQUFBRSxLQUFLLEVBQUFmLGFBQUEsR0FBQVMsQ0FBQSxNQUFHRCxLQUFLLENBQUdNLFlBQVksRUFBQWQsYUFBQSxHQUFBZ0IsQ0FBQSxTQUFHVixNQUFNLENBQUNFLEtBQUssQ0FBQyxHQUFBUixhQUFBLEdBQUFnQixDQUFBLFNBQUcsSUFBSSxHQUN6RCxLQUFNLENBQUFDLEtBQUssRUFBQWpCLGFBQUEsR0FBQVMsQ0FBQSxNQUFJLENBQUFULGFBQUEsR0FBQWdCLENBQUEsU0FBQUQsS0FBSyxJQUFBZixhQUFBLEdBQUFnQixDQUFBLFNBQUksTUFBTyxDQUFBRCxLQUFLLEdBQUssVUFBVSxHQUFBZixhQUFBLEdBQUFnQixDQUFBLFNBQUlELEtBQUssR0FBQWYsYUFBQSxHQUFBZ0IsQ0FBQSxTQUFFZCxnQkFBZ0IsR0FDOUUsS0FBTSxDQUFBZ0IsTUFBTSxFQUFBbEIsYUFBQSxHQUFBUyxDQUFBLE1BQUdRLEtBQUssQ0FBQ1AsV0FBVyxDQUFDRixLQUFLLENBQUMsQ0FBRUksV0FBVyxDQUFDSixLQUFLLENBQUMsQ0FBQyxFQUFBUixhQUFBLEdBQUFTLENBQUEsTUFDNUQsR0FBSVMsTUFBTSxDQUFFLENBQUFsQixhQUFBLEdBQUFnQixDQUFBLFNBQUFoQixhQUFBLEdBQUFTLENBQUEsT0FDVixHQUFJLENBQUFULGFBQUEsR0FBQWdCLENBQUEsU0FBQUQsS0FBSyxJQUFBZixhQUFBLEdBQUFnQixDQUFBLFNBQUksTUFBTyxDQUFBRCxLQUFLLEdBQUssVUFBVSxFQUFFLENBQUFmLGFBQUEsR0FBQWdCLENBQUEsU0FBQWhCLGFBQUEsR0FBQVMsQ0FBQSxPQUN4QyxNQUFPLENBQUFTLE1BQU0sRUFBSUgsS0FBSyxFQUFJLE1BQU0sRUFBQWYsYUFBQSxHQUFBZ0IsQ0FBQSxTQUFHLENBQUMsQ0FBQyxHQUFBaEIsYUFBQSxHQUFBZ0IsQ0FBQSxTQUFHLENBQUMsRUFBQyxDQUM1QyxDQUFDLEtBQUFoQixhQUFBLEdBQUFnQixDQUFBLFVBQUFoQixhQUFBLEdBQUFTLENBQUEsT0FDRCxNQUFPLENBQUFTLE1BQU0sQ0FDZixDQUFDLEtBQUFsQixhQUFBLEdBQUFnQixDQUFBLFVBQ0gsQ0FDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBaEIsYUFBQSxHQUFBUyxDQUFBLE9BQ0EsTUFBTyxDQUFBTCxNQUFNLENBQUNJLEtBQUssQ0FBR0gsS0FBSyxDQUFDRyxLQUFLLENBQ25DLENBRUEsY0FBZSxDQUFBTCxlQUFlIiwiaWdub3JlTGlzdCI6W119