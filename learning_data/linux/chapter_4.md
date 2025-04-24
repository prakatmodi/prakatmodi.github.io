---
layout: learning_data
title: Chapter 4
permalink: /learning/linux/chapter_4.md/
previous_chapter: /learning/linux/chapter_3.md/
next_chapter: /learning/linux/chapter_5.md/
---

<h1 style="text-align:center;"> 4. Portable Batch System (PBS) </h1>
---

<div style="text-align: justify;">

### 4.1. Overview of PBS

Portable Batch System (PBS) is a computer software that performs job scheduling often used in UNIX cluster environment. Its primary task is to allocate computational tasks, i.e., batch jobs, among the available computing resources. Torque PBS is used as a PBS system for optimizig job scheduling and workload management in high-performance computing (HPC) system for H-Lab server.

### 4.2. Common PBS Commands
#### qsub
`qsub`: Submits a job for processing. 

Options:

`-q <queue>`: Specifies the queue to submit the job to. 

`-V`: Passes all environment variables to the job. 

`-v var[=value]`: Passes a specific environment variable to the job. 

`-b y`: Allows command to be a binary file instead of a script. 

`-w e`: Verifies options and aborts if there is an error. 

`-N <jobname>`: Sets the name of the job. 

`-l resource_list`: Specifies resources. 

`-m`: mail options.

`-M`: user list whom mail is sent.

`qsub -I -X`: Run the interactive session with default node.

`qsub -q -I queue_name -l select=number_of_nodes:ncpus=no_of_cpus_each_node:mem=total_memory`: Running interactive session with defined resources.

#### qstat
`qstat`: Monitors the status of jobs and queues.

`qstat -Q queue_name`: Shows the details of requested queue.

`qstat -q queue_name`: Shows the list of all the queues and their details.

`qstat -fQ queue_name`: Shows the details of each queue seperately.

#### qdel
`qdel job_name`: Terminates a job before its completion. 

#### qalter
`qalter`: Modifies queued batch jobs. 

#### pbsnodes
`pbsnodes -a`: Details of the nodes.

`pbsnodes -aS`: Details of the nodes as table.

`pbsnodes -aSj`: Details of the nodes as table.

#### qhold
`qhold [{-h <HOLD LIST>|-t <array_range>}] <JOBID>[ <JOBID>] ...`: server place one or more holds on a job (i.e., not eligible for execution).

### 4.3. PBS scripts 
Keep the follwoing in the begining og the code after first line i.e.`!/bin/sh`
``` 
#*** PBS setting (modify as per need)
#PBS -q Queue_Name 
#PBS -l select=number_of_nodes:ncpus=no_of_cpus_each_node:mem=total_memory
#PBS -j oe
#PBS -m ea
#PBS -V
#PBS -M mail_address 
```

### *References*

- Portable Batch System - Wikipedia. (n.d.). Retrieved March 25, 2025, from [https://en.wikipedia.org/wiki/Portable_Batch_System](https://en.wikipedia.org/wiki/Portable_Batch_System)
- Commands overview. (n.d.). Retrieved March 25, 2025, from [https://docs.adaptivecomputing.com/torque/4-1-4/help.htm#topics/12-appendices/commandsOverview.htm](https://docs.adaptivecomputing.com/torque/4-1-4/help.htm#topics/12-appendices/commandsOverview.htm)


</div>

