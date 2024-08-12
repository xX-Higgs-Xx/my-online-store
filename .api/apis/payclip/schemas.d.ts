declare const ObtenerDetalleTransaccion: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly payment_id: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "ID de la transacción";
                };
            };
            readonly required: readonly ["payment_id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly description: "ID del pago";
                };
                readonly amount: {
                    readonly type: "number";
                    readonly format: "double";
                    readonly description: "Monto del pago";
                    readonly minimum: -1.7976931348623157e+308;
                    readonly maximum: 1.7976931348623157e+308;
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const ObtenerTransacciones: {
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly pages: {
                    readonly type: "object";
                    readonly properties: {
                        readonly size: {
                            readonly type: "integer";
                        };
                        readonly number: {
                            readonly type: "integer";
                        };
                        readonly total: {
                            readonly type: "integer";
                        };
                        readonly total_results: {
                            readonly type: "integer";
                        };
                    };
                };
                readonly results: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly id: {
                                readonly type: "string";
                                readonly description: "ID del pago";
                            };
                            readonly amount: {
                                readonly type: "number";
                                readonly format: "double";
                                readonly description: "Monto del pago";
                                readonly minimum: -1.7976931348623157e+308;
                                readonly maximum: 1.7976931348623157e+308;
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly description: "Objeto de error.";
            readonly type: "object";
            readonly properties: {
                readonly error_code: {
                    readonly description: "Código de error";
                    readonly type: "string";
                };
                readonly message: {
                    readonly description: "Mensaje de error.";
                    readonly type: "string";
                };
                readonly detail: {
                    readonly description: "Información detallada del error.";
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const RealizarPago: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly amount: {
                readonly type: "number";
                readonly format: "Float";
                readonly default: 1;
                readonly description: "Monto del pago";
                readonly minimum: -3.402823669209385e+38;
                readonly maximum: 3.402823669209385e+38;
            };
            readonly currency: {
                readonly type: "string";
                readonly default: "MXN";
                readonly description: "Moneda del pago";
            };
            readonly description: {
                readonly type: "string";
                readonly default: "Ejemplo de compra";
                readonly description: "Descripción del pago";
            };
            readonly payment_method: {
                readonly type: "object";
                readonly properties: {
                    readonly token: {
                        readonly type: "string";
                        readonly description: "Token del método de pago generado con el endpoint de Card Token";
                    };
                };
            };
            readonly customer: {
                readonly type: "object";
                readonly properties: {
                    readonly email: {
                        readonly type: "string";
                        readonly default: "correo@ejemplo.com";
                        readonly description: "Correo electrónico del cliente";
                    };
                    readonly phone: {
                        readonly type: "string";
                        readonly default: "5555555555";
                        readonly description: "Teléfono del cliente";
                    };
                };
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly description: "ID del pago";
                };
                readonly amount: {
                    readonly type: "number";
                    readonly format: "double";
                    readonly description: "Monto del pago";
                    readonly minimum: -1.7976931348623157e+308;
                    readonly maximum: 1.7976931348623157e+308;
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly description: "Objeto de error.";
            readonly type: "object";
            readonly properties: {
                readonly error_code: {
                    readonly description: "Código de error";
                    readonly type: "string";
                };
                readonly message: {
                    readonly description: "Mensaje de error.";
                    readonly type: "string";
                };
                readonly detail: {
                    readonly description: "Información detallada del error.";
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
export { ObtenerDetalleTransaccion, ObtenerTransacciones, RealizarPago };
