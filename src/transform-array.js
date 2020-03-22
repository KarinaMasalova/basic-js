module.exports = function transform(arr) {

    if(!Array.isArray(arr)) throw new Error;

    let controls = ['--discard-next', '--discard-prev', '--double-next', '--double-prev'];
   
    let newArr = [];

    for (let i = 0; i < arr.length; i++) {
        if ( !controls.includes(arr[i]) ) newArr.push(arr[i]);

        if ( arr[i] == controls[0] && arr[i + 1] !== undefined) i++;
        if ( arr[i] == controls[1]) newArr.pop();
        if ( arr[i] == controls[2] && arr[i + 1] !== undefined) newArr.push(arr[i + 1]);
        if ( arr[i] == controls[3] && arr[i - 1] !== undefined) newArr.push(arr[i - 1]);
    }

    return newArr;
};