# AutoRent-Front

## Sistema de Gestion - AutoRent

La empresa **AutoRent** ofrece el servicio de alquiler de autos en varias **ciudades** del pais y necesita un sistema que permita gestionar el **alquiler** de diferentes tipos de **vehiculos**, como **sedanes**, **camionetas**, **SUVs** y **vehiculos utilitarios**. Los **clientes** de la empresa pueden ser **propietarios** que ponen sus autos en alquiler, **usuarios** que desean alquilarlos, o **ambos a la vez**.

Los **clientes** (**propietarios** e **inquilinos**) y los **agentes** de **AutoRent** deberan registrarse creando una **cuenta de usuario**. Para ello, deberan ingresar su **correo electronico** (**nombre de usuario**), **nombre**, **apellido**, **numero de identificacion** (**CUIL**), y una **contrasena**.

Los **propietarios** que deseen alquilar sus vehiculos deben acercarse a una **sucursal de AutoRent** con la **documentacion del vehiculo**. Un **agente** verificara la **documentacion** y, si es correcta, registrara el **auto** en el sistema. Cada **auto** incluira los siguientes datos: **patente**, **marca**, **modelo**, **anio**, **tipo**, **precio de alquiler diario**, **tipo de combustible**, **cantidad de km**, **imagenes del vehiculo**. Al completar esta operacion, el **vehiculo** quedara en estado **"Disponible"**.

Del **propietario** se registraran: **nombre**, **apellido**, **CUIL**, **domicilio** y **cuenta bancaria**.

Los **clientes** que buscan alquilar un **auto** podran consultar la lista de **vehiculos disponibles** en el sistema y, si lo desean, realizar una **reserva**. Al **reservar un auto**, el sistema lo cambia a estado **"Reservado"**.

El **cliente** debera realizar un **pago de anticipo** (**20% del monto total de alquiler**) mediante **transferencia bancaria** en las proximas **24 horas** y registrar el **numero** y **fecha de comprobante**. Si el **pago** no se realiza en este plazo, el **auto** vuelve a estado **"Disponible"**.

El **cliente** que realizo una **reserva** debe acercarse a la **sucursal** con el **comprobante de pago del anticipo** y un **documento de identificacion**. El **agente** revisara la **documentacion** y, si es valida, se formaliza el **contrato de alquiler**. El **auto** cambia a estado **"Alquilado"** y el **cliente** paga el **80% restante** del **alquiler**.

Cada dia, el sistema realiza el **cierre de contratos sin deuda**: Verificara los **vehiculos alquilados** cuyo **plazo de contrato** finalizo y sin **pagos pendientes**, y los cambiara a estado **"Disponible"**.

Si un **propietario** desea **retirar un vehiculo de alquiler**, podra hacerlo siempre que el **vehiculo** este en estado **"Disponible"**. El **agente** registrara el **retiro** y el **vehiculo** cambiara a estado **"Baja"**, finalizando su ciclo en **AutoRent**.

De cada **agente de AutoRent** se registrara **nombre**, **apellido**, **CUIL**, y **numero de legajo**.
