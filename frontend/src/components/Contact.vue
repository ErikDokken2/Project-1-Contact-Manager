<template>
  <div>

    <button id="logout-btn" class="btn btn-secondary" @click="logout">Logout</button>
   
    <div class="d-flex justify-content-center">
<div class="input-group text-center">
  <div class="form-outline">
    <input type="search" id="form1" placeholder="Search" class="form-control" v-model="searchQuery" @input="searchContacts"/>
  </div>
</div>
</div>

  <div class="header"><h1>Contacts</h1></div>

  
  
 
  <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Add Contact</button>
  <div>
  
    <table class="table">
    <thead>
      <tr>
        <th scope="col">First</th>
        <th scope="col">Last</th>
        <th scope="col">Email</th>
        <th scope="col">Phone Number</th>
        <th scope="col">street Address</th>
        <th> </th>
        <th> </th>
      </tr>
    </thead>
    <tbody>
      

      <!-----favs------>
      <tr v-for="(user, index) in (searchResults.length > 0 ? searchResults : usersList)" :key="index">
        <td>{{user.firstName}}</td>
        <td>{{user.lastName}}</td>
        <td>{{user.email}}</td>
        <td>{{user.phoneNumber}}</td>
        <td>{{user.streetAddress}}</td>
        <td><button type="button" class="btn btn-warning" id="floated" data-bs-toggle="modal" data-bs-target="#exampleModal2" v-on:click="edit_id = user.ID; edit_first = user.firstName; edit_streetAddress=user.streetAddress; edit_email=user.email; edit_phone_number=user.phoneNumber;edit_last=user.lastName">Edit</button></td>
        <td><button type="button" class="btn btn-danger"  data-bs-toggle="modal" data-bs-target="#exampleModal3"   v-on:click="deleteID = user.ID">Delete</button></td>
            <!---delete module-->
  <div class="modal fade" id="exampleModal3" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Delete</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <h4>Are you sure you want to delete?</h4>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" id="nodelete">No</button>
          <button type="button" class="btn btn-primary" @click="deleteData(deleteID)" >Yes</button>
        </div>
      </div>
    </div>
  </div>
  </div>
      </tr>
    </tbody>
  </table>


  

  <!------add user-------> 
  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Add Contact</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="form-group">
            <label for="firstName">First Name</label>
            <input type="text" class="form-control" id="firstName" v-model="new_first" />
            <div class="invalid-feedback validationMsg">Field is required.</div>
          </div>
          <div class="form-group">
            <label for="lastName">Last Name</label>
            <input type="text" class="form-control" id="lastName" v-model="new_last" />
          </div>
          <div class="form-group">
            <label for="phoneNumber">Phone Number</label>
            <input type="tel" class="form-control" id="phoneNumber" v-model="new_phone_number" />
            <div class="invalid-feedback validationMsg">Enter a valid Phone Number</div>
          </div>
          <div class="form-group">
            <label for="email">Email</label>
            <input type="email" class="form-control" id="email" v-model="new_email" />
            <div class="invalid-feedback validationMsg">Enter a valid Email</div>
          </div>
          <div class="form-group">
            <label for="birthday">street Address</label>
            <input type="text" class="form-control" id="birthday" v-model="new_streetAddress" />
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" id="closeModalBtn">Close</button>
          <button type="button" class="btn btn-primary" v-on:click="add()" >Add Contact</button>
        </div>
      </div>
    </div>
  </div>





























    <!-----edit user------>
    <div class="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Edit Contact</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="form-group">
            <label for="editfirstName">First Name</label>
            <input type="text" class="form-control" id="editFirstName" v-model="edit_first" />
            <div class="invalid-feedback validationMsg">Field is required.</div>
          </div>
          <div class="form-group">
            <label for="lastName">Last Name</label>
            <input type="text" class="form-control" id="lastName" v-model="edit_last" />
          </div>
          <div class="form-group">
            <label for="editPhoneNumber">Phone Number</label>
            <input type="tel" class="form-control" id="editPhoneNumber" v-model="edit_phone_number" />
            <div class="invalid-feedback validationMsg">Enter a valid Phone Number</div>
          </div>
          <div class="form-group">
            <label for="editEmail">Email</label>
            <input type="email" class="form-control" id="editEmail" v-model="edit_email" />
            <div class="invalid-feedback validationMsg">Enter a valid Email</div>
          </div>
          <div class="form-group">
            <label for="birthday">street Address</label>
            <input type="text" class="form-control" id="birthday" v-model="edit_streetAddress" />
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" id="editClose">Close</button>
          <button type="button" class="btn btn-primary" v-on:click="edit(edit_id)">Edit</button>
        </div>
      </div>
    </div>
  </div>
 
  <!---delete module-->
  <!---
  <div class="modal fade" id="exampleModal3" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Delete</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <h4>Are you sure you want to delete?</h4>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">No</button>
          <button type="button" class="btn btn-primary">Yes</button>
        </div>
      </div>
    </div>
  </div>

  </div>
