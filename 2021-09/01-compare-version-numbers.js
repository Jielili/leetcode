/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function (version1, version2) {
  const versionArr1 = version1.split('.')
  const versionArr2 = version2.split('.')
  const len1 = versionArr1.length, len2 = versionArr2.length
  const maxLen = Math.max(len1,len2)
  for (let i = 0; i < len1 || i < len2; i++){
    const v1 = Number(versionArr1[i] || 0), v2 = Number(versionArr2[i] || 0)
    if (v1 < v2) {
      return -1
    } else if(v1>v2){
      return 1
    } else if(i===maxLen-1){
      return 0
    }
  }
};


console.log(compareVersion('1.01','1.0.0'))