FROM python:3.9-buster
ENV PYTHONUNBUFFERED=1

WORKDIR /src
COPY api ./

RUN pip3 install --upgrade pip
RUN pip3 install fastapi uvicorn requests

CMD ["uvicorn", "main:app", "--host", "0.0.0.0"]