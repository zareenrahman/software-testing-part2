function cov_116ek89me9(){var path="D:\\Msc in DS-Course Materials\\Software Testing\\COMP.SE.200-Part 2\\src\\.internal\\baseConformsTo.js";var hash="18e2988247700f84729ace01485e610bb6a4aa1d";var global=new Function("return this")();var gcv="__coverage__";var coverageData={path:"D:\\Msc in DS-Course Materials\\Software Testing\\COMP.SE.200-Part 2\\src\\.internal\\baseConformsTo.js",statementMap:{"0":{start:{line:10,column:15},end:{line:10,column:27}},"1":{start:{line:11,column:2},end:{line:13,column:3}},"2":{start:{line:12,column:4},end:{line:12,column:18}},"3":{start:{line:14,column:2},end:{line:14,column:25}},"4":{start:{line:15,column:2},end:{line:23,column:3}},"5":{start:{line:16,column:16},end:{line:16,column:29}},"6":{start:{line:17,column:22},end:{line:17,column:33}},"7":{start:{line:18,column:18},end:{line:18,column:29}},"8":{start:{line:20,column:4},end:{line:22,column:5}},"9":{start:{line:21,column:6},end:{line:21,column:18}},"10":{start:{line:24,column:2},end:{line:24,column:13}}},fnMap:{"0":{name:"baseConformsTo",decl:{start:{line:9,column:9},end:{line:9,column:23}},loc:{start:{line:9,column:47},end:{line:25,column:1}},line:9}},branchMap:{"0":{loc:{start:{line:11,column:2},end:{line:13,column:3}},type:"if",locations:[{start:{line:11,column:2},end:{line:13,column:3}},{start:{line:11,column:2},end:{line:13,column:3}}],line:11},"1":{loc:{start:{line:20,column:4},end:{line:22,column:5}},type:"if",locations:[{start:{line:20,column:4},end:{line:22,column:5}},{start:{line:20,column:4},end:{line:22,column:5}}],line:20},"2":{loc:{start:{line:20,column:8},end:{line:20,column:70}},type:"binary-expr",locations:[{start:{line:20,column:9},end:{line:20,column:28}},{start:{line:20,column:32},end:{line:20,column:48}},{start:{line:20,column:53},end:{line:20,column:70}}],line:20}},s:{"0":0,"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0},f:{"0":0},b:{"0":[0,0],"1":[0,0],"2":[0,0,0]},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"18e2988247700f84729ace01485e610bb6a4aa1d"};var coverage=global[gcv]||(global[gcv]={});if(!coverage[path]||coverage[path].hash!==hash){coverage[path]=coverageData;}var actualCoverage=coverage[path];{// @ts-ignore
cov_116ek89me9=function(){return actualCoverage;};}return actualCoverage;}cov_116ek89me9();/**
 * The base implementation of `conformsTo` which accepts `props` to check.
 *
 * @private
 * @param {Object} object The object to inspect.
 * @param {Object} source The object of property predicates to conform to.
 * @returns {boolean} Returns `true` if `object` conforms, else `false`.
 */function baseConformsTo(object,source,props){cov_116ek89me9().f[0]++;let length=(cov_116ek89me9().s[0]++,props.length);cov_116ek89me9().s[1]++;if(object==null){cov_116ek89me9().b[0][0]++;cov_116ek89me9().s[2]++;return!length;}else{cov_116ek89me9().b[0][1]++;}cov_116ek89me9().s[3]++;object=Object(object);cov_116ek89me9().s[4]++;while(length--){const key=(cov_116ek89me9().s[5]++,props[length]);const predicate=(cov_116ek89me9().s[6]++,source[key]);const value=(cov_116ek89me9().s[7]++,object[key]);cov_116ek89me9().s[8]++;if((cov_116ek89me9().b[2][0]++,value===undefined)&&(cov_116ek89me9().b[2][1]++,!(key in object))||(cov_116ek89me9().b[2][2]++,!predicate(value))){cov_116ek89me9().b[1][0]++;cov_116ek89me9().s[9]++;return false;}else{cov_116ek89me9().b[1][1]++;}}cov_116ek89me9().s[10]++;return true;}export default baseConformsTo;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJjb3ZfMTE2ZWs4OW1lOSIsImFjdHVhbENvdmVyYWdlIiwiYmFzZUNvbmZvcm1zVG8iLCJvYmplY3QiLCJzb3VyY2UiLCJwcm9wcyIsImYiLCJsZW5ndGgiLCJzIiwiYiIsIk9iamVjdCIsImtleSIsInByZWRpY2F0ZSIsInZhbHVlIiwidW5kZWZpbmVkIl0sInNvdXJjZXMiOlsiYmFzZUNvbmZvcm1zVG8uanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgY29uZm9ybXNUb2Agd2hpY2ggYWNjZXB0cyBgcHJvcHNgIHRvIGNoZWNrLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBvYmplY3QgdG8gaW5zcGVjdC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBzb3VyY2UgVGhlIG9iamVjdCBvZiBwcm9wZXJ0eSBwcmVkaWNhdGVzIHRvIGNvbmZvcm0gdG8uXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYG9iamVjdGAgY29uZm9ybXMsIGVsc2UgYGZhbHNlYC5cbiAqL1xuZnVuY3Rpb24gYmFzZUNvbmZvcm1zVG8ob2JqZWN0LCBzb3VyY2UsIHByb3BzKSB7XG4gIGxldCBsZW5ndGggPSBwcm9wcy5sZW5ndGhcbiAgaWYgKG9iamVjdCA9PSBudWxsKSB7XG4gICAgcmV0dXJuICFsZW5ndGhcbiAgfVxuICBvYmplY3QgPSBPYmplY3Qob2JqZWN0KVxuICB3aGlsZSAobGVuZ3RoLS0pIHtcbiAgICBjb25zdCBrZXkgPSBwcm9wc1tsZW5ndGhdXG4gICAgY29uc3QgcHJlZGljYXRlID0gc291cmNlW2tleV1cbiAgICBjb25zdCB2YWx1ZSA9IG9iamVjdFtrZXldXG5cbiAgICBpZiAoKHZhbHVlID09PSB1bmRlZmluZWQgJiYgIShrZXkgaW4gb2JqZWN0KSkgfHwgIXByZWRpY2F0ZSh2YWx1ZSkpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cbiAgfVxuICByZXR1cm4gdHJ1ZVxufVxuXG5leHBvcnQgZGVmYXVsdCBiYXNlQ29uZm9ybXNUb1xuIl0sIm1hcHBpbmdzIjoiMG9FQWVZO0FBQUFBLGNBQUEsU0FBQUEsQ0FBQSxTQUFBQyxjQUFBLFdBQUFBLGNBQUEsRUFBQUQsY0FBQSxHQWZaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FDQSxRQUFTLENBQUFFLGNBQWNBLENBQUNDLE1BQU0sQ0FBRUMsTUFBTSxDQUFFQyxLQUFLLENBQUUsQ0FBQUwsY0FBQSxHQUFBTSxDQUFBLE1BQzdDLEdBQUksQ0FBQUMsTUFBTSxFQUFBUCxjQUFBLEdBQUFRLENBQUEsTUFBR0gsS0FBSyxDQUFDRSxNQUFNLEVBQUFQLGNBQUEsR0FBQVEsQ0FBQSxNQUN6QixHQUFJTCxNQUFNLEVBQUksSUFBSSxDQUFFLENBQUFILGNBQUEsR0FBQVMsQ0FBQSxTQUFBVCxjQUFBLEdBQUFRLENBQUEsTUFDbEIsTUFBTyxDQUFDRCxNQUFNLENBQ2hCLENBQUMsS0FBQVAsY0FBQSxHQUFBUyxDQUFBLFVBQUFULGNBQUEsR0FBQVEsQ0FBQSxNQUNETCxNQUFNLENBQUdPLE1BQU0sQ0FBQ1AsTUFBTSxDQUFDLENBQUFILGNBQUEsR0FBQVEsQ0FBQSxNQUN2QixNQUFPRCxNQUFNLEVBQUUsQ0FBRSxDQUNmLEtBQU0sQ0FBQUksR0FBRyxFQUFBWCxjQUFBLEdBQUFRLENBQUEsTUFBR0gsS0FBSyxDQUFDRSxNQUFNLENBQUMsRUFDekIsS0FBTSxDQUFBSyxTQUFTLEVBQUFaLGNBQUEsR0FBQVEsQ0FBQSxNQUFHSixNQUFNLENBQUNPLEdBQUcsQ0FBQyxFQUM3QixLQUFNLENBQUFFLEtBQUssRUFBQWIsY0FBQSxHQUFBUSxDQUFBLE1BQUdMLE1BQU0sQ0FBQ1EsR0FBRyxDQUFDLEVBQUFYLGNBQUEsR0FBQVEsQ0FBQSxNQUV6QixHQUFLLENBQUFSLGNBQUEsR0FBQVMsQ0FBQSxTQUFBSSxLQUFLLEdBQUtDLFNBQVMsSUFBQWQsY0FBQSxHQUFBUyxDQUFBLFNBQUksRUFBRUUsR0FBRyxHQUFJLENBQUFSLE1BQU0sQ0FBQyxJQUFBSCxjQUFBLEdBQUFTLENBQUEsU0FBSyxDQUFDRyxTQUFTLENBQUNDLEtBQUssQ0FBQyxFQUFFLENBQUFiLGNBQUEsR0FBQVMsQ0FBQSxTQUFBVCxjQUFBLEdBQUFRLENBQUEsTUFDbEUsTUFBTyxNQUFLLENBQ2QsQ0FBQyxLQUFBUixjQUFBLEdBQUFTLENBQUEsVUFDSCxDQUFDVCxjQUFBLEdBQUFRLENBQUEsT0FDRCxNQUFPLEtBQUksQ0FDYixDQUVBLGNBQWUsQ0FBQU4sY0FBYyIsImlnbm9yZUxpc3QiOltdfQ==