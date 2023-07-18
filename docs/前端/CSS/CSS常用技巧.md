# CSS常用技巧

## **1. 文字溢出省略号**

**单行文字**溢出：

```css
overflow: hidden;            // 溢出隐藏
text-overflow: ellipsis;      // 溢出用省略号显示
white-space: nowrap;         // 规定段落中的文本不进行换行
```

**多行文字**溢出：

```css
overflow: hidden;            // 溢出隐藏
text-overflow: ellipsis;     // 溢出用省略号显示
display:-webkit-box;         // 作为弹性伸缩盒子模型显示。
-webkit-box-orient:vertical; // 设置伸缩盒子的子元素排列方式：从上到下垂直排列
-webkit-line-clamp:3;        // 显示的行数
```

## **2. css变量**

**CSS变量**又称**CSS自定义属性**，通过在css中**自定义属性--var**与**函数var()**组成，var()用于引用自定义属性。

```css
:root {
    --c-color: orange;
}
.title {
    background-color: var(--c-color);
}
```

## **3. 渐变**

**渐变**分为**线性渐变**、**径向渐变**，在使用线性渐变的时候，使用**角度以及百分比**去控制渐变，会更加的灵活多变。

使用方式：

```css
//渐变(方向)
background: linear-gradient(to right, rgba(255, 255, 255, 0),#3FB6F7,rgba(255,255,255,0));
//渐变(角度)
background: linear-gradient(88deg, #4DF7BF 0%, rgba(77, 247, 191, 0.26) 12%, rgba(77, 247, 191, 0) 100%);
```

![image-20230516171209373](/images/CSS/线性渐变.jpg)

**边框渐变**

border有个**border-image**的属性，类似background也有个background-image一样，通过为其设置渐变颜色后，实现的渐变，后面的数字4为x方向偏移量

使用方式：

```css
.border-grident{
  margin-top: 20px;
  width: 200px;
  height: 200px;
  border: 4px solid;
  border-image: linear-gradient(to right, #8f41e9, #578aef) 4;
}
```

![image-20230516171719510](/images/CSS/边框渐变.jpg)

## 4. **background-size：cover 、ontain和100%**

**contain**：**图片放大至满足背景区域的最小边即止**，当背景区域与背景图片的宽高比不一致时，**背景区域可能会在长边下有空白覆盖不全**。

**cover**：**图片放大至能满足背景区域最大边时为止**，当背景区域与背景图片的宽高比不一致时，**背景图片会在短边下有裁切，显示不全**。

**百分比**：可以设置两个值

- 第一个设置**宽度**，第二个设置**高度**
- 如果只设置了一个值，那么第二个值默认会被设置为auto

示例:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <style>
    *{
      margin: 0;
      padding: 0;
    }
    .bg{
      width: 100%;
      height: 300px;
      background: url('./img/mtk.png');
      /* background-size: contain; */ 
      /* background-size: cover; */
      background-size: 100%;
      background-repeat: no-repeat;
    }
  </style>
</head>
<body>
  <div class="bg"></div>
</body>
</html>
```

结果依次为下图展示:

**contain**：

![image-20230516172648240](/images/CSS/contain.jpg)

**cover**：

![image-20230516172737772](/images/CSS/cover.jpg)

**百分比**（这里是100%）：

![image-20230516172755483](/images/CSS/百分比.jpg)

## **5. css伪类三角形**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>css-三角形</title>
  <style>
    .triangle {
        width: 0;
        height: 0;
        border: 100px solid;
        border-color: orangered skyblue gold yellowgreen;
	}
  </style>
</head>
<body>
  <div class="triangle"></div>
</body>
</html>
```

![image-20230517093714860](/images/CSS/三角形.jpg)

如果想要一个下的三角形，可以让border的上边框可见，其他边框颜色都设置为透明

```css
.down-triangle {
    width: 0;
    height: 0;
    border-top: 50px solid skyblue;
    border-right: 50px solid transparent;
    border-left: 50px solid transparent;
}
```

![image-20230517094251925](/images/CSS/下三角形.jpg)

## 6. 媒体查询

页面头部必须有meta关于**viewport**的声明

```html
<meta name="viewport" content="width=device-width,initial-scale=1.0" maximum-scale="1,user-scalable=no"/>
```

