<template>
  <div id="login">
    <div class="layout-padding">
      <div class="mid-bg"></div>
      <div class="login-card shadow-4 bg-white">
        <h5 class="login-title">LOGIN</h5>
        <div class="row gutter-md">
          <div class="col-xs-12">
            <q-input float-label="Email" v-model="user.email"/>
          </div>
          <div class="col-xs-12">
            <q-input
              type="password"
              float-label="Password"
              v-model="user.password"
              @keyup.enter="login"
            />
          </div>
        </div>
        <div class="text-center" style="margin: 30px">
          <q-btn color="primary" @click="login" class="q-mr-md">
          <span v-if="!loading">LOG IN</span>
          <q-spinner-dots v-else/>
          </q-btn>
          <q-btn color="negative" @click="register" label="REgister" class="q-mr-md">
          </q-btn>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { QSpinnerDots } from 'quasar'
import firebase from 'firebase'// need to fix this
const config = { // will need 3 configs for each db
  apiKey: 'AIzaSyD9c4ehKzUkiSJWMBs_MI7e8ivgkSjr0Tk',
  authDomain: 'dsamanager-sih.firebaseapp.com',
  databaseURL: 'https://dsamanager-sih.firebaseio.com',
  projectId: 'dsamanager-sih',
  storageBucket: 'dsamanager-sih.appspot.com',
  messagingSenderId: '162723810859'
}
firebase.initializeApp(config)

export default {
  components: {QSpinnerDots, firebase},
  data () {
    return {
      loading: false,
      user: { email: '', password: '' }
    }
  },
  methods: {
    login: function () {
      this.loading = true
      firebase.auth()
        .signInWithEmailAndPassword(this.user.email, this.user.password)
        .then(() => {
          this.$router.push('/dashboard')
        })
        .catch(error => {
          var errorCode = error.code
          var errorMessage = error.message
          alert(errorCode, errorMessage)
        })
      this.loading = false
    },
    // move to admin page with button
    register: function () {
      firebase.auth().createUserWithEmailAndPassword(this.user.email, this.user.password)
        .then(user => {
          alert('account has been created!')
        })
        . catch(error => {
          var errorCode = error.code
          var errorMessage = error.message
          alert(errorCode, errorMessage)
        })
    }
  }
}
</script>
