function cov_1qvx0f5kpa(){var path="D:\\Msc in DS-Course Materials\\Software Testing\\COMP.SE.200-Part 2\\src\\camelCase.js";var hash="894f5ee1a0f798b4b7896121c6aae3ce5f0a27ba";var global=new Function("return this")();var gcv="__coverage__";var coverageData={path:"D:\\Msc in DS-Course Materials\\Software Testing\\COMP.SE.200-Part 2\\src\\camelCase.js",statementMap:{"0":{start:{line:24,column:18},end:{line:29,column:1}},"1":{start:{line:25,column:2},end:{line:28,column:9}},"2":{start:{line:26,column:4},end:{line:26,column:29}},"3":{start:{line:27,column:4},end:{line:27,column:53}}},fnMap:{"0":{name:"(anonymous_0)",decl:{start:{line:24,column:18},end:{line:24,column:19}},loc:{start:{line:25,column:2},end:{line:28,column:9}},line:25},"1":{name:"(anonymous_1)",decl:{start:{line:25,column:59},end:{line:25,column:60}},loc:{start:{line:25,column:84},end:{line:28,column:3}},line:25}},branchMap:{"0":{loc:{start:{line:27,column:21},end:{line:27,column:52}},type:"cond-expr",locations:[{start:{line:27,column:29},end:{line:27,column:45}},{start:{line:27,column:48},end:{line:27,column:52}}],line:27}},s:{"0":0,"1":0,"2":0,"3":0},f:{"0":0,"1":0},b:{"0":[0,0]},_coverageSchema:"1a1c01bbd47fc00a2c39e90264f33305004495a9",hash:"894f5ee1a0f798b4b7896121c6aae3ce5f0a27ba"};var coverage=global[gcv]||(global[gcv]={});if(!coverage[path]||coverage[path].hash!==hash){coverage[path]=coverageData;}var actualCoverage=coverage[path];{// @ts-ignore
cov_1qvx0f5kpa=function(){return actualCoverage;};}return actualCoverage;}cov_1qvx0f5kpa();import upperFirst from'./upperFirst.js';import words from'./words.js';import toString from'./toString.js';/**
 * Converts `string` to [camel case](https://en.wikipedia.org/wiki/CamelCase).
 *
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to convert.
 * @returns {string} Returns the camel cased string.
 * @see lowerCase, kebabCase, snakeCase, startCase, upperCase, upperFirst
 * @example
 *
 * camelCase('Foo Bar')
 * // => 'fooBar'
 *
 * camelCase('--foo-bar--')
 * // => 'fooBar'
 *
 * camelCase('__FOO_BAR__')
 * // => 'fooBar'
 */cov_1qvx0f5kpa().s[0]++;const camelCase=string=>{cov_1qvx0f5kpa().f[0]++;cov_1qvx0f5kpa().s[1]++;return words(toString(string).replace(/['\u2019]/g,'')).reduce((result,word,index)=>{cov_1qvx0f5kpa().f[1]++;cov_1qvx0f5kpa().s[2]++;word=word.toLowerCase();cov_1qvx0f5kpa().s[3]++;return result+(index?(cov_1qvx0f5kpa().b[0][0]++,upperFirst(word)):(cov_1qvx0f5kpa().b[0][1]++,word));},' ');};export default camelCase;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJjb3ZfMXF2eDBmNWtwYSIsImFjdHVhbENvdmVyYWdlIiwidXBwZXJGaXJzdCIsIndvcmRzIiwidG9TdHJpbmciLCJzIiwiY2FtZWxDYXNlIiwic3RyaW5nIiwiZiIsInJlcGxhY2UiLCJyZWR1Y2UiLCJyZXN1bHQiLCJ3b3JkIiwiaW5kZXgiLCJ0b0xvd2VyQ2FzZSIsImIiXSwic291cmNlcyI6WyJjYW1lbENhc2UuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHVwcGVyRmlyc3QgZnJvbSAnLi91cHBlckZpcnN0LmpzJ1xuaW1wb3J0IHdvcmRzIGZyb20gJy4vd29yZHMuanMnXG5pbXBvcnQgdG9TdHJpbmcgZnJvbSAnLi90b1N0cmluZy5qcydcblxuLyoqXG4gKiBDb252ZXJ0cyBgc3RyaW5nYCB0byBbY2FtZWwgY2FzZV0oaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvQ2FtZWxDYXNlKS5cbiAqXG4gKiBAc2luY2UgMy4wLjBcbiAqIEBjYXRlZ29yeSBTdHJpbmdcbiAqIEBwYXJhbSB7c3RyaW5nfSBbc3RyaW5nPScnXSBUaGUgc3RyaW5nIHRvIGNvbnZlcnQuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBjYW1lbCBjYXNlZCBzdHJpbmcuXG4gKiBAc2VlIGxvd2VyQ2FzZSwga2ViYWJDYXNlLCBzbmFrZUNhc2UsIHN0YXJ0Q2FzZSwgdXBwZXJDYXNlLCB1cHBlckZpcnN0XG4gKiBAZXhhbXBsZVxuICpcbiAqIGNhbWVsQ2FzZSgnRm9vIEJhcicpXG4gKiAvLyA9PiAnZm9vQmFyJ1xuICpcbiAqIGNhbWVsQ2FzZSgnLS1mb28tYmFyLS0nKVxuICogLy8gPT4gJ2Zvb0JhcidcbiAqXG4gKiBjYW1lbENhc2UoJ19fRk9PX0JBUl9fJylcbiAqIC8vID0+ICdmb29CYXInXG4gKi9cbmNvbnN0IGNhbWVsQ2FzZSA9IChzdHJpbmcpID0+IChcbiAgd29yZHModG9TdHJpbmcoc3RyaW5nKS5yZXBsYWNlKC9bJ1xcdTIwMTldL2csICcnKSkucmVkdWNlKChyZXN1bHQsIHdvcmQsIGluZGV4KSA9PiB7XG4gICAgd29yZCA9IHdvcmQudG9Mb3dlckNhc2UoKVxuICAgIHJldHVybiByZXN1bHQgKyAoaW5kZXggPyB1cHBlckZpcnN0KHdvcmQpIDogd29yZClcbiAgfSwgJyAnKVxuKVxuXG5leHBvcnQgZGVmYXVsdCBjYW1lbENhc2VcbiJdLCJtYXBwaW5ncyI6Imk1Q0FlWTtBQUFBQSxjQUFBLFNBQUFBLENBQUEsU0FBQUMsY0FBQSxXQUFBQSxjQUFBLEVBQUFELGNBQUEsR0FmWixNQUFPLENBQUFFLFVBQVUsS0FBTSxpQkFBaUIsQ0FDeEMsTUFBTyxDQUFBQyxLQUFLLEtBQU0sWUFBWSxDQUM5QixNQUFPLENBQUFDLFFBQVEsS0FBTSxlQUFlLENBRXBDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBbEJBSixjQUFBLEdBQUFLLENBQUEsTUFtQkEsS0FBTSxDQUFBQyxTQUFTLENBQUlDLE1BQU0sRUFDdkIsQ0FBQVAsY0FBQSxHQUFBUSxDQUFBLE1BQUFSLGNBQUEsR0FBQUssQ0FBQSxhQUFBRixLQUFLLENBQUNDLFFBQVEsQ0FBQ0csTUFBTSxDQUFDLENBQUNFLE9BQU8sQ0FBQyxZQUFZLENBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQ0MsTUFBTSxDQUFDLENBQUNDLE1BQU0sQ0FBRUMsSUFBSSxDQUFFQyxLQUFLLEdBQUssQ0FBQWIsY0FBQSxHQUFBUSxDQUFBLE1BQUFSLGNBQUEsR0FBQUssQ0FBQSxNQUNoRk8sSUFBSSxDQUFHQSxJQUFJLENBQUNFLFdBQVcsQ0FBQyxDQUFDLENBQUFkLGNBQUEsR0FBQUssQ0FBQSxNQUN6QixNQUFPLENBQUFNLE1BQU0sRUFBSUUsS0FBSyxFQUFBYixjQUFBLEdBQUFlLENBQUEsU0FBR2IsVUFBVSxDQUFDVSxJQUFJLENBQUMsR0FBQVosY0FBQSxHQUFBZSxDQUFBLFNBQUdILElBQUksRUFBQyxDQUNuRCxDQUFDLENBQUUsR0FBRyxDQUFDLENBQUQsQ0FDUCxDQUVELGNBQWUsQ0FBQU4sU0FBUyIsImlnbm9yZUxpc3QiOltdfQ==