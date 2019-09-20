UPDATE profile
set 
    first_name = ${first_name},
    last_name = ${last_name},
    birthday = ${stringBirthday},
    passing_date = ${stringPassing}
WHERE id = ${id}
