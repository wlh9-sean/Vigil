INSERT INTO profile
(first_name, last_name, birthday, passing_date, img, admin_id)
VALUES
(${first_name}, ${last_name}, ${birthday}, ${passing_date}, ${img}, ${id})
RETURNING id, first_name, last_name, birthday, passing_date, img, admin_id