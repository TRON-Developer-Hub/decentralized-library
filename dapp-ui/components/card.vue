<template>
  <div>
    <div class="card" style="width: 18rem;">
      <img class="card-img-top" src="~/assets/book.png" alt="Card image cap" />
      <div class="card-body">
        <h4 class="card-title">Price: {{bookObject.price}}</h4>
        <h5 class="card-title">Name: {{bookObject.name}}</h5>
        <p class="card-text">Description: {{bookObject.description}}</p>
        <button class="btn btn-primary" v-on:click="displayDetails">View</button>
      </div>
    </div>
    <details-modal v-if="showModal" :bookData="bookObject">
    </details-modal>
  </div>
</template>

<script>
import DetailsModal from "~/components/detailsModal.vue";

export default {
  props: ["bookObject"],
  data() {
    return {
      showModal: false
    }
  },
  components: {
    DetailsModal
  },
  methods: {
    displayDetails() {
      this.showModal = !this.showModal;
    }
  }
};
</script>
