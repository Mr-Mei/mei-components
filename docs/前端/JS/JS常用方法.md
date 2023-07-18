# JS常用方法

## 一、字符串

```js
// charAt()方法：可返回字符串中指定位置的字符
let str = "Hello";
let s = str.charAt(1);
console.log(s); // e

// concat() 方法：用于连接两个或多个字符串，该方法没有改变原有字符串，但是会返回连接两个或多个字符串新字符串
let str = "Hello";
let str2 = "World";
let s = str.concat(str2);
console.log(s); // HelloWorld

// indexOf() 方法：可返回某个指定的字符串值在字符串中首次出现的位置，如果没有找到匹配的字符串则返回 -1
let str = "Hello";
let s = str.indexOf("e");
console.log(s); // 1

// includes() 方法：用于判断字符串是否包含指定的子字符串
let str = "Hello";
let s = str.includes("e");
console.log(s); // true

// match() 方法：可在字符串内检索指定的值，或找到一个或多个正则表达式的匹配
let str = "Hello";
let s = str.match(/l/g);
console.log(s); // [ 'l', 'l' ]

// repeat() 方法：字符串复制指定次数
let str = "Hello";
let s = str.repeat(2);
console.log(s); // HelloHello

// replace() 方法：用于在字符串中用一些字符替换另一些字符，或替换一个与正则表达式匹配的子串
let str = "Hello";
let s = str.replace("l", "o");
console.log(s); // Heolo

// replaceAll()方法：用于在字符串中用一些字符替换另一些字符，或替换一个与正则表达式匹配的子串，该函数会替换所有匹配到的子字符串
let str = "Hello";
let s = str.replaceAll("l", "o");
console.log(s); // Heooo

// search() 方法：search() 方法用于检索字符串中指定的子字符串，或检索与正则表达式相匹配的子字符串。返回与指定查找的字符串或者正则表达式相匹配的 String 对象起始位置
let str = "Hello";
let s = str.search("lo");
console.log(s); // 3

// slice() 方法：slice(start, end) 方法可提取字符串的某个部分，并以新的字符串返回被提取的部分
let str = "Hello";
let s = str.slice(1, 2);
console.log(s); // e

// split() 方法：用于把一个字符串分割成字符串数组
let str = "Hello";
let s = str.split("e");
console.log(str); // Hello
console.log(s); // [ 'H', 'llo' ]

// substring() 方法：用于提取字符串中介于两个指定下标之间的字符
let str = "Hello";
let s = str.substring(1, 3);
console.log(str); // Hello
console.log(s); // el

// toLowerCase()和toUpperCase()方法：toLowerCase() 方法用于把字符串转换为小写。toUpperCase() 方法用于把字符串转换为大写
let str = "Hello";
let s = str.toLowerCase();
let s2 = str.toUpperCase();
console.log(str); // Hello
console.log(s); // hello
console.log(s2); // HELLO

// trim() 方法：trim() 方法用于删除字符串的头尾空白符，空白符包括：空格、制表符 tab、换行符等其他空白符等
let str = "    Hello   ";
let s = str.trim();
console.log(str); //    Hello
console.log(s); // Hello

// indexOf() 方法：回指定字符串在字符串中首次出现的位置。匹配不到则返回-1
let str = "Hello";
let s = str.indexOf('H');
console.log(s); // 0

// lastIndexOf：查找字符/子字符串在大字符串中最后一次出现的位置
let str = "Hello";
let s = str.lastIndexOf('l');
console.log(s); // 3
```



## 二、数组方法

