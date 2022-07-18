import { Wifi } from "@prisma/client";

import * as passUtils from "../utils/passUtils.js";
import * as wifiRepository from "../repositories/wifiRepository.js";

export type wifiData = Omit<Wifi, 'id' | 'createdAt'>;

export async function create(wifi: wifiData) {
  const { title, userId } = wifi;
  const wifiExists = await wifiRepository.searchByTitleAndUserId(title, userId);

  if (wifiExists)
    throw { type: "WifiAlreadyExists", message: "There is already a wifi registered with this title." };

  const hashedPassword = passUtils.encryptSecurityPass(wifi.password);
  await wifiRepository.create({ ...wifi, password: hashedPassword });
}

export async function getWifisUser(userId: number) {
  const wifis =  await wifiRepository.getWifisUser(userId);
  return passUtils.decryptObjectsPass(wifis);
}