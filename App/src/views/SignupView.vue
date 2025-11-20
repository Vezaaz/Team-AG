<template>
  <div class="signup-container">
    <h3>Welcome to PostIt</h3>

    <form @submit.prevent="signup">
      <input type="email" name="email" placeholder="Email" required v-model="email">
      <input type="password" placeholder="Password" required v-model="password" @input="validatePassword">
      <button id="signup-button" type="submit" :disabled="passwordErrors.length > 0">Signup</button>
      <div v-if="passwordErrors.length > 0" class="error-messages">
        <p>The password is not valid</p>
        <ul>
          <li v-for="error in passwordErrors" :key="error">{{ error }}</li>
        </ul>
      </div>
      
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: '',
      passwordErrors: []
    }
  },
  methods: {
    validatePassword() {
      const errors = [];
      const passwordValue = this.password;

      if (passwordValue.length < 8 || passwordValue.length >= 15) {
        errors.push("Password should be at least 8 characters and less than 15 characters");
      }
      if (!/^[A-Z]/.test(passwordValue)) {
        errors.push("Password should start with an uppercase alphabet");
      }
      if (!/[A-Z]/.test(passwordValue)) {
        errors.push("Password should include at least one uppercase alphabet character");
      }
      const lowercaseMatches = passwordValue.match(/[a-z]/g);
      if (lowercaseMatches.length < 2) {
        errors.push("Password should include at least two lowercase alphabet characters");
      }
      if (!/\d/.test(passwordValue)) {
        errors.push("Password should include at least one numeric value");
      }
      if (!/_/.test(passwordValue)) {
        errors.push("Password should include the character '_'");
      }
      this.passwordErrors = errors;
    },
    signup() {
      if (this.passwordErrors.length === 0) {
        alert("Signup successful!");
      }
    }
  }
}
</script>

<style scoped>
body {
    background: #f2f2f2;
    flex-direction: column;
}

.signup-container {    
    margin: 10px auto;
    margin-top: 45px;                    
    background-color: lightgray;
    padding: 30px;
    border-radius: 10px;
    width: 100%;
    max-width: 300px;
    /* Tark lahendus: */
    height: fit-content;  
    min-height: 275px;    
    display: flex;
    box-sizing: border-box;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 5px;
    box-shadow: 0px 0px 4px rgb(53, 52, 52);
}

.signup-container form {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.signup-container input,
.signup-container button {                      
    padding: 8px;
    margin-top: 10px;
}

.error-messages {
  color: #d32f2f;
  background-color: #ffebee;
  border: 1px solid #f44336;
  border-radius: 4px;
  padding: 10px;
  margin-top: 10px;
  font-size: 14px;
}

.error-messages p {
  margin: 0 0 8px 0;
  font-weight: bold;
  text-align: center
}

.error-messages ul {
  margin: 0;
  padding-left: 20px;
}

.error-messages li {
  margin-bottom: 4px;
}

#signup-button {
    background-color: rgb(18, 75, 162);
    color: #f2f2f2;
    font-weight: 700;
    font-size: 16px;
    border: none;
    cursor: pointer;
    transition: all 0.3s ease;
    padding: 10px;
}

#signup-button:hover:not(:disabled) {
    background-color: rgb(8, 49, 112);
}

#signup-button:disabled {
    background-color: #a4b6dcff;
    cursor: not-allowed;
    opacity: 0.6;
}

div > h3 {
    font-size: x-large;
    margin-bottom: 15px;
}
</style>