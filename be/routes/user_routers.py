from fastapi import APIRouter
import requests

from schema.User import User
router = APIRouter()
from config.commons import USERS_URL, HOST


@router.get("/users/" , response_model=list[dict])
async def read_users():
    response = requests.get(f"{HOST}{USERS_URL}")
    response.raise_for_status()
    return response.json()


@router.get("/users/{user_id}", response_model=dict)
async def read_user(user_id: int):
    response = requests.get(f"{HOST}{USERS_URL}/{user_id}")
    response.raise_for_status()
    return response.json()