常在做响应式布局的时候，以及大屏的时候很常用的，从而实现在不同分辨率下，实现不同的展示效果

```css
/* 超过1920分辨率后显示多列 */
@media screen and (min-width:1920px) {
  .car_box.el-card {
    min-width: 450px !important;
    width: 450px !important;
  }
}
```

##  **7. elementui样式修改的几种方式**

在vue中，修改**elementui**的样式，style使用css的预处理器(less, sass, scss)的写法：

```css
// 第一种/deep/
/deep/ .test {
 ***
}

// 第二种::v-deep
::v-deep .test{
 ***
}
// 第三种，如果提示使用::deep代替::v-deep
::deep .test{
 ***
}
```

修改**elementui中table**的全部样式：

```css
① 修改表格头部背景
::v-deep .el-table th{
    background: orange;
}
② 修改表格行背景
::v-deep .el-table tr{
  	background: #eee;
}
③ 修改斑马线表格的背景
::v-deep .el-table--striped .el-table__body tr.el-table__row--striped td {
    background: #ccc;
}
④ 修改行内线的颜色
::v-deep .el-table td,.el-table th.is-leaf {
    border-bottom:  2px solid #eee;
}
⑤ 修改表格最底部边框颜色和高度
::v-deep .el-table::before{
  	border-bottom:  1px solid #ccc;
  	height: 3px
}
⑥ 修改表头字体颜色
::v-deep .el-table thead {
    color: #ccc;
    font-weight: 700;
}
⑦ 修改表格内容字体颜色和字体大小
::v-deep .el-table{
    color: #6B91CE;
    font-size: 14px;
}
⑧ 修改表格无数据的时候背景，字体颜色
::v-deep .el-table__empty-block{
    background: #ccc;
  }
::v-deep .el-table__empty-text{
  color: #fff
}
⑨ 修改表格鼠标悬浮hover背景色
::v-deep .el-table--enable-row-hover .el-table__body tr:hover>td {
    background-color: blue;
}
```

## 8. CSS实现底部弧度的小技巧

```css
/** 凸圆弧 */
html:
    <div class="top"></div >
css:
.top {
    position: relative;
    width: 100%;
    height: 200px;
}
.top:after {
    width: 180%;
    height: 200px;
    position: absolute;
    left: -40%;
    top: 0;
    z-index: -1;
    content: '';
    border-radius: 0 0 50% 50%;
    background: rgb(71, 71, 245);
}
/**
	先将元素自身定位为relative，伪类设置content:''，并绝对定位absolute，再设置下left ,top 值，然后通过改变width和和left就可以调节弧度。宽度需大于100%，将left设为（100%-宽度）/ 2，然后宽度越接近100%，弧度越大，相当方便。因为大部分的底部弧线都是用于背景的，实际应用的话外面只要套一个绝对定位的容器就可以了，简单实用。
*/
```

![凸弧形](/images/CSS/凸弧形.jpg)

```css
/** 凹圆弧 */
html:
    <div class="top"></div >
css:
.top {
    position: relative;
    width: 100%;
    height: 200px;
}
.top:after {
    position: absolute;
    left: 0;
    right: 0;
    bottom: -11px;
    content: "";
    z-index: 1;
    height: 20px;
    width: 100%;
    border-radius: 50%;
    background: #fff;
}
```

![凹弧形](/images/CSS/凹弧形.jpg)



## 9. calc() 动态计算函数

```css
定义用法：
calc() 函数用于动态计算长度值。
需要注意的是，运算符前后都需要保留一个空格，例如：width: calc(100% - 10px)，设置宽度比100%的宽度少10px ；
任何长度值都可以使用calc()函数进行计算；
calc()函数支持 "+", "-", "*", "/" 运算；
calc()函数使用标准的数学运算优先级规则；
支持版本：CSS3
常被用于自动调整表单域的大小以适应其容器的大小
使用如下：
/** div宽度为其容器的宽度减 - 100px */
#div {
    position: absolute;
    left: 50px;
    width: calc(100% - 100px);
    border: 1px solid black;
    background-color: yellow;
    padding: 5px;
    text-align: center;
}
/** input宽度为其容器的宽度减 1em */
input {
  padding: 2px;
  display: block;
  width: calc(100% - 1em);
}
/** form 元素自身使用了窗口可用宽度的 1/6 */
#formbox {
  width: calc(100% / 6);
  border: 1px solid black;
  padding: 4px;
}
```

