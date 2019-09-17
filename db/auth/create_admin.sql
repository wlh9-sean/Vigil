INSERT INTO admin 
(first_name, last_name, email, password, is_admin)
VALUES 
(${first_name}, ${last_name}, ${email}, ${hash}, ${is_admin})
RETURNING id, first_name, last_name, email, is_admin