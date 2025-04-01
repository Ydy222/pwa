from fastapi import FastAPI, File, UploadFile
from fastapi.responses import HTMLResponse
from app.utils.predict import load_model, predict_image
from PIL import Image
import io

app = FastAPI()
model = load_model()

@app.get("/")
def home():
    with open("static/index.html", "r") as f:
        return HTMLResponse(f.read())

@app.post("/predict")
async def predict(file: UploadFile = File(...)):
    image = Image.open(io.BytesIO(await file.read())).convert("RGB")
    label, confidence = predict_image(image, model)
    return {"label": label, "confidence": confidence}
