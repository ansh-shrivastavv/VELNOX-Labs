from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.database import get_db
from app.models import Admin
from app.schemas import AdminCreate, AdminLogin, AdminResponse
from app.utils.security import hash_password, verify_password

router = APIRouter(
    prefix="/auth",
    tags=["Authentication"]
)


@router.post("/register", response_model=AdminResponse)
def register(admin: AdminCreate, db: Session = Depends(get_db)):

    existing_admin = db.query(Admin).filter(
        Admin.email == admin.email
    ).first()

    if existing_admin:
        raise HTTPException(
            status_code=400,
            detail="Email already registered"
        )

    new_admin = Admin(
        username=admin.username,
        email=admin.email,
        password=hash_password(admin.password)
    )

    db.add(new_admin)
    db.commit()
    db.refresh(new_admin)

    return new_admin

@router.post("/login")
def login(
    admin: AdminLogin,
    db: Session = Depends(get_db)
):
    existing_admin = db.query(Admin).filter(
        Admin.email == admin.email
    ).first()

    if not existing_admin:
        raise HTTPException(
            status_code=401,
            detail="Invalid email or password"
        )

    if not verify_password(
        admin.password,
        existing_admin.password
    ):
        raise HTTPException(
            status_code=401,
            detail="Invalid email or password"
        )

    token = create_access_token(
        {
            "sub": existing_admin.email
        }
    )

    return {
        "access_token": token,
        "token_type": "bearer"
    }

from app.utils.security import (
    hash_password,
    verify_password,
    create_access_token
)