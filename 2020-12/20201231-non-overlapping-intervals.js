/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function(intervals) {
    let process = new Map();
    let deleteKey = [];
    for(let i of intervals.keys()){
        for(let j=i+1;j<intervals.length;j++){
            if(intervals[i][0]==intervals[j][0]&&intervals[i][1]==intervals[j][1]){
                !deleteKey.includes(j)&&deleteKey.push(j);
            }
        }
    }
    for(let i of intervals.keys()){
        if(deleteKey.includes(i)){
            continue;
        }
        for(let j=i+1;j<intervals.length;j++){
            if(deleteKey.includes(j)){
                continue;
            }
            if(intervals[i][1]<=intervals[j][0]||intervals[j][1]<=intervals[i][0]){
                continue;
            }else{
                process.has(i)&&process.get(i).push(j);
                process.has(i)||process.set(i,[j]);
                process.has(j)&&process.get(j).push(i);
                process.has(j)||process.set(j,[i]);
            }
        }
    }
    while(process.size>0){
        let maxKey=-1;
        for(let item of process.entries()){
            if(item[1].length>(process.get(maxKey)?.length||0)){
                maxKey=item[0];
            }else if ((item[1].length==(process.get(maxKey)?.length||0))&&(intervals[item[0]][1]-intervals[item[0]][0])>(intervals[maxKey][1]-intervals[maxKey][0])){
                maxKey = item[0];
            }
        }
        process.delete(maxKey);
        deleteKey.push(maxKey);
        for(let item of process.entries()){
            if(item[1].includes(maxKey)){
                item[1].splice(item[1].indexOf(maxKey),1);
                item[1].length==0&&process.delete(item[0]);
            }
        }
    }
    console.log(deleteKey);
    return deleteKey.length;
};

console.log(eraseOverlapIntervals([[0,2],[1,3],[1,3],[2,4],[3,5],[3,5],[4,6]]));