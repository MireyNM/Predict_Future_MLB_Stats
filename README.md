# Predicting Future Major League Baseball Stats

## Table of Contents 
* [Overview](#overview)
* [Aim](#aim)
* [Technologies](#technologies)
* [Data](#data)
* [Analysis](#analysis)
* [Challenges](#challenges)
* [Summary](#summary)
* [Team Members](#team-members)

## Overview 
In this project we are going to study Baseball data from 2007 till 2022 to predicts some important features which can help managers in making decisions and improve their team outcome. 

## Aim
 The aim of our study is to:
* Build a machine learning model to predict whether an MLB runner will be able to successfully steal a base based on various aspects.  
* Build a ridge regression linear model to predict next BsR number (Base Running) for batters. 
* Build a ridge regression linear model to predict next WAR number (Wins Above Replacement) for pitchers 
* Visualize models' prediction on a webpage.
* (Visualize previous baseball games)

## Technologies 
* Python 3.7.13
* Jupyter Notebook 
* Visual Studio 1.69.1
* HTML
* JavaScript 
* SQl 

## Data
### Data Source 
The data was imported using `pybaseball` package, a Python package for baseball data analysis. This package scrapes Baseball Reference, Baseball Savant, and FanGraphs. It retrieves statcast data, pitching stats, batting stats, division standings/team records, awards data, and more. </br> 
We used `from pybaseball import batting_stats` to import all batters stats, `from pybaseball import pitching_stats` to import all pitchers stats and `pybaseball schedule_and_record` to visualize the games.

### Data Cleaning 
To create batters DataFrame (See Table 1) we have chose games from 2007 to 2022 where the number of players' appearances is at least 200 times per year. 
To create pitchers DataFrame (See Table 2) we have chose games from 2007 to 2022 for pitchers who have pitched 50+ innings. </br>
</br>
Finally, the data was stored on local database. 

</br>
<p align = "center">
<img width="499" alt="Outcomes_vs_Goals" src="https://user-images.githubusercontent.com/109363759/214461402-53a44d03-c763-4dc9-89d0-183076e9b8e3.png">
</p>
<p align = "center">
Table 1 - Raw Data for batters from 2007 to 2022.
</p>

<p align = "center">
<img width="499" alt="Outcomes_vs_Goals" src="https://user-images.githubusercontent.com/109363759/214461460-02bc6487-762d-4d87-aadd-79f9abe20712.png">
</p>
<p align = "center">
Table 2 - Raw Data for pitchers from 2007 to 2022.
</p>

## Analysis 
### Predict Next_BsR number for batters players 
Bsr or Base running is the base running component of WAR at FanGraphs. It's a number that caculates the player's ability to steal the bases. A great BsR rate would be equal to 6, an above average BsR is 2, an average BsR is 0 and below average BsR is -2. 

To predict the next BsR number for each batter we have trained a linear regression ridge model. 

**Data** </br>
We have used batter’s stats from 2007 to 2022 (See Table 1). These data has 5090 rows and 320 columns. </br>

**Preprocessing Data for Model** </br>
* We have removed all players who played in 1 season only.
* We have written a function that takes BsR value from previous year and add it to a new column `Next_BsR` to create the dependent variable.
* We have cleaned the data by removing all columns with null values and some object data types columns. Finally, we have dummified the `team_code` column by assigning code number instead of name to each team. This has reduced the DataFrame to 4127 rows and 195 columns.

**Train Ridge Regression Model** </br>
* We have initialized the model.
* We have used sequential features selector `SequentialFeatureSelector` to find the best features for the model. The number of features selected was 20. 
* We have split the data using `TimeSeriesSplit` to make sure we are using previous data in order to predict future one.
* We have scaled the data using `MinMaxScaler`
* In order to iterate the model through all years we have created a function that will go through each year, assign train data as all previous years and test data as current year. The output of this function is a DataFrame of actual and predicted BsR numbers. 

**Evaluate the model** </br>
To evaluate the model we have calculated the following: 
* Mean absolute error (MAE) = 1.89
* Mean squared error (MSE) = 5.96
* Square root of Mean squared error (RMSE) = 2.44
* Median absolute error (MAE) = 1.51
* Explain variance score = 0.41
* R2 score = 0.41

**Model Optimisation** </br>
To get a better accuracy we decided to use data stats from 2002 till 2022 instead of 2007 till 2022, wich increased the R2 score to 0.43. An attempt of dropping some columns was tested but it didnt make the accuracy better (See Table 3)

<p align = "center">
<img width="499" alt="BsR_Eval" src="https://user-images.githubusercontent.com/109363759/216751583-d707334c-e083-453b-a301-805e57dcc5be.png">
</p>
<p align = "center">
Table 3 - Model evaluation used to predict Next_BsR 
</p>

### Predict Next_WAR number for pitchers players 
WAR or Wins Above Replacement is a number that measures a player's value in all facets of the game by deciphering how many more wins he's worth than a replacement-level player at his same position. The higher the WAR number, the better the stat.

To predict the next WAR number for each pitcher we have trained a linear regression ridge model following the same steps that we did when training the ridge regression model to predict next Bsr. 

In Table 4 we can see the model evaluation results. 

<p align = "center">
<img width="499" alt="Outcomes_vs_Goals" src="https://user-images.githubusercontent.com/109363759/216751551-b2554d93-e05d-4317-bbe2-fdbc033ba7bf.png"
</p>
<p align = "center">
Table 4 - Model evaluation used to predict Next_WAR 
</p>


## Challenges
We faced multiple challenges during this project:
* Finding the right data: Even if there's plenty of available free data for baseball finding the right one was challenging, and it took us time to find the `pybaseball` package
* Optimizing the linear ridge regression model: While we were able to predict accuractly the next BsR and WAR numbers for some players, the predicton for others was so far from actual values.  t Therefore, some players could be miscategorized as BsR and WAR numbers would drop in case of injury, but players will appear in less games and this model is only taking pitchers who have pitched 50+ innings and batters that appeared in at least 200 times per year. Moreover, we have started by studying data from 2007 to 2022 we added more data (2002 till 2022) for BsR prediction, but we couldn't do the same for WAR predictions as the `pybaseball` package for pitchers stopped loading. 

## Summary 
At the end of this project, we were able to create a webpage where user can navigate among multiple webpages in order to:
* Check whether an MLB runner will be able to successfully steal a base based on various aspects () 
* Insert a batter's name in order to predict his next BsR number (Base Running).
* Insert a pitcher's name in order to predict his next WAR number (Wins Above Replacement). 
* Insert city and year to check previous baseball games

## Team Members
* <a href="https://github.com/MireyNM"> Mireille Nehme</a>
* <a href="https://github.com/nathalieouellette"> Nathalie Ouellette </a>
* <a href="https://github.com/wyattbaldwin"> Wyatt Baldwin </a>
* <a href="https://github.com/samuelvannoppen"> Samuel Van Noppen </a>



