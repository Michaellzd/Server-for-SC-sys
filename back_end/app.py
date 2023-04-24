from fastapi import FastAPI, File, UploadFile,Request
import io
from PIL import Image
from predict import  predict
from fastapi.middleware.cors import CORSMiddleware

import  openai
app = FastAPI(docs_url="/docs", redoc_url="/redoc")

origins = [
    "http://localhost:3001",  # 允许来自该源的跨域请求
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)



@app.post("/predict")
async def predict_image(file: UploadFile = File(...)):
    img = Image.open(io.BytesIO(await file.read()))
    result, time_taken, gflops, confidence = predict(img)
    return {
        "class": result,
        "time_taken": time_taken,
        "gflops": gflops,
        "confidence": confidence,
    }

@app.put("/chat")
async def ask_data_amber(request: Request):
    openai.api_key = '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'
    request_body = await request.json()
    text = request_body['text']
    textall="Could you give a brief Therapy to "+text
    response = openai.Completion.create(engine = 'text-davinci-003',
                                        prompt = textall,temperature = 0.6,
                                        max_tokens = 1000)

    return {
        "chat": response.choices[0].text}
