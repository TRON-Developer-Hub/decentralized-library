<template>
  <div>
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="modal-header">
            <slot name="header">default header</slot>
          </div>

          <div class="modal-body">
            <slot name="body">
                <div class="form-group">
                  <label for="title">Book Name</label>
                  <input
                    type="text"
                    class="form-control"
                    v-model="title"
                    placeholder="Enter Book Name"
                  />
                </div>
                <div class="form-group">
                  <label for="description">Description</label>
                  <input
                    type="text"
                    class="form-control"
                    v-model="description"
                    placeholder="Description"
                  />
                </div>
                <div class="form-group">
                  <label for="price">Price</label>
                  <input
                    type="text"
                    class="form-control"
                    v-model="price"
                    placeholder="Unit: TRX"
                  />
                </div>
                <button v-on:click="postAd" class="btn btn-primary float-right">Submit</button>
                <!-- <button class="btn btn-outline-secondary float-right mr-3" v-on:click="close">Cancel</button> -->
            </slot>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { postBookInfo } from "~/plugins/utils";

export default {
  components: {},
  data() {
    return {
      title: '',
      description: '',
      price: '',
    }
  },
  methods: {
    postAd() {
      // convert price from TRX to SUN
      postBookInfo(this.title,this.description,tronWeb.toSun(this.price));
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
  color: #42b983;
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
