import ModalBase from 'open-event-frontend/components/modals/modal-base';

export default ModalBase.extend({
  actions: {
    toggleView() {
      this.set('isOpen', false);
    }
  }
});
