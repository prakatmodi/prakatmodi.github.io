---
# title: "linux"
layout: learning_data
# excerpt: "linux"
# sitemap: false
permalink: /learning/linux/chapter_5.md/
---


<h1 style="text-align:center;"> 5. Climate Data Operators (CDO) </h1>

---

<div style="text-align: justify;">

### 5.1. Introduction to CDO

Climate data operators (CDO) is a collection of command line Operators to manipulate and analyse climate and numerical weather prediction data. CDO user guide can be downloaded from [https://code.mpimet.mpg.de/projects/cdo/embedded/cdo.pdf](https://code.mpimet.mpg.de/projects/cdo/embedded/cdo.pdf). It contains more than 600 operators and supports GRIB 1/2 , netCDF 3/4, SERVICE, EXTRA and IEG.

### 5.2. Installation & Setup
CDO can be downloaded with the following commands on linux system:

`apt-get install cdo` or

`sudo apt-get install cdo` 

*Note: check the of CDO operator availaiblity before installation*

### 5.3. Some common CDO commands
`cdo info file_name`: Prints information and simple statistics for each field of all input datasets.

`cdo sinfo filename`: Prints short information of a dataset.


`cdo seltimestep,timestep file_in file_out`: Selects a specific timestep.

`cdo seldate,date file_in file_out`: Selects data by date.

`cdo selmon,month file_in file_out`: Selects data by month.

`cdo selday,day file_in file_out`: Selects data by day.

`cdo selhour,hour file_in file_out`: Selects data by hour.

`cdo selgrid,grid_name file_in file_out`: Selects data by grid.

`cdo selindexbox,x1,x2,y1,y2 file_in file_out`: Selects a rectangular area.

`cdo timmean file_in file_out`: Calculates the temporal mean.

`cdo timsum file_in file_out`: Calculates the temporal sum.

`cdo timmin file_in file_out`: Calculates the temporal minimum.

`cdo timmax file_in file_out`: Calculates the temporal maximum.

`cdo daymean file_in file_out`: Calculates the daily mean.

`cdo monmean file_in file_out`: Calculates the monthly mean.

`cdo yearmean file_in file_out`: Calculates the yearly mean.

`cdo ensmean file_in file_out`: Calculates the ensemble mean.

`cdo gridarea file_in file_out`: Calculates the grid cell area.

`cdo areaavg file_in file_out`: Calculates the area-weighted average.

`cdo areasum file_in file_out`: Calculates the area-weighted sum.

`cdo mulc,number file_in file_out`: Multiplies by a constant.

`cdo addc,number file_in file_out`: Adds a constant.

`cdo mul file_in1 file_in2 file_out`: Multiplies two datasets.

`cdo add file_in1 file_in2 file_out`: Adds two datasets.

`cdo sub file_in1 file_in2 file_out`: Subtracts two datasets.

`cdo div file_in1 file_in2 file_out`: Divides two datasets.

`cdo remapbil,grid_file file_in file_out`: Bilinear remapping.

`cdo remapnn,grid_file file_in file_out`: Nearest neighbor remapping.

`cdo remapcon,grid_file file_in file_out`: Conservative remapping.

`cdo vertmean,levels file_in file_out`: Calculates the vertical mean.

`cdo vertsum,levels file_in file_out`: Calculates the vertical sum.

`cdo merge file_in1 file_in2 file_out`: Merges two datasets.

`cdo mergetime file_in1 file_in2 file_out`: Merges two datasets over time.

### 5.4. Scripting with CDO

CDO operators can be combined together using a shell script to automate and perform complex tasks for processing large datasets. e.g., The follwoing code used to do multiple analysis to process it in required format for the further analysis. 

```
# The code process the runoff data by combining mutiple operators as follows:
# -vertsum: sum all the vertical levels into one
# -chunit: change the unit from  "kg/m**2/s" to "mm day-1"
# -remapbil: perform bilinear interpolation based on the properties of "resample/grid_30min.txt" file
# -mulc: multiplication with 86400
# -shifttime: shift each year by 80 year (e.g., if years are 1990,1991, it becomes 2070,2071)
# chname: chnage the name of the varibale
# splityear: create the separte file for each year with name CM_${var}_global30_day_Runoff_YYYY
# -f nc4 -z zip: creates zip compressed netcdf 4 file output


BASE='/dir_1/dir_1_1/raw_data'      # directory for the all raw data
echo ${BASE}                        # print the path
cd ${BASE}                          # change the current direcoty to BASE directory

NC_FILE=$(ls *.nc)                  # make a list of all the availbale netcdf files

for FILE in ${NC_FILE}              # loop over all the files
do
    echo ${FILE}                        # print file_name

    var=$(echo ${FILE} | cut -c 1-5)    # take out 1st to 5th characters

    cdo -f nc chname,RUNOFF,Runoff -shifttime,80year -mulc,86400 -remapbil,"/dir_1/resample/grid_30min.txt" ...
    ... -chunit,"kg/m**2/s","mm day-1" -vertsum $FILE temp1.nc

    cdo -f nc4 -z zip splityear temp1.nc CM_${var}_global30_day_Runoff_

    rm temp1.nc

    mv miroc_*.nc /dir1/dir_1_1/pr_data/ssp370tph/          ## final processed data
done

# content for dir_1/resample/grid_30min.txt file (used for 30-arcmin resampling NtoS):
gridtype=lonlat
xsize=720
ysize=360
xfirst=-179.75
xinc=0.50
yfirst=89.75
yinc=-0.50
```

### *References*
- Overview - CDO - Project Management Service. (n.d.). Retrieved March 25, 2025, from [https://code.mpimet.mpg.de/projects/cdo](https://code.mpimet.mpg.de/projects/cdo)


</div>