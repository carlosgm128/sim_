from fastapi import APIRouter
import requests

from schema.Post import Post

router = APIRouter()
from config.commons import POSTS_URL, HOST


@router.get(f"{POSTS_URL}/", response_model=list[Post])
def getAllPosts():
    response = requests.get(f"{HOST}{POSTS_URL}")
    response.raise_for_status()
    return response.json()

@router.get(f"{POSTS_URL}/{{post_id}}", response_model=Post)
def getPostById(post_id: int):
    response = requests.get(f"{HOST}{POSTS_URL}/{post_id}")
    response.raise_for_status()
    return response.json()

@router.get(f"{POSTS_URL}/{{post_id}}/comments")
def getCommentsByPostId(post_id: int):
    response = requests.get(f"{HOST}{POSTS_URL}/{post_id}/comments")
    response.raise_for_status()
    return response.json()