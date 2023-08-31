CREATE DATABASE bd_player;
USE bd_player;

CREATE TABLE `bd_player`.`players` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `nick` VARCHAR(15) NOT NULL,
  `date_birth` DATE NOT NULL,
  `cpf` VARCHAR(11) NOT NULL,
  `id_game` INT NOT NULL,
  `address` VARCHAR(255),
  `playing` BOOLEAN,
  PRIMARY KEY (ID));