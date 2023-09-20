import lang from './lang'
import filterDefaultConfig from './filterDefaultConfig'

const configTest = [
    { name: lang.template("P_YS_SCM_PU_0000028707", "商家") /* "商家" */, code: "businessFilter" }
]
const test = [
    { name: 'lin', age: 18 },
    { name: 'zhang', age: 18 }
]
console.log("test", test);
console.log("configTest", configTest);
console.log("lang", lang);
console.log("filterDefaultConfig", filterDefaultConfig);