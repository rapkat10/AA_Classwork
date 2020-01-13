PRAGMA foreign_keys = ON;



CREATE TABLE users (
    id INTEGER PRIMARY KEY,
    fname TEXT NOT NULL,
    lname TEXT NOT NULL
);

CREATE TABLE questions (
    id INTEGER PRIMARY KEY,
    title TEXT NOT NULL,
    body TEXT NOT NULL,
    user_id INTEGER NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE question_follows (
    id INTEGER PRIMARY KEY,
    question_id INTEGER NOT NULL,
    user_id INTEGER NOT NULL,
    
    FOREIGN KEY (question_id) REFERENCES questions(id),
    FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE replies (
    id INTEGER PRIMARY KEY,
    body TEXT NOT NULL,
    question_id INTEGER NOT NULL,
    user_id INTEGER NOT NULL,
    reply_id INTEGER NOT NULL,

    FOREIGN KEY (question_id) REFERENCES questions(id),
    FOREIGN KEY (reply_id) REFERENCES replies(id)
    FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE question_likes (
    id INTEGER PRIMARY KEY,
    user_id INTEGER NOT NULL,
    question_id INTEGER NOT NULL,

    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (question_id) REFERENCES questions(id)
);

INSERT INTO
  users (fname, lname)
VALUES
    ('Rapkat', 'Amin'), ('App', 'Academy');

INSERT INTO
  questions (title, body, user_id)
VALUES
    ('Sports', 'Whats your favorite sport?', 1),
    ('Country', 'Which country do you wish to live in?', 2)


INSERT INTO
    replies (body, question_id, reply_id, user_id)
VALUES
    (
        ('Soccer is my favorite sport!'),
        (SELECT id
        from questions
        WHERE title = 'Sports'),
        (SELECT reply_id
        FROM replies),
        (SELECT id
        FROM users
        WHERE fname = 'Rapkat')
    ),

    (
        ('Not a specific country, but maybe a country in Europe!'),
        (SELECT id
        from questions
        WHERE title = 'Country'),
        (SELECT reply_id
        FROM replies),
        (SELECT id
        FROM users
        WHERE fname = 'App')
    );

INSERT INTO
    question_likes (user_id, question_id)
VALUES
    (1, 1),
    (2, 2);