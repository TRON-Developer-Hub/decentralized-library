<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light fixed-top">
      <ul class="navbar-nav justify-content-end ml-auto">
        <li class="nav-item">
          <b-button v-on:click="toggle" class="mr-5 mt-3">
            <span>Rent Your Books</span>
          </b-button>
        </li>
      </ul>
    </nav>

    <book-form v-if="showModal">
      <h3 slot="header">Rent Your Books</h3>
    </book-form>
  </div>
</template>

<script>
import BookForm from "~/components/bookForm.vue";
import { accountAddress } from "~/plugins/utils";
import { initWalletConnect } from "~/plugins/walletConnect";

export default {
  data() {
    return {
      showModal: false,
      address: null
    };
  },
  components: {
    BookForm
  },
  methods: {
    toggle() {
      this.showModal = !this.showModal;
    },
    walletConnect() {
      // TODO: connect to walletconnect
      initWalletConnect();
    }
  }
};
</script>
