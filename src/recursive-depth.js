module.exports = class DepthCalculator {
    calculateDepth(arr) {
        if(Array.isArray(arr)) {
            let depth = 0;
            arr.forEach(item => {
                depth = Math.max(depth, this.calculateDepth(item));
            });
            return ++depth;
        } else return 0;
    }
}