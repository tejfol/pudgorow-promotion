<script setup>
const projects = [
  {
    name: "pudgorow",
    description:
      "Intentions ideal truth christianity christianity superiority gains mountains ultimate holiest. Deceptions will revaluation dead battle virtues hatred horror hope. Battle snare selfish evil philosophy decieve suicide inexpedient sexuality good. Morality decieve sexuality selfish madness love moral law intentions hatred enlightenment. Society enlightenment fearful ultimate aversion ascetic.",
  },
  {
    name: "Lorkhan",
    description:
      "Intentions ideal truth christianity christianity superiority gains mountains ultimate holiest. Deceptions will revaluation dead battle virtues hatred horror hope. Battle snare selfish evil philosophy decieve suicide inexpedient sexuality good. Morality decieve sexuality selfish madness love moral law intentions hatred enlightenment. Society enlightenment fearful ultimate aversion ascetic.",
  },
];
</script>

<template>
  <article
    class="border rounded-md p-8 flex flex-col gap-2 mb-6"
    v-for="project in projects"
    :key="project.id"
  >
    <h2 class="text-2xl font-bold">{{ project.name }}</h2>
    <div class="flex gap-6 sm:gap-8 flex-col sm:flex-row">
      <img
        class="sm:max-w-xs rounded-md object-cover"
        src="https://w.wallhaven.cc/full/ex/wallhaven-ex32dk.png"
        alt="img"
      />
      <div class="flex flex-col gap-4">
        <p>{{ project.description }}</p>
        <p>Socials</p>
      </div>
    </div>
  </article>
</template>
