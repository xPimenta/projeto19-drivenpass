import jwt from 'jsonwebtoken';
import { User } from '@prisma/client';
import dotenv from 'dotenv';

import * as passUtils from '../utils/passUtils.js';
import * as userRepository from '../repositories/userRepository.js';

export type userData = Omit<User, 'id' | 'createdAt'>;

export async function create(user: userData){
  const userExists = await userRepository.search('email', user.email);
  if(userExists) throw { type: "conflict", message: "User already exists" };

  const hashedPass = passUtils.encryptPassword(user.password);
  const newUser = await userRepository.create({ ...user, password: hashedPass });

  return newUser;
}

export async function login(user: userData){
  const userExists = await userRepository.search('email', user.email);
  const isValid = passUtils.decryptPassword(user.password, userExists.password);

  if(!userExists || !isValid) throw { type: "unauthorized", message: "Invalid credentials. Try again." };

  const data = { id: userExists.id, email: userExists.email };
  const token = jwt.sign(data, process.env.JWT_SECRET);
  console.log(token)

  return { token };
}

export async function countAll(userId: number){
  return await userRepository.countAll(userId);
}
