/**
 * Minimal reproduction for vlt peer dependency resolution bug in workspaces.
 *
 * This file uses `z` from @hono/zod-openapi which re-exports it from zod.
 * The code uses Zod 3.x API (z.record with 1 argument).
 *
 * Expected: @hono/zod-openapi's peer dep "zod >= 3.0.0" should resolve
 * to zod@3.25.76 (this workspace's direct dependency).
 *
 * Bug: In a monorepo where another workspace (@repro/docs) brings in
 * @scalar packages with zod@4.x, vlt resolves the peer dep to zod@4.1.x,
 * causing TypeScript errors because Zod 4 requires z.record(keyType, valueType).
 */

import { createRoute, z } from '@hono/zod-openapi'

// This works in Zod 3.x: z.record(valueType)
// This fails in Zod 4.x: requires z.record(keyType, valueType)
const collaboratorsSchema = z.record(z.enum(['read-only', 'read-write']))

// Route definition using the schema
export const route = createRoute({
  method: 'get',
  path: '/test',
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: z.object({
            collaborators: collaboratorsSchema,
          }),
        },
      },
    },
  },
})

// Also test params which use z.object
export const routeWithParams = createRoute({
  method: 'get',
  path: '/test/:id',
  request: {
    params: z.object({
      id: z.string(),
    }),
  },
  responses: {
    200: {
      description: 'Success',
      content: {
        'application/json': {
          schema: z.object({
            id: z.string(),
          }),
        },
      },
    },
  },
})
