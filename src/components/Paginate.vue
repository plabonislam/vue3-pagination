<script setup>
import { computed, onMounted, onUpdated, ref } from "vue";

const propValue = defineProps({
  maxVisibleButtons: {
    type: Number,
    required: false,
    default: 1,
  },
  totalPages: {
    type: Number,
    required: true,
  },
  total: {
    type: Number,
    required: true,
  },
  perPage: {
    type: Number,
    required: true,
  },
  currentPage: {
    type: Number,
    required: true,
  },
  ownState: {
    type: Number,
    required: true,
  },
});

const isActive = ref(false);
const emit = defineEmits(["pagechanged"]);

const onClickPreviousPage = () => {
  emit("pagechanged", propValue.currentPage - 1, true);
};
const onClickPage = (page) => {
  emit("pagechanged", page, false);
};
const onClickNextPage = () => {
  emit("pagechanged", propValue.currentPage + 1, true);
};

const endPage = computed(() => {
  return Math.min(
    propValue.currentPage + propValue.maxVisibleButtons - 1,
    propValue.totalPages
  );
});

const pages = computed(() => {
  const maxVisableRange = [];
  for (let i = propValue.currentPage; i <= endPage.value; i += 1) {
    maxVisableRange.push({
      name: i,
    });
  }

  return maxVisableRange;
});

const isInLastPage = computed(() => {
  return endPage.value === propValue.totalPages;
});
const isInFirstPage = computed(() => {
  return propValue.currentPage === 1;
});
</script>

<template>
  <ul class="pagination">
    <li class="pagination-item">
      <button
        type="button"
        class="btn"
        @click="onClickPreviousPage"
        :disabled="isInFirstPage">
        <img src="/left-arrow.svg" alt="left logo" />
      </button>
    </li>

    <li v-for="page in pages" :key="page" class="pagination-item">
      <button
        type="button"
        @click="onClickPage(page.name)"
        :class="{ isActive: page.name == ownState }">
        {{ page.name }}
      </button>
    </li>

    <li class="pagination-item">
      <button
        type="button"
        class="btn"
        @click="onClickNextPage"
        :disabled="isInLastPage">
        <img src="/right-arrow.svg" alt="right logo" />
      </button>
    </li>
  </ul>
</template>

<style scoped>
.pagination {
  list-style-type: none;
  margin: 0px;
  /* height: 24px; */
}

.pagination-item {
  display: inline-block;
}
.isActive {
  border: 1px solid green;
}
</style>
