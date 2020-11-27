DROP TABLE IF EXISTS users;
CREATE TABLE users(
    user_id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_name VARCHAR(255) NOT NULL,
    user_email VARCHAR(255) NOT NULL,
    user_password VARCHAR(255) NOT NULL
);

DROP TABLE IF EXISTS habits;

CREATE TABLE habits (
    user_id uuid NOT NULL,
    habit VARCHAR(30) NOT NULL,
    frequency INT NOT NULL
);

DROP TABLE IF EXISTS events;

CREATE TABLE events(
    user_id VARCHAR(50) NOT NULL,
    habit VARCHAR(30) NOT NULL,
    habitDate DATE DEFAULT CURRENT_DATE NOT NULL
);