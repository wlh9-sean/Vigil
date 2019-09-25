SELECT first_name, last_name, comments, birthday, passing_date, img
FROM profile
WHERE id = $1