```js
// push()功能: 在数组最后一位添加一个或多个元素，并返回新数组的长度，改变原数组。(添加多个元素用逗号隔开)
let arr = [1, 2, "c"];     
let rel = arr.push("A", "B");     
console.log(arr); // [1, 2, "c", "A", "B"]    
console.log(rel); //  5  (数组长度)

// unshift()功能: 在数组第一位添加一个或多个元素，并返回新数组的长度，改变原数组。(添加多个元素用逗号隔开)
let arr = [1, 2, "c"];     
let rel = arr.unshift("A", "B");     
console.log(arr); // [ "A", "B",1, 2, "c"]    
console.log(rel); //  5  (数组长度)

// pop()功能：删除数组的最后一位，并且返回删除的数据，会改变原来的数组。(该方法不接受参数且每次只能删除最后一个)
let arr = [1, 2, "c"];     
let rel = arr.pop();     
console.log(arr); // [1, 2]    
console.log(rel); // c


// shift()功能：删除数组的第一位数据，并且返回被删除的数据，会改变原来的数组。(该方法同pop()；一样不接受参数,且每次只能删除数组第一个)
let arr = ["a","b", "c"];     
let rel = arr.shift();     
console.log(arr); // ['b', "c"]    
console.log(rel); // a

// reverse()功能：将数组的数据进行反转，并且返回反转后的数组，会改变原数组
let arr = [1, 2, 3, "a", "b", "c"];     
let rel = arr.reverse();     
console.log(arr); //    ["c", "b", "a", 3, 2, 1]    
console.log(rel); //    ["c", "b", "a", 3, 2, 1]

/**
	sort();
	功能：是最强大的数组方法之一，用于对数组的元素进行排序，并返回数组。默认排序顺序是根据字符串Unicode码排序的
	语法： arr.sort(function(a,b))
    参数： function可选。用来指定按某种顺序进行排列的函数。如果省略，元素按照转换为的字符串的诸个字符的Unicode位点进行排序。
    具体用法：
    如果 function(a, b) {return: a - b;} ，=> a - b > 0 那么 a 会被排列到 b 之前; (从小到大排序)
    如果 function(a, b) {return: b - a;} ，=> b - a > 0 那么b会被排列到 a 之前； (从大到小排序)
*/
let arr1 = [10, 1, 5, 2, 3];     
arr1.sort();     
console.log(arr1); // [1, 10, 2, 3, 5] 结果并不是我们想要的排序结果，因为它是根据unicode编码来排序的，这也显示了其不稳定性
let arr = [10, 1, 5, 2, 3];     
arr.sort((a, b)=> {       
    return a - b;     
});     
console.log(arr); // [1, 2, 3, 5, 10]
// 元素为对象时（可按其中某个属性来排序）：
let arr1 = [{ name: "老八", age: "38" },{ name: "赵日天", age: "28" },{ name: "龙傲天", age: "48" }];     
arr1.sort((a, b)=> {      
    console.log(a, b);       
    return b.age - a.age; // （按 age 排序（大到小））     
});     
console.log(arr1); // [{ name: "龙傲天", age: "48" },{ name: "老八", age: "38" },{ name: "赵日天", age: "28" }]

/** 
	splice()功能：
	向数组中添加，或从数组删除，或替换数组中的元素，然后返回被删除/替换的元素。可以实现数组的增删改；
	语法： arrayObject.splice(index,howmany,item1,…,itemX)
    参数：参数描述index必需。整数，规定添加/删除项目的位置（元素下标），使用负数可从数组结尾处规定位置。howmany必需。要删除的项目数		量。如果设置为 0，则不会删除项目。item1, …, itemX可选。向数组添加的新项目
*/
// 删除arr()中第三个元素并添加 ”add1“ "add2"元素
let arr = ["a", "b", "c", 2, 3, 6];     
let rel = arr.splice(2, 1, "add1", "add2");     
console.log(arr);   // ["a", "b", 'add1', 'add2', 2, 3, 6]   
console.log(rel);   // ['c']

// concat()功能： 数组的拼接(将多个数组或元素拼接形成一个新的数组)，不改变原数组，如果拼接的是数组 则将数组展开，之后将数组中的每一个元素放到新数组中。如果是其他类型，直接放到新数组中，另外，如果不给该方法任何参数，将返回一个和原数组一样的数组（复制数组）
let arr1 = [1, 2, 3];     
let arr2 = ["a", "b", "c"];     
let arr3 = ["A", "B", "C"];     
let rel = arr1.concat(arr2, arr3);     
console.log(arr1); // [1, 2, 3]
console.log(rel); // [1, 2, 3, 'a', 'b', 'c', 'A', 'B', 'C']

// join()：功能：用特定的字符，将数组拼接形成字符串 (默认",")
let list = ["a", "b", "c", "d"]; // "a-b-c-d"    
let result = list.join("-");     
console.log(result); //"a-b-c-d"    
let result = list.join("/");     
console.log(result); //"a/b/c/d"    
let result = list.join("");      
console.log(result); //"abcd"    
let result = list.join();        
console.log(result); //  a,b,c,d   

/**
	slice();
	功能： 裁切指定位置的数组，返回值为被裁切的元素形成的新数组 ，不改变原数组
	同concat() 方法 slice() 如果不传参数,会使用默认值,得到一个与原数组元素相同的新数组 (复制数组)
    语法： arr[ ].slice(startIndex,endIndex)
    参数:参数描述startIndex起始下标 默认值 0endIndex终止下标 默认值 length,可以接收负数,(倒着数)
    注意！起始下标和终止下标的区间是 左闭右开 [ a ，b) 能取到起始，取不到终止
*/
let list = ["a", "b", "c", "d"];     
let result = list.slice(1, 3);    
console.log(result);  // ["b", "c"]

// toString()功能: 直接将数组转换为字符串，并且返回转换后的新数组，不改变原数组，与join()方法不添加任何参数相同.
let list = ["a", "b", "c", "d"];     
let rel = list.toString();     
console.log(rel);   // a,b,c,d   (字符串类型)

// valueOf()功能: 返回数组的原始值（一般情况下其实就是数组自身）
let list = [1, 2, 3, 4];     
let rel = list.valueOf();     
console.log(list); // [1, 2, 3, 4]    
console.log(rel);  // [1, 2, 3, 4]

// indexOf()功能: 查询某个元素在数组中第一次出现的位置 存在该元素，返回下标，不存在 返回 -1 (可以通过返回值 变相的判断是否存在该元素)
let list = [1, 2, 3, 4];     
let index = list.indexOf(4); 
console.log(index); // 3    
let index = list.indexOf("4");  
console.log(index); // -1   

// lastIndexOf()功能: 查询某个元素在数组中最后一次出现的位置 (或者理解为反向查询第一次出现的位置) 存在该元素，返回下标，不存在 返回 -1 (可以通过返回值 变相的判断是否存在该元素)
let list = [1, 2, 3, 4];     
let index = list.lastIndexOf(4);
console.log(index); // 3    
let index = list.lastIndexOf("4"); 
console.log(index); // -1    

/**	
	forEach()功能: 
	遍历数组，每次循环中执行传入的回调函数 。(注意: forEach() 对于空数组是不会执行回调函数的) 没有返回值，或理解为返回值为				undefined，不改变原数组
	语法:
    arr[].forEach(function(value,index,array){undefined
       //do something
    })
    参数: 
        item:每次循环的当前元素
        index:当前项的索引
        array:原始数组
    数组中有几项，那么传递进去的匿名回调函数就需要执行几次；
*/
let list = [32, 93, 77, 53, 38, 87];     
let res = list.forEach((item, index, array)=> {       
    console.log(item, index, array);     
});     
console.log(res);
// 数组中元素的和
let list = [32, 93, 77, 53, 38, 87];     
let sum = 0;     
list.forEach((item)=> {       
    console.log(item);       
    sum += item;    
});     
console.log(sum);

/**
	map();
    功能: 遍历数组，每次循环时执行传入的回调函数，根据回调函数的返回值，生成一个新的数组，
    同forEach() 方法，但是map()方法有返回值，可以return出来;
    语法:
    arr[].map(function(item,index,array){undefined
      //do something
      return XXX
    })
    参数：
        item:每次循环的当前元素
        index:当前项的索引
        array:原始数组
*/
let list = [32, 93, 77, 53, 38, 87];     
let res = list.map((item, index, array)=> {       
    return item + 5 * 2;     
});    
console.log("原数组", list);     
console.log("新数组", res);

/**
	filter();
    功能: 遍历数组，每次循环时执行传入的回调函数，回调函数返回一个条件，把满足条件的元素筛选出来放到新数组中
    语法:
    arr[].filter(function(item,index,array){undefined
        //do something
      return  XXX //条件
    })
    参数：
        item:每次循环的当前元素
        index:当前项的索引
        array:原始数组
*/
let list = [32, 93, 77, 53, 38, 87];     
let resList = list.filter((item, index, array)=> {       
    return item >= 60; // true || false    
});     
console.log(resList);

/**
    every();
    功能: 遍历数组，每次循环时执行传入的回调函数，回调函数返回一个条件，全都满足返回true 只要有一个不满足 返回false => 判断数组中
    所有的元素是否满足某个条件
*/
let list = [32, 93, 77, 53, 38, 87];     
let result = list.every((item, index, array)=> {       
    console.log(item, index, array);       
    return item >= 50;     
});     
console.log(result); // false

/**
	some();
    功能: 遍历数组，每次循环时执行传入的回调函数，回调函数返回一个条件，只要有一个元素满足条件就返回true，都不满足返回false => 判断
    数组中是否存在，满足某个条件的元素
*/
let list = [32, 93, 77, 53, 38, 87];     
let result = list.some((item, index, array)=> {       
    return item >= 50;     
});     
console.log(result); // true

/**
	reduce();
    功能: 遍历数组，每次循环时执行传入的回调函数，回调函数会返回一个值，将该值作为初始值prev，传入到下一次函数中，返回最终操作的结果;
    语法: arr.reduce(function(prev,item,index,array){})
    参数:
        prev 初始值 (类似求和是 sum=0) 可以设置初始值( 参数)，如果不设置初始值默认是数组中的第一个元素，遍历时从第二个元素开始遍历
        item 每次循环的当前元素
        index 每次循环的当前下标
        array 原数组
*/
// 不设置初始值的累加
let arr = [2, 3, 4, 5];     
let sum = arr.reduce((prev, item, index, array)=> {       
    console.log(prev, item, index, array);      
    return prev + item;     
});     
console.log(arr); //  [2, 3, 4, 5];
console.log(sum); // 14
/**
	解析:第一次循环: prev = 2;item(当前循环元素) = 3 ; index(当前循环元素下标) = 1;原数组 =array;
    因为没有给prev设置初始值,所以prev 的值为数组中第一个元素,遍历从第二个元素开始
    第二次循环:prev = 5; item(当前循环元素) = 4 ; index(当前循环元素下标) = 2;原数组 =array;
    prev = 2+3(上次循环的元素) = 5 ;
    …
    最终prev = 14 ; arr中有四个元素 共循环三次;(因为没设置初始值跳过第一次循环prev默认等于第一个值)
*/

// 设置初始值的累加
let arr = [2, 3, 4, 5];     
let sum = arr.reduce((prev, item, index, array)=> {       
    console.log(prev, item, index, array);       
    return prev + item;    
}, 0);     
console.log(arr); //  [2, 3, 4, 5];
console.log(sum); // 14
/**
	解析: 可以看到与上一次设置初始值相比，最终的结果相同，但是多循环的一次，因为设置了prev的初始值为0，所以循环遍历从第一个元素开始，
	而不设置初始值，循环从第二个元素开始
*/

// reduceRight()功能: 用法同reduce方法，只不过是从右向左执行

// includes()功能: 用来判断一个数组是否包含一个指定的值，如果是返回 true，否则false。
let site = ['runoob', 'google', 'taobao'];   
site.includes('runoob'); // true   
site.includes('baidu'); // false

/**
	Array.from();
	功能: 将一个类数组对象或者可遍历对象转换成一个真正的数组
	注意 将一个类数组对象转换为一个真正的数组，必须具备以下条件：
        1、该 伪数组 / 类数组 对象必须具有length属性，用于指定数组的长度。如果没有length属性，那么转换后的数组是一个空数组。
        2、该 伪数组 / 类数组 对象的属性名必须为数值型或字符串型的数字	
*/
let all = {0: "张飞", 1: "28", 2: "男", 3: ["率土", "鸿图", "三战"], length: 4,};     
let list = Array.from(all);     
console.log(list);['张飞', '28', '男', ['率土', '鸿图', '三战']]     
console.log(Array.isArray(list)); // true

/**
	find();
    功能: 遍历数组 每次循环 执行回调函数，回调函数接受一个条件 返回满足条件的第一个元素，不存在则返回undefined
    参数
        item: 必须， 循环当前元素
        index: 可选，循环当前下标
        array: 可选，当前元素所属的数组对象
*/
let list = [55, 66, 77, 88, 99, 100];     
let index = list.find((item, index, array)=> {       
    console.log(item, index, array);       
    return item > 60;     
});     
console.log(index); // 66 (打印结果为66，每次循环判断当前元素是否满足条件，如果满足直接跳出循环，返回第一个满足条件的元素)

/**
	findIndex();
    功能 :遍历数组，执行回调函数，回调函数接受一个条件，返回满足条件的第一个元素下标，不存在则返回-1
    参数
        item: 必须 ，循环当前元素
        index: 可选 ， 循环当前下标
        array: 可选 ，当前元素所属的数组对象
    注意
        findIndex();和indexOf();不同 (刚接触时乍一看和indexOf()怎么一模一样，仔细看了下才发现大有不同)
        indexOf是传入一个值，找到了也是返回索引，没有找到也是返回-1，属于ES5
        findIndex是传入一个测试条件，也就是函数，找到了返回当前项索引，没有找到返回-1，属于ES6
*/
let list = [55, 66, 77, 88, 99, 100];     
let index = list.findIndex((item, index, array)=> {       
    console.log(item, index, array);       
    return item > 60;     
});     
console.log(index); // 1 (打印结果为1，循环步骤和find()方法一样，但是它返回的是下标，find()返回的是满足条件的元素)
/**
	fill();
    功能 用给定值填充一个数组
    参数
        value 必需。填充的值。
        start 可选。开始填充位置。
        end 可选。停止填充位置 (默认为 array.length)
*/
let result = ["a", "b", "c"].fill("填充", 1, 2);

/**
	flat();
    功能 用于将嵌套的数组"拉平"，变成一维的数组。该方法返回一个新数组，对原数据没有影响。
    注意 默认拉平一次 如果想自定义拉平此处 需要手动传参，如果想全都拉平 传 Infinity
*/
let list = [1, 2, [3, 4, [5]]];     
let arr = list.flat(); // 默认拉平一次    
console.log("拉平一次", arr);     
let arr = list.flat(2); // 拉平2次    
console.log("拉平两次", arr);


// flatMap()功能 flat()和map()的组合版，先通过map()返回一个新数组，再将数组拉平( 只能拉平一次 )
let list = [55, 66, 77, 88, 99, 100];     
let newArr = list.map((item, index)=> {       
    return [item, index];     
});     
console.log("Map方法:", newArr);     
let newArr = list.flatMap((item, index)=>{       
    return [item, index];     
});     
console.log("flatMap方法:", newArr)

// arr.entries()功能：遍历数组的键名和键值
let arr = [1,2,3,4]
let arr1 = arr.entries()
for (let e of arr1) {    
    console.log(e);   // [0,1] [1,2] [2,3] [3,4]
}
/**
	entries() 方法返回迭代数组。
	迭代数组中每个值 前一个是索引值作为 key， 数组后一个值作为 value。
*/

// arr.keys()遍历数组的键名
let arr = [1,2,3,4]
let arr2 = arr.keys() 
console.log(arr2)
for (let key of arr2) { 
    console.log(key); // 0,1,2,3 
}

// arr.values()遍历数组键值
let arr = [1,2,3,4] 
let arr1 = arr.values() 
for (let val of arr1) { 
    console.log(val); // 1,2,3,4 
} 

// 小结：数组的变异及非变异方法（提示：数组的变异：顾名思义，会改变这些方法调用的原始数组）
/**
	非变异方法： filer（），concat（），slice（）深拷贝等这些不会改变原始数组，但总是返回一个新数组，可用新数组替换旧数组。
	变异： push() 和 pop()，shift() 和 unshift()，sort()，splice()
	非变异： join()，concat()，slice()，indexOf() 和 lastIndexOf() （ES5新增），forEach() （ES5新增），some() （ES5新			增）,fliter() (ES5新增)，map() （ES5新增），every() （ES5新增），reduce() 和 reduceRight() （ES5新增）	
*/
```



## 三、对象方法

