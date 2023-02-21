CREATE DATABASE bd_people;
USE bd_people;

CREATE TABLE `bd_people`.`people` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `date_birth` DATE NOT NULL,
  `cpf` VARCHAR(11) NOT NULL,
  `rg` VARCHAR(9) NOT NULL,
  `address` VARCHAR(255) NOT NULL,
  PRIMARY KEY (ID));
