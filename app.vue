<script setup lang="ts">
import { useToast } from '@/components/ui/toast/use-toast'
const { toast } = useToast()
const colorMode = useColorMode()

const route = useRoute()
const layoutName = computed(() => {
  if (route.path.startsWith('/admin')) return 'admin'
  if (route.path.startsWith('/teacher')) return 'teacher'
  if (route.path.startsWith('/student')) return 'student'
  return 'default'
})
</script>

<template>
  <div class="app-container">
    <NuxtLayout :name="layoutName">
      <NuxtPage />
    </NuxtLayout>

    <ClientOnly>
      <Toaster />
    </ClientOnly>
  </div>
</template>

<style>
</style>