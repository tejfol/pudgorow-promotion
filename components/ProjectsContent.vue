<script setup>
const projects = [
  {
    name: "pudgorow",
    description:
      "Intentions ideal truth christianity christianity superiority gains mountains ultimate holiest. Deceptions will revaluation dead battle virtues hatred horror hope. Battle snare selfish evil philosophy decieve suicide inexpedient sexuality good. Morality decieve sexuality selfish madness love moral law intentions hatred enlightenment. Society enlightenment fearful ultimate aversion ascetic.",
    img: "/images/pudgorow.webp",
    link: "https://soundcloud.com/pudgorow/",
  },
  {
    name: "Lorkhan",
    description:
      "Intentions ideal truth christianity christianity superiority gains mountains ultimate holiest. Deceptions will revaluation dead battle virtues hatred horror hope. Battle snare selfish evil philosophy decieve suicide inexpedient sexuality good. Morality decieve sexuality selfish madness love moral law intentions hatred enlightenment. Society enlightenment fearful ultimate aversion ascetic.",
    img: "/images/lorkhan.webp",
    link: "https://lorkhan.bandcamp.com/",
  },
];
</script>

<template>
  <!-- <article
    class="flex flex-col not-prose mb-8"
    v-for="project in projects"
    :key="project.id"
  >
    <h2>{{ project.name }}</h2>
    <div class="flex gap-6 sm:gap-8 flex-col sm:flex-row">
      <img
        class="sm:max-w-xs rounded-md object-cover"
        :src="project.img"
        alt="img"
      />
      <div class="flex flex-col gap-4">
        <p>{{ project.description }}</p>
        <p>Socials</p>
      </div>
    </div>
  </article> -->

  <div class="max-w-7xl not-prose">
    <ul
      role="list"
      class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:mx-0 lg:max-w-none"
    >
      <li
        class="transition-all hover:-translate-y-3 hover:scale-90 hover:drop-shadow-lg"
        v-for="project in projects"
        :key="project.id"
      >
        <a :href="project.link">
          <img
            class="aspect-[3/2] w-full rounded-2xl object-cover object-top"
            :src="project.img"
            :alt="project.name"
          />
        </a>
        <h2
          class="mt-6 text-4xl font-semibold leading-8 tracking-tight text-white/70"
        >
          {{ project.name }}
        </h2>
      </li>
    </ul>
  </div>
</template>
