import os
import google.generativeai as genai
from fastapi import FastAPI
from pydantic import BaseModel
from dotenv import load_dotenv
from fastapi.middleware.cors import CORSMiddleware

load_dotenv()

app = FastAPI()

# CORS Middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allows all origins
    allow_credentials=True,
    allow_methods=["*"],  # Allows all methods
    allow_headers=["*"],  # Allows all headers
)

genai.configure(api_key=os.getenv("GEMINI_API_KEY"))

class Dedication(BaseModel):
    recipient: str
    message: str

@app.post("/dedicate")
async def create_dedication(dedication: Dedication):
    model = genai.GenerativeModel('gemini-pro')
    prompt = f"""You are a 90s R&B radio DJ. Your voice is smooth and your tone is warm and inviting. A listener has sent in a dedication.

Recipient: {dedication.recipient}
Message: {dedication.message}

Generate a short, soulful voiceover script for the dedication. Start with a classic radio intro like, 'You're listening to For Lovers...' or '90s R&B vibes coming your way...'. Keep it under 50 words."""

    response = await model.generate_content_async(prompt)
    return {"script": response.text}
