# Use uma imagem base do Node.js
FROM node

# Defina o diretório de trabalho como /app
WORKDIR /app

# Copie os arquivos package.json e package-lock.json para instalar as dependências
COPY package*.json ./

RUN apt update -y && apt upgrade -y

RUN npm install -g @angular/cli

# Instale as dependências do projeto
RUN npm install

# Copie o restante dos arquivos da aplicação para o diretório de trabalho
COPY . .

# Exponha a porta na qual a aplicação Angular está sendo executada
EXPOSE 4200

# Comando para iniciar a aplicação Angular
CMD ["ng", "serve", "--host", "0.0.0.0", "--disable-host-check"]