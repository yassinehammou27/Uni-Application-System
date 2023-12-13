CREATE TABLE IF NOT EXISTS users (
  ID UUID PRIMARY KEY,
  first_name TEXT,
  last_name TEXT,
  email TEXT UNIQUE,
  street TEXT,
  street_number TEXT,
  city TEXT,
  phone_number TEXT,
  zip_code TEXT,
  date_of_birth DATE,
  school_grade_avg TEXT,
  is_student INTEGER DEFAULT 1,
  password TEXT
)
WITH (OIDS = false);
-- CREATE TABLE IF NOT EXISTS refs (
--   ID SERIAL PRIMARY KEY,
--   content TEXT,
--   email TEXT,
--   referrer_email TEXT
-- );
CREATE TABLE IF NOT EXISTS applications (
  ID SERIAL PRIMARY KEY,
  application_subject TEXT,
  application_date DATE,
  user_id UUID,
  motivation_letter TEXT,
  current_status INTEGER DEFAULT 0
);