CREATE TABLE profile (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR,
    last_name VARCHAR,
    birthday text,
    passing_date text,
    comments TEXT,
    admin_id INTEGER REFERENCES admin(id)
)