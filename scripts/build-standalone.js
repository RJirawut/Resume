import { copyFileSync, existsSync, mkdirSync, rmSync } from 'node:fs'
import { dirname, join } from 'node:path'

const files = [
  ['standalone.html', 'dist/index.html'],
  ['src/style.css', 'dist/src/style.css'],
  ['src/standalone-app.js', 'dist/src/standalone-app.js'],
  ['src/assets/profile.png', 'dist/src/assets/profile.png'],
  ['src/assets/psu-emblem.png', 'dist/src/assets/psu-emblem.png'],
  ['src/assets/khonhad-emblem.png', 'dist/src/assets/khonhad-emblem.png'],
  ['src/assets/cert-ml.jpg', 'dist/src/assets/cert-ml.jpg'],
  ['src/assets/cert-flutter.jpg', 'dist/src/assets/cert-flutter.jpg'],
  ['src/assets/cert-scholarship.jpg', 'dist/src/assets/cert-scholarship.jpg'],
  ['src/assets/cert-pride.jpg', 'dist/src/assets/cert-pride.jpg'],
  ['src/assets/cert-smo.jpg', 'dist/src/assets/cert-smo.jpg'],
  ['src/assets/cert-critical-thinking.png', 'dist/src/assets/cert-critical-thinking.png'],
  ['src/assets/cert-sports.jpg', 'dist/src/assets/cert-sports.jpg'],
  ['src/assets/cert-ict-club.jpg', 'dist/src/assets/cert-ict-club.jpg'],
  ['src/assets/cert-factory-quality.jpg', 'dist/src/assets/cert-factory-quality.jpg'],
  ['src/assets/cert-env-quality.jpg', 'dist/src/assets/cert-env-quality.jpg'],
  ['src/assets/cert-pwa-vue.jpg', 'dist/src/assets/cert-pwa-vue.jpg'],
  ['src/assets/cert-ai-illustrator.jpg', 'dist/src/assets/cert-ai-illustrator.jpg'],
  ['src/assets/cert-evolution-computer.jpg', 'dist/src/assets/cert-evolution-computer.jpg'],
  ['src/assets/cert-healthy-body-mind.jpg', 'dist/src/assets/cert-healthy-body-mind.jpg'],
  ['src/assets/cert-computer-hardware.png', 'dist/src/assets/cert-computer-hardware.png'],
  ['src/assets/cert-traffic-volunteer.jpg', 'dist/src/assets/cert-traffic-volunteer.jpg'],
  ['src/assets/cert-english-camp.jpg', 'dist/src/assets/cert-english-camp.jpg'],
  ['src/assets/cert-anti-drug-camp.jpg', 'dist/src/assets/cert-anti-drug-camp.jpg'],
  ['node_modules/vue/dist/vue.global.prod.js', 'dist/node_modules/vue/dist/vue.global.prod.js'],
]

rmSync('dist', { force: true, recursive: true })

for (const [source, target] of files) {
  if (!existsSync(source)) {
    throw new Error(`Missing required file: ${source}`)
  }

  mkdirSync(dirname(target), { recursive: true })
  copyFileSync(source, target)
}

console.log('Built standalone Vue resume site in dist/')
