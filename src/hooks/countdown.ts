import { onMounted, onUnmounted, ref, watchEffect } from 'vue';

const SECONDS = 1000;
const MINUTES = 60 * SECONDS;
const HOURS = 60 * MINUTES;
const DAYS = 24 * HOURS;

export const useCountdown = (endTime: Date) => {
  const currentTime = ref(Date.now());
  const listener = ref<NodeJS.Timeout>();
  const days = ref('00');
  const hours = ref('00');
  const minutes = ref('00');
  const seconds = ref('00');

  onMounted(() => {
    listener.value = setInterval(() => {
      currentTime.value = currentTime.value + 1000;
    }, 1000);
  });

  onUnmounted(() => {
    if (listener.value) clearInterval(listener.value);
  });

  function pad(num: number) {
    return String(num).padStart(2, '0');
  }

  watchEffect(() => {
    const ms = endTime.getTime() - currentTime.value;
    days.value = pad(Math.floor(ms / DAYS));
    const daysMs = ms % DAYS;
    hours.value = pad(Math.floor(daysMs / HOURS));
    const hoursMs = ms % HOURS;
    minutes.value = pad(Math.floor(hoursMs / MINUTES));
    const minutesMs = ms % MINUTES;
    seconds.value = pad(Math.floor(minutesMs / SECONDS));
  });

  return { days, hours, minutes, seconds };
};
