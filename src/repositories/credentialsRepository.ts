import { prisma } from "../data/db.js";

import { credendialData } from "../services/credentialsService.js";

export async function searchByTitleAndUserId(title: string, userId: number) {
  return prisma.credentials.findFirst({
    where: {
      title,
      userId
    }
  });
}

export async function create(credentials: credendialData) {
  return prisma.credentials.create({
    data: credentials,
  });
}

export async function getCredentialsUser(userId: number) {
  return prisma.credentials.findMany({
    where: {
      userId,
    },
  });
}

export async function getCredential(credencialsId: number) {
  return prisma.credentials.findFirst({
    where: {
      id: credencialsId,
    },
  });
}

export async function deleteCredential(credencialsId: number) {
  return prisma.credentials.delete({
    where: {
      id: credencialsId,
    },
  });
}