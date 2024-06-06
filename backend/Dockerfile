FROM python:3.9-buster
ENV PYTHONUNBUFFERED=1

WORKDIR /backend
COPY api ./

# RUN pip3 install --upgrade pip \
#     && pip3 install fastapi uvicorn requests \
#     && pip3 install python-multipart \
#     && pip3 install aiofiles \
#     && pip3 install pydantic

COPY requirements.txt .
RUN pip install -r requirements.txt

CMD ["uvicorn", "main:app", "--host", "0.0.0.0"]