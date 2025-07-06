<template>
  <h2 class="text-lg font-semibold mb-2">Projects</h2>
  <div class="grid md:grid-cols-3 gap-6">
    <div v-for="pro in courses" class="w-full">
      <div class="flex items-center justify-between">
        <div class="flex items-center gap-3">
          <n-icon :component="pro.icon" size="24" />
          <div>
            <n-popover trigger="hover">
              <template #trigger>
                <div class="font-semibold">

                  <a href="#" target="_blank">
                    {{ pro.title }}
                  </a>
                </div>
              </template>
              <div class="max-w-md">
                <p class="text-sm mb-2">
                  {{ pro.description }}
                </p>
              </div>
            </n-popover>

            <div class="text-xs text-gray-500">{{ pro.subtitle }}</div>
            <div class="text-xs text-gray-500">{{ pro.date }}</div>

          </div>
        </div>


      </div>
    </div>
  </div>
</template>

<script setup>
import {
  Certificate,
  Brain,
  Robot,
  Flask,
  ShieldAlt
} from '@vicons/fa'
import { NCard, NIcon, NButton, NPopover } from 'naive-ui'

const courses = [
  {
    title: "Fundamentals of MCP (Model Context Protocol)",
    subtitle: "Hugging Face",
    date: "May 2025",
    icon: Robot,
    description: "Covers the structure and execution logic of Model Context Protocol used in AI systems."
  },
  {
    title: "Comprehensive Training on Cyber Security, Application and Infrastructure Security",
    subtitle: "Centre for Development of Advanced Computing (CDAC)",
    date: "Dec 2024",
    icon: ShieldAlt,
    description: "162-hour certified program focused on securing applications and infrastructure. Delivered in online mode."
  },
  {
    title: "Machine Learning Advanced Certification Training",
    subtitle: "Simplilearn",
    date: "August 2020",
    icon: Brain,
    description: "In-depth training on ML algorithms, model evaluation, and deployment techniques."
  },
  {
    title: "Deep Learning Fundamentals",
    subtitle: "Simplilearn",
    date: "July 2020",
    icon: Flask,
    description: "Focused on neural networks, backpropagation, CNNs, and basics of deep learning."
  },
  {
    title: "Data Science with Python",
    subtitle: "Simplilearn",
    date: "April 2020",
    icon: Certificate,
    description: "Covers Python for data analysis, visualization, NumPy, Pandas, and basic ML."
  }
]


</script>