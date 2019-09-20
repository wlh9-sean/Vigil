UPDATE profile
set 
    first_name = ${first_name},
    last_name = ${last_name},
    birthday = ${birthday},
    passing_date = ${passing_date}
WHERE id = ${id}
