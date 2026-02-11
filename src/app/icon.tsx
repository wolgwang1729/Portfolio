const PATH_DATA =
  'M 5.000,0.190 L 6.800,21.283 L 8.600,38.790 L 10.400,53.052 L 12.200,64.394 L 14.000,73.128 L 15.800,79.552 L 17.600,83.948 L 19.400,86.585 L 21.200,87.715 L 23.000,87.579 L 24.800,86.400 L 26.600,84.390 L 28.400,81.743 L 30.200,78.641 L 32.000,75.251 L 33.800,71.725 L 35.600,68.200 L 37.400,64.801 L 39.200,61.634 L 41.000,58.795 L 42.800,56.364 L 44.600,54.405 L 46.400,52.970 L 48.200,52.094 L 50.000,51.800 L 51.800,52.094 L 53.600,52.970 L 55.400,54.405 L 57.200,56.364 L 59.000,58.795 L 60.800,61.634 L 62.600,64.801 L 64.400,68.200 L 66.200,71.725 L 68.000,75.251 L 69.800,78.641 L 71.600,81.743 L 73.400,84.390 L 75.200,86.400 L 77.000,87.579 L 78.800,87.715 L 80.600,86.585 L 82.400,83.948 L 84.200,79.552 L 86.000,73.128 L 87.800,64.394 L 89.600,53.052 L 91.400,38.790 L 93.200,21.283 L 95.000,0.190'

export const size = { width: 32, height: 32 }
export const contentType = 'image/svg+xml'

export default function Icon() {
  const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="logo-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#22d3ee" />
      <stop offset="100%" stop-color="#0ea5e9" />
    </linearGradient>
  </defs>
  <path
    d="${PATH_DATA}"
    fill="none"
    stroke="url(#logo-gradient)"
    stroke-width="10"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
</svg>`

  return new Response(svg, {
    headers: {
      'Content-Type': contentType,
    },
  })
}
