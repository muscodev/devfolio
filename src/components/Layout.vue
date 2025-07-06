<template>
    <div class="max-w-5xl mx-auto p-4">
        <n-card>
            <div class="flex flex-col md:flex-row gap-10 md:gap-1">
                <!-- Left -->
                <div class="flex flex-col items-center  text-cente p-6 md:p-2 md:w-1/2">
                    <img src="/assets/images/me.png" alt="avatar" class="w-24 h-24 rounded-full" />
                    <h1 class="text-xl font-bold mt-2">Muslih k</h1>

                    <SocialMediaBox class=" mt-1" />

                    <p>
                        <NIcon>
                            <MapMarkerAlt />
                        </NIcon> Trivandrum, kerala
                    </p>
                    <p>30 years </p>
                </div>

                <!-- Right -->
                <div class="text-lg text-gray-700 ">

                    <NThing class="text-gray-800 indent-5 ">
                        I hold a Bachelor of Technology in Electrical and Electronics Engineering and have been working
                        as a Software Developer at BSNL, a telecom-based PSU, for over 6+ years. My experience spans
                        backend and frontend development using Python, .NET, and JavaScript. I’m proficient in building
                        scalable web applications, internal tools, and APIs. I work comfortably across Linux systems and
                        modern UI technologies like Vue.js and Tailwind CSS/ Vuetify.
                    </NThing>
                    <NThing class="text-gray-800  indent-5">
                        My core involvements lies in  VoIP systems, having built real-time solutions using
                        Asterisk, Kamailio, and FreeSWITCH. Around these platforms, I’ve developed supporting web
                        interfaces, APIs, automation scripts, and data pipelines for monitoring, reporting, and control.
                        I focus on clean architecture, microservices, system design, and efficient backend logic to
                        deliver reliable, production-ready platforms .
                    </NThing>
                </div>
            </div>

        </n-card>





        <n-card class="mt-8 text-sm text-gray-800">
            <h2 class="text-lg font-semibold mb-2">Technical Stacks</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <h3 class="font-medium">Backend</h3>
                    <p>Python, FastAPI, Django,DotNet Core,PostgreSQL,nginx, MySQL, Redis</p>
                </div>
                <div>
                    <h3 class="font-medium">Frontend</h3>
                    <p>JavaScript, Html, CSS, Vue3, Vuetify, Tailwind </p>
                </div>

                <div>
                    <h3 class="font-medium">VoIP</h3>
                    <p>Asterisk, Kamailio, FreeSwitch </p>
                </div>
                <div>
                    <h3 class="font-medium">DevOps</h3>
                    <p>Docker, Git, Linux</p>
                </div>
            </div>
        </n-card>



        <n-card class="mt-8 text-sm text-gray-800">
            <ExperienceTimeLine/>
        </n-card>


        <n-card class="mt-8 text-sm text-gray-800">
            <Projects />
        </n-card>
       <n-card class="mt-8 text-sm text-gray-800">
            <Courses />
        </n-card>

        <n-card class="mt-8 text-sm text-gray-800">
            <h2 class="text-lg font-semibold mb-2">Recent Blogs</h2>
            <ul class="list-disc list-inside space-y-1">
                <li>
                    <a href="https://muscodev.github.io/data_analysis/call-center" class="text-blue-600 hover:underline">
                        Callcenter Data Analysis
                    </a>
                </li>
            </ul>
        </n-card>


    </div>
</template>

<script setup>
import { NCard,NThing,NIcon,NTimeline,NTimelineItem } from 'naive-ui';
import SocialMediaBox from './SocialMediaBox.vue';
import ExperienceTimeLine from './ExperienceTimeLine.vue';
import Projects from './Projects.vue';
import { MapMarkerAlt } from '@vicons/fa';
import Courses from './Courses.vue';
</script>