new Vue({
  el: '#root',
  data: {
    emailsNumber: 10,
    emails: []
  },
  mounted() {
    const self = this;

    for (var i = 0; i < this.emailsNumber; i++) {
      axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
      .then(function(response) {
        self.emails.push(response.data.response);
      });
    }
  }
})
Vue.config.devtools = true
