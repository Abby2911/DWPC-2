import mongoose, { connect } from 'mongoose';
import log from '../config/winston';
// Creando la funcion de conexion
export default async function connectWithRetry(mongoUrl) {
  try {
    await mongoose.connect(mongoUrl);
    log.info('✔Conectando a MongoDB');
  } catch (error) {
    log.error(`❌No se logro la conexion a la db❌: ${error.message}`);
    log.error(`Intentando la conexion en 20 segundos`);
    setTimeout(() => connectWithRetry(mongoUrl), 20000);
  }
}
