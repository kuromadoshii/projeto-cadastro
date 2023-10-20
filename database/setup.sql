-- drop user 'projeto'@'%';
-- drop user 'projeto'@'localhost';

-- create user 'projeto'@'localhost' IDENTIFIED BY 'password';
-- create user 'projeto'@'%' IDENTIFIED BY 'password';

GRANT ALL PRIVILEGES ON *.* TO 'projeto'@'%';
ALTER USER 'projeto'@'%' IDENTIFIED BY 'password';
FLUSH PRIVILEGES;