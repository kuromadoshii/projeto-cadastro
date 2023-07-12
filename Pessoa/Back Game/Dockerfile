FROM python:3.10.8

RUN mkdir -p /etc/app_game

WORKDIR /etc/app_game

COPY requirements.txt requirements.txt

RUN apt update && apt upgrade -y

RUN pip install --upgrade pip

RUN pip install -r requirements.txt

COPY api_game.py /etc/app_game

CMD ["python", "api_game.py"]

EXPOSE 6969






#https://stackoverflow.com/questions/52754149/operation-of-the-mkdir-command-with-dockerfile