---
id: zwzj_git
title: git命令
tags:
 - git
 - git命令
description: 这是一个了解git命令的页面。
keywords: [git,git命令]
---


```git
git init  //初始化一个本地仓库

git clone xxxxx  //克隆项目

git add xxx  //添加xxx文件到缓冲区

git add .  //添加所有文件到缓冲区

git add --all  //添加所有文件到缓冲区(all可以添加被手动删除的文件而加"."不行)

git commit -m  'xxx'  //提交说明

git push  //推送到远程库

git  branch  //查看分支 带*的表示当前分支

git  branch -d xxx  //**删除 ** xxx分支(本地分支)

git branch  xxxx  //**创建**  xxx分支

git checkout xxxx  //**切换** xxxx分支

git  checkout -b xxxx  //创建分支并切换到创建的分支 （本地分支）

git  push  -u  origin xxxx  //第一次推送到远程xxx分支

git  pull  //拉取线上分支代码

git merge xxx  //合并xxx的内容到当前分支

git remote  //查看当前的远程**仓库**（不是分支）

git push origin --delete xxx  //以origin仓库为例（可通过git remote查看仓库）删除xxx分支（只删除远程，本地看之前是否存在可通过git branch -d xxx 删除）
```