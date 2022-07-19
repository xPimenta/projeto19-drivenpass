import { prisma } from "../data/db.js";

import { cardsData } from './../services/cardsService.js';

export async function searchByTitleAndUserId(title: string, userId: number) {
  return prisma.cards.findFirst({
    where: {
      title,
      userId,
    },
  });
}

export async function create(card: cardsData) {
  return prisma.cards.create({
    data: card,
  });
}

export async function getCardsUser(userId: number) {
  return prisma.cards.findMany({
    where: {
      userId,
    },
  });
}

export async function getCard(cardId: number) {
  return prisma.cards.findFirst({
    where: {
      id: cardId,
    },
  });
}

export async function deleteCard(cardId: number) {
  return prisma.cards.delete({
    where: {
      id: cardId,
    },
  });
}

