<template>
    <div>
        <form @submit="handleSubmit" class='border container mt-5 p-3 shadow'>
            <h2>Login</h2>
            <div class='my-2'>
                <label for="username">Username</label>
                <input type="text" v-model="username" name="username" class="form-control" :class="{ 'is-invalid': submitted && !username }" />
                <div v-show="submitted && !username" class="invalid-feedback">Username is required</div>
            </div>
            <div class='my-2'>
                <label htmlFor="password">Password</label>
                <input type="password" v-model="password" name="password" class="form-control" :class="{ 'is-invalid': submitted && !password }" />
                <div v-show="submitted && !password" class="invalid-feedback">Password is required</div>
            </div>
            <div class='my-3'>
                <button class="btn btn-primary">Login</button>
                <router-link to="/register" class="btn btn-link">Register</router-link>
            </div>
        </form>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
    data () {
        return {
            // initial state
            username: '',
            password: '',
            submitted: false
        }
    },
    computed: {
        // use status state in account store (./_store/account.module)
        ...mapState('account', ['status'])
    },
    created () {
        // use logout action that defined in mapActions for logout
        this.logout();
    },
    methods: {
        // use login and logout action in account store (./_store/account.module)
        ...mapActions('account', ['login', 'logout']),
        // handle submit
        handleSubmit () {
            this.submitted = true;
            const { username, password } = this;
            if (username && password) {
                // use login action that defined in mapActions
                this.login({ username, password })
            }
        }
    }
};
</script>