from pydantic import BaseModel, EmailStr
from datetime import datetime


# -------------------------
# Admin Schemas
# -------------------------

class AdminCreate(BaseModel):
    username: str
    email: EmailStr
    password: str


class AdminLogin(BaseModel):
    email: EmailStr
    password: str


class AdminResponse(BaseModel):
    id: int
    username: str
    email: EmailStr
    created_at: datetime

    class Config:
        from_attributes = True


# -------------------------
# Service Schemas
# -------------------------

class ServiceCreate(BaseModel):
    title: str
    description: str
    icon: str


class ServiceResponse(BaseModel):
    id: int
    title: str
    description: str
    icon: str
    created_at: datetime

    class Config:
        from_attributes = True