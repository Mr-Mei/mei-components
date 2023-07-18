# JS基础

## 一、JavaScript简介

### 1、JavaScript 是什么

JavaScript 是一种运行在客户端（浏览器）的编程语言，实现人机交互效果

### 2、作用

- 网页特效 (监听用户的一些行为让网页作出对应的反馈)
- 表单验证 (针对表单数据的合法性进行判断)
- 数据交互 (获取后台的数据, 渲染到前端)
- 服务端编程 (node.js)

### 3、 JavaScript的组成

**ECMAScript:**

规定了js基础语法核心知识。

- 比如：变量、分支语句、循环语句、对象等等

**Web APIs :**

- DOM 操作文档，比如对页面元素进行移动、大小、添加删除等操作
- BOM 操作浏览器，比如页面弹窗，检测窗口宽度、存储数据到浏览器等等

**权威网站： MDN**

**JavaScript权威网站：** https://developer.mozilla.org/zh-CN/docs/Web/JavaScript

## 二、 JavaScript 书写位置

JavaScript 程序不能独立运行，它需要被嵌入 HTML 中，然后浏览器才能执行 JavaScript 代码。通过 `script` 标签将 JavaScript 代码引入到 HTML 中.

### 1、内部 JavaScript

直接写在html文件里，用script标签包住

**规范**：script标签写在`</body>`上面

```html
<body>
 <script>
	let age = 18
	console.log(typeof age)
 </script>
</body>
```

注意:

> 我们将 `<script>` 放在HTML文件的底部附近的原因是浏览器会按照代码在文件中的顺序加载 HTML。
>
> 如果先加载的 JavaScript 期望修改其下方的 HTML，那么它可能由于 HTML 尚未被加载而失效。
>
> 因此，将 JavaScript 代码放在 HTML页面的底部附近通常是最好的策略。

### 2、 外部 JavaScript

代码写在以.js结尾的文件里

**语法：**通过script标签，引入到html页面中。

```html
<body>
    <!-- 2, 外部JS书写位置 -->
    <script src="./my.js">
        // 中间不要写内容
    </script>
</body>
```

注意:

> 1. script标签中间无需写代码，否则会被忽略！
>
> 2. 外部JavaScript会使代码更加有序，更易于复用，且没有了脚本的混合，HTML 也会更加易读，因此这是个好的习惯。

### 3、内联 JavaScript

代码写在标签内部

**语法：**

注意： 此处作为了解即可，但是后面vue框架会用这种模式

```html
<body>
    <!-- 3， 内联Javascript -->
    <button onclick="alert('逗你玩')">点击我月薪过万</button>
</body>
```

## 三、JavaScript 的注释

### 1、单行注释

-  **符号：**//
- **作用：**// 右边这一行的代码会被忽略
- **快捷键：**ctrl + /

```html
 <script>
 	// 这种是单行注释
 	// 一次只能注释一行
 	// 可以重复注释
 </script>
```

### 2、 多行注释

- **符号：**/* */
- **作用：**在/* 和 */ 之间的所有内容都会被忽略
- **快捷键：**shift + alt + A (可以在VScode里面修改默认快捷键)

```html
<script>
    /*  这种是多行注释的写法*/
   /*  有些可以任意换行
    多少行都可以 */
</script>
```

## 四、JavaScript的结束符

**作用：** 使用英文的 **;** 代表语句结束

**实际情况：** 实际开发中，可写可不写, 浏览器(JavaScript 引擎) 可以自动推断语句的结束位置

**现状：** 在实际开发中，越来越多的人主张，书写 JavaScript 代码时省略结束符

 **约定：**为了风格统一，结束符要么每句都写，要么每句都不写（按照团队要求.）

```html
<script>
 alert(1);
 alert(2);
</script>
或者 
<script>
    alert(3)
    alert(4)
</script>
```

## 五、输入和输出语法

输出和输入也可理解为人和计算机的交互，用户通过键盘、鼠标等向计算机输入信息，计算机处理后再展示结果给用户，这便是一次输入和输出的过程。

