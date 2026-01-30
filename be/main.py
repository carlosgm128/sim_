from fastapi import APIRouter, FastAPI
from routes import user_routers, post_routes


app = FastAPI()


app.include_router(user_routers.router, prefix="/api")
app.include_router(post_routes.router, prefix="/api")

