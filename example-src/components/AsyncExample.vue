<template>
  <div class="doc-example">
    <p>
      <label for="tabAsyncInput">{{ entryPlaceholder }}</label>
    </p>
    <p>
      <tab-complete-input
        id="tabAsyncInput"
        v-model="text"
        :data-source="asyncData"
      />
    </p>
  </div>
</template>

<script>
import { staticList } from "./shared";
import TabCompleteInput from "../../src/tab-complete-input";

const api = "/api/get-names";

export default {
  components: { TabCompleteInput },
  data() {
    return {
      text: ""
    };
  },
  methods: {
    async asyncData(word, position) {
      const request = await fetch(
        `${api}?word=${encodeURIComponent(word)}&pos=${encodeURIComponent(
          position
        )}`
      );
      return request.json();
    }
  },
  computed: {
    entryPlaceholder() {
      return `Try tabbing these names: ${staticList.sort().join(", ")}`;
    }
  }
};
</script>

<style lang="postcss" scoped src="../assets/styles/examples.postcss"></style>
