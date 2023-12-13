CREATE TABLE IF NOT EXISTS refs (
  ID SERIAL PRIMARY KEY,
  content TEXT,
  email TEXT,
  referrer_email TEXT
);
