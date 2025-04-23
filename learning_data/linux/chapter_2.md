---
title: "Linux, HPC, PBS, CDO"
layout: learning_data
# excerpt: "linux"
# sitemap: false
permalink: /learning/linux/chapter_2.md/
---



<h1 style="text-align: center;">2. Linux server basics</h1>

---
<div style="text-align: justify;">

### 2.1. Overview of Linux Systems

Linux systems are open-source Unix-like operating systems used for many devices like computers, and serveres known for their security and versatility. Key characterstics of the linux systems are:

- Hierarchical File System
- Command-Line Interface
- Multi-user and Multi-tasking

### 2.2. Essential Commands

`ls`: show the list all the files and folders

`ls -al`: shows the list of files and folders including hidden ones 

`lscpu`: display information about the CPU architecture

`cd /path`: changing the directory

`cd ..`: goes to one upward directory

`mkdir dir_name`: creating new folder

`rm filename`: delete file

`rm -r foldername`: delete directoy/folder

`rm *`: delet all the files in current directory

`cp`: copy file/s

`mv`: to moves or rename files (or directories)

`chmod [option]... {mode | --reference=ref_file} file...`: changes the access permissions of the named files

`head [option]... [file]...`: prints the first part (10 lines by default) of each file

`tail [option]... [file]...`: prints the last part (10 lines by default) of each file

`tar -zcvf file_name.tar.gz directory_name`: tar gzip compression

`tar -cvf file_name.tar directory_name`: tar compression

`tar -zxvf file_name.tar.gz`: extraction 

`tar -xvf file_name.tar`: extraction


<table style="border-collapse: collapse; width: 40% 50% 40%; border: 1px solid gray;">
  <tr>
    <th style="border: 1px solid gray; padding: 4px;">Option</th>
    <th style="border: 1px solid gray; padding: 4px;">Full Name</th>
    <th style="border: 1px solid gray; padding: 4px;">Meaning</th>
  </tr>
  <tr>
    <td style="border: 1px solid gray; padding: 4px;">-z</td>
    <td style="border: 1px solid gray; padding: 4px;">--gzip</td>
    <td style="border: 1px solid gray; padding: 4px;">Specifies gzip format</td>
  </tr>
    <tr>
    <td style="border: 1px solid gray; padding: 4px;">-c</td>
    <td style="border: 1px solid gray; padding: 4px;">--create</td>
    <td style="border: 1px solid gray; padding: 4px;">Create a new compressed file</td>
  </tr>
    <tr>
    <td style="border: 1px solid gray; padding: 4px;">-v</td>
    <td style="border: 1px solid gray; padding: 4px;">--verbose</td>
    <td style="border: 1px solid gray; padding: 4px;">Output processing results</td>
  </tr>
    <tr>
    <td style="border: 1px solid gray; padding: 4px;">-f</td>
    <td style="border: 1px solid gray; padding: 4px;">--file</td>
    <td style="border: 1px solid gray; padding: 4px;">Compressed file name</td>
  </tr>
    <tr>
    <td style="border: 1px solid gray; padding: 4px;">-x</td>
    <td style="border: 1px solid gray; padding: 4px;">--extract</td>
    <td style="border: 1px solid gray; padding: 4px;">Extracting files from compressed file</td>
  </tr>
</table>


### *References*
- Top (GNU Coreutils 9.6). (n.d.). Retrieved March 20, 2025, from [https://www.gnu.org/software/coreutils/manual/html_node/](https://www.gnu.org/software/coreutils/manual/html_node/)
- Linux tar.gz tar 圧縮 解凍 #Linux - Qiita. (n.d.). Retrieved March 21, 2025, from [https://qiita.com/HyunwookPark/items/047ba2da9ef16bcac356](https://qiita.com/HyunwookPark/items/047ba2da9ef16bcac356)





</div>