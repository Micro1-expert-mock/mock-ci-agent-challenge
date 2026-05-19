from src.services.token_service import verify_password, create_access_token

def login_route(request_payload: dict):
    """
    POST /api/v1/auth/login
    Primary entry point for user authentication requests.
    """
    username = request_payload.get("username")
    password = request_payload.get("password")
    
    # Simulating a hardcoded user record look-up for mock validation
    mock_db_hash = "sha256_mock_hash_321terces" # Hashed version of 'secret123'
    
    if username == "platform_admin" and verify_password(password, mock_db_hash):
        generated_token = create_access_token(data={"sub": username, "role": "admin"})
        return {"status": 200, "access_token": generated_token, "type": "Bearer"}
        
    return {"status": 401, "error": "Invalid administrative credentials"}
