<script setup>
const youtubeIcon = defineComponent({
  render: () =>
    h("svg", { fill: "currentColor", viewBox: "0 0 24 24" }, [
      h("path", {
        "fill-rule": "evenodd",
        d: "M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z",
        "clip-rule": "evenodd",
      }),
    ]),
});
</script>

<template>
  <div
    class="prose prose-invert sm:prose-lg lg:prose-xl max-w-none prose-h2:underline prose-h2:mt-8 prose-h2:w-fit prose-h2:font-bold"
  >
    <!-- <article class="scroll-mt-8" id="home">
      <h2>Home content</h2>
      <p>Some description</p>
    </article>
    <hr /> -->
    <article class="scroll-mt-8" id="music">
      <h2 class="mt-2">Music</h2>
      <SoundCloudPlaylist />
    </article>
    <hr />
    <article class="scroll-mt-8" id="videos">
      <h2 class="flex gap-2 items-center">
        <component
          title="Youtube"
          :is="youtubeIcon"
          class="w-10 fill-red-600"
        />
        <span>Videos</span>
      </h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <iframe
          class="aspect-video w-full"
          src="https://www.youtube.com/embed?listType=playlist&list=UUcZ8cNmRZRY2IW0d78lba6A"
        >
        </iframe>
        <iframe
          class="aspect-video w-full"
          src="https://www.youtube.com/embed?listType=playlist&list=UUcZ8cNmRZRY2IW0d78lba6A&index=2"
        >
        </iframe>
        <iframe
          class="aspect-video w-full"
          src="https://www.youtube.com/embed?listType=playlist&list=UUcZ8cNmRZRY2IW0d78lba6A&index=3"
        >
        </iframe>
        <iframe
          class="aspect-video w-full"
          src="https://www.youtube.com/embed?listType=playlist&list=UUcZ8cNmRZRY2IW0d78lba6A&index=4"
        >
        </iframe>
      </div>
    </article>
    <hr />
    <article class="scroll-mt-8" id="projects">
      <h2>Projects</h2>
      <ProjectsContent />
    </article>
  </div>
</template>
