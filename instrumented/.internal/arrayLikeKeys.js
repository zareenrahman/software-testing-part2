function cov_2kf726kr09(){var path="D:\\Msc in DS-Course Materials\\Software Testing\\COMP.SE.200-Part 2\\src\\.internal\\arrayLikeKeys.js";var hash="e4172ed3f2b2dc762fc19d85d8daa07087fb795e";var global=new Function("return this")();var gcv="__coverage__";var coverageData={path:"D:\\Msc in DS-Course Materials\\Software Testing\\COMP.SE.200-Part 2\\src\\.internal\\arrayLikeKeys.js",statementMap:{"0":{start:{line:7,column:23},end:{line:7,column:54}},"1":{start:{line:18,column:16},end:{line:18,column:36}},"2":{start:{line:19,column:16},end:{line:19,column:44}},"3":{start:{line:20,column:17},end:{line:20,column:52}},"4":{start:{line:21,column:17},end:{line:21,column:67}},"5":{start:{line:22,column:22},end:{line:22,column:56}},"6":{start:{line:23,column:17},end:{line:23,column:29}},"7":{start:{line:24,column:17},end:{line:24,column:52}},"8":{start:{line:25,column:14},end:{line:25,column:39}},"9":{start:{line:26,column:2},end:{line:28,column:3}},"10":{start:{line:27,column:4},end:{line:27,column:30}},"11":{start:{line:29,column:2},end:{line:39,column:3}},"12":{start:{line:30,column:4},end:{line:38,column:5}},"13":{start:{line:37,column:6},end:{line:37,column:22}},"14":{start:{line:40,column:2},end:{line:40,column:15}}},fnMap:{"0":{name:"arrayLikeKeys",decl:{start:{line:17,column:9},end:{line:17,column:22}},loc:{start:{line:17,column:41},end:{line:41,column:1}},line:17}},branchMap:{"0":{loc:{start:{line:19,column:16},end:{line:19,column:44}},type:"binary-expr",locations:[{start:{line:19,column:16},end:{line:19,column:22}},{start:{line:19,column:26},end:{line:19,column:44}}],line:19},"1":{loc:{start:{line:20,column:17},end:{line:20,column:52}},type:"binary-expr",locations:[{start:{line:20,column:17},end:{line:20,column:23}},{start:{line:20,column:27},end:{line:20,column:33}},{start:{line:20,column:37},end:{line:20,column:52}}],line:20},"2":{loc:{start:{line:21,column:17},end:{line:21,column:67}},type:"binary-expr",locations:[{start:{line:21,column:17},end:{line:21,column:23}},{start:{line:21,column:27},end:{line:21,column:33}},{start:{line:21,column:37},end:{line:21,column:44}},{start:{line:21,column:48},end:{line:21,column:67}}],line:21},"3":{loc:{start:{line:22,column:22},end:{line:22,column:56}},type:"binary-expr",locations:[{start:{line:22,column:22},end:{line:22,column:27}},{start:{line:22,column:31},end:{line:22,column:36}},{start:{line:22,column:40},end:{line:22,column:46}},{start:{line:22,column:50},end:{line:22,column:56}}],line:22},"4":{loc:{start:{line:24,column:27},end:{line:24,column:51}},type:"cond-expr",locations:[{start:{line:24,column:41},end:{line:24,column:47}},{start:{line:24,column:50},end:{line:24,column:51}}],line:24},"5":{loc:{start:{line:25,column:14},end:{line:25,column:39}},type:"cond-expr",locations:[{start:{line:25,column:28},end:{line:25,column:30}},{start:{line:25,column:33},end:{line:25,column:39}}],line:25},"6":{loc:{start:{line:30,column:4},end:{line:38,column:5}},type:"if",locations:[{start:{line:30,column:4},end:{line:38,column:5}},{start:{line:30,column:4},end:{line:38,column:5}}],line:30},"7":{loc:{start:{line:30,column:8},end:{line:36,column:10}},type:"binary-expr",locations:[{start:{line:30,column:9},end:{line:30,column:18}},{start:{line:30,column:22},end:{line:30,column:53}},{start:{line:31,column:8},end:{line:36,column:10}}],line:30},"8":{loc:{start:{line:31,column:10},end:{line:36,column:9}},type:"binary-expr",locations:[{start:{line:31,column:10},end:{line:31,column:21}},{start:{line:33,column:11},end:{line:33,column:27}},{start:{line:35,column:11},end:{line:35,column:31}}],line:31}},s:{"0":0,"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0,"14":0},f:{"0":0},b:{"0":[0,0],"1":[0,0,0],"2":[0,0,0,0],"3":[0,0,0,0],"4":[0,0],"5":[0,0],"6":[0,0],"7":[0,0,0],"8":[0,0,0]},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"e4172ed3f2b2dc762fc19d85d8daa07087fb795e"};var coverage=global[gcv]||(global[gcv]={});if(!coverage[path]||coverage[path].hash!==hash){coverage[path]=coverageData;}var actualCoverage=coverage[path];{// @ts-ignore
cov_2kf726kr09=function(){return actualCoverage;};}return actualCoverage;}cov_2kf726kr09();import isArguments from'../isArguments.js';import isBuffer from'../isBuffer.js';import isIndex from'./isIndex.js';import isTypedArray from'../isTypedArray.js';/** Used to check objects for own properties. */const hasOwnProperty=(cov_2kf726kr09().s[0]++,Object.prototype.hasOwnProperty);/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */function arrayLikeKeys(value,inherited){cov_2kf726kr09().f[0]++;const isArr=(cov_2kf726kr09().s[1]++,Array.isArray(value));const isArg=(cov_2kf726kr09().s[2]++,(cov_2kf726kr09().b[0][0]++,!isArr)&&(cov_2kf726kr09().b[0][1]++,isArguments(value)));const isBuff=(cov_2kf726kr09().s[3]++,(cov_2kf726kr09().b[1][0]++,!isArr)&&(cov_2kf726kr09().b[1][1]++,!isArg)&&(cov_2kf726kr09().b[1][2]++,isBuffer(value)));const isType=(cov_2kf726kr09().s[4]++,(cov_2kf726kr09().b[2][0]++,!isArr)&&(cov_2kf726kr09().b[2][1]++,!isArg)&&(cov_2kf726kr09().b[2][2]++,!isBuff)&&(cov_2kf726kr09().b[2][3]++,isTypedArray(value)));const skipIndexes=(cov_2kf726kr09().s[5]++,(cov_2kf726kr09().b[3][0]++,isArr)||(cov_2kf726kr09().b[3][1]++,isArg)||(cov_2kf726kr09().b[3][2]++,isBuff)||(cov_2kf726kr09().b[3][3]++,isType));const length=(cov_2kf726kr09().s[6]++,value.length);const result=(cov_2kf726kr09().s[7]++,new Array(skipIndexes?(cov_2kf726kr09().b[4][0]++,length):(cov_2kf726kr09().b[4][1]++,0)));let index=(cov_2kf726kr09().s[8]++,skipIndexes?(cov_2kf726kr09().b[5][0]++,-1):(cov_2kf726kr09().b[5][1]++,length));cov_2kf726kr09().s[9]++;while(++index<length){cov_2kf726kr09().s[10]++;result[index]=`${index}`;}cov_2kf726kr09().s[11]++;for(const key in value){cov_2kf726kr09().s[12]++;if(((cov_2kf726kr09().b[7][0]++,inherited)||(cov_2kf726kr09().b[7][1]++,hasOwnProperty.call(value,key)))&&(cov_2kf726kr09().b[7][2]++,!((cov_2kf726kr09().b[8][0]++,skipIndexes)&&(// Safari 9 has enumerable `arguments.length` in strict mode.
(cov_2kf726kr09().b[8][1]++,key==='length')||(cov_2kf726kr09().b[8][2]++,// Skip index properties.
isIndex(key,length)))))){cov_2kf726kr09().b[6][0]++;cov_2kf726kr09().s[13]++;result.push(key);}else{cov_2kf726kr09().b[6][1]++;}}cov_2kf726kr09().s[14]++;return result;}export default arrayLikeKeys;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJjb3ZfMmtmNzI2a3IwOSIsImFjdHVhbENvdmVyYWdlIiwiaXNBcmd1bWVudHMiLCJpc0J1ZmZlciIsImlzSW5kZXgiLCJpc1R5cGVkQXJyYXkiLCJoYXNPd25Qcm9wZXJ0eSIsInMiLCJPYmplY3QiLCJwcm90b3R5cGUiLCJhcnJheUxpa2VLZXlzIiwidmFsdWUiLCJpbmhlcml0ZWQiLCJmIiwiaXNBcnIiLCJBcnJheSIsImlzQXJyYXkiLCJpc0FyZyIsImIiLCJpc0J1ZmYiLCJpc1R5cGUiLCJza2lwSW5kZXhlcyIsImxlbmd0aCIsInJlc3VsdCIsImluZGV4Iiwia2V5IiwiY2FsbCIsInB1c2giXSwic291cmNlcyI6WyJhcnJheUxpa2VLZXlzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBpc0FyZ3VtZW50cyBmcm9tICcuLi9pc0FyZ3VtZW50cy5qcydcbmltcG9ydCBpc0J1ZmZlciBmcm9tICcuLi9pc0J1ZmZlci5qcydcbmltcG9ydCBpc0luZGV4IGZyb20gJy4vaXNJbmRleC5qcydcbmltcG9ydCBpc1R5cGVkQXJyYXkgZnJvbSAnLi4vaXNUeXBlZEFycmF5LmpzJ1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbmNvbnN0IGhhc093blByb3BlcnR5ID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eVxuXG4vKipcbiAqIENyZWF0ZXMgYW4gYXJyYXkgb2YgdGhlIGVudW1lcmFibGUgcHJvcGVydHkgbmFtZXMgb2YgdGhlIGFycmF5LWxpa2UgYHZhbHVlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcXVlcnkuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IGluaGVyaXRlZCBTcGVjaWZ5IHJldHVybmluZyBpbmhlcml0ZWQgcHJvcGVydHkgbmFtZXMuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIGFycmF5IG9mIHByb3BlcnR5IG5hbWVzLlxuICovXG5mdW5jdGlvbiBhcnJheUxpa2VLZXlzKHZhbHVlLCBpbmhlcml0ZWQpIHtcbiAgY29uc3QgaXNBcnIgPSBBcnJheS5pc0FycmF5KHZhbHVlKVxuICBjb25zdCBpc0FyZyA9ICFpc0FyciAmJiBpc0FyZ3VtZW50cyh2YWx1ZSlcbiAgY29uc3QgaXNCdWZmID0gIWlzQXJyICYmICFpc0FyZyAmJiBpc0J1ZmZlcih2YWx1ZSlcbiAgY29uc3QgaXNUeXBlID0gIWlzQXJyICYmICFpc0FyZyAmJiAhaXNCdWZmICYmIGlzVHlwZWRBcnJheSh2YWx1ZSlcbiAgY29uc3Qgc2tpcEluZGV4ZXMgPSBpc0FyciB8fCBpc0FyZyB8fCBpc0J1ZmYgfHwgaXNUeXBlXG4gIGNvbnN0IGxlbmd0aCA9IHZhbHVlLmxlbmd0aFxuICBjb25zdCByZXN1bHQgPSBuZXcgQXJyYXkoc2tpcEluZGV4ZXMgPyBsZW5ndGggOiAwKVxuICBsZXQgaW5kZXggPSBza2lwSW5kZXhlcyA/IC0xIDogbGVuZ3RoXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgcmVzdWx0W2luZGV4XSA9IGAke2luZGV4fWBcbiAgfVxuICBmb3IgKGNvbnN0IGtleSBpbiB2YWx1ZSkge1xuICAgIGlmICgoaW5oZXJpdGVkIHx8IGhhc093blByb3BlcnR5LmNhbGwodmFsdWUsIGtleSkpICYmXG4gICAgICAgICEoc2tpcEluZGV4ZXMgJiYgKFxuICAgICAgICAvLyBTYWZhcmkgOSBoYXMgZW51bWVyYWJsZSBgYXJndW1lbnRzLmxlbmd0aGAgaW4gc3RyaWN0IG1vZGUuXG4gICAgICAgICAgKGtleSA9PT0gJ2xlbmd0aCcgfHxcbiAgICAgICAgICAgLy8gU2tpcCBpbmRleCBwcm9wZXJ0aWVzLlxuICAgICAgICAgICBpc0luZGV4KGtleSwgbGVuZ3RoKSlcbiAgICAgICAgKSkpIHtcbiAgICAgIHJlc3VsdC5wdXNoKGtleSlcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdFxufVxuXG5leHBvcnQgZGVmYXVsdCBhcnJh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