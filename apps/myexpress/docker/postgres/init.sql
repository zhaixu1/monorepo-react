-- Create database if it doesn't exist
CREATE DATABASE IF NOT EXISTS myexpress_db;

-- Create test database for testing
CREATE DATABASE IF NOT EXISTS myexpress_test_db;

-- Grant permissions
GRANT ALL PRIVILEGES ON DATABASE myexpress_db TO postgres;
GRANT ALL PRIVILEGES ON DATABASE myexpress_test_db TO postgres;