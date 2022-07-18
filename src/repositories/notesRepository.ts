import { prisma } from "../data/db.js";
import { notesData } from "../services/notesService.js";

export async function searchByTitleAndUserId(title: string, userId: number) {
  const note = await prisma.notes.findFirst({
    where: {
      title,
      userId,
    },
  });

  return note;
}

export async function create(note: notesData){
  return await prisma.notes.create({
    data: {
      ...note,
    },
  });
}

export async function getAll(userId: number){
  return await prisma.notes.findMany({
    where: {
      userId,
    },
  });
}

export async function getById(id: number){
  return await prisma.notes.findFirst({
    where: {
      id,
    },
  });
}

export async function deleteNote(id: number){
  return await prisma.notes.delete({
    where: {
      id,
    },
  });
}
