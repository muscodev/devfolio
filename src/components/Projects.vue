<template>
    <h2 class="text-lg font-semibold mb-2">Projects</h2>
    <div class="grid md:grid-cols-3 gap-6">
        <div v-for="pro in projects" class="w-full">
            <div class="flex items-center justify-between">
                <div class="flex items-center gap-3">
                    <n-icon :component="pro.icon" size="24" />
                    <div>
                        <n-popover trigger="hover">
                            <template #trigger>
                                <div class="font-semibold">

                                    <a :href="pro.link" target="_blank">
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
                        <div class="text-xs text-gray-500">
                             <n-marquee>
                                {{ pro.stacks.reduce((acc, stack) => acc  + stack +',', '')  }}
                             </n-marquee>
                           
                        </div>
                    </div>
                </div>


            </div>
        </div>
    </div>
</template>

<script setup>
import { Lock, Phone, Headset, VolumeUp, TachometerAlt, Key,Comment,ChartLine } from '@vicons/fa'
import { NCard, NIcon, NButton, NPopover } from 'naive-ui'

 const projects = [
  {
    title: "SecureLink",
    subtitle: "Python Library",
    icon: Lock,
    link: "https://github.com/muscodev/secure-link-generator",
    description: "Lightweight library for generating and verifying expirable signed URLs. Usable as a package or deployable as a FastAPI microservice.  pip install securelink",
    stacks: ["Python", "FastAPI", "PyPI", "Security", "REST API"]
  },
  {
    title: "IVRS",
    subtitle: "Voice – Complaint Booking",
    icon: Phone,
    link: "",
    description: "BSNL IVRS system integrated with multiple CRMs across 4 zones. Routes calls to the appropriate customer care executive.",
    stacks: ["Asterisk", "Kamailio", "Python", "PostgreSQL", "SOAP", "REST", "Docker", "Oracle"]
  },
  {
    title: "Missed Call Lead Capture",
    subtitle: "Telecom – Lead Collection",
    icon: ChartLine,
    link: "",
    description: "Captures service interest via missed calls. Processes customer leads with backend integration and scheduling.",
    stacks: ["Asterisk", "Python", "PostgreSQL", "REST", "Docker"]
  },
  {
    title: "Multi-Tenant Call Center Suite",
    subtitle: "Call Center Platform",
    icon: Headset,
    link: "",
    description: "Platform used by 5 call centers (in house, operation outsorced) across India. Includes agent/supervisor portals, monitoring, and SLA dashboards.",
    stacks: ["Kamailio", "Asterisk", "Django", "FastAPI", "PostgreSQL", "Redis", "Celery", "Nginx", "Docker", "ffmpeg", "Vue 3", "Oracle", "AsynAmi"]
  },
  {
    title: "Bulk Outbound Dialer",
    subtitle: "Voice – Campaign System",
    icon: VolumeUp,
    link: "",
    description: "Campaign manager for automated bulk calls. High-performance system handling 4.8 million calls per day.",
    stacks: ["FreeSWITCH", "Python", ".NET Core", "PostgreSQL", "Oracle", "Docker"]
  },
  {
    title: "Integrated Dashboard",
    subtitle: "Enterprise Analytics",
    icon: TachometerAlt,
    link: "",
    description: "Unified dashboard integrating service data from various verticals, teams, and locations. Heavy data exploration involved.",
    stacks: [".NET Core", "Redis", "PostgreSQL", "MySQL", "Pandas", "python"]
  },
  {
    title: "SSO Portal",
    subtitle: "Authentication Gateway",
    icon: Key,
    link: "",
    description: "Role-based access control and app dashboard enabling unified login across internal applications.",
    stacks: [".NET", "PostgreSQL"]
  },
  {
    title: "OfficeChat",
    subtitle: "Realtime Chat App",
    icon: Comment,
    link: "https://github.com/muscodev/OfficeChat",
    description: "Hobby project: WebSocket-based chat system with Google OAuth login and minimalist non-build Vue frontend.",
    stacks: ["FastAPI", "WebSocket", "Vue 3 (non-build)", "Authlib (Google OAuth)", "SQLite3"]
  }
]



</script>