```js
/**
    Object.is()	是一种判断两个值是否相同的方法。
    语法：Object.is(value1, value2);
    参数：
    value1：要比较的第一个值。
    value2：要比较的第二个值。
    返回值：一个布尔表达式，指示两个参数是否具有相同的值。
*/
// Case 1: Evaluation result is the same as using '==='
Object.is(25, 25);                // true
Object.is('foo', 'bar');          // false
Object.is(foo, foo);              // true
// Case 2: Signed zero
Object.is(0, -0);                 // false
Object.is(0n, -0n);               // true
// Case 3: NaN
Object.is(NaN, 0/0);              // true
Object.is(NaN, Number.NaN)        // true

/**
	Object.assign()	方法用于将所有可枚举的自身属性从一个或多个源对象复制到目标对象
    语法：Object.assign(target, ...sources)
    参数：
        target：目标对象——应用源属性的对象，修改后返回
        sources：源对象——包含你要应用的属性的对象
    返回值：修改后的目标对象
*/
const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };
const returnedTarget = Object.assign(target, source);
console.log(target); // { a: 1, b: 4, c: 5 }
console.log(returnedTarget);  // { a: 1, b: 4, c: 5 }
// 注意：如果源对象中的属性具有相同的键，则目标对象中的属性会被源中的属性覆盖。较晚来源的属性会覆盖较早来源的属性

/**
	Object.entries() 方法返回给定对象自己的可枚举字符串键属性 [key, value] 对的数组
    它类似于使用 for...in 循环进行迭代，除了 for...in 循环还会枚举原型链中的属性。属性的顺序与通过手动循环对象的属性值给出的
    顺序相同
    语法：Object.entries(obj)
    参数：
    obj：要返回其自己的可枚举字符串键属性 [key, value] 对的对象
    返回值：给定对象自己的可枚举字符串键属性 [key, value] 对的数组
*/
const object1 = {name: "David", age: 23};
for (const [key, value] of Object.entries(object1)) {
    console.log(`${key}: ${value}`);
}
// "name: David"
// "age: 23"

/**
	Object.values()方法返回给定对象自己的可枚举属性值的数组，其顺序与 for...in 循环提供的顺序相同
    语法：Object.values(obj)
    参数：
    obj：要返回其可枚举自身属性值的对象
    返回值：包含给定对象自己的可枚举属性值的数组
*/
const object1 = {
    a: 'somestring',
    b: 42,
    c: false
};
console.log(Object.values(object1)); // ["somestring", 42, false]

/**
	Object.prototype.hasOwnProperty()方法返回一个布尔值，指示对象是否具有指定的属性作为它自己的属性
    如果指定的属性是对象的直接属性，则该方法返回 true — 即使值为 null 或未定义。如果该属性是继承的或根本没有声明，则返回 false
    语法：hasOwnProperty(prop)
    参数：prop：要测试的属性的字符串名称或符号
    返回值：如果对象将指定的属性作为自己的属性，则返回true；否则为false
*/
const object1 = {};
object1.property1 = 42;
console.log(object1.hasOwnProperty('property1')); // true
console.log(object1.hasOwnProperty('toString')); // false
console.log(object1.hasOwnProperty('hasOwnProperty')); // false

/**
	Object.keys()方法用于返回给定对象自己的可枚举属性名称的数组，以与普通循环相同的顺序迭代
    语法：Object.keys(obj)
    参数：
    obj：要返回可枚举自身属性的对象
    返回值：表示给定对象的所有可枚举属性的字符串数组
*/
const object1 = {
    a: 'somestring',
    b: 42,
    c: false
};
console.log(Object.keys(object1)); // ["a", "b", "c"]

/**
    Object.prototype.toString()方法返回一个表示对象的字符串。当对象将被表示为文本值或以期望字符串的方式引用对象时，
    将自动调用此方法 id。默认情况下，toString() 方法由从 Object 继承的每个对象继承
    语法：toString()
    返回值：表示对象的字符串
*/

function Dog(name) {
    this.name = name;
}
const dog1 = new Dog('Gabby');
Dog.prototype.toString = function dogToString() {
    return `${this.name}`;
};
console.log(dog1.toString()); // "Gabby"
// 注意：对于 Numbers 和 Big Ints，toString() 采用可选参数 radix，其值必须最小为 2，最大为 36

/**
	Object.freeze()方法冻结一个对象，这意味着它不能再被更改。冻结对象可防止向其添加新属性，防止删除现有属性，防止更改现有属性的
    可枚举性、可配置性或可写性，并防止更改现有属性的值。它还可以防止其原型被更改
    语法：Object.freeze(obj)
    参数：
    obj：要冻结的对象
    返回值：传递给函数的对象
*/
const obj = {
    prop: 42
};
Object.freeze(obj);
obj.prop = 33;
// Throws an error in strict mode
console.log(obj.prop); // 42

// Object.seal()方法用于密封一个对象，使其属性不可添加或删除。该方法接受一个参数：要密封的对象。密封的对象可以修改属性的值，但不能添加或删除属性
```



## 四、日期时间方法

