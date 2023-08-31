import PaginatePanel from "../src/components/PaginatePanel.vue"
import Paginate from "../src/components/Paginate.vue"


export default {
 install: (app, options) => {
  // Plugin code goes here
  app.component('PaginatePanel', PaginatePanel)
  app.component('Paginate', Paginate)
 }
}