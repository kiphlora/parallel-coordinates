function sum(arr) {
	var s = 0;
	for (var i=0; i<arr.length; i++) {
		s += arr[i];
	}
	return s;
}

function vecOp(arr, f) {
	var a = [];
	for (var i=0; i<arr.length; i++) {
		a[i] = f(arr[i], i);
	}
	return a;
}

function applyFun(arr, f) {
	var a = [];
	for (var i=0; i<arr.length; i++) {
		var d = arr[i];
		a[i] = f(d, i);
	}
	return a;
}


// arr is an array of arrays
// e.g. x = [0,1,2], y = [5,6,7]; arr = [x,y]  =>  zipped = [[0,5], [1,6], [2,7]]
function zip(arr) {
	var lengths = applyFun(arr, function(d,i){ return d.length; });
	var lengthSet = new Set(lengths);
	if (lengthSet.size != 1) {
		console.log("array lengths not equal");
		return [];
	}

	var len = Array.from(lengthSet)[0];

	var zipped = [];
	for (var k=0; k<len; k++) {
		var z = [];
		for (var i=0; i<arr.length; i++) {
			z[i] = arr[i][k];
		}
		zipped[k] = z;
	}
	return zipped;
}

function unzip(arr) {
	var ndim = arr[0].length;

	var list = [];

	for (var d=0; d<ndim; d++) {
		list[d] = arr.map(function(m){ return m[d]; });
	}

	return list;
}


function areArraysEqual(arr1, arr2) {
	if (arr1.length !== arr2.length) return false;
	for (var i=0; i<arr1.length; i++) {
		if (arr1[i] !== arr2[i]) return false;
	}
	return true;
}

function rep(value, len) {
	var a = [];
	for (var i=0; i<len; i++) {
		a[i] = value;
	}
	return a;
}

function buildArray(len, initVal) {
	var a = [];
	for (var i=0; i<len; i++) {
		a[i] = initVal;
	}
	return a;
}

function buildCustomArray(len, f) {
	var a = [];
	for (var i=0; i<len; i++) {
		a[i] = f(i);
	}
	return a;
}

// returns form: [index in array of max value, max value]
function max(arr) {
	var m = [0, arr[0]];
	for (var i=0; i<arr.length; i++) {
		m = m[1] >= arr[i] ? m : [i, arr[i]];
	}
	return m;
}

// returns form: [index in array of min value, min value]
function min(arr) {
	var m = [0, arr[0]];
	for (var i=0; i<arr.length; i++) {
		m = m[1] <= arr[i] ? m : [i, arr[i]];
	}
	return m;
}

function randInt(min, max) {
	var range = max - min;
	return Math.floor(Math.random() * (range + 1)) + min;
}

function randReal(min, max) {
	return Math.random() * (max - min) + min;
}

function radToDeg(rad) {
	return rad * (180 / Math.PI);
}

function mod(n, m) {
	return n % m >= 0 ? n % m : n % m + m;
}

function freq(array, item) {
	var count = 0;
	for (var i=0; i<array.length; i++) {
		if (array[i] === item) count++;
	}
	return count;
}

function resetCanvasMatrix(canvasContext) {
	canvasContext.setTransform(1, 0, 0, 1, 0, 0);
}

function randParity() {
	return Math.random() <= 0.5 ? -1 : 1;
}

function randInt(min, max) {
	var range = max - min;
	return Math.floor(Math.random() * (range + 1)) + min;
}

function randReal(min, max) {
	return Math.random() * (max - min) + min;
}

function radToDeg(rad) {
	return rad * (180 / Math.PI);
}

function Color(r,g,b,a) {
	this.r = r === undefined || r > 255 || r < 0 ? randInt(0,255) : Math.floor(r);
	this.g = g === undefined || g > 255 || g < 0 ? randInt(0,255) : Math.floor(g);
	this.b = b === undefined || b > 255 || b < 0 ? randInt(0,255) : Math.floor(b);
	this.a = a === undefined || a < 0 || a > 1 ? 1 : a;
}
Color.prototype.rgbString = function(){ return "rgb(" + this.r + "," + this.g + "," + this.b + ")"; };
Color.prototype.rgbaString = function(){ return "rgba(" + this.r + "," + this.g + "," + this.b + "," + this.a + ")"; };

function mod(n, m) {
	return n % m >= 0 ? n % m : n % m + m;
}

// canvas only
function drawLine(pos1, pos2, ctx, c, lw) {
	var linewidth = lw || 1;
	var color = c === undefined ? "#333" : c;
	ctx.beginPath();
	ctx.strokeStyle = color;
	ctx.moveTo(pos1.x, pos1.y);
	ctx.lineTo(pos2.x, pos2.y);
	ctx.lineWidth = linewidth;
	ctx.stroke();
}

function terp(a,b) {
	return function(t) {
		return ((1-t) * a) + (t * b);
	};
}

function seqBy(xMin, xMax, step) {
	var numSeq = Math.floor((xMax - xMin) / step);
	var seq = [];
	for (var i=0; i<=numSeq; i++) {
		var num = xMin + step*i;
		num = parseFloat(num.toFixed(5));
		seq.push(num);
	}
	return seq;
}

function seqLen(xMin, xMax, numOfPoints) {
	var range = (xMax - xMin); console.log(range);
	var step = range / (numOfPoints-1); console.log(step);
	var seq = [];
	for (var i=0; i<numOfPoints; i++) {
		var num = xMin + step*i;
		num = parseFloat(num.toFixed(5));
		seq.push(num);
	}
	return seq;
}



function randColor(a) {
	var r = randInt(0,255);
	var g = randInt(0,255);
	var b = randInt(0,255);

	var c = r + "," + g + "," + b;

	if (a === undefined) return "rgb(" + c + ")";
	else return "rgba(" + c + "," + a + ")";
}
