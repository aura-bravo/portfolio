import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');

/* router.beforeEach((to, from, next) => {
  store.commit('toggleProjectVisibility', false);
  setTimeout(() => {
    next();
  }, 100);
});

router.afterEach((to, from) => {
  document.body.classList.remove('hello');
}); */

router.beforeEach((to, from, next) => {
  store.commit('toggleTransitionState', true);
  next();
});

router.afterEach(() => {
  setTimeout(() => {
    store.commit('toggleTransitionState', false);
  }, 700);
});