```js
// 当前时间：
new Date()

// 获取完整的年份(4位)
(new Date()).getFullYear();  

// 获取当前月份(0-11,0代表1月)
(new Date()).getMonth(); 

// 获取当前日(1-31)
(new Date()).getDate(); 

// 获取当前星期(0-6,0代表星期天)
(new Date()).getDay(); 

// 获取当前时间的时间戳
(new Date()).getTime(); 

// 获取当前小时数(0-23)
(new Date()).getHours(); 

// 获取当前分钟数(0-59)
(new Date()).getMinutes(); 

// 获取当前秒数(0-59)
(new Date()).getSeconds(); 

// 获取当前毫秒数(0-999)
(new Date()).getMilliseconds();

// 获取当前日期
(new Date()).toLocaleDateString();

// 获取当前时间
(new Date()).toLocaleTimeString(); 

// 获取当前日期与时间  
(new Date()).toLocaleString();  

// 当前周：
function getCurrentWeek() {
    var date = new Date()
    var beginDate = new Date(date.getFullYear(), 0, 1);
    var week = Math.ceil((parseInt((date - beginDate) / (24 * 60 * 60 * 1000)) + 1 + beginDate.getDay()) / 7);
    return week;
}

// 当前月(获取的月份值范围为：0-11，0表示1月份)：
new Date().getMonth()

// 当前年（注意与getYear的区别）：
new Date().getFullYear()

// 当前星期几
function getWeekDate() {
    var now = new Date();
    var day = now.getDay();
    var weeks = new Array("星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六");
    var week = weeks[day];
    return week;
}

// 日期格式化
Date.prototype.format = function (fmt) {
    var o = {
        "M+": this.getMonth() + 1, //月份
        "d+": this.getDate(), //日
        "h+": this.getHours(), //小时
        "m+": this.getMinutes(), //分
        "s+": this.getSeconds(), //秒
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度
        "S": this.getMilliseconds() //毫秒
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
}
// 使用方法：
new Date().format("yyyy-MM-dd hh:mm:ss");

// 一年有多少周
function getTotalWeek(year) {
    // 一年第一天是周几
    var first = new Date(year,0,1).getDay()
    // 计算一年有多少天
    if((year % 4 == 0 && year % 100 != 0) || (year % 100 == 0 && year % 400 == 0)) {
        var allyears = 366
        }else {
            var allyears = 365
            }
    // 计算一年有多少周
    var week = parseInt((allyears + first) / 7)
    if(((allyears + first) % 7) != 0) {
        week += 1
    }
    return week
}

// 当月有多少天
function getCountDays() {
    var curDate = new Date();
    /* 获取当前月份 */
    var curMonth = curDate.getMonth();
    /*  生成实际的月份: 由于curMonth会比实际月份小1, 故需加1 */
    curDate.setMonth(curMonth + 1);
    /* 将日期设置为0, 这里为什么要这样设置, 我不知道原因, 这是从网上学来的 */
    curDate.setDate(0);
    /* 返回当月的天数 */
    return curDate.getDate();
}

// 计算当前时间前后几天的日期   
function getDifferenceDay(day){
    let date = new Date().getTime()                                    
    let differenceTime = day* 24 * 60 * 60 * 1000
    differenceTime = differenceTime + date
    return  new Date(differenceTime).toLocaleString()
} 
console.log(getDifferenceDay(-5)) => 2023/3/4 16:55:32
console.log(getDifferenceDay(5)) => 2023/3/14 16:57:20

// 年月日比大小
function YMD_daxiao(str1, str2) {
    // 方法一:将年月日转化为数字
    let arr1 = str1.split('-');
    let arr2 = str2.split('-');
    arr1[1] < 10 ? arr1[1] = '0' + arr1[1] : ''; //将月份转化为两位数
    arr1[2] < 10 ? arr1[2] = '0' + arr1[2] : ''; //将日期转化为两位数
    arr2[1] < 10 ? arr2[1] = '0' + arr2[1] : '';
    arr2[2] < 10 ? arr2[2] = '0' + arr2[2] : '';
    str1 = Number(arr1.join(''));
    str2 = Number(arr2.join(''));
    // 小于0则str1时间小，大于0则str1时间大
    return str1 - str2;

    // 方法二:将年月日转化为毫秒数
    // str1 = new Date(str1).getTime();
    // str2 = new Date(str2).getTime();
    // 小于0则str1时间小，大于0则str1时间大
    // return str1 - str2
};
console.log(YMD_daxiao('2021-9-1', '2021-12-3')); // -302

// 时分秒比大小
// 注意:小时必须是二十四小时制
function HMS_daxiao(str1, str2) {
    // 方法一:将时分转化为毫秒数
    // let YMD = '2021/10/1 '; // 只是进行时分秒的大小比较，年月为任意时间都行
    // str1 = new Date(YMD + str1).getTime();
    // str2 = new Date(YMD + str2).getTime();
    // 小于0则str1时间小，大于0则str1时间大
    // return str1 - str2

    // 方法二:将时分秒手动转化为秒数
    // let arr1 = str1.split(':');
    // let arr2 = str2.split(':');
    // str1 = Number(arr1[0]) * 3600 + Number(arr1[1]) * 60 + Number(arr1[2]);
    // str2 = Number(arr2[0]) * 3600 + Number(arr2[1]) * 60 + Number(arr2[2]);
    // 小于0则str1时间小，大于0则str1时间大
    // return str1 - str2

    // 方法二:将时分秒转化为数字
    let arr1 = str1.split(':');
    let arr2 = str2.split(':');
    arr1[0] < 10 ? arr1[0] = '0' + arr1[0] : ''; //将小时转化为两位数
    arr1[1] < 10 ? arr1[1] = '0' + arr1[1] : ''; //将分钟转化为两位数
    arr1[1] < 10 ? arr1[1] = '0' + arr1[1] : ''; //将秒转化为两位数
    arr2[0] < 10 ? arr2[0] = '0' + arr2[0] : '';
    arr2[1] < 10 ? arr2[1] = '0' + arr2[1] : '';
    arr2[1] < 10 ? arr2[1] = '0' + arr2[1] : '';
    str1 = Number(arr1.join(''));
    str2 = Number(arr2.join(''));
    // 小于0则str1时间小，大于0则str1时间大
    return str1 - str2
};
console.log(HMS_daxiao('8:00:00', '15:00:00')); // -7000000

// 年月日时分秒比大小
function YMDHMS_daxiao(str1, str2) {
    str1 = new Date(str1).getTime();
    str2 = new Date(str2).getTime();
    // 小于0则str1时间小，大于0则str1时间大
    return str1 - str2
};
console.log(YMDHMS_daxiao('2021-9-1 8:00:00', '2021-12-3 15:00:00')); // -8060400000

// 常用日期计算函数大全：
// 对Date的扩展，将 Date 转化为指定格式的String
// 月(M)、日(d)、小时(h)、分(m)、秒(s)、季度(q) 可以用 1-2 个占位符，
// 年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字)
// 例子：
// (new Date()).Format("yyyy-MM-dd hh:mm:ss.S") ==> 2006-07-02 08:09:04.423
// (new Date()).Format("yyyy-M-d h:m:s.S")      ==> 2006-7-2 8:9:4.18
Date.prototype.Format = function (fmt) { //author: meizz
    var o = {
        "M+": this.getMonth() + 1,                 //月份
        "d+": this.getDate(),                    //日
        "h+": this.getHours(),                   //小时
        "m+": this.getMinutes(),                 //分
        "s+": this.getSeconds(),                 //秒
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度
        "S": this.getMilliseconds()             //毫秒
    };
    if (/(y+)/.test(fmt))
        fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt))
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
}

/**
 * 格式化日期 为 yyyy-MM-dd
 * @param date
 * @returns {string}
 */
function dateFormat(date) {
    if (!date || typeof (date) === "string") {
        this.error("参数异常，请检查...");
    }
    var y = date.getFullYear(); //年
    var m = date.getMonth() + 1; //月
    var d = date.getDate(); //日

    return y + "-" + m + "-" + d;
}

/**
 * 格式化月和日为MM、dd
 * @param value
 * @returns {string}
 */
function formatDate(value) {
    if (value < 10) {
        value = "0" + value;
    }
    return value;
}

/**
 * 获取指定日期的当周第一天
 * @param dd
 * @returns {string}
 */
function getFirstDayOfWeek(dd) {
    var week = dd.getDay(); //获取时间的星期数
    var minus = week ? week - 1 : 6;
    dd.setDate(dd.getDate() - minus); //获取minus天前的日期
    var y = dd.getFullYear();
    var m = dd.getMonth() + 1; //获取月份
    var d = dd.getDate();
    return y + "-" + formatDate(m) + "-" + formatDate(d);
}

/**
 * 获取当周 第一天 和 最后 一天
 * @returns {{firstDate: string, lastDate: string}}
 */
function getStartAndEndOfCurrWeek() {
    var d = new Date();
    var year = d.getFullYear();
    var month = parseInt(d.getMonth()) + 1;

    //获取周一
    var beginWhereTheTime = getFirstDayOfWeek(d);
    var dd = new Date(beginWhereTheTime);
    //获取周天
    dd.setDate(dd.getDate() + 6);
    var monthSunday = parseInt(dd.getMonth()) + 1;
    var endWhereTheTime = dd.getFullYear() + "-" + formatDate(monthSunday) + "-" + formatDate(dd.getDate());

    return {
        "firstDate": beginWhereTheTime,
        "lastDate": endWhereTheTime
    }
}

/**
 * 获取开始日期与结束日期之间的所有日期数组
 * @param begin
 * @param end
 * @returns {[]}
 */
function getAllDates(begin, end) { //返回 日期的数组 如 ['2020-07-10','2020-07-11']
    var arr = [];
    var ab = begin.split("-");
    var ae = end.split("-");
    var db = new Date();
    db.setUTCFullYear(ab[0], ab[1] - 1, ab[2]);
    var de = new Date();
    de.setUTCFullYear(ae[0], ae[1] - 1, ae[2]);
    var unixDb = db.getTime() - 24 * 60 * 60 * 1000;
    var unixDe = de.getTime() - 24 * 60 * 60 * 1000;
    for (var k = unixDb; k <= unixDe;) {
        //console.log((new Date(parseInt(k))).format());
        k = k + 24 * 60 * 60 * 1000;
        arr.push((new Date(parseInt(k))).Format('yyyy-MM-dd'));
    }
    return arr;
}

/**
 *
 * @param begin
 * @param end
 * @param fmt
 * @returns {[]}
 */
function getAllDatesFormat(begin, end,fmt) { //返回 日期的数组 如 ['2020-07-10','2020-07-11']
    var arr = [];
    var ab = begin.split("-");
    var ae = end.split("-");
    var db = new Date();
    db.setUTCFullYear(ab[0], ab[1] - 1, ab[2]);
    var de = new Date();
    de.setUTCFullYear(ae[0], ae[1] - 1, ae[2]);
    var unixDb = db.getTime() - 24 * 60 * 60 * 1000;
    var unixDe = de.getTime() - 24 * 60 * 60 * 1000;
    for (var k = unixDb; k <= unixDe;) {
        //console.log((new Date(parseInt(k))).format());
        k = k + 24 * 60 * 60 * 1000;
        arr.push((new Date(parseInt(k))).Format(fmt));
    }
    return arr;
}

/**
 * 获取当月第一天
 * @param dd
 * @returns {string}
 */
function getFirstDayOfCurrentMonth() {
    var now = new Date();
    now.setDate(1);
    var startDateStr = now.Format("yyyy-MM-dd");
    return startDateStr;
}
/**
 * 获取当月第一天
 * @param dd
 * @returns {string}
 */
function getCurrDate() {
    var now = new Date();
    var startDateStr = now.Format("yyyy-MM-dd");
    return startDateStr;
}
/**
 * 获取指定日期当月第一天
 * @param date
 * @returns {*}
 */
function getFirstDayOfMonth(date) {
    date.setDate(1);
    return dateFormat(date);
}

/**
 * 获取指定日期当年第一天
 * @param date
 * @returns {*}
 */
function getFirstDayOfYear (date) {
    date.setDate(1);
    date.setMonth(0);
    return dateFormat(date);
}

/**
 * 获取指定日期当季第一天
 * @param date
 * @returns {返回值为格式化的日期，yy-mm-dd}
 */
function getFirstDayOfSeason (date) {
    var month = date.getMonth();
    if(month <3 ){
        date.setMonth(0);
    }else if(2 < month && month < 6){
        date.setMonth(3);
    }else if(5 < month && month < 9){
        date.setMonth(6);
    }else if(8 < month && month < 11){
        date.setMonth(9);
    }
    date.setDate(1);
    return dateFormat(date);
}

/**
 * 根据 年份 和 季度  获取 季度 第一天 和 季度 最后 一天
 * @param year
 * @param quarter
 * @returns {{endDate: string, startDate: string}}
 */
function getStartEndOfQuarter(year,quarter) {
    let startMonth = 1;
    if(quarter == 1){
        startMonth = 1;
    }else if (quarter == 2){
        startMonth = 4;
    }else if (quarter == 3){
        startMonth = 7;
    }else if (quarter == 4){
        startMonth = 10;
    }
    let endMonth = startMonth + 2;
    if (quarter == 0){
        endMonth = 12
    }
    const startDate = year+"-"+formatDate(startMonth)+'-01';
    const endDate = year + '-' + formatDate(endMonth) + '-' +new Date(year,endMonth,0).getDate()
    return {startDate,endDate}
}

// 获取上一个月时间,返回yyyy-MM-dd字符串
function getLastMonthTime(date){
    //  1    2    3    4    5    6    7    8    9   10    11   12月
    var daysInMonth = [0,31,28,31,30,31,30,31,31,30,31,30,31];
    var strYear = date.getFullYear();
    var strDay = date.getDate();
    var strMonth = date.getMonth()+1;
    //一、解决闰年平年的二月份天数   //平年28天、闰年29天//能被4整除且不能被100整除的为闰年,或能被100整除且能被400整除
    if (((strYear % 4) === 0) && ((strYear % 100)!==0) || ((strYear % 400)===0)){
        daysInMonth[2] = 29;
    }
    if(strMonth - 1 === 0) //二、解决跨年问题
    {
        strYear -= 1;
        strMonth = 12;
    }
    else
    {
        strMonth -= 1;
    }
    //  strDay = daysInMonth[strMonth] >= strDay ? strDay : daysInMonth[strMonth];
    strDay = Math.min(strDay,daysInMonth[strMonth]);//三、前一个月日期不一定和今天同一号，例如3.31的前一个月日期是2.28；9.30前一个月日期是8.30

    if(strMonth<10)//给个位数的月、日补零
    {
        strMonth="0"+strMonth;
    }
    if(strDay<10)
    {
        strDay="0"+strDay;
    }
    var datastr = strYear+"-"+strMonth+"-"+strDay;
    return datastr;
}

/* 获取上一个月
 *
 * @date 格式为yyyy-mm-dd的日期，如：2014-01-25
 */
function getPreMonth(date) {
    var arr = date.split('-');
    var year = arr[0]; //获取当前日期的年份
    var month = arr[1]; //获取当前日期的月份
    var day = arr[2]; //获取当前日期的日
    var days = new Date(year, month, 0);
    days = days.getDate(); //获取当前日期中月的天数
    var year2 = year;
    var month2 = parseInt(month) - 1;
    if (month2 == 0) {
        year2 = parseInt(year2) - 1;
        month2 = 12;
    }
    var day2 = day;
    var days2 = new Date(year2, month2, 0);
    days2 = days2.getDate();
    if (day2 > days2) {
        day2 = days2;
    }
    if (month2 < 10) {
        month2 = '0' + month2;
    }
    var t2 = year2 + '-' + month2 + '-' + day2;
    return t2;
}

/**
 * 获取下一个月
 *
 * @date 格式为yyyy-mm-dd的日期，如：2014-01-25
 */
function getNextMonth(date) {
    var arr = date.split('-');
    var year = arr[0]; //获取当前日期的年份
    var month = arr[1]; //获取当前日期的月份
    var day = arr[2]; //获取当前日期的日
    var days = new Date(year, month, 0);
    days = days.getDate(); //获取当前日期中的月的天数
    var year2 = year;
    var month2 = parseInt(month) + 1;
    if (month2 == 13) {
        year2 = parseInt(year2) + 1;
        month2 = 1;
    }
    var day2 = day;
    var days2 = new Date(year2, month2, 0);
    days2 = days2.getDate();
    if (day2 > days2) {
        day2 = days2;
    }
    if (month2 < 10) {
        month2 = '0' + month2;
    }

    var t2 = year2 + '-' + month2 + '-' + day2;
    return t2;
}

/**
 * 根据月份 和 年份 获取 当月 天数
 * @param year
 * @param month
 * @returns {number}
 */
function getLastDay(year,month) {
    var new_year = year; //取当前的年份
    var new_month = month++;//取下一个月的第一天，方便计算（最后一天不固定）
    if(month>12) {
        new_month -=12; //月份减
        new_year++; //年份增
    }
    var new_date = new Date(new_year,new_month,1); //取当年当月中的第一天
    return (new Date(new_date.getTime()-1000*60*60*24)).getDate();//获取当月最后一天日期
}
/**
 * 根据月份 和 年份 获取 当月 天数
 * @param year
 * @param month
 * @returns {number}
 */
function getLastDate(year,month) {
    var new_year = year; //取当前的年份
    var new_month = month;//取下一个月的第一天，方便计算（最后一天不固定）
    if(month>12) {
        new_month -=12; //月份减
        new_year++; //年份增
    }
    var new_date = new Date(new_year,new_month,1); //取当年当月中的第一天
    return year+"-"+formatDate(month)+"-"+formatDate((new Date(new_date.getTime()-1000*60*60*24)).getDate());//获取当月最后一天日期
}

function getFirstDay(year,month) {
    return year+"-"+formatDate(month)+"-01"
}


/**
 * 根据年份计算总周数
 * @param year
 * @returns {number}
 */
function getNumOfWeeks(year) {
    //设置为这一年开始日期
    var startDateOfYear = new Date(year, 0, 1);
    //计算这一年有多少天
    var daysOfYear = ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) ? 366 : 365;
    //366（365）/7=52.2(52.1)，所以一般一年有52周余1天或者2天，当这一年有366天时且第一天是周日，那么他的最后一天则是周一，这一年就有54周。
    var weekNum = 53;
    //当年份是闰年且第一天是周日时有54周
    if (startDateOfYear.getDay() == 0 && daysOfYear == 366) {
        weekNum = 54;
    }
    return weekNum;
}
// 第n年的第n周，获取开始和结束时间 （星期一为一周的开始）
function weekDateOfYear(year,weekNo){
    // 此年1号是星期几
    let oneday = new Date(year+'-01-01').getDay() //0-6
    // 方便计算，当为星期天时为7
    if(oneday==0){
        oneday = 7
    }

    let one_fistday;
    let one_lastday;
    // 如果1号刚好是星期一
    if(oneday == 1){
        one_fistday = year+'-01-01'
        one_lastday = year+'-01-07'
    }else{
        let jj = 8-oneday
        one_fistday = (year-1)+'-12-'+(31-oneday+2>9?31-oneday+2:'0'+(31-oneday+2))
        one_lastday = year+'-01-'+(jj>9?jj:'0'+jj)
    }

    let fistday;
    let lastday;
    // 如果刚好是第一周
    if(weekNo ==1){
        fistday = one_fistday
        lastday = one_lastday
    }else{
        fistday = addDate(one_lastday,(weekNo-2)*7+1)
        lastday = addDate(one_lastday,(weekNo-1)*7)
    }
    return [fistday,lastday]
}
//日期加减法  date参数为计算开始的日期，days为需要加的天数
//格式:addDate('2017-1-11',20)
function addDate(date,days){
    var d=new Date(date);
    d.setDate(d.getDate()+days);
    var m=d.getMonth()+1;
    return d.getFullYear()+'-'+(m>9?m:'0'+m)+'-'+(d.getDate()>9?d.getDate():'0'+d.getDate());
}

/**
 * 　获取本月第几周的方法：
 * @param a
 * @param b
 * @param c
 * @returns {{getYear: number, getMonth: number, getWeek: number}}
 */
var getMonthWeek = function (a, b, c) {
    /**
     * a = d = 当前日期
     * b = 6 - w = 当前周的还有几天过完(不算今天)
     * a + b 的和在除以7 就是当天是当前月份的第几周
     */
    var date = new Date(a, parseInt(b) - 1, c),
        w = date.getDay(),
        d = date.getDate();
    if(w==0){
        w=7;
    }
    var config={
        getMonth:date.getMonth()+1,
        getYear:date.getFullYear(),
        getWeek:Math.ceil((d + 6 - w) / 7),
    }
    return config;
};
/**
 * 获取年的第几周的方法：
 * @param a
 * @param b
 * @param c
 * @returns {number}
 */
var getYearWeek = function(a, b, c)
{
    /*
    date1是当前日期
    date2是当年第一天
    d是当前日期是今年第多少天
    用d + 当前年的第一天的周差距的和在除以7就是本年第几周
    */
    var date1 = new Date(a, parseInt(b) - 1, c),
        date2 = new Date(a, 0, 1),
        d = Math.round((date1.valueOf() - date2.valueOf()) / 86400000);
    return Math.ceil((d + ((date2.getDay() + 1) - 1)) / 7);
};

/**
 * 指定日期 当年第几周
 * @param dt
 * @returns {number}
 */
function getWeek(dt){
    let d1 = new Date(dt);
    let d2 = new Date(dt);
    d2.setMonth(0);
    d2.setDate(1);
    let rq = d1-d2;
    let days = Math.ceil(rq/(24*60*60*1000));
    let num = Math.ceil(days/7);
    return num;
}
/**
 * 今天 在 当年 第几周
 * @param dt
 * @returns {number}
 */
function getCurrYearWeek(){
    var now = new Date().Format('yyyy-MM-dd');
    return getWeek(now)
}

/**
 * 根据 颗粒度(分钟) 生成时间列表
 * @param num
 * @returns {[]}
 */
function getTimeList(num){
    var list = []
    var date=new Date();     
    date.setMinutes(0); 
    date.setHours(0);
    list.push(date.Format('hh:mm'))
    for (let i = 0; i < 3600; i++) {
        date.setMinutes(date.getMinutes()+num);
        list.push(date.Format('hh:mm'))
        if (date.getDay() > new Date().getDay()){
            break;
        }
    }
    list.pop();
    return list;
}
```



