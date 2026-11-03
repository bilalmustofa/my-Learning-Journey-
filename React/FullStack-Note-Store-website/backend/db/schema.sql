
-- CREATE DATABASE
CREATE DATABASE noteStoreApp;

USE noteStoreApp;


-- USERS TABLE
CREATE TABLE users (
    id CHAR(36) PRIMARY KEY DEFAULT (UUID()),
    email VARCHAR(255) UNIQUE NOT NULL,
    password TEXT NOT NULL,
    role ENUM('USER', 'ADMIN') NOT NULL DEFAULT 'USER',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


-- ADMIN SEEDING
INSERT INTO users (email, password, role)
VALUES (
    'admin@notestore.com',
    'admin123',
    'ADMIN'
);


-- NOTES TABLE
CREATE TABLE notes (
    id CHAR(36) PRIMARY KEY DEFAULT (UUID()),
    title VARCHAR(255) NOT NULL,
    content TEXT NOT NULL,
    user_id CHAR(36) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        ON UPDATE CURRENT_TIMESTAMP,

    CONSTRAINT fk_user
        FOREIGN KEY (user_id)
        REFERENCES users(id)
        ON DELETE CASCADE
);


-- INDEX (for performances)
CREATE INDEX idx_notes_user_id ON notes(user_id);
