// Script to check which TypeScript version each @typescript-eslint package is using
import { createRequire } from 'node:module'
import { relative } from 'node:path'

const require = createRequire(import.meta.url)
const rel = (p) => relative(process.cwd(), p)

console.log('=== TypeScript Version Check ===\n')

// Check root typescript
try {
  const rootTsPath = require.resolve('typescript')
  const rootTs = require('typescript')
  console.log('Root TypeScript:')
  console.log(`  Path: ${rel(rootTsPath)}`)
  console.log(`  Version: ${rootTs.version}`)
} catch (e) {
  console.log('Root TypeScript: NOT FOUND')
}

console.log('')

// First resolve typescript-eslint, then resolve its deps from that context
const tseslintPath = require.resolve('typescript-eslint')
const tseslintRequire = createRequire(tseslintPath)
console.log(`typescript-eslint at: ${rel(tseslintPath)}\n`)

// Check typescript-eslint packages from the typescript-eslint context
const packagesToCheck = [
  '@typescript-eslint/parser',
  '@typescript-eslint/eslint-plugin', 
  '@typescript-eslint/typescript-estree',
  '@typescript-eslint/utils',
]

for (const pkg of packagesToCheck) {
  try {
    const pkgPath = tseslintRequire.resolve(pkg)
    const pkgRequire = createRequire(pkgPath)
    const tsPath = pkgRequire.resolve('typescript')
    const ts = pkgRequire('typescript')
    console.log(`${pkg}:`)
    console.log(`  TypeScript version: ${ts.version}`)
    console.log(`  TypeScript path: ${rel(tsPath)}`)
    console.log('')
  } catch (e) {
    console.log(`${pkg}: Error - ${e.message}\n`)
  }
}

// Check nested deps - eslint-plugin -> type-utils
try {
  const pluginPath = tseslintRequire.resolve('@typescript-eslint/eslint-plugin')
  const pluginRequire = createRequire(pluginPath)
  const typeUtilsPath = pluginRequire.resolve('@typescript-eslint/type-utils')
  const typeUtilsRequire = createRequire(typeUtilsPath)
  const tsPath = typeUtilsRequire.resolve('typescript')
  const ts = typeUtilsRequire('typescript')
  console.log('@typescript-eslint/type-utils (from eslint-plugin):')
  console.log(`  TypeScript version: ${ts.version}`)
  console.log(`  TypeScript path: ${rel(tsPath)}`)
  console.log('')
} catch (e) {
  console.log(`@typescript-eslint/type-utils: Error - ${e.message}\n`)
}

console.log('=== Analysis ===')
console.log('All @typescript-eslint packages should use the SAME TypeScript version.')
console.log('The project specifies typescript@5.7.3 as a direct dependency.')
console.log('')
console.log('BUG: If some packages show 5.9.3 while others show 5.7.3,')
console.log('that is the peer dependency resolution bug!')
console.log('')
console.log('This causes ESLint parsing errors like:')
console.log('  - "Cannot read properties of null (reading \'range\')"')
console.log('  - "Cannot use \'in\' operator to search for \'illegalDecorators\' in XX"')
