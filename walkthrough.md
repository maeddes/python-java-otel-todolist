cd /workspaces/opentelemetry-training/labs/otel-in-action/
docker compose up

explain docker compose file


Java part:

wget https://github.com/open-telemetry/opentelemetry-java-instrumentation/releases/latest/download/opentelemetry-javaagent.jar
java -javaagent:./opentelemetry-javaagent.jar -jar target/todobackend-0.0.1-SNAPSHOT.jar

export MAVEN_OPTS=-javaagent:./opentelemetry-javaagent.jar


export OTEL_TRACES_EXPORTER=console
export OTEL_METRICS_EXPORTER=none
export OTEL_LOGS_EXPORTER=none

docker run -d --name jaeger  -e COLLECTOR_OTLP_ENABLED=true  -p 16686:16686  -p 14268:14268  -p 4317:4317  -p 4318:4318  jaegertracing/all-in-one



export OTEL_TRACES_EXPORTER=otlp
export OTEL_METRICS_EXPORTER=otlp
export OTEL_LOGS_EXPORTER=otlp
export OTEL_EXPORTER_OTLP_ENDPOINT="localhost:4317"
export OTEL_SERVICE_NAME=todoui-flask


export OTEL_EXPORTER_OTLP_INSECURE=true