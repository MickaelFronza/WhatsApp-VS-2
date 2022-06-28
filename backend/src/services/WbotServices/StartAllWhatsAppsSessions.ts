import { startQueueProcess } from "../../queues";
import ListWhatsAppsService from "../WhatsappService/ListWhatsAppsService";
import { StartWhatsAppSession } from "./StartWhatsAppSession";

export const StartAllWhatsAppsSessions = async (): Promise<void> => {
  const whatsapps = await ListWhatsAppsService();
  if (whatsapps.length > 0) {
    const promises: any[] = [];
    whatsapps.forEach(whatsapp => {
      promises.push(StartWhatsAppSession(whatsapp));
    });
    await Promise.all(promises);
    startQueueProcess();
  }
};
