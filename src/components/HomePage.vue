<template>
  <div class="home-page">
    <h1>{{ msg }}</h1>
    <ul class="article-list">
      <li v-for="article of articles">
        <router-link :to="article.number.toString()">
          <h2>{{article.title}}</h2>
        </router-link>    
      </li>
    </ul>
  </div>
</template>

<script>
  import marked from 'marked'
  import {
    getIssuesPage,
    getAllIssues
  } from '../services/issues.js'
  import sesStorage from '../libs/sessionStorage.js'

  let params = {
    page: 1,
    per_page: 2
  }

  export default {
    name: 'home-page',
    data: function() {
      return {
        msg: '文章列表',
        articles: []
      }
    },
    created: function() {
      if (!sesStorage('articles')) {
        getIssuesPage(params).then(data => {
          //console.log(data)
          this.articles = data.map(item => {
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
        })
      } else {
        this.articles = sesStorage('articles').slice(0, params.per_page)
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .editor-result {
    padding: 10px;
    border: 1px solid #eee;
  }
</style>