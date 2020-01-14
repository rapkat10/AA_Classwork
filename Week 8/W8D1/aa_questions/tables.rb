require 'sqlite3'
require 'singleton'

class QuestionsDatabase < SQLite3::Database

    include singleton

    def initialize
        super(questions.db)
        self.type_translation = true
        self.results_as_hash = true

    end

end

class User

    attr_reader :id
    attr_accessor :fname, :lname

    def initialize(options)
        @id = options['id']
        @fname = options['fname']
        @lname = options['lname']
    end

    def self.find_by_id(id)
        user = QuestionsDatabase.instance.execute(<<-SQL, id: id)
            SELECT
                users.*
            FROM
                users 
            WHERE
                users.id = :id
        SQL
        user.empty? ? nil : User.new(user.first)
    end

    def self.find_by_name(fname, lname)
        name = {fname: fname, lname: lname}
        user = QuestionsDatabase.instance.execute(<<-SQL, name)
            SELECT
                users.*
            FROM
                users
            WHERE
                users.fname = :fname AND users.lname = :lname
        SQL
        user.empty? ? nil : User.new(user.first)
    end

end


class Reply

    attr_accessor :id, :question_id, :parent_reply_id, :author_id, :body

    def initialize(options)
        @id = options['id']
        @question_id = options['question_id']
        @parent_reply_id = options['parent_reply_id']
        @author_id = options['author_id']
        @body = options['body']
    end

    def self.find_by_id(id)
        reply = QuestionsDatabase.instance.execute(<<-SQL, id: id)
            SELECT  
                replies.* 
            FROM 
                replies
            WHERE 
                replies.id = :id
        SQL
        reply.empty? ? nil : Reply.new(reply.first)
    end

    

end


class Question

    attr_reader :id
    attr_accessor :title, :body, :author_id

    def initialize(options)
        @id = options['id']
        @title = options['title']
        @body = options['body']
        @author_id = options['author_id']
    end

    def self.find_by_id(id)
        question = QuestionsDatabase.instance.execute(<<-SQL, id: id)
            SELECT
                questions.*
            FROM
                questions
            WHERE
                questions.id = :id
        SQL
        question.empty? ? nil : Question.new(question.first)
    end

    def self.find_by_author_id(author_id)
        question = QuestionsDatabase.instance.execute(<<-SQL, author_id: author_id)
            SELECT
                questions.*
            FROM
                questions
            WHERE
                questions.user_id = :author_id
        SQL
        question.empty? ? nil : Question.new(question.first)
    end

end


class QuestionLike

    attr_accessor :id, :question_id, :user_id

    def initialize(options)
        @id = options['id']
        @question_id = options['question_id']
        @user_id = options['user_id']
    end

    def self.find_by_id(id)
        q_like = QuestionsDatabase.instance.execute(<<-SQL, id: id)
            SELECT
                question_likes.*
            FROM
                question_likes
            WHERE
                question_likes.id = :id
        SQL
        q_like.empty? ? nil : QuestionLike.new(q_like.first)
    end

end


class QuestionFollow

    attr_accessor :id, :question_id, :user_id

    def initialize(options)
        @id = options['id']
        @question_id = options['question_id']
        @user_id = options['user_id']
    end

    def self.find_by_id(id)
        follow = QuestionsDatabase.instance.execute(<<-SQL, id: id)
            SELECT
                question_follows.*
            FROM
                question_follows
            WHERE
                question_follows.id = :id
        SQL
        follow.empty? ? nil : QuestionFollow.new(follow.first)
    end

end


