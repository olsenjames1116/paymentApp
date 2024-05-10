CREATE TABLE IF NOT EXISTS "user" (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
    password TEXT NOT NULL,
    balance NUMERIC(6,2)
);

CREATE TABLE IF NOT EXISTS transaction (
    id SERIAL PRIMARY KEY,
    user1_id INT,
    user2_id INT,
    amount NUMERIC(6,2),
    timestamp TIMESTAMP WITH TIME ZONE,
    CONSTRAINT fk_user1 FOREIGN KEY (user1_id) REFERENCES "user"(id),
    CONSTRAINT fk_user2 FOREIGN KEY (user2_id) REFERENCES "user"(id)
);

CREATE TABLE IF NOT EXISTS friendship (
    id SERIAL PRIMARY KEY,
    user1_id INT,
    user2_id INT,
    CONSTRAINT fk_user1 FOREIGN KEY (user1_id) REFERENCES "user"(id),
    CONSTRAINT fk_user2 FOREIGN KEY (user2_id) REFERENCES "user"(id)
);

CREATE TABLE IF NOT EXISTS comment (
    id SERIAL PRIMARY KEY,
    transaction_id INT,
    user_id INT,
    body VARCHAR(200) NOT NULL,
    timestamp TIMESTAMP WITH TIME ZONE,
    CONSTRAINT fk_transaction FOREIGN KEY (transaction_id) REFERENCES transaction(id),
    CONSTRAINT fk_user FOREIGN KEY (user_id) REFERENCES "user"(id)
);

CREATE TABLE IF NOT EXISTS "like" (
    id SERIAL PRIMARY KEY,
    transaction_id INT,
    user_id INT,
    CONSTRAINT fk_transaction FOREIGN KEY (transaction_id) REFERENCES transaction(id),
    CONSTRAINT fk_user FOREIGN KEY (user_id) REFERENCES "user"(id)
);