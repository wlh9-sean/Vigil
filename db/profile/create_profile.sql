INSERT INTO profile
(first_name, last_name, birthday, passing_date, admin_id)
VALUES
(${first_name}, ${last_name}, ${birthday}, ${passing_date}, ${id})
RETURNING id, first_name, last_name, birthday, passing_date, admin_id