## 10. CSS 不定宽高的垂直水平居中

```css
1、flex
利用到了 2 个关键属性：justify-content 和 align-items，都设置为 center，即可实现居中。

<div class="wrapper flex-center">
    <p>horizontal and vertical</p>
</div>
.wrapper {
    width: 300px;
    height: 300px;
    border: 1px solid #ccc;
}
.flex-center {
    display: flex;
    justify-content: center;
    align-items: center;
}

2、flex + margin
这是 flex 方法的变种，父级元素设置 flex，子元素设置 margin: auto;。可以理解为子元素被四周的 margin “挤” 到了中间。

<div class="wrapper">
    <p>horizontal and vertical</p>
</div>
.wrapper {
    width: 300px;
    height: 300px;
    border: 1px solid #ccc;
    display: flex;
}
.wrapper > p {
    margin: auto;
}

3、transform + absolute
这个组合，常用于图片的居中显示。

<div class="wrapper">
    <img src="test.png">
</div>
.wrapper {
    width: 300px;
    height: 300px;
    border: 1px solid #ccc;
    position: relative;
}
.wrapper > img {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
}

4、table-cell
利用 table 的单元格居中效果展示，与 flex 一样，需要写在父级元素上。

<div class="wrapper">
    <p>horizontal and vertical</p>
</div>
.wrapper {
    width: 300px;
    height: 300px;
    border: 1px solid #ccc;
    display: table-cell;
    text-align: center;
    vertical-align: middle;
}

5、absolute + 四个方向的值相等
使用绝对定位布局，设置 margin:auto，并设置 top、left、right、bottom 的值相等即可（不一定要都是 0）。
这种方法一般用于弹出层，需要设置弹出层的宽高。

<div class="wrapper">
    <p>horizontal and vertical</p>
</div>
.wrapper {
    width: 300px;
    height: 300px;
    border: 1px solid #ccc;
    position: relative;
}
.wrapper > p {
    width: 170px;
    height: 20px;
    margin: auto;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
}

6、writing-mode
这个方法可以改变文字的显示方向，比如让文字的显示变为垂直方向。
兼容性上还有些小瑕疵，但大部分浏览器，包括手机端已支持 writing-mode 的写法了。

<div class="wrapper">
    <div class="wrapper-inner">
        <p>horizontal and vertical</p>
    </div>
</div>
.wrapper {
    width: 300px;
    height: 300px;
    border: 1px solid #ccc;
    writing-mode: vertical-lr;
    text-align: center;
}
.wrapper > .wrapper-inner {
    writing-mode: horizontal-tb;
    display: inline-block;
    text-align: center;
    width: 100%;
}
.wrapper > .wrapper-inner > p {
    display: inline-block;
    margin: auto;
    text-align: left;
}

7、grid
像表格一样，网格布局让我们能够按行或列来对齐元素。然而在布局上，网格比表格更可能做到或更简单。
但它在兼容性上不如 flex，特别是 IE 浏览器，只支持 IE10 及以上。

<div class="wrapper">
    <p>horizontal and vertical</p>
</div>
.wrapper {
    width: 300px;
    height: 300px;
    border: 1px solid #ccc;
 
    display: grid;
}
.wrapper > p {
    align-self: center;
    justify-self: center;
}

8、::after
神奇的伪元素也能用来实现居中。

<div class="wrapper">
    <img src="test.png">
</div>
.wrapper {
    width: 300px;
    height: 300px;
    border: 1px solid #ccc;
    text-align: center;
}
.wrapper::after {
    content: '';
    display: inline-block;
    vertical-align: middle;
    height: 100%;
}
.wrapper > img {
    vertical-align: middle;
}
水平方向很好理解。垂直方向，可以理解为 ::after 把 img 往下拉到了中间。

9、::before
另一种是配合 font-size: 0; 共同施展的魔法。
font-size: 0; 的神秘之处在于，可以消除标签之间的间隙。另外，因为伪元素搭配的，都是最基础的 CSS 写法，所以不存在兼容性的风险。

<div class="wrapper">
    <img src="test.png">
</div>
.wrapper {
    width: 300px;
    height: 300px;
    border: 1px solid #ccc;
    text-align: center;
    font-size: 0;
}
.wrapper::before {
    display: inline-block;
    vertical-align: middle;
    font-size: 14px;
    content: '';
    height: 100%;
}
.wrapper > img {
    vertical-align: middle;
    font-size: 14px;
}
```

