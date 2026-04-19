<script setup>
import { ref, computed, onMounted } from 'vue'
import { RouterLink } from 'vue-router'

const reviews = ref([])
const search = ref('')
const loading = ref(true)

onMounted(async () => {
  const response = await fetch('http://localhost:1337/api/reviews?populate=*')
  const data = await response.json()
  reviews.value = data.data
  loading.value = false
})

const filteredReviews = computed(() => {
  return reviews.value.filter((review) =>
    review.title.toLowerCase().includes(search.value.toLowerCase())
  )
})
</script>

<template>
  <section>
    <h2>Movie Reviews</h2>

    <input
      v-model="search"
      type="text"
      placeholder="Search reviews..."
      class="search-box"
    />

    <p v-if="loading">Loading reviews...</p>

    <div v-else class="review-grid">
      <article v-for="review in filteredReviews" :key="review.id" class="card">
        <img
          v-if="review.coverImage && review.coverImage.url"
          :src="`http://localhost:1337${review.coverImage.url}`"
          :alt="review.title"
          class="review-image"
        />

        <h3>{{ review.title }}</h3>
        <p><strong>Category:</strong> {{ review.category }}</p>
        <p><strong>Rating:</strong> {{ review.rating }}/10</p>
        <p>{{ review.summary }}</p>

        <RouterLink :to="`/reviews/${review.slug}`" class="btn">
          Read Full Review
        </RouterLink>
      </article>
    </div>
  </section>
</template>

<style scoped>
.search-box {
  width: 100%;
  max-width: 400px;
  padding: 0.8rem;
  margin-bottom: 1.5rem;
  border: 1px solid #ccc;
}

.review-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
}

.card {
  background: white;
  padding: 1rem;
  border-radius: 10px;
}

.review-image {
  width: 100%;
  height: 220px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 1rem;
}

.btn {
  display: inline-block;
  margin-top: 1rem;
  background: #111;
  color: white;
  padding: 0.7rem 1rem;
  border-radius: 6px;
}

@media (min-width: 768px) {
  .review-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>