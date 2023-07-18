# Win10将软件快捷方式添加到右键菜单



## **需求**

**1、当鼠标放在markdown文件上时，右键菜单中出现 "通过 xx 打开" 的选项**

**2、当鼠标放在文件夹上时，右键菜单中出现 "通过 xx 打开" 的选项**

**3、当鼠标放在非文件夹或者非文件上时（任一空白处时），右键菜单中出现 "通过 xx 打开" 的选项**

## **操作**

针对需求1的配置路径：计算机\HKEY_CLASSES_ROOT\*\shell\

针对需求2的配置路径：计算机\HKEY_CLASSES_ROOT\Folder\shell\

针对需求3的配置路径：计算机\\HKEY_CLASSES_ROOT\Directory\Background\shell\

在桌面新建 temp1.reg 和 temp2.reg 和 temp3.reg 3个文件（注：文件名称随意，后缀为reg即可），用记事本打开分别录入3个内容，保存为 "UTF-16 LE" 格式（注册表默认导入格式，以防内容含中文导入后乱码），然后分别双击3个文件，注册表会自动完成设置

以Typora、Photoshop、HBuilderX、SublimeText、Cmder为例，使用时根据自身所需进行修改、添加或删除：

temp1.reg内容：

```reg
Windows Registry Editor Version 5.00

[HKEY_CLASSES_ROOT\*\shell\Typora]
"icon"="D:\\_mei\\Applications\\Typora\\typora.exe"
@="通过 Typora 打开"
 
[HKEY_CLASSES_ROOT\*\shell\Typora\command]
@="\"D:\\_mei\\Applications\\Typora\\typora.exe\" \"%1\""

[HKEY_CLASSES_ROOT\*\shell\Photoshop]
"icon"="D:\\_mei\\Applications\\Adobe Photoshop 2020\\Photoshop.exe"
@="通过 Photoshop 打开"
 
[HKEY_CLASSES_ROOT\*\shell\Photoshop\command]
@="\"D:\\_mei\\Applications\\Adobe Photoshop 2020\\Photoshop.exe\" \"%1\""


[HKEY_CLASSES_ROOT\*\shell\HBuilderX]
"icon"="D:\\_mei\\Applications\\HBuilderX\\HBuilderX.exe"
@="通过 HBuilderX 打开"
 
[HKEY_CLASSES_ROOT\*\shell\HBuilderX\command]
@="\"D:\\_mei\\Applications\\HBuilderX\\HBuilderX.exe\" \"%1\""

[HKEY_CLASSES_ROOT\*\shell\SublimeText]
"icon"="D:\\_mei\\Applications\\sublime_text_3\\sublime_text.exe"
@="通过 SublimeText 打开"
 
[HKEY_CLASSES_ROOT\*\shell\SublimeText\command]
@="\"D:\\_mei\\Applications\\sublime_text_3\\sublime_text.exe\" \"%1\""

[HKEY_CLASSES_ROOT\*\shell\Cmder]
"icon"="D:\\_mei\\Applications\\cmder\\Cmder.exe"
@="通过 Cmder 打开"
 
[HKEY_CLASSES_ROOT\*\shell\Cmder\command]
@="\"D:\\_mei\\Applications\\cmder\\Cmder.exe\" \"%1\""
```



temp2.reg内容：

```reg
Windows Registry Editor Version 5.00

[HKEY_CLASSES_ROOT\Folder\shell\Typora]
"icon"="D:\\_mei\\Applications\\Typora\\typora.exe"
@="通过 Typora 打开"
 
[HKEY_CLASSES_ROOT\Folder\shell\Typora\command]
@="\"D:\\_mei\\Applications\\Typora\\typora.exe\" \"%1\""

[HKEY_CLASSES_ROOT\Folder\shell\Photoshop]
"icon"="D:\\_mei\\Applications\\Adobe Photoshop 2020\\Photoshop.exe"
@="通过 Photoshop 打开"
 
[HKEY_CLASSES_ROOT\Folder\shell\Photoshop\command]
@="\"D:\\_mei\\Applications\\Adobe Photoshop 2020\\Photoshop.exe\" \"%1\""


[HKEY_CLASSES_ROOT\Folder\shell\HBuilderX]
"icon"="D:\\_mei\\Applications\\HBuilderX\\HBuilderX.exe"
@="通过 HBuilderX 打开"
 
[HKEY_CLASSES_ROOT\Folder\shell\HBuilderX\command]
@="\"D:\\_mei\\Applications\\HBuilderX\\HBuilderX.exe\" \"%1\""

[HKEY_CLASSES_ROOT\Folder\shell\SublimeText]
"icon"="D:\\_mei\\Applications\\sublime_text_3\\sublime_text.exe"
@="通过 SublimeText 打开"
 
[HKEY_CLASSES_ROOT\Folder\shell\SublimeText\command]
@="\"D:\\_mei\\Applications\\sublime_text_3\\sublime_text.exe\" \"%1\""

[HKEY_CLASSES_ROOT\Folder\shell\Cmder]
"icon"="D:\\_mei\\Applications\\cmder\\Cmder.exe"
@="通过 Cmder 打开"
 
[HKEY_CLASSES_ROOT\Folder\shell\Cmder\command]
@="\"D:\\_mei\\Applications\\cmder\\Cmder.exe\" \"%1\""
```

temp3.reg内容：

```reg
Windows Registry Editor Version 5.00

[HKEY_CLASSES_ROOT\Directory\Background\shell\Typora]
"icon"="D:\\_mei\\Applications\\Typora\\typora.exe"
@="通过 Typora 打开"
 
[HKEY_CLASSES_ROOT\Directory\Background\shell\Typora\command]
@="\"D:\\_mei\\Applications\\Typora\\typora.exe\" \"%1\""

[HKEY_CLASSES_ROOT\Directory\Background\shell\Photoshop]
"icon"="D:\\_mei\\Applications\\Adobe Photoshop 2020\\Photoshop.exe"
@="通过 Photoshop 打开"
 
[HKEY_CLASSES_ROOT\Directory\Background\shell\Photoshop\command]
@="\"D:\\_mei\\Applications\\Adobe Photoshop 2020\\Photoshop.exe\" \"%1\""


[HKEY_CLASSES_ROOT\Directory\Background\shell\HBuilderX]
"icon"="D:\\_mei\\Applications\\HBuilderX\\HBuilderX.exe"
@="通过 HBuilderX 打开"
 
[HKEY_CLASSES_ROOT\Directory\Background\shell\HBuilderX\command]
@="\"D:\\_mei\\Applications\\HBuilderX\\HBuilderX.exe\" \"%1\""

[HKEY_CLASSES_ROOT\Directory\Background\shell\SublimeText]
"icon"="D:\\_mei\\Applications\\sublime_text_3\\sublime_text.exe"
@="通过 SublimeText 打开"
 
[HKEY_CLASSES_ROOT\Directory\Background\shell\SublimeText\command]
@="\"D:\\_mei\\Applications\\sublime_text_3\\sublime_text.exe\" \"%1\""

[HKEY_CLASSES_ROOT\Directory\Background\shell\Cmder]
"icon"="D:\\_mei\\Applications\\cmder\\Cmder.exe"
@="通过 Cmder 打开"
 
[HKEY_CLASSES_ROOT\Directory\Background\shell\Cmder\command]
@="\"D:\\_mei\\Applications\\cmder\\Cmder.exe\" \"%1\""
```

