import { ref, onMounted, onBeforeUnmount } from 'vue'

export function useIsDesktop() {
  const isDesktop = ref(window.matchMedia('(min-width: 993px)').matches)

  const updateDesktopState = () => {
    isDesktop.value = window.matchMedia('(min-width: 993px)').matches
  }

  onMounted(() => {
    window.addEventListener('resize', updateDesktopState)
  })

  onBeforeUnmount(() => {
    window.removeEventListener('resize', updateDesktopState)
  })

  return { isDesktop }
}
