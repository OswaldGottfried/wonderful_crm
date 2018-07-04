import Calendar from './pages/Calendar.vue';
import ClientBase from './pages/ClientBase.vue';
import Subscriptions from './pages/Subscriptions';
import Administrators from './pages/Administrators';

const routes = [
  { path: '/calendar', component: Calendar },
  { path: '/clientbase', component: ClientBase },
  { path: '/subscriptions', component: Subscriptions },
  { path: '/administrators', component: Administrators }
]

export default routes;