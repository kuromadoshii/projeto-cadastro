# Use uma imagem base do Node.js
FROM node

# Defina o diretório de trabalho dentro do contêiner
WORKDIR /app

# Copie o arquivo package.json e package-lock.json para o diretório de trabalho
COPY package*.json ./

# Instale as dependências do projeto
RUN npm install -g @angular/cli
RUN npm install

# Copie todo o código fonte da aplicação para o diretório de trabalho
COPY . .

# Exponha a porta 4200 usada pelo ng serve
EXPOSE 4200

# Comando a ser executado quando o contêiner for iniciado
CMD ["ng", "serve", "--host", "0.0.0.0"]