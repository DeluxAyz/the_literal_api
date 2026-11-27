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

class literalEntry(BaseModel):
    amount_ml: int

# the list of entries, starting empty
entry_list = []

# a function to build the water summary
def buildSummary(entry_list): #an parameter that accepts the entry_list
    entries = [e.amount_ml for e in entry_list]
     # doing this because for the calculations below, I ran into errors because the members of entry list
     # are objects, not ints because of the way POST sends them from the front
     
    calculated_total_volume = sum(entries) 
    calculated_entry_count = len(entries)

    summary = {
        'total_mliter': calculated_total_volume,
        'entry_count': calculated_entry_count
    }
    return summary

@literal_app.get("/")
async def root():
    return {"message": "Literally greeting from the literal back!"}

@literal_app.get("/literal_data", response_model=literalData)
async def get_literal_data():
    summary = buildSummary(entry_list)

    return literalData(
            total_mliter=summary['total_mliter'], 
            entry_count=summary['entry_count'],
        )   
        # actually, maybe i overengineered and could have gotten with a simple dictionary
        # but if this method actually works i prefer it this way
        # it didn't work the way i first did, putting the model in the handler (that flagged a TypeError)
        # but using it as a response model seems to work 
        # helps me practice use pydantic validation

@literal_app.post("/water/literal_entries", response_model=literalData)
# so i'm thinking, when i use a reponse_model it determines the structure of the response (still same pydantic model tho)
# but a normal pydantic model in the function parameters defines the structure of the request
async def add_literal_entry(entry: literalEntry):
    # defined entry as an argument using model literalEntry to structure request input
    entry_list.append(entry)
    summary = buildSummary(entry_list)
    return literalData(
        total_mliter=summary['total_mliter'], 
        entry_count=summary['entry_count'],
    )
