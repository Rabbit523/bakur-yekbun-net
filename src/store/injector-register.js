import injector from 'vue-inject';

import AllDataMetod from '@/store/service'

injector.service('AllDataMetod', function () { 
  return AllDataMetod 
});