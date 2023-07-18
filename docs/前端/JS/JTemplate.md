#  JTemplate语法

jtemplate, 它是客户端基于javascript的模板引擎，绑定的数据为json对象。服务端只需要把对象集合序列化成json格式并传入客户端，客户端再把json对象填充模版生成列表，一、服务端传输的只是json格式的字符串，传输的数据量可是大大减少了，二 、遍历绑定的工作转移到了客户端，大大减轻了服务端的压力。

为什么要用 js template 为什么要 模版呢，

以下应用场景可以使用模板引擎：

1、如果你有动态ajax请求数据并需要封装成视图展现给用户，想要提高自己的工作效率。
2、如果你是拼串族或者数组push族，迫切的希望改变现有的书写方式。一直拼JS代码多不易维护可读性差
3、如果你在页面布局中，存在共性模块和布局，你可以提取出公共模板，减少维护的数量。
4、还可以使用循环\判断等语句, 减少工作量

**要使用jtemplate首先要引入两个js脚本文件：**

```html
<script type="text/javascript" src="Scripts/jquery.js"></script><script type="text/javascript" src="Scripts/jquery-jtemplates.js"></script>
```

需要注意的是，jtemplate是在**jquery**的基础上实现的，所以脚本的引入顺序不能颠倒，否则会报错。

这些脚本可到http://jtemplates.tpython.com/去下载。

## 1.#if 语法

```js
 {#if |COND|}..{#elseif |COND|}..{#else}..{#/if}

  \#if 示例:

  {#if $T.hello} hello world. {#/if}

  {#if 2*8==16} good {#else} fail {#/if}

  {#if $T.age>=18)} 成人了 {#else} 未成年 {#/if}

{#if $T.list_id == 3} System list {#elseif $T.list_id == 4} Users List {#elseif $T.list_id == 5} Errors list {#/if}
```

##  2.#for 语法

```js
{#for |VAR| = |CODE| to |CODE| [step=|CODE|]}..{#else}..{#/for}

  或

  {#for |variable| = |start| to |end| [step=|stepBy|]}..{#else}..{#/for}

  \#for 示例：

  默认步长：{#for index = 1 to 10} {$T.index} {#/for}

  正向步长：{#for index = 1 to 10 step=3} {$T.index} {#/for}

  负向步长及空循环：{#for index = 1 to 10 step=-3} {$T.index} {#else} nothing {#/for}

  也可以在循环中使用变量：{#for index = $T.start to $T.end step=$T.step} {$T.index} {#/for}

  说明：{#else}是在{#for...}未能执行的时的输出内容。
```

## 3.#foreach 语法：

```js
{#foreach |VAR| as |NAME| [begin=|CODE|] [count=|CODE|] [step=|CODE|]}..{#else}..{#/for}

  \#foreach 示例：

  默认：{#foreach $T.table as record} {$T.record.name} {#/for}

  指定起始位置：{#foreach $T.table as record begin=1} {$T.record.name} {#/for}

  指定起始和循环次数：{#foreach $T.table as record begin=1 count=2} {$T.record.name} {#/for}

  指定步长：{#foreach $T.table as record step=2} {$T.record.name} {#/for}

  \#foreach 内定环境变量：

  $index - index of element in table  $T.record$index

  $iteration - id of iteration (next number begin from 0)

  $first - is first iteration?

  $last - is last iteration?

  $total - total number of iterations

  $key - key in object (name of element) (0.6.0+)

  $typeof - type of element (0.6.0+)

  \#foreach 示例所需要的数据：

  var data = {

  name: 'User list',

  list_id: 4,

  table: [

  {id: 1, name: 'Anne', age: 22, mail: 'anne@domain.com'},

  {id: 2, name: 'Amelie', age: 24, mail: 'amelie@domain.com'},

  {id: 3, name: 'Polly', age: 18, mail: 'polly@domain.com'},

  {id: 4, name: 'Alice', age: 26, mail: 'alice@domain.com'},

  {id: 5, name: 'Martha', age: 25, mail: 'martha@domain.com'}

  ]

  };

  (0.7.0+)版以后新增的功能，支持待循环集合用函数代替：

  {#foreach |FUNC| as |NAME| [begin=|CODE|] [end=|CODE|] [count=|CODE|] [step=|CODE|]}..{#else}..{#/for}

  例：

  f = function(step) {

  if(step > 100) return null; // stop if loop is too long

  return "Step " + step;

  };

  $("#result").setTemplate("{#foreach f as funcValue begin=10 end=20} {$T.funcValue}<br/> {#/for}");

  $("#result").processTemplate();

\#foreach在每次循环时请求的就是f函数，然后传递参数给f使用，并返回结果给funcValue变量
```

## 4.#cycle 语法：

```js
  {#cycle values=|ARRAY|}

  功能：提供周期性的调用，在循环中实现交替样式功能时可用到

  示例：

  {#cycle values=[1,2,3,4]}

  下面模板在执行循环时，就会周期性的调用#cycle数组中的值，这样就能实现行交替的效果:

    <table width=\"200\">

  {#foreach $T.table as row}

  <tr bgcolor=\"{#cycle values=['#AAAAAA','#CCCCCC']}\">

  <td>{$T.row.name.link('mailto:'+$T.row.mail)}</td>

  </tr>

  {#/for}

</table>
```

## 5.#include 语法：

```js
 {#include |NAME| [root=|VAR|]}

  功能：提供子模板调用

  示例：

  {#template MAIN}

    <table>

  {#foreach $T.table as record}

  {#include ROW root=$T.record}

  {#/for}

  </table>

  {#/template MAIN}

  {#template ROW}

  <tr class="values=['bcEEC','bcCEE']} {#cycle">

  <td>{$T.name}</td>

  <td>{$T.mail}</td>

  </tr>

  {#/template ROW}

  说明：{#template MAIN} 是指定模板的主要部分，必不可少。

  {#template ROW}是定义一个名为“ROW”的子模板。

{#include ROW root=$T.record}是主模板调用“ROW”子模板，并传递参数$T.record
```

## 6.#param 语法：

```js
 {#param name=|NAME| value=|CODE|}

  功能：定义模板内的局部变量参数，使用$P调用。

  示例：

  $("#result").setTemplate("{#param name=x value=888}{$P.x}");

  $("#result").processTemplate();

  输出结果：888

  示例：

  $("#result").setTemplate("{#param name=x value=$P.x+1}{$P.x}");

  $("#result").setParam('x', 777);

  $("#result").processTemplate();

  输出结果：778

  示例：

  $("#result").setTemplate("<ul>{#foreach $T.table as row}<li>{$P.x} {$T.row.name}</li>

  {#param name=x value=$P.x+3}{#/for}<ul>");

  $("#result").setParam('x', 1);

  $("#result").processTemplate(data);

  需要数据：

  var data = {

  name: 'User list',

  list_id: 4,

  table: [

  {id: 1, name: 'Anne', age: 22, mail: 'anne@domain.com'},

  {id: 2, name: 'Amelie', age: 24, mail: 'amelie@domain.com'},

  {id: 3, name: 'Polly', age: 18, mail: 'polly@domain.com'},

  {id: 4, name: 'Alice', age: 26, mail: 'alice@domain.com'},

  {id: 5, name: 'Martha', age: 25, mail: 'martha@domain.com'}

  ]

  };

  输出结果：

  1 Anne

  4 Amelia

  7 Polly

  10 Alice

  13 Martha
```



 

 