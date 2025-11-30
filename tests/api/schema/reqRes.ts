import { z } from 'zod';

export const getUserByIdSchema = z.object({
    data: z.object({
        id: z.number(),
        email: z.string(),
        first_name: z.string(),
        last_name: z.string(),
        avatar: z.url()
    }),
    support: z.object({
        url: z.url(),
        text: z.string()
    }),
    _meta: z.object({
        powered_by: z.string(),
        upgrade_url: z.url(),
        docs_url: z.url(),
        template_gallery: z.url(),
        message: z.string(),
        features: z.array(z.string()),
        upgrade_cta: z.string()
    })
}).strict();


export const createUserSchemaResponse = z.object({
    name: z.string(),
    job: z.string(),
    id: z.string(),
    createdAt: z.string()
}).strict();


export const graphQlResponseSchema = z.object({
    data: z.object({
        characters: z.object({
            info: z.object({
                count: z.number()
            }),
            results: z.array(z.object({
                name: z.string()
            }))
        })
    })
}).strict();