# Use an official Python runtime as a parent image
FROM python:3

# Set the working directory to /app
WORKDIR /app

COPY ./requirements.txt /app/requirements.txt
# Install any needed packages specified in requirements.txt
#RUN pip install -r requirements.txt
RUN pip install flask
#RUN pip install opentelemetry-distro
#RUN pip install opentelemetry-exporter-otlp

#RUN opentelemetry-bootstrap --action=install

# Make port 5000 available to the world outside this container
EXPOSE 5000

# Copy the current directory contents into the container at /app
COPY . /app

# Define environment variable
# ENV OTEL_LOGS_EXPORTER="otlp"
# ENV OTEL_METRICS_EXPORTER="otlp"
# ENV OTEL_TRACES_EXPORTER="otlp"
# ENV OTEL_EXPORTER_OTLP_ENDPOINT="localhost:4317"

# Run app.py when the container launches
CMD ["python", "app.py"]
#CMD ["flask", "run", "-p", "5000"]