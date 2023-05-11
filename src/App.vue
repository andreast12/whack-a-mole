<template>
  <div class="wrapper mx-auto select-none">
    <h1 class="text-6xl font-bold text-center">Whack A Mole</h1>
    <h2 class="text-4xl font-bold text-center">Points: {{ points }}</h2>
    <button
      class="text-3xl bg-slate-300 px-3 mb-8"
      @click="startGame"
      :class="{ 'cursor-not-allowed': running }"
    >
      Start
    </button>
    <div class="grid grid-cols-3 gap-10 cursor-hammer active:cursor-hammer-hit">
      <Hole
        v-for="i in numberOfHoles"
        :appear="appear[i - 1]"
        @hit-mole="hitMole(i - 1)"
      />
    </div>
  </div>
  <audio ref="hitSound">
    <source src="./assets/pop.mp3" type="audio/mpeg" />
  </audio>
</template>

<script setup>
import Hole from "./components/Hole.vue";
import { ref } from "vue";

const numberOfHoles = 6;
const points = ref(0);
const appear = ref([]);
for (const i in numberOfHoles) {
  appear.value.push(false);
}

let running = false;
let previousNumber;

function randomNumber(min, max) {
  // max is exclusive
  return Math.floor(Math.random() * (max - min)) + min;
}

function showMole() {
  let number = randomNumber(0, numberOfHoles);
  // Keep generating until get a new number
  while (number === previousNumber) {
    number = randomNumber(0, numberOfHoles);
  }
  appear.value[number] = true;
  previousNumber = number;
  setTimeout(() => {
    appear.value[number] = false;
    if (running) showMole();
  }, randomNumber(400, 1000));
}

function startGame() {
  if (running) return;
  // Reset some stuff
  points.value = 0;
  previousNumber = null;
  running = true;
  setTimeout(() => {
    running = false;
  }, 30000);
  showMole();
}

const hitSound = ref(null);

function hitMole(index) {
  appear.value[index] = false;
  points.value++;
  hitSound.value.play();
}
</script>
