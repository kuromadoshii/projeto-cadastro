BEGIN;

CREATE TABLE `adonis_schema` (
    `id` INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    `batch` INT NOT NULL,
    `migration_time` DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE `moments` (
    `id` INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    `title` VARCHAR(255),
    `description` VARCHAR(255),
    `image` VARCHAR(255),
    `created_at` DATETIME,
    `updated_at` DATETIME
);

CREATE TABLE `comments` (
    `id` INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    `username` VARCHAR(255),
    `text` VARCHAR(255),
    `moment_id` INT,
    `created_at` DATETIME,
    `updated_at` DATETIME,
    FOREIGN KEY(`moment_id`) REFERENCES `moments`(`id`) ON DELETE CASCADE
);

COMMIT;