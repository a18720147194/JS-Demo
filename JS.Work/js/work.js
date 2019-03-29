function play (obj,arrt,sd,value,callback){
	clearInterval(obj.times);
	now = parseInt(getStyle(obj,arrt));
	if(now>=value){
		sd = -sd;
	}
	obj.times = setInterval(function(){
		var oldValue = parseInt(getStyle(obj,arrt));
		var newValue = oldValue + sd ;
		if(sd>0){ 
			if(newValue>=value){
				newValue = value ;
			}
				obj.style[arrt] = newValue + "px";
			if(newValue==value){
				clearInterval(obj.times);
				callback && callback();
			}
		
		}else{
			if(newValue<=value){
				newValue = value ;
			}
				obj.style[arrt] = newValue + "px";
			if(newValue==value){
				clearInterval(obj.times);
				callback && callback();
			}
		}   
		
		
	},30);
}
function getStyle(obj ,name){
	if(window.getComputedStyle){
		return getComputedStyle(obj,null)[name];
	}else{
		return obj.currentStyle[name];
	}
};

//添加类
function addClass (obj,cn){
	if(!hasClass(obj,cn)){
		obj.className += " "+cn;
	}
	
}
//删除类
function removeClass (obj,cn){
	if(hasClass(obj,cn)){
		var reg = new RegExp("\\b"+cn+"\\b");
		obj.className = obj.className.replace(reg,"");
	}
}
//切换类，有就删，没有就加
function toggleClass (obj,cn){
	if(hasClass(obj,cn)){
		removeClass(obj,cn);
	}else{
		addClass(obj,cn);
	}
}
//判断对象中是否包含该类
function hasClass (obj,cn){
	var reg = new RegExp("\\b"+cn+"\\b");
	return reg.test(obj.className);
}