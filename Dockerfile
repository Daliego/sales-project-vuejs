# FROM node:20-alpine

# SHELL ["/bin/sh", "-c"]

# # RUN npm install pnpm
# # RUN pnpm setup
# RUN npm install -g @vue/cli

# RUN mkdir /sales-project-vuejs
# WORKDIR /sales-project-vuejs

# COPY package*.json ./

# COPY . .

# RUN npm install
# RUN npm run build

# EXPOSE 5173

# CMD [ "npm", "dist", "dev"]
# Etapa de build
FROM node:20.14 AS build

# Definir o diretório de trabalho dentro do contêiner
WORKDIR /app

# RUN npm install -g @vue/cli

# Copiar package.json e package-lock.json para o diretório de trabalho
COPY package*.json ./

# Instalar dependências
RUN npm install

# Copiar todo o código fonte para o diretório de trabalho, exceto node_modules
COPY . .

# Compilar a aplicação Vue.js para produção
RUN npm run build

# Etapa de produção
FROM nginx:stable-alpine

# Copiar arquivos compilados da etapa de build para o diretório padrão do Nginx
COPY --from=build /app/dist /usr/share/nginx/html

# Expor a porta 80 para o Nginx
EXPOSE 80

# Comando para rodar o Nginx
CMD ["nginx", "-g", "daemon off;"]