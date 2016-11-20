function check(obj){
	var boxs = obj.parentNode.parentNode.childNodes;
	var text = getChild(boxs,"DIV")[0].getElementsByTagName("input")[0];
	var p = getChild(boxs,"P")[0];
	if(etLength(text.value)>0&&etLength(text.value)<3||etLength(text.value)>16){
			p.innerHTML = "长度为4~16个字符";
			p.style.color="red";

		}else if(etLength(text.value) == 0){
			p.innerHTML = "不能为空";
			p.style.color="red";
			console.log("1");
		}else{
			p.innerHTML = "名称格式正确";
			p.style.color="green";
		}
	}


function getChild(boxs,name){
	var box = new Array();
	for(var i=0;i<boxs.length;i++){
		console.log(boxs[i].nodeName)
		if(boxs[i].nodeName == name){
			box.push(boxs[i]);
		}
	}
	return box;
}

function etLength(str) {  
    ///<summary>获得字符串实际长度，中文2，英文1</summary>  
    ///<param name="str">要获得长度的字符串</param>  
    var realLength = 0, len = str.length, charCode = -1;  
    for (var i = 0; i < len; i++) {  
        charCode = str.charCodeAt(i);  
        if (charCode >= 0 && charCode <= 128) realLength += 1;  
        else realLength += 2;  
    }  
    return realLength;
};