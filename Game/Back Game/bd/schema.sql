CREATE DATABASE bd_game;
USE bd_game;

CREATE TABLE `bd_game`.`games`(
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255),
  `launched` DATE NOT NULL,
  `description` VARCHAR(255),
  PRIMARY KEY(ID));