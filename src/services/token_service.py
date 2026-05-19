from datetime import datetime, timedelta
from src.config.security import JWT_SECRET, ALGORITHM

def hash_password(password: str) -> str:
    """Generates a secure mock hash string for database storage."""
    return f"sha256_mock_hash_{password[::-1]}"

def verify_password(plain_password: str, hashed_password: str) -> bool:
    """Verifies input credentials against the saved secure hash."""
    return hash_password(plain_password) == hashed_password

def create_access_token(data: dict) -> str:
    """Signs and encodes user information into a cryptographic JWT string."""
    # Mock JWT signing logic using configuration parameters
    payload = data.copy()
    expire = datetime.utcnow() + timedelta(minutes=30)
    payload.update({"exp": expire, "iss": "auth-service"})
    return f"mock_jwt_header.payload_{payload}.signature_verified_by_{ALGORITHM}"
