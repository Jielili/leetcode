/**
 * @param {number[][]} routes
 * @param {number} source
 * @param {number} target
 * @return {number}
 */
var numBusesToDestination = function (routes, source, target) {
    if(source === target){
        return 0;
    }
    const queue1 = [], queue2 = [];
    const seen1 = new Set(), seen2 = new Set(), stations = new Map();
    let step = [0, 0];
    for (let i = 0; i < routes.length; i++) {
        routes[i].forEach(station => {
            if(!stations.has(station)){
                stations.set(station, []);
            }
            stations.get(station).push(i);
        })
        if (routes[i].includes(source)) {
            queue1.push(i);
            seen1.add(i);
        }
        if (routes[i].includes(target)) {
            if (seen1.has(i)) {
                return 1;
            }
            queue2.push(i);
            seen2.add(i);
        }
    }
    queue1.length > 0 && step[0]++;
    queue2.length > 0 && step[1]++;
    const get = (routeIndex) => {
        const res = [];
        routes[routeIndex].forEach(station => {
            res.splice(res.length,0,...stations.get(station));
        })
        return [...new Set(res)];
    }

    const update = (queue, seen, index) => {
        const len = queue.length;
        step[index]++;
        for (let i = 0; i < len; i++) {
            const route = queue.shift();
            const nextRoutes = get(route);
            for (let nextRoute of nextRoutes) {
                if (!seen.has(nextRoute)) {
                    if (index === 0 && seen2.has(nextRoute) || index === 1 && seen1.has(nextRoute)) {
                        return step[0] + step[1] -1;
                    }
                    queue.push(nextRoute);
                    seen.add(nextRoute);
                }
            }
        }
        return -1;
    }

    while (queue1.length > 0 && queue2.length > 0) {
        let s = -1;
        if (queue1.length <= queue2.length) {
            s = update(queue1, seen1, 0);
        } else {
            s = update(queue2, seen2, 1);
        }
        if (s !== -1) {
            return s;
        }
    }
    return -1;
};

console.log(numBusesToDestination([[1,2],[2,3],[3,6],[3,4],[4,5,6]], 1,6))