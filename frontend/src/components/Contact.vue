<template>
    <div>
    <div class="header"><h1>Users</h1></div>
     <div class="d-inline-flex p-2">
      <div class="input-group">
      <input v-model="search" type="search" class="form-control rounded" placeholder="Search" aria-label="Search"
        aria-describedby="search-addon"/>
      <button type="button" class="btn btn-outline-primary" @click="test()">search</button>
      <button type="button" class="btn btn-outline-primary" @click="clear()">reset</button>

    </div>
      </div>
      <table class="table">
      <thead>
        <tr>
          <th scope="col">First</th>
          <th scope="col">Last</th>
          <th scope="col">Email</th>
          <th scope="col">Phone Number</th>
          <th scope="col">Birthday</th>
          <th> </th>
          <th> </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(user, index) in users.slice(this.min*10, this.maxInd*this.page)" :key="index">
          <td>{{user.first}}</td>
          <td>{{user.last}}</td>
          <td>{{user.email}}</td>
          <td>{{user.phone_number}}</td>
          <td>{{user.birthday}}</td>
          <td><button type="button" class="btn btn-warning" id="floated" v-on:click="editData.showEdit = true; this.edit_id = user.id">Edit</button></td>
          <td><button type="button" class="btn btn-danger"  @click="deleteData(user.id)">Delete</button></td>
        </tr>

      </tbody>
    </table>
    <div class="input">
    <input v-model="new_first" id="inpt" placeholder="Enter First Name">
    <input v-model="new_last" id="inpt" placeholder="Enter Last Name">
    <input v-model="new_phone_number" id="inpt"  placeholder="Enter an Phone Number">
    <input v-model="new_email" id="inpt" placeholder="Enter an email">
    <input v-model="new_birthday" id="inpt" placeholder="Enter a Birthday">
    </div>
      <div>
        <button type="button" class="btn btn-primary" id="addbtn" v-on:click="add()">Add User</button>
        <h5> </h5>

        <modal v-if="modalData.showModal === true" @close="modalData.showModal = false" v-bind:modalData="modalData">
        </modal>
      </div>
      <div class="edit" v-if="editData.showEdit" v-bind:modal2Data="editData">
        <h2>Enter edit information here:</h2>
          <input v-model="edit_first" id="inpt" placeholder="Enter First Name">
          <input v-model="edit_last" id="inpt" placeholder="Enter Last Name">
          <input v-model="edit_phone_number" id="inpt"  placeholder="Enter an Phone Number">
          <input v-model="edit_email" id="inpt" placeholder="Enter an email">
          <input v-model="edit_birthday" id="inpt" placeholder="Enter a Birthday">
          
      <button type="button" class="btn btn-primary" id="editbtn" v-on:click="edit(edit_id)">edit</button>      
    </div>
    <button type="button" class="btn btn-primary ml-auto" @click="moveR()"> &lt; </button>
    <h5>{{this.page}}</h5>
    <button type="button" class="btn btn-primary ml-auto" @click="moveL()">></button>
    </div>
    </template>
    
    <script>
    import modal from './modal.vue'
    import axios from 'axios'
    const baseURL = 'http://localhost:3001/users'
    // <li v-for="item in tab_data" :key="item.id">
    //     <tab :id="item.id" :description="item.first" :last="item.last"></tab>
    export default {
      name: 'Contact',
      components: {
        modal
      },
      data () {
        return {
          search: '',
          load: false,
          flag: true,
          flag2: false,
          page: 1,
          maxInd: 10,
          min: 0,
          maxPage: 1,

          new_phone_number: '',
          new_first: '',
          new_last: '',
          new_email: '',
          new_birthday: '',
          
          edit_id: 0,
          edit_phone_number: '',
          edit_first: '',
          edit_last: '',
          edit_color: '',
          edit_email: '',
          edit_birthday: 0,
          users: [
            {
            first: "Lames",
            last: "Jatimer",
            phone_number: "4073356371",
            email: "Lames.Jatimer@example.com",
            birthday: "12/11/01"
            },
            {
            first: "Lames",
            last: "deez",
            phone_number: "4073356371",
            email: "Lames.Jatimer@example.com",
            birthday: "12/11/01"
            },
            {
            first: "Lames",
            last: "Jatimer",
            phone_number: "4073356371",
            email: "Lames.Jatimer@example.com",
            birthday: "12/11/01"
            },
            {
            first: "Lames",
            last: "Jatimer",
            phone_number: "4073356371",
            email: "Lames.Jatimer@example.com",
            birthday: "12/11/01"
            },
            {
            first: "Lames",
            last: "Jatimer",
            phone_number: "4073356371",
            email: "Lames.Jatimer@example.com",
            birthday: "12/11/01"
            },
            {
            first: "Lames",
            last: "Jatimer",
            phone_number: "4073356371",
            email: "Lames.Jatimer@example.com",
            birthday: "12/11/01"
            },
            {
            first: "Lames",
            last: "Jatimer",
            phone_number: "4073356371",
            email: "Lames.Jatimer@example.com",
            birthday: "12/11/01"
            },
            {
            first: "Lames",
            last: "Jatimer",
            phone_number: "4073356371",
            email: "Lames.Jatimer@example.com",
            birthday: "12/11/01"
            },
            {
            first: "Lames",
            last: "Jatimer",
            phone_number: "4073356371",
            email: "Lames.Jatimer@example.com",
            birthday: "12/11/01"
            },
            {
            first: "Lames",
            last: "Jatimer",
            phone_number: "4073356371",
            email: "Lames.Jatimer@example.com",
            birthday: "12/11/01"
            },
            {
            first: "Lames",
            last: "Jatimer",
            phone_number: "4073356371",
            email: "Lames.Jatimer@example.com",
            birthday: "12/11/01"
            },
            {
            first: "Lames",
            last: "Jatimer",
            phone_number: "4073356371",
            email: "Lames.Jatimer@example.com",
            birthday: "12/11/01"
            },
            {
            first: "Lames",
            last: "Jatimer",
            phone_number: "4073356371",
            email: "Lames.Jatimer@example.com",
            birthday: "12/11/01"
            },
            {
            first: "Lames",
            last: "Jatimer",
            phone_number: "4073356371",
            email: "Lames.Jatimer@example.com",
            birthday: "12/11/01"
            },
          ],
          search_users: [
            {

            }
          ],
          temp_users: [
            {

            }
          ],
          hold_users: [
            {

            }
          ],
          new_id: 0,
          modalData: {
            showModal: false
          },
          editData: {
            showEdit: false
          }
        }
      },
      // async created () {
      //   try {
      //    // const res = await axios.get('http://localhost:3001/users')
    
      //    // this.users = res.data
      //   } catch (e) {
    
      //   }
      // },
      methods: {
        moveL(){
          if(this.page != this.maxPage){
            console.log("yo")
            this.page = this.page+1;
            console.log(this.maxPage);
            this.min = this.min + 1;
            // this.$router.push('/contact/' + this.page)
            // Math.floor(this.users.length / 10  + 1)
          }
        },
        moveR(){
          if(this.page != 1){
            console.log("yo")
            this.page = this.page-1;
            console.log(this.maxPage);
            this.min = this.min - 1;
            // this.$router.push('/contact/' + this.page)
            // Math.floor(this.users.length / 10  + 1)
          }
        },
        test(){
          for(var i = 0; i < this.users.length; i++){
            if(this.users[i].first.toLowerCase().includes(this.search.toLowerCase())){
              this.search_users.push({ id: this.users[i].id, first: this.users[i].first, last: this.users[i].last,  email: this.users[i].email, birthday: this.users[i].birthday, phone_number:this.users[i].phone_number })
            }
          }
      // this.users.filter(user => {
      //   if(user.first.toLowerCase().includes(this.search.toLowerCase())){
      //     this.search_users.push(this.search.toLowerCase())
      //   }
      //   //return user.first.toLowerCase().includes(this.search.toLowerCase())
      // })
          //this.search_users.push(x)
          console.log(this.search_users)
          this.temp_users = this.users
          this.users = this.search_users
          this.flag = false
        },
        clear(){
          if(this.flag == false){
            this.users = this.temp_users
            this.search_users= []
            this.flag = true
          }
        },
  
        async edit (id) {
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
                await axios.patch(`${baseURL}/${id}`, {
                  first: this.edit_first,
                  last: this.edit_last,
                  email: this.edit_email,
                  birthday: this.edit_birthday, 
                  phone_number:this.edit_phone_number
    
                })
              } catch (e) {
                console.log('something broke')
                console.log(e)
              }
              this.editData.showEdit = false
            }
          }
        },
        move: function (id) {
          console.log('yes')
    
          for (let x = 0; x < this.users.length - 1; x++) {
            if (this.users[x].id === id) {
              console.log('Moving')
              const temp = this.users[x]
              this.users[x] = this.users[x + 1]
              this.users[x + 1] = temp
              break
            }
          }
        },
        async add () {
          if (this.new_first === '' || this.new_last === '' || /^\s*$/.test(this.new_first) || /^\s*$/.test(this.new_last)) {
            console.log("y0")
            this.modalData.showModal = true
          } else {
            try {
              let max = 0
              let z = 0
              for (z; z < this.users.length; z++) {
                if (max < this.users[z].id) {
                  max = this.users[z].id
                }
              }
    
              this.new_id = max + 1
              this.users.push({ id: this.new_id, first: this.new_first, last: this.new_last,  email: this.new_email, birthday: this.new_birthday, phone_number:this.new_phone_number })
              for(var x = 0; x < this.users.length; x++){
                console.log(this.users[x]);
              }
              //  let i = 0
              //   for (i; i < this.users.length+1; i++) {
    
              axios.post('http://localhost:3001/users', { id: this.new_id, first: this.new_first, last: this.new_last, email: this.new_email, birthday: this.new_birthday, phone_number:this.new_phone_number })
            } catch (e) {
              console.log('something broke')
              console.log(e)
            }
          }
        },
        async deleteData (userid) {
          try {
            let id = 0
            for (let x = 0; x < this.users.length; x++) {
              if (this.users[x].id === userid) {
                id = x
              }
            }
            await axios.delete(`${baseURL}/${userid}`, {
            })
            this.users.splice(id, 1)
          } catch (e) {
            console.log(e)
          }
          //   try{
          //   let z = 0
          //   let num = 0
          //    for(z; z < this.users.length; z++){
          //      if(userid == this.users[z].id ){
          //        num = z
          //      }
          //    }
          //   axios.delete('http://localhost:3001/users/' + this.users[num].id)
          //        .then(response => {
          //         console.log('http://localhost:3001/users/' + this.users[num].id)
          //         let x = this.users.indexOf(num)
          //         this.users.splice(x, 1)
          //         console.log(this.result)
          //       })
          // }
          // catch(e){
          //   let r = this.users[num].id
          //   axios.delete('http://localhost:3001/users/' + r)
          //        .then(response => {
          //         console.log('http://localhost:3001/users/' + r)
          //         let x = this.users.indexOf(num)
          //         this.users.splice(x, 1)
          //         console.log(this.result)
          //       })
          //   console.log(e);
          // }
          // console.log("delete")
          // if (this.users[0].first === first) {
          //   // this.items.splice(0, 1)
          //   axios.delete('http://localhost:3001/users/' + this.users[0].id)
          //     .then(response => {
          //       console.log('http://localhost:3001/users/' + this.users[0].id)
          //       this.users.splice(0, 1)
          //       console.log(this.result)
          //     })
          // } else {
          //   let i = 0
          //   for (i; i < this.users.length+1; i++) {
          //     if (this.users[i].first === first) {
          //       axios.delete('http://localhost:3001/users/' + this.users[i].id)
          //         .then(response => {
          //           console.log('http://localhost:3001/users/' + this.users[i].id)
          //           this.users.splice(i)
          //           console.log(this.result)
          //         })
          //     }
          //     break
    
          //       this.items.splice(i, i)
          //       console.log('yes')
          //       break
          //     }
          // this.new_id = this.new_id - 1
          // axios.delete('http://localhost:3001/users/' + user.id)
          //   .then(response => {
          //     console.log('http://localhost:3001/users/' + user.id)
          //     this.users.splice(id, 1)
          //     console.log(this.result)
          //   })
        },
        // movePage(x){
        //   if(x == 1){
        //       if(!this.page ){

        //       }
        //   }
        //     //
        //   }
        },
        computed:{
        
        },

        mounted(){
          if(this.users.length < 10){
            console.log("hi")
            this.min = 0;
            this.maxInd = this.users.length;
            this.maxPage = 1;
          }
          //var mod = this.page*10
          if(this.users.length > 10 && this.page < Math.floor(this.users.length / 10  + 1)){
          console.log("yep")
          this.maxPage = Math.floor(this.users.length / 10  + 1);
          this.maxInd = 10
          //this.pageMax = Math.floor(this.users.length / 10  + 1);        
          //this.$router.push('/game/' + this.name)

          }
          else{
            this.maxInd = Math.floor(this.users.length / 10  + 1);        

          }
        }
      }
    
    
    </script>
    
    <style>
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
    
    </style>
    