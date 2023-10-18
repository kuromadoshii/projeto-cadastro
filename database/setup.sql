CREATE USER 'projeto'@'%' IDENTIFIED WITH mysql_native_password BY 'password';

GRANT ALL PRIVILEGES ON projeto.* TO 'projeto'@'%';

USE projeto;
SOURCE /tmp/dump.sql;

FLUSH PRIVILEGES;