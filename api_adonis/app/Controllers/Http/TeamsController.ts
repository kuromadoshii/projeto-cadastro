import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Team from 'App/Models/Team'
import Application from '@ioc:Adonis/Core/Application'

import { v4 as uuidv4 } from 'uuid'

export default class TeamsController {
  private validationOptions = {
    types: ['image'],
    size: '2mb',
  }

  public async store({ request, response }: HttpContextContract) {
    const body = request.body()

    const image = request.file('image', this.validationOptions)

    if (image) {
      const imageName = `${uuidv4()}.${image!.extname}`

      await image.move(Application.tmpPath('uploads'), {
        name: imageName,
      })

      body.image = imageName
    }

    const team = await Team.create(body)

    response.status(201)

    return {
      message: 'Time criado com sucesso!',
      data: team,
    }
  }

  public async index() {
    const teams = await Team.query().preload('players')

    return {
      data: teams,
    }
  }

  public async show({ params }: HttpContextContract) {
    const team = await Team.findOrFail(params.id)

    await team.load('players')

    return {
      data: team,
    }
  }

  public async destroy({ params }: HttpContextContract) {
    const team = await Team.findOrFail(params.id)

    await team.delete()

    return {
      message: 'Time excluído com sucesso!',
      data: team,
    }
  }

  public async update({ params, request }: HttpContextContract) {
    const body = request.body()

    const team = await Team.findOrFail(params.id)

    team.title = body.title
    team.description = body.description

    if (team.image != body.image || !team.image) {
      const image = request.file('image', this.validationOptions)

      if (image) {
        const imageName = `${uuidv4()}.${image!.extname}`

        await image.move(Application.tmpPath('uploads'), {
          name: imageName,
        })

        team.image = imageName
      }
    }

    await team.save()

    return {
      message: 'Time atualizado com sucesso!',
      data: team,
    }
  }
}
