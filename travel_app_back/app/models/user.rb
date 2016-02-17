class User < ActiveRecord::Base
  has_many :contents

  def as_json(options = {})
    super(options.merge(include: :contents))
  end
end
