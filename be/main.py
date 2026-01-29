from fastapi import APIRouter, FastAPI
from routes import user_routers


app = FastAPI()


app.include_router(user_routers.router, prefix="/api")


