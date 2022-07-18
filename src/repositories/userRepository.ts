import { prisma } from "../data/db.js";

import { userData } from "../services/userService.js";

export async function search(param: string, value: string | number) {
  return prisma.user.findFirst({
    where: {
      [param]: value,
    },
  });
}

export async function create(user: userData) {
  return prisma.user.create({
    data: {
      ...user,
    },
  });
}

export async function countAll(userId: number) {
  const countWifis = await prisma.wifi.count({ where: { userId } });
  const countNotes = await prisma.notes.count({ where: { userId } });
  const countCards = await prisma.cards.count({ where: { userId } });
  const countDocuments = await prisma.documents.count({ where: { userId } });
  const countCredentials = await prisma.credentials.count({ where: { userId } });

  const count = {
    wifis: countWifis,
    notes: countNotes,
    cards: countCards,
    documents: countDocuments,
    credentials: countCredentials,
  };

  return count;
}

export async function countAll2(userId: number) {
  let count = {};
  await Promise.all([
    prisma.wifi.count({ where: { userId } }),
    prisma.notes.count({ where: { userId } }),
    prisma.cards.count({ where: { userId } }),
    prisma.documents.count({ where: { userId } }),
    prisma.credentials.count({ where: { userId } }),
  ]).then(([wifis, notes, cards, documents, credentials]) => {
    count = {
      wifis,
      notes,
      cards,
      documents,
      credentials,
    };
  });
  return count;
}