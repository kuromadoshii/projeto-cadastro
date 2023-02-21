CREATE DATABASE bd_player;
USE bd_player;

CREATE TABLE `bd_player`.`players`(
  `id` INT NOT NULL AUTO_INCREMENT,
  `id_game` INT,
  `playing` BOOLEAN,
  PRIMARY KEY(ID));