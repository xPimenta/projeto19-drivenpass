import { DocumentType } from "@prisma/client";
import { prisma } from "../data/db.js";

import { documentData } from "../services/documentsService.js";


export async function searchByTypeAndUserId(type: DocumentType, userId: number) {
  return prisma.documents.findFirst({
    where: {
      type,
      userId,
    },
  });
}

export async function create(documents: documentData) {
  return prisma.documents.create({
    data: documents,
  });
}

export async function getDocumentsUser(userId: number) {
  return prisma.documents.findMany({
    where: {
      userId,
    },
  });
}

export async function getDocument(documentsId: number) {
  return prisma.documents.findFirst({
    where: {
      id: documentsId,
    },
  });
}

export async function deleteDocument(documentsId: number) {
  return prisma.documents.delete({
    where: {
      id: documentsId,
    },
  });
}
