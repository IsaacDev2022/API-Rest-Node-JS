CREATE DATABASE blog;

CREATE TABLE blog.post (
    id SERIAL PRIMARY KEY,
    title TEXT NOT NULL,
    content TEXT NOT NULL,
    date TIMESTAMP DEFAULT NOW()
);