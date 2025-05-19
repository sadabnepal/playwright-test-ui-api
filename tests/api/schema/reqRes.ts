import { z } from 'zod';

export const getUserByIdSchema = z.object({
    data: z.object({
        id: z.number(),
        email: z.string(),
        first_name: z.string(),
        last_name: z.string(),
        avatar: z.string().url()
    }),
    support: z.object({
        url: z.string().url(),
        text: z.string()
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