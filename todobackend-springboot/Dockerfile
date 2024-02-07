FROM eclipse-temurin:21-jdk-alpine
RUN mkdir -p /opt/todobackend
WORKDIR /opt/todobackend
ADD https://github.com/open-telemetry/opentelemetry-java-instrumentation/releases/latest/download/opentelemetry-javaagent.jar .
COPY todobackend/target/todobackend-0.0.1-SNAPSHOT.jar /opt/todobackend
CMD ["java", "-jar", "-javaagent:/opt/todobackend/opentelemetry-javaagent.jar", "todobackend-0.0.1-SNAPSHOT.jar"]
