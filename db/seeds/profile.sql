CREATE TABLE profile (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR,
    last_name VARCHAR,
    birthday DATE,
    passing_date DATE,
    comments TEXT,
    admin_id INTEGER REFERENCES admin(id)
)