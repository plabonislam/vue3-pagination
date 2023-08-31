# 📄 vue3-client-side-pagination

## Features

- Controlled rendering of paginated items
- No peer dependencies or additional configuration required


## Compatibility

This package is compatible with  Vue 3. 

## Installation

Depending on the environment, the package can be installed in one of the following ways:

```shell
npm i vue-hello-test-component-plugin-01
```




## Usage

```vue
<script setup>
import { ref } from "vue";
import PaginatePanel from "./PaginatePanel.vue";

const accounts = ref([
  { id: 1, first_name: "Miriam", last_name: "Salmond", gender: "Female" },
  { id: 2, first_name: "Brittni", last_name: "Vegas", gender: "Agender" },
  { id: 3, first_name: "Stinky", last_name: "Pilipets", gender: "Male" },
  { id: 4, first_name: "Blondell", last_name: "Rudgerd", gender: "Female" },
  { id: 5, first_name: "Giffard", last_name: "Hows", gender: "Male" },
  { id: 6, first_name: "Lonnie", last_name: "Shelly", gender: "Male" },
  { id: 7, first_name: "Jordanna", last_name: "Pettigrew", gender: "Female" },
  { id: 8, first_name: "Ranique", last_name: "Twopenny", gender: "Female" },
  { id: 9, first_name: "Jerrilyn", last_name: "Mosedale", gender: "Female" },
  { id: 10, first_name: "Clemmie", last_name: "Lafoy", gender: "Female" },
  { id: 11, first_name: "Amandy", last_name: "Capineer", gender: "Female" },
  { id: 12, first_name: "Bernetta", last_name: "Brickell", gender: "Female" },
  { id: 13, first_name: "Hodge", last_name: "Frith", gender: "Male" },
  { id: 14, first_name: "Junina", last_name: "Plover", gender: "Genderqueer" },
  { id: 15, first_name: "Greg", last_name: "Blazewicz", gender: "Male" },
  { id: 16, first_name: "Cam", last_name: "Ropking", gender: "Male" },
  { id: 17, first_name: "Leighton", last_name: "Iacobini", gender: "Male" },
  { id: 18, first_name: "Karita", last_name: "Gibbens", gender: "Female" },
  { id: 19, first_name: "Griffy", last_name: "Jerisch", gender: "Male" },
  { id: 20, first_name: "Seline", last_name: "McLeary", gender: "Female" },
]);

const dataList = ref(null);
const recentPage = ref(1);
const totalPage = ref(0);
const perPageItem = ref(2);

totalPage.value = Math.ceil(accounts.value.length / perPageItem.value);

const getCurrentPageData = (data, currentPage) => {
  dataList.value = data;
  recentPage.value = currentPage;
};
</script>

<template>
  <div>
    <li v-for="item in dataList">
      {{ item.first_name }}
    </li>
  </div>

  <PaginatePanel
    :perPage="perPageItem"
    :dataList="accounts"
    @getCurrentPageData="getCurrentPageData" />
</template>



```

### Props

| Name                   | Type                                     | Accepted values                                  | Description                                                  |
| ---------------------- | ---------------------------------------- | ------------------------------------------------ | ------------------------------------------------------------ |
| dataList | `object`                                | `Array``                                | pass your reactive total arrayList via dataList props            |
| perPage       | `Number`                             | `integer greater than zero `           | based on this value number of items from arraylist willbe shown                 |

### Events

| Name                  | Value                         | Description                                |
| --------------------- | ----------------------------- | ------------------------------------------ |
| getCurrentPageData    | this methods returns current page data list and page number       |               |





## Examples

[Basic Usage Demo (JSFiddle)](https://jsfiddle.net/hrynko/ct6p8r7k)


