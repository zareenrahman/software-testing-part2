function cov_n3k62ypin(){var path="D:\\Msc in DS-Course Materials\\Software Testing\\COMP.SE.200-Part 2\\src\\.internal\\Stack.js";var hash="23394fad1c76690219cf38d384b3bad82581f67e";var global=new Function("return this")();var gcv="__coverage__";var coverageData={path:"D:\\Msc in DS-Course Materials\\Software Testing\\COMP.SE.200-Part 2\\src\\.internal\\Stack.js",statementMap:{"0":{start:{line:5,column:25},end:{line:5,column:28}},"1":{start:{line:17,column:17},end:{line:17,column:55}},"2":{start:{line:18,column:4},end:{line:18,column:25}},"3":{start:{line:27,column:4},end:{line:27,column:33}},"4":{start:{line:28,column:4},end:{line:28,column:17}},"5":{start:{line:39,column:17},end:{line:39,column:30}},"6":{start:{line:40,column:19},end:{line:40,column:38}},"7":{start:{line:42,column:4},end:{line:42,column:25}},"8":{start:{line:43,column:4},end:{line:43,column:17}},"9":{start:{line:54,column:4},end:{line:54,column:33}},"10":{start:{line:65,column:4},end:{line:65,column:33}},"11":{start:{line:77,column:15},end:{line:77,column:28}},"12":{start:{line:78,column:4},end:{line:86,column:5}},"13":{start:{line:79,column:20},end:{line:79,column:33}},"14":{start:{line:80,column:6},end:{line:84,column:7}},"15":{start:{line:81,column:8},end:{line:81,column:32}},"16":{start:{line:82,column:8},end:{line:82,column:31}},"17":{start:{line:83,column:8},end:{line:83,column:19}},"18":{start:{line:85,column:6},end:{line:85,column:48}},"19":{start:{line:87,column:4},end:{line:87,column:24}},"20":{start:{line:88,column:4},end:{line:88,column:25}},"21":{start:{line:89,column:4},end:{line:89,column:15}}},fnMap:{"0":{name:"(anonymous_0)",decl:{start:{line:16,column:2},end:{line:16,column:3}},loc:{start:{line:16,column:23},end:{line:19,column:3}},line:16},"1":{name:"(anonymous_1)",decl:{start:{line:26,column:2},end:{line:26,column:3}},loc:{start:{line:26,column:10},end:{line:29,column:3}},line:26},"2":{name:"(anonymous_2)",decl:{start:{line:38,column:2},end:{line:38,column:3}},loc:{start:{line:38,column:14},end:{line:44,column:3}},line:38},"3":{name:"(anonymous_3)",decl:{start:{line:53,column:2},end:{line:53,column:3}},loc:{start:{line:53,column:11},end:{line:55,column:3}},line:53},"4":{name:"(anonymous_4)",decl:{start:{line:64,column:2},end:{line:64,column:3}},loc:{start:{line:64,column:11},end:{line:66,column:3}},line:64},"5":{name:"(anonymous_5)",decl:{start:{line:76,column:2},end:{line:76,column:3}},loc:{start:{line:76,column:18},end:{line:90,column:3}},line:76}},branchMap:{"0":{loc:{start:{line:78,column:4},end:{line:86,column:5}},type:"if",locations:[{start:{line:78,column:4},end:{line:86,column:5}},{start:{line:78,column:4},end:{line:86,column:5}}],line:78},"1":{loc:{start:{line:80,column:6},end:{line:84,column:7}},type:"if",locations:[{start:{line:80,column:6},end:{line:84,column:7}},{start:{line:80,column:6},end:{line:84,column:7}}],line:80}},s:{"0":0,"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0,"14":0,"15":0,"16":0,"17":0,"18":0,"19":0,"20":0,"21":0},f:{"0":0,"1":0,"2":0,"3":0,"4":0,"5":0},b:{"0":[0,0],"1":[0,0]},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"23394fad1c76690219cf38d384b3bad82581f67e"};var coverage=global[gcv]||(global[gcv]={});if(!coverage[path]||coverage[path].hash!==hash){coverage[path]=coverageData;}var actualCoverage=coverage[path];{// @ts-ignore
cov_n3k62ypin=function(){return actualCoverage;};}return actualCoverage;}cov_n3k62ypin();import ListCache from'./ListCache.js';import MapCache from'./MapCache.js';/** Used as the size to enable large array optimizations. */const LARGE_ARRAY_SIZE=(cov_n3k62ypin().s[0]++,200);class Stack{/**
   * Creates a stack cache object to store key-value pairs.
   *
   * @private
   * @constructor
   * @param {Array} [entries] The key-value pairs to cache.
   */constructor(entries){cov_n3k62ypin().f[0]++;const data=(cov_n3k62ypin().s[1]++,this.__data__=new ListCache(entries));cov_n3k62ypin().s[2]++;this.size=data.size;}/**
   * Removes all key-value entries from the stack.
   *
   * @memberOf Stack
   */clear(){cov_n3k62ypin().f[1]++;cov_n3k62ypin().s[3]++;this.__data__=new ListCache();cov_n3k62ypin().s[4]++;this.size=0;}/**
   * Removes `key` and its value from the stack.
   *
   * @memberOf Stack
   * @param {string} key The key of the value to remove.
   * @returns {boolean} Returns `true` if the entry was removed, else `false`.
   */delete(key){cov_n3k62ypin().f[2]++;const data=(cov_n3k62ypin().s[5]++,this.__data__);const result=(cov_n3k62ypin().s[6]++,data['delete'](key));cov_n3k62ypin().s[7]++;this.size=data.size;cov_n3k62ypin().s[8]++;return result;}/**
   * Gets the stack value for `key`.
   *
   * @memberOf Stack
   * @param {string} key The key of the value to get.
   * @returns {*} Returns the entry value.
   */get(key){cov_n3k62ypin().f[3]++;cov_n3k62ypin().s[9]++;return this.__data__.get(key);}/**
   * Checks if a stack value for `key` exists.
   *
   * @memberOf Stack
   * @param {string} key The key of the entry to check.
   * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
   */has(key){cov_n3k62ypin().f[4]++;cov_n3k62ypin().s[10]++;return this.__data__.has(key);}/**
   * Sets the stack `key` to `value`.
   *
   * @memberOf Stack
   * @param {string} key The key of the value to set.
   * @param {*} value The value to set.
   * @returns {Object} Returns the stack cache instance.
   */set(key,value){cov_n3k62ypin().f[5]++;let data=(cov_n3k62ypin().s[11]++,this.__data__);cov_n3k62ypin().s[12]++;if(data instanceof ListCache){cov_n3k62ypin().b[0][0]++;const pairs=(cov_n3k62ypin().s[13]++,data.__data__);cov_n3k62ypin().s[14]++;if(pairs.length<LARGE_ARRAY_SIZE-1){cov_n3k62ypin().b[1][0]++;cov_n3k62ypin().s[15]++;pairs.push([key,value]);cov_n3k62ypin().s[16]++;this.size=++data.size;cov_n3k62ypin().s[17]++;return this;}else{cov_n3k62ypin().b[1][1]++;}cov_n3k62ypin().s[18]++;data=this.__data__=new MapCache(pairs);}else{cov_n3k62ypin().b[0][1]++;}cov_n3k62ypin().s[19]++;data.set(key,value);cov_n3k62ypin().s[20]++;this.size=data.size;cov_n3k62ypin().s[21]++;return this;}}export default Stack;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJjb3ZfbjNrNjJ5cGluIiwiYWN0dWFsQ292ZXJhZ2UiLCJMaXN0Q2FjaGUiLCJNYXBDYWNoZSIsIkxBUkdFX0FSUkFZX1NJWkUiLCJzIiwiU3RhY2siLCJjb25zdHJ1Y3RvciIsImVudHJpZXMiLCJmIiwiZGF0YSIsIl9fZGF0YV9fIiwic2l6ZSIsImNsZWFyIiwiZGVsZXRlIiwia2V5IiwicmVzdWx0IiwiZ2V0IiwiaGFzIiwic2V0IiwidmFsdWUiLCJiIiwicGFpcnMiLCJsZW5ndGgiLCJwdXNoIl0sInNvdXJjZXMiOlsiU3RhY2suanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpc3RDYWNoZSBmcm9tICcuL0xpc3RDYWNoZS5qcydcbmltcG9ydCBNYXBDYWNoZSBmcm9tICcuL01hcENhY2hlLmpzJ1xuXG4vKiogVXNlZCBhcyB0aGUgc2l6ZSB0byBlbmFibGUgbGFyZ2UgYXJyYXkgb3B0aW1pemF0aW9ucy4gKi9cbmNvbnN0IExBUkdFX0FSUkFZX1NJWkUgPSAyMDBcblxuY2xhc3MgU3RhY2sge1xuXG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgc3RhY2sgY2FjaGUgb2JqZWN0IHRvIHN0b3JlIGtleS12YWx1ZSBwYWlycy5cbiAgICpcbiAgICogQHByaXZhdGVcbiAgICogQGNvbnN0cnVjdG9yXG4gICAqIEBwYXJhbSB7QXJyYXl9IFtlbnRyaWVzXSBUaGUga2V5LXZhbHVlIHBhaXJzIHRvIGNhY2hlLlxuICAgKi9cbiAgY29uc3RydWN0b3IoZW50cmllcykge1xuICAgIGNvbnN0IGRhdGEgPSB0aGlzLl9fZGF0YV9fID0gbmV3IExpc3RDYWNoZShlbnRyaWVzKVxuICAgIHRoaXMuc2l6ZSA9IGRhdGEuc2l6ZVxuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZXMgYWxsIGtleS12YWx1ZSBlbnRyaWVzIGZyb20gdGhlIHN0YWNrLlxuICAgKlxuICAgKiBAbWVtYmVyT2YgU3RhY2tcbiAgICovXG4gIGNsZWFyKCkge1xuICAgIHRoaXMuX19kYXRhX18gPSBuZXcgTGlzdENhY2hlXG4gICAgdGhpcy5zaXplID0gMFxuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZXMgYGtleWAgYW5kIGl0cyB2YWx1ZSBmcm9tIHRoZSBzdGFjay5cbiAgICpcbiAgICogQG1lbWJlck9mIFN0YWNrXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gcmVtb3ZlLlxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGVudHJ5IHdhcyByZW1vdmVkLCBlbHNlIGBmYWxzZWAuXG4gICAqL1xuICBkZWxldGUoa2V5KSB7XG4gICAgY29uc3QgZGF0YSA9IHRoaXMuX19kYXRhX19cbiAgICBjb25zdCByZXN1bHQgPSBkYXRhWydkZWxldGUnXShrZXkpXG5cbiAgICB0aGlzLnNpemUgPSBkYXRhLnNpemVcbiAgICByZXR1cm4gcmVzdWx0XG4gIH1cblxuICAvKipcbiAgICogR2V0cyB0aGUgc3RhY2sgdmFsdWUgZm9yIGBrZXlgLlxuICAgKlxuICAgKiBAbWVtYmVyT2YgU3RhY2tcbiAgICogQHBhcmFtIHtzdHJpbmd9IGtleSBUaGUga2V5IG9mIHRoZSB2YWx1ZSB0byBnZXQuXG4gICAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSBlbnRyeSB2YWx1ZS5cbiAgICovXG4gIGdldChrZXkpIHtcbiAgICByZXR1cm4gdGhpcy5fX2RhdGFfXy5nZXQoa2V5KVxuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrcyBpZiBhIHN0YWNrIHZhbHVlIGZvciBga2V5YCBleGlzdHMuXG4gICAqXG4gICAqIEBtZW1iZXJPZiBTdGFja1xuICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5IFRoZSBrZXkgb2YgdGhlIGVudHJ5IHRvIGNoZWNrLlxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYW4gZW50cnkgZm9yIGBrZXlgIGV4aXN0cywgZWxzZSBgZmFsc2VgLlxuICAgKi9cbiAgaGFzKGtleSkge1xuICAgIHJldHVybiB0aGlzLl9fZGF0YV9fLmhhcyhrZXkpXG4gIH1cblxuICAvKipcbiAgICogU2V0cyB0aGUgc3RhY2sgYGtleWAgdG8gYHZhbHVlYC5cbiAgICpcbiAgICogQG1lbWJlck9mIFN0YWNrXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgVGhlIGtleSBvZiB0aGUgdmFsdWUgdG8gc2V0LlxuICAgKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBzZXQuXG4gICAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIHN0YWNrIGNhY2hlIGluc3RhbmNlLlxuICAgKi9cbiAgc2V0KGtleSwgdmFsdWUpIHtcbiAgICBsZXQgZGF0YSA9IHRoaXMuX19kYXRhX19cbiAgICBpZiAoZGF0YSBpbnN0YW5jZW9mIExpc3RDYWNoZSkge1xuICAgICAgY29uc3QgcGFpcnMgPSBkYXRhLl9fZGF0YV9fXG4gICAgICBpZiAocGFpcnMubGVuZ3RoIDwgTEFSR0VfQVJSQVlfU0laRSAtIDEpIHtcbiAgICAgICAgcGFpcnMucHVzaChba2V5LCB2YWx1ZV0pXG4gICAgICAgIHRoaXMuc2l6ZSA9ICsrZGF0YS5zaXplXG4gICAgICAgIHJldHVybiB0aGlzXG4gICAgICB9XG4gICAgICBkYXRhID0gdGhpcy5fX2RhdGFfXyA9IG5ldyBNYXBDYWNoZShwYWlycylcbiAgICB9XG4gICAgZGF0YS5zZXQoa2V5LCB2YWx1ZSlcbiAgICB0aGlzLnNpemUgPSBkYXRhLnNpemVcbiAgICByZXR1cm4gdGhpc1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFN0YWNrXG4iXSwibWFwcGluZ3MiOiJ1eEdBZVk7QUFBQUEsYUFBQSxTQUFBQSxDQUFBLFNBQUFDLGNBQUEsV0FBQUEsY0FBQSxFQUFBRCxhQUFBLEdBZlosTUFBTyxDQUFBRSxTQUFTLEtBQU0sZ0JBQWdCLENBQ3RDLE1BQU8sQ0FBQUMsUUFBUSxLQUFNLGVBQWUsQ0FFcEMsNERBQ0EsS0FBTSxDQUFBQyxnQkFBZ0IsRUFBQUosYUFBQSxHQUFBSyxDQUFBLE1B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