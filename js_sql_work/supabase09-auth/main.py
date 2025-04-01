from fastapi import FastAPI

app = FastAPI() # 인스턴스 생성

@app.get("/items/{item_id}",summary="아이템 아이디 불러오기") # get method로 '/'에 해당하는  생성
def read_item(item_id: int):
    '아이템 ID {item_id}를 있어요.'
    return {'Hello':item_id} 
# 📌🛍
@app.get("/", summary="내용정리") # get method로 '/'에 해당하는  생성
def root():
    return {'Hello':'World!'} 