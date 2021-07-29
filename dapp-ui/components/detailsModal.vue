<template>
  <div>
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="modal-header">
            <h3>Books Details</h3>
          </div>
          <div class="modal-body">
            <slot name="body">
              <h3>Book Name: {{bookData.name}}</h3>
              <h3>Price: {{bookData.price}} TRX/Day</h3>
              <p>Description: {{bookData.description}}</p>
              <div class="row ml-4 p-2">
                <datepicker :value="startDate" v-model="startDate"></datepicker>
                <datepicker v-model="endDate"></datepicker>
              </div>
              <b-button v-on:click="book" class="mr-5 mt-3">
                <span>Lent Now</span>
              </b-button>
            </slot>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Datepicker from 'vuejs-datepicker';

import { borrowBook, web3 } from "~/plugins/utils";

export default {
  components: {
    Datepicker
  },
  props: ["bookData"],
  data() {
    return {
      showModal: true,
      sh: true,
      startDate: new Date(),
      flag: true,
      endDate: new Date(),
    };
  },
  methods: {
    getDayOfYear(date) {
      var now = new Date(date);
      var start = new Date(now.getFullYear(), 0, 0);
      var diff = (now - start) + ((start.getTimezoneOffset() - now.getTimezoneOffset()) * 60 * 1000);
      var oneDay = 1000 * 60 * 60 * 24;
      var day = Math.floor(diff / oneDay);
      return day
    },
    book() {
      // get Start date
      const startDay = this.getDayOfYear(this.startDate)
      // get End date
      const endDay = this.getDayOfYear(this.endDate)
      // price calculation
      const totalPrice =tronWeb.toSun(this.bookData.price) * (endDay - startDay)
      // call borrowBook function of contract 
      borrowBook(this.bookData.id, startDay, endDay, totalPrice)
    }
  }
};
</script>

<style>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 500px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-header h3 {
  margin-top: 0;
  color: #c73318;
}

.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  float: right;
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
