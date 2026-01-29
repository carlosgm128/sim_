from fastapi import APIRouter
import requests
router = APIRouter()
from config.commons import USERS_URL, HOST


@router.get("/users/")
async def read_users():
    response = requests.get(f"{HOST}{USERS_URL}")
    response.raise_for_status()
    return response.json()


@router.get("/users/{user_id}")
async def read_user(user_id: int):
    response = requests.get(f"{HOST}{USERS_URL}/{user_id}")
    response.raise_for_status()
    return response.json()

