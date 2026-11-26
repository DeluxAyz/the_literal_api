from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware

literal_app = FastAPI()

# setting up CORS so the literal front can speak to the literal back
# literally
literal_app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"], # the svelte port URL, localhost for now
    allow_credentials=True,
    allow_methods=["*"], # the star means allow all
    allow_headers=["*"],
)

# gonna create a pydantic class for how the data in the object will be collected
class literalData(BaseModel):
    total_mliter: int
    entry_count: int

@literal_app.get("/")
async def root():
    return {"message": "Literally greeting from the literal back!"}

@literal_app.get("/literal_data", response_model=literalData)
async def get_literal_data():
    return literalData(total_mliter=0, entry_count=0)   
        # actually, maybe i overengineered and could have gotten with a simple dictionary
        # but if this method actually works i prefer it this way
        # it didn't work the way i first did, putting the model in the handler (that flagged a TypeError)
        # but using it as a response model seems to work 
        # helps me practice use pydantic validation