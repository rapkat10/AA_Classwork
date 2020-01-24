class CatRentalRequest < ApplicationRecord

    STATUS = %w(APPROVED DENIED PENDING)

    validates :cat_id, :start_date, :end_date, :status, presence: true
    validates :status, inclusion: { in: STATUS }

    belongs_to :cat,
        foreign_key: :cat_id,
        class_name: :Cat

        
    def overlapping_requests
        CatRentalRequest
            .where(cat_id: self.cat.id)
            .where('start_date BETWEEN ? AND ?', self.start_date, self.end_date)
            .where('end_date BETWEEN ? AND ?', self.start_date, self.end_date)
    end

    def overlapping_approved_requests
        
    end

end