## 五、其他方法

```js
// 对象合并
obj1 = {
    a: 1
}
obj2 = {
    b: 1
}
const obj3 = { ...obj1, ...obj2 }
const obj4 = Object.assign({}, obj1, obj2)
// console.log(obj3,obj3);

// 数组合并 考虑去重
const a0 = [1, 2, 3];
const b0 = [1, 5, 6];
const c0 = [...new Set([...a0, ...b0])];//[1,2,3,5,6]

// 拼接字符串
const name = '小明'
const score = 59
let result = ''
// if(score>60) {
//     result = `${name}的考试成绩及格`
// }else {
//     result = `${name}的考试成绩不及格`
// }
// 新写法
result = `${name}${score > 60 ? '的考试成绩及格' : '的考试成绩不及格'}`
// console.log(result);

// if判断条件合集
// if(type===1||type===2||type===3||type===4) {
//     //...
// }
// 新写法
const condition = [1, 2, 3, 4]
const type = 1
if (condition.includes(type)) {
    //...
}

// 列表搜索
// find 方法
const arr = [1, 2, 3, 4, 5]
const res = arr.find(item => {
    return item === 3
})

// filter 方法
const res2 = arr.filter(item => {
    return item === 3
})
// console.log(res);

// 获取对象属性值
const obj5 = {}
// const name2 = obj5&&obj5.name
const name2 = obj5?.name

// 添加对象属性
let obj = {}
let index = 1
obj[`topic${index}`] = '话题内容'

// 输入框非空判断
// if(value !== null && value !== undefined && value !== '') {}
// ?? 是在左边的值为undefined或者null时才会返回右边的值
const value = '1'
if (value ?? '' !== '') {
    console.log('输入正确');
} else {
    console.log('输入为空');
}

// 扁平化数组
const deps = {
    '采购部': [1, 2, 3],
    '人事部': [5, 8, 12],
    '行政部': [5, 14, 79],
    '运输部': [3, 64, 105],
}
let member = [];
// es5 方法
// for(let item in deps) {
//     const value = deps[item];
//     if(Array.isArray(value)) {
//         member = [...member,...value]
//     }
// }
// member = [...new Set(member)]
// es6 方法 Object.values获取对象全部属性，flat方法对数组扁平化处理
let member2 = Object.values(deps).flat(Infinity);
// console.log(member2);
// 数组去重
const arr2 = [1, 2, 3, 2, 3];
const arr3 = [...new Set(arr2)]
// console.log(arr3);

// 取值
const obj = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
}
const { a, b, c, d, e } = obj
const f = a + d;
const g = c + e;
// 创建的变量名和对象的属性名不一致，可以这么写
const { a: a1 } = obj
// console.log(a1);

// ES6的解构赋值虽然好用。但是要注意解构的对象不能为undefined、null。否则会报错，故要给被解构的对象一个默认值。
const { a2, b2, c2, d2, e2 } = obj || {}

// 对象取值
let { foo, bar } = { foo: 'aaa', bar: 'bbb' };
/**
    对象的解构与数组有一个重要的不同。数组的元素是按次序排列的，变量的取值由它的位置决定；而对象的属性没有次序，变量必须与属性同名，
    才能取到正确的值。如果解构失败，变量的值等于undefined。
*/
// 如果变量名与属性名不一致，必须写成下面这样
// 对象的解构赋值的内部机制，是先找到同名属性，然后再赋给对应的变量。真正被赋值的是后者，而不是前者
// foo是匹配的模式，baz才是变量。真正被赋值的是变量baz，而不是模式foo
let { foo: baz } = { foo: 'aaa', bar: 'bbb' };  // baz // "aaa"

let obj = { first: 'hello', last: 'world' };
let { first: fi, last: la } = obj;  // f // 'hello'   l // 'world'

// 解构数组
let obj = {
    p: [
        'Hello',
        { y: 'World' }
    ]
};

// let { p: [x, { y }] } = obj;
// x // "Hello"
// y // "World"
// 这时p是模式，不是变量，因此不会被赋值。如果p也要作为变量赋值，可以写成下面这样
let { p, p: [x, { y }] } = obj;
// x // "Hello"
// y // "World"
// p // ["Hello", {y: "World"}]

// 填充数字数组的方法
const arr = Array.from({length:5},(_,i)=>i+1)
const arr2 = new Array(5).fill(0)
const arr3 = new Array(5).fill(0).map((v,i)=>i+1)
console.log(arr3);
```

