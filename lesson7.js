var input="爾時，世尊聞者大城搏為行已，作已食作已，後食搏墮過，器上絡衣收攝，兩足洗，坐具世尊施設，如是座中跏趺結，直身作，現前念近住。"
var obj={};
input.split(/[，。]/g,function(m){
		if(!obj[m]) obj[m]=0;
			obj[m]++;
		console.log(obj(m));
		//return obj;
	})
console.log(obj);