###  1、输出语法

**语法一: document.write    - 向html页面输出内容**

**作用：**向body内输出内容

```html
<script>
	document.write('要输出的内容')
 </script>
```

**注意：**如果输出的内容写的是标签，也会被解析成网页元素, 如

```html
<script>
   document.write('<h2>h2我是二级标题</h2>')
</script>
```

页面输出的结果:

![img](/images/JS/输出语法.png)

后面渲染页面时会用到

**语法二 : alert     -页面弹出警示框**

**作用：**页面弹出警告对话框

```html
<script>
    alert('你好,JS')
</script>
```

![img](/images/JS/页面弹出警示框.jpg)

**语法三: console.log  --控制台输出,程序员调试使用**

**作用：**控制台输出语法，程序员调试使用

```html
<script>
    console.log('控制台打印')
</script>
```

![img](/images/JS/控制台输出.jpg)

### 2、 输入语法

**语法一 : prompt   ---弹出输入框**

**作用：**显示一个对话框，对话框中包含一条文字信息，用来提示用户输入文字

```html
<script>
  prompt('请输入您的姓名')
</script>
```

![img](/images/JS/弹出输入框.jpg)

**语法二 : confirm---弹出确认框**

**作用：**在网页弹出一个确认框,让用户输入确认/取消, 二选一

```scss
confirm('你确认成年了吗?')
```

![img](/images/JS/弹出确认框.jpg)

**JavaScript 代码执行顺序：**

- 按HTML文档流顺序执行JavaScript代码
- **alert() 和 prompt() 它们会跳过页面渲染先被执行**（目前作为了解，后期讲解详细执行过程）

## 六、字面量

定义:在计算机科学中，字面量（literal）是在计算机中描述 事/物

比如：

> 1.  我们工资是： 1000 此时 1000 就是 数字字面量
> 2. '程序员' 字符串字面量
> 3.  [] 数组字面量 {} 对象字面量 等等    

## 七、变量



### 1、变量是什么

- 白话：变量就是一个装东西的盒子。
- 通俗：变量是计算机中用来**存储数据**的“容器”，它可以让计算机变得有记忆。

![img](/images/JS/变量是什么.jpg)

使用场景:**存储数据**

**注意：变量不是数据本身，它们仅仅是一个用于存储数值的容器。可以理解为是一个个用来装东西的纸箱子。**

### 2、变量的基本使用

#### 2.1 **声明变量**

要想使用变量，首先需要创建变量（也称为声明变量或者定义变量）

**语法:**

```csharp
let  变量名
```

-  声明变量由两部分构成：声明关键字、变量名（标识）
-  let 即关键字 (let: 允许、许可、让、要)，所谓关键字是系统提供的专门用来声明（定义）变量的词语

**举例**:

```csharp
let  age
```

-  我们声明了一个age变量
- age 即变量的名称，也叫标识符

#### 2.2 变量赋值

定义了一个变量后，你就能够初始化它（赋值）。在变量名之后跟上一个“=”，然后是数值。

![img](/images/JS/变量赋值.jpg)

**注意**：是通过变量名来获得变量里面的数据  

简单点，也可以声明变量的时候直接完成赋值操作,这种操作也称为 变量**初始化**。

```cobol
<script>
	// 声明了一个age变量,同时里面存放了18 这个数据
	let age = 18
</script>
```

#### 2.3 更新变量

变量赋值后，还可以通过简单地给它一个不同的值来更新它。

```html
<script>
    // 声明了一个age变量,同时里面存放了18 这个数据
    let age = 18
    // 变量里面的数据发生变化,更改为19
    age = 19
    // 页面的输出结果为19
    document.write(age)
</script>
```

![img](/images/JS/更新变量.jpg)

**注意： let 不允许多次声明一个变量。**

#### 2.4 声明多个变量

变量赋值后，还可以通过简单地给它一个不同的值来更新它。

**语法：**多个变量中间用逗号隔开。

```javascript
let age = 18, uname = '小书生'
```

**说明：**看上去代码长度更短，但并**不推荐**这样。为了更好的可读性，请一行只声明一个变量。

