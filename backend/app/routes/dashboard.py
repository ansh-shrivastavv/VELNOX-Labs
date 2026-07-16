from fastapi import APIRouter

router = APIRouter(
    prefix="/dashboard",
    tags=["Dashboard"]
)


@router.get("/")
def dashboard():

    return {
        "success": True,
        "total_services": 0,
        "total_portfolio": 0,
        "total_messages": 0,
        "message": "Dashboard API Working Successfully"
    }

from fastapi import APIRouter

router = APIRouter(
    prefix="/dashboard",
    tags=["Dashboard"]
)

@router.get("/")
def dashboard():
    return {
        "success": True,
        "message": "Dashboard Working"
    }