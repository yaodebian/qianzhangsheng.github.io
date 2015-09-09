Array.prototype.swap = function (i, j) {
    var temp = this[i];
    this[i] = this[j];
    this[j] = temp;
};

Array.prototype.bubbleSort = function () {
    for (var i = this.length - 1; i > 0; --i) {
        for (var j = 0; j < i; ++j) {
            if (this[j] > this[j + 1]) this.swap(j, j + 1);
        }
    }
};

Array.prototype.selectionSort = function () {
    for (var i = 0; i < this.length; ++i) {
        var index = i;
        for (var j = i + 1; j < this.length; ++j) {
            if (this[j] < this[index]) index = j;
        }
        this.swap(i, index);
    }
};

Array.prototype.insertionSort = function () {
    for (var i = 1; i < this.length; ++i) {
        var j = i, value = this[i];
        while (j > 0 && this[j - 1] > value) {
            this[j] = this[j - 1];
            --j;
        }
        this[j] = value;
    }
};

Array.prototype.shellSort = function () {
    for (var step = this.length >> 1; step > 0; step >>= 1) {
        for (var i = 0; i < step; ++i) {
            for (var j = i + step; j < this.length; j += step) {
                var k = j, value = this[j];
                while (k >= step && this[k - step] > value) {
                    this[k] = this[k - step];
                    k -= step;
                }
                this[k] = value;
            }
        }
    }
};

Array.prototype.quickSort = function (s, e) {
    if (s == null) s = 0;
    if (e == null) e = this.length - 1;
    if (s >= e) return;
    this.swap((s + e) >> 1, e);
    var index = s - 1;
    for (var i = s; i <= e; ++i) {
        if (this[i] <= this[e]) this.swap(i, ++index);
    }
    this.quickSort(s, index - 1);
    this.quickSort(index + 1, e);
};

Array.prototype.stackQuickSort = function () {
    var stack = [0, this.length - 1];
    while (stack.length > 0) {
        var e = stack.pop(), s = stack.pop();
        if (s >= e) continue;
        this.swap((s + e) >> 1, e);
        var index = s - 1;
        for (var i = s; i <= e; ++i) {
            if (this[i] <= this[e]) this.swap(i, ++index);
        }
        stack.push(s, index - 1, index + 1, e);
    }
};

Array.prototype.mergeSort = function (s, e, b) {
    if (s == null) s = 0;
    if (e == null) e = this.length - 1;
    if (b == null) b = new Array(this.length);
    if (s >= e) return;
    var m = (s + e) >> 1;
    this.mergeSort(s, m, b);
    this.mergeSort(m + 1, e, b);
    for (var i = s, j = s, k = m + 1; i <= e; ++i) {
        b[i] = this[(k > e || j <= m && this[j] < this[k]) ? j++ : k++];
    }
    for (var i = s; i <= e; ++i) this[i] = b[i];
};

Array.prototype.heapSort = function () {
    for (var i = 1; i < this.length; ++i) {
        for (var j = i, k = (j - 1) >> 1; k >= 0; j = k, k = (k - 1) >> 1) {
            if (this[k] >= this[j]) break;
            this.swap(j, k);
        }
    }
    for (var i = this.length - 1; i > 0; --i) {
        this.swap(0, i);
        for (var j = 0, k = (j + 1) << 1; k <= i; j = k, k = (k + 1) << 1) {
            if (k == i || this[k] < this[k - 1]) --k;
            if (this[k] <= this[j]) break;
            this.swap(j, k);
        }
    }
};

function generate() {
    var max = parseInt(txtMax.value), count = parseInt(txtCount.value);
    if (isNaN(max) || isNaN(count)) {
        alert("个数和最大值必须是一个整数");
        return;
    }
    var array = [];
    for (var i = 0; i < count; ++i) array.push(Math.round(Math.random() * max));
    txtInput.value = array.join("\n");
    txtOutput.value = "";
}

function demo(type) {
    var array = txtInput.value == "" ? [] : txtInput.value.replace().split("\n");
    for (var i = 0; i < array.length; ++i) array[i] = parseInt(array[i]);
    var t1 = new Date();
    eval("array." + type + "Sort()");
    var t2 = new Date();
    lblTime.innerText = t2.valueOf() - t1.valueOf();
    txtOutput.value = array.join("\n");
}