```javascript
// 多行变量声明有点长,但更容易阅读
let age = 18
let uname = '小书生'
console.log(age,uname)
```

### 3、变量的本质

**内存：**计算机中存储数据的地方，相当于一个空间

**变量本质：**是程序在内存中申请的一块用来存放数据的小空间

![img](/images/JS/变量的本质.jpg)

### 4、变量的命名规则与规范

**规则：**必须遵守，不遵守报错 (法律层面)

**规范：**建议，不遵守不会报错，但不符合业内通识 （道德层面）

#### 4.1 **规则：**

>- 不能用关键字
>- 关键字：有特殊含义的字符，JavaScript 内置的一些英语词汇。例如：let、var、const、if、for等
>- 只能用下划线、字母、数字、$组成，且数字不能开头
>- 字母严格区分大小写，如 Age 和 age 是不同的变量
>- JavaScript 内部已占用于单词（关键字或保留字）不允许使用

**注：所谓关键字是指 JavaScript 内部使用的词语，如** **`let`** **和 var 和 const，保留字是指 JavaScript 内部目前没有使用的词语，但是将来可能会使用词语。**

#### 4.2 规范

> - 起名要有意义
> - 遵守小驼峰命名法
> - 第一个单词首字母小写，后面每个单词首字母大写。例：userNam

**输出多个变量的写法(中间用逗号隔开):**

> document.write(变量名1, 变量名2, 变量名3)

```html
<script>
    let uname = prompt('请输入您的姓名')
    let age = prompt('请输入您的年龄')
    let gender = prompt('请输入您的性别')
    document.write(uname, age, gender)
</script>
```

### 5、 let、const和var的区别

**let、cosnt 和 var 区别：**

在较旧的JavaScript，使用关键字 var 来声明变量 ，而不是 let或者const。

var 现在开发中一般不再使用它，只是我们可能在老版程序中看到它。

**var 声明不合理的地方:**

> - 可以先使用 在声明 (不合理)
> - var 声明过的变量可以重复声明(不合理)
> - 比如变量提升、全局变量、没有块级作用域等等

let、var、const是JavaScript中声明变量的三种方式，它们的主要区别在于变量的作用域和可变性。  

1. var：var是最早的声明变量的方式，它在全局和函数作用域

中均有效。定义一个变量后，可以随时修改它的值。但是它的局部变量存在变量声明提升的情况，即变量可以在声明之前使用，如果没有在函数内部使用var声明

变量，则其默认是全局变量。  

2. let：let是ES6中引入的一种声明变量的方式。它可以在块级作用域（即{}内部）中定义局部变量。let不允许重复声明同一变量，

且在定义后才可使用，不存在变量声明提升的情况。另外，let声明的变量可以被修改。  

3. const：const定义的是一个常量，它的值不可以被修改，一旦定义，便

不可更改。const具有块级作用域，所以它也不能被重复定义。   综上所述，var、let、const这三种变量声明方式在作用域和可变性上存在区别。在实际开发中，

应根据变量的使用场景来选择不同的声明方式，以便更好地掌控变量的作用域和可变性。

### 6 、变量拓展-数组

数组 (Array) —— 一种将 **一组数据存储在单个变量名下** 的优雅方式

```javascript
let arr = ['小书生','刘德华','张学友','黎明']
```

**使用方法:**

#### 1. 声明数组

```javascript
  let 数组名 = [数据1, 数据2, 数据3, 数据4]
```

> - 数组是按顺序保存，所以每个数据都有自己的编号
> - 计算机中的编号从0开始，所以小明的编号为0，小刚编号为1，以此类推
> - 在数组中，数据的编号也叫**索引或下标**
> - 数组可以存储任意类型的数据
> - 数组名可以更改

#### 2. 使用数组   -- 数组名[索引号/(也叫下标)]

```html
数组名 [下标]
```

```js
let arr = ['小书生', '刘德华', '张学友', '黎明']
arr[0] //小书生
arr[3] //黎明
console.log(arr[0]) // 小书生
console.log(arr[3]) // 张学友
console.log(arr[2]) // 刘德华
console.log(arr.length) // 4
```

