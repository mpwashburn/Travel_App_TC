class ContentsController < ApplicationController
  def post_params
    params.require(:content).permit(:src_url, :title)
  end

  def index
    render :json => Content.all
  end

  def create
    render :json => Content.find(params)
  end

  def show
    render :json Content.find(params[:id])
  end

  def upvote
    content = Content.find(params[:id])
    content.increment!(:upvotes)

    render :json => content
  end

  private
  def content_params
    params.require(:content).permit(:src_url, :title)
  end
end
