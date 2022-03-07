import Controller from '@ember/controller';
import dayjs from 'dayjs';

export default Controller.extend({
  init() {
    this._super(...arguments);
    this.someDate = dayjs();
  }
});