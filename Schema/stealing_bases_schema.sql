-- Exported from QuickDBD: https://www.quickdatabasediagrams.com/
-- NOTE! If you have used non-SQL datatypes in your design, you will have to change these here.


CREATE TABLE "pitch_time_df" (
    "year" int   NOT NULL,
    "last_Name" varchar   NOT NULL,
    "first_name" varchar   NOT NULL,
    "4_Seamer" numeric   NOT NULL,
    "Sinker" numeric   NOT NULL,
    "Cutter" numeric   NOT NULL,
    "Slider" numeric   NOT NULL,
    "Changeup" numeric   NOT NULL,
    "Curve" numeric   NOT NULL,
    "Splitter" numeric   NOT NULL,
    "Knuckle" numeric   NOT NULL
);

CREATE TABLE "catcher_data_clean" (
    "year" int   NOT NULL,
    "catcher" varchar   NOT NULL,
    "maxeff_arm_2b_3b_sba" numeric   NOT NULL,
    "exchange_2b_3b_sba" numeric   NOT NULL,
    "time_second_base" numeric   NOT NULL,
    "time_third_base" numeric   NOT NULL
);

CREATE TABLE "running_splits_clean" (
    "year" int   NOT NULL,
    "last_name" varchar   NOT NULL,
    "first_name" varchar   NOT NULL,
    "seconds_since_hit_000" numeric   NOT NULL,
    "seconds_since_hit_005" numeric   NOT NULL,
    "seconds_since_hit_010" numeric   NOT NULL,
    "seconds_since_hit_015" numeric   NOT NULL,
    "seconds_since_hit_020" numeric   NOT NULL,
    "seconds_since_hit_025" numeric   NOT NULL,
    "seconds_since_hit_030" numeric   NOT NULL,
    "seconds_since_hit_035" numeric   NOT NULL,
    "seconds_since_hit_040" numeric   NOT NULL,
    "seconds_since_hit_045" numeric   NOT NULL,
    "seconds_since_hit_050" numeric   NOT NULL,
    "seconds_since_hit_055" numeric   NOT NULL,
    "seconds_since_hit_060" numeric   NOT NULL,
    "seconds_since_hit_065" numeric   NOT NULL,
    "seconds_since_hit_070" numeric   NOT NULL,
    "seconds_since_hit_075" numeric   NOT NULL,
    "seconds_since_hit_080" numeric   NOT NULL,
    "seconds_since_hit_085" numeric   NOT NULL,
    "seconds_since_hit_090" numeric   NOT NULL,
    "player_speed_(f/s)" numeric   NOT NULL
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