### **JS的节流与防抖**

![前端开发：JS的节流与防抖_开发语言](/images/JS/js的节流与防抖.jpg)

**节流（throttle）**：当持续触发事件时候，保证一定时间段内只调用一次事件处理函数，也就是持续触发事件，每隔一段时间只执行一次函数。节流的策略是，在每个时间周期内，不论触发多少次事件，只执行一次动作。在上一个时间周期结束后，如果又有事件触发，则开始新的时间周期，同理，在新的时间周期里只执行一次动作。 和防抖类似，节流策略也分前缘和延迟两种。延迟是指周期结束后执行动作，前缘是指执行动作后再开始周期。

**节流使用场景**：有很多，比如图片懒加载的使用、进行ajax数据请求加载的使用、下滑自动加载数据、侧边浮动导航栏等等。

**函数节流**：指在一定时间周期内执行的操作只执行一次，也就是预先设定一个执行周期，当调用动作的时间大于等于执行的周期则执行该动作，接着进入下一个新周期。一个函数执行一次后，只有大于设定的执行周期后才会执行第二次。

**节流函数的实现**：
节流函数的适用场景主要在拖拽场景和缩放场景中，如固定时间内只执⾏⼀次，防⽌超⾼频次触发位置变动；以及监控浏览器的resize等场景。具体实现示例如下所示：

```js
// 使用定时器实现
const throttle = (fun, delay) => { // fun是事件处理程序，delay是事件执行的延迟事件，单位为毫秒
    let timer = null;
    return (...args) => {
        if(!timer) {
            timer = setTimeout(() => {
                fun.apply(this, args); // 执行事件处理程序
                timer = null; // 事件执行之后把清除定时器，待下次触发事件的时候重新设置
            }, delay);
        }
    };
};

// 使用时间戳实现
const throttle = (func, delay)=>{
    // 定义初始时间(开始触发事件的时间)
    let start = 0;
    return (...args)=>{
        // 获取当前时间戳
        let current = Date.now();
        // 判断当前时间与初始时间是否超过间隔
        if(current - start >= delay){
            // 执行事件处理程序
            func.apply(this, args)
            // 更新初始时间
            start = current;
        }
    }
}
```



**防抖（debounce）**：在持续触发事件的时候，一定时间段内没有再触发事件，事件处理函数才会执行一次，如果设定的时间到来之前，又一次触发了事件，就重新开始延时。防抖一定是在事件触发N秒后才会执行，若在一个事件触发的N秒内又触发了该事件，以新的事件时间为准，N秒过后才执行，等触发事件N秒内不再触发事件才执行。也就是多次快速频繁地触发事件，只会执行一次事件函数，前提是需要加上一个时间限制。也可以理解为，为了防止快速且频繁的触发事件而导致多次执行事件函数引起程序卡顿等问题，可以设置在多次触发的事件只执行一次事件函数，且需要设定一个间隔时间，若两次事件触发的间隔时间低于设定的时间，就是频繁操作。

防抖的特点是当事件快速连续不断触发时，动作只会执行一次。分为两种，一种是延迟debounce，一种是前缘debounce。 延迟debounce，是在周期结束时执行，前缘debounce，是在周期开始时执行。但当触发有间断，且间断大于我们设定的间隔时间时，动作就会有多次执行。

**防抖使用场景**：有很多，比如监听滚动事件、鼠标移动事件onmousemove、频繁点击表单提交按钮等。

**函数防抖**：是指在一定时间内，在动作被连续频繁触发的情况下，动作只会被执行一次，也就是当调用动作过N秒后，才会执行该动作，若在这N秒内又调用该动作则将重新计算执行时间，所以短时间内的连续动作只会触发一次。

**防抖函数的实现**：
防抖函数的适用场景主要在防止多次提交场景，比如防⽌多次提交按钮，只执⾏最后提交的⼀次；输入框输入的时候，只执⾏⼀段连续的输⼊事件的最后⼀次；以及搜索框进行搜索联想词功能。具体实现示例如下所示：

```js
const debounce = (fun, delay) => { // fun是事件处理程序，delay是事件执行的延迟事件，单位为毫秒
    let timer = null;
    return (...args) => {
        clearTimeout(timer); // 每次触发事件，需要把定时器清理之后重新计时
        timer = setTimeout(() => {
            fun.apply(this, args); // 执行事件处理程序
        }, delay);
    };
};
```

**防抖与节流注意事项**

**① 闭包的运用**
实际中要避免全局的命名污染，所以不建议使用全局变量，同时为了让所需要的变量能够得到缓存，所以使用闭包存储部分需要用到的变量。

**② this指向以及event参数**
由于在事件触发调用的时候，是由防抖或者节流函数return返回出来的函数，而不是事件函数，事件函数是作为参数传入防抖或者节流函数中的，所以它的this指向是window，而不是触发事件调用函数的dom。同理可知，事件自带的event参数也是拿不到的，所以需要通过闭包去存储this上下文以及argument这个传递给函数的参数的类数组对象。事实上，所有的高阶函数内部都需要特别注意this的绑定 。

**节流与防抖的总结**
**防抖**：其实就是维护一个定时器，把多个相同的操作合并成一个操作，规定在delay后触发函数，若在此之前触发函数，则取消之前的计时重新计时，只有最后一次操作才能被触发。

**节流**：原理就是判断是否达到一定的时间周期来触发事件，规定某个时间段内只能触发一次函数。

**节流与防抖区别**：防抖只会在最后一次事件后执行触发函数；节流不管操作事件多么的频繁都会保证在规定时间段内触发事件函数。



### 常用的工具方法

