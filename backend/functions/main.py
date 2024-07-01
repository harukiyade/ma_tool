import firebase_admin
from firebase_admin import credentials, firestore
from fastapi import FastAPI
from mangum import Mangum
from api.main import create_app  # FastAPIアプリケーションをインポート

# Firebase Admin SDKの初期化
# firebaseの初期化
cred = credentials.Certificate("../albert-ma-firebase-adminsdk-iat1k-6e7338f40a.json")
firebase_admin.initialize_app(cred)

db = firestore.client()
# FastAPIアプリケーションを作成
app = create_app(db)

# FastAPIアプリケーションの初期化
app = FastAPI()

# 動作確認用
@app.get("/")
def read_root():
    return {"Hello": "World"}

# Firebase Functions用のハンドラー
handler = Mangum(app)