/*
* @Author: 木木
* @Date:   2017-09-09 15:11:21
* @Last Modified by:   木木
* @Last Modified time: 2017-09-11 14:09:24
*/
	// 金字塔
  	function jinzita(rows){
	var i,j,a;
	for(i=1;i<=rows;i++){
		for(a=0;a<=rows-i;a++){
			document.write('-')
		}
		for(j=1;j<=2*i-1;j++){
		 document.write('*');
		}
		document.write('<br>')
	}
	}
	// jinzita(4)

    // 数组中求最大值
        function max1(arr1){
		// var max =14,i;
		for(i=0;i<arr1.length;i++){
			if(arr[i]>max){
				max=arr[i];
			}
		}
			console.log(max);
        }
        // max1()
    // 数组去空
    function arrqukong(arr2) {  
 	// var arr2=[14,52,30,,72,36,44,89,,77,99,51];
 	var newarr=[],i;
 	for(i=0;i<arr.length;i++){
 		if (arr[i]==undefined) {
 			continue;
 		}
 		 newarr[newarr.length]=arr[i];
 	}
 	console.log(newarr);
 	} 
 	// arrqukong()

// 数组排序
        function arrpaixu(){
		// var arr3=[14,52,30,72,36,44,89,77,99,51];
		for(i=0;i<arr.length;i++){
			for(j=i+1;j<arr.length;j++){
				if (arr[i]>arr[j]) {
                    var temp=arr[i];
                    arr[i]=arr[j];
                    arr[j]=temp;
				}
			}
		}
			console.log(arr);
        }
        // arrpaixu()

 
    // 二维数组求最大值
  function arr4max(arr4){
  // var arr4 =[
  //      [12,43,15],
  //      [25,32,77],
  //      [99,88,77]
  // ]
  var i,j,max=12;
   for(i=0;i<arr.length;i++){
   	  for(j=0;j<arr[i].length;j++){
   	  	if (arr[i][j]>max) {
   	  	max=arr[i][j];
   	  }
   	  }
   }
   console.log(max);
   }

   // arr4max()
	// 正方形表格
	function table(rows,cols){
		var i,j;
			document.write('<table border=1 cellspacing=0 cellpadding=15>');
			for(i=1;i<=rows;i+=1){
				if(i%2==0){
					document.write('<tr bgcolor=red>');
				}else{
					document.write('<tr style="background:green">');
				}
				
				 for(var j=1;j<=cols;j+=1){
		    	document.write('<td>'+i+'-'+j+'</td>');
		    }
				document.write('</tr>');
		}
			document.write('</table>');
		}
		// table(2,3)

// 判断一个数组中是否有某一个特定值，存在则返回一个true，不存在返回一个false
   function exist(arr,value){
   	if(!(typeof arr=='object' && arguments.length>1)){
   		return '输入错误';
   	}
   	for(var i=0;i<arr.length;i++){
   		if(arr[i]==value){
   			return true;
   		}
   	}
            return false;
   }


// 映射：任意一个数组，判断是否存在某个特定的值，如果存在，写出它的第一次出现下标
// var arr8=[1,3,5,7,9,2,4];
// var result=indexof(arr8,function newfn(value){
// 	if(value==1){
// 		return value;
// 	}
// })
// alert(result);
function indexof(arr,fn){
	for(var i=0;i<arr.length;i++){
		if(fn(arr[i])){
			return i;
		}
	}
	 return 'no';
}


// 数组反转，push添加

// var arr9=[1,2,3,4,5]
// function reverse(arr){
// 	var newarr=[]
// 	for(var i=arr.length-1;i>=0;i--){
//         push(newarr,arr[i])
// 	}
// 	return newarr;
// }
//  var result=reverse(arr9)
//  alert(result)
function push(arr,...rest){
	for(var i=0;i<rest.length;i++){
		arr[arr.length]=rest[i];
	}
}


// 万能添加删除
// 删除
// var arr10=[1,2,3,4,5,6,7,8];
// alert(splicedelete(arr10,0,2));
function splicedelete(arr,pos,num){
	var newarr=[];
	for(i=0;i<arr.length;i++){
		if (i>=pos && i<pos+num) {
			continue;
		}
		newarr[newarr.length]=arr[i]
	}
	return newarr;
}

// 添加,对任意一个数组，在一个位置添加别的元素
// var arr11=[1,2,3,4,5]
// console.log(spliceadd(arr11,1,'x','y','z'))
function spliceadd(arr,pos,...rest){
  var newarr=[];
  for(var i=0;i<pos;i++){
  	newarr[newarr.length]=arr[i]
  }
  for(i=0;i<rest.length;i++){
  	newarr[newarr.length]=rest[i]
  }
  for(i=pos;i<arr.length;i++){
  	newarr[newarr.length]=arr[i]
  }
  return newarr;
}


// 对任意一个数组，在一个位置添加别的元素或者删除元素
// var arr12=[1,2,3,4,5]
// alert(splice(arr12,2,0,'x','y','z'))
function splice(arr,pos,num,...rest){
  var newarr=splicedelete(arr,pos,num)
if (rest.length>0) {
        newarr=spliceadd(arr,pos,...rest);
	}
return newarr
}

// 映射：任意一个数组，只要满足一个条件，则返回一个true
function some(arr,fn){
	for(var i=0;i<arr.length;i++){
		if(fn(arr[i])){
			return true;
		}
	}
	return false;
}

// var arr13=[1,2,3,4]
// var result=some(arr13,function fn(value){
// 	return value==5;
// })
// alert(result)



// 映射：任意一个数组，只要有一个条件不满足，则返回一个false;所有条件都满足，返回true
function every(arr,fn){
	for(var i=0;i<arr.length;i++){
		if(!fn(arr[i])){
			return false;
		}
	}
	return true;
}

// 递归函数

// function copy(arr){
// 	var newarr=[];
// 	for(var i=0;i<arr.length;i++){
// 	 if (typeof arr[i]=='object') {
// 			newarr[i]=copy(arr[i]);
// 		}else{
// 			newarr[i]=arr[i];
// 		}
// 	}
// 	return newarr;
// }


