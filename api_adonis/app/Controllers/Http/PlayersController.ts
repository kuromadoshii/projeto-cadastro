import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Player from 'App/Models/Player'
import Team from 'App/Models/Team'

export default class PlayersController {
  public async store({ request, response, params }: HttpContextContract) {
    const body = request.body()
    const teamId = params.teamId

    await Team.findOrFail(teamId)

    body.teamId = teamId

    const player = await Player.create(body)

    response.status(201)

    return {
      message: 'Jogador adicionado com sucesso!',
      data: player,
    }
  }
}
