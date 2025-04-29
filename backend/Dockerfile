# Usa uma imagem base do OpenJDK pra Java 21
FROM openjdk:21-jdk-slim

# Define o diretório de trabalho dentro do container
WORKDIR /app

# Copia o arquivo pom.xml e baixa as dependências
COPY pom.xml .
RUN apt-get update && apt-get install -y maven
RUN mvn dependency:resolve

# Copia o resto do projeto
COPY src ./src

# Constrói o projeto com Maven
RUN mvn clean package

# Define o comando pra iniciar o aplicativo
CMD ["java", "-jar", "target/backend-0.0.1-SNAPSHOT.jar"]