<script setup>

import { ref, onUpdated, onMounted, nextTick, watch } from "vue";

const propValue = defineProps({
  perPage: {
    type: Number,
    required: true,
  },
  dataList: {
    type: Array,
    required: true,
  },
  isDisabledPageChange: {
    type: Boolean,
    default: false,
  },
  startingPage: {
    type: Number,
    default: 1,
  },
  isStartingpage: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(["getCurrentPageData", "setWarningOndisabled"]);

const renderComponent = ref(true);
const currentPage = ref(1);
const manupulatedPage = ref(0);

onMounted(() => {
  manupulatedPage.value = 1;
});

onUpdated(() => {
  manupulatedPage.value = manupulatedPage.value + 1;
});

watch(manupulatedPage, () => {
  if (propValue.isStartingpage) {
    currentPage.value = propValue.startingPage;
  }
  let end = currentPage.value * propValue.perPage;
  let start = (currentPage.value - 1) * propValue.perPage;
  emit(
    "getCurrentPageData",
    propValue.dataList.slice(start, end),
    currentPage.value
  );
});

const onPageChange = (page) => {
  if (!propValue.isDisabledPageChange) {
    currentPage.value = page;
    manupulatedPage.value = manupulatedPage.value + 1;
    forceRerender();
  } else {
    emit("setWarningOndisabled", page);
  }
};

const forceRerender = async () => {
  renderComponent.value = false;
  await nextTick();
  renderComponent.value = true;
};
</script>

<template>
  <Paginate
    :total-pages="Math.ceil(dataList.length / perPage)"
    :total="dataList.length"
    :per-page="perPage"
    :currentPage="currentPage"
    @pagechanged="onPageChange"
    v-if="renderComponent" />
</template>
