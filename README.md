# Stealing_Bases_Project

## Table of Contents 
* [Overview](#overview)
* [Reason](#reason)
* [Aim](#aim)
* [Technologies](#technologies)
* [Data Source](#data-source)
* [Data exploration](#data-exploration)
* [Analysis](#analysis)
* [Results](#results)
* [Summary](#summary)
* [Team Members](#team-members)

## Overview 
In this project, we aim to utilize machine learning techniques to analyze baseball data from the period of 2007 to 2022. Our goal is to use this data to predict important features that can assist managers in making strategic decisions and ultimately improve their team's performance. To achieve this, we will gather and clean data from various sources, perform feature engineering, train and evaluate machine learning models, and analyze the results to identify key insights and patterns. Our findings can provide valuable information for coaches, managers and analysts in the baseball industry.

## Reason
The reason for working on this project is to develop a machine learning model that can accurately predict whether an MLB runner will be able to successfully steal 2nd or 3rd base based on their running speed, the pitcher's average pitch speed, and the catcher's pop time. This model could have practical applications for coaching and strategy decisions in baseball games, as well as for analyzing player performance and identifying potential areas for improvement. The team plans to use a variety of data sources and machine learning techniques to train and evaluate the model, and to explore the most important factors that influence base stealing success. The ultimate goal of this project is to provide valuable insights and tools for the baseball community.

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

Secondary data was downloaded from https://baseballsavant.mlb.com/, This website provides a wide range of statistics and other relevant information about MLB players, including running speed measurements for runners, pitch speed measurements for pitchers, and pop time measurements for catchers. The data was downloaded in CSV format and used for the analysis phase of the project.

Other data was scraped from https://www.mlb.com/stats/, This website provides a wide range of statistics and other relevant information about MLB players, including detailed stats about players, teams and games. The team used web scraping techniques to collect a portion of the data from this website. The data includes information such as player's performance and statistics, teams statistics and games statistics.

## Data exploration

## Analysis 

## Results 

## Summary 

## Team Members
* <a href="https://github.com/MireyNM"> Mireille Nehme</a>
* <a href="https://github.com/nathalieouellette"> Nathalie Ouellette </a>
* <a href="https://github.com/wyattbaldwin"> Wyatt Baldwin </a>
* <a href="https://github.com/samuelvannoppen"> Samuel Van Noppen </a>
