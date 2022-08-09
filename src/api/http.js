const axios = require('axios')
const { AxiosServiceException } = require('../common/exceptions')
const axiosInstance = axios.create({
  baseURL: 'https://api.github.com/search',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/vnd.github+json',
    Authorization: `token ${process.env.GITHUB_TOKEN}`,
  },
})

const fetchRepoByStars = async () => {
  try {
    const response = await axiosInstance.get(
      '/repositories?q=stars:10..20&sort=stars&order=desc'
    )
    return response.data
  } catch (error) {
    throw new AxiosServiceException(
      'ERROR_FETCHING_REPO_DATA',
      'There was a problem fetching the repository information',
      error.response.status,
      err.response.data
    )
  }
}

const fetchReposPerPage = async (page_limit) => {
  try {
    const response = await axiosInstance.get(
      `/repositories?q=per_page:${page_limit}&sort=updated&order=desc`
    )
    return response.data
  } catch (error) {
    throw new AxiosServiceException(
      'ERROR_FETCHING_REPO_DATA',
      'There was a problem fetching the repository information',
      error.response.status,
      err.response.data
    )
  }
}

const fetchReposDate = async (query_date) => {
  try {
    const response = await axiosInstance.get(
      `/repositories?q=created:>=${query_date}&sort=updated&order=desc`
    )
    return response.data
  } catch (error) {
    throw new AxiosServiceException(
      'ERROR_FETCHING_REPO_DATA',
      'There was a problem fetching the repository information',
      error.response.status,
      err.response.data
    )
  }
}

module.exports = {
  fetchRepoByStars,
  fetchReposPerPage,
  fetchReposDate,
}
