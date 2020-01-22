-- SQLite
CREATE TABLE users (
    user_id INTEGER PRIMARY KEY,
    username TEXT NOT NULL UNIQUE,
    email TEXT NOT NULL UNIQUE
);

CREATE TABLE accounts (
    account_id INTEGER PRIMARY KEY,
    balance REAL,
    user_id INTEGER,
    FOREIGN KEY(user_id) REFERENCES users(user_id)
);

--insert into users values(11111111, 'Alice', 'a@a.com');
--insert into users values(22222222, 'Bob', 'b@b.com');

--insert into accounts values(1111, 1000000.00, 11111111);
insert into accounts values(2222, -100000.00, 22222222);