# Stealing_Bases_Project

## Table of Contents 
* [Overview](#overview)
* [Aim](#aim)
* [Technologies](#technologies)
* [Data Source](#data-source)
* [Data exploration](#data-exploration)
* [Analysis](#analysis)
* [Results](#results)
* [Summary](#summary)
* [Team Members](#team-members)

## Overview 
In this project we are going to study Baseball data from 2007 till 2022 to predicts some important features which can help managers in making decisions and improve their team outcome. 

## Aim
 The aim of our study is to:
* Build a machine learning model to predict whether an MLB runner will be able to successfully steal a base. 
* Predict next WAR number for pitchers. 
* Predict next WAR number for batters. 
* Visualize previous baseball games

## Technologies 
* Python 3.7.13
* Jupyter Notebook 
* Visual Studio 1.69.1
* HTML
* JavaScript

## Data Source 
The data was imported using `pybaseball` package, a Python package for baseball data analysis. This package scrapes Baseball Reference, Baseball Savant, and FanGraphs. It retrieves statcast data, pitching stats, batting stats, division standings/team records, awards data, and more. </br> 
We used `from pybaseball import batting_stats` to import all batters stats and `from pybaseball import pitching_stats` to import all pitchers stats.

</br>
To create batters DataFrame (See Fig.1) we have chose games from 2007 to 2022 where the number of players' appearances is at least 200 times per year. 
To create pitchers DataFrame (See Fig.2) we have chose games from 2007 to 2022 for pitchers who have pitched 50+ innings. </br>
Moreover, we have imported games data using `from pybaseball schedule_and_record` to vissualize data of previous games to the user. 
</br>


<p align = "center">
<img width="499" alt="Outcomes_vs_Goals" src="https://user-images.githubusercontent.com/109363759/214461402-53a44d03-c763-4dc9-89d0-183076e9b8e3.png">
</p>
<p align = "center">
Figue 1 - Raw Data for batters from 2007 to 2022.
</p>

<p align = "center">
<img width="499" alt="Outcomes_vs_Goals" src="https://user-images.githubusercontent.com/109363759/214461460-02bc6487-762d-4d87-aadd-79f9abe20712.png">
</p>
<p align = "center">
Figue 2 - Raw Data for pitchers from 2007 to 2022.
</p>


## Data exploration

## Analysis 

## Results 

## Summary 

## Team Members
* <a href="https://github.com/MireyNM"> Mireille Nehme</a>
* <a href="https://github.com/nathalieouellette"> Nathalie Ouellette </a>
* <a href="https://github.com/wyattbaldwin"> Wyatt Baldwin </a>
* <a href="https://github.com/samuelvannoppen"> Samuel Van Noppen </a>
