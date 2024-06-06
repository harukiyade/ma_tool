FROM python:3.9-buster
ENV PYTHONUNBUFFERED=1

WORKDIR /backend
COPY . ./

COPY requirements.txt .
RUN pip install -r requirements.txt

CMD ["uvicorn", "main:app", "--host", "0.0.0.0"]