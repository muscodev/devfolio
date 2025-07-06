<template>

  <n-flex justify="center" wrap="wrap" align="center" style="padding: 2px;">

    <a href="https://github.com/muscodev/" target="_blank">
      <n-avatar :size="20" round>

        <n-icon size="15">
          <Github />
        </n-icon>
      </n-avatar>

    </a>
    <a href="https://www.linkedin.com/in/muslih-k-4ab8141a0/" target="_blank">
      <n-avatar :size="20" round>

        <n-icon size="15">
          <Linkedin />
        </n-icon>
      </n-avatar>

    </a>
    <a href="https://muscodev.github.io/" target="_blank">

      <n-avatar :size="20" round>

        <n-icon size="15">
          <Blogger />
        </n-icon>
      </n-avatar>

    </a>



  </n-flex>


</template>

<script setup>
import { Github, Linkedin, Blogger } from '@vicons/fa'
import { NAvatar, NFlex, NIcon } from 'naive-ui'
</script>