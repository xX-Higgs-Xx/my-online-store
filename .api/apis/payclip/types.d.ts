import type { FromSchema } from 'json-schema-to-ts';
import * as schemas from './schemas';
export type ObtenerDetalleTransaccionMetadataParam = FromSchema<typeof schemas.ObtenerDetalleTransaccion.metadata>;
export type ObtenerDetalleTransaccionResponse200 = FromSchema<typeof schemas.ObtenerDetalleTransaccion.response['200']>;
export type ObtenerTransaccionesResponse200 = FromSchema<typeof schemas.ObtenerTransacciones.response['200']>;
export type ObtenerTransaccionesResponse404 = FromSchema<typeof schemas.ObtenerTransacciones.response['404']>;
export type RealizarPagoBodyParam = FromSchema<typeof schemas.RealizarPago.body>;
export type RealizarPagoResponse200 = FromSchema<typeof schemas.RealizarPago.response['200']>;
export type RealizarPagoResponse400 = FromSchema<typeof schemas.RealizarPago.response['400']>;
