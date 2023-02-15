<template>
  <div class="home">
    <ConnectionCard></ConnectionCard>
  </div>
</template>

<script>
import ConnectionCard from '@/components/ConnectionCard.vue';

export default {
  name: 'HomeView',
  components: {
    ConnectionCard
  }
}
</script>