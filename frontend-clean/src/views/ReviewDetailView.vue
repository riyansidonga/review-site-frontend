<script setup>
import { ref, onMounted } from 'vue'
import { useRoute, RouterLink } from 'vue-router'

const route = useRoute()
const review = ref(null)
const loading = ref(true)
const errorMessage = ref('')

onMounted(async () => {
  try {
    const response = await fetch('https://smart-garden-e8b5ab7c03.strapiapp.com/api/reviews?populate=*')

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`)
    }

    const data = await response.json()

    review.value =
      data.data.find(
        (item) => item.slug.toLowerCase() === route.params.slug.toLowerCase()
      ) || null
  } catch (error) {
    console.error('Fetch error:', error)
    errorMessage.value = 'Could not load review.'
  } finally {
    loading.value = false
  }
})
</script>

<template>
  <section v-if="loading">
    <p>Loading review...</p>
  </section>

  <section v-else-if="errorMessage">
    <p>{{ errorMessage }}</p>
    <RouterLink to="/">Go back home</RouterLink>
  </section>

  <section v-else-if="review" class="detail-card">
    <RouterLink to="/" class="back-link">← Back</RouterLink>

    <img
      v-if="review.coverImage && review.coverImage.url"
      :src="review.coverImage.url"
      :alt="review.title"
      class="detail-image"
    />

    <h2>{{ review.title }}</h2>
    <p><strong>Category:</strong> {{ review.category }}</p>
    <p><strong>Rating:</strong> {{ review.rating }}/10</p>
    <p><strong>Author:</strong> {{ review.author }}</p>
    <p><strong>Release Date:</strong> {{ review.releaseDate }}</p>

    <h3>Summary</h3>
    <p>{{ review.summary }}</p>

    <h3>Full Review</h3>
    <p class="body-text">{{ review.body }}</p>
  </section>

  <section v-else>
    <p>Review not found.</p>
    <RouterLink to="/">Go back home</RouterLink>
  </section>
</template>

<style scoped>
.detail-card {
  background: white;
  padding: 1.5rem;
  border-radius: 10px;
}

.back-link {
  display: inline-block;
  margin-bottom: 1rem;
}

.detail-image {
  width: 100%;
  max-height: 400px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 1rem;
}

.body-text {
  line-height: 1.7;
  white-space: pre-line;
}
</style>