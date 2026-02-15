import "dotenv/config";
import prismaPkg from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { Pool } from "pg";

const { PrismaClient } = prismaPkg;

const globalForPrisma = globalThis;

if (!process.env.DATABASE_URL) throw new Error("DATABASE_URL is not defined");

const pool =
  globalForPrisma.pgPool ||
  new Pool({ connectionString: process.env.DATABASE_URL });

if (process.env.NODE_ENV !== "production") globalForPrisma.pgPool = pool;

const adapter = new PrismaPg(pool);
const prismaClient = globalForPrisma.prisma || new PrismaClient({ adapter });

if (process.env.NODE_ENV !== "production")
  globalForPrisma.prisma = prismaClient;

export default prismaClient;
