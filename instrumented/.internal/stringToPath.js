function cov_17idmkhprk(){var path="D:\\Msc in DS-Course Materials\\Software Testing\\COMP.SE.200-Part 2\\src\\.internal\\stringToPath.js";var hash="7158276a29c02fd6288049501087681547155193";var global=new Function("return this")();var gcv="__coverage__";var coverageData={path:"D:\\Msc in DS-Course Materials\\Software Testing\\COMP.SE.200-Part 2\\src\\.internal\\stringToPath.js",statementMap:{"0":{start:{line:3,column:22},end:{line:3,column:39}},"1":{start:{line:4,column:21},end:{line:4,column:31}},"2":{start:{line:5,column:19},end:{line:17,column:8}},"3":{start:{line:26,column:21},end:{line:42,column:2}},"4":{start:{line:27,column:17},end:{line:27,column:19}},"5":{start:{line:28,column:2},end:{line:30,column:3}},"6":{start:{line:29,column:4},end:{line:29,column:19}},"7":{start:{line:31,column:2},end:{line:40,column:4}},"8":{start:{line:32,column:14},end:{line:32,column:19}},"9":{start:{line:33,column:4},end:{line:38,column:5}},"10":{start:{line:34,column:6},end:{line:34,column:49}},"11":{start:{line:36,column:9},end:{line:38,column:5}},"12":{start:{line:37,column:6},end:{line:37,column:29}},"13":{start:{line:39,column:4},end:{line:39,column:20}},"14":{start:{line:41,column:2},end:{line:41,column:15}}},fnMap:{"0":{name:"(anonymous_0)",decl:{start:{line:26,column:35},end:{line:26,column:36}},loc:{start:{line:26,column:47},end:{line:42,column:1}},line:26},"1":{name:"(anonymous_1)",decl:{start:{line:31,column:29},end:{line:31,column:30}},loc:{start:{line:31,column:70},end:{line:40,column:3}},line:31}},branchMap:{"0":{loc:{start:{line:28,column:2},end:{line:30,column:3}},type:"if",locations:[{start:{line:28,column:2},end:{line:30,column:3}},{start:{line:28,column:2},end:{line:30,column:3}}],line:28},"1":{loc:{start:{line:33,column:4},end:{line:38,column:5}},type:"if",locations:[{start:{line:33,column:4},end:{line:38,column:5}},{start:{line:33,column:4},end:{line:38,column:5}}],line:33},"2":{loc:{start:{line:36,column:9},end:{line:38,column:5}},type:"if",locations:[{start:{line:36,column:9},end:{line:38,column:5}},{start:{line:36,column:9},end:{line:38,column:5}}],line:36}},s:{"0":0,"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0,"14":0},f:{"0":0,"1":0},b:{"0":[0,0],"1":[0,0],"2":[0,0]},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"7158276a29c02fd6288049501087681547155193"};var coverage=global[gcv]||(global[gcv]={});if(!coverage[path]||coverage[path].hash!==hash){coverage[path]=coverageData;}var actualCoverage=coverage[path];{// @ts-ignore
cov_17idmkhprk=function(){return actualCoverage;};}return actualCoverage;}cov_17idmkhprk();import memoizeCapped from'./memoizeCapped.js';const charCodeOfDot=(cov_17idmkhprk().s[0]++,'.'.charCodeAt(0));const reEscapeChar=(cov_17idmkhprk().s[1]++,/\\(\\)?/g);const rePropName=(cov_17idmkhprk().s[2]++,RegExp(// Match anything that isn't a dot or bracket.
'[^.[\\]]+'+'|'+// Or match property names within brackets.
'\\[(?:'+// Match a non-string expression.
'([^"\'][^[]*)'+'|'+// Or match strings (supports escaping characters).
'(["\'])((?:(?!\\2)[^\\\\]|\\\\.)*?)\\2'+')\\]'+'|'+// Or match "" as the space between consecutive dots or empty brackets.
'(?=(?:\\.|\\[\\])(?:\\.|\\[\\]|$))','g'));/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */const stringToPath=(cov_17idmkhprk().s[3]++,memoizeCapped(string=>{cov_17idmkhprk().f[0]++;const result=(cov_17idmkhprk().s[4]++,[]);cov_17idmkhprk().s[5]++;if(string.charCodeAt(0)===charCodeOfDot){cov_17idmkhprk().b[0][0]++;cov_17idmkhprk().s[6]++;result.push('');}else{cov_17idmkhprk().b[0][1]++;}cov_17idmkhprk().s[7]++;string.replace(rePropName,(match,expression,quote,subString)=>{cov_17idmkhprk().f[1]++;let key=(cov_17idmkhprk().s[8]++,match);cov_17idmkhprk().s[9]++;if(quote){cov_17idmkhprk().b[1][0]++;cov_17idmkhprk().s[10]++;key=subString.replace(reEscapeChar,'$1');}else{cov_17idmkhprk().b[1][1]++;cov_17idmkhprk().s[11]++;if(expression){cov_17idmkhprk().b[2][0]++;cov_17idmkhprk().s[12]++;key=expression.trim();}else{cov_17idmkhprk().b[2][1]++;}}cov_17idmkhprk().s[13]++;result.push(key);});cov_17idmkhprk().s[14]++;return result;}));export default stringToPath;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJjb3ZfMTdpZG1raHByayIsImFjdHVhbENvdmVyYWdlIiwibWVtb2l6ZUNhcHBlZCIsImNoYXJDb2RlT2ZEb3QiLCJzIiwiY2hhckNvZGVBdCIsInJlRXNjYXBlQ2hhciIsInJlUHJvcE5hbWUiLCJSZWdFeHAiLCJzdHJpbmdUb1BhdGgiLCJzdHJpbmciLCJmIiwicmVzdWx0IiwiYiIsInB1c2giLCJyZXBsYWNlIiwibWF0Y2giLCJleHByZXNzaW9uIiwicXVvdGUiLCJzdWJTdHJpbmciLCJrZXkiLCJ0cmltIl0sInNvdXJjZXMiOlsic3RyaW5nVG9QYXRoLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtZW1vaXplQ2FwcGVkIGZyb20gJy4vbWVtb2l6ZUNhcHBlZC5qcydcblxuY29uc3QgY2hhckNvZGVPZkRvdCA9ICcuJy5jaGFyQ29kZUF0KDApXG5jb25zdCByZUVzY2FwZUNoYXIgPSAvXFxcXChcXFxcKT8vZ1xuY29uc3QgcmVQcm9wTmFtZSA9IFJlZ0V4cChcbiAgLy8gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIGRvdCBvciBicmFja2V0LlxuICAnW14uW1xcXFxdXSsnICsgJ3wnICtcbiAgLy8gT3IgbWF0Y2ggcHJvcGVydHkgbmFtZXMgd2l0aGluIGJyYWNrZXRzLlxuICAnXFxcXFsoPzonICtcbiAgICAvLyBNYXRjaCBhIG5vbi1zdHJpbmcgZXhwcmVzc2lvbi5cbiAgICAnKFteXCJcXCddW15bXSopJyArICd8JyArXG4gICAgLy8gT3IgbWF0Y2ggc3RyaW5ncyAoc3VwcG9ydHMgZXNjYXBpbmcgY2hhcmFjdGVycykuXG4gICAgJyhbXCJcXCddKSgoPzooPyFcXFxcMilbXlxcXFxcXFxcXXxcXFxcXFxcXC4pKj8pXFxcXDInICtcbiAgJylcXFxcXScrICd8JyArXG4gIC8vIE9yIG1hdGNoIFwiXCIgYXMgdGhlIHNwYWNlIGJldHdlZW4gY29uc2VjdXRpdmUgZG90cyBvciBlbXB0eSBicmFja2V0cy5cbiAgJyg/PSg/OlxcXFwufFxcXFxbXFxcXF0pKD86XFxcXC58XFxcXFtcXFxcXXwkKSknXG4gICwgJ2cnKVxuXG4vKipcbiAqIENvbnZlcnRzIGBzdHJpbmdgIHRvIGEgcHJvcGVydHkgcGF0aCBhcnJheS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtzdHJpbmd9IHN0cmluZyBUaGUgc3RyaW5nIHRvIGNvbnZlcnQuXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIHByb3BlcnR5IHBhdGggYXJyYXkuXG4gKi9cbmNvbnN0IHN0cmluZ1RvUGF0aCA9IG1lbW9pemVDYXBwZWQoKHN0cmluZykgPT4ge1xuICBjb25zdCByZXN1bHQgPSBbXVxuICBpZiAoc3RyaW5nLmNoYXJDb2RlQXQoMCkgPT09IGNoYXJDb2RlT2ZEb3QpIHtcbiAgICByZXN1bHQucHVzaCgnJylcbiAgfVxuICBzdHJpbmcucmVwbGFjZShyZVByb3BOYW1lLCAobWF0Y2gsIGV4cHJlc3Npb24sIHF1b3RlLCBzdWJTdHJpbmcpID0+IHtcbiAgICBsZXQga2V5ID0gbWF0Y2hcbiAgICBpZiAocXVvdGUpIHtcbiAgICAgIGtleSA9IHN1YlN0cmluZy5yZXBsYWNlKHJlRXNjYXBlQ2hhciwgJyQxJylcbiAgICB9XG4gICAgZWxzZSBpZiAoZXhwcmVzc2lvbikge1xuICAgICAga2V5ID0gZXhwcmVzc2lvbi50cmltKClcbiAgICB9XG4gICAgcmVzdWx0LnB1c2goa2V5KVxuICB9KVxuICByZXR1cm4gcmVzdWx0XG59KVxuXG5leHBvcnQgZGVmYXVsdCBzdHJpbmdUb1BhdGhcbiJdLCJtYXBwaW5ncyI6InM5RUFlWTtBQUFBQSxjQUFBLFNBQUFBLENBQUEsU0FBQUMsY0FBQSxXQUFBQSxjQUFBLEVBQUFELGNBQUEsR0FmWixNQUFPLENBQUFFLGFBQWEsS0FBTSxvQkFBb0IsQ0FFOUMsS0FBTSxDQUFBQyxhQUFhLEVBQUFILGNBQUEsR0FBQUksQ0FBQSxNQUFHLEdBQUcsQ0FBQ0MsVUFBVSxDQUFDLENBQUMsQ0FBQyxFQUN2QyxLQUFNLENBQUFDLFlBQVksRUFBQU4sY0FBQSxHQUFBSSxDQUFBLE1BQUcsVUFBVSxFQUMvQixLQUFNLENBQUFHLFVBQVUsRUFBQVAsY0FBQSxHQUFBSSxDQUFBLE1BQUdJLE1BQU0sQ0FDdkI7QUFDQSxXQUFXLENBQUcsR0FBRyxDQUNqQjtBQUNBLFFBQVEsQ0FDTjtBQUNBLGVBQWUsQ0FBRyxHQUFHLENBQ3JCO0FBQ0Esd0NBQXdDLENBQzFDLE1BQU0sQ0FBRSxHQUFHLENBQ1g7QUFDQSxvQ0FBb0MsQ0FDbEMsR0FBRyxDQUFDLEVBRVI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FDQSxLQUFNLENBQUFDLFlBQVksRUFBQVQsY0FBQSxHQUFBSSxDQUFBLE1BQUdGLGFBQWEsQ0FBRVEsTUFBTSxFQUFLLENBQUFWLGNBQUEsR0FBQVcsQ0FBQSxNQUM3QyxLQUFNLENBQUFDLE1BQU0sRUFBQVosY0FBQSxHQUFBSSxDQUFBLE1BQUcsRUFBRSxFQUFBSixjQUFBLEdBQUFJLENBQUEsTUFDakIsR0FBSU0sTUFBTSxDQUFDTCxVQUFVLENBQUMsQ0FBQyxDQUFDLEdBQUtGLGFBQWEsQ0FBRSxDQUFBSCxjQUFBLEdBQUFhLENBQUEsU0FBQWIsY0FBQSxHQUFBSSxDQUFBLE1BQzFDUSxNQUFNLENBQUNFLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FDakIsQ0FBQyxLQUFBZCxjQUFBLEdBQUFhLENBQUEsVUFBQWIsY0FBQSxHQUFBSSxDQUFBLE1BQ0RNLE1BQU0sQ0FBQ0ssT0FBTyxDQUFDUixVQUFVLENBQUUsQ0FBQ1MsS0FBSyxDQUFFQyxVQUFVLENBQUVDLEtBQUssQ0FBRUMsU0FBUyxHQUFLLENBQUFuQixjQUFBLEdBQUFXLENBQUEsTUFDbEUsR0FBSSxDQUFBUyxHQUFHLEVBQUFwQixjQUFBLEdBQUFJLENBQUEsTUFBR1ksS0FBSyxFQUFBaEIsY0FBQSxHQUFBSSxDQUFBLE1BQ2YsR0FBSWMsS0FBSyxDQUFFLENBQUFsQixjQUFBLEdBQUFhLENBQUEsU0FBQWIsY0FBQSxHQUFBSSxDQUFBLE9BQ1RnQixHQUFHLENBQUdELFNBQVMsQ0FBQ0osT0FBTyxDQUFDVCxZQUFZLENBQUUsSUFBSSxDQUFDLENBQzdDLENBQUMsSUFDSSxDQUFBTixjQUFBLEdBQUFhLENBQUEsU0FBQWIsY0FBQSxHQUFBSSxDQUFBLFVBQUlhLFVBQVUsQ0FBRSxDQUFBakIsY0FBQSxHQUFBYSxDQUFBLFNBQUFiLGNBQUEsR0FBQUksQ0FBQSxPQUNuQmdCLEdBQUcsQ0FBR0gsVUFBVSxDQUFDSSxJQUFJLENBQUMsQ0FBQyxDQUN6QixDQUFDLEtBQUFyQixjQUFBLEdBQUFhLENBQUEsVUFBRCxDQUFDYixjQUFBLEdBQUFJLENBQUEsT0FDRFEsTUFBTSxDQUFDRSxJQUFJLENBQUNNLEdBQUcsQ0FBQyxDQUNsQixDQUFDLENBQUMsQ0FBQXBCLGNBQUEsR0FBQUksQ0FBQSxPQUNGLE1BQU8sQ0FBQVEsTUFBTSxDQUNmLENBQUMsQ0FBQyxFQUVGLGNBQWUsQ0FBQUgsWUFBWSIsImlnbm9yZUxpc3QiOltdfQ==