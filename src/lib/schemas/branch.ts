import { z } from "zod";

/** Schema for a single branch or ATM – validates id, type, name, coordinates, address, hours, services, optional contact */
export const BranchSchema = z.object({
  id: z.number(),
  type: z.enum(["branch", "atm"]),
  name: z.string(),
  lat: z.number(),
  lng: z.number(),
  address: z.string(),
  hours: z.string(),
  services: z.array(z.string()),
  phone: z.string().optional(),
  email: z.string().optional(),
});

/** Response shape for the branches API (mock) */
export const BranchesResponseSchema = z.object({
  branches: z.array(BranchSchema),
});

export type Branch = z.infer<typeof BranchSchema>;
export type BranchesResponse = z.infer<typeof BranchesResponseSchema>;
