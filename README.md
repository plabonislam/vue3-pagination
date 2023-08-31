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
<template>
  <div>
    <h1>File</h1>
    <vue-pdf-embed :source="source1" />

    <h1>Base64</h1>
    <vue-pdf-embed :source="source2" />
  </div>
</template>

<script>
import VuePdfEmbed from 'vue-pdf-embed'

// OR THE FOLLOWING IMPORT FOR VUE 2
// import VuePdfEmbed from 'vue-pdf-embed/dist/vue2-pdf-embed'

export default {
  components: {
    VuePdfEmbed,
  },
  data() {
    return {
      source1: '<PDF_URL>',
      source2: 'data:application/pdf;base64,<BASE64_ENCODED_PDF>',
    }
  },
}
</script>
```

### Props

| Name                   | Type                                     | Accepted values                                  | Description                                                  |
| ---------------------- | ---------------------------------------- | ------------------------------------------------ | ------------------------------------------------------------ |
| disableAnnotationLayer | `boolean`                                | `true` or `false`                                | whether the annotation layer should be disabled              |
| disableTextLayer       | `boolean`                                | `true` or `false`                                | whether the text layer should be disabled                    |
| height                 | `number` <br> `string`                   | natural numbers                                  | desired page height in pixels (ignored if the width property is specified) |
| imageResourcesPath     | `string`                                 | URL or path with trailing slash                  | path for icons used in the annotation layer                  |
| page                   | `number`                                 | `1` to the last page number                      | number of the page to display (displays all pages if not specified) |
| rotation               | `number` <br> `string`                   | `0`, `90`, `180` or `270` (multiples of `90`)    | desired page rotation angle in degrees                       |
| scale                  | `number`                                 | rational numbers                                 | desired ratio of canvas size to document size                |
| source                 | `string` <br> `object` <br> `Uint8Array` | document URL or typed array pre-filled with data | source of the document to display                            |
| width                  | `number` <br> `string`                   | natural numbers                                  | desired page width in pixels                                 |

### Events

| Name                  | Value                         | Description                                |
| --------------------- | ----------------------------- | ------------------------------------------ |
| internal-link-clicked | destination page number       | internal link was clicked                  |
| loading-failed        | error object                  | failed to load document                    |
| loaded                | PDF document proxy            | finished loading the document              |
| password-requested    | callback function, retry flag | password is needed to display the document |
| rendering-failed      | error object                  | failed to render document                  |
| rendered              | –                             | finished rendering the document            |
| printing-failed       | error object                  | failed to print document                   |
| progress              | progress params object        | tracking document loading progress         |



## Examples

[Basic Usage Demo (JSFiddle)](https://jsfiddle.net/hrynko/ct6p8r7k)


