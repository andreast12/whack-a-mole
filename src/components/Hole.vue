<template>
  <div class="h-52 relative overflow-hidden">
    <img
      src="../assets/mole.png"
      alt=""
      draggable="false"
      class="max-h-full absolute left-1/2 -translate-x-1/2 transition-top duration-200"
      :class="[appear ? 'top-0' : 'top-full']"
      @click="hitMole"
    />
    <img
      src="../assets/dirt.png"
      alt=""
      draggable="false"
      class="absolute -bottom-7"
    />
  </div>
</template>

<script setup>
const props = defineProps({
  appear: Boolean,
});
const emit = defineEmits(["hitMole"]);

function hitMole() {
  if (props.appear) emit("hitMole");
}
</script>
