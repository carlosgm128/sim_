from typing import Optional, List
from pydantic import BaseModel, EmailStr

class UserBase(BaseModel):
    name: str
    username: str
    email: EmailStr


class Address(BaseModel):
    street: str
    suite: str
    city: str
    zipcode: str