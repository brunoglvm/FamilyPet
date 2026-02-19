import "dotenv/config";
import prisma from "../src/database/prisma.client.js";
import { adotantesData, petsData } from "./seed-data.js";

async function main() {
  if (process.env.SEED_ALLOWED !== "true") {
    throw new Error("Seed bloqueado em ambiente de produção.");
  }

  await prisma.adocao.deleteMany();
  await prisma.adotante.deleteMany();
  await prisma.pet.deleteMany();

  const [maria, joao, ana] = await Promise.all(
    adotantesData.map((data) => prisma.adotante.create({ data })),
  );

  const [luna, bob, thor, nina] = await Promise.all(
    petsData.map((data) => prisma.pet.create({ data })),
  );

  await prisma.adocao.createMany({
    data: [
      {
        pet_id: bob.id,
        adotante_id: joao.id,
        data_adocao: new Date("2025-01-15"),
      },
      {
        pet_id: nina.id,
        adotante_id: ana.id,
        data_adocao: new Date("2024-11-03"),
      },
    ],
  });

  console.log("Seed executado com sucesso.");
}

main()
  .catch((error) => {
    console.error("Erro ao executar seed:", error);
    process.exitCode = 1;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
