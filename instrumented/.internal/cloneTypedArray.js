function cov_25xuj911i2(){var path="D:\\Msc in DS-Course Materials\\Software Testing\\COMP.SE.200-Part 2\\src\\.internal\\cloneTypedArray.js";var hash="bf020e08f5a84d92c310c0d4fd89d6a5d494645a";var global=new Function("return this")();var gcv="__coverage__";var coverageData={path:"D:\\Msc in DS-Course Materials\\Software Testing\\COMP.SE.200-Part 2\\src\\.internal\\cloneTypedArray.js",statementMap:{"0":{start:{line:12,column:17},end:{line:12,column:81}},"1":{start:{line:13,column:2},end:{line:13,column:85}}},fnMap:{"0":{name:"cloneTypedArray",decl:{start:{line:11,column:9},end:{line:11,column:24}},loc:{start:{line:11,column:45},end:{line:14,column:1}},line:11}},branchMap:{"0":{loc:{start:{line:12,column:17},end:{line:12,column:81}},type:"cond-expr",locations:[{start:{line:12,column:26},end:{line:12,column:61}},{start:{line:12,column:64},end:{line:12,column:81}}],line:12}},s:{"0":0,"1":0},f:{"0":0},b:{"0":[0,0]},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"bf020e08f5a84d92c310c0d4fd89d6a5d494645a"};var coverage=global[gcv]||(global[gcv]={});if(!coverage[path]||coverage[path].hash!==hash){coverage[path]=coverageData;}var actualCoverage=coverage[path];{// @ts-ignore
cov_25xuj911i2=function(){return actualCoverage;};}return actualCoverage;}cov_25xuj911i2();import cloneArrayBuffer from'./cloneArrayBuffer.js';/**
 * Creates a clone of `typedArray`.
 *
 * @private
 * @param {Object} typedArray The typed array to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned typed array.
 */function cloneTypedArray(typedArray,isDeep){cov_25xuj911i2().f[0]++;const buffer=(cov_25xuj911i2().s[0]++,isDeep?(cov_25xuj911i2().b[0][0]++,cloneArrayBuffer(typedArray.buffer)):(cov_25xuj911i2().b[0][1]++,typedArray.buffer));cov_25xuj911i2().s[1]++;return new typedArray.constructor(buffer,typedArray.byteOffset,typedArray.length);}export default cloneTypedArray;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJjb3ZfMjV4dWo5MTFpMiIsImFjdHVhbENvdmVyYWdlIiwiY2xvbmVBcnJheUJ1ZmZlciIsImNsb25lVHlwZWRBcnJheSIsInR5cGVkQXJyYXkiLCJpc0RlZXAiLCJmIiwiYnVmZmVyIiwicyIsImIiLCJjb25zdHJ1Y3RvciIsImJ5dGVPZmZzZXQiLCJsZW5ndGgiXSwic291cmNlcyI6WyJjbG9uZVR5cGVkQXJyYXkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNsb25lQXJyYXlCdWZmZXIgZnJvbSAnLi9jbG9uZUFycmF5QnVmZmVyLmpzJ1xuXG4vKipcbiAqIENyZWF0ZXMgYSBjbG9uZSBvZiBgdHlwZWRBcnJheWAuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSB0eXBlZEFycmF5IFRoZSB0eXBlZCBhcnJheSB0byBjbG9uZS5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW2lzRGVlcF0gU3BlY2lmeSBhIGRlZXAgY2xvbmUuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBjbG9uZWQgdHlwZWQgYXJyYXkuXG4gKi9cbmZ1bmN0aW9uIGNsb25lVHlwZWRBcnJheSh0eXBlZEFycmF5LCBpc0RlZXApIHtcbiAgY29uc3QgYnVmZmVyID0gaXNEZWVwID8gY2xvbmVBcnJheUJ1ZmZlcih0eXBlZEFycmF5LmJ1ZmZlcikgOiB0eXBlZEFycmF5LmJ1ZmZlclxuICByZXR1cm4gbmV3IHR5cGVkQXJyYXkuY29uc3RydWN0b3IoYnVmZmVyLCB0eXBlZEFycmF5LmJ5dGVPZmZzZXQsIHR5cGVkQXJyYXkubGVuZ3RoKVxufVxuXG5leHBvcnQgZGVmYXVsdCBjbG9uZVR5cGVkQXJyYXlcbiJdLCJtYXBwaW5ncyI6Im9xQ0FlWTtBQUFBQSxjQUFBLFNBQUFBLENBQUEsU0FBQUMsY0FBQSxXQUFBQSxjQUFBLEVBQUFELGNBQUEsR0FmWixNQUFPLENBQUFFLGdCQUFnQixLQUFNLHVCQUF1QixDQUVwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQ0EsUUFBUyxDQUFBQyxlQUFlQSxDQUFDQyxVQUFVLENBQUVDLE1BQU0sQ0FBRSxDQUFBTCxjQUFBLEdBQUFNLENBQUEsTUFDM0MsS0FBTSxDQUFBQyxNQUFNLEVBQUFQLGNBQUEsR0FBQVEsQ0FBQSxNQUFHSCxNQUFNLEVBQUFMLGNBQUEsR0FBQVMsQ0FBQSxTQUFHUCxnQkFBZ0IsQ0FBQ0UsVUFBVSxDQUFDRyxNQUFNLENBQUMsR0FBQVAsY0FBQSxHQUFBUyxDQUFBLFNBQUdMLFVBQVUsQ0FBQ0csTUFBTSxHQUFBUCxjQUFBLEdBQUFRLENBQUEsTUFDL0UsTUFBTyxJQUFJLENBQUFKLFVBQVUsQ0FBQ00sV0FBVyxDQUFDSCxNQUFNLENBQUVILFVBQVUsQ0FBQ08sVUFBVSxDQUFFUCxVQUFVLENBQUNRLE1BQU0sQ0FBQyxDQUNyRixDQUVBLGNBQWUsQ0FBQVQsZUFBZSIsImlnbm9yZUxpc3QiOltdfQ==