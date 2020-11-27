INSERT INTO users (user_id, user_name, user_email, user_password)
VALUES ('72807caf-495f-44a7-8cd4-f95df053049a', 'habit', 'h@h.com', '$2b$10$oYhSgKahQLrhRZlPbtJyQueQcFwIvjgZ5OtCpGQEIwkwvBa390Dri' );

INSERT INTO habits (user_id, habit, frequency)
VALUES ('72807caf-495f-44a7-8cd4-f95df053049a', 'Running', 3);

INSERT INTO events (user_id, habit, habitDate)
VALUES ('72807caf-495f-44a7-8cd4-f95df053049a', 'Running', '2020-10-10');