---
layout: learning_data
title: Chapter 6
permalink: /learning/linux/chapter_6.md/
previous_chapter: /learning/linux/chapter_5.md/
next_chapter: /learning/linux/chapter_7.md/
---

<h1 style="text-align:center;"> 6. Other useful linux tools </h1>
---

<div style="text-align: justify;">

### 6.1. [Rclone](https://rclone.org/)
Rclone is a command-line program to manage files on cloud storage. It helps to sync your data from your cloud storage to the local storage. It can be installed follwoing way without root permission in your system.


#### 6.1.1. Download and extract
You can download linux [Intel/AMD - 64 Bit](https://rclone.org/downloads/) or clone it from [github repository](https://github.com/rclone/rclone/releases/tag/v1.69.1) using follwoing command.
```
# download
wget https://downloads.rclone.org/v1.69.1/rclone-v1.69.1-linux-amd64.zip

# extract
unzip rclone... 

```

#### 6.1.2. Set up rclone to use as follows

```
# change the directory
cd rclone... (unzipped directory)

# for setting rclone (create ~/.local/bin and ~/.local/share/man/ folders if not preexist)
cp rclone ~/.local/bin
chmod +x ~/.local/bin/rclone
cp rclone.1 ~/.local/share/man/man1/
```

For setting google drive using rclone check here https://rclone.org/drive/

### 6.2. [xclip](https://github.com/astrand/xclip)
Its a command line ultility for using clipboard. Its very helpful copying the selection without using mouse. You can set the xclip without root permission as follows.

#### 6.2.1 Download and extract
Clone the repository using follwoing code.

`git clone https://github.com/astrand/xclip.git`

It can be downloaded and extracted as follows also:

```
# download
wget https://versaweb.dl.sourceforge.net/project/xclip/xclip/0.12/xclip-0.12.tar.gz

# extract files
tar xvzf xclip-${XCLIP_VERSION}.tar.gz
```

#### 6.2.2 Set up xclip for the system

```
# change the directory 
cd xclip...

# configure and install (make local folder if not preexist)
./configure --prefix=$HOME/local --disable-shared
make
make install

# add PATH in bashrc
export PATH="$HOME/local/bin:$PATH"
```

### 6.3. [GNU parallel](https://www.gnu.org/software/parallel/)
Its a shell tool for executing jobs in parallel using multiple computers/processors. A job can be a single command or a small script that has to be run for each of the lines in the input. The documentation for use can be downloaded from https://zenodo.org/records/1146014 

#### 6.3.1 Download and extract
```
# download
wget https://ftp.gnu.org/gnu/parallel/parallel-20120122.tar.bz2

# extract
tar -xf parllel...
```

#### 6.3.1. set up GNU parallel
```
# change directory
cd parallel...

# configure
./configure --prefix=$HOME/local --disable-shared
make
make install

# add PATH in bashrc if not available
export PATH="$HOME/local/bin:$PATH"
```
