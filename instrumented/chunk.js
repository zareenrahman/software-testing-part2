function cov_2jrv64r0cj(){var path="D:\\Msc in DS-Course Materials\\Software Testing\\COMP.SE.200-Part 2\\src\\chunk.js";var hash="b001f49343c6bf20fec2f39516675e1fd7c0dd37";var global=new Function("return this")();var gcv="__coverage__";var coverageData={path:"D:\\Msc in DS-Course Materials\\Software Testing\\COMP.SE.200-Part 2\\src\\chunk.js",statementMap:{"0":{start:{line:23,column:2},end:{line:23,column:37}},"1":{start:{line:24,column:17},end:{line:24,column:49}},"2":{start:{line:25,column:2},end:{line:27,column:3}},"3":{start:{line:26,column:4},end:{line:26,column:13}},"4":{start:{line:28,column:14},end:{line:28,column:15}},"5":{start:{line:29,column:17},end:{line:29,column:18}},"6":{start:{line:30,column:17},end:{line:30,column:52}},"7":{start:{line:32,column:2},end:{line:34,column:3}},"8":{start:{line:33,column:4},end:{line:33,column:59}},"9":{start:{line:35,column:2},end:{line:35,column:15}}},fnMap:{"0":{name:"chunk",decl:{start:{line:22,column:9},end:{line:22,column:14}},loc:{start:{line:22,column:32},end:{line:36,column:1}},line:22}},branchMap:{"0":{loc:{start:{line:22,column:22},end:{line:22,column:30}},type:"default-arg",locations:[{start:{line:22,column:29},end:{line:22,column:30}}],line:22},"1":{loc:{start:{line:24,column:17},end:{line:24,column:49}},type:"cond-expr",locations:[{start:{line:24,column:33},end:{line:24,column:34}},{start:{line:24,column:37},end:{line:24,column:49}}],line:24},"2":{loc:{start:{line:25,column:2},end:{line:27,column:3}},type:"if",locations:[{start:{line:25,column:2},end:{line:27,column:3}},{start:{line:25,column:2},end:{line:27,column:3}}],line:25},"3":{loc:{start:{line:25,column:6},end:{line:25,column:25}},type:"binary-expr",locations:[{start:{line:25,column:6},end:{line:25,column:13}},{start:{line:25,column:17},end:{line:25,column:25}}],line:25}},s:{"0":0,"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0},f:{"0":0},b:{"0":[0],"1":[0,0],"2":[0,0],"3":[0,0]},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"b001f49343c6bf20fec2f39516675e1fd7c0dd37"};var coverage=global[gcv]||(global[gcv]={});if(!coverage[path]||coverage[path].hash!==hash){coverage[path]=coverageData;}var actualCoverage=coverage[path];{// @ts-ignore
cov_2jrv64r0cj=function(){return actualCoverage;};}return actualCoverage;}cov_2jrv64r0cj();import slice from'./slice.js';import toInteger from'./toInteger.js';/**
 * Creates an array of elements split into groups the length of `size`.
 * If `array` can't be split evenly, the final chunk will be the remaining
 * elements.
 *
 * @since 3.0.0
 * @category Array
 * @param {Array} array The array to process.
 * @param {number} [size=1] The length of each chunk
 * @returns {Array} Returns the new array of chunks.
 * @example
 *
 * chunk(['a', 'b', 'c', 'd'], 2)
 * // => [['a', 'b'], ['c', 'd']]
 *
 * chunk(['a', 'b', 'c', 'd'], 3)
 * // => [['a', 'b', 'c'], ['d']]
 */function chunk(array,size=(cov_2jrv64r0cj().b[0][0]++,1)){cov_2jrv64r0cj().f[0]++;cov_2jrv64r0cj().s[0]++;size=Math.max(toInteger(size),0);const length=(cov_2jrv64r0cj().s[1]++,array==null?(cov_2jrv64r0cj().b[1][0]++,0):(cov_2jrv64r0cj().b[1][1]++,array.length));cov_2jrv64r0cj().s[2]++;if((cov_2jrv64r0cj().b[3][0]++,!length)||(cov_2jrv64r0cj().b[3][1]++,size<1)){cov_2jrv64r0cj().b[2][0]++;cov_2jrv64r0cj().s[3]++;return[];}else{cov_2jrv64r0cj().b[2][1]++;}let index=(cov_2jrv64r0cj().s[4]++,0);let resIndex=(cov_2jrv64r0cj().s[5]++,0);const result=(cov_2jrv64r0cj().s[6]++,new Array(Math.ceil(length/size)));cov_2jrv64r0cj().s[7]++;while(index<length){cov_2jrv64r0cj().s[8]++;result[resIndex]=slice(array,index,index+=size);}cov_2jrv64r0cj().s[9]++;return result;}export default chunk;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJjb3ZfMmpydjY0cjBjaiIsImFjdHVhbENvdmVyYWdlIiwic2xpY2UiLCJ0b0ludGVnZXIiLCJjaHVuayIsImFycmF5Iiwic2l6ZSIsImIiLCJmIiwicyIsIk1hdGgiLCJtYXgiLCJsZW5ndGgiLCJpbmRleCIsInJlc0luZGV4IiwicmVzdWx0IiwiQXJyYXkiLCJjZWlsIl0sInNvdXJjZXMiOlsiY2h1bmsuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHNsaWNlIGZyb20gJy4vc2xpY2UuanMnXG5pbXBvcnQgdG9JbnRlZ2VyIGZyb20gJy4vdG9JbnRlZ2VyLmpzJ1xuXG4vKipcbiAqIENyZWF0ZXMgYW4gYXJyYXkgb2YgZWxlbWVudHMgc3BsaXQgaW50byBncm91cHMgdGhlIGxlbmd0aCBvZiBgc2l6ZWAuXG4gKiBJZiBgYXJyYXlgIGNhbid0IGJlIHNwbGl0IGV2ZW5seSwgdGhlIGZpbmFsIGNodW5rIHdpbGwgYmUgdGhlIHJlbWFpbmluZ1xuICogZWxlbWVudHMuXG4gKlxuICogQHNpbmNlIDMuMC4wXG4gKiBAY2F0ZWdvcnkgQXJyYXlcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IFRoZSBhcnJheSB0byBwcm9jZXNzLlxuICogQHBhcmFtIHtudW1iZXJ9IFtzaXplPTFdIFRoZSBsZW5ndGggb2YgZWFjaCBjaHVua1xuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBuZXcgYXJyYXkgb2YgY2h1bmtzLlxuICogQGV4YW1wbGVcbiAqXG4gKiBjaHVuayhbJ2EnLCAnYicsICdjJywgJ2QnXSwgMilcbiAqIC8vID0+IFtbJ2EnLCAnYiddLCBbJ2MnLCAnZCddXVxuICpcbiAqIGNodW5rKFsnYScsICdiJywgJ2MnLCAnZCddLCAzKVxuICogLy8gPT4gW1snYScsICdiJywgJ2MnXSwgWydkJ11dXG4gKi9cbmZ1bmN0aW9uIGNodW5rKGFycmF5LCBzaXplID0gMSkge1xuICBzaXplID0gTWF0aC5tYXgodG9JbnRlZ2VyKHNpemUpLCAwKVxuICBjb25zdCBsZW5ndGggPSBhcnJheSA9PSBudWxsID8gMCA6IGFycmF5Lmxlbmd0aFxuICBpZiAoIWxlbmd0aCB8fCBzaXplIDwgMSkge1xuICAgIHJldHVybiBbXVxuICB9XG4gIGxldCBpbmRleCA9IDBcbiAgbGV0IHJlc0luZGV4ID0gMFxuICBjb25zdCByZXN1bHQgPSBuZXcgQXJyYXkoTWF0aC5jZWlsKGxlbmd0aCAvIHNpemUpKVxuXG4gIHdoaWxlIChpbmRleCA8IGxlbmd0aCkge1xuICAgIHJlc3VsdFtyZXNJbmRleF0gPSBzbGljZShhcnJheSwgaW5kZXgsIChpbmRleCArPSBzaXplKSlcbiAgfVxuICByZXR1cm4gcmVzdWx0XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNodW5rXG4iXSwibWFwcGluZ3MiOiJ1cEVBZVk7QUFBQUEsY0FBQSxTQUFBQSxDQUFBLFNBQUFDLGNBQUEsV0FBQUEsY0FBQSxFQUFBRCxjQUFBLEdBZlosTUFBTyxDQUFBRSxLQUFLLEtBQU0sWUFBWSxDQUM5QixNQUFPLENBQUFDLFNBQVMsS0FBTSxnQkFBZ0IsQ0FFdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQ0EsUUFBUyxDQUFBQyxLQUFLQSxDQUFDQyxLQUFLLENBQUVDLElBQUksRUFBQU4sY0FBQSxHQUFBTyxDQUFBLFNBQUcsQ0FBQyxFQUFFLENBQUFQLGNBQUEsR0FBQVEsQ0FBQSxNQUFBUixjQUFBLEdBQUFTLENBQUEsTUFDOUJILElBQUksQ0FBR0ksSUFBSSxDQUFDQyxHQUFHLENBQUNSLFNBQVMsQ0FBQ0csSUFBSSxDQUFDLENBQUUsQ0FBQyxDQUFDLENBQ25DLEtBQU0sQ0FBQU0sTUFBTSxFQUFBWixjQUFBLEdBQUFTLENBQUEsTUFBR0osS0FBSyxFQUFJLElBQUksRUFBQUwsY0FBQSxHQUFBTyxDQUFBLFNBQUcsQ0FBQyxHQUFBUCxjQUFBLEdBQUFPLENBQUEsU0FBR0YsS0FBSyxDQUFDTyxNQUFNLEdBQUFaLGNBQUEsR0FBQVMsQ0FBQSxNQUMvQyxHQUFJLENBQUFULGNBQUEsR0FBQU8sQ0FBQSxVQUFDSyxNQUFNLElBQUFaLGNBQUEsR0FBQU8sQ0FBQSxTQUFJRCxJQUFJLENBQUcsQ0FBQyxFQUFFLENBQUFOLGNBQUEsR0FBQU8sQ0FBQSxTQUFBUCxjQUFBLEdBQUFTLENBQUEsTUFDdkIsTUFBTyxFQUFFLENBQ1gsQ0FBQyxLQUFBVCxjQUFBLEdBQUFPLENBQUEsVUFDRCxHQUFJLENBQUFNLEtBQUssRUFBQWIsY0FBQSxHQUFBUyxDQUFBLE1BQUcsQ0FBQyxFQUNiLEdBQUksQ0FBQUssUUFBUSxFQUFBZCxjQUFBLEdBQUFTLENBQUEsTUFBRyxDQUFDLEVBQ2hCLEtBQU0sQ0FBQU0sTUFBTSxFQUFBZixjQUFBLEdBQUFTLENBQUEsTUFBRyxHQUFJLENBQUFPLEtBQUssQ0FBQ04sSUFBSSxDQUFDTyxJQUFJLENBQUNMLE1BQU0sQ0FBR04sSUFBSSxDQUFDLENBQUMsRUFBQU4sY0FBQSxHQUFBUyxDQUFBLE1BRWxELE1BQU9JLEtBQUssQ0FBR0QsTUFBTSxDQUFFLENBQUFaLGNBQUEsR0FBQVMsQ0FBQSxNQUNyQk0sTUFBTSxDQUFDRCxRQUFRLENBQUMsQ0FBR1osS0FBSyxDQUFDRyxLQUFLLENBQUVRLEtBQUssQ0FBR0EsS0FBSyxFQUFJUCxJQUFLLENBQUMsQ0FDekQsQ0FBQ04sY0FBQSxHQUFBUyxDQUFBLE1BQ0QsTUFBTyxDQUFBTSxNQUFNLENBQ2YsQ0FFQSxjQUFlLENBQUFYLEtBQUsiLCJpZ25vcmVMaXN0IjpbXX0=