-- Exported from QuickDBD: https://www.quickdatabasediagrams.com/
-- NOTE! If you have used non-SQL datatypes in your design, you will have to change these here.


CREATE TABLE "pitch_time_df" (
    "year" int   NOT NULL,
    "last_Name" varchar   NOT NULL,
    "first_name" varchar   NOT NULL,
    "4_Seamer" int   NOT NULL,
    "Sinker" int   NOT NULL,
    "Cutter" int   NOT NULL,
    "Slider" int   NOT NULL,
    "Changeup" int   NOT NULL,
    "Curve" int   NOT NULL,
    "Splitter" int   NOT NULL,
    "Knuckle" int   NOT NULL
);

CREATE TABLE "catcher_data_clean" (
    "year" int   NOT NULL,
    "catcher" varchar   NOT NULL,
    "maxeff_arm_2b_3b_sba" int   NOT NULL,
    "exchange_2b_3b_sba" int   NOT NULL,
    "time_second_base" int   NOT NULL,
    "time_third_base" int   NOT NULL
);

CREATE TABLE "running_splits_clean" (
    "year" int   NOT NULL,
    "last_name" varchar   NOT NULL,
    "first_name" varchar   NOT NULL,
    "seconds_since_hit_000" int   NOT NULL,
    "seconds_since_hit_005" int   NOT NULL,
    "seconds_since_hit_010" int   NOT NULL,
    "seconds_since_hit_015" int   NOT NULL,
    "seconds_since_hit_020" int   NOT NULL,
    "seconds_since_hit_025" int   NOT NULL,
    "seconds_since_hit_030" int   NOT NULL,
    "seconds_since_hit_035" int   NOT NULL,
    "seconds_since_hit_040" int   NOT NULL,
    "seconds_since_hit_045" int   NOT NULL,
    "seconds_since_hit_050" int   NOT NULL,
    "seconds_since_hit_055" int   NOT NULL,
    "seconds_since_hit_060" int   NOT NULL,
    "seconds_since_hit_065" int   NOT NULL,
    "seconds_since_hit_070" int   NOT NULL,
    "seconds_since_hit_075" int   NOT NULL,
    "seconds_since_hit_080" int   NOT NULL,
    "seconds_since_hit_085" int   NOT NULL,
    "seconds_since_hit_090" int   NOT NULL,
    "player_speed_(f/s)" int   NOT NULL
);

CREATE TABLE "year" (
    "year" int   NOT NULL,
    CONSTRAINT "pk_year" PRIMARY KEY (
        "year"
     )
);

ALTER TABLE "pitch_time_df" ADD CONSTRAINT "fk_pitch_time_df_year" FOREIGN KEY("year")
REFERENCES "year" ("year");

ALTER TABLE "catcher_data_clean" ADD CONSTRAINT "fk_catcher_data_clean_year" FOREIGN KEY("year")
REFERENCES "year" ("year");

ALTER TABLE "running_splits_clean" ADD CONSTRAINT "fk_running_splits_clean_year" FOREIGN KEY("year")
REFERENCES "year" ("year");

