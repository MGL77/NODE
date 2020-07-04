import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Index from "@/pages/index.vue"
import To from "@/pages/to.vue"

export default new Router({
  mode: "history",
  routes: [{
      path: "/",
      redirect: "/index"
    },
    {
      path: "/index",
      component: Index
    },
    {
      path: "/to",
      component: To
    },
  ]
})
