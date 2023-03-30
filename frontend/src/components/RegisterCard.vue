<template>
    <div class="d-flex justify-content-center p-5">
    <div class="card" style="width: 25rem;">
        <div class="container p-2">
            <h3>Register</h3>
        </div>
        <form>

      
     
        
        
      <!-- Email input -->
      <div class="form-outline needs-validation p-4">
        <input type="email" id="form2Example1" class="form-control" v-model="user"/>
        <label class="form-label" for="form2Example1">Username</label>
        <div class="invalid-feedback validationMsg">Max 40 chars: 8+ required</div>
      </div>
    
            <!-- Password input -->
      <div class="form-outline needs-validation p-4">
        <input type="password" id="form2Example2" class="form-control" v-model="pass" />
        <label class="form-label" for="form2Example2">Password</label>
        <div class="invalid-feedback validationMsg">Max 40 chars: 8+ required</div>
      </div>
      <div class="form-outline mb-4 needs-validation p-4">
        <input type="password" id="form2Example3" class="form-control" v-model="confirm_pass" />
        <label class="form-label" for="form2Example3">Confirm Password</label>
        <div class="invalid-feedback validationMsg">Max 40 chars: 8+ required</div>
      </div>
    
    
      
      <!-- Submit button -->
      <button type="button" class="btn btn-block mb-4" @click="handleSubmit">Sign up</button>
    
      <!-- Register buttons -->
      <div class="text-center">
        <p>Already a member? </p> <button class="btn bg-light mb-3" v-on:click="goTo()">Sign in</button>
      </div>
    </form>
    </div>
    </div>
    </template>
    <script>
    import axios from 'axios'
    export default {
      name: 'RegisterCard',
      props: {
      },
      data (){
          return{
              user : "",
              pass : "",
              confirm_pass : "",
              firstName: '', 
              lastName: '', 
          }
          },
      methods: {
          goTo(){
              // this.$router.push('/'); 
              this.$router.push('/'); 
          },
          async handleSubmit() {
  const input = document.getElementById('form2Example2');
  const input2 = document.getElementById('form2Example3');
  const input3 = document.getElementById('form2Example1');

  // Check if passwords match
  if (this.pass !== this.confirm_pass) {
    alert("Passwords don't match");
    input.classList.add('is-invalid');
    input2.classList.add('is-invalid');
    return;
  }

  // Check if password and username are valid
  if (this.pass.length < 8 || this.pass.length > 40) {
    input.classList.add('is-invalid');
    input2.classList.add('is-invalid');
    alert('Password must be between 8 and 40 characters');
    return;
  }

  if (this.user.length < 8 || this.user.length > 40) {
    input3.classList.add('is-invalid');
    alert('Username must be between 8 and 40 characters');
    return;
  }

  // Check for blank spaces
  if (/\s/.test(this.user) || /\s/.test(this.pass)) {
    alert('No blank spaces allowed');
    if (/\s/.test(this.user)) {
      input3.classList.add('is-invalid');
    }
    if (/\s/.test(this.pass)) {
      input.classList.add('is-invalid');
      input2.classList.add('is-invalid');
    }
    return;
  }

  // Submit the form
  try {
    const response = await axios.post('https://www.urimus3600.xyz/api/register.php', {
      userName: this.user,
      password: this.pass,
    });

    if (response.data.error) {
      alert(response.data.error);
    } else {
      this.$router.push('/');
    }
  } catch (error) {
    console.error(error);
    alert('Error registering user');
  }
},
        },
        };

          
      
    
    </script>
    <style scoped>
    .d-inline-flex{
        position: fixed;
    }
    /* .d-flex{
        background-color: #
    } */
    .card{
        border-radius: 10px;
            background-color: #e0f4dd;
           /* background-color: #b4ebad; */
           box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.5);
           
    }
    h3 {
        font-family: sans-serif;
        font-weight: normal;
    }
    label {
        font-family: sans-serif;
        font-weight: lighter;
    }
    button {
        font-family: sans-serif;
        font-weight: lighter;
        background-color: #a2e698;
    }
    p {
        font-family: sans-serif;
        font-weight: lighter;
    } 
    
    
    </style>