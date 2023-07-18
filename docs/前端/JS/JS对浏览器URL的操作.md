# JS对浏览器URL的操作

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>

<body>
  <script type="text/javascript">
      
    let url = "http://localhost:1850/Url/Url的操作.htm?test=测试js对URL操作#df2016ds";
      
    // 设置或获取 href 属性中在井号“#”后面的分段
    let hash = window.location.hash        // 结果：df2016ds

    // 设置或获取 location 或 URL 的 hostname + port 号码
    let host = window.location.host  // 结果：localhost:1850

    // 设置或获取 location 或 URL 的主机名称部分
    let hostname = window.location.hostname  // 结果：localhost

    // 设置或获取整个 URL 为字符串  
    let href = window.location.href  // 结果：http://localhost:1850/Url/Url的操作.htm?test=测试js对URL操作#df2016ds

    // 设置或获取对象指定的文件名或路径
    let pathname = window.location.pathname // 结果：/Url/Url的操作.htm

    // 设置或获取与 URL 关联的端口号码
    let port = window.location.port  // 结果：1850

    // 设置或获取 URL 的协议部分
    let protocol = window.location.protocol  // 结果：http:

    // 设置或获取 href 属性中跟在问号后面的部分
    let search = window.location.search
    console.log(search); //  结果：?test=%E6%B5%8B%E8%AF%95js%E5%AF%B9URL%E6%93%8D%E4%BD%9C 等同?test=测试js对URL操作#df2016ds
    // 获取浏览器协议+域名+端口
    let res = window.location.protocol + '//' + window.location.host
  </script>
</body>

</html>
```

