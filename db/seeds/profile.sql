CREATE TABLE profile (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR,
    last_name VARCHAR,
    birthday INTEGER,
    passing_date INTEGER,
    comments TEXT,
    profile_id INTEGER REFERENCES admin(id)
)