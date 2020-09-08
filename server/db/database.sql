DROP TABLE IF EXISTS users;
CREATE TABLE users(
    user_id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_name VARCHAR(255) NOT NULL,
    user_email VARCHAR(255) NOT NULL,
    user_password VARCHAR(255) NOT NULL
);
INSERT INTO users (user_id, user_name, user_email, user_password)
VALUES ('6d235d99-50e0-4321-a443-4a5920d52132' , 'henry', 'henry123@gmail.com', 'jksfd1232');
DROP TABLE IF EXISTS habits;
CREATE TABLE habits(
    user_id VARCHAR(50) NOT NULL,
    habit VARCHAR(30) NOT NULL,
    frequency VARCHAR(30) NOT NULL
);
INSERT INTO habits (user_id, habit, frequency)
VALUES ('6d235d99-50e0-4321-a443-4a5920d52132', 'Running', '3');
DROP TABLE IF EXISTS events;
CREATE TABLE events(
    user_id VARCHAR(50) NOT NULL,
    habit VARCHAR(30) NOT NULL,
    habitDate DATE DEFAULT CURRENT_DATE NOT NULL
);
INSERT INTO events (user_id, habit)
VALUES ('6d235d99-50e0-4321-a443-4a5920d52132', 'Running');
INSERT INTO events (user_id, habit, habitDate)
VALUES ('6d235d99-50e0-4321-a443-4a5920d52132', 'Running', '2020-10-10');