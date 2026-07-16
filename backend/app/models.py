from sqlalchemy import Column, Integer, String, DateTime
from datetime import datetime

from app.database import Base


# -------------------------
# Admin Model
# -------------------------

class Admin(Base):
    __tablename__ = "admins"

    id = Column(Integer, primary_key=True, index=True)
    username = Column(String(50), unique=True, nullable=False)
    email = Column(String(100), unique=True, nullable=False)
    password = Column(String(255), nullable=False)
    created_at = Column(DateTime, default=datetime.utcnow)


# -------------------------
# Service Model
# -------------------------

class Service(Base):
    __tablename__ = "services"

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String(100), nullable=False)
    description = Column(String(500), nullable=False)
    icon = Column(String(100), nullable=False)
    created_at = Column(DateTime, default=datetime.utcnow)