> - 通过下标取数据, 数组的索引号(下标)从0开始
> - 取出来是什么类型的，就根据这种类型特点来访问

#### 3. 一些术语

> - **元素：**数组中保存的每个数据都叫数组元素
> - **下标：**数组中数据的编号
> - **长度：**数组中数据的个数，通过数组的length属性获得, **数组长度=下标(索引号)+1**

```js
<script>
    let arr = ['小书生', '刘德华', '张学友', '黎明']
    document.write(arr[3]) //黎明
    console.log(arr.length) //4
</script>
```
```js
<script>
  const G = 9.8
  console.log(G)
</script>
```
## 八、常量

- **概念：**使用 **const** 声明的变量称为“常量”。
- **使用场景：**当某个变量永远**不会改变**的时候，就可以使用 const 来声明，而不是let。
- **命名规范：**和变量一致
- **常量使用:**

```js
<script>
    <script>
    const G = 9.8
	  console.log(G)
</script>
```

![img](/images/JS/常量.jpg)

**注意：** 常量不允许重新赋值，声明的时候必须赋值（初始化）

**小技巧：**不需要重新赋值的数据使用const

**总结:**

> let —现在实际开发变量声明方式。
>
> var —以前的声明变量的方式，会有很多问题。
>
> const — 类似于 let ，但是变量的值无法被修改。

## 九、 数据类型

计算机程序可以处理大量的数据，为什么要给数据分类？

1. 更加充分和高效的利用内存

2. 也更加方便程序员的使用数据

![img](/images/JS/数据类型.jpg)

### 1、分类

#### 1.1 基本数据类型

> number 数字型
>
> string 字符串型
>
> boolean 布尔型
>
> undefined 未定义型
>
> null 空类型

#####  1.1.1 number 数字型

```javascript
let age = 18 //整数
let price = 88.99  // 小数
```

JavaScript 中的正数、负数、小数等 统一称为 数字类型。

**注意**

> JS 是弱数据类型，变量到底属于那种类型，只有赋值之后，我们才能确认
>
> Java是强数据类型 例如 int a = 3 必须是整数

###### **1.1.1.1 算术运算符**

数字可以有很多操作，比如，乘法 * 、除法 / 、加法 + 、减法 - 等等，所以经常和算术运算符一起。

数学运算符也叫**算术运算符**，主要包括加、减、乘、除、取余（求模）。

> - +：求和
> - -：求差
> - *：求积
> - /：求商
> - %：取模（取余数）--- **开发中经常作为某个数字是否被整除**

```javascript
<script>
    console.log(1 + 1)   // 2
    console.log(5 - 1)   // 4
    console.log(2 * 3)   // 6
    console.log(6 / 4)   //  1.5
    console.log(5 % 3)   // 求余数 2
    console.log(3 % 5)   // 求余数 3
</script>
```

###### **1.1.1.2 优先级顺序**

JavaScript中 优先级越高越先被执行，优先级相同时以书从左向右执行。

> - 乘、除、取余优先级相同
> - 加、减优先级相同
> - 乘、除、取余优先级大于加、减
> - 使用 () 可以提升优先级
> - 总结： 先乘除后加减，有括号先算括号里面的~~~

###### **1.1.1.3 NaN**

NaN 代表一个计算错误。它是一个不正确的或者一个未定义的数学操作所得到的结果

```javascript
console.log('小书生' - 5)  //控制台输出的结果: NaN .表示not a number
```

NaN 是粘性的。任何对 NaN 的操作都会返回 NaN

```javascript
console.log(NaN - 5) //控制台输出的结果: NaN
```

##### **1.1.2 字符串类型（string）**

