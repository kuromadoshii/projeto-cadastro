FROM mysql:latest

ENV MYSQL_ROOT_PASSWORD=password
ENV MYSQL_DATABASE=projeto
ENV MYSQL_USER=projeto
ENV MYSQL_PASSWORD=projeto
ENV MYSQL_ROOT_HOST=%

# Copie os scripts SQL para a pasta /docker-entrypoint-initdb.d/
COPY ./setup.sql /docker-entrypoint-initdb.d/
COPY ./dump.sql /tmp/

EXPOSE 3306

CMD ["mysqld"]
