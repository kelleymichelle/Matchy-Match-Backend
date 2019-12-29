class GamesController < ApplicationController

  def index
    games = Game.all
    render json: games
  end

  def show
    game = Game.find_by(id: params[:id])
    render json: game, include: [:player, :tiles]
  end

end