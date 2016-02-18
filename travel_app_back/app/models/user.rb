class User < ActiveRecord::Base
  has_many :contents
  has_many :boards

end
