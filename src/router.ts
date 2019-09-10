import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/Home.vue';
import UserOverview from '@/views/user/UserOverview.vue';
import Selection from '@/views/user/Selection.vue';
import Customer from '@/views/customers/Customer.vue';
import CustomerOverview from '@/views/customers/CustomerOverview.vue';
import CustomerDetail from '@/views/customers/CustomerDetail.vue';
import PageNotFound from '@/views/PageNotFound.vue';
import Test from '@/views/test/Test.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    { path: '/', name: 'home', component: Home },
    { path: '/test', name: 'test', component: Test },
    { path: '/user', name: 'requests', component: UserOverview,
      children: [
        { path: ':requestId', name: 'request-id', component: Selection },
      ]
    },
    { path: '/customer', component: Customer,
      children: [
        { path: '', name: 'customer-overview', component: CustomerOverview },
        { path: ':customerId', name: 'customer-id', component: CustomerDetail },
      ]
    },
    { path: '*', name: 'not-found', component: PageNotFound },
  ],
});
