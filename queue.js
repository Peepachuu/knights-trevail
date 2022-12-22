const queue = function() {
    let data = [];
    let revData = [];

    function pop() {
        if (revData.length == 0) {
            revData = data.reverse();
            data = [];
        }
        return revData.pop();
    }

    function head() {
        if (revData.length == 0) {
            revData = data.reverse();
            data = [];
        }
        return revData[revData.length - 1];
    }

    function push(item) {
        data.push(item);
    }

    function length() {
        return data.length + revData.length;
    }

    return {
        pop,
        push,
        length,
        head
    }
};

module.exports = queue;