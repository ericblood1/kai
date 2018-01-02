var alphabet = '123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ'
var kai = [];

function binaryToNumber(chunk){
	var chars = chunk.split('');
	var theIndex = Number(chars[0]*16)+Number(chars[1]*8)+Number(chars[2]*4)+Number(chars[3]*2)+Number(chars[4]*1);
	return alphabet[theIndex];
}

function fiveBit(binary) {
	var fiveBit = binary.match(/.{1,5}/g);
	var fiveBitClean = [];
	$(fiveBit).each(function(i,v){
		var str = v.toString();
		for (x = 5; x > v.length; x--) { 
			str += '0';
		}
		fiveBitClean[i] = str
	});
	return fiveBitClean;
}



function hex2bin(hex){
	var 	hexArray = hex.split(''),
			concat = [],
			leadingZeroCheck = true;


	$(hexArray).each(function(i,v){
		if (leadingZeroCheck !== true || v != "0") {
			leadingZeroCheck = false;
			var binaryFour = parseInt(v, 16).toString(2);
			function fourCheck(){
				if (binaryFour.length % 4 != 0) {
					binaryFour = '0' + binaryFour;
					fourCheck();
				}		
			}
			if (binaryFour.length % 4 != 0) {
				fourCheck();
			}
			concat.push(binaryFour);
		}
	});
	concat = concat.toString().replace(/,/g,'');
	return concat;
}



function convertToKai(hex) {
	kai = [];
	var binaryInput = hex2bin(hex);
	var array = fiveBit(binaryInput);
	$(array).each(function(i,v){
		kai[i] = binaryToNumber(v);
	});
	kai = kai.toString().replace(/,/g,'');
	return kai
}
