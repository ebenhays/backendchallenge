const { ApplicationResponseException } = require('../common/exceptions')

const {
  fetchRepoByStars,
  fetchReposPerPage,
  fetchReposDate,
} = require('../api/http')

const getRepositoriesByStarsService = async () => {
  try {
    const fetchRepoInfo = await fetchRepoByStars()
    return { data: fetchRepoInfo }
  } catch (error) {
    throw new ApplicationResponseException(
      'FAILED_TO_FETCH_REPO_INFO',
      'FAILED_TO_FETCH_REPO_INFO',
      500,
      error.message
    )
  }
}

const getRepositoriesService = async (limit) => {
  try {
    const fetchRepo = await fetchReposPerPage(limit)
    return { data: fetchRepo }
  } catch (error) {
    throw new ApplicationResponseException(
      'FAILED_TO_FETCH_REPO_INFO',
      'FAILED_TO_FETCH_REPO_INFO',
      500,
      error.message
    )
  }
}

const getRepositoriesByDateService = async (data) => {
  try {
    const fetchRepo = await fetchReposDate(data)
    return { data: fetchRepo }
  } catch (error) {
    throw new ApplicationResponseException(
      'FAILED_TO_FETCH_REPO_INFO',
      'FAILED_TO_FETCH_REPO_INFO',
      500,
      error.message
    )
  }
}

module.exports = {
  getRepositoriesByStarsService,
  getRepositoriesService,
  getRepositoriesByDateService,
}
