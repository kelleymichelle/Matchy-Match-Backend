class Player < ApplicationRecord
  has_many :games

  validates :name, presence: true 
  
  validates :name, length: { minimum: 2 }
  # has_many :high_scores

end