通过单引号（ ''） 、双引号（ ""）或反引号( ` ) 包裹的数据都叫字符串，单引号和双引号没有本质上的区别，推荐使用单引号。

```js
 let uname = '小明' //使用单引号
 let gender = "男"  // 使用双引号
 let goods = `小米` // 使用反引号
 let tell = '13681113456'  //看上去是数字,但是引号包裹了就是字符串
 let str = '.'  // 这种情况叫空字符串
```

**注意事项：**

> 1. 无论单引号或是双引号必须成对使用
>
> 2. 单引号/双引号可以互相嵌套，但是不以自已嵌套自已（口诀：外双内单，或者外单内双）
>
> 3. 必要时可以使用**反引号和转义符** (**注意转义符的摆放位置**)，输出单引号或双引号
>
> 4. 反引号在键盘数字1的左边

```js
console.log('我喜欢"刘德华"')  //输出  我喜欢"刘德华"
console.log('我喜欢`张韶涵`')  //输出  我喜欢`张韶涵`
console.log('我喜欢\'张韶涵\'')   //输出  我喜欢'张韶涵'
```

**获取字符串长度** -.length可以获取字符串的长度(英文字母之间的空格和符号会算进去)

```javascript
 let str1 = 'my name is yc, I like cat'
 console.log(str1.length)  //输出 25
```

###### **1.1.2.1 字符串拼接：**

> **场景**一： + 运算符 可以实现字符串的拼接。
>
> 口诀：数字相加，字符相连

```javascript
document.write('我叫' + '刘德华') //我叫刘德华
let uname = '刘德华'
let song = '忘情水'
console.log(uname + song) // 刘德华忘情水
```

> **场景二：**拼接字符串和变量

```js
let uname = '刘德华'
let song = '忘情水'
document.write('大家好,我叫' + uname + ',我喜欢的歌' + song)   // 大家好,我叫刘德华, 我喜欢的歌忘情水
```

###### **1.1.2.2 模板字符串**  ----外面用反引号,里面用${变量名}

**语法:**

>- `` (反引号) 把所有内容包起来,里面不需要在加其他的单引号或者双引号
>- 在英文输入模式下按键盘的tab键上方那个键（1左边那个键）
>- 内容拼接变量时，用 **${ }** 包住变量

```js
let uname = '刘德华'
let song = '忘情水'
document.write(`大家好,我叫${uname},我喜欢的歌${song}`)
```

##### **1.1.3 布尔类型（boolean）**

表示肯定或否定时在计算机中对应的是布尔类型数据。

它有两个固定的值 true 和 false，表示肯定的数据用 true（真），表示否定的数据用 false（假）。

```js
<script>
    let isCool = true
    console.log(isCool) // 输出 true
    console.log(2 > 3) //输出 false
</script>
```

##### **1.1.4 未定义类型（undefined）**

未定义是比较特殊的类型，只有一个值 undefined。

**什么情况出现未定义类型？**

只声明变量，不赋值的情况下，变量的默认值为 undefined，一般很少【直接】为某个变量赋值为 undefined。

```javascript
let age  //声明变量但是未赋值
document.write(age) //输出 undefined
```

**工作中的使用场景：**

> 我们开发中经常声明一个变量，等待传送过来的数据。
>
> 如果我们不知道这个数据是否传递过来，此时我们可以通过检测这个变量是不是undefined，就判断用户是否有数据传递过来。

##### **1.1.5 null（空类型）**

JavaScript 中的 null 仅仅是一个代表“无”、“空”或“值未知”的特殊值

```javascript
 let obj = null  //赋值了但是内容未空
 document.write(obj) //输出 null
```

**null 开发中的使用场景：**

> 官方解释：把 null 作为尚未创建的对象
>
> 大白话： 将来有个变量里面存放的是一个对象，但是对象还没创建好，可以先给个null

**null 和 undefined 区别：**

> undefined 表示没有赋值 (白话:买的期房,买了但是还没建)
>
> null 表示赋值了，但是内容为空 (白话:买的毛坯房)
>
> 计算有区别:

```js
console.log(undefined + 1) //结果是 NaN
console.log(null + 1)   //结果是  1
```

#### 1.2 引用数据类型 (后续会重点介绍)

> object 对象

### 2、检测数据类型

控制台输出语句:

```js
let age =  18   //数字型
let uname =  '刘德华'  //字符串类型
let flag = false   //布尔类型
let buy     //未定义类型
let num1 = null  //空类型
console.log(age)   // 输出 18 
console.log(uname) // 输出 刘德华
console.log(flag)  // 输出 false
console.log(buy)   // undefined
console.log(num1)   // 输出 object
```

控制台语句经常用于测试结果来使用。

可以看出数字型和布尔型颜色为蓝色，字符串和undefined颜色为灰色

**方法: 通过typeof关键字检测数据类型**

typeof 运算符可以返回被检测的数据类型。它支持两种语法形式：

> 1. 作为运算符： typeof x （常用的写法）
>
> 2. 函数形式： typeof(x)

换言之，有括号和没有括号，得到的结果是一样的，所以我们直接使用运算符的写法。

```js
let age = 18 //数字型
let uname = '刘德华' //字符串类型
let flag = false //布尔类型
let buy //未定义类型
console.log(typeof age) // 输出 number 
console.log(typeof uname) // 输出 string
console.log(typeof flag) // 输出 boolean
console.log(typeof buy) // undefined
```

## 十、 类型转换

### 1、为什么需要类型转换?

JavaScript是弱数据类型： JavaScript也不知道变量到底属于那种数据类型，只有赋值了才清楚。

**坑**： **使用表单、prompt 获取过来的数据默认是字符串类型**的，此时就不能直接简单的进行加法运算。

```js
console.log('1000' + '100') //输出结果 1000100  
```

此时需要转换变量的数据类型。

通俗来说，就是把一种数据类型的变量转换成我们需要的数据类型。

### 2、转换方法

#### 2.1 隐式转换

**定义:**

> 某些运算符被执行时，系统内部自动将数据类型进行转换，这种转换称为隐式转换。

```js
console.log(1 + 2) // 3
console.log('小书生' + 2) // 小书生2
console.log('1' + 2) //12(字符)
console.log(3 - 2) //1
console.log('5' - 2) //3
console.log(typeof '123') //string
console.log(typeof + '123') //number
```

**规则：**

> +号两边只要有一个是字符串，都会把另外一个转成字符串
>
> 除了+以外的算术运算符 比如 - * / 等都会把数据转成数字类型

**缺点：**

> 转换类型不明确，靠经验才能总结

**小技巧：**

> +号作为正号解析可以转换成数字型
>
> 任何数据和字符串相加结果都是字符串

#### 2.2 显示转换

编写程序时过度依靠系统内部的隐式转换是不严禁的，因为隐式转换规律并不清晰，大多是靠经验总结的规律。

为了避免因隐式转换带来的问题，通常根逻辑需要对数据进行显示转换。

**概念** :自己写代码告诉系统该转成什么类型

**转换类型:**

##### **1. 转换为数字型**

###### **1. 1 Number(数据)**

> - 转成数字类型
> - 如果字符串内容里有非数字，转换失败时结果为 NaN（Not a Number）即不是一个数字
> - NaN也是number类型的数据，代表非数字

```js
console.log(Number('小书生'))  //输出  NaN
let str = '123'
console.log(Number(str))  //输出的是数字(蓝色)
let num = prompt('输入年薪')
console.log(num)  // 输出的字符串 (黑色)
console.log(Number(num)) //输出的是数字(蓝色)

// 方法二:
let month = Number(prompt('输入月薪'))
console.log(month) //输出的是数字(蓝色)

//方法三:
let num = + prompt('输入年薪')
console.log(num) 
```

###### 1.2 parseInt(数据) : 只保留整数

```javascript
console.log(parseInt('12.34px')) //输出 12
console.log(parseInt('abc12.34px')) //输出 NaN
```

###### 1.3 parseFloat(数据) : 可以保留小数

```javascript
console.log(parseFloat('15.88px')) //输出 15.88
```

##### **2. 数字类型转换为字符串 变量.toString()**

```js
let num = 10
let str = num.toString()
console.log(str) // 10
console.log(typeof str) //string
console.log(String(num)) //10 数字
```

