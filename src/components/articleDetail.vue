<template>
  <div class="detail-page">
    <h1>{{article.title}}</h1>
    <div v-html="article.html"></div>
  </div>
</template>

<script>
  import marked from 'marked'
  import sesStorage from '../libs/sessionStorage.js'
  import {
    getSingleIssue
  } from '../services/issues.js'

  export default {
    name: 'article-detail',
    data: function() {
      return {
        article: ''
      }
    },
    created: function() {
      //console.log(this.$route)
      let number = parseInt(this.$route.params.number, 10)
      let articles = sesStorage('articles')
      if (!articles) {
        getSingleIssue(number).then(data => {
          //console.log(data)
          this.article = {
            id: data.id,
            number: data.number,
            created_at: data.created_at,
            title: data.title,
            markdown: data.body,
            html: marked(data.body),
            html_url: data.html_url,
            comments_url: data.html_url + '#partial-timeline-marker'
          }
        })
      } else {
        this.article = articles.filter(item => {
          return item.number === number
        })[0]
        console.log(this.article)
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>