```js
// 删除左右两端的空格
export function trim(str) {
    let reg = /^\s*|\s*$/g;　　
    return String(str).replace(reg, "");
}

// 校验整数
export function isNum(num) {
    let re = /^[0-9]+$/;
    return re.test(Number(num));
}

// 最多保留两位小数
export const formatMomey = (num) => Math.round(num * 100) / 100;

// 验证邮箱
export const isEmail = (s) => {
    return /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((.[a-zA-Z0-9_-]{2,3}){1,2})$/.test(s)
}

// 手机号码
export const isMobile = (s) => {
    return /^1[0-9]{10}$/.test(s)
}

// 电话号码
export const isPhone = (s) => {
    return /^([0-9]{3,4}-)?[0-9]{7,8}$/.test(s)
}

// 是否url地址
export const isURL = (s) => {
    return /^http[s]?:\/\/.*/.test(s)
}

// 是否字符串
export const isString = (o) => {
    return Object.prototype.toString.call(o).slice(8, -1) === 'String'
}

// 是否数字
export const isNumber = (o) => {
    return Object.prototype.toString.call(o).slice(8, -1) === 'Number'
}

// 是否boolean
export const isBoolean = (o) => {
    return Object.prototype.toString.call(o).slice(8, -1) === 'Boolean'
}

// 是否函数
export const isFunction = (o) => {
    return Object.prototype.toString.call(o).slice(8, -1) === 'Function'
}

// 是否为null
export const isNull = (o) => {
    return Object.prototype.toString.call(o).slice(8, -1) === 'Null'
}

// 是否undefined
export const isUndefined = (o) => {
    return Object.prototype.toString.call(o).slice(8, -1) === 'Undefined'
}

// 是否对象
export const isObj = (o) => {
    return Object.prototype.toString.call(o).slice(8, -1) === 'Object'
}

// 是否数组
export const isArray = (o) => {
    return Object.prototype.toString.call(o).slice(8, -1) === 'Array'
}

// 是否时间
export const isDate = (o) => {
    return Object.prototype.toString.call(o).slice(8, -1) === 'Date'
}

// 是否正则
export const isRegExp = (o) => {
    return Object.prototype.toString.call(o).slice(8, -1) === 'RegExp'
}

// 是否错误对象
export const isError = (o) => {
    return Object.prototype.toString.call(o).slice(8, -1) === 'Error'
}

// 是否Symbol函数
export const isSymbol = (o) => {
    return Object.prototype.toString.call(o).slice(8, -1) === 'Symbol'
}

// 是否Promise对象
export const isPromise = (o) => {
    return Object.prototype.toString.call(o).slice(8, -1) === 'Promise'
}

// 是否Set对象
export const isSet = (o) => {
    return Object.prototype.toString.call(o).slice(8, -1) === 'Set'
}

// 是否是微信浏览器
export const isWeiXin = () => {
    const ua = navigator.userAgent.toLowerCase();
    return ua.match(/microMessenger/i) == 'micromessenger'
}

// 是否是移动端
export const isDeviceMobile = () => {
    const ua = navigator.userAgent.toLowerCase();
    return /android|webos|iphone|ipod|balckberry/i.test(ua)
}

// 是否是QQ浏览器
export const isQQBrowser = () => {
    const ua = navigator.userAgent.toLowerCase();
    return !!ua.match(/mqqbrowser|qzone|qqbrowser|qbwebviewtype/i)
}

// 是否是爬虫
export const isSpider = () => {
    const ua = navigator.userAgent.toLowerCase();
    return /adsbot|googlebot|bingbot|msnbot|yandexbot|baidubot|robot|careerbot|seznambot|bot|baiduspider|jikespider|symantecspider|scannerlwebcrawler|crawler|360spider|sosospider|sogou web sprider|sogou orion spider/.test(ua)
}

// 是否ios
export const isIos = () => {
    var u = navigator.userAgent;
    if (u.indexOf('Android') > -1 || u.indexOf('Linux') > -1) {  //安卓手机
        return false
    } else if (u.indexOf('iPhone') > -1) {//苹果手机
        return true
    } else if (u.indexOf('iPad') > -1) {//iPad
        return false
    } else if (u.indexOf('Windows Phone') > -1) {//winphone手机
        return false
    } else {
        return false
    }
}

// 是否为PC端
export const isPC = () => {
    var userAgentInfo = navigator.userAgent;
    var Agents = ["Android", "iPhone",
        "SymbianOS", "Windows Phone",
        "iPad", "iPod"];
    var flag = true;
    for (var v = 0; v < Agents.length; v++) {
        if (userAgentInfo.indexOf(Agents[v]) > 0) {
            flag = false;
            break;
        }
    }
    return flag;
}

// 去除html标签
export const removeHtmltag = (str) => {
    return str.replace(/<[^>]+>/g, '')
}

// 获取url参数
export const getQueryString = (name) => {
    const reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
    const search = window.location.search.split('?')[1] || '';
    const r = search.match(reg) || [];
    return r[2];
}

// 动态引入js
export const injectScript = (src) => {
    const s = document.createElement('script');
    s.type = 'text/javascript';
    s.async = true;
    s.src = src;
    const t = document.getElementsByTagName('script')[0];
    t.parentNode.insertBefore(s, t);
}

// 根据url地址下载
export const download = (url) => {
    var isChrome = navigator.userAgent.toLowerCase().indexOf('chrome') > -1;
    var isSafari = navigator.userAgent.toLowerCase().indexOf('safari') > -1;
    if (isChrome || isSafari) {
        var link = document.createElement('a');
        link.href = url;
        if (link.download !== undefined) {
            var fileName = url.substring(url.lastIndexOf('/') + 1, url.length);
            link.download = fileName;
        }
        if (document.createEvent) {
            var e = document.createEvent('MouseEvents');
            e.initEvent('click', true, true);
            link.dispatchEvent(e);
            return true;
        }
    }
    if (url.indexOf('?') === -1) {
        url += '?download';
    }
    window.open(url, '_self');
    return true;
}

// el是否包含某个class
export const hasClass = (el, className) => {
    let reg = new RegExp('(^|\\s)' + className + '(\\s|$)')
    return reg.test(el.className)
}

// el添加某个class
export const addClass = (el, className) => {
    if (hasClass(el, className)) {
        return
    }
    let newClass = el.className.split(' ')
    newClass.push(className)
    el.className = newClass.join(' ')
}

// el去除某个class
export const removeClass = (el, className) => {
    if (!hasClass(el, className)) {
        return
    }
    let reg = new RegExp('(^|\\s)' + className + '(\\s|$)', 'g')
    el.className = el.className.replace(reg, ' ')
}

// 获取滚动的坐标
export const getScrollPosition = (el = window) => ({
    x: el.pageXOffset !== undefined ? el.pageXOffset : el.scrollLeft,
    y: el.pageYOffset !== undefined ? el.pageYOffset : el.scrollTop
});

// 滚动到顶部
export const scrollToTop = () => {
    const c = document.documentElement.scrollTop || document.body.scrollTop;
    if (c > 0) {
        window.requestAnimationFrame(scrollToTop);
        window.scrollTo(0, c - c / 8);
    }
}

// el是否在视口范围内
export const elementIsVisibleInViewport = (el, partiallyVisible = false) => {
    const { top, left, bottom, right } = el.getBoundingClientRect();
    const { innerHeight, innerWidth } = window;
    return partiallyVisible
        ? ((top > 0 && top < innerHeight) || (bottom > 0 && bottom < innerHeight)) &&
        ((left > 0 && left < innerWidth) || (right > 0 && right < innerWidth))
        : top >= 0 && left >= 0 && bottom <= innerHeight && right <= innerWidth;
}

// 洗牌算法随机
export const shuffle = (arr) => {
    var result = [],
        random;
    while (arr.length > 0) {
        random = Math.floor(Math.random() * arr.length);
        result.push(arr[random])
        arr.splice(random, 1)
    }
    return result;
}

// 劫持粘贴板
export const copyTextToClipboard = (value) => {
    var textArea = document.createElement("textarea");
    textArea.style.background = 'transparent';
    textArea.value = value;
    document.body.appendChild(textArea);
    textArea.select();
    try {
        var successful = document.execCommand('copy');
    } catch (err) {
        console.log('Oops, unable to copy');
    }
    document.body.removeChild(textArea);
}

// 判断类型集合
export const checkStr = (str, type) => {
    switch (type) {
        case 'phone':   //手机号码
            return /^1[3|4|5|6|7|8|9][0-9]{9}$/.test(str);
        case 'tel':     //座机
            return /^(0\d{2,3}-\d{7,8})(-\d{1,4})?$/.test(str);
        case 'card':    //身份证
            return /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(str);
        case 'pwd':     //密码以字母开头，长度在6~18之间，只能包含字母、数字和下划线
            return /^[a-zA-Z]\w{5,17}$/.test(str)
        case 'postal':  //邮政编码
            return /[1-9]\d{5}(?!\d)/.test(str);
        case 'QQ':      //QQ号
            return /^[1-9][0-9]{4,9}$/.test(str);
        case 'email':   //邮箱
            return /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/.test(str);
        case 'money':   //金额(小数点2位)
            return /^\d*(?:\.\d{0,2})?$/.test(str);
        case 'URL':     //网址
            return /(http|ftp|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&:/~\+#]*[\w\-\@?^=%&/~\+#])?/.test(str)
        case 'IP':      //IP
            return /((?:(?:25[0-5]|2[0-4]\\d|[01]?\\d?\\d)\\.){3}(?:25[0-5]|2[0-4]\\d|[01]?\\d?\\d))/.test(str);
        case 'date':    //日期时间
            return /^(\d{4})\-(\d{2})\-(\d{2}) (\d{2})(?:\:\d{2}|:(\d{2}):(\d{2}))$/.test(str) || /^(\d{4})\-(\d{2})\-(\d{2})$/.test(str)
        case 'number':  //数字
            return /^[0-9]$/.test(str);
        case 'english': //英文
            return /^[a-zA-Z]+$/.test(str);
        case 'chinese': //中文
            return /^[\\u4E00-\\u9FA5]+$/.test(str);
        case 'lower':   //小写
            return /^[a-z]+$/.test(str);
        case 'upper':   //大写
            return /^[A-Z]+$/.test(str);
        case 'HTML':    //HTML标记
            return /<("[^"]*"|'[^']*'|[^'">])*>/.test(str);
        default:
            return true;
    }
}

// 严格的身份证校验
export const isCardID = (sId) => {
    if (!/(^\d{15}$)|(^\d{17}(\d|X|x)$)/.test(sId)) {
        console.log('你输入的身份证长度或格式错误')
        return false
    }
    //身份证城市
    var aCity = { 11: "北京", 12: "天津", 13: "河北", 14: "山西", 15: "内蒙古", 21: "辽宁", 22: "吉林", 23: "黑龙江", 31: "上海", 32: "江苏", 33: "浙江", 34: "安徽", 35: "福建", 36: "江西", 37: "山东", 41: "河南", 42: "湖北", 43: "湖南", 44: "广东", 45: "广西", 46: "海南", 50: "重庆", 51: "四川", 52: "贵州", 53: "云南", 54: "西藏", 61: "陕西", 62: "甘肃", 63: "青海", 64: "宁夏", 65: "新疆", 71: "台湾", 81: "香港", 82: "澳门", 91: "国外" };
    if (!aCity[parseInt(sId.substr(0, 2))]) {
        console.log('你的身份证地区非法')
        return false
    }

    // 出生日期验证
    var sBirthday = (sId.substr(6, 4) + "-" + Number(sId.substr(10, 2)) + "-" + Number(sId.substr(12, 2))).replace(/-/g, "/"),
        d = new Date(sBirthday)
    if (sBirthday != (d.getFullYear() + "/" + (d.getMonth() + 1) + "/" + d.getDate())) {
        console.log('身份证上的出生日期非法')
        return false
    }

    // 身份证号码校验
    var sum = 0,
        weights = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2],
        codes = "10X98765432"
    for (var i = 0; i < sId.length - 1; i++) {
        sum += sId[i] * weights[i];
    }
    var last = codes[sum % 11]; //计算出来的最后一位身份证号码
    if (sId[sId.length - 1] != last) {
        console.log('你输入的身份证号非法')
        return false
    }

    return true
}

// 随机数范围
export const random = (min, max) => {
    if (arguments.length === 2) {
        return Math.floor(min + Math.random() * ((max + 1) - min))
    } else {
        return null;
    }
}

// 将阿拉伯数字翻译成中文的大写数字
export const numberToChinese = (num) => {
    var AA = new Array("零", "一", "二", "三", "四", "五", "六", "七", "八", "九", "十");
    var BB = new Array("", "十", "百", "仟", "萬", "億", "点", "");
    var a = ("" + num).replace(/(^0*)/g, "").split("."),
        k = 0,
        re = "";
    for (var i = a[0].length - 1; i >= 0; i--) {
        switch (k) {
            case 0:
                re = BB[7] + re;
                break;
            case 4:
                if (!new RegExp("0{4}//d{" + (a[0].length - i - 1) + "}$")
                    .test(a[0]))
                    re = BB[4] + re;
                break;
            case 8:
                re = BB[5] + re;
                BB[7] = BB[5];
                k = 0;
                break;
        }
        if (k % 4 == 2 && a[0].charAt(i + 2) != 0 && a[0].charAt(i + 1) == 0)
            re = AA[0] + re;
        if (a[0].charAt(i) != 0)
            re = AA[a[0].charAt(i)] + BB[k % 4] + re;
        k++;
    }

    if (a.length > 1) // 加上小数部分(如果有小数部分)
    {
        re += BB[6];
        for (var i = 0; i < a[1].length; i++)
            re += AA[a[1].charAt(i)];
    }
    if (re == '一十')
        re = "十";
    if (re.match(/^一/) && re.length == 3)
        re = re.replace("一", "");
    return re;
}

// 将数字转换为大写金额
export const changeToChinese = (Num) => {
    //判断如果传递进来的不是字符的话转换为字符
    if (typeof Num == "number") {
        Num = new String(Num);
    };
    Num = Num.replace(/,/g, "") //替换tomoney()中的“,”
    Num = Num.replace(/ /g, "") //替换tomoney()中的空格
    Num = Num.replace(/￥/g, "") //替换掉可能出现的￥字符
    if (isNaN(Num)) { //验证输入的字符是否为数字
        //alert("请检查小写金额是否正确");
        return "";
    };
    //字符处理完毕后开始转换，采用前后两部分分别转换
    var part = String(Num).split(".");
    var newchar = "";
    //小数点前进行转化
    for (var i = part[0].length - 1; i >= 0; i--) {
        if (part[0].length > 10) {
            return "";
            //若数量超过拾亿单位，提示
        }
        var tmpnewchar = ""
        var perchar = part[0].charAt(i);
        switch (perchar) {
            case "0":
                tmpnewchar = "零" + tmpnewchar;
                break;
            case "1":
                tmpnewchar = "壹" + tmpnewchar;
                break;
            case "2":
                tmpnewchar = "贰" + tmpnewchar;
                break;
            case "3":
                tmpnewchar = "叁" + tmpnewchar;
                break;
            case "4":
                tmpnewchar = "肆" + tmpnewchar;
                break;
            case "5":
                tmpnewchar = "伍" + tmpnewchar;
                break;
            case "6":
                tmpnewchar = "陆" + tmpnewchar;
                break;
            case "7":
                tmpnewchar = "柒" + tmpnewchar;
                break;
            case "8":
                tmpnewchar = "捌" + tmpnewchar;
                break;
            case "9":
                tmpnewchar = "玖" + tmpnewchar;
                break;
        }
        switch (part[0].length - i - 1) {
            case 0:
                tmpnewchar = tmpnewchar + "元";
                break;
            case 1:
                if (perchar != 0) tmpnewchar = tmpnewchar + "拾";
                break;
            case 2:
                if (perchar != 0) tmpnewchar = tmpnewchar + "佰";
                break;
            case 3:
                if (perchar != 0) tmpnewchar = tmpnewchar + "仟";
                break;
            case 4:
                tmpnewchar = tmpnewchar + "万";
                break;
            case 5:
                if (perchar != 0) tmpnewchar = tmpnewchar + "拾";
                break;
            case 6:
                if (perchar != 0) tmpnewchar = tmpnewchar + "佰";
                break;
            case 7:
                if (perchar != 0) tmpnewchar = tmpnewchar + "仟";
                break;
            case 8:
                tmpnewchar = tmpnewchar + "亿";
                break;
            case 9:
                tmpnewchar = tmpnewchar + "拾";
                break;
        }
        var newchar = tmpnewchar + newchar;
    }
    //小数点之后进行转化
    if (Num.indexOf(".") != -1) {
        if (part[1].length > 2) {
            // alert("小数点之后只能保留两位,系统将自动截断");
            part[1] = part[1].substr(0, 2)
        }
        for (i = 0; i < part[1].length; i++) {
            tmpnewchar = ""
            perchar = part[1].charAt(i)
            switch (perchar) {
                case "0":
                    tmpnewchar = "零" + tmpnewchar;
                    break;
                case "1":
                    tmpnewchar = "壹" + tmpnewchar;
                    break;
                case "2":
                    tmpnewchar = "贰" + tmpnewchar;
                    break;
                case "3":
                    tmpnewchar = "叁" + tmpnewchar;
                    break;
                case "4":
                    tmpnewchar = "肆" + tmpnewchar;
                    break;
                case "5":
                    tmpnewchar = "伍" + tmpnewchar;
                    break;
                case "6":
                    tmpnewchar = "陆" + tmpnewchar;
                    break;
                case "7":
                    tmpnewchar = "柒" + tmpnewchar;
                    break;
                case "8":
                    tmpnewchar = "捌" + tmpnewchar;
                    break;
                case "9":
                    tmpnewchar = "玖" + tmpnewchar;
                    break;
            }
            if (i == 0) tmpnewchar = tmpnewchar + "角";
            if (i == 1) tmpnewchar = tmpnewchar + "分";
            newchar = newchar + tmpnewchar;
        }
    }
    //替换所有无用汉字
    while (newchar.search("零零") != -1)
        newchar = newchar.replace("零零", "零");
    newchar = newchar.replace("零亿", "亿");
    newchar = newchar.replace("亿万", "亿");
    newchar = newchar.replace("零万", "万");
    newchar = newchar.replace("零元", "元");
    newchar = newchar.replace("零角", "");
    newchar = newchar.replace("零分", "");
    if (newchar.charAt(newchar.length - 1) == "元") {
        newchar = newchar + "整"
    }
    return newchar;
}

// 判断一个元素是否在数组中
export const contains = (arr, val) => {
    return arr.indexOf(val) != -1 ? true : false;
}

// 数组排序，{type} 1：从小到大 2：从大到小 3：随机
export const sort = (arr, type = 1) => {
    return arr.sort((a, b) => {
        switch (type) {
            case 1:
                return a - b;
            case 2:
                return b - a;
            case 3:
                return Math.random() - 0.5;
            default:
                return arr;
        }
    })
}

// 去重
export const unique = (arr) => {
   return arr.filter((item, index, arr) => {
        return arr.indexOf(item) === index;
      });
}

// 求两个集合的并集
export const union = (a, b) => {
    var newArr = a.concat(b);
    return this.unique(newArr);
}

// 求两个集合的交集
export const intersect = (a, b) => {
    var _this = this;
    a = this.unique(a);
    return this.map(a, function (o) {
        return _this.contains(b, o) ? o : null;
    });
}

// 删除其中一个元素
export const remove = (arr, ele) => {
    var index = arr.indexOf(ele);
    if (index > -1) {
        arr.splice(index, 1);
    }
    return arr;
}

// 将类数组转换为数组
export const formArray = (ary) => {
    var arr = [];
    if (Array.isArray(ary)) {
        arr = ary;
    } else {
        arr = Array.prototype.slice.call(ary);
    };
    return arr;
}

// 最大值
export const max = (arr) => {
    return Math.max.apply(null, arr);
}

// 最小值
export const min = (arr) => {
    return Math.min.apply(null, arr);
}

// 求和
export const sum = (arr) => {
    return arr.reduce((pre, cur) => {
        return pre + cur
    })
}

// 平均值
export const average = (arr) => {
    return this.sum(arr) / arr.length
}

// 去除空格,type: 1-所有空格 2-前后空格 3-前空格 4-后空格
export const trim = (str, type) => {
    type = type || 1
    switch (type) {
        case 1:
            return str.replace(/\s+/g, "");
        case 2:
            return str.replace(/(^\s*)|(\s*$)/g, "");
        case 3:
            return str.replace(/(^\s*)/g, "");
        case 4:
            return str.replace(/(\s*$)/g, "");
        default:
            return str;
    }
}

// 字符转换，type: 1:首字母大写 2：首字母小写 3：大小写转换 4：全部大写 5：全部小写
export const changeCase = (str, type) => {
    type = type || 4
    switch (type) {
        case 1:
            return str.replace(/\b\w+\b/g, function (word) {
                return word.substring(0, 1).toUpperCase() + word.substring(1).toLowerCase();

            });
        case 2:
            return str.replace(/\b\w+\b/g, function (word) {
                return word.substring(0, 1).toLowerCase() + word.substring(1).toUpperCase();
            });
        case 3:
            return str.split('').map(function (word) {
                if (/[a-z]/.test(word)) {
                    return word.toUpperCase();
                } else {
                    return word.toLowerCase()
                }
            }).join('')
        case 4:
            return str.toUpperCase();
        case 5:
            return str.toLowerCase();
        default:
            return str;
    }
}

// 检测密码强度
export const checkPwd = (str) => {
    var Lv = 0;
    if (str.length < 6) {
        return Lv
    }
    if (/[0-9]/.test(str)) {
        Lv++
    }
    if (/[a-z]/.test(str)) {
        Lv++
    }
    if (/[A-Z]/.test(str)) {
        Lv++
    }
    if (/[\.|-|_]/.test(str)) {
        Lv++
    }
    return Lv;
}

// 函数节流器
export const debouncer = (fn, time, interval = 200) => {
    if (time - (window.debounceTimestamp || 0) > interval) {
        fn && fn();
        window.debounceTimestamp = time;
    }
}

// 在字符串中插入新字符串
export const insertStr = (soure, index, newStr) => {
    var str = soure.slice(0, index) + newStr + soure.slice(index);
    return str;
}

// 判断两个对象是否键值相同
export const isObjectEqual = (a, b) => {
    var aProps = Object.getOwnPropertyNames(a);
    var bProps = Object.getOwnPropertyNames(b);

    if (aProps.length !== bProps.length) {
        return false;
    }

    for (var i = 0; i < aProps.length; i++) {
        var propName = aProps[i];

        if (a[propName] !== b[propName]) {
            return false;
        }
    }
    return true;
}

// 16进制颜色转RGBRGBA字符串
export const colorToRGB = (val, opa) => {
    var pattern = /^(#?)[a-fA-F0-9]{6}$/; // 16进制颜色值校验规则
    var isOpa = typeof opa == 'number'; // 判断是否有设置不透明度

    if (!pattern.test(val)) { // 如果值不符合规则返回空字符
        return '';
    }

    var v = val.replace(/#/, ''); // 如果有#号先去除#号
    var rgbArr = [];
    var rgbStr = '';

    for (var i = 0; i < 3; i++) {
        var item = v.substring(i * 2, i * 2 + 2);
        var num = parseInt(item, 16);
        rgbArr.push(num);
    }

    rgbStr = rgbArr.join();
    rgbStr = 'rgb' + (isOpa ? 'a' : '') + '(' + rgbStr + (isOpa ? ',' + opa : '') + ')';
    return rgbStr;
}

// 追加url参数
export const appendQuery = (url, key, value) => {
    var options = key;
    if (typeof options == 'string') {
        options = {};
        options[key] = value;
    }
    options = $.param(options);
    if (url.includes('?')) {
        url += '&' + options
    } else {
        url += '?' + options
    }
    return url;
}
```

