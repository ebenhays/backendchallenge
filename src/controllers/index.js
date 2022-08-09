const {
  getRepositoriesByStarsService,
  getRepositoriesByDateService,
  getRepositoriesService,
} = require('../services/githubSearchService')
const getRepositoriesByStars = async (req, res) => {
  try {
    const response = await getRepositoriesByStarsService()
    res.send(response)
  } catch (error) {
    res.status(500).json(error)
  }
}

const getRepositories = async (req, res) => {
  try {
    const response = await getRepositoriesService(req.query.limit)
    res.send(response)
  } catch (error) {
    res.status(500).json(error)
  }
}

const getRepositoriesByDate = async (req, res) => {
  try {
    const response = await getRepositoriesByDateService(req.query.createdDate)
    res.send(response)
  } catch (error) {
    res.status(500).json(error)
  }
}

module.exports = {
  repoByStars: getRepositoriesByStars,
  repos: getRepositories,
  repoByDate: getRepositoriesByDate,
}