-->
  









 
     
  
  </div>
  
</div>
  </template>
  
  <script>
 
  import 'bootstrap';
  import 'bootstrap/dist/css/bootstrap.min.css';

  import axios from 'axios'
  //const baseURL = 'http://localhost:3001/users'
  // <li v-for="item in tab_data" :key="item.id">
  //     <tab :id="item.id" :description="item.first" :last="item.last"></tab>
  export default {
    name: 'Contact',
        props: {
      users: Array,
      username: String,
      userId : Number
    },
    components: {
      //modal
    },
    data () {
      return {

        usersList: this.users,

        searchQuery: '',
        searchResults: [],
       
        isUserAdded:false,

        search: '',
        load: false,
        flag: true,
        flag2: false,
        page: 1,
        maxInd: 10,
        min: 0,
        maxPage: 1,

        deleteID:null,
        
        new_phone_number: '',
        new_first: '',
        new_last: '',
        new_email: '',
        new_streetAddress: '',
        edit_id: 0,
        edit_phone_number: '',
        edit_first: '',
        edit_last: '',
        edit_color: '',
        edit_email: '',
        edit_streetAddress: "",
        
        showFavorites: false
        ,
        new_id: 0,
        modalData: {
          showModal: false
        },
        editData: {
          showEdit: false
        }
      }
    },
    created() {
    console.log(this.usersList);
  },
    /*async created () {
      try {
       // const res = await axios.get('http://localhost:3001/users')
  
       // this.users = res.data
      } catch (e) {
  
      }
    },*/
    methods: {

      logout() {
      this.$router.push('/');
    },

      
      async searchContacts() {
try {
  const response = await axios.post('https://urimus3600.xyz/api/searchContact.php', {
    search: this.searchQuery,
    userId: this.userId// add the user ID here
  });
  this.searchResults = response.data.results;
  
  this.searchResults.forEach((searchResult) => {
  this.usersList.forEach((user) => {
    if (
      searchResult.firstName === user.firstName &&
      searchResult.lastName === user.lastName &&
      searchResult.phoneNumber === user.phoneNumber &&
      searchResult.email === user.email &&
      searchResult.streetAddress === user.streetAddress
    ) {
      searchResult.ID=user.ID;
    }
  });
});

  
  
} catch (error) {
  console.log(error);
}
},
      resetUserAdded() {
  this.isUserAdded = false;
},
moveL() {
  if (this.page != this.maxPage) {
    this.page = this.page + 1
    this.min = (this.page - 1) * 10
    this.maxInd = this.page * 10
  }
},
moveR() {
  if (this.page > 1) {
    this.page = this.page - 1
    this.min = (this.page - 1) * 10
    this.maxInd = this.page * 10
    
  }
},
      async edit (id) {
        console.log(id);
        let isError = false;
        var input3 = document.getElementById('editEmail');
        var input = document.getElementById('editFirstName');
        var input2 = document.getElementById('editPhoneNumber');

        if(this.edit_first === ''|| /^\s*$/.test(this.edit_first)){
            

            input.classList.add('is-invalid');
            isError=true;
            
          }else{
            
            input.classList.remove('is-invalid');
            
          
          }
          if(/[!@$%^&*=]/g.test(this.edit_phone_number)){
           

            input2.classList.add('is-invalid');
            isError=true;
            

          }else{
            input2.classList.remove('is-invalid');
            
          }
          if(/\S+@\S+\.\S+/.test(this.edit_email)==false && this.edit_email!==''){
            

            input3.classList.add('is-invalid');
            isError=true
           

          
        }else{
          input3.classList.remove('is-invalid');
         
          }
          
        
         
          
        if(!isError) {
          for (let x = 0; x < this.usersList.length; x++) {
            if (this.usersList[x].ID === id) {
              this.usersList[x].firstName = this.edit_first
              this.usersList[x].lastName = this.edit_last
              this.usersList[x].phoneNumber = this.edit_phone_number
              this.usersList[x].email = this.edit_email
              this.usersList[x].streetAddress = this.edit_streetAddress
              
            }

            if(this.searchResults.length>0){
              for (let x = 0; x < this.searchResults.length; x++) {
            if (this.searchResults[x].ID === id) {
              this.searchResults[x].firstName = this.edit_first
              this.searchResults[x].lastName = this.edit_last
              this.searchResults[x].phoneNumber = this.edit_phone_number
              this.searchResults[x].email = this.edit_email
              this.searchResults[x].streetAddress = this.edit_streetAddress
              
            }
            }
          }
            
  
            try {
      const response = await axios.post('https://urimus3600.xyz/api/updateContact.php', {
        firstName: this.edit_first,
        lastName: this.edit_last,
        phoneNumber: this.edit_phone_number,
        email: this.edit_email,
        streetAddress:this.edit_streetAddress,
        userId: this.userId,
        ID: id
      })
      console.log(this.userId);
      console.log(response.data);
    } catch (e) {
      console.log('something broke')
      console.log(e)
    }
            
          }
          document.getElementById('editClose').click();
          this.$forceUpdate();

        }
      },
      //proper edit call
      /**async edit (id) {
if (this.edit_first === '' || /^\s*$/.test(this.edit_first) || /^\s*$/.test(this.edit_last) || /^\s*$/.test(this.edit_email)) {
  this.modalData.showModal = true
  this.editData.showEdit = false
  console.log('yes')
} else {
  for (let x = 0; x < this.users.length; x++) {
    if (this.users[x].id === id) {
      this.users[x].first = this.edit_first
      this.users[x].last = this.edit_last
      this.users[x].email = this.edit_email
      this.users[x].phone_number = this.edit_phone_number
      this.users[x].birthday = this.edit_birthday
      
    }

    try {
      const response = await axios.post('update.php', {
        firstName: this.edit_first,
        lastName: this.edit_last,
        email: this.edit_email,
        phoneNumber: this.edit_phone_number,
        streetAddress: '',
        city: '',
        state: '',
        zip: '',
        userId: '',
        ID: id
      })
      console.log(response.data);
    } catch (e) {
      console.log('something broke')
      console.log(e)
    }
    this.editData.showEdit = false
  }
}
},
*/
     
      async add () {

        let isError = false;
        var input3 = document.getElementById('email');
        var input = document.getElementById('firstName');
        var input2 = document.getElementById('phoneNumber');

          if(this.new_first === ''|| /^\s*$/.test(this.new_first)){
            

            input.classList.add('is-invalid');
            isError=true;
            this.isUserAdded=false
          }else{
            
            input.classList.remove('is-invalid');
            
          
          }
          if(/[!@$%^&*=]/g.test(this.new_phone_number)){
           

            input2.classList.add('is-invalid');
            isError=true;
            this.isUserAdded=false

          }else{
            input2.classList.remove('is-invalid');
            
          }
          if(/\S+@\S+\.\S+/.test(this.new_email)==false && this.new_email!==''){
            

            input3.classList.add('is-invalid');
            isError=true
            this.isUserAdded=false

          
        }else{
          input3.classList.remove('is-invalid');
         
          }
          
      if(!isError) {

          
            
  
           
           
          
           try{
              const response = await axios.post('https://urimus3600.xyz/api/addContact.php', {
      firstName: this.new_first,
      lastName: this.new_last,
      phoneNumber: this.new_phone_number,
      email: this.new_email,
      streetAddress: this.new_streetAddress,
      userId: this.userId, // you can set this to the user ID of the currently logged in user,
    })
    console.log(response.data);

    const displayResponse = await axios.post('https://urimus3600.xyz/api/displayContact.php', {
    userId: this.userId, // you can set this to the user ID of the currently logged in user,
  })
  this.usersList=displayResponse.data.results;

  } catch (e) {
    console.log('something broke')
    console.log(e)
  }


  

      
  
            

        this.new_phone_number= ''
        this.new_first= ''
        this.new_last= ''
        this.new_email= ''
        this.new_streetAddress= ''
        this.isUserAdded = true;
        console.log(this.usersList);
        document.getElementById('closeModalBtn').click();
        this.$forceUpdate();

        //get single contact so i can what the id of it is (nvm id starts at 1 )

           }
          }

          

          
          

          //current php call 
          /*
          const response = await axios.post('add.php', {
      firstName: this.new_first,
      lastName: this.new_last,
      phoneNumber: this.new_phone_number,
      email: this.new_email,
      streetAddress: '',
      city: '',
      state: '',
      zip: '',
      userId: '', // you can set this to the user ID of the currently logged in user,
      isFavorite:''
    })
    console.log(response.data);
  } catch (e) {
    console.log('something broke')
    console.log(e)
  }*/
        ,
      

  //proper fav php call

  /*async toggleFavorite (email) {
this.users = this.users.map(person => {
  if (person.email === email) {
    const updatedPerson = { ...person, isFavorite: !person.isFavorite };
    axios.post('http://www.urimus3600.xyz/api/update.php', {
      firstName: updatedPerson.firstName,
      lastName: updatedPerson.lastName,
      email: updatedPerson.email,
      phoneNumber: updatedPerson.phoneNumber,
      userId: this.username,
      ID: updatedPerson.ID
    }).then(response => {
      console.log(response.data);
    }).catch(error => {
      console.error(error);
    });
    return updatedPerson;
  }
  return person;
});
}*/


      
      async deleteData (userid) {
        console.log(userid);
        try {
          
          for (let x = 0; x < this.usersList.length; x++) {
            if (this.usersList[x].ID === userid) {
              //proper delete 
              await axios.post('https://urimus3600.xyz/api/deleteContact.php', {
              userId: this.userId,//the user
              ID: this.usersList[x].ID//id of the contact 
            });
            }
          }

          if(this.searchResults.length>0){
          const i = this.searchResults.findIndex(searchResults => searchResults.ID === userid);

          if (i !== -1) {
            this.searchResults.splice(i, 1);
            // the contact has been deleted from the local array
          } else {
            console.log("Contact not found");
          }
        }

          
          
          const i = this.usersList.findIndex(usersList => usersList.ID === userid);

          if (i !== -1) {
            this.usersList.splice(i, 1);
            // the contact has been deleted from the local array
          } else {
            console.log("Contact not found");
          }
            document.getElementById('nodelete').click();
        } catch (e) {
          console.log(e)
        }


        this.$forceUpdate();

        
        
      }
    },
    computed: {

     
  
  dismissAttribute() {
  return this.isUserAdded ? 'modal' : '';
},
},
mounted(){
        if(this.usersList.length < 10){
          console.log("hi")
          this.min = 0;
          this.maxInd = this.usersList.length;
          this.maxPage = 1;
        }
        //var mod = this.page*10
        if(this.usersList.length > 10 && this.page < Math.floor(this.usersList.length / 10  + 1)){
        console.log("yep")
        this.maxPage = Math.floor(this.usersList.length / 10  + 1);
        this.maxInd = 10
        //this.pageMax = Math.floor(this.users.length / 10  + 1);        
        //this.$router.push('/game/' + this.name)
        }
        else{
          this.maxInd = this.page * 10;        
        }
      }

  }
  
  </script>
  
  <style>
  @import '~@fortawesome/fontawesome-free/css/all.css';
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
  #addbtn{
    margin-top: 30px;
  }
  #inpt{
    margin-right: 10px;
    margin-bottom: 10px;
  }
  
  /* #floated {
     float:right;
     margin-right: -200px;
  } */
  
.favorite {
color: yellow;
}

.search-bar-container {
display: flex;
justify-content: center;
}

button#logout-btn {
  position: fixed;
  top: 0;
  right: 0;
  margin: 10px;
  
}

.input-group {
position: relative;
left: 93%;
transform: translateX(-50%);
}
  
  </style>