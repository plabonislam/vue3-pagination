<script setup>
import { ref, onUpdated, onMounted, nextTick, watch } from "vue";

const propValue = defineProps({
  perPage: {
    type: Number,
    required: true,
  },
  maxVisibleButtons: {
    type: Number,
    required: false,
    default: 1,
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
  isStartingPage: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(["getCurrentPageData", "setWarningOndisabled"]);

const renderComponent = ref(true);
const currentPage = ref(1);
const manupulatedPage = ref(0);
const arrowClick = ref(true);
const ownState = ref(1);
onMounted(() => {
  if (propValue.dataList?.length > 0) manupulatedPage.value = 1;
});

// onUpdated(() => {
//   if (propValue.dataList?.length > 0)
//     manupulatedPage.value = manupulatedPage.value + 1;
// });

watch(manupulatedPage, () => {
  if (propValue.isStartingPage) {
    currentPage.value = propValue.startingPage;
  }
  let end;
  let start;
  if (arrowClick.value) {
    end = currentPage.value * propValue.perPage;
    start = (currentPage.value - 1) * propValue.perPage;
  } else {
    end = ownState.value * propValue.perPage;
    start = (ownState.value - 1) * propValue.perPage;
  }
  console.log(ownState.value, currentPage.value, start, end);
  emit(
    "getCurrentPageData",
    propValue.dataList?.slice(start, end),
    currentPage.value
  );
});

const onPageChange = (page, isChange) => {
  if (propValue.dataList?.length < 1) return;
  arrowClick.value = isChange;
  if (!propValue.isDisabledPageChange) {
    // when maxVisibleButtons is more than 1.
    //then click on visable pages we need to calculate data for that page
    //but visable pages will be same
    //but for arrow pages also need to be changed
    if (arrowClick.value) {
      currentPage.value = page;
      ownState.value = page;
    } else ownState.value = page;

    //when only single element..maxVisibleButtons is 1
    //there is no need to render element for onclick
    console.log(page, ownState.value);

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
    :maxVisibleButtons="maxVisibleButtons"
    :ownState="ownState"
    @pagechanged="onPageChange"
    v-if="renderComponent && dataList?.length" />
</template>
