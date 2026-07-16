from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

# Database
from app.database import Base, engine

# Models (Database Tables Load Karne Ke Liye)
import app.models

# Routers
from app.routes.auth import router as auth_router
from app.routes.dashboard import router as dashboard_router
from app.routes.services import router as services_router


# Create Database Tables
Base.metadata.create_all(bind=engine)


# FastAPI App
app = FastAPI(
    title="NEXORA Backend API",
    version="1.0.0",
    description="Backend API for NEXORA Admin Panel"
)


# CORS
origins = [
    "http://127.0.0.1:5500",
    "http://localhost:5500",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# Include Routers
app.include_router(auth_router)
app.include_router(dashboard_router)
app.include_router(services_router)


# Home Route
@app.get("/")
def home():
    return {
        "success": True,
        "message": "Welcome to NEXORA Backend 🚀",
        "version": "1.0.0"
    }