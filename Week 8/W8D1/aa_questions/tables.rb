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


end

class Question


end

class Reply


end

class QuestionLike

end

class QuestionFollow

end