## **11. css给未知宽高的元素添加背景图**

1、添加背景图

```html
<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no"/>
    <meta name="format-detection" content="telephone=no"/>
    <meta name="format-detection" content="email=no"/>
    <title></title>
    <style>
        *{margin:0; padding:0;}
        #wrap{
			width:100%;
			height:100%;
			background:url('p_w_picpaths/page-small.jpg') no-repeat;
			background-size:cover;
            
			position:fixed;
			z-index:-10;
			background-position:0 0;
		}
    </style>
</head>
<body>
	<div id="wrap">
	</div>
</body>
</html>
```

2、通过img标签添加背景图

```html
<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no"/>
    <meta name="format-detection" content="telephone=no"/>
    <meta name="format-detection" content="email=no"/>
    <title></title>
    <style>
        *{margin:0; padding:0;}
        .imgBcground{
			display:block;
			width:100%;
			height:100%;
			position:fixed;
			z-index:-10;
		}
    </style>
</head>
<body>
	<div id="wrap">
		<img class="imgBcground" src="p_w_picpaths/page-small.jpg" alt="">
	</div>
</body>
</html>
```

## 12. 实用的css技巧

```css
1、首字母放大
:first-letter 选择器用于指定元素首字母的样式，它只适用于块级元素。
p:first-letter {
     font-size: 200%;
     color: #8A2BE2;
}
在线演示地址：https://codepen.io/OMGZui/pen/oNEMVvN

2、 图文环绕
Shape-outside 是一个允许设置形状的 CSS 属性，它还有助于定义文本流动的区域.
在线演示地址：https://codepen.io/OMGZui/pen/JjpBzGP

3、使用 :where() 简化代码
将相同的样式应用于多个元素时，CSS 可能如下所示：
.page div,
.paget .title,
.page #article {
 	color: red;
}
这段代码看起来可读性不太友好，这时:where() 伪类就派上用场了。
:where() 伪类函数接受一个选择器列表作为其参数，并将选择所有可以通过选择器列表中的任何规则选择的元素。
上面的代码可以使用 :where() 替换：
.page :where(div, .title, #article) {
 	color: red;
}

4、透明图像的阴影
您是否曾经尝试过向透明图像添加框阴影，只是为了让它看起来像您添加了边框？
它的工作方式是 drop-shadow 属性跟随给定图像的 alpha 通道。因此，阴影基于图像内部的形状，而不是显示在图像外部。
在线演示地址：https://codepen.io/OMGZui/pen/bGLjJNO

5、文字打字效果
借助 CSS 动画功能，我们可以使网页设计变得越来越有创意，还可以让网页栩栩如生。在此示例中，我们使用动画和“@keyframes”属性来实现打字机效果。
在线演示地址：https://codepen.io/OMGZui/pen/MWQBxqd
具体来说，对于这个演示，我们实现了 steps() 属性来分割我们的文本动画。
首先，我们必须指定 steps()，在这个例子中，我们希望设置动画的文本的字符长度。
其次，我们使用“@keyframes”来声明动画何时开始。例如，如果您在“Typing effect for text”之后写了另一个词，除非您更改 CSS 代码段中的 steps() 数量，否则动画将不会运行。
也就是说，这种效果并不是特别新鲜。然而，大多数开发人员涌向 JavaScript 库，尽管使用 CSS 可以实现相同的结果。

6、设置自定义光标
您不太可能需要强迫访问者进入一个独特的光标。至少，不是为了一般的用户体验目的。不过，关于 cursor 属性需要注意的一件事是它允许您显示图像。这相当于以照片格式显示工具提示。
一些用例包括能够比较两张不同的照片而无需在视口中渲染这些照片。例如。游标属性可用于节省设计中的空间。由于您可以将自定义光标锁定到特定的 div 元素，它不会干扰它之外的元素。
在线演示地址：https://codepen.io/OMGZui/pen/abqjMXd

7、 纯 CSS实现列表清单
在线演示地址：https://codepen.io/OMGZui/pen/yLvqwZW
它的工作方式是我们将复选框输入类型与 :checked 伪类一起使用。并在 :checked 规范返回 true 时使用 transform 属性更改状态。
您可以使用这种方法实现各种目标。例如，当用户单击特定复选框时切换隐藏内容。它适用于单选框和复选框等输入类型，但也可以应用于 <option> 和 <select> 元素。

8、文字描边
.custom-headline {
  color: transparent;
  -webkit-text-stroke: 1px #04D939;
}

9、Line Clamp
这个技巧可用于减少跨越多行的文本，我们只需要设置overflow:hidden即可。
.custom-button {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

10、固定页面头部
页面头部导航固定形式的效果，特别是页面内容很长的一些布局，这个效果非常实用，也是很多网站上比较常见的效果。
.custom-table {
  thead tr {
    position: sticky;
    top: 0;
  }
}

11、Place Items
这是 grid 和 flexbox align-items 和 justify-items 的快捷属性。
.custom-wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr;
  place-items: center center;
}

12、显示占位符
如果尚未填充是否需要突出显示 <input> 或 <textarea> 元素？然后，你可以使用占位符来显示其空间。
input:placeholder-shown {
  border-bottom: 2px solid #04D939;
}

13、@media (hover: hover) and (pointer: fine)
在移动设备上，hover 属性可能存在问题。
每次点击，悬停状态也被执行。但是，@media(hover: hover) 和(pointer: fine) 中使用了:hover 属性时，悬停只在非触摸设备上可见。
这是悬停箭头动画的示例：
@media (hover: hover) and (pointer: fine) {
    arrow:hover {
      cursor: pointer;
      color: #027333;
      transform: translateX(0.5rem);
    }
}

14、列数
此属性可用于生成基本文本列数。
在此示例中，这里有两个 <p> 标签，列数为 2。
.wrapper {
  column-count: 2;
}

15、实现平滑滚动
凡是需要滚动的地方都加一句scroll-behavior:smooth 来提升滚动体验！
a、经常使用的锚点定位功能就有了平滑定位功能，如
<a href="#">返回顶部</a>
b、全局css中也建议添加
html, body { scroll-behavior:smooth; }

16、背景混合模式
.blend-2 {
  background-image: url(../xx/xxx.jpg);
  width: 100vw;
  height: 500px;
  background-color: #20126f;
  background-size: cover;
  background-blend-mode: overlay;
}

background-blend-mode分为如下几种模式 
normal：默认值。设置正常的混合模式
multiply：正片叠底模式
screen：滤色模式
overlay：叠加模式
darken：变暗模式
lighten：变亮模式
color-dodge：颜色减淡模式
saturation：饱和度模式
color：颜色模式
luminosity：亮度模式

17、图像填充文字效果
background-clip 属性规定背景的绘制区域
border-box：以盒边界来裁剪
padding-box：以内边距为边界来裁剪
content-box：以内容区域来裁剪

回归主题：
background-clip: text; 顾名思义 就是 以文字的范围来裁剪背景图片
h1 {
  background-image: url('./flower.jpg');
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  background-color: white;
}

18、文字描边效果
div{
 color: #fff;
 font-size: 80px;
  -webkit-text-stroke: 2px blue;
  text-stroke: 2px blue;
}
<div>
这是文本。
</div>
text-stroke 属性值中有两部分，第一部分是文字描边的宽度，第二部分是文字描边的颜色。

19、将文本设为大写或小写
/* 大写 */
.upper {
  text-transform: uppercase;
}
/* 小写 */
.lower {
  text-transform: lowercase;
}
<div class="upper">
    fdsdsdsd
</div>
<div class="lower">
    DFDSWRREE
</div>

20、暂停/播放伪类
:paused 伪类可以为处于暂停状态的媒体元素设置样式

video:paused {
  opacity: 0.6;
}
需要注意，目前仅 Safari 支持该伪类:paused

21、毛玻璃特效
.login {
  backdrop-filter: blur(5px);
}
其他参数：
blur()
模糊: blur(5px)
亮度: brightness(1.4)
对比度: contrast(2)
投影: drop-shadow(4px 4px 8px #fff)
灰度: grayscale(60%)
色调变化: hue-rotate(66deg)
反相: invert(60%)
透明度: opacity(50%)
饱和度: saturate(250%)
褐色: sepia(70%)

22、自定义光标
body{  
   cursor: url("path-to-image.png"), auto;
}
cursor 内置属性：
default      默认光标（通常是一个箭头）
auto         默认。浏览器设置的光标
crosshair    光标呈现为十字线
pointer      光标呈现为指示链接的指针（一只手）
move         此光标指示某对象可被移动
e-resize     此光标指示矩形框的边缘可被向右（东）移动
ne-resize    此光标指示矩形框的边缘可被向上及向右移动（北/东）
nw-resize    此光标指示矩形框的边缘可被向上及向左移动（北/西）
n-resize     此光标指示矩形框的边缘可被向上（北）移动
se-resize    此光标指示矩形框的边缘可被向下及向右移动（南/东）
sw-resize    此光标指示矩形框的边缘可被向下及向左移动（南/西）
s-resize     此光标指示矩形框的边缘可被向下移动（南）
w-resize     此光标指示矩形框的边缘可被向左移动（西）
text         此光标指示文本
wait         此光标指示程序正忙（通常是一只表或沙漏）
help         此光标指示可用的帮助（通常是一个问号或一个气球

23、裁剪各种形状
div {
  height: 150px;
  width: 150px;
  background-color: crimson;
}

语法详解
1、矩形：
inset() : 定义一个矩形 。注意，定义矩形不是rect，而是 inset
inset()可以传入5个参数，分别对应top,right,bottom,left的裁剪位置,round radius（可选，圆角）

//示例
clip-path: inset(2em 3em 2em 1em round 2em);

2、圆形：
circle() : 定义一个圆
circle()可以传人2个可选参数；
a. 圆的半径，默认元素宽高中短的那个为直径，支持百分比
b. 圆心位置，默认为元素中心点

//示例
clip-path: circle(30% at 150px 120px);

3、椭圆：
ellipse() : 定义一个椭圆 
ellipse()可以传人3个可选参数；
a. 椭圆的X轴半径，默认是宽度的一半，支持百分比
b. 椭圆的Y轴半径，默认是高度的一半，支持百分比
c. 椭圆中心位置，默认是元素的中心点

//示例
clip-path: ellipse(45% 30% at 50% 50%);

4、多边形
polygon() : 定义一个多边形 
//语法
polygon( <fill-rule>? , [ <length-percentage> <length-percentage> ]# )
//说明
<fill-rule>可选，表示填充规则用来确定该多边形的内部。可能的值有nonzero和evenodd,默认值是nonzero
后面的每对参数表示多边形的顶点坐标（X,Y），也就是连接点

//示例
clip-path: polygon(50% 0,100% 50%,0 100%);

其他图形：
矩形：clip-path: inset(5% 20% 15% 10%)
三角形：clip-path: polygon(50% 0%, 0% 100%, 100% 100%)
菱形：clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)
梯形：clip-path: polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%)
平行四边形：clip-path: polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%)
五边形：clip-path: polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)
六边形：clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)
七边形：clip-path: polygon(50% 0%, 90% 20%, 100% 60%, 75% 100%, 25% 100%, 0% 60%, 10% 20%)
八边形：clip-path: polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)
斜角：clip-path: polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%)
槽口：clip-path: polygon(0% 15%, 15% 15%, 15% 0%, 85% 0%, 85% 15%, 100% 15%, 100% 85%, 85% 85%, 85% 100%, 15% 100%, 15% 85%, 0% 85%)
左箭头：clip-path: polygon(40% 0%, 40% 20%, 100% 20%, 100% 80%, 40% 80%, 40% 100%, 0% 50%)
右箭头：clip-path: polygon(0% 20%, 60% 20%, 60% 0%, 100% 50%, 60% 100%, 60% 80%, 0% 80%)
星星：clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)
十字架：clip-path: polygon(10% 25%, 35% 25%, 35% 0%, 65% 0%, 65% 25%, 90% 25%, 90% 50%, 65% 50%, 65% 100%, 35% 100%, 35% 50%, 10% 50%)
叉号：clip-path: polygon(20% 0%, 0% 20%, 30% 50%, 0% 80%, 20% 100%, 50% 70%, 80% 100%, 100% 80%, 70% 50%, 100% 20%, 80% 0%, 50% 30%);
对话框：clip-path: polygon(0% 0%, 100% 0%, 100% 75%, 75% 75%, 75% 100%, 50% 75%, 0% 75%)
```

