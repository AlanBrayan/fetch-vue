<template>
  <div class="container">
    <div class="card">
      <div class="card-header">Header</div>
      <div class="card-body">
        <post-list></post-list> 
      </div>
      <div class="card-footer text-muted">Footer</div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import PostList from "@/components/PostList.vue"; 

export default defineComponent({
  components: {
    PostList, 
  },
});
</script>
