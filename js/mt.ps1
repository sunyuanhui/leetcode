$directory = "$args"
$titleStart = $directory.IndexOf(".") + 1
$title = $directory.Substring($titleStart)
$templatejs = $title -replace " ", ""
$title = $title.Trim().ToLower()

# 创建目录
New-Item -name $directory -type directory

# 读取模板
$jsTemplate = [IO.File]::ReadAllText(".\template.js")
# 创建文件
Set-Content -Encoding utf8 ".\$directory\$templatejs.js" $jsTemplate

# 读取模板
$testTemplate = [IO.File]::ReadAllText(".\template.test.js")
# 修改模板
$testTemplate = $testTemplate.Replace("[TEMPLATEJS]", $templatejs)
$testTemplate = $testTemplate.Replace("[TITLE]", $title)
# 创建文件
Set-Content -Encoding utf8 ".\$directory\$templatejs.test.js" $testTemplate
