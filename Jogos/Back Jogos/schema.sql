CREATE DATABASE bd_games;
USE bd_games;

CREATE TABLE `bd_games`.`games` (
  `game_id` INT NOT NULL AUTO_INCREMENT,
  `game_name` VARCHAR(255) NOT NULL,
  `release_date` DATE NOT NULL,
  `description` VARCHAR(255) NULL);
