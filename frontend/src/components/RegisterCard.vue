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
      </div>
    
            <!-- Password input -->
      <div class="form-outline needs-validation p-4">
        <input type="password" id="form2Example2" class="form-control" v-model="pass" />
        <label class="form-label" for="form2Example2">Password</label>
        <div class="invalid-feedback validationMsg"></div>
      </div>
      <div class="form-outline mb-4 needs-validation p-4">
        <input type="password" id="form2Example3" class="form-control" v-model="confirm_pass" />
        <label class="form-label" for="form2Example3">Confirm Password</label>
        <div class="invalid-feedback validationMsg"></div>
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
      if (this.pass !== this.confirm_pass) {
        alert("Passwords don't match");
        var input = document.getElementById('form2Example2');
        var input2 = document.getElementById('form2Example3');
        
        input.classList.add('is-invalid');
        input2.classList.add('is-invalid');
        
       
        return;
      }

      try {
    const response = await axios.post('https://www.urimus3600.xyz/api/register.php', {
      userName: this.user,
      password: this.pass,
    }, {
      headers: {
        'Content-Type': 'application/json',
      },
      });

    if (response.data.success) {
      console.log('User created successfully');
    } else {
      console.log('Error creating user');
    }
  } catch (error) {
    console.error('Error making axios call:', error);
    if (error.response) {
      // The request was made, and the server responded with a status code outside the 2xx range
      console.error('Server response status:', error.response.status);
      console.error('Server response data:', error.response.data);
    } else if (error.request) {
      // The request was made, but no response was received
      console.error('No response received:', error.request);
    } else {
      // Something happened in setting up the request that triggered an error
      console.error('Request setup error:', error.message);
    }
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