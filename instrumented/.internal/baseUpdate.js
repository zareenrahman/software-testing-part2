function cov_22yohzrsxj(){var path="D:\\Msc in DS-Course Materials\\Software Testing\\COMP.SE.200-Part 2\\src\\.internal\\baseUpdate.js";var hash="6869c01874312d1cc15b620aeb71827fa0e3bd30";var global=new Function("return this")();var gcv="__coverage__";var coverageData={path:"D:\\Msc in DS-Course Materials\\Software Testing\\COMP.SE.200-Part 2\\src\\.internal\\baseUpdate.js",statementMap:{"0":{start:{line:15,column:2},end:{line:15,column:74}}},fnMap:{"0":{name:"baseUpdate",decl:{start:{line:14,column:9},end:{line:14,column:19}},loc:{start:{line:14,column:55},end:{line:16,column:1}},line:14}},branchMap:{},s:{"0":0},f:{"0":0},b:{},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"6869c01874312d1cc15b620aeb71827fa0e3bd30"};var coverage=global[gcv]||(global[gcv]={});if(!coverage[path]||coverage[path].hash!==hash){coverage[path]=coverageData;}var actualCoverage=coverage[path];{// @ts-ignore
cov_22yohzrsxj=function(){return actualCoverage;};}return actualCoverage;}cov_22yohzrsxj();import baseGet from'./baseGet.js';import baseSet from'./baseSet.js';/**
 * The base implementation of `update`.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {Array|string} path The path of the property to update.
 * @param {Function} updater The function to produce the updated value.
 * @param {Function} [customizer] The function to customize path creation.
 * @returns {Object} Returns `object`.
 */function baseUpdate(object,path,updater,customizer){cov_22yohzrsxj().f[0]++;cov_22yohzrsxj().s[0]++;return baseSet(object,path,updater(baseGet(object,path)),customizer);}export default baseUpdate;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJjb3ZfMjJ5b2h6cnN4aiIsImFjdHVhbENvdmVyYWdlIiwiYmFzZUdldCIsImJhc2VTZXQiLCJiYXNlVXBkYXRlIiwib2JqZWN0IiwicGF0aCIsInVwZGF0ZXIiLCJjdXN0b21pemVyIiwiZiIsInMiXSwic291cmNlcyI6WyJiYXNlVXBkYXRlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBiYXNlR2V0IGZyb20gJy4vYmFzZUdldC5qcydcbmltcG9ydCBiYXNlU2V0IGZyb20gJy4vYmFzZVNldC5qcydcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgdXBkYXRlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIG1vZGlmeS5cbiAqIEBwYXJhbSB7QXJyYXl8c3RyaW5nfSBwYXRoIFRoZSBwYXRoIG9mIHRoZSBwcm9wZXJ0eSB0byB1cGRhdGUuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSB1cGRhdGVyIFRoZSBmdW5jdGlvbiB0byBwcm9kdWNlIHRoZSB1cGRhdGVkIHZhbHVlLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gW2N1c3RvbWl6ZXJdIFRoZSBmdW5jdGlvbiB0byBjdXN0b21pemUgcGF0aCBjcmVhdGlvbi5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgYG9iamVjdGAuXG4gKi9cbmZ1bmN0aW9uIGJhc2VVcGRhdGUob2JqZWN0LCBwYXRoLCB1cGRhdGVyLCBjdXN0b21pemVyKSB7XG4gIHJldHVybiBiYXNlU2V0KG9iamVjdCwgcGF0aCwgdXBkYXRlcihiYXNlR2V0KG9iamVjdCwgcGF0aCkpLCBjdXN0b21pemVyKVxufVxuXG5leHBvcnQgZGVmYXVsdCBiYXNlVXBkYXRlXG4iXSwibWFwcGluZ3MiOiJvNEJBZVk7QUFBQUEsY0FBQSxTQUFBQSxDQUFBLFNBQUFDLGNBQUEsV0FBQUEsY0FBQSxFQUFBRCxjQUFBLEdBZlosTUFBTyxDQUFBRSxPQUFPLEtBQU0sY0FBYyxDQUNsQyxNQUFPLENBQUFDLE9BQU8sS0FBTSxjQUFjLENBRWxDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQ0EsUUFBUyxDQUFBQyxVQUFVQSxDQUFDQyxNQUFNLENBQUVDLElBQUksQ0FBRUMsT0FBTyxDQUFFQyxVQUFVLENBQUUsQ0FBQVIsY0FBQSxHQUFBUyxDQUFBLE1BQUFULGNBQUEsR0FBQVUsQ0FBQSxNQUNyRCxNQUFPLENBQUFQLE9BQU8sQ0FBQ0UsTUFBTSxDQUFFQyxJQUFJLENBQUVDLE9BQU8sQ0FBQ0wsT0FBTyxDQUFDRyxNQUFNLENBQUVDLElBQUksQ0FBQyxDQUFDLENBQUVFLFVBQVUsQ0FBQyxDQUMxRSxDQUVBLGNBQWUsQ0FBQUosVUFBVSIsImlnbm9yZUxpc3QiOltdfQ==