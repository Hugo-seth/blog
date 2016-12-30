import marked from 'marked'

import http from './common/common.js'
import sesStorage from '../libs/sessionStorage.js'

const baseUrl = '/issues'

export function getIssuesPage(params) {
  return http('get', baseUrl, params)
}

export function getSingleIssue(number) {
  let url = baseUrl + '/' + number
  return http('get', url)
}

export function getAllIssues() {
  http('get', baseUrl).then(data => {
    //console.log(data)
    let articles = data.map(item => {
      return {
        id: item.id,
        number: item.number,
        created_at: item.created_at,
        title: item.title,
        markdown: item.body,
        html: marked(item.body),
        html_url: item.html_url,
        comments_url: item.html_url + '#partial-timeline-marker'
      }
    })
    sesStorage('articles', articles)
    console.log(sesStorage('articles'))
  })
}